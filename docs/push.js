const fse = require("fs-extra");
const path = require("path");
const download = require("download");
const fs = require("fs");
const { spawn } = require("child_process");

let RepositoriesName = "ChromeAppHeroes";

let readme_img_dir =
  "https://raw.githubusercontent.com/zhaoolee/" +
  RepositoriesName +
  "/master/README/";

// let md_dir = path.join(__dirname, RepositoriesName+"MD");
// 将README.md从 项目名+md文件夹内拷贝到外面,并将图片替换下载到README文件夹
async function cp_readme_md() {
  let origin_readme_file_pathname = path.join(
    __dirname,
    "page",
    "readme-" + "chromeappheroes" + ".md"
  );
  let target_readme_file_pathname = path.join(__dirname, "README" + ".md");
  fse.copySync(origin_readme_file_pathname, target_readme_file_pathname, {
    overwrite: true
  });
  await download_imgs_by_md("README.md");
  await change_img_url("README.md");
}

// 将README.md内的图片下载到README文件夹
async function download_imgs_by_md(file_name) {
  // 获取文件夹名称

  let dir_name = file_name.match(/^(.*).md/)[1];
  let file_content = fs.readFileSync(file_name).toString();
  let img_addr_re = /\!\[.*\]\(.*\)/g;

  let md_img_addr_s = file_content.match(img_addr_re);

  let md_img_addr_s_length = md_img_addr_s.length;
  let img_re = /^!\[(.*)\]\((.*)\)/;

  let ignore_img_list = ["img.shields.io", "www.bilibili.com"];

  for (let i = 0; i < md_img_addr_s_length; i++) {

    let download_img = true;

    for(let t =0 ; t<ignore_img_list.length; t++){
      if (md_img_addr_s[i].indexOf(ignore_img_list[t]) !==-1) {
        download_img = false;
      }
    }

    if (download_img) {
      let img_addr = md_img_addr_s[i].match(img_re)[2];
      // 定义文件名
      let img_addr_list = img_addr.split("/");
      img_name = img_addr_list[img_addr_list.length - 1];
      console.log(
        "===img_addr===>>",
        img_addr,
        "dir_name==>>",
        dir_name,
        "img_name==>>",
        img_name
      );
      fs.writeFileSync(
        path.join(__dirname, dir_name, img_name),
        await download(img_addr)
      );
    }
  }
}

// 更换url
async function change_img_url(file_name) {
  let dir_name = file_name.match(/^(.*).md/)[1];
  let file_content = fs.readFileSync(file_name).toString();
  let img_addr_re = /\!\[.*\]\(.*\)/g;
  let md_img_addr_s = file_content.match(img_addr_re);
  let md_img_addr_s_length = md_img_addr_s.length;
  let img_re = /^!\[(.*)\]\((.*)\)/;
  for (let i = 0; i < md_img_addr_s_length; i++) {
    if (md_img_addr_s[i].indexOf("img.shields.io") === -1) {
      let img_addr = md_img_addr_s[i].match(img_re)[2];
      // 定义文件名
      let img_addr_list = img_addr.split("/");
      img_name = img_addr_list[img_addr_list.length - 1];
      let new_img_addr = readme_img_dir + img_name;
      file_content = file_content.replace(img_addr, new_img_addr);
      fs.writeFileSync(path.join(__dirname, file_name), file_content);
    }
  }
  console.log("===>>", file_content);
}


async function md_to_wordpress(){
  const run_build = spawn("node", ["md_to_wordpress.js"], {
    cwd: path.join(__dirname, "page")
  });

  run_build.stdout.on("data", async data => {
    console.log(`stdout: ${data}`);
  });

  run_build.stderr.on("data", async data => {
    console.log("data::", data);

  });

  run_build.on("close", async code => {
    console.log("程序执行完成");

  });
}



// 进入项目名加MD文件夹,执行md_to_wordpress

async function main() {
  await cp_readme_md();

  await md_to_wordpress();
}

main();
