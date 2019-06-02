import os
import imghdr
import re
import uuid
import requests
import shutil


## 用户名
user_name = "zhaoolee";
## 仓库名
github_repository = "GraphBed";
## 存放图片的文件夹名称
image_folder = "ChromeAppHeroes";

## 设置脚本读取md的根目录
md_dir = "./"

## 设置忽略的目录

ignore_dir_list = [".git"]

## 生成本地路径 /生成url (0为生成本地路径, 1为生成url)
local_or_url = 1

# 设置用户代理头
headers = {
    # 设置用户代理头(为狼披上羊皮)
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
}


# 获取本目录下所有md文件
def get_md_files(md_dir):
    md_files = [];
    for root, dirs, files in sorted(os.walk(md_dir)):
        for file in files:
            # 获取.md结尾的文件
            if(file.endswith(".md")):
                file_path = os.path.join(root, file)
                print(file_path)
                #忽略排除目录
                need_append = 0
                for ignore_dir in ignore_dir_list:
                    if(ignore_dir in file_path.split("/") == True):
                        need_append = 1
                if(need_append == 0):
                    md_files.append(file_path)
    return md_files


# 下载图片
def get_download_info(image_url):
    file_uuid_name = uuid.uuid4().hex
    image_data = requests.get(image_url, headers=headers).content

    tmp_new_image_path_and_name = os.path.join(md_dir, image_folder, file_uuid_name)

    with open(tmp_new_image_path_and_name, "wb+") as f:
        f.write(image_data)

    img_type = imghdr.what(tmp_new_image_path_and_name)

    if(img_type == None):
        img_type = ""
    else:
        img_type = "."+img_type

    new_image_path_and_name = tmp_new_image_path_and_name+img_type
    os.rename(tmp_new_image_path_and_name, new_image_path_and_name)

    # 生成本地路径
    if(local_or_url == 0):
        new_image_url = "./"+tmp_new_image_path_and_name[2:]+img_type
    # 生成url
    if(local_or_url == 1):
        new_image_url = "https://raw.githubusercontent.com/"+ user_name + "/" +github_repository+"/master/"+tmp_new_image_path_and_name[2:]+img_type

    download_info = {
        "image_url": image_url,
        "new_image_path_and_name": new_image_path_and_name,
        "new_image_url": new_image_url
    }
    print(download_info)

    return download_info



# 获取单个md文件所有图片路径并下载本地, 用imghdr判断图片类型, 用uuid生成图片名, 完成图片重命名, 记录图片文件与新图片文件的对应关系
def download_file_images(md_file):
    content = ""
    with open(md_file, "r+") as f:
        md_content = f.read()
        image_urls = re.findall(r"!\[.*?\]\((.*?)\)", md_content)
        download_info_list = []
        for image_url in image_urls:
            # 不爬取svg
            if(image_url.startswith("https://img.shields.io") == False):
                try:
                    download_info = get_download_info(image_url)
                    download_info_list.append(download_info)
                except Exception as e:
                    print(image_url, "无法爬取, 跳过!")
                    pass


        for download_info in download_info_list:
            md_content = md_content.replace(download_info["image_url"], download_info["new_image_url"])

        print("替换完成后::", md_content);

        md_content = md_content

    with open(md_file, "w+") as f:
        f.write(md_content)


def main():
    if(os.path.exists(os.path.join(".", image_folder))):
        shutil.rmtree(os.path.join(".", image_folder))
    # 创建图片文件夹
    os.mkdir(os.path.join(".", image_folder))
    # 获取本目录下所有md文件
    md_files = get_md_files(md_dir)

    for md_file in md_files:
        # 获取单个md文件所有图片路径并下载本地, 用imghdr判断图片类型, 用uuid生成图片名, 完成图片重命名, 记录图片文件与新图片文件的对应关系
        download_file_images(md_file)


if __name__ == "__main__":
    main()
