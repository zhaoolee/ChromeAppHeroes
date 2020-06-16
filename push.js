const fse = require("fs-extra");
const path = require("path");
const download = require("download");
const fs = require("fs");
const { spawn } = require("child_process");

const os = require("os");

let RepositoriesName = "ChromeAppHeroes";

let readme_img_dir =
  "https://raw.githubusercontent.com/zhaoolee/" +
  RepositoriesName +
  "/master/README/";
// md所在的文件夹
let zhaoolee_md_dir = "page";

// readme文件名
let readme_file_name = "readme-chromeappheroes.md";

// 可以跳过的图片地址关键词
let ignore_img_list = ["img.shields.io", "www.bilibili.com"];

// let md_dir = path.join(__dirname, RepositoriesName+"MD");
// 将README.md从 项目名+md文件夹内拷贝到外面,并将图片替换下载到README文件夹
async function cp_readme_md() {
  // 在当前目录生成README文件夹
  // 创建backup文件夹
  if (!fs.existsSync(path.join(__dirname, "README"))) {
    fs.mkdirSync(path.join(__dirname, "README"));
  }

  let origin_readme_file_pathname = path.join(
    __dirname,
    zhaoolee_md_dir,
    readme_file_name
  );

  let target_readme_file_pathname = path.join(__dirname, "README.md");
  await fse.copySync(origin_readme_file_pathname, target_readme_file_pathname, {
    overwrite: true
  });

  await download_imgs_by_md("README.md");
  await change_img_url("README.md");
}

// 将README.md内的图片下载到README文件夹
async function download_imgs_by_md(file_name) {
  console.log("=download_imgs_by_md===", file_name);
  // 获取文件夹名称

  let dir_name = file_name.match(/^(.*).md/)[1];
  let file_content = fs.readFileSync(file_name).toString();

  console.log("===>>>fc===>>>", file_content);
  let img_addr_re = /^https?:\/\/(.+\/)+.+(\.(gif|GIF|png|PNG|jpg|JPG|jpeg|JPEG))$/g;

  img_addr_re = /https:\/\/.+?(\.jpg|\.JPG|\.jpeg|\.JPEG|\.gif|\.GIF|\.png|\.PNG)/g;

  let md_img_addr_s = file_content.match(img_addr_re);

  console.log(
    "===md_img_addr_smd_img_addr_smd_img_addr_s===>>>",
    md_img_addr_s
  );

  let md_img_addr_s_length = (md_img_addr_s ? md_img_addr_s : []).length;
  let img_re = /^!\[(.*)\]\((.*)\)/;

  console.log("===length===>>", md_img_addr_s_length);

  for (let i = 0; i < md_img_addr_s_length; i++) {
    let download_img = true;

    for (let t = 0; t < ignore_img_list.length; t++) {
      if (md_img_addr_s[i].indexOf(ignore_img_list[t]) !== -1) {
        download_img = false;
      }
    }

    console.log("~~~download_img::::", download_img);

    if (download_img) {
      let img_addr = md_img_addr_s[i];
      console.log("img_addr img_addr img_addr img_addr==>>", img_addr);
      // 定义文件名
      let img_addr_list = img_addr.split("/");
      console.log(
        "img_addr_list img_addr_list img_addr_list img_addr_list==>>",
        img_addr_list
      );
      if (img_addr_list) {
        img_name = img_addr_list[img_addr_list.length - 1];

        if (!fs.existsSync(path.join(__dirname, dir_name, img_name))) {
          console.log("正在下载>>>", img_addr);
          fs.writeFileSync(
            path.join(__dirname, dir_name, img_name),
            await download(encodeURI(img_addr))
          );
        }
      }
    }
  }
}

// 更换url
async function change_img_url(file_name) {
  let dir_name = file_name.match(/^(.*).md/)[1];
  let file_content = fs.readFileSync(file_name).toString();

  console.log("===>>>fc===>>>", file_content);
  let img_addr_re = /^https?:\/\/(.+\/)+.+(\.(gif|GIF|png|PNG|jpg|JPG|jpeg|JPEG))$/g;

  img_addr_re = /https:\/\/.+?(\.jpg|\.JPG|\.jpeg|\.JPEG|\.gif|\.GIF|\.png|\.PNG)/g;

  let md_img_addr_s = file_content.match(img_addr_re);

  if (md_img_addr_s !== null) {
    let md_img_addr_s_length = md_img_addr_s.length;
    let img_re = /^!\[(.*)\]\((.*)\)/;

    for (let i = 0; i < md_img_addr_s_length; i++) {
      let download_img = true;

      for (let t = 0; t < ignore_img_list.length; t++) {
        if (md_img_addr_s[i].indexOf(ignore_img_list[t]) !== -1) {
          download_img = false;
        }
      }

      if (download_img) {
        let img_addr = md_img_addr_s[i];
        // 定义文件名
        let img_addr_list = img_addr.split("/");
        img_name = img_addr_list[img_addr_list.length - 1];
        let new_img_addr = readme_img_dir + img_name;
        file_content = file_content.replace(img_addr, new_img_addr);
        fs.writeFileSync(path.join(__dirname, file_name), file_content);
      }
    }
  }
}

async function md_to_wordpress() {
  const run_build = spawn("node", ["md_to_wordpress.js"], {
    cwd: path.join(__dirname, zhaoolee_md_dir)
  });

  run_build.stdout.on("data", async data => {
    console.log(`stdout: ${data}`);
  });

  run_build.stderr.on("data", async data => {
    console.log("data::", String(data));
  });

  run_build.on("close", async code => {
    console.log("程序执行完成");
  });
}

async function create_index() {
  return new Promise((resolve, reject) => {
    const run_build = spawn("node", ["create_index.js"], {
      cwd: path.join(__dirname, zhaoolee_md_dir)
    });

    run_build.stdout.on("data", async data => {
      console.log(`stdout: ${data}`);
    });

    run_build.stderr.on("data", async data => {
      console.log("data::", String(data));
    });

    run_build.on("close", async code => {
      console.log("程序执行完成");
      resolve();
    });
  });
}

// 进入项目名加MD文件夹,执行md_to_wordpress

async function main() {
  await create_index();
  await cp_readme_md();
  await md_to_wordpress();
}

main();
