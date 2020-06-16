const Rsync = require("rsync");

const path = require("path");

const chmodr = require('chmodr');

const fs = require("fs");

const fse = require("fs-extra");

// 项目文件夹名
const main_dir_name = "ChromeAppHeroes";

// markdown文件夹名
const md_dir_name = "page";

// 需要排除的md文件

const exclude_md_files = [];

// 自定义
const target_url =
  "https://www.v2fy.com/asset/0i/" + main_dir_name + "/" + md_dir_name + "/";

console.log("target_url::", target_url);
const target_path = "/usr/share/nginx/v2fy.com/asset/0i";

// 将本目录同步服务器
async function update_data() {
  await new Promise((resolve, reject) => {
    // Build the command
    var rsync = new Rsync()
      .shell("ssh")
      .flags({
        a: true,
        z: true,
        v: true
      })
      .delete()
      .progress()
      .compress()
      .exclude([".*/", "up.js"])
      .output(
        function(data) {
          // do things like parse progress
          console.log("=传输数据=>>", data.toString());
        },
        function(data) {
          // do things like parse error output
          console.log("=数据传输报错=>>", data.toString());
        }
      )
      .source(path.join(__dirname))
      .destination("root@v2fy.com:" + target_path);

    // Execute the command
    rsync.execute(function(error, code, cmd) {
      console.log("error", error);
      console.log("code", code);
      console.log("cmd", cmd);
      resolve();
    });
  }).then(() => {});
}

// 获取md文件

function get_md_file_list() {
  // 读取当前当前目录下的.md文件
  let root = "./";
  root = path.join(__dirname, md_dir_name);
  console.log(root);
  let all_files = fs.readdirSync(root);
  let all_md_files = [];

  // 获取md文件列表
  all_files.map((file_name, file_index) => {
    if (file_name.endsWith(".md")) {
      // md文件不包含在排除列表中
      if (exclude_md_files.indexOf(file_name) === -1) {
        all_md_files.push(file_name);
      }
    }
  });
  return all_md_files;
}

// 将md文件内容替换为https内容
function local_file_href_2_https_href(md_file_name) {

  console.log("分析md==>>", md_file_name);
  const whole_md_file_path = path.join(__dirname, md_dir_name, md_file_name);

  let file_content = fs.readFileSync(whole_md_file_path).toString();
  let img_addr_re = /\!\[.*\]\(.*\)/g;

  let md_img_addr_list = file_content.match(img_addr_re);

  if(md_img_addr_list === null){
    md_img_addr_list = []

  }

  for (let img_index = 0; img_index < md_img_addr_list.length; img_index++) {
    let tmp_md_img_addr = md_img_addr_list[img_index];

    let img_addr = tmp_md_img_addr.match(/\((.*)\)/)[1];

    let img_desc = tmp_md_img_addr.match(/\[(.*)\]/)[1];

    if (img_addr.indexOf("http") !== 0) {
      let new_img_addr = target_url + img_addr;

      new_tmp_md_img_addr = "![" + img_desc + "](" + new_img_addr + ")";

      file_content = file_content.replace(tmp_md_img_addr, new_tmp_md_img_addr);

      console.log("准备替换==>", tmp_md_img_addr, "为==>>", new_tmp_md_img_addr)
    }else{
      console.log("略过==>>", img_addr);


    }
  }

  console.log(file_content);

  fs.writeFileSync(whole_md_file_path, file_content, {encoding: "utf8"})

  // file_content = file_content.replace(/\!\[.*\]\(.*\)/g, target_url+'$1');

  // console.log(md_img_addr_list, "--->>", img_addr);
}

// 将Markdown文件中本地图片链接替换为网络图片链接
async function local_href_2_https_href() {
  let md_file_list = get_md_file_list();

  console.log("md_file_list==>>", md_file_list);
  // md_file_list = ["kr-000046.md"];


  for (let i = 0; i < md_file_list.length; i++) {
    console.log("=读取=>>", md_file_list[i]);
    local_file_href_2_https_href(md_file_list[i]);
  }
}

async function md_and_img_chmodr(path){
  await new Promise((resolve, reject)=>{
    chmodr(path, 0o777, (err) => {
      if (err) {
        console.log('Failed to execute chmod', err);
      } else {
        console.log('Success');
        resolve();
      }
    });
  })


}


async function main() {

  // 改权限

  await md_and_img_chmodr(path.join(__dirname, md_dir_name));
  

  // 先同步数据到服务端
  await update_data();

  // console.log("执行完成")

  await local_href_2_https_href();
}

main();
