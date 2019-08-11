import os
import requests
from lxml import etree
import time


# 设置用户代理头
headers = {
    # 设置用户代理头(为狼披上羊皮)
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
}


# 保存图片
def saveImage(response_data):
    try:
        os.makedirs("./bing_images")
    except Exception as e:
        pass

    image_url = response_data["image_url"]
    print("图片下载地址::", image_url)
    image_path = "./bing_images/" + response_data["image_name"]

    # 如果文件已经存在,则免爬取
    if(os.path.exists(image_path)):
        print(image_path, "免爬取!")
        return True
    else:
        try:
            # 获取图片数据
            image_data = requests.get(image_url, headers=headers).content
            with open(image_path, "wb+") as f:
                print("图片已经保存到::", image_path)
                f.write(image_data)
                time.sleep(2)

        except Exception as e:
            print(e)
            pass

        return True


# 获取所有网页信息
def getAllWebPageInfo(page_number):
    page_number = int(getPageNumber())
    for i in range(1, page_number+1):
        requests.get("https://bing.ioliu.cn/?p="+str(i), headers=headers).content
        web_page_info_content = requests.get("https://bing.ioliu.cn/?p="+str(i), headers=headers).content
        data_etree = etree.HTML(web_page_info_content)
        image_items_info = data_etree.xpath('/html/body/div[@class="container"]/div')
        after_image_items_info = []
        for image_item_info in image_items_info:
            image_href = image_item_info.xpath('div/a/@href')[0]
            print("image_href==>", image_href)
            # /photo/CumulusCaribbean_ZH-CN4884493707?force=home_1
            # 处理特殊情况
            # /photo/th?id=OHR.OldTownTallinn_ZH-CN4833535739_1920x1080.jpg&rf=NorthMale?force=home_1
            if(image_href.startswith("/photo/th?id")):
                print("特殊处理前:", image_href)
                image_href = "/photo/"+image_href.split("?")[1].split("&")[0].split("=")[1].split(".")[1][0:-10]+"?force=home_1"
                print("特殊处理后:", image_href)
            desc_name = image_href.split("?")[0].split("/")[-1]
            image_url = "https://bing.ioliu.cn"+image_href.split("?")[0]+"?force=download"
            image_name = image_item_info.xpath('div[@class="card progressive"]/div[@class="description"]/p[@class="calendar"]/em/text()')[0]+"-"+desc_name+".jpg"
            after_image_items_info.append({"image_url": image_url, "image_name": image_name})

        for image_item in after_image_items_info:
            saveImage(image_item)


# 获取总页数
def getPageNumber():
    bing_content = requests.get("https://bing.ioliu.cn/", headers=headers).content
    # 使用etree进行格式化
    data_etree = etree.HTML(bing_content)
    # 获取页数
    page_info = data_etree.xpath('/html/body/div[@class="page"]/span/text()')[0]
    page_number = page_info.split(" ")[-1]
    return page_number


def main():
    page_number = getPageNumber()
    getAllWebPageInfo(1)


if __name__ == '__main__':
    main()