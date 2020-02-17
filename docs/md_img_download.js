const fs = require('fs-extra');
const path = require('path');
const download = require('download');


// 更换url


async function change_img_url(file_name){



  let dir_name = file_name.match(/^(.*).md/)[1];


  let file_content = fs.readFileSync(file_name).toString();

  let img_addr_re = /\!\[.*\]\(.*\)/g;


  let md_img_addr_s = file_content.match(img_addr_re);

  let md_img_addr_s_length = md_img_addr_s.length;
  let img_re = /^!\[(.*)\]\((.*)\)/
  for(let i = 0 ; i< md_img_addr_s_length; i++){

    let img_addr = md_img_addr_s[i].match(img_re)[2];


    // 定义文件名
    let img_addr_list = img_addr.split("/");
    img_name = img_addr_list[img_addr_list.length-1];


    let new_img_addr = "https://v2fy.com/asset/"+dir_name+"/"+img_name;

    file_content = file_content.replace(img_addr, new_img_addr);

    fs.writeFileSync(path.join(__dirname, file_name), file_content);

  }


  console.log("===>>", file_content);


}



// 读取md包含的图片, 并将图片下载到对应文件夹
async function download_imgs_by_md (file_name){
  // 获取文件夹名称

  let dir_name = file_name.match(/^(.*).md/)[1];




  let file_content = fs.readFileSync(file_name).toString();

  let img_addr_re = /\!\[.*\]\(.*\)/g;


  let md_img_addr_s = file_content.match(img_addr_re);

  let md_img_addr_s_length = 0;
  if(md_img_addr_s instanceof Array){
    md_img_addr_s_length = md_img_addr_s.length;
  }
  
  let img_re = /^!\[(.*)\]\((.*)\)/
  for(let i = 0 ; i< md_img_addr_s_length; i++){

    let img_addr = md_img_addr_s[i].match(img_re)[2];


    // 定义文件名
    let img_addr_list = img_addr.split("/");
    img_name = img_addr_list[img_addr_list.length-1];
    console.log("===img_addr===>>", img_addr, "dir_name==>>", dir_name, "img_name==>>", img_name);



    fs.writeFileSync(path.join(__dirname, dir_name, img_name), await download(img_addr));
  
    

  }
}



// 根据md文件获取创建文件夹
async function create_dir(file_name){
  let file_name_re = /^(.*)\.md$/
  let dir_name = file_name.match(file_name_re)[1]
  if (!fs.existsSync(dir_name)) {
    fs.mkdirSync(dir_name);
  }
}


// 备份文件

async function backup_file(file_name){
  if (!fs.existsSync(path.join(__dirname, "backup_md", file_name))) {
    fs.writeFileSync(path.join(__dirname, "backup_md", file_name), fs.readFileSync(path.join(__dirname, file_name)));
  }

}


async function init(){

  // 读取当前当前目录下的.md文件
  let root = "./"

  root = __dirname;

  console.log(root);

  let all_files = fs.readdirSync(root);
  let all_md_files = [];

  // 排除列表
  exclude_md_files = [];
  // 获取md文件列表
  all_files.map((file_name, file_index)=>{
    if(file_name.endsWith(".md")){
      // md文件不包含在排除列表中
      if(exclude_md_files.indexOf(file_name) === -1){
        all_md_files.push(file_name);
      }

    }
  })
  console.log(all_md_files);


  let all_md_files_length = all_md_files.length;


  // 创建backup_md文件夹
  if (!fs.existsSync(path.join(__dirname, "backup_md"))) {
    fs.mkdirSync(path.join(__dirname, "backup_md"));
  }




  // 对每个md文件进行操作
  for(let i = 0; i< all_md_files_length; i++){
    // 为文件做备份
    await backup_file(all_md_files[i]);


    // 创建文件夹
    await create_dir(all_md_files[i]);

    //  下载图片
    try{
      await download_imgs_by_md(all_md_files[i]);
      await change_img_url(all_md_files[i]);
    }catch(e){

      console.log(e);

    }

    // 更换url


    



    


  }








}


init();