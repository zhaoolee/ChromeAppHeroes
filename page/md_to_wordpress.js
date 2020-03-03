const axios = require("axios");
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const showdown  = require('showdown');
// 1. 获取并存储wordpress授权码
const {user_name_password} = require('./up.js');

async function get_wordpress_token() {
  let wordpress_token = "";

  let up = {
    username: "",
    password: ""
  }

  up = user_name_password(); 

  wordpress_token = await axios({
    method: "post",
    url: "https://www.v2fy.com/wp-json/jwt-auth/v1/token",
    data: up
  }).then(res => {
    return new Promise((resolve, reject) => {
      let token = res.data.token;
      resolve(token);
    });
  });

  return wordpress_token;
}

// 2. 获取wordpress已有文章路径与id字典

async function get_md_filename_id_dic() {
  let md_filename_id_dic = {};

  let full_md_filename_content = [];

  // 获取总页码数量
  let x_wp_totalpages = await axios({
    method: "get",
    url: "https://www.v2fy.com/wp-json/wp/v2/posts?page=1"
  }).then(res => {
    return new Promise((resolve, reject) => {
      resolve(parseInt(res.headers["x-wp-totalpages"]));
    });
  });

  console.log("总页码数==", x_wp_totalpages);

  for (let i = 1; i <= x_wp_totalpages; i++) {
    await axios({
      method: "get",
      url: "https://www.v2fy.com/wp-json/wp/v2/posts?page=" + i
    }).then(res => {
      let res_data = res.data;

      let res_data_length = res_data.length;

      console.log("第" + i + "页的数量::", res_data_length);

      for (
        let res_data_index = 0;
        res_data_index < res_data_length;
        res_data_index++
      ) {
        full_md_filename_content.push(res_data[res_data_index]);
      }
    });
  }

  let full_md_filename_content_length = full_md_filename_content.length;

  for (let n = 0; n < full_md_filename_content_length; n++) {
    let filename_list = full_md_filename_content[n]["link"].split("/");

    let filename = "";

    for (let i = 0; i < filename_list.length; i++) {
      if (filename_list[i] === "p") {
        filename = filename_list[i + 1] + ".md";
      }
    }

    md_filename_id_dic[filename] = full_md_filename_content[n]["id"];
  }


  return md_filename_id_dic;
}

// 3. 获取当前目录下的.md文件路径

async function get_all_md_file_pathname() {
  let all_md_file_pathname = [];

  // 读取当前当前目录下的.md文件

  let root = __dirname;

  let all_files = fs.readdirSync(root);
  let all_md_files = [];

  // 排除列表
  exclude_md_files = [];
  // 获取md文件列表
  all_files.map((file_name, file_index) => {
    if (file_name.endsWith(".md")) {
      // md文件不包含在排除列表中
      if (exclude_md_files.indexOf(file_name) === -1) {
        all_md_files.push(path.join(__dirname, file_name));
      } else {
        // 单独处理README.md
      }
    }
  });

  all_md_file_pathname = all_md_files;

  return all_md_file_pathname;
}

// 4. 读取单个.md文件, 记录文件的文件名和标题和内容

async function get_md_file_name_title_content(md_file_pathname) {
  let md_file_name_title_content = {
    md_file_name: "",
    title: "",
    content: ""
  };

  let content =  String(fse.readFileSync(md_file_pathname)); 

  let title = await get_top_info(md_file_pathname, "title");

  let md_file_name_arr = md_file_pathname.split("/");

  let md_file_name  = md_file_name_arr[md_file_name_arr.length-1];


  md_file_name_title_content = {
    md_file_name: md_file_name,
    title: title,
    content: content
  }


  return md_file_name_title_content;
}

// 4. 将.md文件的内容上传到wordpress

async function sync_md_content_to_wordpress(wordpress_token, md_filename_id_dic, all_md_file_pathname_i, md_file_name_title_content) {

  // 查询文章是否存在


  let id = post_get_id(md_filename_id_dic, md_file_name_title_content);



  console.log("====wordpres文章id::", id);


if(id === ""){

  // 如果不存在则创建文章
  await create_new_post(wordpress_token, md_file_name_title_content);

  
}





  // 如果存在则更新文章

  if(id !== ""){
    md_file_name_title_content["id"]  = id;
    await update_post(wordpress_token, md_file_name_title_content);
  }


}

// 更新文章

async function update_post(wordpress_token, md_file_name_title_content){
  let title = md_file_name_title_content["title"];
  let content = md_file_name_title_content["content"];
  let id = md_file_name_title_content["id"];


  let converter = new showdown.Converter(),

  html_content = converter.makeHtml(content);

  let data = {
    // "title" and "content" are the only required properties
    id: id,
    title: title,
    content: html_content,
    // is not specified
    status: 'publish'
  };

  let res = await axios({
    method: 'post',
    url: 'https://www.v2fy.com/wp-json/wp/v2/posts/'+id,
    headers: {
      'Authorization': 'Bearer '+wordpress_token
    },
    data:data
  }).then((res)=>{
    return new Promise((resolve, reject)=>{
      resolve(res);
    })
  })



} 


// 创建文章


async function create_new_post(wordpress_token, md_file_name_title_content){

  let first_title = md_file_name_title_content["md_file_name"].replace(".md", "")

  let title = first_title;
  let content = md_file_name_title_content["content"];
  let res = await axios({
    method: 'post',
    url: 'https://www.v2fy.com/wp-json/wp/v2/posts',
    headers: {
      'Authorization': 'Bearer '+wordpress_token
    },
    data:{
        // "title" and "content" are the only required properties
        title: title,
        content: content,
        // is not specified
        status: 'publish'
    }
  }).then((res)=>{

    return new Promise((resolve, reject)=>{
      resolve(res);
    })
  })



  let id = res["data"]["id"];


  md_file_name_title_content["id"] = id;

  update_post(wordpress_token, md_file_name_title_content);

}


// 查询文章是否已经存在, 如果存在则返回id, 如果不存在则返回空字符串

function post_get_id(md_filename_id_dic, md_file_name_title_content){



  
  let md_file_name = md_file_name_title_content["md_file_name"];

  let id = md_filename_id_dic[md_file_name];


  if(typeof(id) === "undefined"){
    id = "";
  }




  return id;



}



// 获取头部信息

async function get_top_info(md_file_pathname, key){

  let content = String(fse.readFileSync(md_file_pathname));
  // console.log("content==>>",content);
  let all_content_line = content.split("\n");
  // console.log("all_content_line::", all_content_line);
  let all_content_line_length = all_content_line.length;

  // 记录分割线行号的数组
  let line_arr = [];

  for(let i=0; i<all_content_line_length; i++){
    let line_re = /[-]{3,}/
    

    if(line_re.test(all_content_line[i])){
      // console.log("+acl++>>", i);
      line_arr.push(i);
    }
    
  }


  // 顶部信息

  for(let i=line_arr[0]; i<line_arr[1]; i++){
    // 去除行左右两边空格
    let tmp_line_info = all_content_line[i].trim();
    let value = "";
    if(tmp_line_info.indexOf(key) === 0){

      // console.log("tmp_line_info++++>>", tmp_line_info);

      tmp_line_info = tmp_line_info.replace(key, "");
      tmp_line_info = tmp_line_info.replace(":", "");
      tmp_line_info = tmp_line_info.trim();
      value = tmp_line_info;
      return value;
    }
  }
}


async function main() {
  // 获取token
  let wordpress_token = await get_wordpress_token();


  // 获取md名与id的字典
  let md_filename_id_dic = await get_md_filename_id_dic()

  // 获取当前目录下md文件
  let all_md_file_pathname = await get_all_md_file_pathname();
  let all_md_file_pathname_length = all_md_file_pathname.length;
 
  for(let i = 0; i<all_md_file_pathname_length; i++){

    // 获取md文件信息
    let md_file_name_title_content = await get_md_file_name_title_content(all_md_file_pathname[i]);



    // 将文件信息注入wordpress
    await sync_md_content_to_wordpress(wordpress_token, md_filename_id_dic, all_md_file_pathname[i], md_file_name_title_content);

  }


  




}

main();
