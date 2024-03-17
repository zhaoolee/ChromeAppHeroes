const request = require("request");
const fs = require("fs-extra");
const path = require("path");

const passList = ["https://img.shields.io/"];

let source_markdown = path.join("./", "docs", "README.md");

let tmp_markdown_info =  fs.readFileSync(source_markdown, 'utf8');


// 如果README文件夹不存在，则创建README文件夹
if (fs.existsSync(path.join("./", "README")) === false) {
  fs.mkdirSync(path.join("./", "README"));
}

if (
  fs.existsSync(
    path.join("./", "README", "source_img_url_to_new_img_url.json")
  ) === false
) {
  fs.writeFileSync(
    path.join("./", "README", "source_img_url_to_new_img_url.json"),
    "{}"
  );
}

let source_img_url_to_new_img_url = JSON.parse(
  String(
    fs.readFileSync(
      path.join("./", "README", "source_img_url_to_new_img_url.json")
    )
  )
);

function checkImageNeedPass(img_url) {
  let result = false;
  for (let i = 0; i < passList.length; i++) {
    if (img_url.indexOf(passList[i]) === 0) {
      result = true;
      break;
    }
  }
  return result;
}

// 读取用户输入
async function readline_sync() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readline.question(``, (data) => {
      readline.close();
      resolve(data);
    });
  });
}

async function get_github_username_repositories_name() {
  // 查看.git文件夹是否存在

  let exist = fs.existsSync(path.join("./", ".git", "config"));

  // 如果.git存在则读取username和repositories_name

  let username = "";

  let repositories_name = "";

  let url = "";

  if (exist) {
    let config_content = String(
      fs.readFileSync(path.join("./", ".git", "config"))
    );

    let re_n_t = /\n|\t/;
    let config_content_list = config_content.split(re_n_t);

    for (
      let i = 0, config_content_list_length = config_content_list.length;
      i < config_content_list_length;
      i++
    ) {
      if (config_content_list[i].indexOf("url") === 0) {
        url = config_content_list[i].split("url = ")[1];

        url = url.split(".git")[0];

        let url_info = url.split("/");
        url_info.reverse();
        username = url_info[1];
        repositories_name = url_info[0];
      }
    }
  }

  // 如果.git不存在则要求输入username和repositories_name

  if (exist === false) {
    console.log("请输入github用户名:");
    username = await readline_sync();

    console.log("请输入仓库名:");
    repositories_name = await readline_sync();
  }

  console.log(username, repositories_name);

  return new Promise((resolve, reject) => {
    resolve({ username: username, repositories_name: repositories_name });
  });
}

function get_img_url_list_in_md(md_path) {
  const md_content = String(fs.readFileSync(md_path));
  re_md_img = /\!\[(.*)\]\((.*)\)/g;
  let md_img_list = md_content.match(re_md_img);
  console.log(md_img_list);
  let img_url_list = [];
  for (let i = 0; i < md_img_list.length; i++) {
    img_url = md_img_list[i].match(/(.*)\((.*)\)/)[2];
    img_url_list.push(img_url);
  }

  return img_url_list;
}

// 创建随机数函数
//  随机产生字符串
function randomString(e) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz012345678",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}

function download_img_to_readme_dir(img_url, pre_image_url) {
  let new_img_url = "";
  return new Promise((resolve, reject) => {
    // 如果以http开头, 且不在跳过列表里, 则进行下载

    if (img_url.indexOf("http") === 0) {
      try {
        let img_url_info = img_url.split(".");
        img_url_info.reverse();
        let ext = img_url_info[0];
        let new_img_name = Date.now() + randomString(8) + "." + ext;
        request
          .get(img_url)
          .pipe(fs.createWriteStream(path.join("./", "README", new_img_name)))
          .on("close", function (err) {
            new_img_url = pre_image_url + new_img_name;

            resolve(new_img_url);
          });
      } catch (e) {
        console.log(e);
        new_img_url = img_url;
        resolve(new_img_url);
      }
    }
    // 如果不以http开头,则是本地图片,进行拷贝即可
    else {
      let img_url_info = img_url.split(".");
      img_url_info.reverse();
      let ext = img_url_info[0];
      let new_img_name = Date.now() + randomString(8) + "." + ext;
      fs.createReadStream(img_url)
        .pipe(fs.createWriteStream(path.join("./", "README", new_img_name)))
        .on("close", function (err) {
          new_img_url = pre_image_url + new_img_name;
          resolve(new_img_url);
        });
    }
  });
}



function replace_readme_info(src_text, dest_text) {

  let re_src_text = new RegExp(src_text, "g");
  tmp_markdown_info = tmp_markdown_info.replace(re_src_text, dest_text);

}

function save_readme_info() {
  fs.writeFileSync(path.join("./", "README.md"), tmp_markdown_info);
}

function record_source_img_url_to_new_img_url(source_img_url, new_img_url) {
  source_img_url_to_new_img_url[source_img_url] = new_img_url;
}

// 判断图片是否已经下载

function check_img_is_download(source_img_url) {
  let result = false;
  if (source_img_url_to_new_img_url[source_img_url]) {
    // 判断图片是否在README文件夹, 如果在则返回true
    if (
      fs.existsSync(
        path.join(
          "./",
          "README",
          source_img_url_to_new_img_url[source_img_url].split("/").reverse()[0]
        )
      )
    ) {
      result = true;
    }
  }
  return result;
}

async function main() {
  console.log("process.cwd():" + process.cwd());

  // 获取仓库的用户名和仓库名

  let { username, repositories_name } =
    await get_github_username_repositories_name();

  console.log(username, repositories_name);

  // 拼接README图片前缀
  let pre_image_url =
    "https://raw.githubusercontent.com/" +
    username +
    "/" +
    repositories_name +
    "/master/README/";
  // 获取README.md里面的所有图片地址列表
  let img_url_list = get_img_url_list_in_md(source_markdown);

  for (let i = 0; i < img_url_list.length; i++) {
    console.log("正在处理第" + i + "张图片, 图片总数为" + img_url_list.length);
    if (img_url_list[i].indexOf(pre_image_url) === -1) {
      if (checkImageNeedPass(img_url_list[i]) === false) {
        if (check_img_is_download(img_url_list[i]) === false) {
          // 如果图片没有下载，则进行下载
          let new_img_url = await download_img_to_readme_dir(
            img_url_list[i],
            pre_image_url
          );

          console.log("将==>", img_url_list[i], "替换为==>", new_img_url);
          // 记录图片地址转换
          record_source_img_url_to_new_img_url(img_url_list[i], new_img_url);
          // 保持图片地址转换记录
          fs.writeFileSync(
            path.join("./", "README", "source_img_url_to_new_img_url.json"),
            JSON.stringify(source_img_url_to_new_img_url)
          );
        }
      }
    }
  }


  const source_img_url_to_new_img_url_keys = Object.keys(source_img_url_to_new_img_url)
  for (let i = 0; i < source_img_url_to_new_img_url_keys.length; i++) {
    // 替换README.md内图片地址为github地址
    replace_readme_info(source_img_url_to_new_img_url_keys[i], source_img_url_to_new_img_url[source_img_url_to_new_img_url_keys[i]]);
  }
  save_readme_info()
}

main();
