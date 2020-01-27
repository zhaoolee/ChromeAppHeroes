// ==UserScript==
// @name           Picviewer CE+
// @name:zh-CN         Picviewer CE+
// @name:zh-TW         Picviewer CE+
// @author         NLF && ywzhaiqi && hoothin
// @description    Powerful picture viewing tool online, which can popup/scale/rotate/batch save pictures automatically
// @description:zh-CN    在线看图工具，支持图片翻转、旋转、缩放、弹出大图、批量保存
// @description:zh-TW    線上看圖工具，支援圖片翻轉、旋轉、縮放、彈出大圖、批量儲存
// @version        2020.1.17.1
// @created        2011-6-15
// @namespace      http://userscripts.org/users/NLF
// @homepage       http://hoothin.com
// @connect       www.google.com
// @connect       www.google.com.hk
// @connect       www.google.co.jp
// @connect       ipv4.google.com
// @connect       image.baidu.com
// @connect       www.tineye.com
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_addStyle
// @grant          GM_openInTab
// @grant          GM_setClipboard
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// @grant          unsafeWindow
// @require        https://greasyfork.org/scripts/6158-gm-config-cn/code/GM_config%20CN.js?version=23710
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=rixixi@sina.com&item_name=Greasy+Fork+donation
// @contributionAmount 1
// @require      https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js
// @run-at         document-end
// @include       http://*
// @include       https://*
// @exclude       http://www.toodledo.com/tasks/*
// @exclude       http*://maps.google.com*/*
// @exclude       *://www.google.*/_/chrome/newtab*
// ==/UserScript==

;(function(topObject,window,document,unsafeWindow){
    'use strict';

    var lang = navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
    var i18nData={};
    switch (lang){
        case "zh-CN":
            i18nData={
                share:"分享",
                loadAll:"加载更多",
                loadedAll:"加载完毕",
                loading:"正在加载",
                loadAllTip:"加载下一页的图片",
                fiddle:"折腾",
                fiddleTip:"弹出图片进行复杂操作",
                collect:"收藏",
                collected:"已收藏",
                exitCollection:"退出收藏",
                exitCollectionTip:"点击退出收藏模式",
                noCollectionYet:"你还木有收藏任何图片",
                collectDetail:"描述",
                collectDetailTip:"给收藏的图片添加一些描述吧",
                playSlide:"播放幻灯片",
                slideGap:"间隔(s)",
                slideGapTip:"间隔时间，单位(秒)",
                slideBack:"后退",
                slideBackTip:"从后往前播放",
                slideWait:"等待图片读取",
                slideWaitTip:"从每张图片完全读取完成后才开始倒计时",
                slideSkipError:"跳过错误图片",
                slideSkipErrorTip:"快速跳过读取错误的图片",
                type:"类别",
                typeTip:"选择图片类别",
                advancedRules:"高级规则",
                advancedRulesTip:"由高级规则匹配出来的",
                tpRules:"通配规则",
                tpRulesTip:"由通配规则匹配出来的",
                scaleRules:"缩放过的",
                scaleRulesTip:"js自动查找，相对页面显示的图片有缩放过的",
                noScaleRules:"无缩放过",
                noScaleRulesTip:"js自动查找，无缩放过的，但是满足一定的大小",
                smallRules:"小尺寸的",
                smallRulesTip:"小尺寸图片，实际尺寸的高和宽都小于#t#像素",
                command:"命令",
                commandTip:"命令菜单",
                onlineEdit:"在线编辑",
                onlineEditTip:"使用#t#在线编辑该图片",
                openInNewWindow:"新窗口打开",
                openInNewWindowTip:"新窗口打开图片",
                findInPage:"定位到图",
                findInPageTip:"滚动到当前图片所在的位置",
                viewCollection:"查看收藏",
                viewCollectionTip:"查看所有收藏的图片",
                inCollection:"收藏模式中，无法使用",
                cantFind:"图片不在文档中，或者被隐藏了，无法定位！",
                exportImages:"导出大图",
                exportImagesTip:"导出所有图片到新窗口",
                downloadImage:"下载所有",
                downloadImageTip:"下载当前库中所有显示图片",
                copyImagesUrl:"复制所有",
                copyImagesUrlTip:"复制所有大图地址",
                copySuccess:"已成功复制 #t# 张大图地址",
                autoRefresh:"自动重载",
                autoRefreshTip:"最后几张图片时，滚动主窗口到最底部，然后自动加载新的图片",
                enterFullsc:"进入全屏",
                exitFullsc:"退出全屏",
                config:"设置",
                closeGallery:"关闭库",
                returnToGallery:"回到库",
                picInfo:"图片信息",
                picNote:"图片注释",
                resolution:"分辨率",
                scaleRatio:"缩放比",
                similarImage:"以图搜图",
                scale:"缩放",
                horizontalFlip:"水平翻转",
                verticalFlip:"垂直翻转",
                actualBtn:'查看原始(A)',
                searchBtn:'查找原图(S)',
                galleryBtn:'查看库(G)',
                currentBtn:'查看当前(C)',
                magnifierBtn:'放大镜(M)',
                picTitle:"图片标题",
                picNum:"图片数量",
                exportImagesUrl:"导出图片链接",
                exportImagesUrlPop:"Ctrl+C复制图片链接",
                beginSearchImg:"#t#识图开始……",
                findNoPic:"未找到原图",
                findOverBeginLoad:"#t#识图结束，共找到#t#张匹配图片，开始加载第一张",
                loadNextSimilar:"原图加载失败，尝试加载下一结果……",
                loadError:"加载失败",
                openHomePage:"点击此处打开主页",
                position:"显示位置",
                topLeft: '图片左上角',
                topRight: '图片右上角',
                bottomRight: '图片右下角',
                bottomLeft: '图片左下角',
                topCenter: '图片正上方',
                bottomCenter: '图片正下方',
                floatBar:"浮动工具栏",
                showDelay:"显示延时",
                ms:"毫秒",
                hide:"隐藏",
                hideDelay:"隐藏延时",
                forceShow:"非缩放图片，超过该尺寸，显示浮框",
                forceShowTip:"非缩放的图片大小超过下面设定的尺寸时显示浮动工具栏",
                px:"像素",
                minSizeLimit:"缩放图片，超过该尺寸，显示浮框",
                minSizeLimitTip:"图片被缩放(图片原始大小与实际大小不一致)后,原图长宽大于设定值时显示浮动工具栏",
                listenBg:"监听背景图",
                listenBgTip:"在有背景图的元素上显示悬浮框",
                butonOrder:"工具栏图标排序",
                keysEnable:"启用以下快捷键",
                keysActual:"打开大图",
                keysActualTip:"当出现悬浮条时按下此按键打开大图",
                keysSearch:"查找原图",
                keysSearchTip:"当出现悬浮条时按下此按键查找原图",
                keysCurrent:"打开当前图片",
                keysCurrentTip:"当出现悬浮条时按下此按键打开当前显示的图片",
                keysMagnifier:"打开放大镜观察",
                keysMagnifierTip:"当出现悬浮条时按下此按键打开放大镜观察",
                keysGallery:"打开图库",
                keysGalleryTip:"当出现悬浮条时按下此按键打开图库",
                magnifier:"放大镜",
                magnifierRadius:"默认半径",
                magnifierWheelZoomEnabled:"启用滚轮缩放",
                magnifierWheelZoomRange:"滚轮缩放的倍率",
                gallery:"图库",
                galleryFitToScreen:"对图片进行缩放以适应屏幕",
                galleryFitToScreenSmall:"小图也缩放以适应屏幕",
                galleryFitToScreenTip:"适应方式为contain，非cover",
                galleryScrollEndToChange:"大图滚动到底后切换图片",
                galleryScrollEndToChangeTip:"取消上一选项后才有效",
                galleryExportType:"图片导出默认排序",
                grid:'平铺排序',
                gridBig:'原图平铺',
                list:'列表排序',
                galleryAutoLoad:"自动加载更多图片",
                galleryLoadAll:"加载更多图片时自动处理全部页",
                galleryLoadAllTip:"若页数过多可能影响体验",
                galleryScaleSmallSize1:"实际尺寸的高和宽都小于 ",
                galleryScaleSmallSize2:" 像素则归入小尺寸图片",
                galleryShowSmallSize:"默认显示小尺寸图片",
                galleryTransition:"显示图库切换图片的特效",
                gallerySidebarPosition:"缩略图栏位置",
                bottom:'底部',
                right:'右侧',
                left:'左侧',
                top:'顶部',
                gallerySidebarSize:"高度",
                gallerySidebarSizeTip:"缩略图栏的高（如果是水平放置）或者宽（如果是垂直放置）",
                galleryMax1:"最多预读 ",
                galleryMax2:" 张图片（前后各多少张）",
                galleryAutoZoom:"缩放改回 100%（chrome）",
                galleryAutoZoomTip:"如果有放大，则把图片及 sidebar 部分的缩放改回 100%，增大可视面积（仅在 chrome 下有效）",
                galleryDescriptionLength1:"注释的最大宽度",
                galleryDescriptionLength2:" 个字符",
                galleryAutoOpenSites:"自动打开图库的网站正则",
                galleryEditSite:"在线编辑站点",
                imgWindow:"图片窗口",
                imgWindowFitToScreen:"适应屏幕，并且水平垂直居中",
                imgWindowFitToScreenTip:"适应方式为contain，非cover",
                imgWindowDefaultTool:"打开窗口时默认选择的工具",
                hand:'抓手',
                rotate:'旋转',
                zoom:'放大镜',
                imgWindowEscKey:"Esc键关闭",
                imgWindowDblClickImgWindow:"双击图片窗口关闭",
                imgWindowClickOutside:"点击图片外部关闭",
                imgWindowClickOutsideTip:"仅当覆盖层显示时生效",
                none:'无',
                click:'单击',
                dblclick:'双击',
                imgWindowOverlayerShown:"覆盖层",
                imgWindowOverlayerColor:"颜色和不透明度",
                imgWindowShiftRotateStep1:"旋转时，按住shift键，旋转的步进",
                imgWindowShiftRotateStep2:" 度",
                imgWindowMouseWheelZoom:"滚轮缩放",
                imgWindowZoomRange:"滚轮缩放比例",
                imgWindowZoomRangeTip:"缩放比例(必须为正数)",
                others:"其它",
                waitImgLoad:"等图片完全载入后，才开始执行弹出放大等操作",
                waitImgLoadTip:"按住ctrl键的时候,可以临时执行和这个设定相反的设定",
                debug:"调试模式",
                firstEngine:"首选搜图引擎",
                refreshWhenError:"读取错误，点击重载",
                switchSlide:"开关侧边栏",
                countDown:"倒计时"
            };
            break;
        case "zh-TW":
            i18nData={
                share:"分享",
                loadAll:"載入更多",
                loadedAll:"載入完畢",
                loading:"正在載入",
                loadAllTip:"載入下一頁的圖片",
                fiddle:"折騰",
                fiddleTip:"彈出圖片進行複雜操作",
                collect:"收藏",
                collected:"已收藏",
                exitCollection:"退出收藏",
                exitCollectionTip:"點擊退出收藏模式",
                noCollectionYet:"你還木有收藏任何圖片",
                collectDetail:"描述",
                collectDetailTip:"給收藏的圖片添加一些描述吧",
                playSlide:"播放幻燈片",
                slideGap:"間隔(s)",
                slideGapTip:"間隔時間，單位(秒)",
                slideBack:"後退",
                slideBackTip:"從後往前播放",
                slideWait:"等待圖片讀取",
                slideWaitTip:"從每張圖片完全讀取完成後才開始倒計時",
                slideSkipError:"跳過錯誤圖片",
                slideSkipErrorTip:"快速跳過讀取錯誤的圖片",
                type:"類別",
                typeTip:"選擇圖片類別",
                advancedRules:"高級規則",
                advancedRulesTip:"由高級規則匹配出來的",
                tpRules:"通配規則",
                tpRulesTip:"由通配規則匹配出來的",
                scaleRules:"縮放過的",
                scaleRulesTip:"js自動查找，相對頁面顯示的圖片有縮放過的",
                noScaleRules:"無縮放過",
                noScaleRulesTip:"js自動查找，無縮放過的，但是滿足一定的大小",
                smallRules:"小尺寸的",
                smallRulesTip:"小尺寸圖片，實際尺寸的高和寬都小於#t#像素",
                command:"命令",
                commandTip:"命令菜單",
                onlineEdit:"在線編輯",
                onlineEditTip:"使用#t#在線編輯該圖片",
                openInNewWindow:"新窗口打開",
                openInNewWindowTip:"新窗口打開圖片",
                findInPage:"定位到圖",
                findInPageTip:"滾動到當前圖片所在的位置",
                viewCollection:"查看收藏",
                viewCollectionTip:"查看所有收藏的圖片",
                inCollection:"收藏模式中，無法使用",
                cantFind:"圖片不在文檔中，或者被隱藏了，無法定位！",
                exportImages:"導出大圖",
                exportImagesTip:"導出所有圖片到新窗口",
                downloadImage:"下載所有",
                downloadImageTip:"下載當前庫中所有顯示圖片",
                copyImagesUrl:"複製所有",
                copyImagesUrlTip:"複製所有大圖地址",
                copySuccess:"已成功複製 #t# 張大圖地址",
                autoRefresh:"自動重載",
                autoRefreshTip:"最後幾張圖片時，滾動主窗口到最底部，然後自動載入新的圖片",
                enterFullsc:"進入全屏",
                exitFullsc:"退出全屏",
                config:"設置",
                closeGallery:"關閉庫",
                returnToGallery:"回到庫",
                picInfo:"圖片信息",
                picNote:"圖片注釋",
                resolution:"解析度",
                scaleRatio:"縮放比",
                similarImage:"以圖搜圖",
                scale:"縮放",
                horizontalFlip:"水平翻轉",
                verticalFlip:"垂直翻轉",
                actualBtn:'查看原始(A)',
                searchBtn:'查找原圖(S)',
                galleryBtn:'查看庫(G)',
                currentBtn:'查看當前(C)',
                magnifierBtn:'放大鏡(M)',
                picTitle:"圖片標題",
                picNum:"圖片數量",
                exportImagesUrl:"導出圖片鏈接",
                exportImagesUrlPop:"Ctrl+C複製圖片鏈接",
                beginSearchImg:"#t#識圖開始……",
                findNoPic:"未找到原圖",
                findOverBeginLoad:"#t#識圖結束，共找到#t#張匹配圖片，開始載入第一張",
                loadNextSimilar:"原圖載入失敗，嘗試載入下一結果……",
                loadError:"載入失敗",
                openHomePage:"點擊此處打開主頁",
                position:"顯示位置",
                topLeft: '圖片左上角',
                topRight: '圖片右上角',
                bottomRight: '圖片右下角',
                bottomLeft: '圖片左下角',
                topCenter: '圖片正上方',
                bottomCenter: '圖片正下方',
                floatBar:"浮動工具欄",
                showDelay:"顯示延時",
                ms:"毫秒",
                hide:"隱藏",
                hideDelay:"隱藏延時",
                forceShow:"非縮放圖片，超過該尺寸，顯示浮框",
                forceShowTip:"非縮放的圖片大小超過下面設定的尺寸時顯示浮動工具欄",
                px:"像素",
                minSizeLimit:"縮放圖片，超過該尺寸，顯示浮框",
                minSizeLimitTip:"圖片被縮放(圖片原始大小與實際大小不一致)後,原圖長寬大於設定值時顯示浮動工具欄",
                listenBg:"監聽背景圖",
                listenBgTip:"在有背景圖的元素上顯示懸浮框",
                butonOrder:"工具欄圖標排序",
                keysEnable:"啟用以下快捷鍵",
                keysActual:"打開大圖",
                keysActualTip:"當出現懸浮條時按下此按鍵打開大圖",
                keysSearch:"查找原圖",
                keysSearchTip:"當出現懸浮條時按下此按鍵查找原圖",
                keysCurrent:"打開當前圖片",
                keysCurrentTip:"當出現懸浮條時按下此按鍵打開當前顯示的圖片",
                keysMagnifier:"打開放大鏡觀察",
                keysMagnifierTip:"當出現懸浮條時按下此按鍵打開放大鏡觀察",
                keysGallery:"打開圖庫",
                keysGalleryTip:"當出現懸浮條時按下此按鍵打開圖庫",
                magnifier:"放大鏡",
                magnifierRadius:"默認半徑",
                magnifierWheelZoomEnabled:"啟用滾輪縮放",
                magnifierWheelZoomRange:"滾輪縮放的倍率",
                gallery:"圖庫",
                galleryFitToScreen:"對圖片進行縮放以適應屏幕",
                galleryFitToScreenSmall:"小圖也縮放以適應屏幕",
                galleryFitToScreenTip:"適應方式為contain，非cover",
                galleryScrollEndToChange:"大圖滾動到底後切換圖片",
                galleryScrollEndToChangeTip:"取消上一選項後才有效",
                galleryExportType:"圖片導出默認排序",
                grid:'平鋪排序',
                gridBig:'原圖平鋪',
                list:'列表排序',
                galleryAutoLoad:"自動載入更多圖片",
                galleryLoadAll:"載入更多圖片時自動處理全部頁",
                galleryLoadAllTip:"若頁數過多可能影響體驗",
                galleryScaleSmallSize1:"實際尺寸的高和寬都小於 ",
                galleryScaleSmallSize2:" 像素則歸入小尺寸圖片",
                galleryShowSmallSize:"默認顯示小尺寸圖片",
                galleryTransition:"顯示圖庫切換圖片的特效",
                gallerySidebarPosition:"縮略圖欄位置",
                bottom:'底部',
                right:'右側',
                left:'左側',
                top:'頂部',
                gallerySidebarSize:"高度",
                gallerySidebarSizeTip:"縮略圖欄的高（如果是水平放置）或者寬（如果是垂直放置）",
                galleryMax1:"最多預讀 ",
                galleryMax2:" 張圖片（前後各多少張）",
                galleryAutoZoom:"縮放改回 100%（chrome）",
                galleryAutoZoomTip:"如果有放大，則把圖片及 sidebar 部分的縮放改回 100%，增大可視面積（僅在 chrome 下有效）",
                galleryDescriptionLength1:"注釋的最大寬度",
                galleryDescriptionLength2:" 個字元",
                galleryAutoOpenSites:"自動打開圖庫的網站正則",
                galleryEditSite:"在線編輯站點",
                imgWindow:"圖片窗口",
                imgWindowFitToScreen:"適應屏幕，並且水平垂直居中",
                imgWindowFitToScreenTip:"適應方式為contain，非cover",
                imgWindowDefaultTool:"打開窗口時默認選擇的工具",
                hand:'抓手',
                rotate:'旋轉',
                zoom:'放大鏡',
                imgWindowEscKey:"Esc鍵關閉",
                imgWindowDblClickImgWindow:"雙擊圖片窗口關閉",
                imgWindowClickOutside:"點擊圖片外部關閉",
                imgWindowClickOutsideTip:"僅當覆蓋層顯示時生效",
                none:'無',
                click:'單擊',
                dblclick:'雙擊',
                imgWindowOverlayerShown:"覆蓋層",
                imgWindowOverlayerColor:"顏色和不透明度",
                imgWindowShiftRotateStep1:"旋轉時，按住shift鍵，旋轉的步進",
                imgWindowShiftRotateStep2:" 度",
                imgWindowMouseWheelZoom:"滾輪縮放",
                imgWindowZoomRange:"滾輪縮放比例",
                imgWindowZoomRangeTip:"縮放比例(必須為正數)",
                others:"其它",
                waitImgLoad:"等圖片完全載入後，才開始執行彈出放大等操作",
                waitImgLoadTip:"按住ctrl鍵的時候,可以臨時執行和這個設定相反的設定",
                debug:"調試模式",
                firstEngine:"首選搜圖引擎",
                refreshWhenError:"讀取錯誤，點擊重載",
                switchSlide:"開關側邊欄",
                countDown:"倒計時"
            };
            break;
        default:
            i18nData={
                share:"Share",
                loadAll:"Load more",
                loadedAll:"Load completed",
                loading:"Loading ...",
                loadAllTip:"Load the picture on the next page",
                fiddle:"Toss",
                fiddleTip:"Pop-up pictures for complex operations",
                collect:"Collection",
                collected:"Has been collected",
                exitCollection:"Exit collection",
                exitCollectionTip:"Click to exit the collection mode",
                noCollectionYet:"You still have any pictures in the wood",
                collectDetail:"Description",
                collectDetailTip:"Add some descriptions to your favorite pictures",
                playSlide:"Play slideshow",
                slideGap:"Interval (s)",
                slideGapTip:"Interval, unit (seconds)",
                slideBack:"Back",
                slideBackTip:"Play from back to front",
                slideWait:"Wait for image reading",
                slideWaitTip:"The countdown starts after each image is completely read.",
                slideSkipError:"Skip error picture",
                slideSkipErrorTip:"Quickly skip reading the wrong picture",
                type:"Category",
                typeTip:"Select image category",
                advancedRules:"Advanced Rules",
                advancedRulesTip:"Matched by advanced rules",
                tpRules:"Wildcard rules",
                tpRulesTip:"Matched by wildcard rules",
                scaleRules:"Zoomed",
                scaleRulesTip:"JS automatically finds, the image displayed relative to the page has been scaled",
                noScaleRules:"No scaling",
                noScaleRulesTip:"JS auto find, no scaling, but meets a certain size",
                smallRules:"Small size",
                smallRulesTip:"Small size image, the actual size of the height and width are less than #t# pixels",
                command:"Command",
                commandTip:"Command Menu",
                onlineEdit:"Online editing",
                onlineEditTip:"Edit this image online using #t#",
                openInNewWindow:"Open in new window",
                openInNewWindowTip:"Open image in new window",
                findInPage:"Find In Page",
                findInPageTip:"Scroll to the location of the current image",
                viewCollection:"View Collection",
                viewCollectionTip:"View all collected images",
                inCollection:"Unable to use in Collection mode",
                cantFind:"The image is not in the document, or it is hidden and cannot be located!",
                exportImages:"Export big Images",
                exportImagesTip:"Export all images to new window",
                downloadImage:"Download all shown Images",
                downloadImageTip:"Download the current shown pictures",
                copyImagesUrl:"Copy all images Urls",
                copyImagesUrlTip:"Copy all large image Urls",
                copySuccess:"Successfully copied #t# Url",
                autoRefresh:"Auto overload",
                autoRefreshTip:"When the last few images, scroll the main window to the bottom, then automatically load the new image",
                enterFullsc:"Enter full screen",
                exitFullsc:"Exit full screen",
                config:"Settings",
                closeGallery:"Close Gallery",
                returnToGallery:"Back to the Gallery",
                picInfo:"Img information",
                picNote:"Img annotation",
                resolution:"Img Resolution",
                picNum:"Number of pictures",
                scaleRatio:"Scaling ratio",
                similarImage:"Searching by image",
                scale:"Zoom",
                horizontalFlip:"Horizontal flip",
                verticalFlip:"Vertical flip",
                actualBtn:"View original (A)",
                searchBtn:"Find the original image (S)",
                galleryBtn:"View Gallery (G)",
                currentBtn:"View current (C)",
                magnifierBtn:"Magnifier / ZooM (M)",
                picTitle:"Picture Title",
                exportImagesUrl:"Export image Url",
                exportImagesUrlPop:"Ctrl+C copy image Url",
                beginSearchImg:"#t# begin Search Img ...",
                findNoPic:"The original image was not found",
                findOverBeginLoad:"#t# end of the map, find #t# matching pictures, start loading the first one",
                loadNextSimilar:"The original image failed to load, try to load the next result...",
                loadError:"Load failed",
                openHomePage:"Open Home page",
                position:"Display position",
                topLeft:"The top left corner of the picture",
                topRight:"The top right corner of the picture",
                bottomRight:"The bottom right corner of the picture",
                bottomLeft:"The bottom left corner of the picture",
                topCenter:"Beside the picture",
                bottomCenter:"Below the picture",
                floatBar:"Toolbar",
                showDelay:"Show delay",
                ms:"ms",
                hide:"Hide",
                hideDelay:"Hide Delay",
                forceShow:"Non-zoomed image, beyond that size, shows the float frame",
                forceShowTip:"Floating toolbar when non-scaled image size exceeds the size set below",
                px:"px",
                minSizeLimit:"Zoom the image, beyond that size, display the float frame",
                minSizeLimitTip:"After the image is scaled (the original size of the image does not match the actual size), the floating toolbar is displayed when the original image length is greater than the set value.",
                listenBg:"Listening background image",
                listenBgTip:"Show the hover box on the element with the background image",
                butonOrder:"Sort of toolbar icons",
                keysEnable:"Enable the following shortcuts",
                keysActual:"Open the big picture",
                keysActualTip:"Press this button to open a large image when a floating bar appears",
                keysSearch:"Find the original image",
                keysSearchTip:"Press this button to find the original image when the floating bar appears",
                keysCurrent:"Open the current picture",
                keysCurrentTip:"Press this button to open the currently displayed image when the floating bar appears",
                keysMagnifier:"Open the magnifying glass to observe",
                keysMagnifierTip:"Press this button to open the magnifying glass when the floating bar appears",
                keysGallery:"Open Gallery",
                keysGalleryTip:"Press this button to open the Gallery when a floating bar appears",
                magnifier:"Zoom",
                magnifierRadius:"Default radius",
                magnifierWheelZoomEnabled:"Enable wheel zoom",
                magnifierWheelZoomRange:"Wheel zoom magnification",
                gallery:"Gallery",
                galleryFitToScreen:"Scale the image to fit the screen",
                galleryFitToScreenSmall:"The small image is also scaled to fit the screen",
                galleryFitToScreenTip:"Adapt to be contain, not cover",
                galleryScrollEndToChange:"Switch the image after the big picture scrolls to the end",
                galleryScrollEndToChangeTip:"Valid after canceling the previous option",
                galleryExportType:"Image export default sort",
                grid:"Tile sorting",
                gridBig:"The original picture is tiled",
                list:"List sorting",
                galleryAutoLoad:"Automatically load more images",
                galleryLoadAll:"Automatically process all pages when loading more images",
                galleryLoadAllTip:"If too many pages may affect the experience",
                galleryScaleSmallSize1:"The actual size is less than the height and width",
                galleryScaleSmallSize2:"Pixels are grouped into small size images",
                galleryShowSmallSize:"Show small size pictures by default",
                galleryTransition:"Show special effects of gallery switching images",
                gallerySidebarPosition:"Thumbnail bar position",
                bottom:"Bottom",
                right:"Right",
                left:"Left",
                top:"Top",
                gallerySidebarSize:"Height",
                gallerySidebarSizeTip:"The height of the thumbnail bar (if it is horizontal) or the width (if it is vertical)",
                galleryMax1:"Maximum read-ahead",
                galleryMax2:"Pictures (how many before and after)",
                galleryAutoZoom:"Zoom changes back to 100% (chrome)",
                galleryAutoZoomTip:"If you zoom in, change the zoom of the image and sidebar sections back to 100% and increase the viewable area (only valid under chrome)",
                galleryDescriptionLength1:"Maximum width of annotation",
                galleryDescriptionLength2:"Characters",
                galleryAutoOpenSites:"Automatically open the website's website regulars",
                galleryEditSite:"Online editing site",
                imgWindow:"ImgWindow",
                imgWindowFitToScreen:"Adapt to the screen and center horizontally vertically",
                imgWindowFitToScreenTip:"Adapt to be contain, not cover",
                imgWindowDefaultTool:"The tool selected by default when opening the window",
                hand:"Hand",
                rotate:"Rotate",
                zoom:"Magnifier",
                imgWindowEscKey:"Esc key is off",
                imgWindowDblClickImgWindow:"Double click on the image window to close",
                imgWindowClickOutside:"Click on the image to close externally",
                imgWindowClickOutsideTip:"Only enable when Overlayer is shown",
                none:"None",
                click:"Click",
                dblclick:"Double click",
                imgWindowOverlayerShown:"Overlay",
                imgWindowOverlayerColor:"Color and Opacity",
                imgWindowShiftRotateStep1:"When rotating, hold down the Shift key, rotate the step",
                imgWindowShiftRotateStep2:"Degree",
                imgWindowMouseWheelZoom:"MouseWheel Zoom",
                imgWindowZoomRange:"Zoom Range",
                imgWindowZoomRangeTip:"Zoom (must be positive)",
                others:"Other",
                waitImgLoad:"When the image is completely loaded, it will start to perform operations such as pop-up zooming",
                waitImgLoadTip:"When holding down the Ctrl key, you can temporarily execute the setting opposite to this setting",
                debug:"Debug mode",
                firstEngine:"Preferred (first) search engine",
                refreshWhenError:"Read error, click overload",
                switchSlide:"Switch sidebar",
                countDown:"CountDown"
            };
            break;
    }
    function i18n(key,inserts){
        var result=i18nData[key],i;
        if(inserts){
            if(typeof inserts!="object")inserts=[inserts];
            for(i=0;i<inserts.length;i++){
                result=result.replace("#t#",inserts[i]);
            }
        }
        return result;
    }
    var prefs;
    function init(topObject,window,document,arrayFn,envir,storage,unsafeWindow){
        // 默认设置，请到设置界面修改
        prefs={
            floatBar:{//浮动工具栏相关设置.
                butonOrder:['actual','current','gallery','magnifier'],//按钮排列顺序'actual'(实际的图片),'current'(当前显示的图片),'magnifier'(放大镜观察),'gallery'(图集),'search'(搜索原图)
                listenBg:true,//监听背景图
                showDelay:366,//浮动工具栏显示延时.单位(毫秒)
                hideDelay:566,//浮动工具栏隐藏延时.单位(毫秒)
                position:'top left',// 取值为: 'top left'(图片左上角) 或者 'top right'(图片右上角) 'bottom right'(图片右下角) 'bottom left'(图片左下角);
                offset:{//浮动工具栏偏移.单位(像素)
                    x:-15,//x轴偏移(正值,向右偏移,负值向左)
                    y:-15,//y轴偏移(正值,向下,负值向上)
                },
                forceShow:{//在没有被缩放的图片上,但是大小超过下面设定的尺寸时,强制显示浮动框.
                    enabled:true,//启用强制显示.
                    size:{//图片尺寸.单位(像素);
                        w:166,
                        h:166,
                    },
                },
                minSizeLimit:{//就算是图片被缩放了(看到的图片被设定了width或者height限定了大小,这种情况下),如果没有被缩放的原图片小于设定值,那么也不显示浮动工具栏.
                    w:100,
                    h:100,
                },

                // 按键，感觉用不太到，默认禁用
                keys: {
                    enable: false,
                    actual: 'a',  //  当出现悬浮条时按下 `a` 打开原图
                    search: 's',
                    current: 'c',
                    magnifier: 'm',
                    gallery: 'g',
                },
            },

            magnifier:{//放大镜的设置.
                radius: 77,//默认半径.单位(像素).
                wheelZoom:{//滚轮缩放.
                    enabled:true,
                    pauseFirst:true,//需要暂停(单击暂停)后,才能缩放.(推荐,否则因为放大镜会跟着鼠标,如果放大镜过大,那么会影响滚动.)..
                    range:[0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.7,1.9,2,2.5,3.0,4.0],//缩放的范围
                },
            },

            gallery:{//图库相关设定
                loadMore:false,
                loadAll:true,//加载更多时是否加载全部页面
                fitToScreen:true,//图片适应屏幕(适应方式为contain，非cover).
                fitToScreenSmall:false,
                scrollEndToChange:true,
                exportType:'grid',
                sidebarPosition: 'bottom',//'top' 'right' 'bottom' 'left'  四个可能值
                sidebarSize: 120,//侧栏的高（如果是水平放置）或者宽（如果是垂直放置）
                sidebarToggle: true,  // 是否显示隐藏按钮
                transition:true,//大图片区的动画。
                preload:true,//对附近的图片进行预读。
                max:5,//最多预读多少张（前后各多少张）

                zoomresized: 25,  // 图片尺寸最少相差比例，单位：%
                scaleSmallSize: 250,  // 图库的新类别，缩放的图片，尺寸的高或宽都小于该值
                showSmallSize:true,//是否默认显示小尺寸图片

                scrollEndAndLoad: false, // 滚动主窗口到最底部，然后自动重载库的图片。还有bug，有待进一步测试
                scrollEndAndLoad_num: 3,  // 最后几张图片执行

                autoZoom: true,  // 如果有放大，则把图片及 sidebar 部分的缩放改回 100%，增大可视面积（仅在 chrome 下有效）
                descriptionLength: 32,  // 注释的最大宽度
                editSite: "Pixlr"
            },

            imgWindow:{// 图片窗相关设置
                fitToScreen: false,//适应屏幕,并且水平垂直居中(适应方式为contain，非cover).
                syncSelectedTool:true,//同步当前选择的工具，如果开了多个图片窗口，其中修改一个会反映到其他的上面。
                defaultTool:'hand',//"hand","rotate","zoom";打开窗口的时候默认选择的工具
                close:{//关闭的方式
                    escKey:true,//按esc键
                    dblClickImgWindow: true,//双击图片窗口
                    clickOutside:'', // 点击图片外部关闭。值为''|'click'|'dblclick'；无或点击或双击
                },
                overlayer:{// 覆盖层.
                    shown:false,//显示
                    color:'rgba(0,0,0,0.8)',//颜色和不透明度设置.
                },
                shiftRotateStep:15,// 旋转的时候，按住shift键时,旋转的步进.单位:度.
                zoom:{//滚轮缩放
                    range:[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.7,1.9,2,2.5,3.0,4.0],//缩放比例.(不要出现负数,谢谢-_-!~)
                    mouseWheelZoom:true,//是否允许使用滚轮缩放。
                },
            },

            //等图片完全载入后,才开始执行弹出,放大等等操作,
            //按住ctrl键的时候,可以临时执行和这个设定相反的设定.
            waitImgLoad: false,

            //框架里面的图片在顶层窗口展示出来，但是当frame与顶层窗口domain不一样的时候，可能导致图片被反盗链拦截，
            //按住shift键，可以临时执行和这个设定相反的设定
            framesPicOpenInTopWindow: true,

            // lowLevel: true,  // 如果有多个图片，优先选择低一级的

            debug: false,
            firstEngine:"Tineye"
        };

        //各网站高级规则;
        var siteInfo=[
            {name: "google 图片搜索",
             //网址例子.(方便测试.查看.之类的)
             siteExample:"http://www.google.com.hk/search?q=firefox&tbm=isch",
             //是否启用
             enabled:true,
             //站点正则
             url:/https?:\/\/www.google(\.\w{1,3}){1,3}\/search\?.*&tbm=isch/,
             //鼠标左键点击直接打开..（这个只是当高级规则的getImage()返回图片的时候生效）
             // 无效？只有少数情况下有作用？
             clikToOpen:{
                 enabled:false,
                 preventDefault:true,//是否尝试阻止点击的默认行为（比如如果是你点的是一个链接，默认行为是打开这个链接，如果是true，js会尝试阻止链接的打开(如果想临时打开这个链接，请使用右键的打开命令)）
                 type:'actual',//默认的打开方式: 'actual'(弹出,原始图片) 'magnifier'(放大镜) 'current'(弹出,当前图片)
             },
             //获取图片实际地址的处理函数,
             //this 为当前鼠标悬浮图片的引用,
             //第一个参数和this相同，也是当前鼠标悬浮图片的引用,
             //第二个参数为包裹当前图片的第一个a元素(可能不存在).
             getImage:function(img,a){
                 if(!a)return;
                 if (a.href.match(/imgurl=(.*?\.\w{1,5})&/i)) {
                     return decodeURIComponent(RegExp.$1);
                 }
             },

             // ====== 我新增的 ======
             // 自定义样式
             css: '',
             // 排除的图片正则
             // exclude: /weixin_code\.png$/i,
            },
            {name: "Bing 图片搜索",
             siteExample:"http://cn.bing.com/images/search?q=%E7%BE%8E%E5%A5%B3",
             enabled:true,
             url: /^https?:\/\/[^.]*\.bing\.com\/images\//i,
             getImage:function(img, a){
                 if (!a) return;
                 var oldsrc=this.src;
                 var $ = /,imgurl:"([^"]+)/.exec(a.getAttribute('m'));
                 var newsrc= $ ? $[1] : '';
                 if(newsrc!=oldsrc)return newsrc;
             }
            },
            {name:"百度贴吧",
             enabled:true,
             url:/^https?:\/\/tieba\.baidu\.[^\/]+\//i,
             getImage:function(img){
                 var src=img.src;
                 var reg=/^(http:\/\/tiebapic\.baidu\.com\/forum\/)ab(pic\/item\/[\w.]+)/i ;
                 var portrait=/\/sys\/portrait/;
                 var result=src.match(reg);
                 //帖子列表页面
                 if(portrait.test(src)){
                     return src.replace(/\/sys\/portrait/,"/sys/portraitl");
                 }else if(result){//小图的时候
                     return result[1]+result[2];
                 }else{//小图点击之后的较大图，或者帖子内容页面的图片。
                     var prefix = 'http://tiebapic.baidu.com/forum/pic/item/';
                     var reg2 = /\/sign=\w+\/([\w.]+)$/;
                     var sign = src.match(reg2);
                     return  sign ? prefix + sign[1] : null;
                 };
             },
            },
            // 百度自身的全屏查看方式更加好，跟这个脚本的库查看类似。
            {name: "百度图片搜索",
             siteExample: "http://image.baidu.com/i?ie=utf-8&word=%E9%A3%8E%E6%99%AF&oq=%E9%A3%8E%E6%99",
             enabled: true,
             url: /^https?:\/\/image\.baidu\.com\/.*&word=/i,
             getImage: function(img, a) {
                 if (!a) return;
                 var reg = /&objurl=(http.*?\.(?:jpg|jpeg|png|gif|bmp))/i;
                 if (a.href.match(reg)) {
                     return decodeURIComponent(RegExp.$1);
                 }
             }
            },
            {name:"豆瓣",
                siteExample:"http://movie.douban.com/photos/photo/1000656155/",
                enabled: false,
                url:/^https?:\/\/[^.]*\.douban\.com/i,
                getImage:function(){
                    var oldsrc = this.src,
                        newsrc = oldsrc;
                    var pic = /\/view\/photo\/(?:photo|albumcover|albumicon|thumb|sqxs)\/public\//i;
                    var movieCover = /\/view\/movie_poster_cover\/[si]pst\/public\//i;
                    var bookCover = /\/view\/ark_article_cover\/cut\/public\//i;
                    var spic = /(img\d+.douban.com)\/[sm]pic\//i

                    // 这个网址大图会出错
                    // http://movie.douban.com/subject/25708579/discussion/58950206/
                    if(/movie\.douban\.com\/subject\/\d+\/discussion/.test(location.href)){
                    } else if (pic.test(oldsrc)) {
                        newsrc = oldsrc.replace(pic, '/view/photo/raw/public/');
                    } else if (movieCover.test(oldsrc)) {
                        newsrc = oldsrc.replace(movieCover, '/view/photo/raw/public/');
                    } else if (bookCover.test(oldsrc)) {
                        newsrc = oldsrc.replace(bookCover, '/view/ark_article_cover/retina/public/');
                    } else if (spic.test(oldsrc)) {
                        newsrc = oldsrc.replace(spic, '$1/lpic/');
                    }

                    return newsrc == oldsrc ? null : [newsrc,newsrc.replace(/photo\/raw/,"photo/photo")];
                }
            },
            {name:"新浪微博",
             siteExample:"http://weibo.com/pub/?source=toptray",
             enabled:true,
             url:/^https?:\/\/(?:[^.]+\.)*weibo\.(com|cn)/i,
             getImage:function(img){
                 var oldsrc=this.src;
                 var pic=/(\.sinaimg\.(cn|com)\/)(?:bmiddle|orj360)/i;//微博内容图片.
                 var pic2=/(\.sinaimg\.(cn|com)\/)(?:square|thumbnail)/i;// 微博内容图片2.
                 var head=/(\.sinaimg\.(cn|com)\/\d+)\/50\//i;//头像.
                 var photoList=/\.sinaimg\.(cn|com)\/thumb\d+\/\w+/i//相册
                 var newsrc;
                 if(pic.test(oldsrc)){
                     newsrc=oldsrc.replace(pic,'$1large');  // large 不是每一张图片都有的
                     return newsrc==oldsrc? '' : newsrc;
                 } else if (pic2.test(oldsrc)) {
                     newsrc=oldsrc.replace(pic2,'$1mw1024');
                     return newsrc==oldsrc? '' : newsrc;
                 } else if(head.test(oldsrc)){
                     newsrc=oldsrc.replace(head,'$1/180/');
                     return newsrc==oldsrc? '' : newsrc;
                 }else if(photoList.test(oldsrc)){
                     newsrc=oldsrc.replace(/thumb\d+/,'mw690');
                     return newsrc==oldsrc? '' : newsrc;
                 };
             },
            },
            {name:"bilibili",
             enabled:true,
             url:/^https?:\/\/[^.]+\.bilibili.com/i,
             getImage:function(img){
                 var oldsrc=this.src;
                 var pic=/\d+_\d+\/|\d+_x\d+\.jpg$|@\d+w_\d+h\.webp$|_\d+x\d+\.jpg$/i;
                 var newsrc;
                 if(pic.test(oldsrc)){
                     newsrc=oldsrc.replace(pic,'');
                     return newsrc==oldsrc? '' : newsrc;
                 }
             }
            },
            {name:"腾讯微博",
             siteExample:"http://t.qq.com/p/news",
             enabled:true,
             url:/^http:\/\/[^\/]*t\.qq\.com\//i,
             getImage:function(img){
                 var pic=/(\.qpic\.cn\/mblogpic\/\w+)\/\d+/i;//图片
                 var head=/(\.qlogo\.cn\/mbloghead\/\w+)\/\d+/i;//头像.
                 var oldsrc=this.src;
                 var newsrc;
                 if(pic.test(oldsrc)){
                     newsrc=oldsrc.replace(pic,'$1/2000');
                     return newsrc==oldsrc? '' : newsrc;;
                 }else if(head.test(oldsrc)){
                     newsrc=oldsrc.replace(head,'$1/0');
                     return newsrc==oldsrc? '' : newsrc;;
                 };
             },
            },
            {name: "deviantart",
             siteExample: "http://www.deviantart.com",
             enabled:true,
             url:/^https?:\/\/[^.]*\.deviantart\.com/i,
             getImage:function(img, a){
                 var oldsrc=this.src;
                 var newsrc;
                 if(this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.parentNode && this.parentNode.parentNode.parentNode.dataset && this.parentNode.parentNode.parentNode.dataset.superFullImg){
                     newsrc=this.parentNode.parentNode.parentNode.dataset.superFullImg;
                 }
                 if(!newsrc)
                     newsrc = a.getAttribute('data-super-img') || a.getAttribute('data-super-full-img') || a.parentNode.getAttribute('data-super-img') || a.parentNode.getAttribute('data-super-full-img')
                         || oldsrc.replace(/(http:\/\/[^\/]+\/fs\d+\/)200H\/(.*)/i,'$1$2');
                 return newsrc==oldsrc? '' : newsrc;
             },
            },
            {name: '花瓣网',
             enabled: true,
             url: /^https?:\/\/huaban\.com\//i,
             ext: 'previous-2',
             // ext: function(target) {
             //     if (target.className == 'cover') {
             //         return target.parentNode.querySelector('img');
             //     }
             // },
             getImage: function() {
                 var pic = /(.*img.hb.aicdn.com\/.*)_fw(?:236|320)$/i
                 if (this.src.match(pic)) {
                     return RegExp.$1 + '_fw658';
                 }
             },
             description: './../following-sibling::p[@class="description"]',
             // css: '.pin a.img .cover { display: none; }',
             exclude: /weixin_code\.png$/i,
            },
            // 其它
            {name: "wikipedia",
             enabled:true,
             url:/^https?:\/\/[^.]+.wikipedia.org\//i,
             getImage:function(){
                 var src=this.src;
                 var ret=src.replace('/thumb/','/');
                 if(src==ret)return;//非缩略图
                 return (ret.match(/(https?:\/\/.*)\/\d+px-.*/) || [])[1];
             },
            },
            {name:"沪江碎碎",
             enabled:true,
             url:/^https?:\/\/([^.]+\.)*(?:yeshj\.com|hjenglish\.com|hujiang\.com)/i,
             getImage:function(img){
                 var oldsrc=this.src;
                 var reg=/^(https?:\/\/(?:[^.]+\.)*hjfile.cn\/.+)(_(?:s|m))(\.\w+)$/i;
                 if(reg.test(oldsrc)){
                     return oldsrc.replace(reg,'$1$3');
                 };
             },
            },
            {name: '大众点评',
             siteExample: 'http://www.dianping.com/shop/17873296/photos',
             url: /^https?:\/\/www.dianping.com\/shop/i,
             getImage: function() {
                 var oldsrc = this.src,
                     newsrc;
                 var pic = /(.+?dpfile\.com\/.+)\(240c180\)\/(thumb\..+)/;
                 if (pic.test(oldsrc)) {
                     return oldsrc.replace(pic, '$1(700x700)/$2');
                 }
             }
            },
            // 视频网站
            {name: 'trakt.tv',
             url: /^http:\/\/trakt\.tv\//i,
             siteExample: 'http://trakt.tv/shows',
             getImage: function() {
                 var oldsrc = this.src;
                 if (oldsrc.match(/(.*\/images\/posters\/\d+)-(?:300|138)\.jpg\?(\d+)$/)) {
                     return RegExp.$1 + '.jpg?' + RegExp.$2;
                 }
             }
            },
            // Music
            {name: '网易云音乐',
             url: 'http://music.163.com/*',
             ext: 'previous',  // 扩展模式，检查前面一个是否为 img
             getImage: function() {
                 var oldsrc = this.src;
                 if(this.data){
                     var newsrc = this.data('src');
                     if (oldsrc != newsrc) {
                         return newsrc;
                     }
                 }
                 if (oldsrc.match(/(.*)\?param=\d+y\d+$/)) {
                     return RegExp.$1;
                 }
             }
            },
            // 美女
            {name: "美女薄情馆",  // 这个网站有限制，每天只能看多少张
             url: /^http:\/\/boqingguan\.com\//i,
             siteExample: 'http://boqingguan.com/Picture/31637',
             lazyAttr: 'data-original',  // 由于采用了延迟加载技术，所以图片可能为 loading.gif
             getImage: function(img, a) {
                 var oldsrc = this.getAttribute('data-original') || this.src;
                 if (oldsrc) {
                     var newsrc = oldsrc.replace(/![a-z\d]+$/, '');
                     return newsrc == oldsrc ? '' : newsrc;
                 }
             }
            },
            // 游戏
            {name:"178.com",
             enabled:true,
             url:/^https?:\/\/(?:\w+\.)+178\.com\//i,
             clikToOpen:{
                 enabled:true,
                 preventDefault:true,
                 type:'actual',
             },
             getImage:function(img,a){
                 if(!a)return;
                 var reg=/^https?:\/\/(?:\w+\.)+178\.com\/.+?(https?:\/\/img\d*.178.com\/[^.]+\.(?:jpg|jpeg|png|gif|bmp))/i;
                 return (a.href.match(reg) || [])[1];
             },
            },

            // 论坛
            {name:"极限主题社区",
             enabled:true,
             url:/^https?:\/\/bbs\.themex\.net\/.+/i,
             clikToOpen:{
                 enabled:true,
                 preventDefault:true,
                 type:'actual',
             },
             getImage:function(){
                 var reg=/^(https?:\/\/bbs\.themex\.net\/attachment\.php\?.+)&thumb=1(.+)/i;
                 var src=this.src;
                 var ret=src.replace(reg,'$1$2');
                 return ret!=src? ret : '';
             },
            },
            {name:"opera官方论坛",
             siteExample:"http://bbs.operachina.com",
             enabled:true,
             url:/^http:\/\/bbs\.operachina\.com/i,
             getImage:function(){
                 var src=this.src;
                 if(/file.php\?id=\d+$/i.test(src)){
                     return src+'&mode=view';
                 };
             },
            },

            // 特殊的需要修正
            {name: 'github 修正',
             url: /^https?:\/\/github\.com\//i,
             clikToOpen: {
                 enabled: true,
                 preventDefault: true,
                 type: 'actual',
             },
             getImage: function(img, a) {
                 if (a && a.href.indexOf('/blob/master/') > 0) {
                     return this.src;
                 }
             }
            },

            // 需要 xhr 获取的
            {name: '优美图',
             url: /http:\/\/(?:www\.)?topit\.me\//,
             getImage: function(img, a) {  // 如果有 xhr，则应该返回 xhr 的 url
                 if (a && a.href.match(/topit\.me\/item\/\d+/)) {
                     return a.href;
                 }
             },
             lazyAttr: 'data-original',  // 延迟加载技术让后面的图片是 blank.gif
             xhr: {
                 q: ['a[download]', 'a#item-tip'],
             }
            },
            {name: '半次元',
             url: /^https?:\/\/bcy\.net\//,
             getImage: function() {
                 return this.src.replace(/\/\dX\d$|\/w\d+$/,"").replace(/\/cover\//,"/post/").replace(/\/(middle|small)\.jpg/,"/big.jpg");
             }
            },
            {name: 'Steampowered',
             url: /\.steampowered\.com/,
             getImage: function() {
                 return this.src.replace(/\.\d+x\d+\.jpg/,".jpg");
             }
            },
            {name: 'Steamcommunity',
             url: /steamcommunity\.com/,
             getImage: function() {
                 return this.src.replace(/output\-quality=\d+&fit=inside\|\d+\:\d+/,"output-quality=100&fit=inside|0:0");
             }
            },
            {name: '知乎',
             url: /zhihu\.com/,
             getImage: function() {
                 return this.src.replace(/_(b|xs|s|l|\d+x\d+)\./,".");
             }
            },
            {name: '500px',
             url: /500px\./,
             getImage: function() {
                 return this.src.replace(/h%3D\d+\/v2.*/,"m%3D2000/v2").replace(/^((?:(?:pp?cdn|s\\d\\.amazonaws\\.com\/photos|gp\\d+\\.wac\\.edgecastcdn\\.net\/806614\/photos\/photos)\\.500px|djlhggipcyllo\\.cloudfront)\\.(?:net|org)\/\\d+\/[\\da-f]{40}\/)\\d+\\./,"$12048.jpg");
             }
            },
            {name: 'Nyaa',
             url: /nyaa\.se/,
             getImage: function() {
                 return /upload\/small\//.test(this.src)?this.src.replace(/upload\/small\//,"upload/big/"):null;
             }
            },
            {name: "itunes",
             url: /itunes\.apple\.com/,
             getImage: function() {
                 return this.src.replace(/\d+x\d+bb\./,"1400x1400bb.");
             }
            },
            {name: "汽车之家",
             url: /\.autohome\.com\.cn/,
             getImage: function() {
                 return this.src.replace(/(\?imageView.*|\d+x\d+_\d+_|f_m_|t_|s_)/,"");
             }
            },
            {name: "易车",
             url: /\.bitauto\.com/,
             getImage: function() {
                 return this.src.replace(/_\d+\.jpg$/i,"_12.jpg");
             }
            },
            {name: "爱卡",
             url: /\.xcar\.com\.cn/,
             getImage: function() {
                 return this.src.replace(/\-\d+x\d+\.jpg/i,"");
             }
            },
            {name: "太平洋汽车",
             url: /\.pcauto\.com\.cn/,
             getImage: function() {
                 return this.src.replace(/_\d+x\d+\.jpg$/i,".jpg");
             }
            },
            {name: "新浪汽车",
             url: /\.auto\.sina\.com\.cn/,
             getImage: function() {
                 return this.src.replace(/_\d+\.jpg$/i,"_src.jpg");
             }
            },
            {name: "greasyfork",
             url: /(greasyfork|sleazyfork)\.org/,
             getImage: function() {
                 return this.src.replace(/\/thumb\//i,"/original/").replace(/\/thumbnails\//i,"/").replace(/(\/forum\/uploads\/userpics\/.*\/)n([^\/]+)$/,"$1p$2");
             }
            },
            {name: "dribbble",
             url: /dribbble\.com/,
             getImage: function() {
                 return this.src.replace(/_teaser(.[^\.]+)$/i,"$1").replace(/_1x\./,".");
             }
            },
            {name: "百度百科",
             url: /baike\.baidu\.com/,
             getImage: function() {
                 return this.src.replace(/.*bdstatic\.com.*\/([^\/]+)\.jpg/i,"http://imgsrc.baidu.com/baike/pic/item/$1.jpg");
             }
            },
            {name: "nvshens",
             url: /nvshens\.com|onvshen\.com/,
             getImage: function() {
                 return this.src.replace(/(\img\.onvshen\.com.*)(?:thumb\/|_s)(.*)/i,"$1$2");
             }
            },
            {name: "24meitu",
             url: /24meitu\.com|25meinv\.com|aisimeinv\.com|24tupian\.com|24meinv\./,
             getImage: function() {
                 return this.src.replace(/\/m([^\/]+)$/i,"/$1").replace(/imgs\./i,"bimg.");
             }
            },
            {name: "Tumblr",
             url: /tumblr\.com/,
             getImage: function() {
                 if(/\/avatar_/.test(this.src))return this.src.replace(/(media\.tumblr\.com.*_)[^_]+(\.[^\.]+)$/i,"$1512$2");
                 else return this.src.replace(/[^\/]*(media\.tumblr\.com.*_)\d+(\.[^\.]+)$/i,"$1raw$2");
             }
            },
            {name: "Acgget",
             url: /acg18\.us|acgget\./,
             getImage: function() {
                 return this.getAttribute('data-original') || this.src.replace(/(pic\.acgget\.com\/thumb\/)w\d+_h\d+\//i,"$1w9999_h9999/");
             }
            },
            {name: "Pixiv",
             url: /pixiv\.net|pximg\.net/,
             getImage: function() {
                 var preStr=this.src.replace(/pximg\.net\/c\/\d+x\d+\/img-master\/img\/(.*)_[^_]+(\.[a-z]+)$/i,"pximg.net/img-original/img/$1");
                 if(preStr!=this.src)
                 return [preStr+".jpg",preStr+".png"];
             }
            },
            {name: "Wallhaven",
             url: /wallhaven\./,
             getImage: function() {
                 return this.src.replace(/wallpapers\/thumb\/small\/th/i,"wallpapers/full/wallhaven").replace(/th\.wallhaven\.cc\/small\/(.*)?\//i,"w.wallhaven.cc/full/$1/wallhaven-");
             }
            },
            {name: "lofter",
             url: /lofter\./,
             getImage: function(img, a) {
                 if(a && a.href && a.hasAttribute("bigimgsrc")){
                     return a.getAttribute("bigimgsrc");
                 }
                 return this.src.replace(/\?.*/i,"");
             }
            },
            {name: "sohu",
             url: /(sohu|sohucs)\.com/,
             getImage: function() {
                 return this.src.replace(/(sohucs\.com\/).*\/(images\/|os\/)/i,"$1$2");
             }
            },
            {name: "moegirl",
             url: /(moegirl|mengniang)\.org/,
             getImage: function() {
                 return this.src.replace(/(common)\/thumb(.*)\/[^\/]+/i,"$1$2");
             }
            },
            {name: "fanfou",
             url: /fanfou\.com/,
             getImage: function() {
                 return this.src.replace(/@.+/i,"");
             }
            },
            {name: "meitudata",
             url: /meipai\.com/,
             getImage: function() {
                 return this.src.replace(/!thumb.+/i,"");
             }
            },
            {name: "mafengwo",
             url: /mafengwo\.cn/,
             getImage: function() {
                 return this.src.replace(/\?imageMogr.*/i,"");
             }
            },
            {name: "discordapp",
             url: /discordapp\.com/,
             getImage: function() {
                 return this.src.replace(/\?width=\d+&height=\d+$/i,"");
             }
            }
        ];

        // 通配型规则,无视站点.
        var tprules=[
            function(img, a) { // 解决新的dz论坛的原图获取方式.
                var regs = [/(.+\/attachments?\/.+)\.thumb\.\w{2,5}$/i,/((wp-content|moecdn\.org)\/uploads\/.*)\-\d+x\d+/i,/.*(?:url|src)=(https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp)).*/i,/.*thumb\.php\?src=([^&]*).*/i];
                var oldsrc = this.src,newsrc = this.src;
                if (oldsrc){
                    for(let reg of regs){
                        if (reg.test(oldsrc)) {
                            newsrc = oldsrc.replace(reg, '$1');
                        }
                    }
                }
                var original=this.getAttribute?this.getAttribute('data-original'):"";
                if(original && original!=oldsrc)return original;
                else if(/attachment\.php\?attachmentid=\d+/.test(oldsrc)){
                     newsrc=oldsrc.replace(/(attachment\.php\?attachmentid=\d+).*/,"$1");
                }else if(/\.sinaimg\.(cn|com)\/mw\d+\//.test(oldsrc)){
                    newsrc=oldsrc.replace(/.*(https?:\/\/[^\.]+\.sinaimg\.(cn|com))\/mw\d+\//,"$1/large/");
                }else if(/gravatar\.com\/avatar\/.*[\?&]s=/.test(oldsrc)){
                    newsrc=oldsrc.replace(/(gravatar\.com\/avatar\/.*[\?&]s=).*/,"$1500");
                }else if(/uc_server\/avatar\.php\?uid=\d+&size=.*/.test(oldsrc)){
                    newsrc=oldsrc.replace(/(uc_server\/avatar\.php\?uid=\d+&size=).*/,"$1big");
                }else if(/\.md\.[^\.]+$/.test(oldsrc)){
                    newsrc=oldsrc.replace(/\.md(\.[^\.]+)$/i,"$1");
                }else if(/\.126\.net.*\/\d+\.\d+x\d+\.\d+\.[^\.]+$/.test(oldsrc)){
                    newsrc=oldsrc.replace(/\/\d+\.\d+x\d+\.\d+\.([^\.]+)$/i,"/5.5000x5000.100.$1");
                }else if(/\.ytimg\.com/.test(oldsrc) && !/mqdefault_6s/.test(oldsrc)){
                    newsrc=oldsrc.replace(/\?.*$/i,"");
                }else if(/meituan\.net\/.*\/avatar\//.test(oldsrc)){
                    newsrc=oldsrc.replace(/\/avatar\/\w{2}/i,"/avatar/o0");
                }else if(/hdslb\.com\//.test(oldsrc)){
                    newsrc=oldsrc.replace(/@.*/i,"");
                }
                return oldsrc != newsrc ? newsrc : null;
            }
        ];

        var Rule = {};

        // 兼容 Imagus 扩展的规则，自定义部分
        Rule.Imagus = {};

        /**
         * 兼容 Mouseover Popup Image Viewer 脚本的规则（非完全）
         * 1、新增了特殊的替换模式：以 r; 开头。
         * 2、已去除 http:// 头，后面会加上。
         */
        Rule.MPIV = [
            // 图片
            {name: "百度图片、贴吧等",
             r: "(hiphotos|imgsrc)\\.baidu\\.com/(.+?)/.+?([0-9a-f]{40})",
             s: "r;$1.baidu.com/$2/pic/item/$3"
            },
            // {name: "百度图片2",
            //  d: "image.baidu.com",  // imgt8.bdstatic.com 类型的图片链接
            //  r: "image\\.baidu\\.com/detail/newindex\\?",
            //  q: 'img[alt="preloading"][src*="/pic/item/"]',
            //  // description: './../../following-sibling::div[@class="ext-info"]/a',
            // },
            {name: "GoogleContent",  // 来自 Imagus 扩展
             r: "^((?:(?:lh|gp|yt)\\d+\\.g(?:oogleuserconten|gph)|\\d\\.bp\\.blogspo)t\\.com/)(?:([_-](?:[\\w\\-]{11}/){4})[^/]+(/[^?#]+)?|([^=]+)).*",
             s: function($, node) {
                 return [
                     // 'http://' + $[1] + ($[4] ? $[4] + '=' : $[2]) + 's0' + ($[3] || ''),    // 原图
                     'http://' + $[1] + ($[4] ? $[4] + '=' : $[2]) + 's1024' + ($[3] || '')  // 1024 大小
                 ];
             },
            },
            {name: "pixiv（部分）",
             d: 'pixiv.net',
             r: /(pixiv.net\/img\d+\/img\/.+\/\d+)_[ms]\.(\w{2,5})$/i,
             s: 'r;$1.$2'
            },

            // 常用站点
            {name: '豆瓣',
             r: "(img\\d+\\.douban\\.com/)(?:(view/)(?:photo|movie_poster_cover)/(?!large)[^/]+|(icon/u(?=\\d))|[sm](?=pic/))(.*)",
             s: function(m, node) {
                 return [
                     // 'http://' + m[1] + (m[2] ? m[2] + 'photo/raw' : ((m[3]||'') + 'l')) + m[4],
                     'http://' + m[1] + (m[2] ? m[2] + 'photo/photo' : ((m[3]||'') + 'l')) + m[4]
                 ];
             },
             note: "人人影视的豆瓣脚本需要用到"
            },
            // 购物
            {name: "淘宝",
             r: /((?:img\d\d\.taobaocdn|img(?:[^.]*\.?){1,2}?\.alicdn)\.com\/)(?:img\/|tps\/http:\/\/img\d\d+\.taobaocdn\.com\/)?((?:imgextra|bao\/uploaded)\/.+\.(?:jpe?g|png|gif|bmp))_.+\.jpg$/,
             s: "http://$1$2"
            },
            {name: "ali1",
             r: /(.*\.alicdn\.com\/.*?)((.jpg|.png)(\.|_)\d+x\d+.*)\.jpg(_\.webp)?$/,
             s: "$1$3"
            },
            {name: "ali2",
             r: /(.*\.alicdn\.com\/.*?)((\.|_)\d+x\d+.*|\.search|\.summ)\.jpg(_\.webp)?$/,
             s: "$1.jpg"
            },
            {name: "1号店",
             r: /(.*\.yihaodianimg\.com\/.*)_\d+x\d+\.jpg$/,
             s: "$1.jpg"
            },
            {name: "京东",
             r: /(.*360buyimg\.com\/)n\d\/.+?\_(.*)/,
             s: "$1imgzone/$2"
            },
            {name: "京东1",
             r: /(.*360buyimg\.com\/)n\d\/(.*)/,
             s: "$1n0/$2"
            },
            {name: "京东2",
             r: /(.*360buyimg\.com\/.*)s\d+x\d+_(.*)/,
             s: "$1$2"
            },
            // 电子书
            {name: "当当",
             d: "dangdang.com",
             r: /(.*ddimg.cn\/.*?)_[bw]_(\d+\.jpg$)/,
             s: "$1_e_$2"
            },
            {name: "多看阅读",
             d: "duokan.com",
             r: /(cover.read.duokan.com.*?\.jpg)!\w+$/,
             s: "$1"
            },

            // 视频、新闻
            // {name: "优酷电视剧",
            //  d: "youku.com",
            //  r: "www\\.youku\\.com\\/show_page\\/id_.*\\.html",
            //  q: ".baseinfo > .thumb > img",
            //  example: 'http://www.youku.com/v_olist/c_97.html',
            // },
            {name: "人人影视",
             d: "yyets.com",
             r: "^(res\\.yyets\\.com.*?/ftp/(?:attachment/)?\\d+/\\d+)/[ms]_(.*)",
             s: "http://$1/$2"
            },

            // 论坛 BBS
            {name: "firefox 扩展中心",
             d: "addons.mozilla.org",
             r: "addons.cdn.mozilla.net/user-media/previews/thumbs/",
             s: "/thumbs/full/",
            },
            {name: "firefox 中文社区",
             d: "firefox.net.cn",
             r: "www.firefox.net.cn/attachment/thumb/",
             s: "r;www.firefox.net.cn/attachment/"
            },

            // 软件 SoftWare
            {name: "非凡软件站",
             d: "www.crsky.com",
             r: /pic\.crsky\.com.*_s\.gif$/i,
             s: '/_s././',
             example: "http://www.crsky.com/soft/5357.html",
            },

            {name: "zol",
             d: "detail.zol.com.cn",
             r: /(\w+\.zol-img\.com\.cn\/product\/\d+)_\d+x\d+\/(.*\.jpg)/i,
             s: "$1/$2",
             // s: "$1_800x600/$2",
             example: "http://detail.zol.com.cn/240/239857/pic.shtml"
            },
            // 游戏 Game
            {name: "天极网",
             d: "game.yesky.com",
             r: /_\d+x\d+\.([a-z]+)$/i,
             s: 'r;.$1',
             example: "http://game.yesky.com/tupian/165/37968665.shtml",
            },
            {name: "超级玩家",
             d: "dota2.sgamer.com",
             r: /\/s([^\.\/]+\.[a-z]+$)/i,
             s: "r;/$1",
             example: "http://dota2.sgamer.com/albums/201407/8263_330866.html",
            },

            // 漫画
            {name: "nhentai",
             d: "nhentai.net",
             r: /\/(\d+)t(\.[a-z]+)$/i,
             s: "r;/$1$2",
             example: "http://nhentai.net/g/113475/",
            },

            // GithubAvatars
            {name: "GithubAvatars",
             d: "github.com",
             r: /(avatars\d+\.githubusercontent\.com.*)\?.*$/i,
             s: "$1",
             example: "https://avatars2.githubusercontent.com/u/3233275/",
            },
        ];

        //图标
        prefs.icons={
            actual:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFQkE5RjA0RDk2MzhFMjExQTU0REJGNDRCQTFCOUNERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOEE0N0FDMTNENjgxMUUyOUQ4REU1MDlFRDYwNTkzOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOEE0N0FDMDNENjgxMUUyOUQ4REU1MDlFRDYwNTkzOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVCQTlGMDREOTYzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVCQTlGMDREOTYzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nuhUUAAAAVFJREFUeNq01bGqglAYB/BuiQ0hDU26aTgYtES74As4iG/gQziIbyAStgu2NhQtvUGk6Au4OTg4qCjk5ulc4l6sa/eCx/sfDpzjxw/9OB9+AAAGvaQXCCLDQU/5N2i1Wl0uF1EUkXq0WCyKogiCoAvShE6nE9wahoHabEEQ4JrnOWqPqqqCK8dxqPdot9vBbVmWs9kMqUcMw2RZBk8cx0GCHt91PB7TNNV1HQn6M9PpFBUaj8f7/R7We55HUVR3yLIs8JXr9ToajbpA6/W6rmvQiKIoXaDz+QyeE0URhmHt0Hw+930/DMPlctlU4Ay+vM4jsiy3QARBQOJRkSQJTdPf0GazAW05HA4tkGmazSLXdXEc/xyi4TCO41bodrtNJpMniCRJePpSp2kafMTzPHgfSZKeIFVVfxbBGWZZdrvd/gLZtt3xZr8bEayvH8ldgAEAjySkPffpTOwAAAAASUVORK5CYII=',
            current:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkFGMjYxQkQzOEEwMTFFMkJBMzdENzI0QkVEMjM3NjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkFGMjYxQkUzOEEwMTFFMkJBMzdENzI0QkVEMjM3NjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQUYyNjFCQjM4QTAxMUUyQkEzN0Q3MjRCRUQyMzc2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQUYyNjFCQzM4QTAxMUUyQkEzN0Q3MjRCRUQyMzc2OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkXfwy0AAADoSURBVHjaYvpPJcDCwMDAyMjIQBkAGsTEQCVANYNY0FxIkmbkMGHBI0cwXGjiNewGffr06dy5c1QwiJeXd//+/dSJNUlJSZLTEiYbyPj8+TNJGrG7SEtLa9++fXV1dZS6iAyNxEb/5MmTIZnz5MmTFLno379/8IxOgovOnj17+/Zt5CBDTvGhoaFEuQiYiCA2KyoqQsQnTpyIXPRs2LABi0Y0PjD5fPv2Da6npqbG3t4esxgLDg4mYFBFRQWyhu/fv0+ZMgXToPnz56NpZARhmP/JLkagRS0ZZQgNS0iqFrWkBg1WABBgAMViMFcYqRWbAAAAAElFTkSuQmCC',
            magnifier:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFOUE5RjA0RDk2MzhFMjExQTU0REJGNDRCQTFCOUNERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OTVBMUFDOTM4QTMxMUUyQjU3OEY5MDVFQzA5NDg3NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OTVBMUFDODM4QTMxMUUyQjU3OEY5MDVFQzA5NDg3NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4REEyMTVBQTMzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU5QTlGMDREOTYzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c9dtRgAAAdpJREFUeNqsVS3LwlAUdjIFgx9hCyJDRPEfKIqMBe2GMbCYzDMb/BN+NAWjRottRsMQ1gWLwWawqEFh78M72a53H4LshnF37nOenfOcc+4Y0zQjoaxQiEASpUw8z/d6veVyeTwen88nntjDAnswFwMyhmGsl2azqarq5XLRNG2/359Op3w+X6lUWq0Wx3GTyWS73fqmZacGFvi3221PKOw4BcaP6B0RIp/NZovFAuH4BS+KYrfbzeVy6XTayeg/GyciqDCfz7FpNBoBQgADpLtQjthQAZFTbqvVirIAA6TnN95EUBTqkge1Wi2TyVBoYIAMqhoqnUgkXq8XUtvtdogFZXo8HrfbDaBOp2OhWZaFMRaLORpTGqFfisUiqRE2m82G+iwwQAZp5BlzPB6nLG4FaI3cKhqG0e/3BUEgjZ41+QgPfbRer9F1AeXHKTDkrJCp0Z09GAz8WJDU4XAAXtd1NxFrQ605Go/HpVLJc9ZSqVS5XAamWq1+v0au16s1/efzGd1gT3+9XjeJpSiKb2okbzKZtBwKhYJlH41GJBHE+k6UzWbv97vtMxwOJUkyXUuW5S9E0Jt0QCtPp1M3Ea4KkujjYvvh5rVHhPU8+GFFIyEtNqwfyZ8AAwDsuJgtGILBsQAAAABJRU5ErkJggg==',
            gallery:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTEwMDAwRUIzOEEwMTFFMjhEOEM5NkVGODMwQkUyRjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTEwMDAwRUMzOEEwMTFFMjhEOEM5NkVGODMwQkUyRjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTAwMDBFOTM4QTAxMUUyOEQ4Qzk2RUY4MzBCRTJGOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTAwMDBFQTM4QTAxMUUyOEQ4Qzk2RUY4MzBCRTJGOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvbSbv8AAAD8SURBVHjarJVBDkQwFIZ10q0DWNq6hEOIu1iIOwh7V3AC1hZcwC1I2HnTmWbedMqUVv+ElPZ9/veirwQAHCuyAmIQaoYjhEhvqGJOKwlqliZfKX6bnnq+6IveKb/oi16s5amvh2NJKtA0TcMwWAC5rtu2rQUQk+d5eltkf+eDeZ4vhqscBUHQNE2WZXcdaYU/tMpRFAW81XXdX2SSJKeOtm2Dj+SEcMTFfOGivu/HcRRLBoLiOD4AIR59sZ+IB/i+z2fzPBdBdV2rQOhrWRZ8TNM0DEPYKYqiY5DkC7Wua1mWe1BVVQgir+t3rxu03W/PNushcmOzcpA8BRgAZvU/uPa6ZfkAAAAASUVORK5CYII=',
            search:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAqFBMVEUAAAD///8KCgq/v7/MzMwFBQXj4+OTk5P9/f2mpqakpKSVlZWMjIyJiYkuLi4qKiokJCQZGRn5+fny8vLd3d3c3NzS0tLOzs7Dw8O7u7u3t7d1dXVubm4ODg719fXn5+fa2trW1tbQ0NDJycnGxsaysrKbm5uPj496enp5eXk9PT03NzcjIyMWFhYRERH29vbq6uqsrKyenp6Ojo5kZGRCQkIzMzMmJib+wYUxAAAA/UlEQVQoz53R527CUAyGYb9JyCIkbMhi79Xd3v+d1ZymAqEiVXx/ju3nj3Us3Ikgf+Yf0MzTXtfeJDdgNTqYPHmna2gtgH4QDM5P8wKtGQw/alrtbOgdfqGmnXcei9YROFYFG6jrqEjTXEdv0PiBwwi7JtYSwFbJaMcGIkaxyDt0J1Do4h1WBrqEIvJCr7Rm2FqucA24vGq3ZCoyZ6ilx9hAnY6uXoAzh60u/0xoIGmTiVhDUCtFAvxPAxKZBU8NZ7A+iuRmeQOWA5FU2UK/rEC+XMj2ookDGCeXT0ym4C/qnt2GSXz97cfQx8QPWzeH2q8d1x14u6p96OZ38g2yyQ1gIwkXlgAAAABJRU5ErkJggg==',

            retry:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzIyMjhBQTUzNjdDMTFFMkI3QThBNTAwQUMxRDJGREMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzIyMjhBQTYzNjdDMTFFMkI3QThBNTAwQUMxRDJGREMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMjIyOEFBMzM2N0MxMUUyQjdBOEE1MDBBQzFEMkZEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMjIyOEFBNDM2N0MxMUUyQjdBOEE1MDBBQzFEMkZEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj9mTMsAAALCSURBVHjadFJLSFRhFD73v4+5d+4dmgkkEcxFOOo4OQ90FgVJ2lhihFk5ozWKGxeBBEWFmA/GzFVFu1xFRrVrHbiJaGVqCDUZEdKAi1mkQjWv++r817kXW/hfzv1f53zfOf93mNraWjhoMIQBQsiiaZjXDcP4s/8um81aMzHh4I/neJBlOSUr8meWY9tpgH1nD2KtbcPBEjYmCMIbSZR+u91u0+PxAFqdoijveIF/yDCMsC8eONM07XQFZJyS3NK4y+UiCAIcxwHP83vALEv3N/N/813FYjGBRxkHAOsEURSfSpI0IrtlQCYrANkcJgpI96FwqO5K/2WPk4H147gOTHlEkRXgeA7CkTAkBxLgb/BD34VLQFisFImSA0lIDibeY8iGA0BRa2pqZstq2XJsamqEqZnJt3g3fepE+7LiUUzfYR/cun0LotHIdFskli6Xy7C1tVUBQKlUXW2lZaiqCr19vatt0Vh3qVSy0g4EAzCTntmtrj7SH2mJLmmqBva72RmwxUJRwPotAJ/Pd6dULIGu66ARDR4/efQJ73pbmkNZerZfAUvGtfVVQIkAGwU0TYMHc/M56khZKCAGnww2Hs/qmi4h2ShmOopzwgEIBcN6vb9epcEUZHNzc9ZqFQQwdAOa6gMFeo4NdVd0iQuiJC6g/5gDQNnOdZ9dozN90EK+cBFVWQAGDlVqFVDSCWS+hz1C5YaxG2P5/wDiXfHJM/FOR2+UdBSbaRfXPwWXUELW+9gbLO2NnvM90NF5Ou08Ik2zuSG4tLq+slhVVTX06uVrwCDA3qdlHKVZ0UBqV68NQmo49Qz9P+Ryub0O9vq8QBgC335sCLifynzJjC8+f0FWPq4A1Ztm1NrWCkPDKSPQHJhHn7T/WEN5+9d2BcDr3VtUmL5+z8RwO4EWR5PQCmhLaHP4oMu2Qjs7O1bcPwEGAErKEckpB5KiAAAAAElFTkSuQmCC',
            loading:'data:image/gif;base64,R0lGODlhGAAYALMPACgoKOnp6cnJyaamppmZmVhYWGdnZ3d3d4aGhgEBAdnZ2UNDQ/b29r29vbGxsf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUU5MTZGNDMxQ0E4MTFFMkE1Q0NEMTFGODU0MkUzNzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUU5MTZGNDQxQ0E4MTFFMkE1Q0NEMTFGODU0MkUzNzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRTkxNkY0MTFDQTgxMUUyQTVDQ0QxMUY4NTQyRTM3NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRTkxNkY0MjFDQTgxMUUyQTVDQ0QxMUY4NTQyRTM3NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn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',
            loadingCancle:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzBFMjYzRTUxQ0IwMTFFMkE5RkRDMDFGNUY3NTA2OTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzBFMjYzRTYxQ0IwMTFFMkE5RkRDMDFGNUY3NTA2OTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMEUyNjNFMzFDQjAxMUUyQTlGREMwMUY1Rjc1MDY5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMEUyNjNFNDFDQjAxMUUyQTlGREMwMUY1Rjc1MDY5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmI2XfsAAADqSURBVHja7FTLDYMwDI1puwQr5MCJKZCyB3cklsg9GzAAEjAEezBFhRtHISr/T9VD1VgyJP68ZzsBQET2TQFP8McEaZoGJ7F6pdTMeN9KaNv2nR3iODYLbaeX82k7nO6g67oRiBCC6VgDBABYluUIhx5hGM5w9sbgKrOARLgIfrWDQXCvgLUOVgmiKGJ2HEarqhoFJklicod8zjkriuL0iLY6OHS/jxCgrn5mtDb8lADrunabPM8fpMPe+vASAc20aZrpgT6tusOlGIpdk60PLciy7EYLKWW/dIO0P5gU2vu/qSf4QYKXAAMAJ5qBE+5PPaUAAAAASUVORK5CYII=',

            hand:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjI3OEJEQkYxQ0U3MTFFMjg5NDZFNzJBMTc5RTBBMzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjI3OEJEQzAxQ0U3MTFFMjg5NDZFNzJBMTc5RTBBMzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMjc4QkRCRDFDRTcxMUUyODk0NkU3MkExNzlFMEEzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMjc4QkRCRTFDRTcxMUUyODk0NkU3MkExNzlFMEEzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjEL5KQAAAHBSURBVHja5FRNywFhFGVmkM9EEaWQEik1Fqws/AWJn2Dl/8haKTsW/ANljaQslLLwka98NjNOpvTkfeadUXo371k83bndOXPuufcZfT6f130DjO5L+EOi0Wg0GAxUyzhqdj6fX6/XYDDIsmytVlssFo1G43w+z2Yzh8Ph9/u1KspkMsViURRF+dHn8+G0WCzVarVQKHygqFQqCYIwHo+Px+MrGY1GcTqdzg882mw2OMPhMOheSbvdTvY+nU7ViWCKJEmxWOx0OklPrNdrtCbHt9stnU6Xy2V1ot1uB4O8Xq/b7RafQEfJZBLB/X4/HA5YY7PZTL7CxuNxOdput5g0JNhsNqPRGIlE8PFUKiWrgAQ5QNcejycQCGCsqKcQ8TxfqVSsVmu/30d1NpuVaHC5XGAxmUytVgtfpUxtuVxyHIfBJxKJer2+3+9hitL6YaFQT28N9AzDhEIhGAF1l8vFYDBQRWFLu90uKed9j3q9HkwFF4rgJTl7EhC7Wq1U9qjT6UAzLBCVIW+Z+kI2m01MEIGgAK1EQLvdFpTxZvNvRPBoOBxS+8IQcD+0XlpgMpnkcrmfefIak9D/53+2RjwEGAAlkHhWHev9/QAAAABJRU5ErkJggg==',
            rotate:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjM2M0UyRTcxQ0U3MTFFMjgxRDNEQkM4N0Q3NTg2QkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2M0UyRTgxQ0U3MTFFMjgxRDNEQkM4N0Q3NTg2QkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMzYzRTJFNTFDRTcxMUUyODFEM0RCQzg3RDc1ODZCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMzYzRTJFNjFDRTcxMUUyODFEM0RCQzg3RDc1ODZCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlX779gAAAJXSURBVHja3JQ5a6pREIbzqbigoqBeNyI2pghEAnZiJZZ2/gMLQZBgoYUEXIJgYyD+gYhYxcJGtDKQH6CIImKhuIAGFHHfl9yXyPV6DZoUKS6ZYjhHzzxn5p05H2EwGM6+w0hn32T/H4hy7I/RaNTpdCaTCYVCWa1W6/X617vVajV4BoPxOQgx1WpVoVCYzWa5XD6fz2k0Gn58fHxMJpMmk+n5+RlbMpm8H0UcdA0n6vX67e2tQCCIx+OlUqlQKFxeXl5fX+t0OuQokUiAttvtfD5/n3Wo0XA49Hq9r6+vgUAAFKSGLXw6nQady+WiWFx2c3OD+05lpNfrZ7MZSsAa8R6Ph0qlLhYLv99/d3fH4XB2J/v9Pi47CtpZLpfTarVisVilUkEjsFwuFyT7avszmUyr1cLCarUul8tsNnt/f48t8kJ2yPGrIIfDgRgsNBoN2ux2u5VKZT6fh3aQ1ul0HmMdglgslsVi2Sa1NQj89PQUiUQwTSQSCZJXKpXPQegFhCAIYrPZNJtNeOTi8/l4PN763cBC1h9ZpH11Go0GWo6bUQK80WiEPz8/Z7PZ0Gv9x8B6eHg4CrLZbEwm8+XlBY8ABSKATqfDq9VqeIzfDiQUCkOh0NEngmvRl0Qi0W63RSLRwblutwsEFlKpNBgM9nq9gwNkjP92hXbIZLKrqys8js2/ViwW397eoDooyAWjeEpsDHQ0GsULWH0w5IhROEE57BpYsVjsIwjtu7i4CIfDg8Hg2ED+LW1r4/EYg4dm7+pKpVLlchkjPp1OT3zYiJ/78f8twABFT5G5Yf+a5QAAAABJRU5ErkJggg==',
            zoom:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzI2NDFENzExQ0NBMTFFMjhDOUNGQ0NDOTYzODI4REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzI2NDFENzIxQ0NBMTFFMjhDOUNGQ0NDOTYzODI4REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMjY0MUQ2RjFDQ0ExMUUyOEM5Q0ZDQ0M5NjM4MjhERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMjY0MUQ3MDFDQ0ExMUUyOEM5Q0ZDQ0M5NjM4MjhERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjUXtsUAAAHTSURBVHjazJTHakJREIZzc63YS2xYsKx05cYXEHwBfQb3PpgbwRdw60oXtoWoWBAL9i7mQyGERMNNWeRfXA4znO/M/GfuEZLJ5NNf6Pnpj/T/QLK70cPhMBgMlsslC4VCodPpnE4ni++BVqsViFQqFQgEjEbjbDZrNpu5XA6cVqt9BBLD4fCHWuRyeSaT4fxOp1Ov17fbrdvtTiQSpVLpdDqJoijJo/1+n06nQTQajcvlQkXn87larbZaLeJkpZodj8fppd/v04UgCFD46vX6Xq83nU7JSgX5/X4oarWawyFOJpP5fL7b7TQaDXGyUs2mF7ygKTafryKITSqVitKi0ajUiqjCZDJh6of48XgkTlYqaDQacUcc/nyVeNVt7fV6y+UylUoCFYtFs9nMBMES3ykYDNpsNpfL1e1277LuzNFwOIzFYlarFYPokUUkEgmFQuv1+uWqQqHAncpksq9AaLFYMERs8Hg8ZNnD3dGawWDgGIfDYbfbP7ME6e8RPw30zWbDGrOy2azP53sb9DsVPVKlUuEe+OPwiH6xkgjz9W0QqtVqsGjqxrrN6g/fI56B8XhssVgY3bdyHr5HXyufz+OOUqnkB/wVCLXb7X//Zr8KMADSBu6sAZizOwAAAABJRU5ErkJggg==',
            flipVertical:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc5RkM3NzYxQ0Y0MTFFMkFGQzk4NzFDMzc4MTVBMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc5RkM3NzcxQ0Y0MTFFMkFGQzk4NzFDMzc4MTVBMTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzlGQzc3NDFDRjQxMUUyQUZDOTg3MUMzNzgxNUExMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNzlGQzc3NTFDRjQxMUUyQUZDOTg3MUMzNzgxNUExMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoWGg/MAAAFCSURBVHja3JTNboMwDMftaVyKVlrYCU68Ae/Ci/MQE1JRCuok1gNCnuMExgQEJnGaUaIA8S9/fwDmeQ5H2AscZIeBXqc3Xde1bcvzppvneb7v87wMSpIkjuOdEsqyrKpqGcSUoigQkPQgQuQZkN8gkKz0JUuALMtWQWxBEOyRQ+4csYXXUCTovYR6IGo3lHsYFRJtgKL3SPbooSMD8TPBoDxGOYeo73snKArFGa2z4AxJpOEo7XarXKArhzac7TKEDdDb+Qw/9TGx2AFDesAG7MyRfzqtVAn/0NlsX88n6BzIhNNiGyGms+ZFm4E+H495OrYStgSq68Y0r9QKx8sCLdH0lhN0r5XeRxYCQ3bpl7gFkTOQuoNtOrQlI3HTeZl8bQCX4OICNU2z8+t3gZRSaZruBPHmVdCH2H/5Zx8G+hZgAJcamqB3G0N7AAAAAElFTkSuQmCC',
            flipHorizontal:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVBRDRDOTkxQ0Y0MTFFMkI0OUU5NThEQzI4NTFGNDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVBRDRDOUExQ0Y0MTFFMkI0OUU5NThEQzI4NTFGNDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUFENEM5NzFDRjQxMUUyQjQ5RTk1OERDMjg1MUY0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUFENEM5ODFDRjQxMUUyQjQ5RTk1OERDMjg1MUY0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnl92swAAAFKSURBVHja3JTJjoMwDIbxqBw6SKVAT3DiDXgX3l9cRkhFLKIjekHIk9gJoXQhB07jILPFX37bAcjz3NnDvpydbDfQYXkzjuMwDMJvhrmu63me8K9BSZLEcWwpoSzLqqpegwSlKIogCKJLFIWXMAxOvv99PA73++/t1nVt07RN3bRd2/d9lmVL0LsagRhkSA75Sp7h4fUnEIhZKkhPpzhyqPBg1TVAMcBEMJnRjAJECxBKkloUlo+FWLkG8S1SU8sDPjDmM2u0UwScnJFDUCEHqIIrpR9qhHIAeZ2Tfj4rsUptlZW6RWSk2RAbIFw2Ho2nxFSN0E4RzUe9qUxiYPTZ1Agck5rqDhdbooC1gGNZbN7JWpFOEFbpb9VIBZnNrLCyj6KZT4znr7+u6zRNxcU0Tdequi4+7tn881kcPPkt6Ifsv/yzdwP9CTAAzDedWzss4SgAAAAASUVORK5CYII=',
            close:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAARCAIAAAAt9wkYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0I3NzA1RDAxQ0Y3MTFFMkJGMTU4MTc4OEQ2N0MzQjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0I3NzA1RDExQ0Y3MTFFMkJGMTU4MTc4OEQ2N0MzQjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQjc3MDVDRTFDRjcxMUUyQkYxNTgxNzg4RDY3QzNCOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQjc3MDVDRjFDRjcxMUUyQkYxNTgxNzg4RDY3QzNCOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmUW1owAAADqSURBVHja5FWxCoQwDL2W+x4X/QmHujvXzV0XadHN31HUn2gR/KD2AgWRAytETpTLEF5eSfqaaEvyPH/dw97W2rtIMcY8uytKKQeiKPKTP5fSdZ0DSZKEYQhAa72SdV0japIsy3D9XPdjjIHv+96FUkpPFqV0VwrnHD3dpmm+GCHEwdEJ2VVpTlhVVdtaEB6m2H2j9oTN87yVAuFhikclviuw8TAMWykQAonuCvJeWZZlmiaHy7IE37Yt+HEc4zgOggBREzmgVUdRFI4B4BhYwg2IpGl65ZXq+ZmvfoM838MfP4fPGNBHgAEAi7gyuvHuhZcAAAAASUVORK5CYII=',
            searchBtn:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAARBAMAAABQu4N8AAAAGFBMVEVnZ2dYWFhfX19qampUVFTl5eVjY2NbW1ua0D9wAAAAaUlEQVQY03WKwQ2AIBAE/ViADxsgsQJbsAA0GagAOyC27z0O1wfMJZvs7E17n6EXM1Hlr+kORJtUb6dgQWpVPhVSkQ8OYeOydOT9nOH/49RcyTW3Ko8F8kuDc1n5mvwKNslrMC1/9Bn5FxqpUThYQLEuAAAAAElFTkSuQmCC',
            rotateIndicatorBG:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC5CAYAAACfmiVfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDQzRDlCNjE4MjRFMjExQTlDNjhCQTlBOTYyNUVGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRDEzOEEzQTI0MjAxMUUyOTRGREE2NjkyQjdBREQ5OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRDEzOEEzOTI0MjAxMUUyOTRGREE2NjkyQjdBREQ5OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwOTI1OTNBMUUyNEUyMTFBOUM2OEJBOUE5NjI1RUYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA0NDNEOUI2MTgyNEUyMTFBOUM2OEJBOUE5NjI1RUYzIi8+IDwvcmRmOkRlc2NyaXB0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',
            rotateIndicatorPointer:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAADxCAYAAACEXZTsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTQ0RjM2N0YyNDJFMTFFMjk1QkFBRDIwRTU4OTdBRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ0RjM2ODAyNDJFMTFFMjk1QkFBRDIwRTU4OTdBRDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDRGMzY3RDI0MkUxMUUyOTVCQUFEMjBFNTg5N0FEOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NDRGMzY3RTI0MkUxMUUyOTVCQUFEMjBFNTg5N0FEOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psfyr6YAAArZSURBVHja3J1bbyNJ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',

            arrowTop:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAdCAYAAADsMO9vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjNFMkVGMDEyQzI0MTFFMjg3QzRFMzA4RUMzNUU1M0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjNFMkVGMDIyQzI0MTFFMjg3QzRFMzA4RUMzNUU1M0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCM0UyRUVGRjJDMjQxMUUyODdDNEUzMDhFQzM1RTUzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCM0UyRUYwMDJDMjQxMUUyODdDNEUzMDhFQzM1RTUzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlvCjVAAAAD/SURBVHja1JjRDYQgDIbZgBEYwREcgREYxREcoSMxwo3gCHc+0MQQPCgUKCT/G8r3GW0RpfoNfceHaLXYQPhvyFISJoJ/Shjp8NudKwGPucKcJeFFS9hC+KeElQLvCOBx3Mrw0yVOBnjMORoeGOExIBEeKuYP664UGIpEl67dAj9dwjDA10o0bz1KuyulmlCqV1PXpsK7Tv2jSsJ2hK+VsD1u3NpJ2dcaCc++JvXj2hnL9N5aLGBUZWAsGiAJvknCC4GvkfC4Tchd8Bn8G7iFNXMPVJdYzzoS+bf/Sr4NThB8TuK1lB4CD6NiiaPkh0XaSRpKQOlkiceASa6fAAMADgHRdvHjSZ0AAAAASUVORK5CYII=',
            arrowBottom:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAdCAYAAADsMO9vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzg4RUFEREQyQzI0MTFFMkJGRTVENTM1RUFERUEyNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg4RUFEREUyQzI0MTFFMkJGRTVENTM1RUFERUEyNjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODhFQUREQjJDMjQxMUUyQkZFNUQ1MzVFQURFQTI2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODhFQUREQzJDMjQxMUUyQkZFNUQ1MzVFQURFQTI2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl7tKzkAAAEVSURBVHja1JjREYQgDES5CizhSqAES7gSUoolUAIlUcKVQAmRD5hhPBXDkRgzk79V3uK4Roz5LZ86pJ6Mnpoyk28Jl9SYW4uJAl+4liMhVCItJrbwpWErtKnjjvBOE0fwmFltLTyCL/2tLxAom9c8Y4plY0NDuOuaGT5eZAoldVCJCQo81qmkwUQ3fClHNDEPhJ+J8I4SpWcNA+CHrylpgm2tD/GRAjN8zEysLxUwwlupZHAX7umkE+9N+NhhY2KkxHXIa7PPJVdNUOGHz1//mLgdvncnfYdepDwxv1XB96TJiPRiKRgAD+bmgifD944eXaOBlj8pqT87FhOq4Vujx9DRQPpIRNtJH8kEK/wLEc2TaxVgABhX1Dief8wFAAAAAElFTkSuQmCC',
            arrowLeft:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAwCAYAAADtoXHnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTkwNjJDNTkyQzI0MTFFMkI0NzZFM0NEMTRCQUU4NzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTkwNjJDNUEyQzI0MTFFMkI0NzZFM0NEMTRCQUU4NzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTA2MkM1NzJDMjQxMUUyQjQ3NkUzQ0QxNEJBRTg3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OTA2MkM1ODJDMjQxMUUyQjQ3NkUzQ0QxNEJBRTg3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps3mm0sAAAEHSURBVHjaxNhhDcMgEIZhMgOVMAmVMAmVgJRJQAKSJmESJoHRhSVkNIM7oC/J/WrSJ2nhA86EEMyk4WM9Yi3Fk0noDoZUr1jrbNRlYA7bWag9APO6j0Zr4Lf8KHRrBMNncg1A1/TP2sB9NneicrDzn15VYAe6pBe1gM8iIBSoBCyDQYn2gQrUd4NCdAwoQJ1g8d+qb2tArQC0Td+sgo4HK+g2BfyDSuLNiqPlAJWAThWgP6gkT716m8hQSbzpwQw9D8zQ88A4LoYY5OdFJhK2ZLBwwGIQC3xsa8M2cey4gh3MsCModtjGrhXIBQq7KmKXYuz6jzU6sJYO1rzC2nRYQ7Laen0LMACbElNZVX4epQAAAABJRU5ErkJggg==',
            arrowRight:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAwCAYAAADtoXHnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0M5MkUyMEIyQzI0MTFFMkJEREE4MzFDNDE2ODE0OTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0M5MkUyMEMyQzI0MTFFMkJEREE4MzFDNDE2ODE0OTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzkyRTIwOTJDMjQxMUUyQkREQTgzMUM0MTY4MTQ5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzkyRTIwQTJDMjQxMUUyQkREQTgzMUM0MTY4MTQ5MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrqtTzoAAADVSURBVHja5NjhCYMwEAXgows4giN0BEdwhBvFETpCRsoIjuAINsIJpfgjoZf3YhN4/4QPgj6TE7leQ0pMCQJaz5QtZbdUh/ULPPOqBS4X2GfUExtsC/eMqCcaM9EjMwPe7GXrCx494TUTjvZ8lYJoFhYGHP4CngrKw7WntQDW7uCZAbvWpdgLQ4EDo6dLYNe6vAf8kBsv+PY2C7p9MvBy0FZBt8KH/9rgIPy4Aj+YNQ1GBvhzvcEvUPCrIvxSTLmFwwcdlJEOZXhFHdPRBpKQ0etbgAEA5TXHBKbv1IkAAAAASUVORK5CYII=',

            fivePointedStar:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAUCAYAAADRA14pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUY4RUQ3MDQzRTA1MTFFMjk0NEY4RkZDQjhEODM4QTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUY4RUQ3MDUzRTA1MTFFMjk0NEY4RkZDQjhEODM4QTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjhFRDcwMjNFMDUxMUUyOTQ0RjhGRkNCOEQ4MzhBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjhFRDcwMzNFMDUxMUUyOTQ0RjhGRkNCOEQ4MzhBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkpRrF4AAAGOSURBVHjaYvz//z/DSAIsIKKsrIyQOm0ofRWfoq6uLjB99uxZqphnbGwMpqdMYaSKeTk5/yEeJgKEEmMgCWDAzGMi0sBwKKYWGDDziPGwHhBrQLEeFRw3oOYxkZBc0NmUJr8BMY+JyOQCA2FUSn4DZh6s0FIAYg4g5oby+YCYGYhlgVgVSb0aECcC8WMg/gvEn6DiX4H4BxA/GOzmwTysC8RLoAYRAvOwiIEMjkFy4KA1D5akNwOxORDfJCNJgfSYQc1gGOzmIefhG1BDt5BgGD6HDErz0Autj0DsD8QtQIyvzfkfqiYAqgcXGHTmYSul/wFxLRAfxWPgYaiaf0SE8qAyD1e1xAPEpngMNIeqIRYMGvNwedgBiNnxGAiSsyfBgYPGPFwe9kLLN5FAHIGWH7xJcOCgMQ9Xb8kNSh8D4mik+vAkEC8FYiskNcSAQWMethhWh7ZsmqHJ4gGS3AOoWDNUjRoRjhtU5mGLYU0gdgLiQzgs/APEdUC8B4i1gPgWAQcOKvMYR9oQD0CAAQAKvKHlERqdgwAAAABJRU5ErkJggg==',

            brokenImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkZCM0M0MkM0OTg2MTFFMjkyRUJDMzk3ODcyM0MwOEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkZCM0M0MkQ0OTg2MTFFMjkyRUJDMzk3ODcyM0MwOEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkIzQzQyQTQ5ODYxMUUyOTJFQkMzOTc4NzIzQzA4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkIzQzQyQjQ5ODYxMUUyOTJFQkMzOTc4NzIzQzA4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pne+/t8AAA/4SURBVHjazFp5XFXV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',
            brokenImg_small:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUZFMjU2OUM0QjI4MTFFMkJDMkU4RUREMjg3OEVCMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUZFMjU2OUQ0QjI4MTFFMkJDMkU4RUREMjg3OEVCMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RkUyNTY5QTRCMjgxMUUyQkMyRThFREQyODc4RUIyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RkUyNTY5QjRCMjgxMUUyQkMyRThFREQyODc4RUIyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuqVBnIAAATpSURBVHjarFV9TNRlHP/87v04zuMEhDsQEATithNEjRcnIqSHprxo09VUEC3zj5zNLG211lpuDVtzOWvWrOZcm6tpBkvI0HaKpFlwJcIhd8DxKl2Hx8u9cff0/R1YHqNWW8/2+T3P8/09z+f7fb7P5/v7cfir7ScI8d+an1BH6HrUyBgLWbSfDE6C79/A55qYGuzrfqBUhr9Je1NnE4tmRSB2e9yiWx2/QyEXg3fs9njh9/vh8U73Xp8PzB/AuMuLLYXp86wWy5G4+IVCj8dzhvZ3PCSaTcz9eM+Bguc/R4RaBlW4FPPkEigV0uBYLBDA4ZrCKn0cPqq7g3CFEmWr08VWq/UVnU4nGh0d/Yw47oYQa7TaWLfbJVmi4bC+SI/yXC3UCjECFHYgwCjSAPwCCaoMqai/cBYvnauGZ9wzvVejEfX22g5mL80U3Ouy8OR3uJmc6FvN5uas9PQwfm4bGcYXzZPotPRBKuIwRUf3QYIju3Ow/YnHYbxxC3k5y1HbdAtfX2zCA8dv0EYpkLRAPrYid+UbxPeegB5Zza2t13jS7w0G1BcWYmF0DMqyOMjnR8E0MI4Oux8HK3OwrSgbsvZODFZVQWm+hw35y5G1Kh9n2+S40jEBj3tS+mdSjUajkw+6yWBg7bt2sV8qK9nFwkJeL6zTamY1DXY2OMXY0swMZlCr2N0dO5hp505mq65m66RitnqZjplHGDt+wUQxMjfte5FXhSAjI+Mm7+Ci2cznBK6pKSQlJKCuaA1SF6Vh7aIRFOnTEN83hOObyjAeCATz3n//Pho8Prz29lFcahmETBKqAkFkZOST5KH+nf5+nLh8GUqRCG6SVXz8QlwqLkZW6mNId4yhZmMpxsgeVAaR5tbW4qqxEY6YtbAOOKBRhYUScxzHX22pra+v7RxFU1NfHyT3EokmLg7GigocLSnBGJ1EQqT24WGsoTXGpmvwLliJ/v4hxKnFkMrEIcRBuRG5l7qPKfKaiMhIob+xEa+uXw8nx0Eik2GMXsokEtgHBlDc0IC2ti5IYpJh6weyE5Lh9jJEhruDApurQPi6943a7UJyBM2pU8iYMfJNQdhGeOv9D3Bd/B2ePZgCmWD66yJVClGcvh1fpn2KuYj5s0hEKhXKaVBA4OUSeGThJ4RdL+zDjRsmnDz8Ia6aGiEXhkEukFOx+ENzPFMgYYMOx76wqChBudOJ3WQbJ8gJfBrmzThQEU4T8vKWYHG3Dos1abhp/QHXu4ywTw6FEhMpf8pvNWp1yia7Hc+Fh4OLj0eEVhv8ouzlhcmTyuWQkQxjY2ODka8rKUCufTUqsrfA4XyACc9EKHFPT88Vyml+NU0O5edDRQqIzczET3RRL/MRk2Z1ZVux1+WCglQRXVAA/ebN+EooRGn5WizrXoqt2Vsx4hwJJR4aGkrkB3pCAklLq9fjm7o6HKb5rzYLVryrw7ZjTyG5ZAM2d3eD2WxI2rgRKTk5UPOpOUOXHJeBtOi00AqhVCS39/QM8sPjhGPTkmFztaeplKPoXbNGw+ZT/0xV1ewlroclLaI0WGiQZ+rs/HlJamoE74zK1pGQmHjC1tvreDQIs8VikIhEhtzTp1G9Zw/2HzhQS/sb//HnZTKZUlpaWnqot9y+fTuJTNK54HK5Xj9//jybnJw89Hdr+Ii52T++/6v9IcAACHxjGrCZJqsAAAAASUVORK5CYII=',
        };

        //分享api；有需求的照着添加
        //api项，请返回给一个{url:url,wSize:{w:,h:}}，脚本会自动调用window.open打开，如果不返回任何的话，脚本将不做任何其他事情。
        //api的参数
        /*{
    title
    pic
    url
} */
        prefs.share={
            weibo:{
                disabled:false,
                name:'新浪微博',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACfklEQVQ4ja2ST2iTBxjGf++Xr0va2qqt02ntEkxo025DqUpjdeAOdj0YxIPgxYOKePHmwag77bDL0IlMKgoeeqgIQrapSOtFpFOc4GWb1n+kNqLWKNqmSZs03/fs4CplXjbcc3oP7/vjfZ/3gQ+U/dvGZ0f5POjSBeSGn3Ol6zsm/xNg4gQ/SGwyY5mEB+ycv4+L7wF+Wh4Org5VbwfWApeaHw5fBrhxCOezJrqAx8AuIFWu0OnOHR6Jtn4VMDsjKWxmJqkHiAFUnlQ3acn0cQJaAWw2Y01VgP3vNsjG4ruBk8Bc6J/AMeBrHC10GkqnardmI848byXwK7DXBRiNtm4DTkkyM0N/F5Lazey0JJlv5uWCi7yXwZTVFktmLJCYtNuRWPhj1/0dqLN5tdQkNxPs7CTwyRI0NUX5zh2K59NUMhmAa07jdLLp5sjEi2Os+cil3rKx+GlJu0Pru6zhyPfKuwHr7+9XLpezZDKpjo4O08yMXh/6xgrpn2Vmr3xpS/jRveuzt798umGjvEJBY2NjikQiAuQ4jlzX1dDQkCTJy08q2/aFsrG4srH41VmTHKAuuH6dnJoa+vr61NzcTG9vr3p6eqhUKhoYGHjrSSiIVVUJQFJ5LmBg5u6wyfdpbGy0RCJBPB63wcFBHMex7u5uzMwKZ8+hYtEAX3Dk3Z9+i0SbRqOt914dPKzym3E/lUqppaXFTyQSSqfTvlcoavz4j362pV2j0dZSNhbfMzc7BnBhebhuVaj6gNXX7wl9uWGxG/4UfJ9KZoTp6zdQPl8Cfsl73rftmQd/vAeY1dHFSwMrg6FVDYFAG1ALVMpS5n65dGvHsyf5f8b+f9FfksATEF5LDZgAAAAASUVORK5CYII=',
                api:function(args){
                    var url='http://service.weibo.com/share/share.php?'+
                        'title='+args.title+
                        '&url='+args.url+
                        '&pic='+args.pic;
                    return {
                        url:url,
                        wSize:{
                            h:500,
                            w:620,
                        },
                    };
                },
            },
            t:{
                name:'腾讯微博',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAADL0lEQVQ4jXWTS2hcVQCGv3PuuffOTJJxEslkNElRm5hoRZOKjyKKSEWwqNWFWLsQqRbc1UfVLLoRXbgqiCh0IYoPaCnWWqlQN6mpIPXRaqkk9ZGOJS+SmQzjZO7j3HOOi4jFhR/8m3/5/3xC+H4YPLhzX//9j+zq6S1XfClBAI7/8k+nrWV1aXFubvLLT5JjH+xTwUNPvbHx8WdefPaW6+j0PSwObRyZsWhr0NaROkdqITaOyBhWK339Ybl/7+8gxYa3Plt9YeuW0om5OlFmcc4yWAjYNdLH7b1d5D1JtZVwtFrjSLWOEAIpBT6CXy78WleFru6SdNBopTgc2wa7eWlsgKmFJm/+eImldsqNPQV2DJW5u6/IxLeztBJLIiAf5PLKGEsr1cRxwmh3gYnNg7x2epbPZ2v/TnF6ocHB6UX23zPMxPgAz0/9hhCCzDohE21oRpp2onn6hgpfVescnF4kSzQ7h8u8Oj7AplKe2lrC3skZ7qhcwWBe0Y5SkkxIqbWhESVEUcLm3iKHp+eJ4pQnR/rYMz7IY0Nl3rlvlNBZLjbW+G6hwdiVnURxSpZlQqba0mglxLGmK/BYaETE7ZThYoix6w92+B7lUBHHmno7xXOOONboDCnraynzzTYrrYiZWotrijmaUcJwTxepMXhSMvVnnZN/LLPSjNhYKjC9/Be1VkQ91kI561htJxjj+PjnSxhreP3eUU5WV3jgwxn6i3l+mG+AEDx8fYWru3Icn1nAGAfOCiU8wZo2eL7i7e8v0tcR8MpdI4wdmKSVGZaXW3i+x45NA7y77WZ2f/ETLevwlMQ4nBICIuNQykM7x547hzhwtoq2jo+234on4barShRDn+eOn+PTC0soXwHg0tQpqQSpBBUosJat1/byxLGzdHaGnKiuUAwV75+f48xSk2ZqUDl/XQ0HRidWSavbTnoFP/DIedCT96mupeApjszWLoslPPycd1ky55Btk0h37tQhbTNyoWJDqYOltqazEFDI++TyAUHoE+Z8wlARBoowVHi+xDiDO//NYYEf5PxHd++XN23ZLrpKFZwDIdbzP7hmbc6c+fpQdvS9l/8GEfOFXVv7AEQAAAAASUVORK5CYII=',
                api:function(args){
                    var url='http://v.t.qq.com/share/share.php?'+
                        'title='+args.title+
                        '&url='+args.url+
                        '&pic='+args.pic;
                    return {
                        url:url,
                        wSize:{
                            h:500,
                            w:620,
                        },
                    };
                },
            },
            qZone:{
                name:'QQ空间',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACD0lEQVQ4jbWQvWsTcRyHn7vf5bVJ2kaSplXQKL5QUUPzBzhUXBQcFRw6CAFBpzooFKRQkCIBxa3SoSCoOHXIInQSFBELRShC1b7Q1qTBNJdLTO5ydz8H29BgDTj42b7wfR4+fOB/xsjFs0Yunu30o3SAo8Dqznk4fGmrtN+f2kF+S0TCIREJh4Cb/9TAyMUDwKrnYCIGkuZGobjTot5RoM/GzgAx4KrWHcp4+k8jrXXsHzq2Xp0CXgLF7ivFTy1B4dWAqyAdQEP97VNUlej5xzjlHLI2D0B1pYS0baQEXBegAawpxecHksBc8OSFpLfvLGrgFLVnT7EWPlCtOViWxGpIjk8ebTU1t3TMrcoyMKwA5GeiCWDOn4gMBgZ6ABDx66CqfB4Zb4Prm2Ua+coiMJwYKeVbG6xP9USB18GB7vSu5OvYMscmkm3wz039I3DxUKZc+mPElSeRhOoR3/suT7KUuYPXr+DzKXQFBSIVwvBUcJtO/5Hblfwuo+0V2Kab1IQHM/+GEzOzALhmEdncpr70CPdLFdtsJoG/CWRKBAX1tffUvr3F3K4B4OvtQtUEEoFtyhTwbn+B5aa9rsBYK9PYNqrAQ8Cpbup3/b3hkKoJbMtN72XaBI7lpoyNkgNMA/fPPTDzAAv3fNO1gj4O3ABSe5nWiPOjXi/wAhgbylqL7JP5Ue8gMAFcG8paFsAvetnTGCl2Yn0AAAAASUVORK5CYII=',
                api:function(args){
                    var url='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+
                        'title='+args.title+
                        '&pics='+args.pic+
                        '&url='+args.url;
                    return {
                        url:url,
                        wSize:{
                            h:650,
                            w:620,
                        },
                    };
                },
            },
            fanfou:{
                name:'饭否',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAABb0lEQVQ4jaWTXy4DURTGf9OOCkljTBNCiEksgB3oEliBLmF2oHYwVmC6Auyg3psYPJGIIqm0aXVkpI3SHA/HmDKtB77k5px7c+53/hvrlyLdIX/CfBbM1jtEnwS+A34HqlHa2MpCMa8HwH2ANwFzykgMdgvJ581Z8FbAMmFj5jtZpaNyygDDDkSe3qFUgEMn7bnyGVF9AEEPwpF0bRPM+OIuqjyNYCsPz0OYy05OKWEJRIpXIiIiXlOkdKu635aJKDdEqInYgUgmzr/Sgc0ZTeU0Us8x7gaw/6jnJzIAxyGU6hp69QWK14nBeV9luQFeU/Wg94PgN/htWMuBk4Nt6w8EXksLWl7WQp/3tSMxzHGfSoXEW0yyt6T6zs132xSBu6DtAzgJVdZfJ0c4NoWDlspqBN6qDthJqOEfrevbF+xAe0pNZ8C5SM9A3HfrTOS4q2/uvc6BkT8TicZso5MDZ1rDHy0aaH2qEQwB47/r/AEuq9/lRZUysAAAAABJRU5ErkJggg==',
                api:function(args){
                    var url='http://fanfou.com/sharer/image?'+
                        'u='+args.url+
                        '&t='+args.title+
                        '&img_src='+args.pic;
                    return{
                        url:url,
                        wSize:{
                            h:550,
                            w:650,
                        },
                    };
                },
            },
            tieba:{
                name:'百度贴吧',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6ElEQVQ4jaWTy2sTURTGfzOdSbFNpQRbX1DjYyPFlYyuogtFEcFtBSldFhc1IMFFQYpd+CjYhW4UXAkiRPSPUEEqiNKmPhKSSUIbzYM0bRaZV3JchMRE46b9Nvdwzz0/Pu53rxIyTGEH0gDefgxua/jMqTRqr0YibnNvvkhsxQLATDmYKacnpCfg2ZNNXj6v8vB+GTPlMHU1R/h6viekC1DZqLfr4UCzVSo29xxX2nWntFaRzbjMzRbx+1UeP93H4kKJi5eGGD/RTzgSoPPc2CH9DyFkmCIiEn1RkWMHEhIyTIktWyIiUqvVpaVU0pbJiTWZnFiTTNoREZGQYUrbQfCoj/0HNfaOamTSLgODCosPyvTpEL4Z4HW0yreYQ2WjTv6X13bRBhindxGOBCjkPY6P+5iZzpOM2+i6SrlU587dEZbe1yCos2ek7987ALh8xc/PnMetGwV+fLUBsKwGH97VmI0UWHg0SjbtcviIr3cKyYTLzHSeL5+b+XseaFpzXV1xmL9dYiyod450A95Et1hdtvG8v6LSoLrV4NOSRTbt9o4RQNPBthooqoLjgDQEG1BUBYBarUFu3fs/4NrUMLn1OvHvDruHVM6eH2g6e1WlutngpNHPuQuD3fZa72A7ChmmKDv9zr8BrHscNfGR3bQAAAAASUVORK5CYII=',
                api:function(args){
                    var url = 'http://tieba.baidu.com/f/commit/share/openShareApi?'+
                        'title='+args.title+
                        '&url='+args.url+
                        '&pic='+args.pic;
                    return {
                        url:url,
                        wSize:{
                            h:600,
                            w:630,
                        },
                    };
                },
            },
            renren:{
                name:'人人网',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAAC10lEQVQ4jXWTTWhUVxTHf/M+nSTjTCax+dAkxk5lGo2ttMUGBJt0FEFUsJa0i0JXQpFu7KLFgIsKUgpdlRYMFApZKtRNrYkLKYUKFiWQtgq1nUAmkGgMiZN5M++9e+/pIvURIv3DWdxz7v93uPdwUmySndk56O04esbJFYec3EuviY4jXZ2dUU+mbzbmfhqX+mJ5s2ddKcv2d42O5Y5cC/3PZ2T8VkVERMJYy/itimy5MC3Zw1eq3o6jZzbaHICU7aVbXr84pYffPvi02IZZ1ZhmGwDPsTDNNo32DPHp/S3+3xcvOzdfPRxMf/keYrQFkB44+616a+RgUGjDPAphvkZlNU66VFZjmF9DVzVBcRuU3jnt7xodA7DsXHHI3n/yw3p3HuYCWIogUDSUSQANZaCm4HEIcwGNrizpF0fHrPS2XsfvOfZR2L0VlgKoKxDAGCIjCSAyAsaA0lA1GGMIX+7y3IcjH1hO274RZblQ06AADSihVMgmgFIhC0qSGlVF7Pu4L7xxzLL81k4TGVAGjIAROtsdju9uTQDHd7fS2e4kdZRBa7CbuwpWynZsQgXarEeoKR3IPzfl0oE8hHrDPQWApYPH81ao/iMLfdtdJk70PQeYONFH33Z3/QlGsBsxOlgsW3p55menFoISero97pwbSEznr89y/vpscr5zboCebg+U4K41iB/99iN2rjiUOTkpg1/fl4VaJM+0UI0kf2pS8qcmZaG6IV+LZM9Xv0vuyLUwle7ot/TKg9v6n6mJfWFER5ObdBu+dI/lMMVymGL40r0k39HksjeOaZSvfCH1xbINoJ7cvVFe6T306/yW3j39Gd789DYPH6xBtgl8h6XyU77/pcIrOzOc/eYPpn64erX+5+WPQSSVoFOW7fe/+1m68P6FuuV5qiWNTnsA2EGEW6vj69pa/f53n0SVG+OJbfNvP1tnN7/3kL21fxBArfx19//W+V9oRmy7yi+Z7gAAAABJRU5ErkJggg==',
                api:function(args){
                    var url='http://widget.renren.com/dialog/share?'+
                        'link='+args.url+
                        '&title='+args.title+
                        '&pic='+args.pic;
                    return {
                        url:url,
                        wSize:{
                            h:600,
                            w:650,
                        },
                    };
                },
            },
            douban:{
                name:'豆瓣',
                icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAABj0lEQVQ4jZ2TzSuEURTGf/edUT42XiJFMY2o2RA1ioXUKDtssaEs/AHMzlZZTllMFnY2FsxOzAIxoRTJ1/iYKPmenWy8cyzueM1FwlmdTs95es5zn6uaIx2yc73Lf6q5shFF2JZ/bbsVtiU03SN/rdB0jxC2xQtwdJ9kfGkCBEAQ+V6UUsrtj26TIOScIBAorwcBETHAYM4O705AAQq874DWmiAbI4u/urptqovE1bZJ4GQcAM6fUnTP9H27GBucxV/qw3EcfW4ugWgDeHx+4uDmGCylZebU43Maf6nP8MglUFm0XVBMoKIePJ+2Abuw2MAaBF5Lt3VltRyMbv7ogdfjcXsjSCF/O8vD8wAEJlvIz8tHoXh5feFwdAuAzmgv8dMVfaKVowAgfrZKKn2Jr6Sa04cLXnG0UVl1qfQl8eSK4Y9laFMwtx8DYCg4oEEWDAX7AZjbW3BnHzaEbYlsRP8c5ch6VBjLRnktlaC8qAxEyIj8mEQrO187T+gou985gw6HCKivT/iJDZSiqaqBNySK8rrw6ad1AAAAAElFTkSuQmCC',
                api:function(args){
                    var url='http://shuo.douban.com/%21service/share?'+
                        'href='+args.url+
                        '&name='+args.title+
                        '&image='+args.pic;
                    return {
                        url:url,
                        wSize:{
                            h:350,
                            w:600,
                        },
                    };
                },
            },
        };

        if (typeof String.prototype.startsWith != 'function') {
            String.prototype.startsWith = function(str) {
                return this.slice(0, str.length) == str;
            };
        }

        function getMStr(func) {
            var lines = func.toString();
            lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
            return lines;
        }

        function toRE(obj, flag) {
            if (!obj) {
                return obj;
            } else if (obj instanceof RegExp) {
                return obj;
            } else if (flag) {
                return new RegExp(obj, flag);
            } else if (obj instanceof Array) {
                return new RegExp(obj[0], obj[1]);
            } else if (typeof obj === 'string') {
                if (obj.indexOf('*') != -1 && obj.indexOf('.*') == -1) {
                    obj = wildcardToRegExpStr(obj);
                }
                return new RegExp(obj);
            }
        }

        function wildcardToRegExpStr(urlstr) {
            if (urlstr.source) return urlstr.source;
            var reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, "\\$&").replace(/\*+/g, function(str){
                return str === "*" ? ".*" : "[^/]*";
            });
            return "^" + reg + "$";
        }

        function isXPath(xpath) {
            return xpath.startsWith('./') || xpath.startsWith('//') || xpath.startsWith('id(');
        }

        function getElementMix(selector, contextNode, doc) {
            var ret;
            if (!selector || !contextNode) return ret;
            doc = doc || document;

            var type = typeof selector;
            if (type == 'string') {
                if (isXPath(selector)) {
                    ret = getElementByXpath(selector, contextNode, doc);
                } else {
                    ret = contextNode.parentNode.querySelector(selector);
                }
            } else if (type == 'function') {
                ret = selector(contextNode, doc);
            }
            return ret;
        }

        function launchFullScreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }

        function cancelFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }

        // 检测缩放
        function detectZoom (){
            var ratio = 0,
                screen = window.screen,
                ua = navigator.userAgent.toLowerCase();

            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            }
            else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            }
            else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth;
            }

            if (ratio){
                ratio = Math.round(ratio * 100);
            }

            return ratio;
        }

        //获取位置
        function getContentClientRect(target){
            var rect=target.getBoundingClientRect();
            var compStyle=unsafeWindow.getComputedStyle(target);
            var pFloat=parseFloat;
            var top=rect.top + pFloat(compStyle.paddingTop) + pFloat(compStyle.borderTopWidth);
            var right=rect.right - pFloat(compStyle.paddingRight) - pFloat(compStyle.borderRightWidth);
            var bottom=rect.bottom - pFloat(compStyle.paddingBottom) - pFloat(compStyle.borderBottomWidth);
            var left=rect.left + pFloat(compStyle.paddingLeft) + pFloat(compStyle.borderLeftWidth);
            return {
                top:top,
                right:right,
                bottom:bottom,
                left:left,
                width:right-left,
                height:bottom-top,
            };
        };

        //获取窗口大小.
        function getWindowSize(){
            /*
        //包含滚动条
        return {
            h:window.innerHeight,
            w:window.innerWidth,
        };
    */

            //去除滚动条的窗口大小
            var de=document.documentElement;
            var body=document.body;
            var backCompat=document.compatMode=='BackCompat';
            return {
                h:backCompat? body.clientHeight : de.clientHeight,
                w:backCompat? body.clientWidth : de.clientWidth,
            };

        };

        //获取已滚动的距离
        function getScrolled(container){
            if(container){
                return {
                    x:container.scrollLeft,
                    y:container.scrollTop,
                };
            };
            return {
                x:'scrollX' in window ? window.scrollX : ('pageXOffset' in window ? window.pageXOffset : document.documentElement.scrollLeft || document.body.scrollLeft),
                y:'scrollY' in window ? window.scrollY : ('pageYOffset' in window ? window.pageYOffset :  document.documentElement.scrollTop || document.body.scrollTop),
            };
        };

        //xpath 获取单个元素
        function getElementByXpath(xpath,contextNode,doc){
            doc=doc || document;
            contextNode=contextNode || doc;
            return doc.evaluate(xpath,contextNode,null,9,null).singleNodeValue;
        };


        //事件支持检测.
        function eventSupported( eventName,elem ){
            elem = elem || document.createElement("div");
            eventName = "on" + eventName;
            var isSupported = (eventName in elem);
            if (!isSupported){
                if(!elem.setAttribute){//setAttribute是元素节点的方法
                    elem=document.createElement("div");
                };
                var setAttr;
                if(!elem.hasAttribute(eventName)){
                    setAttr=true;
                    elem.setAttribute(eventName, "return;");
                };
                isSupported = typeof elem[eventName] == "function";
                if(setAttr)elem.removeAttribute(eventName);
            };
            return isSupported;
        };


        //检测属性支持.dom属性
        //返回带前缀的可以直接执行是属性
        function proSupported(proName,elem){
            //判断第一个字母是否大写，如果是的话，为构造函数，前缀也要大写
            var prefix=/^[A-Z]/.test(proName)? ['','WebKit-','O-','Moz-','MS-'] : ['','webkit-','o-','moz-','ms-'];
            var i=0;
            var p_i;
            var sProName;
            elem = elem || document.createElement("div");
            while(typeof (p_i=prefix[i++])!='undefined'){
                sProName=(p_i+proName).replace(/-([A-z])/g,function(a,b){
                    return b.toUpperCase();
                });
                //console.log(sProName);
                if(sProName in elem)return sProName;
            };
        };


        //css属性支持
        //带前缀的默认为大写（所有浏览器支持）
        //比如WebkitTransform,MozTransform,OTransfomr
        //chrome浏览器大小写前缀都行。
        //firefox,opera只能大写
        //ie 9+只能小写
        function cssProSupported(proName,elem,capitalize){
            if(capitalize!==false)capitalize=true;
            proName=proName.toLowerCase();

            var prefix=['','-webkit-','-o-','-moz-','-ms-'];
            elem=elem || document.createElement('div');
            var style=elem.style;
            var camelPro;

            // 会有个错误 invalid 'in' operand style
            try {
                for(var i=0,ii=prefix.length;i<ii;i++){
                    var first=true;
                    camelPro=(prefix[i]+proName).replace(/-([a-z])/g,function(a,b){
                        b=b.toUpperCase();
                        if(first){
                            first=false;
                            if(!capitalize){
                                b=b.toLowerCase();
                            };
                        };
                        return b;
                    });
                    //console.log(camelPro);
                    if(camelPro in style){
                        return camelPro;
                    }
                }
            } catch(ex) {}

            if(!capitalize)return;
            return cssProSupported(proName,elem,false);

        };

        //css属性值支持
        function cssValueSupported(proName,value,elem){
            var prefix=['','-webkit-','-o-','-moz-','-ms-'];
            elem=elem || document.createElement('div');
            var style=elem.style;
            var prefixedValue;
            for(var i=0,ii=prefix.length;i<ii;i++){
                prefixedValue=prefix[i] + value;
                style[proName]=prefixedValue;
                if(style[proName]==prefixedValue){
                    return prefixedValue;
                };
            };
        };


        //elem.dataset的兼容实现
        //ie不支持；firefoxGM储存不能反映到元素属性上。
        function dataset(elem,pro,value){

            function getDataPrefix(){
                return 'data-' + pro.replace(/[A-Z]/g,function(m){
                    return '-' + m.toLowerCase();
                });
            };

            if(typeof value=='undefined'){//取值
                if(elem.dataset){
                    value = elem.dataset[pro];
                }else{//没有取到值，返回undefined，getAttribute默认是返回null，所以判断一下。
                    var prefixedPro=getDataPrefix();
                    if(elem.hasAttribute(prefixedPro)){
                        value=elem.getAttribute(prefixedPro);
                    };
                };
                return value;
            }else{
                elem.setAttribute(getDataPrefix(),value);
            };
        };


        //重新检查悬浮图片
        function imgReHover(img){
            //要检查的图片，是当前悬浮的。
            if(!floatBar.shown || floatBar.data.img != img)return;
            //console.log(img);

            var mHover=document.createEvent('MouseEvent');
            var cr=img.getBoundingClientRect();
            mHover.initMouseEvent('mouseover',true,true,window,0, cr.left + 10, cr.top + 10, cr.left + 10, cr.top + 10, false,false,false,false, 0,null);
            img.dispatchEvent(mHover);
        };

        // 获取真正的unsafeWindow,chrome里面也能访问到真实环境的变量
        // 在 chrome 37 测试无效
        if(!envir.firefox && !envir.opera && !envir.ie && !storage.supportGM){
            ;(function(){
                document.addEventListener('picViewer-return-unsafeWindow',function(e){
                    unsafeWindow = e.detail;
                    // alert(unsafeWindow.$);
                },true);

                //页面脚本
                var s=document.createElement('script');
                s.textContent='(' + (function(){
                    var cusEvent=document.createEvent('CustomEvent');
                    cusEvent.initCustomEvent('picViewer-return-unsafeWindow',false,false,window);
                    document.dispatchEvent(cusEvent);
                }).toString() +')()';
                document.head.appendChild(s);
            })();
        };


        //抛出错误到错误控制台
        function throwErrorInfo(err){
            if(console && console.error){
                console.error(err.message + '\n\n' + (err.stacktrace? err.stacktrace : '') + '\n\n' , err);
            };
        };

        //对象克隆
        function cloneObject(obj,deep){
            var obj_i;
            var ret=Array.isArray(obj)? [] : {};
            for(var i in obj){
                if(!obj.hasOwnProperty(i))continue;
                obj_i=obj[i];
                if(!deep || typeof obj_i!='object' || obj_i===null || obj_i.nodeType){
                    ret[i]=obj_i;
                }else{
                    ret[i]=cloneObject(obj_i,deep);
                };
            };
            return ret;
        };

        //闪烁元素。
        function flashEle(ele,duration){
            if(dataset(ele,'pvFlashing'))return;
            if(ele.offsetHeight==0)return;
            dataset(ele,'pvFlashing','1');

            var oOutline=ele.style.outline;
            var oOutlineOffset=ele.style.outlineOffset;
            var oOpacity=ele.style.opacity;
            var oTransform=ele.style[support.cssTransform];

            var count=0;
            var startTime=Date.now();
            duration=duration? duration : 1200;

            var flashInterval=setInterval(function(){
                var outline='none',
                    outlineOffset=0,
                    opacity=0.3,
                    transform='';

                if(count % 2 == 0){
                    outline='5px dashed rgba(255,0,0,0.95)';
                    opacity=0.95;
                    outlineOffset='1px';
                    transform='scale(1.1)';
                }else{
                    if((Date.now() - startTime) > duration){
                        clearInterval(flashInterval);
                        outline=oOutline;
                        opacity=oOpacity;
                        outlineOffset=oOutlineOffset;
                        transform=oTransform;
                        ele.removeAttribute('data-pv-flashing');
                    };
                };

                ele.style.outline=outline;
                ele.style.outlineOffset=outlineOffset;
                ele.style.opacity=opacity;
                ele.style[support.cssTransform]=transform;

                count++;
            },80);
        };

        //支持情况.
        var support={
            cssTransform:cssProSupported('transform'),
            cssCursorValue:{
                zoomIn:cssValueSupported('cursor','zoom-in'),
                zoomOut:cssValueSupported('cursor','zoom-out'),
                grab:cssValueSupported('cursor','grab'),
                grabbing:cssValueSupported('cursor','grabbing'),
            },
        };


        //console.log('浏览器的一些对象支持情况:',support);

        //动画算法
        /*
         t: current time（当前时间）；
         b: beginning value（初始值）；
         c: change in value（变化量）；
         d: duration（持续时间）。
        */

        var Tween = {
            Cubic: {
                easeInOut:function(t,b,c,d){
                    return -c/2*(Math.cos(Math.PI*t/d)-1)+b
                }
            },
        };

        //imgReady
        var imgReady=(function(){
            var iRInterval,
                iRReadyFn=[],
                isrcs=[]
            ;

            var timeLimit=3 * 60 * 1000;//3分钟

            function checkReady(){
                var now= Date.now();
                for(var i=0,ii=iRReadyFn.length,iRReadyFn_i;i<ii;i++){
                    iRReadyFn_i=iRReadyFn[i];
                    //now - iRReadyFn_i.startTime >= timeLimit ||
                    if(iRReadyFn_i()){
                        iRReadyFn.splice(i,1);
                        isrcs.splice(i,1);
                        i--;
                        ii--;
                    };
                };
                //console.log('checkReady',iRReadyFn.length)
                if(iRReadyFn.length==0){
                    clearInterval(iRInterval);
                    iRInterval=null;
                };
            };



            var imgReady=function(img,opts){

                if(/NodeList|HTMLCollection/.test(Object.prototype.toString.call(img))  || Array.isArray(img)){
                    arrayFn.forEach.call(img,function(img,index,array){
                        if(img instanceof HTMLImageElement){
                            imgReady(img,opts);
                        };
                    });
                    return;
                };

                if(!(img instanceof HTMLImageElement)){
                    var t_img=document.createElement('img');
                    t_img.src=img;
                    img=t_img;
                    t_img=null;
                };

                var ready,load,error,loadEnd,abort,timeout,time;
                ready=opts.ready;
                load=opts.load;
                error=opts.error;
                loadEnd=opts.loadEnd;
                abort=opts.abort;
                timeout=opts.timeout;
                time=typeof opts.time=='number'? opts.time : 0;

                if(time){
                    setTimeout(function(){
                        if(!loadEndDone){
                            aborted=true;
                            removeListener();
                            img.src= prefs.icons.brokenImg_small;
                            if(timeout){
                                timeout.call(img,{
                                    target:img,
                                    type:'timeout',
                                });
                            };
                            loadEndDone=true;
                            if(loadEnd){
                                loadEnd.call(img,{
                                    target:img,
                                    type:'timeout',
                                });
                            };

                        };
                    },time);
                };

                var src=img.src;
                var loadEndDone;

                function go(type,e){
                    switch(type){
                        case 'load':{
                            removeListener();
                            go('ready');//如果直接触发load，那么先触发ready
                            if(load){
                                load.call(img,e);
                            };

                            if(!loadEndDone){
                                loadEndDone=true;
                                if(loadEnd){
                                    loadEnd.call(img,e);
                                };
                            };
                        }break;
                        case 'ready':{
                            if(!ready || readyHandler.done)return;
                            readyHandler.done=true;
                            ready.call(img,{
                                target:img,
                                type:'ready',
                            });
                        }break;
                        case 'error':{
                            removeListener();
                            if(error){
                                error.call(img,e);
                            };
                            if(!loadEndDone){
                                loadEndDone=true;
                                if(loadEnd){
                                    loadEnd.call(img,e);
                                };
                            };
                        }break;
                    };
                };

                var aborted;
                var ret={
                    img:img,
                    abort:function(){
                        if(!loadEndDone){
                            aborted=true;
                            removeListener();
                            img.src= prefs.icons.brokenImg_small;
                            if(abort){
                                abort.call(img,{
                                    target:img,
                                    type:'abort',
                                });
                            };
                            loadEndDone=true;
                            if(loadEnd){
                                loadEnd.call(img,{
                                    target:img,
                                    type:'abort',
                                });
                            };
                        };
                    },
                };

                function readyHandler(){//尽快的检测图片大小.
                    if(loadEndDone || aborted)return true;
                    if(img.naturalWidth==0 || img.naturalHeight==0)return;
                    go('ready');
                    return true;
                };


                function loadHandler(e){
                    go('load',e);
                };

                function errorHandler(e){
                    go('error',e);
                };

                function removeListener(){
                    img.removeEventListener('load',loadHandler,true);
                    img.removeEventListener('error',errorHandler,true);
                };

                //ready必须在load之前触发。

                if(img.complete){//图片已经加载完成.
                    if(typeof img.width=='number' && img.width && img.height){//图片
                        setTimeout(function(){
                            if(aborted)return;
                            go('load',{
                                type:'load',
                                target:img,
                            });
                        },0);
                    }else{//这不是图片.opera会识别错误.
                        setTimeout(function(){
                            if(aborted)return;
                            go('error',{
                                type:'error',
                                target:img,
                            });
                        },0);
                    };
                    return ret;
                };


                img.addEventListener('load',loadHandler,true);
                img.addEventListener('error',errorHandler,true);


                if(ready){
                    var index=isrcs.indexOf(src);
                    if(index==-1){
                        isrcs.push(src);
                        readyHandler.startTime= Date.now();
                        iRReadyFn.push(readyHandler);
                    }else{
                        iRReadyFn[index].startTime= Date.now();
                    };

                    if(!iRInterval){
                        iRInterval=setInterval(checkReady,66);
                    };
                };

                return ret;
            };

            return imgReady;
        })();


        var addWheelEvent=(function(){

            function getSupportEventName(){
                var ret='DOMMouseScroll';
                if(eventSupported('wheel')){//w3c FF>=17 ie>=9
                    ret='wheel';
                }else if(eventSupported('mousewheel')){//opera,chrome
                    ret='mousewheel';
                };
                return ret;
            };

            var eventName;

            return function(ele,callback,useCapture){
                if(!eventName){
                    eventName=getSupportEventName();
                };

                ele.addEventListener(eventName,function(e){
                    var type=e.type;
                    var ne;
                    if(type!='wheel'){
                        ne={};
                        for(var i in e){
                            ne[i]=e[i];
                        };

                        ne.type='wheel';
                        ne.deltaX=0;
                        ne.deltaY=0;
                        ne.deltaZ=0;
                        ne.deltaMode=1;//line
                        ne.preventDefault=e.preventDefault.bind(e);
                        ne.stopPropagation=e.stopPropagation.bind(e);

                        var x=0,y=0;
                        if(typeof e.axis=='number'){//DOMMouseScroll
                            if(e.axis==2){
                                y=e.detail;
                            }else{
                                x=e.detail;
                            };
                        }else{
                            //opera早起版本的mousewheel只支持y轴的滚动,e.wheelDeltaY undefined
                            if(typeof e.wheelDeltaY=='undefined' ||  e.wheelDeltaY!=0){
                                y=-e.wheelDelta/40;
                            }else{
                                x=-e.wheelDelta/40;
                            };
                        };
                        ne.deltaY =y;
                        ne.deltaX =x;

                    };

                    callback.call(this,ne? ne : e);
                },useCapture || false);
            };
        })();


        var addCusMouseEvent=(function(){

            function getSupported(){
                return {
                    mouseleave:eventSupported('mouseleave'),
                    mouseenter:eventSupported('mouseenter'),
                };
            };

            var support;
            var map={
                mouseleave:'mouseout',
                mouseenter:'mouseover',
            };

            return function(type, ele, fn){//事件类型，元素，监听函数
                if(!support){
                    support=getSupported();
                };

                // chrome 30+ 虽然支持 mouseenter，但是存在问题
                if(support[type] && !(type == 'mouseenter' && window.chrome)){
                    ele.addEventListener(type,fn,false);//mouseleave,enter不冒泡
                }else{
                    ele.addEventListener(map[type],function(e){
                        var relatedTarget=e.relatedTarget;//mouseout，去往的元素；mouseover，来自的元素
                        if(!this.contains(relatedTarget)){
                            fn.call(this,e);
                        };
                    },true);
                };
            };

        })();


        //库
        function GalleryC(){
            this.init();
        };

        var gallery;
        var galleryMode;

        GalleryC.prototype={
            init:function(){
                this.addStyle();
                var container=document.createElement('span');

                this.gallery=container;
                container.className='pv-gallery-container';
                container.tabIndex=1;//为了获取焦点，来截获键盘事件
                container.innerHTML=
                    '<span class="pv-gallery-head">'+
                    '<span class="pv-gallery-head-float-left">'+
                    '<span title="'+i18n("picInfo")+'" class="pv-gallery-head-left-img-info">'+
                    '<span class="pv-gallery-head-left-img-info-resolution" title="'+i18n("resolution")+'">0 x 0</span>'+
                    '<span class="pv-gallery-head-left-img-info-count" title="'+i18n("picNum")+'">（1 / 1）</span>'+
                    '<span class="pv-gallery-head-left-img-info-scaling" title="'+i18n("scaleRatio")+'">（100%）</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '<span class="pv-gallery-head-left-img-info-description" title="'+i18n("picNote")+'"></span>'+
                    '<input type="range" id="minsizeW" min="0" max="100" value="0" title="Width"> <span id="minsizeWSpan">0px</span> '+
                    '<input type="range" id="minsizeH" min="0" max="100" value="0" title="Height"> <span id="minsizeHSpan">0px</span>'+
                    '</span>'+
                    '</span>'+

                    '<span title="'+i18n("exitCollectionTip")+'" class="pv-gallery-head-command pv-gallery-head-command-exit-collection">'+
                    '<span>'+i18n("exitCollection")+'</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+

                     '<span title="'+i18n("loadAllTip")+'" class="pv-gallery-head-command pv-gallery-head-command-nextPage">'+
                    '<span>'+i18n("loadAll")+'</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+

                    '<span title="'+i18n("fiddleTip")+'" class="pv-gallery-head-command pv-gallery-head-command-operate">'+
                    '<span>'+i18n("fiddle")+'</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+

                    '<span class="pv-gallery-head-command-container">'+
                    '<span class="pv-gallery-head-command pv-gallery-head-command-collect">'+
                    '<span class="pv-gallery-head-command-collect-icon"></span>'+
                    '<span class="pv-gallery-head-command-collect-text"></span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list pv-gallery-head-command-drop-list-collect">'+
                    '<span title="'+i18n("collectDetailTip")+'" class="pv-gallery-head-command-drop-list-item pv-gallery-head-command-drop-list-item-collect-description">'+
                    '<span>'+i18n("collectDetail")+'：</span>'+
                    '<textarea data-prefs="description" cols="25" rows="5"></textarea>'+
                    '</span>'+
                    '</span>'+
                    '</span>'+

                    '<span class="pv-gallery-head-command-container">'+
                    '<span title="'+i18n("playSlide")+'" class="pv-gallery-head-command pv-gallery-head-command-slide-show">'+
                    '<span class="pv-gallery-head-command_overlayer"></span>'+
                    '<span class="pv-gallery-head-command-slide-show-button">'+
                    '<span class="pv-gallery-head-command-slide-show-button-inner"></span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-slide-show-countdown" title="'+i18n("countDown")+'"></span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list pv-gallery-head-command-drop-list-slide-show">'+
                    '<span class="pv-gallery-head-command-drop-list-item" title="'+i18n("slideGapTip")+'">'+
                    '<input data-prefs="interval" step="1" min="1" type="number" value="5" />'+
                    '<span>'+i18n("slideGap")+'</span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item"  title="'+i18n("slideBackTip")+'">'+
                    '<input id="pv-gallery-head-command-drop-list-item-slide-show-backward" data-prefs="backward" type="checkbox" />'+
                    '<label for="pv-gallery-head-command-drop-list-item-slide-show-backward">'+i18n("slideBack")+'　　　</label>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item"  title="'+i18n("slideWaitTip")+'">'+
                    '<input id="pv-gallery-head-command-drop-list-item-slide-show-wait" data-prefs="wait" type="checkbox" checked="checked" />'+
                    '<label for="pv-gallery-head-command-drop-list-item-slide-show-wait">'+i18n("slideWait")+'</label>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item"  title="'+i18n("slideSkipErrorTip")+'">'+
                    '<input id="pv-gallery-head-command-drop-list-item-slide-show-skipErrorImg" data-prefs="skipErrorImg" type="checkbox" checked="checked" />'+
                    '<label for="pv-gallery-head-command-drop-list-item-slide-show-skipErrorImg">'+i18n("slideSkipError")+'</label>'+
                    '</span>'+
                    '</span>'+
                    '</span>'+

                    '<span class="pv-gallery-head-command-container">'+
                    '<span title="'+i18n("typeTip")+'" class="pv-gallery-head-command pv-gallery-head-command-category">'+
                    '<span>'+i18n("type")+'</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list pv-gallery-head-command-drop-list-category">'+
                    '</span>'+
                    '</span>'+

                    '<span class="pv-gallery-head-command-container">'+
                    '<span title="'+i18n("commandTip")+'" class="pv-gallery-head-command pv-gallery-head-command-others">'+
                    '<span>'+i18n("command")+'</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list pv-gallery-head-command-drop-list-others">'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="psImage" title="'+i18n("onlineEditTip",prefs.gallery.editSite)+'">'+i18n("onlineEdit")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="exportImages" title="'+i18n("exportImagesTip")+'">'+i18n("exportImages")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="copyImages" title="'+i18n("copyImagesUrlTip")+'">'+i18n("copyImagesUrl")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="downloadImage" title="'+i18n("downloadImageTip")+'">'+i18n("downloadImage")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="scrollIntoView" title="'+i18n("findInPageTip")+'">'+i18n("findInPage")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="enterCollection" title="'+i18n("viewCollectionTip")+'">'+i18n("viewCollection")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="openInNewWindow" title="'+i18n("openInNewWindowTip")+'">'+i18n("openInNewWindow")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" title="'+i18n("autoRefreshTip")+'">'+
                    '<input type="checkbox"  data-command="scrollToEndAndReload"/>'+
                    '<label data-command="scrollToEndAndReload">'+i18n("autoRefresh")+'</label>'+
                    '</span>'+
                    '<span id="pv-gallery-fullscreenbtn" class="pv-gallery-head-command-drop-list-item" data-command="fullScreen">'+i18n("enterFullsc")+'</span>'+
                    '<span class="pv-gallery-head-command-drop-list-item" data-command="openPrefs">'+i18n("config")+'</span>'+
                    '</span>'+
                    '</span>'+

                    '<span class="pv-gallery-head-command-container">'+
                    '<span title="'+i18n("share")+'" class="pv-gallery-head-command pv-gallery-head-command-share">'+
                    '<span>'+i18n("share")+'</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+
                    '<span class="pv-gallery-head-command-drop-list pv-gallery-head-command-drop-list-share">'+
                    '</span>'+
                    '</span>'+

                    '<span title="'+i18n("closeGallery")+'" class="pv-gallery-head-command pv-gallery-head-command-close">'+
                    '</span>'+

                    '</span>'+

                    '<span class="pv-gallery-body">'+

                    '<span class="pv-gallery-img-container">'+

                    '<span class="pv-gallery-img-content">'+
                    '<span class="pv-gallery-img-parent">'+
                    '<img title="'+i18n("refreshWhenError")+'" class="pv-gallery-img_broken" src="'+prefs.icons.brokenImg+'" />'+
                    '</span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+

                    '<span class="pv-gallery-img-controler pv-gallery-img-controler-pre"></span>'+
                    '<span class="pv-gallery-img-controler pv-gallery-img-controler-next"></span>'+

                    '<span class="pv-gallery-scrollbar-h pv-gallery-img-scrollbar-h">'+
                    '<span class="pv-gallery-scrollbar-h-track pv-gallery-img-scrollbar-h-track">'+
                    '<span class="pv-gallery-scrollbar-h-handle pv-gallery-img-scrollbar-h-handle"></span>'+
                    '</span>'+
                    '</span>'+

                    '<span class="pv-gallery-scrollbar-v pv-gallery-img-scrollbar-v">'+
                    '<span class="pv-gallery-scrollbar-v-track pv-gallery-img-scrollbar-v-track">'+
                    '<span class="pv-gallery-scrollbar-v-handle pv-gallery-img-scrollbar-v-handle"></span>'+
                    '</span>'+
                    '</span>'+

                    '<span class="pv-gallery-sidebar-toggle" title="'+i18n("switchSlide")+'">'+
                    '<span class="pv-gallery-sidebar-toggle-content"></span>'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '</span>'+

                    '</span>'+

                    '<span class="pv-gallery-sidebar-container" unselectable="on">'+
                    '<span class="pv-gallery-vertical-align-helper"></span>'+
                    '<span class="pv-gallery-sidebar-content" >'+

                    '<span class="pv-gallery-sidebar-controler pv-gallery-sidebar-controler-pre"></span>'+
                    '<span class="pv-gallery-sidebar-controler pv-gallery-sidebar-controler-next"></span>'+

                    '<span class="pv-gallery-sidebar-thumbnails-container">'+
                    '</span>'+

                    '<span class="pv-gallery-scrollbar-h pv-gallery-thumb-scrollbar-h">'+
                    '<span class="pv-gallery-scrollbar-h-track pv-gallery-thumb-scrollbar-h-track">'+
                    '<span class="pv-gallery-scrollbar-h-handle pv-gallery-thumb-scrollbar-h-handle"></span>'+
                    '</span>'+
                    '</span>'+
                    '<span class="pv-gallery-scrollbar-v pv-gallery-thumb-scrollbar-v">'+
                    '<span class="pv-gallery-scrollbar-v-track pv-gallery-thumb-scrollbar-v-track">'+
                    '<span class="pv-gallery-scrollbar-v-handle pv-gallery-thumb-scrollbar-v-handle"></span>'+
                    '</span>'+
                    '</span>'+

                    '</span>'+
                    '</span>'+

                    '</span>';
                document.body.appendChild(container);

                var self=this;
                container.querySelector("#minsizeW").oninput=function(){self.changeMinView();};
                container.querySelector("#minsizeH").oninput=function(){self.changeMinView();};
                container.querySelector("#minsizeWSpan").onclick=function(){
                    //self.changeSizeInputW();
                    var minsizeW=window.prompt("Width:",this.value);
                    if(!minsizeW)return;
                    container.querySelector("#minsizeW").value=minsizeW;
                    self.changeMinView();
                };
                container.querySelector("#minsizeHSpan").onclick=function(){
                    //self.changeSizeInputH();
                    var minsizeH=window.prompt("Height:",this.value);
                    if(!minsizeH)return;
                    container.querySelector("#minsizeH").value=minsizeH;
                    self.changeMinView();
                };
                var maximizeTrigger=document.createElement('span');
                this.maximizeTrigger=maximizeTrigger;
                maximizeTrigger.innerHTML='-'+i18n("returnToGallery")+'-<span class="pv-gallery-maximize-trigger-close" title="'+i18n("closeGallery")+'"></span>';
                maximizeTrigger.className='pv-gallery-maximize-trigger';

                document.body.appendChild(maximizeTrigger);


                var validPos=['top','right','bottom','left'];
                var sBarPosition=prefs.gallery.sidebarPosition;
                if(validPos.indexOf(sBarPosition)==-1){
                    sBarPosition='bottom';
                };

                this.sBarPosition=sBarPosition;
                this.selectedClassName='pv-gallery-sidebar-thumb_selected-' + sBarPosition;


                var sBarDirection='v';//垂直放置
                var isHorizontal=false;
                if(sBarPosition=='top' || sBarPosition=='bottom'){
                    sBarDirection='h';//水平放置
                    isHorizontal=true;
                };
                this.sBarDirection=sBarDirection;
                this.isHorizontal=isHorizontal;

                var classPrefix='pv-gallery-';
                var validClass=[
                    'head',

                    'head-left-img-info',
                    'head-left-img-info-description',
                    'head-left-img-info-resolution',
                    'head-left-img-info-count',
                    'head-left-img-info-scaling',

                    'head-command-close',
                    'head-command-nextPage',
                    'head-command-operate',
                    'head-command-slide-show',
                    'head-command-slide-show-button-inner',
                    'head-command-slide-show-countdown',
                    'head-command-collect',
                    'head-command-exit-collection',

                    'head-command-drop-list-category',
                    'head-command-drop-list-others',
                    'head-command-drop-list-share',
                    'head-command-drop-list-slide-show',
                    'head-command-drop-list-collect',

                    'body',

                    'img-container',

                    'img-scrollbar-h',
                    'img-scrollbar-h-handle',
                    'img-scrollbar-h-track',

                    'img-scrollbar-v',
                    'img-scrollbar-v-handle',
                    'img-scrollbar-v-track',

                    'thumb-scrollbar-h',
                    'thumb-scrollbar-h-handle',
                    'thumb-scrollbar-h-track',

                    'thumb-scrollbar-v',
                    'thumb-scrollbar-v-handle',
                    'thumb-scrollbar-v-track',

                    'img-content',
                    'img-parent',
                    'img_broken',

                    'img-controler-pre',
                    'img-controler-next',

                    'sidebar-toggle',
                    'sidebar-toggle-content',

                    'sidebar-container',
                    'sidebar-content',

                    'sidebar-controler-pre',
                    'sidebar-controler-next',

                    'sidebar-thumbnails-container',
                ];

                var eleMaps={};
                this.eleMaps=eleMaps;

                validClass.forEach(function(c){
                    eleMaps[c]=container.querySelector('.'+ classPrefix + c);
                });

                var posClass=[//需要添加'top bottom left right'class的元素
                    'img-container',
                    'sidebar-toggle',
                    'sidebar-container',
                    'sidebar-thumbnails-container',
                ];
                posClass.forEach(function(c){
                    eleMaps[c].classList.add(classPrefix + c + '-' +sBarPosition);
                });

                var hvClass=[//需要添加'v h'class的元素
                    'sidebar-toggle',
                    'sidebar-toggle-content',
                    'sidebar-container',
                    'sidebar-content',
                    'sidebar-controler-pre',
                    'sidebar-controler-next',
                    'sidebar-thumbnails-container',
                ];
                hvClass.forEach(function(c){
                    eleMaps[c].classList.add(classPrefix + c + '-' + sBarDirection);
                });



                //图片区域水平方向的滚动条
                var imgScrollbarH=new this.Scrollbar({
                    bar:eleMaps['img-scrollbar-h'],
                    handle:eleMaps['img-scrollbar-h-handle'],
                    track:eleMaps['img-scrollbar-h-track'],
                },
                                                     eleMaps['img-content'],
                                                     true);
                this.imgScrollbarH=imgScrollbarH;

                //图片区域垂直方向的滚动条
                var imgScrollbarV=new this.Scrollbar({
                    bar:eleMaps['img-scrollbar-v'],
                    handle:eleMaps['img-scrollbar-v-handle'],
                    track:eleMaps['img-scrollbar-v-track'],
                },
                                                     eleMaps['img-content'],
                                                     false);
                this.imgScrollbarV=imgScrollbarV;

                //缩略图区域的滚动条
                var thumbScrollbar;
                if(isHorizontal){
                    thumbScrollbar=new this.Scrollbar({
                        bar:eleMaps['thumb-scrollbar-h'],
                        handle:eleMaps['thumb-scrollbar-h-handle'],
                        track:eleMaps['thumb-scrollbar-h-track'],
                    },
                                                      eleMaps['sidebar-thumbnails-container'],
                                                      true);
                }else{
                    thumbScrollbar=new this.Scrollbar({
                        bar:eleMaps['thumb-scrollbar-v'],
                        handle:eleMaps['thumb-scrollbar-v-handle'],
                        track:eleMaps['thumb-scrollbar-v-track'],
                    },
                                                      eleMaps['sidebar-thumbnails-container'],
                                                      false);
                };
                this.thumbScrollbar=thumbScrollbar;

                var self=this;

                var imgStatistics={//图片的总类，统计,初始化值
                    rule:{
                        shown:true,
                        count:0,
                        description:i18n("advancedRulesTip"),
                        name:i18n("advancedRules"),
                    },
                    tpRule:{
                        shown:true,
                        count:0,
                        description:i18n("tpRulesTip"),
                        name:i18n("tpRules"),
                    },
                    scale:{
                        shown:true,
                        count:0,
                        description:i18n("scaleRulesTip"),
                        name:i18n("scaleRules"),
                    },
                    force:{
                        shown:true,
                        count:0,
                        description:i18n("noScaleRulesTip"),
                        name:i18n("noScaleRules"),
                    },

                    // new
                    // scaleZoomResized: {
                    //  shown: false,
                    //  count: 0,
                    //  description: '缩放的图片，图片尺寸最少相差比例 ' + prefs.gallery.zoomresized + '%',
                    //  name: '小缩放'
                    // },
                    scaleSmall: {
                        shown: prefs.gallery.showSmallSize,
                        count: 0,
                        description: i18n("smallRulesTip",prefs.gallery.scaleSmallSize),
                        name: i18n("smallRules")
                    },
                };
                this.imgStatistics=imgStatistics;

                //生成分类下拉列表
                var typeMark='';
                var imgStatistics_i;
                for(var i in imgStatistics){
                    if(!imgStatistics.hasOwnProperty(i))continue;
                    imgStatistics_i=imgStatistics[i];
                    typeMark+=
                        '<span class="pv-gallery-head-command-drop-list-item" title="'+imgStatistics_i.description+'">'+
                        '<input type="checkbox" data-type="'+i+'" id="pv-gallery-head-command-drop-list-item-category-'+i+'" />'+
                        '<label for="pv-gallery-head-command-drop-list-item-category-'+i+'">'+imgStatistics_i.name+'</label>'+
                        '</span>';
                };
                eleMaps['head-command-drop-list-category'].innerHTML=typeMark;


                //收藏相关
                var collection={
                    getMatched:function(){
                        return (this.all || this.get())._find(function(value,index){
                            if(value.src==self.src){
                                return true;
                            };
                        });
                    },
                    check:function(){
                        //从缓存数据中检查。
                        var matched=this.getMatched();
                        this.favorite=matched? matched[0] : null;

                        this.tAreaValue();
                        this.highLight();
                    },
                    tAreaValue:function(){
                        this.textArea.value=this.favorite? this.favorite.description : self.eleMaps['head-left-img-info-description'].textContent;
                    },
                    highLight:function(){
                        eleMaps['head-command-collect'].classList[this.favorite? 'add' : 'remove']('pv-gallery-head-command-collect-favorite');
                    },
                    add:function(){
                        this.favorite={
                            src:self.src,
                            thumbSrc:dataset(self.relatedThumb,'thumbSrc'),
                            naturalSize:self.imgNaturalSize,
                            description:this.textArea.value,
                        };

                        //为了防止多个页面同时的储存，添加前，先载入最新的数据。
                        this.get();
                        //检查是否已经在里面了
                        var matched=this.getMatched();

                        if(matched){//如果已经存在，删除旧的。
                            this.all.splice(matched[1],1);
                        };
                        this.all.unshift(this.favorite);//添加到最前面。
                        this.highLight();
                        this.save();
                    },
                    remove:function(){
                        //获得最新数据
                        this.get();
                        //检查是否已经在里面了
                        var matched=this.getMatched();
                        if(matched){
                            this.all.splice(matched[1],1);
                            this.save();
                        };
                        this.favorite=null;
                        this.highLight();
                    },
                    save:function(){
                        storage.setItem('pv_collection',encodeURIComponent(JSON.stringify(this.all)));
                    },
                    get:function(){
                        var ret=storage.getItem('pv_collection') || '[]';
                        try{
                            ret=JSON.parse(decodeURIComponent(ret));
                        }catch(e){
                            ret=[];
                        };
                        this.all=ret;
                        return ret;
                    },
                    enter:function(){

                        if(this.all.length==0){
                            alert(i18n("noCollectionYet"));
                            return;
                        };

                        this.mMode=true;
                        var button=this.dropListButton;
                        button.textContent=i18n("exitCollection");
                        dataset(button,'command','exitCollection');
                        this.headButton.style.display='inline-block';
                        eleMaps['sidebar-thumbnails-container'].classList.add('pv-gallery-sidebar-thumbnails_hide-span');

                        //生成dom
                        var container=document.createElement('span');

                        this.container=container;

                        var data_i;
                        var spanMark='';
                        var i=0;
                        while(data_i=this.all[i++]){
                            spanMark +=
                                '<span class="pv-gallery-sidebar-thumb-container" '+
                                ' data-natural-size="' + JSON.stringify(data_i.naturalSize).replace(/"/g,'&quot;') +
                                '" data-src="' + data_i.src +
                                '" data-thumb-src="' + data_i.thumbSrc +
                                '">'+
                                '<span class="pv-gallery-vertical-align-helper"></span>'+
                                '<span class="pv-gallery-sidebar-thumb-loading" title="'+i18n("loading")+'......"></span>'+
                                '</span>';
                        };
                        container.innerHTML=spanMark;
                        eleMaps['sidebar-thumbnails-container'].appendChild(container);


                        this.selected=self.selected;//备份

                        self.select(container.children[0]);
                        self.thumbScrollbar.reset();
                        self.loadThumb();
                    },
                    exit:function(){
                        if(!this.mMode)return;

                        this.mMode=false;
                        var button=this.dropListButton;
                        button.textContent=i18n("viewCollection");
                        dataset(button,'command','enterCollection');
                        this.headButton.style.display='none';
                        eleMaps['sidebar-thumbnails-container'].removeChild(this.container);
                        eleMaps['sidebar-thumbnails-container'].classList.remove('pv-gallery-sidebar-thumbnails_hide-span');

                        self.select(this.selected);
                        self.thumbScrollbar.reset();
                        self.loadThumb();
                    },
                    textArea:eleMaps['head-command-drop-list-collect'].querySelector('textarea'),
                    dropListButton:eleMaps['head-command-drop-list-others'].querySelector('[data-command$="Collection"]'),
                    headButton:eleMaps['head-command-exit-collection'],
                };

                this.collection=collection;

                eleMaps['head-command-drop-list-collect'].addEventListener('input',function(e){
                    var target=e.target;
                    if(!collection.favorite)return;
                    collection.favorite[dataset(target,'prefs')]=target.value;
                    clearTimeout(collection.saveTimer);
                    collection.saveTimer=setTimeout(function(){
                        collection.save();
                    },500);
                },true);


                var slideShow={
                    opts:{
                        interval:5000,
                        wait:true,
                        backward:false,
                        skipErrorImg:true,
                        run:false,
                    },
                    //timing:
                    //select(选中下一个图片后（缩略图栏选中了），还没开始读取大图（一般选中后，延时200ms开始读取大图）),
                    //loadEnd(当前显示图片已经读取完成后),
                    //click(点击按钮),
                    //change(改变设置)
                    run:function(timing){
                        if(!this.opts.run)return;

                        if(timing!='loadEnd'){
                            this.stop();
                        };

                        if(timing=='click' || timing=='select'){
                            if(!this.getEle()){//没有要切换到的图片了，停止
                                this.exit();
                                return;
                            };
                        };

                        if(this.opts.skipErrorImg){
                            if(self.imgError && !self.isLoading){//确保是当前图片和选中缩略图一致的时候
                                self.select(this.getEle());
                                return;
                            };
                        };


                        if(this.opts.wait){
                            if(timing!='select' && (timing=='loadEnd'  || (!self.isLoading && (self.img.complete || self.imgError)))){
                                this.go();
                            };
                        }else{
                            if(timing!='loadEnd'){
                                this.go();
                            };
                        };

                    },
                    getEle:function(){
                        return self.getThumSpan(this.opts.backward)
                    },
                    go:function(){
                        this.stop();//停止上次的。
                        var interval=this.opts.interval;
                        var _self=this;
                        this.timer=setTimeout(function(){
                            _self.setCountdown(0);
                            clearInterval(_self.countdownTimer);
                            self.select(_self.getEle());
                        },interval);

                        var startTime=Date.now();
                        this.countdownTimer=setInterval(function(){
                            _self.setCountdown(interval - (Date.now()-startTime));
                        },100);
                    },
                    stop:function(){
                        this.setCountdown(this.opts.interval);
                        clearTimeout(this.timer);
                        clearInterval(this.countdownTimer);
                    },
                    exit:function(){
                        this.opts.run=true;
                        this.switchStatus();
                        this.stop();
                    },
                    setCountdown:function(value){
                        eleMaps['head-command-slide-show-countdown'].textContent=(value/1000).toFixed(2);
                    },
                    switchStatus:function(){
                        this.opts.run=!this.opts.run;
                        eleMaps['head-command-slide-show-button-inner'].classList[this.opts.run? 'add' : 'remove']('pv-gallery-head-command-slide-show-button-inner_stop');
                    },
                    check:function(){
                        this.opts.run?  this.run('click') : this.stop();
                    },
                };

                slideShow.setCountdown(slideShow.opts.interval);;
                this.slideShow=slideShow;

                //幻灯片播放下拉列表change事件的处理
                eleMaps['head-command-drop-list-slide-show'].addEventListener('change',function(e){
                    var target=e.target;
                    var value;
                    var prefs=dataset(target,'prefs');
                    if(target.type=='checkbox'){
                        value=target.checked;
                    }else{
                        value=parseFloat(target.value);
                        if(isNaN(value)){//无效
                            value=slideShow.opts[prefs] / 1000;
                        };
                        value=value>0 ? value : 1;
                        target.value=value;
                        value *= 1000;
                    };
                    slideShow.opts[prefs]=value;
                    slideShow.run('change');
                    //console.log(slideShow.opts);
                },true);


                //分类下拉列表的点击发生change事件的处理
                eleMaps['head-command-drop-list-category'].addEventListener('change',function(e){
                    var target=e.target;
                    var type=dataset(target,'type');
                    self.iStatisCopy[type].shown=target.checked;
                    self.switchThumbVisible();//切换图片类别显隐;
                },true);


                var srcSplit;
                //命令下拉列表的点击处理
                eleMaps['head-command-drop-list-others'].addEventListener('click',function(e){
                    if(e.button!=0)return;//左键
                    var target=e.target;
                    var command=dataset(target,'command');
                    if(!command)return;
                    switch(command){
                        case 'openInNewWindow':{
                            window.open(self.src,'_blank');
                        }break;
                        case 'psImage':{
                            window.open((prefs.gallery.editSite=='Pixlr'?'https://pixlr.com/editor/?image=':'https://www.toolpic.com/apieditor.html?image=')+self.src,'_blank');
                        }break;
                        case 'scrollIntoView':{
                            if(collection.mMode){
                                alert(i18n("inCollection"));
                                return;
                            };
                            var relatedThumb=self.relatedThumb;
                            var index=arrayFn.indexOf.call(self.imgSpans,relatedThumb);
                            var targetImg=self.data[index].img;

                            if(targetImg){
                                if(!document.documentElement.contains(targetImg) || unsafeWindow.getComputedStyle(targetImg).display=='none'){//图片不存在文档中，或者隐藏了。
                                    alert(i18n("cantFind"));
                                    return;
                                };
                                self.minimize();
                                setTimeout(function(){
                                    self.navigateToImg(targetImg);
                                    flashEle(targetImg);
                                },0);

                            }else{//frame发送过来的时候删除了不能传送的图片

                                document.addEventListener('pv-navigateToImg',function(e){
                                    //console.log('pv-navigateToImg',e);
                                    if(!e.detail){
                                        alert(i18n("cantFind"));
                                        return;
                                    };
                                    self.minimize();
                                    setTimeout(function(){//将frame滚动到中间位置
                                        if(self.iframe){
                                            self.navigateToImg(self.iframe);
                                        };
                                    },0);
                                },true);
                                window.postMessage({//问问frame。。
                                    messageID:messageID,
                                    command:'navigateToImg',
                                    index:index,
                                    to:self.from,
                                },'*');
                            };

                        }break;
                        case 'exportImages':
                            self.exportImages();
                            break;
                        case 'downloadImage':
                            var nodes = document.querySelectorAll('.pv-gallery-sidebar-thumb-container[data-src]');
                            var urls = [];
                            [].forEach.call(nodes, function(node){
                                if(getComputedStyle(node).display!="none"){
                                    srcSplit=node.dataset.src.split("/");
                                    saveAs(node.dataset.src, srcSplit[srcSplit.length-1]);
                                }
                            });
                            break;
                        case 'copyImages':
                            self.copyImages(true);
                            break;
                        case 'scrollToEndAndReload':
                            var checkbox = target.parentNode.firstChild;
                            checkbox.checked = !checkbox.checked;

                            prefs.gallery.scrollEndAndLoad = checkbox.checked;
                            break;
                        case 'fullScreen':
                            if (target.classList.contains('fullscreenbtn')) {
                                if (cancelFullScreen()) return;
                                target.textContent = i18n("enterFullsc");
                                target.classList.remove('fullscreenbtn');
                                return;
                            }

                            if (launchFullScreen(document.documentElement)) return;
                            target.classList.toggle('fullscreenbtn');
                            target.textContent = i18n("exitFullsc");
                            target.classList.add('fullscreenbtn');
                            break;
                        case 'openPrefs':
                            openPrefs();
                            break;
                        case 'enterCollection':{
                            //进入管理模式
                            collection.enter();
                        }break;
                        case 'exitCollection':{
                            //退出管理模式
                            collection.exit();
                        }break;
                    };
                },true);

                // 监视全屏的变化
                function fullScreenChanged() {
                    if (!document.fullscreenElement && // alternative standard method
                        !document.mozFullScreenElement &&
                        !document.webkitFullscreenElement &&
                        !document.msFullscreenElement) {

                        var btn = document.getElementById("pv-gallery-fullscreenbtn");
                        if (btn) {
                            btn.textContent = i18n("enterFullsc");
                            btn.removeClass('fullscreenbtn');
                        }
                    }
                }
                document.addEventListener('webkitfullscreenchange', fullScreenChanged, false);
                document.addEventListener('mozfullscreenchange', fullScreenChanged, false);
                document.addEventListener('fullscreenchange', fullScreenChanged, false);

                //生成分享的下拉列表
                var shareMark='';
                var shareItem;
                for(var i in prefs.share){
                    if(!prefs.share.hasOwnProperty(i))continue;
                    shareItem=prefs.share[i];
                    if(shareItem.disabled)continue;
                    shareMark+=(
                        '<span class="pv-gallery-head-command-drop-list-item" data-site="'+i+'" style="\
                        background-image:url(\''+ shareItem.icon +'\');\
                        background-position:4px center;\
                        background-repeat:no-repeat;\
                        padding-left:24px;">'+shareItem.name+'</span>');
                };

                eleMaps['head-command-drop-list-share'].innerHTML=shareMark;

                //分享下拉列表的点击处理
                eleMaps['head-command-drop-list-share'].addEventListener('click',function(e){
                    if(e.button!=0)return;//左键
                    var target=e.target;
                    var site=dataset(target,'site');
                    if(!site)return;
                    var site_info=prefs.share[site];
                    var param=site_info.api.call(self.img,{
                        title:encodeURIComponent(document.title),
                        pic:encodeURIComponent(self.src),
                        url:encodeURIComponent(location.href),
                    });
                    if(!param)return;
                    window.open(param.url,'_blank','height='+param.wSize.h+',width='+param.wSize.w+',left=30,top=30,location=no,status=no,toolbar=no,menubar=no,scrollbars=yes');
                },true);



                var loadThumbsTimer;
                eleMaps['sidebar-thumbnails-container'].addEventListener('scroll',function(e){//发生scroll事件时加载缩略图
                    clearTimeout(loadThumbsTimer);//加个延时，在连续触发的时候缓一缓。
                    loadThumbsTimer=setTimeout(function(){
                        self.loadThumb();
                    },200);
                },false);

                var canScroll=true;
                var scrollToChange=function(next){
                    if(canScroll){
                        if(prefs.gallery.transition){
                            canScroll=false;
                            setTimeout(function(){
                                canScroll=true;
                            },500);
                        }
                        next ? self.selectNext() : self.selectPrevious();
                    }
                }
                addWheelEvent(eleMaps['body'],function(e){//wheel事件
                    if(e.deltaZ!=0)return;//z轴
                    var target=e.target;
                    e.preventDefault();
                    if(eleMaps['sidebar-container'].contains(target)){//缩略图区滚动滚轮翻图片
                        var distance=self.thumbSpanOuterSize;

                        if(e.deltaY<0 || e.deltaX<0){//向上滚
                            distance=-distance;
                        };
                        thumbScrollbar.scrollBy(distance)
                    }else{//图片区域滚动
                        var distance=100;
                        if(e.deltaY!=0){//y轴
                            if(self.img.classList.contains('pv-gallery-img_zoom-out')){//图片可以缩小时，滚动图片，否则切换图片。
                                if(e.deltaY < 0){
                                    distance=-distance;
                                };
                                if(eleMaps['img-scrollbar-h'].contains(target)){//如果在横向滚动条上。
                                    imgScrollbarH.scrollBy(distance);
                                }else{
                                    if(imgScrollbarV.scrollBy(distance) && prefs.gallery.scrollEndToChange){
                                        scrollToChange(e.deltaY > 0);
                                    }
                                };
                            }else{
                                scrollToChange(e.deltaY > 0);
                            };
                        }else{//x轴
                            if(e.deltaX < 0){
                                distance=-distance;
                            };
                            imgScrollbarH.scrollBy(distance);
                        };
                    };
                },true);


                //focus,blur;
                addCusMouseEvent('mouseenter',container,function(){
                    this.focus();
                });
                addCusMouseEvent('mouseleave',container,function(){
                    this.blur();
                });

                //上下左右切换图片,空格键模拟滚动一页

                var validKeyCode=[38,39,40,37,32,9]//上右下左,32空格,tab禁止焦点切换。
                var keyDown;

                document.addEventListener('keydown',function(e){
                    var keyCode=e.keyCode;
                    var index=validKeyCode.indexOf(keyCode);
                    if(index==-1)return;

                    var target=e.target;

                    if(!container.contains(target))return;//触发焦点不再gallery里面。
                    e.preventDefault();

                    if(keyCode==9)return;//tab键
                    if(keyCode==32){//32空格，模拟滚动一页
                        imgScrollbarV.scrollByPages(1);
                        return;
                    };

                    if(keyDown)return;//已按下。
                    keyDown=true;

                    var stop;
                    switch(index){
                        case 0:;
                        case 3:{
                            self.selectPrevious();
                            stop=self.simpleSlideShow(true);
                        }break;
                        case 1:;
                        case 2:{
                            self.selectNext();
                            stop=self.simpleSlideShow();
                        }break;
                    };

                    function keyUpHandler(e){
                        if(e.keyCode!=validKeyCode[index])return;
                        document.removeEventListener('keyup',keyUpHandler,false);
                        keyDown=false;
                        stop();
                    };
                    document.addEventListener('keyup',keyUpHandler,false);

                },true);


                var imgDraged;
                eleMaps['img-parent'].addEventListener('mousedown',function(e){//如果图片尺寸大于屏幕的时候按住图片进行拖移
                    var target=e.target;
                    if(e.button!=0 || target.nodeName!='IMG')return;
                    var bigger=target.classList.contains('pv-gallery-img_zoom-out');//如果是大于屏幕

                    var oClient={
                        x:e.clientX,
                        y:e.clientY,
                    };

                    var oScroll={
                        left:self.imgScrollbarH.getScrolled(),
                        top:self.imgScrollbarV.getScrolled(),
                    };

                    var moveFiredCount=0;
                    var moveHandler=function(e){
                        moveFiredCount++;
                        if(moveFiredCount<2){//给个缓冲。。
                            return;
                        };
                        imgDraged=true;
                        if(bigger){
                            target.style.cursor= support.cssCursorValue.grabbing || 'pointer';
                            self.imgScrollbarV.scroll(oScroll.top-(e.clientY-oClient.y));
                            self.imgScrollbarH.scroll(oScroll.left-(e.clientX-oClient.x));
                        };
                    };

                    var upHandler=function(){
                        target.style.cursor='';

                        //拖曳之后阻止随后可能产生click事件产生的大小切换。
                        //确保在随后的click事件发生后执行
                        setTimeout(function(){
                            imgDraged=false;
                        },0);

                        document.removeEventListener('mousemove',moveHandler,true);
                        document.removeEventListener('mouseup',upHandler,true);
                    };

                    document.addEventListener('mousemove',moveHandler,true);
                    document.addEventListener('mouseup',upHandler,true);
                },true);

                eleMaps['img-parent'].addEventListener('click',function(e){//点击图片本身就行图片缩放处理
                    var target=e.target;
                    if(e.button!=0 || target.nodeName!='IMG')return;

                    if(imgDraged){//在拖动后触发的click事件，取消掉。免得一拖动完就立即进行的缩放。。。
                        imgDraged=false;
                        return;
                    };

                    if(target.classList.contains('pv-gallery-img_zoom-in')){//放大
                        self.fitContains=false;
                        var zoomX = typeof e.offsetX=='undefined' ? e.layerX : e.offsetX;
                        var zoomY = typeof e.offsetY=='undefined' ? e.layerY : e.offsetY;
                        var scaleX=zoomX/target.offsetWidth;
                        var scaleY=zoomY/target.offsetHeight;
                        self.fitToScreen({
                            x:scaleX,
                            y:scaleY,
                        });
                    }else if(target.classList.contains('pv-gallery-img_zoom-out')){
                        self.fitContains=true;
                        self.fitToScreen();
                    };
                },true);


                container.addEventListener('mousedown',function(e){//鼠标按在导航上，切换图片
                    if(e.button!=0)return;//左键
                    var target=e.target;
                    if(target.nodeName=='IMG')e.preventDefault();

                    var matched=true;
                    var stop;
                    switch(target){
                        case eleMaps['img-controler-pre']:;
                        case eleMaps['sidebar-controler-pre']:{//上一个
                            self.selectPrevious();
                            stop=self.simpleSlideShow(true);
                        }break;
                        case eleMaps['img-controler-next']:;
                        case eleMaps['sidebar-controler-next']:{//下一个
                            self.selectNext();
                            stop=self.simpleSlideShow();
                        }break;
                        default:{
                            matched=false;
                        }break;
                    };

                    function mouseUpHandler(e){
                        document.removeEventListener('mouseup',mouseUpHandler,true);
                        stop();
                    };

                    if(matched){
                        e.preventDefault();
                        document.addEventListener('mouseup',mouseUpHandler,true);
                    };
                },false);

                eleMaps['sidebar-thumbnails-container'].addEventListener('click',function(e){//点击缩略图切换
                    if(e.button!=0)return;//左键
                    var target=e.target;
                    var targetP;
                    if(!dataset(target,'src') && (targetP=target.parentNode) && !dataset(targetP,'src'))return;

                    self.select(targetP? targetP : target);
                },false);

                //点击读取错误的图片占位符重新读取
                eleMaps['img_broken'].addEventListener('click',function(e){
                    if(self.isLoading){
                        self.select(self.errorSpan);
                    }else{
                        self.getImg(self.errorSpan);
                    };
                },false);


                eleMaps['head'].addEventListener('click',function(e){//顶栏上面的命令
                    if(e.button!=0)return;
                    var target=e.target;
                    if(eleMaps['head-command-close']==target){
                        self.close();
                    }else if(eleMaps['head-command-operate'].contains(target)){
                        imgReady(self.src,{
                            ready:function(){
                                new ImgWindowC(this);
                            },
                        });
                    }else if(eleMaps['head-command-nextPage'].contains(target)){
                        var textSpan=eleMaps['head-command-nextPage'].querySelector("span");
                        if(textSpan.innerHTML==i18n("loading")){
                            textSpan.innerHTML=i18n("loadAll");
                            return;
                        }
                        textSpan.innerHTML=i18n("loading");
                        self.completePages=[];
                        self.nextPage();
                    }else if(eleMaps['head-command-collect'].contains(target)){
                        if(collection.favorite){
                            collection.remove();
                        }else{
                            collection.add();
                        };
                    }else if(eleMaps['head-command-exit-collection'].contains(target)){
                        collection.exit();
                    }else if(eleMaps['head-command-slide-show'].contains(target)){
                        slideShow.switchStatus();
                        slideShow.check();
                    };

                },false);


                //点击还原。
                maximizeTrigger.addEventListener('click',function(e){
                    var target=e.target;
                    this.style.display='none';
                    if(target==this){
                        self.show();
                        self.resizeHandler();
                    }else{
                        self.minimized=false;
                    };
                },true);


                this._resizeHandler=this.resizeHandler.bind(this);
                this._keyDownListener=this.keyDownListener.bind(this);
                this._keyUpListener=this.keyUpListener.bind(this);

                //插入动态生成的css数据。
                this.globalSSheet.insertRule('.pv-gallery-sidebar-thumb-container{'+
                                             ((isHorizontal ? 'width' : 'height') + ':'  + (isHorizontal ?  unsafeWindow.getComputedStyle(eleMaps['sidebar-thumbnails-container']).height : unsafeWindow.getComputedStyle(eleMaps['sidebar-thumbnails-container']).width)) +
                                             '}',this.globalSSheet.cssRules.length);

                this.forceRepaintTimes=0;

                container.style.display='none';
                this.shown=false;

                // 我添加的部分
                this.initToggleBar();
                this.initZoom();
            },

            changeMinView:function(){
                var sizeInputH=this.gallery.querySelector("#minsizeH");
                var sizeInputW=this.gallery.querySelector("#minsizeW");
                var sizeInputHSpan=this.gallery.querySelector("#minsizeHSpan");
                var sizeInputWSpan=this.gallery.querySelector("#minsizeWSpan");
                sizeInputH.title=sizeInputH.value+"px";
                sizeInputHSpan.innerHTML=sizeInputH.value+"px";
                sizeInputW.title=sizeInputW.value+"px";
                sizeInputWSpan.innerHTML=sizeInputW.value+"px";

                this.data.forEach(function(item) {
                    if(!item)return;
                    var spanMark=document.querySelector("span.pv-gallery-sidebar-thumb-container[data-src='"+item.src+"']");
                    if(spanMark){
                        if(item.sizeW<sizeInputW.value || item.sizeH<sizeInputH.value){
                            spanMark.style.display="none";
                        }else
                            spanMark.style.display="";
                    }
                });
            },

            changeSizeInputW:function(){
                var maxSizeH=0,minSizeH=0,maxSizeW=0,minSizeW=0;
                var sizeInputH=this.gallery.querySelector("#minsizeH");
                var sizeInputW=this.gallery.querySelector("#minsizeW");
                this.data.forEach(function(item) {
                    if(!item)return;
                    if(item.sizeW>=sizeInputW.value){
                        if(item.sizeH>maxSizeH)
                            maxSizeH=item.sizeH;
                        if(item.sizeH<minSizeH || minSizeH==0)
                            minSizeH=item.sizeH;
                    }
                });
                sizeInputH.max=maxSizeH;
                sizeInputH.min=minSizeH;
                sizeInputH.title=sizeInputH.value+"px";
                var sizeInputHSpan=this.gallery.querySelector("#minsizeHSpan");
                sizeInputHSpan.innerHTML=sizeInputH.value+"px";
            },

            changeSizeInputH:function(){
                var maxSizeH=0,minSizeH=0,maxSizeW=0,minSizeW=0;
                var sizeInputH=this.gallery.querySelector("#minsizeH");
                var sizeInputW=this.gallery.querySelector("#minsizeW");
                this.data.forEach(function(item) {
                    if(!item)return;
                    if(item.sizeH>=sizeInputH.value){
                        if(item.sizeW>maxSizeW)
                            maxSizeW=item.sizeW;
                        if(item.sizeW<minSizeW || minSizeW==0)
                            minSizeW=item.sizeW;
                    }
                });
                sizeInputW.max=maxSizeW;
                sizeInputW.min=minSizeW;
                sizeInputW.title=sizeInputW.value+"px";
                var sizeInputWSpan=this.gallery.querySelector("#minsizeWSpan");
                sizeInputWSpan.innerHTML=sizeInputW.value+"px";
            },
            initToggleBar: function() {  // 是否显示切换 sidebar 按钮
                /**
         * TODO：仿造下面的链接重新改造过？
         * http://image.baidu.com/detail/newindex?col=%E8%B5%84%E8%AE%AF&tag=%E4%BD%93%E8%82%B2&pn=0&pid=5123662821688142478&aid=&user_id=10086&setid=-1&sort=0&newsPn=4&star=&fr=hotword&from=1
         */
                if (prefs.gallery.sidebarToggle) {
                    var toggleBar = this.eleMaps['sidebar-toggle'];
                    toggleBar.style.display = 'block';
                    toggleBar.style.height = '12px';
                    toggleBar.addEventListener('click', this.showHideBottom.bind(this), false);

                    // 顶部圆角
                    switch (prefs.gallery.sidebarPosition) {
                        case 'bottom':
                            toggleBar.style.borderRadius = '8px 8px 0 0';  // 左上、右上、右下、左下
                            break;
                        case 'top':
                            toggleBar.style.borderRadius = '0 0 8px 8px';
                            break;
                        case 'left':
                            toggleBar.style.height = '60px';
                            toggleBar.style.borderRadius = '0 8px 8px 0';
                            break;
                        case 'right':
                            toggleBar.style.height = '60px';
                            toggleBar.style.borderRadius = '8px 0 0 8px';
                            break;
                    }
                }
            },
            showHideBottom: function() {  // 显示隐藏 sidebar-container
                var sidebarContainer = this.eleMaps['sidebar-container'],
                    isHidden = sidebarContainer.style.visibility == 'hidden';

                sidebarContainer.style.visibility = isHidden ? 'visible' : 'hidden';

                var sidebarPosition = prefs.gallery.sidebarPosition,
                    capitalize = function(string) { // 将字符串中每个单词首字母大写
                        var words = string.split(" ");
                        for (var i = 0; i < words.length; i++) {
                            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                        }
                        return words.join(" ");
                    };

                // 修正下图片底部的高度
                this.eleMaps['img-container'].style['border' + capitalize(sidebarPosition)] = isHidden ?
                    prefs.gallery.sidebarSize + 'px solid transparent' :
                '0';
                // 修正底部距离
                this.eleMaps['sidebar-toggle'].style[sidebarPosition] = isHidden ? '-5px' : '0';
            },
            initZoom: function() {  // 如果有放大，则把图片及 sidebar 部分缩放比率改为 1
                if (prefs.gallery.autoZoom && document.body.style.zoom != undefined) {
                    var oZoom = detectZoom();
                    if (oZoom > 100) {
                        this.eleMaps['body'].style.zoom = 100 / oZoom;
                    }
                }
            },

            getThumSpan:function(previous,relatedTarget){
                var ret;
                var rt = relatedTarget || this.selected;
                if(!rt)return;
                while((rt=previous ? rt.previousElementSibling : rt.nextElementSibling)){
                    if(rt.clientWidth!=0){
                        ret=rt;
                        break;
                    };
                };
                return ret;
            },
            previous:false,
            selectPrevious:function(){
                this.previous=true;
                this.select(this.getThumSpan(true));
            },
            selectNext:function(){
                this.select(this.getThumSpan());
            },
            select:function(ele,noTransition){
                if(!ele || this.selected==ele)return;
                if(this.selected){
                    this.selected.classList.remove(this.selectedClassName);
                    this.selected.classList.remove('pv-gallery-sidebar-thumb_selected');
                };
                ele.classList.add(this.selectedClassName);
                ele.classList.add('pv-gallery-sidebar-thumb_selected');

                this.selected=ele;
                this.arrowVisib();

                var self=this;
                clearTimeout(this.loadImgTimer);
                if(prefs.gallery.transition){
                    this.loadImgTimer=setTimeout(function(){//快速跳转的时候不要尝试读取图片。
                        self.loadImg(ele);
                    },200);
                }else{
                    self.loadImg(ele);
                }

                this.selectedIntoView(noTransition);
                this.forceRepaint();
                this.slideShow.run('select');
            },
            loadThumb:function(){//读取可视范围里面的缩略图
                var self=this;
                var pro=self.isHorizontal ? ['scrollLeft','clientWidth','offsetLeft','offsetWidth'] : ['scrollTop','clientHeight','offsetTop','offsetHeight'];
                var thumbC=self.eleMaps['sidebar-thumbnails-container'];

                var scrolled=thumbC[pro[0]];

                var loadStopDis=scrolled + thumbC[pro[1]];

                var imgSpans=self.selected.parentNode.children;
                var span_i;
                var spanOffset;
                var thumb;

                var i=0
                while(span_i=imgSpans[i++]){
                    if(span_i.clientWidth==0)continue;//隐藏的

                    spanOffset=span_i[pro[2]];
                    if(spanOffset + span_i[pro[3]] <= scrolled)continue;//在滚动条上面了
                    if(spanOffset >= loadStopDis)break;//在滚动条下面了

                    if(dataset(span_i,'thumbLoaded'))continue;//已经加载了缩略图

                    thumb=document.createElement('img');
                    thumb.src=dataset(span_i,'thumbSrc') || dataset(span_i,'src') || prefs.icons.brokenImg_small;
                    thumb.className='pv-gallery-sidebar-thumb';

                    dataset(span_i,'thumbLoaded','true');
                    span_i.appendChild(thumb);

                    imgReady(thumb,{
                        error:function(e){
                            this.src=prefs.icons.brokenImg_small;
                        },
                    });
                };
            },
            selectedIntoView:function(noTransition){
                var thumBC=this.eleMaps['sidebar-thumbnails-container'];
                var pro=this.isHorizontal ? ['offsetLeft','clientWidth','offsetWidth'] : ['offsetTop','clientHeight','offsetHeight'] ;
                //需要滚动的距离。
                var needScrollDis= this.selected[pro[0]];
                //尽可能的居中显示
                var thumBCClient=thumBC[pro[1]];
                var scrollCenter=Math.max((thumBCClient - this.selected[pro[2]])/2,0);

                this.thumbScrollbar.scroll(needScrollDis - scrollCenter,false,!noTransition);
            },
            getImg:function(ele){
                var self = this;

                var src = dataset(ele,'src');

                this.lastLoading=src;//记住最后读取的图片
                this.isLoading=true;//表示选择的图片正在读取

                // 特殊的 xhr 方式获取
                var xhr = dataset(ele, 'xhr');
                if (xhr) {
                    var xhrError = function() {
                        dataset(ele, 'xhr', '');
                        dataset(ele, 'src', dataset(ele, 'thumb-src'));
                        self.getImg(ele);
                    };
                    xhrLoad.load({
                        url: src,
                        xhr: JSON.parse(decodeURIComponent(xhr)),
                        cb: function(imgSrc, imgSrcs, caption) {
                            if (imgSrc) {
                                dataset(ele, 'src', imgSrc);
                                dataset(ele, 'xhr', '');
                                self.getImg(ele);
                            } else {
                                xhrError();
                            }
                        },
                        onerror: xhrError
                    });
                    return;
                }

                var allLoading=this.allLoading;
                if(allLoading.indexOf(src)!=-1){//在读取队列中。
                    return;
                };
                allLoading.push(src);

                //上一个读取中的图片，不是当前显示的。那么直接终止
                var preImgR=this.imgReady;
                if(preImgR && this.img){
                    if(preImgR.img.src!=this.src){
                        preImgR.abort();
                        preImgR.removeLI();
                    };
                };


                //显示读取指示器。
                var loadingIndicator=ele.querySelector('.pv-gallery-sidebar-thumb-loading');
                loadingIndicator.style.display='block';


                this.imgReady=imgReady(src,{
                    ready:function(){
                        //从读取队列中删除自己
                        var index=allLoading.indexOf(src);
                        if(index!=-1){
                            allLoading.splice(index,1);
                        };

                        if(src!=self.lastLoading)return;

                        loadingIndicator.style.display='';
                        if(preImgR)preImgR.abort();
                        self.loadImg(this,ele);
                    },
                    loadEnd:function(e){//在loadend后开始预读。
                        //从读取队列中删除自己
                        var index=allLoading.indexOf(src);
                        if(index!=-1){
                            allLoading.splice(index,1);
                        };

                        if(src!=self.lastLoading)return;

                        if(e.type=='error'){
                            loadingIndicator.style.display='';
                            self.errorSpan=ele;
                            if(preImgR)preImgR.abort();
                            self.loadImg(this,ele,true);
                        };

                        self.slideShow.run('loadEnd');

                        //console.log(this,'预读开始');
                        if(prefs.gallery.preload){
                            if(self.preloading){//结束上次的预读。
                                self.preloading.abort();
                            };
                            self.preloading=new self.Preload(ele,self);
                            self.preloading.preload();
                        };
                    },
                });

                this.imgReady.removeLI=function(){
                    loadingIndicator.style.display='';
                };

            },
            loadImg:function(img,relatedThumb,error){
                if(img.nodeName!='IMG'){//先读取。
                    this.getImg(img);
                    return;
                };

                if(this.img){
                    this.img.parentNode.removeChild(this.img);
                };

                var imgNaturalSize={
                    h:img.naturalHeight,
                    w:img.naturalWidth,
                };
                this.imgNaturalSize=imgNaturalSize;

                this.eleMaps['head-left-img-info-resolution'].textContent=imgNaturalSize.w + ' x ' + imgNaturalSize.h;
                var thumbnails=this.eleMaps['sidebar-thumbnails-container'].childNodes,i=0;
                while(thumbnails[i]!=relatedThumb && i<thumbnails.length)i++;
                if(i<thumbnails.length)this.eleMaps['head-left-img-info-count'].textContent="（"+(i+1)+" / "+thumbnails.length+"）";
                // 加上图片的注释
                var description = decodeURIComponent(dataset(relatedThumb, 'description')),
                    defaultLength = prefs.gallery.descriptionLength;
                this.eleMaps['head-left-img-info-description'].title = description;
                this.eleMaps['head-left-img-info-description'].textContent= description.length > defaultLength ?
                    description.slice(0, defaultLength) + '...' :
                description;

                this.img=img;
                this.src=img.src;
                this.isLoading=false;

                this.relatedThumb=relatedThumb;
                img.className='pv-gallery-img';

                if(error){
                    if(relatedThumb.querySelector("img").src==this.img.src){
                        this.imgError=true;
                        this.img.style.display='none';
                        this.eleMaps['img_broken'].style.display='inline-block';
                    }else{
                        var srcs=dataset(relatedThumb, 'srcs').split(",");
                        var self=this;
                        this.img.onload=function(){
                            var imgNaturalSize={
                                h:this.naturalHeight,
                                w:this.naturalWidth,
                            };

                            self.imgNaturalSize=imgNaturalSize;
                            self.fitToScreen();
                        }
                        if(srcs){
                            var src=srcs.shift();
                            dataset(relatedThumb, 'srcs',srcs.join(","));
                            if(src){
                                dataset(relatedThumb, 'src',src);
                                this.img.onerror=function(e){
                                    this.src=relatedThumb.querySelector("img").src;
                                    dataset(relatedThumb, 'src',this.src);
                                }
                                this.img.src=src;
                            }
                        }
                        else this.img.src=relatedThumb.querySelector("img").src;
                    }
                }else{
                    this.imgError=false;
                    this.eleMaps['img_broken'].style.display='';
                    if(!dataset(relatedThumb,'naturalSize')){
                        dataset(relatedThumb,'naturalSize',JSON.stringify(imgNaturalSize));
                    };
                };

                function styled(){
                    img.style.opacity=1;
                    img.style[support.cssTransform]='scale(1)';
                };


                if(prefs.gallery.transition){
                    setTimeout(styled,0);
                }else{
                    styled();
                };

                this.eleMaps['img-parent'].appendChild(img);

                this.fitContains=prefs.gallery.fitToScreen;//适应屏幕

                this.fitToScreen({
                    x:0,
                    y:0,
                });

                if(this.previous){
                    this.previous=false;
                    this.imgScrollbarV.scrollBy(999999);
                }
                this.collection.check();//检查是否在收藏里面。

            },
            fitToScreen:function(scale){

                var container=this.eleMaps['img-content'];
                var containerSize={
                    h:container.clientHeight,
                    w:container.clientWidth,
                };

                var img=this.img;

                img.classList.remove('pv-gallery-img_zoom-in');
                img.classList.remove('pv-gallery-img_zoom-out');

                var imgSty=img.style;
                imgSty.width='';
                imgSty.height='';

                var contentSSize={
                    h:container.scrollHeight,
                    w:container.scrollWidth,
                };
                var larger=contentSSize.h>containerSize.h || contentSSize.w>containerSize.w;

                var scaled='100%';

                if(this.fitContains && !(scale && scale.x==0 && scale.y==0 && this.imgNaturalSize.h/this.imgNaturalSize.w > 2.5)){//适应屏幕
                    this.imgScrollbarV.hide();
                    this.imgScrollbarH.hide();
                    if(larger){
                        img.classList.add('pv-gallery-img_zoom-in');
                        if(contentSSize.h/contentSSize.w >=containerSize.h/containerSize.w){
                            var height=this.imgNaturalSize.h-(contentSSize.h - containerSize.h);
                            imgSty.height=height + 'px';
                            scaled=height/this.imgNaturalSize.h;
                        }else{
                            var width=this.imgNaturalSize.w-(contentSSize.w - containerSize.w);
                            imgSty.width=width + 'px';
                            scaled=width/this.imgNaturalSize.w;
                        };
                        scaled=(scaled*100).toFixed(2) + '%';
                    }else if(prefs.gallery.fitToScreenSmall){
                        if(this.imgNaturalSize.h/this.imgNaturalSize.w >=containerSize.h/containerSize.w){
                            var height=contentSSize.h-50;
                            height=height<0?contentSSize.h:height;
                            imgSty.height=height + 'px';
                            scaled=height/this.imgNaturalSize.h;
                        }else{
                            var width=contentSSize.w-50;
                            width=width<0?contentSSize.w:width;
                            imgSty.width=width + 'px';
                            scaled=width/this.imgNaturalSize.w;
                        };
                        scaled=(scaled*100).toFixed(2) + '%';
                    }
                }else{//不做尺寸调整
                    this.imgScrollbarV.reset();
                    this.imgScrollbarH.reset();

                    if(larger){
                        img.classList.add('pv-gallery-img_zoom-out');
                        if(scale){//通过鼠标点击进行的切换。
                            this.imgScrollbarH.scroll(container.scrollWidth * scale.x - containerSize.w/2);
                            this.imgScrollbarV.scroll(container.scrollHeight * scale.y - containerSize.h/2);
                        };
                    };
                };


                var imgScaledInfo=this.eleMaps['head-left-img-info-scaling'];
                imgScaledInfo.textContent='（'+scaled+'）';
                if(scaled!='100%'){
                    imgScaledInfo.style.color='#E9CCCC';
                }else{
                    imgScaledInfo.style.color='';
                };

            },

            _dataCache: {},
            _appendThumbSpans: function(data, index) {  // 添加缩略图栏的 spans
                var iStatisCopy = this.iStatisCopy;

                if (typeof index == 'undefined' && this.selected) {
                    index = Array.prototype.slice.call(this.imgSpans).indexOf(this.selected);
                }

                var thumbnails = this.eleMaps['sidebar-thumbnails-container'];
                // 如果是新的，则添加，否则重置并添加。
                if (!data){
                    thumbnails.innerHTML = "";
                    this._dataCache = {};
                }
                (data || this.data).forEach(function(item) {
                    if(!item)return;
                    iStatisCopy[item.type].count++;
                    var spanMark=document.createElement("span");
                    thumbnails.appendChild(spanMark);
                    try{
                        spanMark.className="pv-gallery-sidebar-thumb-container";
                        spanMark.dataset.type=item.type;
                        spanMark.dataset.src=item.src;
                        spanMark.dataset.srcs=item.srcs;
                        if(item.xhr)spanMark.dataset.xhr=encodeURIComponent(JSON.stringify(item.xhr));
                        spanMark.dataset.description=encodeURIComponent(item.description || '');
                        spanMark.dataset.thumbSrc=item.imgSrc;
                        spanMark.title=(item.img?item.img.title:"");
                        spanMark.innerHTML='<span class="pv-gallery-vertical-align-helper"></span>' +
                            '<span class="pv-gallery-sidebar-thumb-loading" title="'+i18n("loading")+'......"></span>';
                    }catch(e){};
                });

                var self = this;
                (data || this.data).forEach(function(d) {
                    if(!d)return;
                    self._dataCache[d.imgSrc] = true;
                });

                //写入类别数据。
                var gallery = this.gallery;
                var input, label, iStatisCopy_i;

                for (var i in iStatisCopy) {
                    if (!iStatisCopy.hasOwnProperty(i)) continue;
                    iStatisCopy_i = iStatisCopy[i];
                    input = gallery.querySelector('#pv-gallery-head-command-drop-list-item-category-' + i);
                    input.checked = iStatisCopy_i.shown;
                    if (iStatisCopy_i.count == 0) {
                        input.disabled = true;
                        input.parentNode.classList.add('pv-gallery-head-command-drop-list-item_disabled');
                    } else {
                        input.disabled = false;
                        input.parentNode.classList.remove('pv-gallery-head-command-drop-list-item_disabled');
                    };

                    label = gallery.querySelector('label[for="pv-gallery-head-command-drop-list-item-category-' + i + '"]');
                    label.textContent = label.textContent.replace(/（.*）/i, '') + '（' + iStatisCopy_i.count + '）';
                };

                this.imgSpans = thumbnails.children;

                this.thumbScrollbar.reset();

                this.select(this.imgSpans[index], true);
            },
            load:function(data, from, reload){
                if(this.shown || this.minimized){//只允许打开一个,请先关掉当前已经打开的库

                    if(from){//frame发送过来的数据。
                        window.postMessage({
                            messageID:messageID,
                            command:'sendFail',
                            to:from,
                        },'*');
                    };

                    if(this.minimized){
                        alert('请先关掉当前已经打开的库');
                        flashEle(this.maximizeTrigger);
                    };
                    return;
                };

                var self=this;
                if(from){//来自frame，获取这个frame所在的iframe标签。定位到图片的时候要用到。
                    window.postMessage({
                        messageID:messageID,
                        command:'getIframeObject',
                        windowId:from,
                    },'*');
                    document.addEventListener('pv-getIframeObject',function(e){
                        self.iframe=e.detail;
                    },true);
                };

                var unique=this.unique(data);
                data=unique.data;
                var index=unique.index;

                if (reload && this.data.length >= data.length) {
                    // alert('没有新增的图片');
                    return;
                }

                this.clear();//还原对象的一些修改，以便复用。
                this.data=data;
                this.show(reload);

                this.from=from;//如果来自frame，那么这个from应该保存了那个frame的窗口id，便于以后通信。

                this._appendThumbSpans(null, index);

                this.runOnce();

                this.switchThumbVisible();
            },
            clear:function(){
                this._dataCache = {};

                this.allLoading=[];//读取中的图片数组
                this.iStatisCopy=cloneObject(this.imgStatistics,true);//图片统计副本
                this.selected==null;
                if(this.img){
                    this.img.style.display='none';
                    this.img=null;
                };
                //读取错误的图片占位符
                this.eleMaps['img_broken'].style.display='';
                //清空dom
                this.eleMaps['sidebar-thumbnails-container'].innerHTML='';
                this.eleMaps['head-left-img-info-resolution'].textContent='0 x 0';
                this.eleMaps['head-left-img-info-count'].textContent='（1 / 1）';
                this.eleMaps['head-left-img-info-scaling'].textContent='（100%）';
                //隐藏滚动条
                this.imgScrollbarV.hide();
                this.imgScrollbarH.hide();
                this.thumbScrollbar.hide();
                //重置style;
                this.thumbVisibleStyle.textContent='';
            },

            unique:function(data){
                var imgSrc;
                if(data.target)
                imgSrc=data.target.src;

                var data_i,
                    data_i_src,
                    dataSrcs=[];

                var index;

                for(var i=0,ii=data.length;i<ii;i++){
                    data_i=data[i];
                    data_i_src=data_i.src;
                    if(dataSrcs.indexOf(data_i_src)!=-1){//已经存在
                        data.splice(i,1);//移除
                        i--;
                        ii--;
                        continue;
                    };
                    dataSrcs.push(data_i_src);

                    if(imgSrc==data_i_src){
                        index=i;
                    };
                };

                if(typeof index =='undefined'){
                    index=0;
                    data.unshift(data.target);
                };

                delete data.target;

                return {
                    data:data,
                    index:index,
                };
            },
            keyDownListener:function(e){
                switch(e.keyCode){
                    case 27:
                        if(prefs.imgWindow.close.escKey){
                            this.close();
                        }
                        break;
                }
            },
            keyUpListener:function(e){
                switch(e.keyCode){
                    case 82:
                        var img=this.img;
                        var cssTransform=img.style[support.cssTransform];
                        var iTransform=cssTransform.replace(/rotate\([^)]*\)/i,'');
                        var rotatedRadians=cssTransform.indexOf("rotate")!=-1?cssTransform.replace(/.*rotate\(([-\d\.]+).*/i,'$1'):0;
                        var PI=Math.PI;
                        var origin=parseFloat(rotatedRadians) +(e.shiftKey?-90:90) * PI/180;
                        if(origin>=2*PI || origin<=-2*PI ||(-0.1<origin && origin<0.1)){
                            origin=0;
                        }
                        img.style[support.cssTransform] = ' rotate('+ origin +'rad) ' + iTransform;
                        break;
                }
            },
            show:function(reload){
                this.shown=true;
                galleryMode=true;

                if (!reload) {
                    var des=document.documentElement.style;
                    this.deOverflow={
                        x:des.overflowX,
                        y:des.overflowY,
                    };
                    des.overflow='hidden';
                    this.gallery.style.display='';
                    this.gallery.focus();
                    window.addEventListener('resize',this._resizeHandler,true);
                }
                document.addEventListener('keydown',this._keyDownListener,true);
                document.addEventListener('keyup',this._keyUpListener,true);

                if(prefs.gallery.loadMore){
                    this.eleMaps['head-command-nextPage'].click();
                }

                this.changeSizeInputH();
                this.changeSizeInputW();
            },
            close:function(reload){
                document.removeEventListener('keydown',this._keyDownListener,true);
                document.removeEventListener('keyup',this._keyUpListener,true);
                this.shown=false;
                this.minimized=false;

                if (!reload) {
                    galleryMode=false;
                    this.gallery.blur();
                    this.gallery.style.display='none';
                    var des=document.documentElement.style;
                    des.overflowX=this.deOverflow.x;
                    des.overflowY=this.deOverflow.y;
                    this.slideShow.exit();
                    this.collection.exit();
                    window.removeEventListener('resize',this._resizeHandler,true);

                    // 退出全屏
                    var btn = document.getElementById('pv-gallery-fullscreenbtn');
                    if (btn.classList.contains('fullscreenbtn')) {
                        cancelFullScreen();
                        btn.textContent = i18n("enterFullsc");
                        btn.classList.remove('fullscreenbtn');
                    }
                }
            },
            curPage:document,
            getPage:function(){
                var pageNum=0;
                if(/[_\-]\d+(\.html)?$/.test(this.href)){
                    pageNum=this.href.replace(/.*[\-_](\d+)(\.html)?$/,"$1");
                }
                var curPage=this.curPage;
                let pre=curPage.querySelector("a.prev");
                let next=curPage.querySelector("a.next");
                if(!pre)pre=curPage.querySelector("a#prev");
                if(!next)next=curPage.querySelector("a#next");
                if(!pre)pre=curPage.querySelector("a#leftFix");
                if(!next)next=curPage.querySelector("a#rightFix");
                if(!pre || !next){
                    let aTags=curPage.querySelectorAll("a");
                    if(!pre){
                        let pref,pres,pret;
                        for(var i=0;i<aTags.length;i++){
                            let aTag=aTags[i];
                            if(pref && pres && pret)break;
                            if(!pref){
                                if(/上一页/.test(aTag.innerHTML)){
                                    pref=aTag;
                                }
                            }
                            if(!pres){
                                if(aTag.innerHTML=="&lt;"){
                                    pres=aTag;
                                }
                            }
                            if(!pret){
                                if(aTag.innerHTML=="«"){
                                    pret=aTag;
                                }else if(pageNum==1){
                                    if(aTag.getAttribute("href") && aTag.getAttribute("href").indexOf(this.href.replace(/.*\/([^\/]+)$/,"$1").replace(/[_-]\d+/,""))!=-1){
                                       pret=aTag;
                                    }
                                }else if(aTag.getAttribute("href") && aTag.getAttribute("href").replace(/.*[\-_](\d+)(\.html)?$/,"$1")==pageNum-1){
                                    pret=aTag;
                                }
                            }
                        }
                        pre=pref||pres||pret;
                    }
                    if(!next){
                        let nextf,nexts,nextt;
                        for(var i=0;i<aTags.length;i++){
                            let aTag=aTags[i];
                            if(nextf && nexts && nextt)break;
                            if(!nextf){
                                if(/下一页/.test(aTag.innerHTML)){
                                    nextf=aTag;
                                }
                            }
                            if(!nexts){
                                if(aTag.innerHTML=="&gt;"){
                                    nexts=aTag;
                                }
                            }
                            if(!nextt){
                                if(aTag.innerHTML=="»"){
                                    nextt=aTag;
                                }else if(aTag.hasAttribute("href") && aTag.getAttribute("href").replace(/.*[\-_](\d+)(\.html)?$/,"$1")==parseInt(pageNum)+1){
                                    nextt=aTag;
                                }
                            }
                        }
                        next=nextf||nexts||nextt;
                    }
                }
                if(!pre)pre=curPage.querySelector(".prev>a");
                if(!next)next=curPage.querySelector(".next>a");
                if(!pre && !next){
                    let pageDiv=curPage.querySelector("div.wp-pagenavi");
                    if(pageDiv){
                        var cur=pageDiv.querySelector("span.current");
                        pre=cur.previousSibling;
                        next=cur.nextSibling;
                    }else{
                        var cur=curPage.querySelector("div.article-paging>span");
                        if(cur){
                            pre=cur.previousElementSibling;
                            next=cur.nextElementSibling;
                        }
                    }
                }
                return {pre:pre,next:next};
            },
            canonicalUri:function(src, base_path){
                if(src.charAt(0)=="#")return location.href+src;
                var root_page = /^[^?#]*\//.exec(location.href)[0],
                    root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
                    absolute_regex = /^\w+\:\/\//;
                src=src.replace(/\.\//,"");
                if (/^\/\/\/?/.test(src)){
                    src = location.protocol + src;
                }
                else if (!absolute_regex.test(src) && src.charAt(0) != "/"){
                    src = (base_path || "") + src;
                }
                return (absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src));
            },
            completePages:[location.href],
            href:location.href,
            prePage:function(){
                var pageObj=this.getPage(),self=this,textSpan=this.eleMaps['head-command-nextPage'].querySelector("span");
                if(textSpan.innerHTML!=i18n("loading")){
                    return;
                }
                var loadOver=function(){
                    textSpan.innerHTML="<font color='red'>"+i18n("loadedAll")+"</font>";
                    setTimeout(function(){textSpan.innerHTML=i18n("loadAll");},1500);
                };
                if(!pageObj.pre){
                    loadOver();
                    return;
                }
                var preUrl=pageObj.pre;
                if(preUrl.tagName!="A"){
                    var childA=preUrl.querySelector("a");
                    if(childA){
                        preUrl=childA;
                    }else{
                        while(preUrl=preUrl.parentElement){
                            if(preUrl.nodeName=='A'){
                                break;
                            }
                        }
                        if(!preUrl)return;
                    }
                }
                var href=preUrl.getAttribute("href");
                if(self.completePages.indexOf(href)!=-1){
                    loadOver();
                    return;
                }else{
                    self.completePages.push(href);
                }
                self.href=self.canonicalUri(href);
                GM_xmlhttpRequest({
                    method: 'GET',
                    headers:{"Referer": + window.location.href},
                    url: self.href,
                    overrideMimeType:"text/html;charset="+document.charset,
                    onload: function(d) {
                        let html=document.implementation.createHTMLDocument('');
                        html.documentElement.innerHTML = d.responseText;
                        self.curPage=html;
                        let imgs=html.querySelectorAll('img');
                        var container = document.querySelector('.pv-gallery-container'),
                            preloadContainer = document.querySelector('.pv-gallery-preloaded-img-container');
                        imgs = Array.prototype.slice.call(imgs).filter(function(img){
                            return !(container.contains(img) || (preloadContainer&&preloadContainer.contains(img)));
                        });
                        imgs.forEach(function(img) {
                            var isrc=img.getAttribute("src");
                            if(!isrc)return;
                            isrc=self.canonicalUri(isrc);
                            if (self._dataCache[isrc]) return;
                            var nimg = new Image();
                            nimg.src = isrc;
                            nimg.onload=function(){
                                var result = findPic(this);
                                if (result && !self._dataCache[this.src]) {
                                    self.data.push(result);
                                    self._appendThumbSpans([result]);
                                    self.loadThumb();
                                }
                                self._dataCache[this.src] = true;
                            };
                        });
                        if(prefs.gallery.loadAll)self.prePage();
                        else loadOver();
                    },
                    onerror: function(e) {
                    }
                });
            },
            nextPage:function(){
                var pageObj=this.getPage(),self=this,textSpan=this.eleMaps['head-command-nextPage'].querySelector("span");
                if(textSpan.innerHTML!=i18n("loading")){
                    return;
                }
                var loadOver=function(){
                    if(prefs.gallery.loadAll){
                        self.curPage=document;
                        self.href=location.href;
                        self.prePage();
                    }else{
                        textSpan.innerHTML="<font color='red'>"+i18n("loadedAll")+"</font>";
                        setTimeout(function(){textSpan.innerHTML=i18n("loadAll");},1500);
                    }
                };
                if(!pageObj.next){
                    loadOver();
                    return;
                }
                var nextUrl=pageObj.next;
                if(nextUrl.tagName!="A"){
                    var childA=nextUrl.querySelector("a");
                    if(childA){
                        nextUrl=childA;
                    }else{
                        while(nextUrl=nextUrl.parentElement){
                            if(nextUrl.nodeName=='A'){
                                break;
                            }
                        }
                        if(!nextUrl)return;
                    }
                }
                var href=nextUrl.getAttribute("href");
                if(self.completePages.indexOf(href)!=-1){
                    loadOver();
                    return;
                }else{
                    self.completePages.push(href);
                }
                self.href=self.canonicalUri(href);
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: self.href,
                    headers:{"Referer": + window.location.href},
                    overrideMimeType:"text/html;charset="+document.charset,
                    onload: function(d) {
                        let html=document.implementation.createHTMLDocument('');
                        html.documentElement.innerHTML = d.responseText;
                        self.curPage=html;
                        let imgs=html.querySelectorAll('img');
                        var container = document.querySelector('.pv-gallery-container'),
                            preloadContainer = document.querySelector('.pv-gallery-preloaded-img-container');
                        imgs = Array.prototype.slice.call(imgs).filter(function(img){
                            return !(container.contains(img) || (preloadContainer&&preloadContainer.contains(img)));
                        });
                        imgs.forEach(function(img) {
                            var isrc=img.getAttribute("src");
                            if(!isrc)return;
                            isrc=self.canonicalUri(isrc);
                            if (self._dataCache[isrc]) return;
                            var nimg = new Image();
                            nimg.src = isrc;
                            nimg.onload=function(){
                                var result = findPic(this);
                                if (result && !self._dataCache[this.src]) {
                                    self.data.push(result);
                                    self._appendThumbSpans([result]);
                                    self.loadThumb();
                                }
                                self._dataCache[this.src] = true;
                            };
                        });
                        if(prefs.gallery.loadAll)self.nextPage();
                        else loadOver();
                    },
                    onerror: function(e) {
                    }
                });
            },
            runOnce:function(){//运行一次来获取某些数据。
                var thumbSpanCS=unsafeWindow.getComputedStyle(this.selected);
                this.thumbSpanOuterSize=this.isHorizontal?
                    this.selected.offsetWidth + parseFloat(thumbSpanCS.marginLeft) + parseFloat(thumbSpanCS.marginRight) :
                this.selected.offsetHeight + parseFloat(thumbSpanCS.marginTop) + parseFloat(thumbSpanCS.marginBottom);


                //console.log(this.thumbSpanOuterSize);

                this.runOnce=function(){
                };
            },

            minimize:function(){
                this.close();
                this.maximizeTrigger.style.display='block';
                this.minimized=true;
            },
            navigateToImg:function(targetImg){
                targetImg.scrollIntoView();//先调用原方法，可以让overflow hidden的滚动出来。

                //让图片近可能的居中
                var imgBCRect=getContentClientRect(targetImg);
                var wSize=getWindowSize();

                window.scrollBy(imgBCRect.left - (wSize.w - imgBCRect.width)/2,
                                imgBCRect.top - (wSize.h - imgBCRect.height)/2);

            },
            switchThumbVisible:function(){
                var style=this.thumbVisibleStyle;
                var count=0;
                var styleText=[];
                var iStatisCopy=this.iStatisCopy;
                var iStatisCopy_i;

                for(var i in iStatisCopy){
                    if(!iStatisCopy.hasOwnProperty(i))continue;
                    iStatisCopy_i=iStatisCopy[i];
                    if(iStatisCopy_i.shown){
                        count+=iStatisCopy_i.count;
                    }else{
                        styleText.push('.pv-gallery-sidebar-thumb-container[data-type="'+i+'"]');
                    };
                };

                //写入style;
                style.textContent=styleText.join(',') + '{\
                    display:none !important;\
                    }';

                //初始化缩略图区的滚动条
                this.thumbScrollbar.reset();
                this.arrowVisib();

                //载入缩略图
                this.loadThumb();
            },
            forceRepaint:function(){//解决opera的fixed元素，当滚动条不再最高处的时候，不重绘fixed元素的问题。
                clearTimeout(this.forceRepaintTimer);
                var self=this;
                this.forceRepaintTimer=setTimeout(function(){
                    if(envir.opera){
                        self.forceRepaintTimes % 2 ==0 ? window.scrollBy(0,1) : window.scrollBy(0,-1);
                        self.forceRepaintTimes++;
                    };
                },333);
            },
            resizeHandler:function(){//窗口变化时，调整一些东西。
                this.thumbScrollbar.reset();
                //this.selectedIntoView();
                this.fitToScreen();
                this.loadThumb();
            },
            _isLastSpan: function(span) {  // 用于判断是否自动重载，是否是最后几个图片
                if (this.selected.clientWidth == 0) return false;
                if (!span) return true;

                var index = Array.prototype.slice.call(this.imgSpans).indexOf(span);
                if (index != -1) {
                    var total = this.imgSpans.length;
                    if (total - index < prefs.gallery.scrollEndAndLoad_num) {
                        return true;
                    }
                }
            },
            arrowVisib:function(){//当当前选择元素的前面或者后面没有元素的时候隐藏控制箭头

                var icps=this.eleMaps['img-controler-pre'].style;
                var icns=this.eleMaps['img-controler-next'].style;
                var scps=this.eleMaps['sidebar-controler-pre'].style;
                var scns=this.eleMaps['sidebar-controler-next'].style;

                //下一张的箭头
                var nextSpan = this.getThumSpan();
                if (nextSpan) {
                    icns.display='';
                    scns.display='';
                }else{
                    icns.display='none';
                    scns.display='none';
                };

                // 最后几张图片，滚到底部添加新的图片
                if (prefs.gallery.scrollEndAndLoad && this._isLastSpan(nextSpan)) {
                    this.scrollToEndAndReload();
                }

                //上一张的箭头
                if(this.getThumSpan(true)){
                    icps.display='';
                    scps.display='';
                }else{
                    icps.display='none';
                    scps.display='none';
                };
            },
            simpleSlideShow:function(backward,interval){
                clearInterval(this.slideShowInterval);//幻灯播放，只允许存在一个，否则得乱套

                var self=this;
                var slideShowInterval=setInterval(function(){
                    var before=self.selected;
                    backward ? self.selectPrevious() : self.selectNext();
                    if(before == self.selected){//没有下一个元素了。。
                        stop();
                    };
                },(interval? interval : 800));

                this.slideShowInterval=slideShowInterval;

                function stop(){
                    clearInterval(slideShowInterval);
                };

                return stop;
            },

            reload: function() {  // 重新加载所有图片到库里面
                // 函数在 LoadingAnimC 中
                var data = this.getAllValidImgs();
                // 设置当前选中的图片
                data.target = {
                    src: this.selected.dataset.src
                };

                this.close(true);

                this.load(data, null, true);
            },
            reloadNew: function() {  // 加载新的图片到库里面
                var newer = true;
                var data = this.getAllValidImgs(newer);
                if (data.length) {
                    this._appendThumbSpans(data);
                }
            },
            getAllValidImgs:function(newer){
                var validImgs = [];
                var imgs = document.getElementsByTagName('img'),
                    container = document.querySelector('.pv-gallery-container'),
                    preloadContainer = document.querySelector('.pv-gallery-preloaded-img-container');

                imgs = Array.prototype.slice.call(imgs);
                arrayFn.forEach.call(document.querySelectorAll("iframe"),function(iframe){
                    if(iframe.src.replace(/\/[^\/]*$/,"").indexOf(location.hostname)!=-1)
                        try{
                            arrayFn.forEach.call(iframe.contentWindow.document.getElementsByTagName('img'),function(img){
                                imgs.push(img);
                            });
                        }catch(e){
                            console.log(e.toString());
                        }
                });
                // 排除库里面的图片
                imgs = imgs.filter(function(img){
                    return !(container.contains(img) || (preloadContainer&&preloadContainer.contains(img)));
                });

                // 已经在图库里面的
                var self = this;
                imgs.forEach(function(img) {
                    if (newer && self._dataCache[img.src]) return;

                    var result = findPic(img);
                    if (result) {
                        validImgs.push(result);
                        self.data.push(result);
                    }

                    self._dataCache[img.src] = true;
                });

                return validImgs;
            },
            scrollToEndAndReload: function() {  // 滚动主窗口到最底部，然后自动重载库的图片

                window.scrollTo(0, 9999999);

                var self = this;
                clearTimeout(self.reloadTimeout);
                self.reloadTimeout = setTimeout(function(){
                    // self.reload();
                    self.reloadNew();
                }, 1000);
            },
            exportImages: function () {  // 导出所有图片到新窗口
                var nodes = document.querySelectorAll('.pv-gallery-sidebar-thumb-container[data-src]');
                var arr = [].map.call(nodes, function(node){
                    if(unsafeWindow.getComputedStyle(node).display=="none")return "";
                    else return '<div><img src=' + node.dataset.src + '></div>'
                });

                var title = document.title;

                var html = '\
                 <head>\
                 <title>' + title + ' '+i18n("exportImages")+'</title>\
                 <style>\
                 .toTop{width:28px;height:28px;border-radius:14px;position: fixed;right:2px;bottom: 2px;cursor: pointer;background-color:#000;opacity:.3;padding:0em!important;border:0px!important;}\
                 .toTop:hover{opacity:1}\
                 .toTop>span{height:28px;line-height:28px;display:block;color:#FFF;text-align:center;font-size:20px;}\
                 .grid{-moz-column-count:4;-webkit-column-count:4;column-count:4;-moz-column-gap: 1em;-webkit-column-gap: 1em;column-gap: 1em;}\
                 .grid>div{padding: 1em;margin: 0 0 1em 0;-moz-page-break-inside: avoid;-webkit-column-break-inside: avoid;break-inside: avoid;border: 1px solid #000;}\
                 .grid>div>img{width: 100%;margin-bottom:10px;}\
                 .list>div {text-align:center;}\
                 .list>div>img { max-width: 100%; }\
                 .gridBig{margin: 0px;}\
                 .gridBig>div { float: left;margin: 0px 0px 1px 1px;}\
                 .gridBig>div>img { max-width: 100%; }\
                 .select{opacity: 0.33;}\
                 </style>\
                 </head>\
                 <div class="toTop">\
                    <span>￪</span>\
                 </div>\
                 <body class="'+prefs.gallery.exportType+'">\
                 <p style="width:100vw;display:flex;flex-direction:column;">\
                 <img id="bigImg" style="pointer-events:none;position:fixed;z-index:999;max-height:100vh;top:0px;align-self:center;"></p>\
                 <p>【'+i18n("picTitle")+'】：' + title + '</p>\
                 <p>【'+i18n("picNum")+'】：' + nodes.length + ' <select onchange="document.body.className=this.options[this.options.selectedIndex].value"><option value="grid" '+(prefs.gallery.exportType=="grid"?"selected='selected'":"")+'>'+i18n("grid")+'</option><option value="gridBig" '+(prefs.gallery.exportType=="gridBig"?"selected='selected'":"")+'>'+i18n("gridBig")+'</option><option value="list" '+(prefs.gallery.exportType=="list"?"selected='selected'":"")+'>'+i18n("list")+'</option> </select> \
                 <input type="button" value="'+i18n("exportImagesUrl")+'" onclick="var imgStr=\'\',selList=document.querySelectorAll(\'.select>img\');if(selList.length==0)[].forEach.call(document.querySelectorAll(\'img\'),function(i){imgStr+=i.src+\' \\n\'});else{[].forEach.call(selList,function(i){imgStr+=i.src+\' \\n\'});}window.prompt(\''+i18n("exportImagesUrlPop")+'\',imgStr);">\
                 </p>';

                html += arr.join('\n') +
                '<script type="text/javascript">\
                 document.querySelector(".toTop").addEventListener("click", function(){\
                 document.body.scrollIntoView();\
                 });\
                 [].forEach.call(document.querySelectorAll("div>img"),function(i){\
                 i.onmouseover=i.onmousemove=function(e){document.querySelector("#bigImg").src=e.ctrlKey?this.src:"";};\
                 i.onmouseout=function(e){document.querySelector("#bigImg").src="";}\
                 });\
                 [].forEach.call(document.querySelectorAll("body>div"),function(i){\
                 i.onclick=function(){this.classList.toggle("select")}\
                 });\
                 </script></body>';
                GM_openInTab('data:text/html;charset=utf-8,' + encodeURIComponent(html));
            },
            copyImages: function(isAlert) {
                var nodes = document.querySelectorAll('.pv-gallery-sidebar-thumb-container[data-src]');
                var urls = [];
                [].forEach.call(nodes, function(node){
                    if(getComputedStyle(node).display!="none")
                        urls.push(node.dataset.src);
                });

                GM_setClipboard(urls.join("\n"));

                if (isAlert) {
                    alert(i18n("copySuccess",urls.length));
                }
            },

            Preload:function(ele,oriThis){
                this.ele=ele;
                this.oriThis=oriThis;//主this
                this.init();
            },
            Scrollbar:function(scrollbar,container,isHorizontal){
                this.scrollbar=scrollbar;
                this.container=container;
                this.isHorizontal=isHorizontal
                this.init();
            },

            addStyle:function(){
                var style=document.createElement('style');
                style.type='text/css';
                style.textContent='\
                 /*最外层容器*/\
                    .pv-gallery-container {\
                    position: fixed;\
                    top: 0;\
                    left: 0;\
                    width: 100%;\
                    height: 100%;\
                    min-width:none;\
                    min-height:none;\
                    padding: 0;\
                    margin: 0;\
                    border: none;\
                    z-index:2147483647;\
                    background-color: transparent;\
                    }\
                    /*全局border-box*/\
                    .pv-gallery-container span{\
                    -moz-box-sizing: border-box;\
                    box-sizing: border-box;\
                    line-height: 1.6;\
                    }\
                    .pv-gallery-container * {\
                    font-size: 14px;\
                    }\
                    /*点击还原的工具条*/\
                    .pv-gallery-maximize-trigger{\
                    position:fixed;\
                    bottom:15px;\
                    left:15px;\
                    display:none;\
                    background:#000;\
                    opacity:0.6;\
                    padding-left:10px;\
                    font-size:16px;\
                    line-height:0;\
                    color:white;\
                    cursor:pointer;\
                    box-shadow:3px 3px 0 0 #333;\
                    z-index:899999998;\
                    }\
                    .pv-gallery-maximize-trigger:hover{\
                    opacity:0.9;\
                    }\
                    .pv-gallery-maximize-trigger-close{\
                    display:inline-block;\
                    padding-left:10px;\
                    vertical-align:middle;\
                    height:30px;\
                    padding:10px 0;\
                    width:24px;\
                    background:url("'+prefs.icons.loadingCancle+'") center no-repeat;\
                    }\
                    .pv-gallery-maximize-trigger-close:hover{\
                    background-color:#333;\
                    }\
                    /*顶栏*/\
                    .pv-gallery-head {\
                    position: absolute;\
                    top: 0;\
                    left: 0;\
                    width: 100%;\
                    height:30px;\
                    z-index:1;\
                    background-color:rgb(0,0,0);\
                    border:none;\
                    border-bottom:1px solid #333333;\
                    text-align:right;\
                    line-height:0;\
                    font-size: 14px;\
                    color:#757575;\
                    padding-right:42px;\
                    }\
                    .pv-gallery-head > span{\
                    vertical-align:middle;\
                    }\
                    /*顶栏左边*/\
                    .pv-gallery-head-float-left{\
                    float:left;\
                    height:100%;\
                    text-align:left;\
                    padding-left:5px;\
                    }\
                    .pv-gallery-head-float-left > span{\
                    display:inline-block;\
                    height:100%;\
                    vertical-align:middle;\
                    }\
                    .pv-gallery-head-float-left > span > *{\
                    vertical-align:middle;\
                    }\
                    .pv-gallery-head-left-img-info{\
                    cursor:help;\
                    }\
                    .pv-gallery-head-left-img-info-description {\
                    margin-left: 10px;\
                    }\
                    /*顶栏里面的按钮样式-开始*/\
                    .pv-gallery-head-command{\
                    display:inline-block;\
                    cursor:pointer;\
                    height:100%;\
                    padding:0 8px;\
                    text-align:center;\
                    position:relative;\
                    z-index:1;\
                    vertical-align:middle;\
                    -o-user-select: none;\
                    -ms-user-select: none;\
                    -webkit-user-select: none;\
                    -moz-user-select: -moz-none;\
                    user-select: none;\
                    }\
                    /*辅助点击事件的生成，countdown*/\
                    .pv-gallery-head-command_overlayer{\
                    top:0;\
                    left:0;\
                    right:0;\
                    bottom:0;\
                    position:absolute;\
                    opacity:0;\
                    }\
                    .pv-gallery-head-command > *{\
                    vertical-align:middle;\
                    }\
                    .pv-gallery-head-command-close{\
                    position:absolute;\
                    top:0;\
                    right:0;\
                    width:40px;\
                    border-left: 1px solid #333333;\
                    background:transparent no-repeat center;\
                    background-image:url("'+prefs.icons.loadingCancle+'");\
                    }\
                    .pv-gallery-head-command-slide-show-countdown{\
                    font-size:0.8em;\
                    }\
                    .pv-gallery-head-command-slide-show-button{\
                    border-radius:36px;\
                    display:inline-block;\
                    width:18px;\
                    height:18px;\
                    border:2px solid #757575;\
                    margin-right:3px;\
                    line-height:0;\
                    }\
                    .pv-gallery-head-command-slide-show-button-inner{\
                    display:inline-block;\
                    border:none;\
                    border-top:4px solid transparent;\
                    border-bottom:4px solid transparent;\
                    border-left:8px solid #757575;\
                    vertical-align:middle;\
                    }\
                    .pv-gallery-head-command-slide-show-button-inner_stop{\
                    border-color:#757575;\
                    }\
                    .pv-gallery-head-command-collect-icon{\
                    display:inline-block;\
                    height:20px;\
                    width:20px;\
                    background:transparent url("' + prefs.icons.fivePointedStar + '") 0 0 no-repeat;\
                    }\
                    .pv-gallery-head-command-collect-icon ~ .pv-gallery-head-command-collect-text::after{\
                    content:"'+i18n("collect")+'";\
                    }\
                    .pv-gallery-head-command-collect-favorite > .pv-gallery-head-command-collect-icon{\
                    background-position:-40px 0 !important;\
                    }\
                    .pv-gallery-head-command-collect-favorite > .pv-gallery-head-command-collect-text::after{\
                    content:"'+i18n("collected")+'";\
                    }\
                    .pv-gallery-head-command-exit-collection{\
                    color:#939300 !important;\
                    display:none;\
                    }\
                    .pv-gallery-head-command:hover{\
                    background-color:#272727;\
                    color:#ccc;\
                    }\
                    /*droplist*/\
                    .pv-gallery-head-command-drop-list{\
                    position:absolute;\
                    right:0;\
                    display:none;\
                    box-shadow:0 0 3px #808080;\
                    background-color:#272727;\
                    line-height: 1.6;\
                    text-align:left;\
                    padding:10px;\
                    color:#ccc;\
                    margin-top:-1px;\
                    }\
                    .pv-gallery-head-command-drop-list-item{\
                    display:block;\
                    padding:2px 5px;\
                    cursor:pointer;\
                    white-space:nowrap;\
                    }\
                    .pv-gallery-head-command-drop-list-item-collect-description{\
                    cursor:default;\
                    }\
                    .pv-gallery-head-command-drop-list-item-collect-description > textarea{\
                    resize:both;\
                    width:auto;\
                    height:auto;\
                    }\
                    .pv-gallery-head-command-drop-list-item_disabled{\
                    color:#757575;\
                    }\
                    .pv-gallery-head-command-drop-list-item input + *{\
                    padding-left:3px;\
                    }\
                    .pv-gallery-head-command-drop-list-item input[type=number]{\
                    text-align:left;\
                    max-width:50px;\
                    height:20px;\
                    }\
                    .pv-gallery-head-command-drop-list-item > * {\
                    vertical-align:middle;\
                    }\
                    .pv-gallery-head-command-drop-list-item label {\
                    font-weight: normal;\
                    }\
                    .pv-gallery-head-command-drop-list-item:hover{\
                    background-color:#404040;\
                    }\
                    /*container*/\
                    .pv-gallery-head-command-container{\
                    display:inline-block;\
                    height:100%;\
                    position:relative;\
                    }\
                    /* after伪类生成标识下拉菜单的三角图标*/\
                    .pv-gallery-head-command-container > .pv-gallery-head-command::after{\
                    content:"";\
                    display:inline-block;\
                    vertical-align:middle;\
                    border:none;\
                    border-top:7px solid #757575;\
                    border-left:5px solid transparent;\
                    border-right:5px solid transparent;\
                    margin-left:5px;\
                    -moz-transition:all 0.3s ease-in-out 0s;\
                    -webkit-transition:all 0.3s ease-in-out 0s;\
                    transition:all 0.3s ease-in-out 0s;\
                    }\
                    .pv-gallery-head-command-container:hover{\
                    box-shadow:0 0 3px #808080;\
                    }\
                    .pv-gallery-head-command-container:hover > .pv-gallery-head-command{\
                    background-color:#272727;\
                    color:#ccc;\
                    }\
                    .pv-gallery-head-command-container:hover > .pv-gallery-head-command::after{\
                    -webkit-transform:rotate(180deg);\
                    -moz-transform:rotate(180deg);\
                    transform:rotate(180deg);\
                    border-top:7px solid #ccc;\
                    }\
                    .pv-gallery-head-command-container:hover .pv-gallery-head-command-collect-icon{\
                    background-position:-20px 0;\
                    }\
                    .pv-gallery-head-command-container:hover .pv-gallery-head-command-slide-show-button{\
                    border-color:#ccc;\
                    }\
                    .pv-gallery-head-command-container:hover .pv-gallery-head-command-slide-show-button-inner{\
                    border-left-color:#ccc;\
                    }\
                    .pv-gallery-head-command-container:hover .pv-gallery-head-command-slide-show-button-inner_stop{\
                    border-color:#ccc;\
                    }\
                    .pv-gallery-head-command-container:hover > .pv-gallery-head-command-drop-list{\
                    display:block;\
                    }\
                    /*顶栏里面的按钮样式-结束*/\
                    .pv-gallery-body {\
                    display: block;\
                    height: 100%;\
                    width: 100%;\
                    margin: 0;\
                    padding: 0;\
                    border: none;\
                    border-top: 30px solid transparent;\
                    position: relative;\
                    background-clip: padding-box;\
                    z-index:0;\
                    }\
                    .pv-gallery-img-container {\
                    display: block;\
                    padding: 0;\
                    margin: 0;\
                    border: none;\
                    height: 100%;\
                    width: 100%;\
                    background-clip: padding-box;\
                    background-color: rgba(20,20,20,0.96);\
                    position:relative;\
                    }\
                    .pv-gallery-img-container-top {\
                    border-top: '+ prefs.gallery.sidebarSize +'px solid transparent;\
                    }\
                    .pv-gallery-img-container-right {\
                    border-right: '+ prefs.gallery.sidebarSize +'px solid transparent;\
                    }\
                    .pv-gallery-img-container-bottom {\
                    border-bottom: '+ prefs.gallery.sidebarSize +'px solid transparent;\
                    }\
                    .pv-gallery-img-container-left {\
                    border-left: '+ prefs.gallery.sidebarSize +'px solid transparent;\
                    }\
                    /*大图区域的切换控制按钮*/\
                    .pv-gallery-img-controler{\
                    position:absolute;\
                    top:50%;\
                    height:60px;\
                    width:50px;\
                    margin-top:-30px;\
                    cursor:pointer;\
                    opacity:0.3;\
                    z-index:1;\
                    }\
                    .pv-gallery-img-controler-pre{\
                    background:rgba(70,70,70,0.5) url("'+prefs.icons.arrowLeft+'") no-repeat center;\
                    left:10px;\
                    }\
                    .pv-gallery-img-controler-next{\
                    background:rgba(70,70,70,0.5) url("'+prefs.icons.arrowRight+'") no-repeat center;\
                    right:10px;\
                    }\
                    .pv-gallery-img-controler:hover{\
                    background-color:rgba(140,140,140,0.5);\
                    opacity:0.9;\
                    z-index:2;\
                    }\
                    /*滚动条样式--开始*/\
                    .pv-gallery-scrollbar-h,\
                    .pv-gallery-scrollbar-v{\
                    display:none;\
                    z-index:1;\
                    opacity:0.3;\
                    position:absolute;\
                    margin:0;\
                    padding:0;\
                    border:none;\
                    }\
                    .pv-gallery-scrollbar-h{\
                    bottom:10px;\
                    left:0;\
                    right:0;\
                    height:10px;\
                    margin:0 2px;\
                    }\
                    .pv-gallery-scrollbar-v{\
                    top:0;\
                    bottom:0;\
                    right:10px;\
                    width:10px;\
                    margin:2px 0;\
                    }\
                    .pv-gallery-scrollbar-h:hover{\
                    height:15px;\
                    }\
                    .pv-gallery-scrollbar-v:hover{\
                    width:15px;\
                    }\
                    .pv-gallery-scrollbar-h:hover,\
                    .pv-gallery-scrollbar-v:hover{\
                    opacity:0.9;\
                    z-index:2;\
                    }\
                    .pv-gallery-scrollbar-h-track,\
                    .pv-gallery-scrollbar-v-track{\
                    position:absolute;\
                    top:0;\
                    left:0;\
                    right:0;\
                    bottom:0;\
                    background-color:rgba(100,100,100,1);\
                    border:2px solid transparent;\
                    }\
                    .pv-gallery-scrollbar-h-handle,\
                    .pv-gallery-scrollbar-v-handle{\
                    position:absolute;\
                    background-color:black;\
                    }\
                    .pv-gallery-scrollbar-h-handle{\
                    height:100%;\
                    }\
                    .pv-gallery-scrollbar-v-handle{\
                    width:100%;\
                    }\
                    .pv-gallery-scrollbar-h-handle:hover,\
                    .pv-gallery-scrollbar-v-handle:hover{\
                    background-color:#502121;\
                    }\
                    .pv-gallery-scrollbar-h-handle:active,\
                    .pv-gallery-scrollbar-v-handle:active{\
                    background-color:#391A1A;\
                    }\
                    /*滚动条样式--结束*/\
                    .pv-gallery-img-content{\
                    display:block;\
                    width:100%;\
                    height:100%;\
                    overflow:hidden;\
                    text-align:center;\
                    padding:0;\
                    border:none;\
                    margin:0;\
                    line-height:0;\
                    font-size:0;\
                    white-space:nowrap;\
                    }\
                    .pv-gallery-img-parent{\
                    display:inline-block;\
                    vertical-align:middle;\
                    line-height:0;\
                    }\
                    .pv-gallery-img_broken{\
                    display:none;\
                    cursor:pointer;\
                    }\
                    .pv-gallery-img{\
                    position:relative;\/*辅助e.layerX,layerY*/\
                    display:inline-block;\
                    vertical-align:middle;\
                    width:auto;\
                    height:auto;\
                    padding:0;\
                    border:5px solid #313131;\
                    margin:10px;\
                    opacity:0.6;\
                    -webkit-transform:scale(0.9);\
                    -moz-transform:scale(0.9);\
                    transform:scale(0.9);\
                    '+
                        (prefs.gallery.transition ? ('\
                    -webkit-transition: opacity 0.15s ease-in-out,\
                    -webkit-transform 0.1s ease-in-out;\
                    -moz-transition: opacity 0.15s ease-in-out,\
                    -moz-transform 0.1s ease-in-out;\
                    transition: opacity 0.15s ease-in-out,\
                    transform 0.1s ease-in-out;\
                    ') : '') + '\
                    }\
                    .pv-gallery-img_zoom-out{\
                    cursor:'+support.cssCursorValue.zoomOut+';\
                    }\
                    .pv-gallery-img_zoom-in{\
                    cursor:'+support.cssCursorValue.zoomIn+';\
                    }\
                    .pv-gallery-sidebar-toggle{\
                    position:absolute;\
                    line-height:0;\
                    text-align:center;\
                    background-color:rgb(0,0,0);\
                    color:#757575;\
                    white-space:nowrap;\
                    cursor:pointer;\
                    z-index:1;\
                    display:none;\
                    }\
                    .pv-gallery-sidebar-toggle:hover{\
                    color:#ccc;\
                    }\
                    .pv-gallery-sidebar-toggle-h{\
                    width:80px;\
                    margin-left:-40px;\
                    left:50%;\
                    }\
                    .pv-gallery-sidebar-toggle-v{\
                    height:80px;\
                    margin-top:-40px;\
                    top:50%;\
                    }\
                    .pv-gallery-sidebar-toggle-top{\
                    top:-5px;\
                    }\
                    .pv-gallery-sidebar-toggle-right{\
                    right:-5px;\
                    }\
                    .pv-gallery-sidebar-toggle-bottom{\
                    bottom:-5px;\
                    }\
                    .pv-gallery-sidebar-toggle-left{\
                    left:-5px;\
                    }\
                    .pv-gallery-sidebar-toggle-content{\
                    display:inline-block;\
                    vertical-align:middle;\
                    white-space:normal;\
                    word-wrap:break-word;\
                    overflow-wrap:break-word;\
                    line-height:1.1;\
                    font-size:12px;\
                    text-align:center;\
                    margin:2px;\
                    }\
                    .pv-gallery-sidebar-toggle-content-v{\
                    width:1.1em;\
                    }\
                    /*侧边栏开始*/\
                    .pv-gallery-sidebar-container {\
                    position: absolute;\
                    background-color:rgb(0,0,0);\
                    padding:5px;\
                    border:none;\
                    margin:none;\
                    text-align:center;\
                    line-height:0;\
                    white-space:nowrap;\
                    -o-user-select: none;\
                    -webkit-user-select: none;\
                    -moz-user-select: -moz-none;\
                    user-select: none;\
                    }\
                    .pv-gallery-sidebar-container-h {\
                    height: '+ prefs.gallery.sidebarSize +'px;\
                    width: 100%;\
                    }\
                    .pv-gallery-sidebar-container-v {\
                    width: '+ prefs.gallery.sidebarSize +'px;\
                    height: 100%;\
                    }\
                    .pv-gallery-sidebar-container-top {\
                    top: 0;\
                    left: 0;\
                    border-bottom:1px solid #333333;\
                    }\
                    .pv-gallery-sidebar-container-right {\
                    top: 0;\
                    right: 0;\
                    border-left:1px solid #333333;\
                    }\
                    .pv-gallery-sidebar-container-bottom {\
                    bottom: 0;\
                    left: 0;\
                    border-top:1px solid #333333;\
                    }\
                    .pv-gallery-sidebar-container-left {\
                    top: 0;\
                    left: 0;\
                    border-right:1px solid #333333;\
                    }\
                    .pv-gallery-sidebar-content {\
                    display: inline-block;\
                    margin: 0;\
                    padding: 0;\
                    border: none;\
                    background-clip: padding-box;\
                    vertical-align:middle;\
                    position:relative;\
                    text-align:left;\
                    }\
                    .pv-gallery-sidebar-content-h {\
                    height: 100%;\
                    width: 90%;\
                    border-left: 40px solid transparent;\
                    border-right: 40px solid transparent;\
                    }\
                    .pv-gallery-sidebar-content-v {\
                    height: 90%;\
                    width: 100%;\
                    border-top: 40px solid transparent;\
                    border-bottom: 40px solid transparent;\
                    }\
                    .pv-gallery-sidebar-controler{\
                    cursor:pointer;\
                    position:absolute;\
                    background:rgba(255,255,255,0.1) no-repeat center;\
                    }\
                    .pv-gallery-sidebar-controler:hover{\
                    background-color:rgba(255,255,255,0.3);\
                    }\
                    .pv-gallery-sidebar-controler-pre-h,\
                    .pv-gallery-sidebar-controler-next-h{\
                    top:0;\
                    width:36px;\
                    height:100%;\
                    }\
                    .pv-gallery-sidebar-controler-pre-v,\
                    .pv-gallery-sidebar-controler-next-v{\
                    left:0;\
                    width:100%;\
                    height:36px;\
                    }\
                    .pv-gallery-sidebar-controler-pre-h {\
                    left: -40px;\
                    background-image: url("'+prefs.icons.arrowLeft+'");\
                    }\
                    .pv-gallery-sidebar-controler-next-h {\
                    right: -40px;\
                    background-image: url("'+prefs.icons.arrowRight+'");\
                    }\
                    .pv-gallery-sidebar-controler-pre-v {\
                    top: -40px;\
                    background-image: url("'+prefs.icons.arrowTop+'");\
                    }\
                    .pv-gallery-sidebar-controler-next-v {\
                    bottom: -40px;\
                    background-image: url("'+prefs.icons.arrowBottom+'");\
                    }\
                    .pv-gallery-sidebar-thumbnails-container {\
                    display: block;\
                    overflow: hidden;\
                    height: 100%;\
                    width: 100%;\
                    margin:0;\
                    border:none;\
                    padding:0;\
                    line-height:0;\
                    position:relative;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container span{\
                    vertical-align:middle;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-h{\
                    border-left:1px solid #464646;\
                    border-right:1px solid #464646;\
                    white-space:nowrap;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-v{\
                    border-top:1px solid #464646;\
                    border-bottom:1px solid #464646;\
                    white-space:normal;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-top {\
                    padding-bottom:5px;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-right {\
                    padding-left:5px;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-bottom {\
                    padding-top:5px;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-left {\
                    padding-right:5px;\
                    }\
                    .pv-gallery-sidebar-thumb-container {\
                    display:inline-block;\
                    text-align: center;\
                    border:2px solid rgb(52,52,52);\
                    cursor:pointer;\
                    position:relative;\
                    padding:2px;\
                    font-size:0;\
                    line-height:0;\
                    white-space:nowrap;\
                    vertical-align: middle;\
                    top:0;\
                    left:0;\
                    -webkit-transition:all 0.2s ease-in-out;\
                    transition:all 0.2s ease-in-out;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-h  .pv-gallery-sidebar-thumb-container {\
                    margin:0 2px;\
                    height:100%;\
                    }\
                    .pv-gallery-sidebar-thumbnails-container-v  .pv-gallery-sidebar-thumb-container {\
                    margin:2px 0;\
                    width:100%;\
                    }\
                    .pv-gallery-sidebar-thumbnails_hide-span > .pv-gallery-sidebar-thumb-container {\
                    display:none;\
                    }\
                    .pv-gallery-sidebar-thumb-container:hover {\
                    border:2px solid rgb(57,149,211);\
                    }\
                    .pv-gallery-sidebar-thumb_selected {\
                    border:2px solid rgb(229,59,62);\
                    }\
                    .pv-gallery-sidebar-thumb_selected-top {\
                    top:5px;\
                    }\
                    .pv-gallery-sidebar-thumb_selected-right {\
                    left:-5px;\
                    }\
                    .pv-gallery-sidebar-thumb_selected-bottom {\
                    top:-5px;\
                    }\
                    .pv-gallery-sidebar-thumb_selected-left {\
                    left:5px;\
                    }\
                    .pv-gallery-sidebar-thumb-loading{\
                    position:absolute;\
                    top:0;\
                    left:0;\
                    text-align:center;\
                    width:100%;\
                    height:100%;\
                    display:none;\
                    opacity:0.6;\
                    background:black url("'+ prefs.icons.loading + '") no-repeat center ;\
                    }\
                    .pv-gallery-sidebar-thumb-loading:hover{\
                    opacity:0.8;\
                    }\
                    .pv-gallery-sidebar-thumb {\
                    display: inline-block;\
                    vertical-align: middle;\
                    max-width: 100% !important;\
                    max-height: 100% !important;\
                    height: auto !important;\
                    width: auto !important;\
                    }\
                    .pv-gallery-vertical-align-helper{\
                    display:inline-block;\
                    vertical-align:middle;\
                    width:0;\
                    height:100%;\
                    margin:0;\
                    border:0;\
                    padding:0;\
                    visibility:hidden;\
                    white-space:nowrap;\
                    background-color:red;\
                    }\
                    ';
                var head=document.head;
                head.appendChild(style);
                this.globalSSheet=style.sheet;

                var style2=document.createElement('style');
                this.thumbVisibleStyle=style2;
                style2.type='text/css';
                head.appendChild(style2);

                // 让 description 的文字内容溢出用点点点(...)省略号表示
                // .pv-gallery-head-left-img-info-description {
                //      overflow: hidden;
                //     text-overflow: ellipsis;
                //     white-space: nowrap;
                //     width: 27em;
                // }
            },

        };


        GalleryC.prototype.Preload.prototype={//预读对象
            init:function(){
                if(!this.container){//预读的图片都仍里面
                    var div=document.createElement('div');
                    div.className='pv-gallery-preloaded-img-container';
                    div.style.display='none';
                    document.body.appendChild(div);
                    GalleryC.prototype.Preload.prototype.container=div;
                };
                this.max=prefs.gallery.max;
                this.nextNumber=0;
                this.nextEle=this.ele;
                this.preNumber=0;
                this.preEle=this.ele;
                this.direction='pre';
            },
            preload:function(){
                var ele=this.getPreloadEle();
                if(!ele){
                    //console.log('预读正常结束');
                    return;
                };

                //console.log('正在预读：',ele);
                var self=this;
                this.imgReady=imgReady(dataset(ele,'src'),{
                    loadEnd:function(){
                        if(self.aborted){
                            //console.log('强制终止了');
                            return;
                        };
                        dataset(ele,'preloaded','true')
                        self.container.appendChild(this);
                        self.preload();
                    },
                    time:60 * 1000,//限时一分钟，否则强制结束并开始预读下一张。
                });
            },
            getPreloadEle:function(){
                if((this.max<=this.nextNumber && this.max<=this.preNumber) || (!this.nextEle && !this.preEle)){
                    return;
                };
                var ele=this.direction=='pre'?  this.getNext() : this.getPrevious();
                if(ele && !dataset(ele,'preloaded')){
                    return ele;
                }else{
                    return this.getPreloadEle();
                };
            },
            getNext:function(){
                this.nextNumber++;
                this.direction='next';
                if(!this.nextEle)return;
                return (this.nextEle = this.oriThis.getThumSpan(false,this.nextEle));
            },
            getPrevious:function(){
                this.preNumber++;
                this.direction='pre';
                if(!this.preEle)return;
                return (this.preEle = this.oriThis.getThumSpan(true,this.preEle));
            },
            abort:function(){
                this.aborted=true;
                if(this.imgReady){
                    this.imgReady.abort();
                };
            },
        };


        GalleryC.prototype.Scrollbar.prototype={//滚动条对象
            init:function(){
                var bar=this.scrollbar.bar;
                this.shown=bar.offsetWidth!=0;
                var self=this;
                bar.addEventListener('mousedown',function(e){//点击滚动条区域，该干点什么！
                    e.preventDefault();
                    var target=e.target;
                    var handle=self.scrollbar.handle;
                    var track=self.scrollbar.track;
                    switch(target){
                        case handle:{//手柄；功能，拖动手柄来滚动窗口
                            var pro=self.isHorizontal ? ['left','clientX'] : ['top','clientY'];
                            var oHOffset=parseFloat(handle.style[pro[0]]);
                            var oClient=e[pro[1]];

                            var moveHandler=function(e){
                                self.scroll(oHOffset + e[pro[1]] - oClient,true);
                            };
                            var upHandler=function(){
                                document.removeEventListener('mousemove',moveHandler,true);
                                document.removeEventListener('mouseup',upHandler,true);
                            };
                            document.addEventListener('mousemove',moveHandler,true);
                            document.addEventListener('mouseup',upHandler,true);
                        }break;
                        case track:{//轨道；功能，按住不放来连续滚动一个页面的距离
                            var pro=self.isHorizontal ? ['left','offsetX','layerX','clientWidth','offsetWidth'] : ['top' , 'offsetY' ,'layerY','clientHeight','offsetHeight'];
                            var clickOffset=typeof e[pro[1]]=='undefined' ?  e[pro[2]] : e[pro[1]];
                            var handleOffset=parseFloat(handle.style[pro[0]]);
                            var handleSize=handle[pro[4]];
                            var under= clickOffset > handleOffset ;//点击在滚动手柄的下方
                            var containerSize=self.container[pro[3]];

                            var scroll=function(){
                                self.scrollBy(under?  (containerSize - 10) : (-containerSize + 10));//滚动一个页面距离少一点
                            };
                            scroll();

                            var checkStop=function(){//当手柄到达点击位置时停止
                                var handleOffset=parseFloat(handle.style[pro[0]]);
                                if(clickOffset >= handleOffset && clickOffset <= (handleOffset + handleSize)){
                                    clearTimeout(scrollTimeout);
                                    clearInterval(scrollInterval);
                                };
                            };


                            var scrollInterval;
                            var scrollTimeout=setTimeout(function(){
                                scroll();
                                scrollInterval=setInterval(function(){
                                    scroll();
                                    checkStop();
                                },120);
                                checkStop();
                            },300);


                            checkStop();

                            var upHandler=function(){
                                clearTimeout(scrollTimeout);
                                clearInterval(scrollInterval);
                                document.removeEventListener('mouseup',upHandler,true);
                            };
                            document.addEventListener('mouseup',upHandler,true);
                        }break;
                    };

                },true);
            },
            reset:function(){//判断滚动条该显示还是隐藏

                var pro=this.isHorizontal ? ['scrollWidth','clientWidth','width'] : ['scrollHeight','clientHeight','height'];

                //如果内容大于容器的content区域

                var scrollSize=this.container[pro[0]];
                var clientSize=this.container[pro[1]];
                var scrollMax=scrollSize - clientSize;
                this.scrollMax=scrollMax;
                if(scrollMax>0){
                    this.show();
                    var trackSize=this.scrollbar.track[pro[1]];
                    this.trackSize=trackSize;
                    var handleSize=Math.floor((clientSize/scrollSize) * trackSize);
                    handleSize=Math.max(20,handleSize);//限制手柄的最小大小;
                    this.handleSize=handleSize;
                    this.one=(trackSize-handleSize) / scrollMax;//一个像素对应的滚动条长度
                    this.scrollbar.handle.style[pro[2]]= handleSize + 'px';
                    this.scroll(this.getScrolled());
                }else{
                    this.hide();
                };
            },
            show:function(){
                if(this.shown)return;
                this.shown=true;
                this.scrollbar.bar.style.display='block';
            },
            hide:function(){
                if(!this.shown)return;
                this.shown=false;
                this.scrollbar.bar.style.display='none';
            },
            scrollBy:function(distance,handleDistance){
                return this.scroll(this.getScrolled() + (handleDistance?  distance / this.one :  distance));
            },
            scrollByPages:function(num){
                this.scroll(this.getScrolled() + (this.container[(this.isHorizontal ? 'clientWidth' : 'clientHeight')] - 10) * num);
            },
            scroll:function(distance,handleDistance,transition){
                if(!this.shown)return;

                //滚动实际滚动条
                var _distance=distance;
                _distance=handleDistance?  distance / this.one :  distance;
                _distance=Math.max(0,_distance);
                _distance=Math.min(_distance,this.scrollMax);


                var pro=this.isHorizontal? ['left','scrollLeft'] : ['top','scrollTop'];


                //滚动虚拟滚动条
                //根据比例转换为滚动条上应该滚动的距离。
                distance=handleDistance? distance : this.one * distance;
                //处理非法值
                distance=Math.max(0,distance);//如果值小于0那么取0
                distance=Math.min(distance,this.trackSize - this.handleSize);//大于极限值，取极限值

                var shs=this.scrollbar.handle.style;
                var container=this.container;
                if(transition){
                    clearInterval(this.transitionInterval);

                    var start=0;
                    var duration=10;

                    var cStart=this.getScrolled();
                    var cChange=_distance-cStart;
                    var sStart=parseFloat(shs[pro[0]]);
                    var sChange=distance-sStart;

                    var transitionInterval=setInterval(function(){
                        var cEnd=Tween.Cubic.easeInOut(start,cStart,cChange,duration);
                        var sEnd=Tween.Cubic.easeInOut(start,sStart,sChange,duration);

                        container[pro[1]]=cEnd;
                        shs[pro[0]]=sEnd + 'px';

                        start++;
                        if(start>=duration){
                            clearInterval(transitionInterval);
                        };
                    },35);

                    this.transitionInterval=transitionInterval;

                    return;
                };

                var noScroll=shs[pro[0]]==distance + 'px';
                shs[pro[0]]=distance + 'px';
                container[pro[1]]=_distance;
                return noScroll;
            },
            getScrolled:function(){
                return  this.container[(this.isHorizontal ? 'scrollLeft' : 'scrollTop')];
            },
        };


        //放大镜
        function MagnifierC(img,data){
            this.img=img;
            this.data=data;
            this.init();
        };

        MagnifierC.all=[];
        MagnifierC.styleZIndex=900000000;//全局z-index;
        MagnifierC.zoomRange=prefs.magnifier.wheelZoom.range.slice(0).sort();//升序
        MagnifierC.zoomRangeR=MagnifierC.zoomRange.slice(0).reverse();//降序

        MagnifierC.prototype={
            init:function(){
                this.addStyle();
                MagnifierC.all.push(this);
                var container=document.createElement('span');

                container.className='pv-magnifier-container';
                document.body.appendChild(container);

                this.magnifier=container;

                var imgNaturalSize={
                    h:this.img.naturalHeight,
                    w:this.img.naturalWidth,
                };

                this.imgNaturalSize=imgNaturalSize;

                var cs=container.style;
                cs.zIndex=MagnifierC.styleZIndex++;



                var maxDia=Math.ceil(Math.sqrt(Math.pow(1/2*imgNaturalSize.w,2) + Math.pow(1/2*imgNaturalSize.h,2)) * 2);
                this.maxDia=maxDia;

                var radius=prefs.magnifier.radius;
                radius=Math.min(maxDia/2,radius);
                this.radius=radius;
                var diameter=radius * 2;
                this.diameter=diameter;

                cs.width=diameter + 'px';
                cs.height=diameter + 'px';
                cs.borderRadius=radius+1 + 'px';
                cs.backgroundImage='url("'+ this.img.src +'")';
                cs.marginLeft= -radius +'px';
                cs.marginTop= -radius +'px';

                var imgPos=getContentClientRect(this.data.img);
                var wScrolled=getScrolled();
                var imgRange={//图片所在范围
                    x:[imgPos.left + wScrolled.x , imgPos.right + wScrolled.x],
                    y:[imgPos.top + wScrolled.y, imgPos.bottom + wScrolled.y],
                };
                var imgW=imgRange.x[1] - imgRange.x[0];
                var imgH=imgRange.y[1] - imgRange.y[0];
                //如果图片太小的话，进行范围扩大。
                var minSize=60;
                if(imgW < minSize){
                    imgRange.x[1] +=(minSize - imgW)/2;
                    imgRange.x[0] -=(minSize - imgW)/2;
                    imgW=minSize;
                };
                if(imgH < minSize){
                    imgRange.y[1] +=(minSize - imgH)/2;
                    imgRange.y[0] -=(minSize - imgH)/2;
                    imgH=minSize;
                };
                this.imgSize={
                    w:imgW,
                    h:imgH,
                };
                this.imgRange=imgRange;
                //console.log(this.imgRange,this.imgSize);

                this.setMouseRange();


                this.move({
                    pageX:imgRange.x[0],
                    pageY:imgRange.y[0],
                });

                this._focus=this.focus.bind(this);
                this._blur=this.blur.bind(this);
                this._move=this.move.bind(this);
                this._remove=this.remove.bind(this);
                this._pause=this.pause.bind(this);
                this._zoom=this.zoom.bind(this);

                if(prefs.magnifier.wheelZoom.enabled){
                    this.zoomLevel=1;
                    this.defaultDia=diameter;
                    addWheelEvent(container,this._zoom,false);
                };

                container.addEventListener('mouseover',this._focus,false);
                container.addEventListener('mouseout',this._blur,false);
                container.addEventListener('dblclick',this._remove,false);
                container.addEventListener('click',this._pause,false);


                document.addEventListener('mousemove',this._move,true);
            },
            addStyle:function(){
                if(MagnifierC.style)return;
                var style=document.createElement('style');
                style.type='text/css';
                MagnifierC.style=style;
                style.textContent='\
                    .pv-magnifier-container{\
                    position:absolute;\
                    padding:0;\
                    margin:0;\
                    background-origin:border-box;\
                    -moz-box-sizing:border-box;\
                    box-sizing:border-box;\
                    border:3px solid #CCCCCC;\
                    background:rgba(40, 40, 40, 0.9) no-repeat;\
                    }\
                    .pv-magnifier-container_focus{\
                    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);\
                    }\
                    .pv-magnifier-container_pause{\
                    border-color:red;\
                    }\
                    ';
                document.head.appendChild(style);
            },
            focus:function(){
                this.magnifier.classList.add('pv-magnifier-container_focus');
                this.magnifier.style.zIndex=MagnifierC.styleZIndex++;
            },
            blur:function(){
                this.magnifier.classList.remove('pv-magnifier-container_focus');
            },
            move:function(e){
                var mouseCoor={
                    x:e.pageX,
                    y:e.pageY,
                };
                var mouseRange=this.mouseRange;
                var imgRange=this.imgRange;

                if( !(mouseCoor.x >= mouseRange.x[0] && mouseCoor.x <= mouseRange.x[1] && mouseCoor.y >= mouseRange.y[0] && mouseCoor.y <= mouseRange.y[1]))return;//如果不再鼠标范围
                if(mouseCoor.x > imgRange.x[1]){
                    mouseCoor.x = imgRange.x[1];
                }else if(mouseCoor.x < imgRange.x[0]){
                    mouseCoor.x = imgRange.x[0];
                };
                if(mouseCoor.y > imgRange.y[1]){
                    mouseCoor.y = imgRange.y[1];
                }else if(mouseCoor.y < imgRange.y[0]){
                    mouseCoor.y = imgRange.y[0];
                };

                var ms=this.magnifier.style;
                ms.top= mouseCoor.y + 'px';
                ms.left= mouseCoor.x + 'px';

                var radius=this.radius;
                var imgSize=this.imgSize;
                var imgNaturalSize=this.imgNaturalSize;
                var px=-((mouseCoor.x-imgRange.x[0])/imgSize.w * imgNaturalSize.w) + radius +'px';
                var py=-((mouseCoor.y-imgRange.y[0])/imgSize.h * imgNaturalSize.h) + radius +'px';
                //console.log(px,py);
                ms.backgroundPosition=px + ' ' + py;
            },
            getNextZoomLevel:function(){
                var level;
                var self=this;
                if(this.zoomOut){//缩小
                    MagnifierC.zoomRangeR._find(function(value){
                        if(value < self.zoomLevel){
                            level=value;
                            return true;
                        }
                    })
                }else{
                    MagnifierC.zoomRange._find(function(value){
                        if(value > self.zoomLevel){
                            level=value;
                            return true;
                        };
                    });
                }
                return level;
            },
            zoom:function(e){
                if(e.deltaY===0)return;//非Y轴的滚动
                if(prefs.magnifier.wheelZoom.pauseFirst && !this.paused)return;
                e.preventDefault();
                if(e.deltaY < 0){//向上滚，放大；
                    if(this.diameter >= this.maxDia)return;
                    this.zoomOut=false;
                }else{
                    this.zoomOut=true;
                };
                var level=this.getNextZoomLevel();
                if(!level)return;

                this.zoomLevel=level;
                var diameter=this.defaultDia * level;
                if(diameter > this.maxDia){
                    diameter = this.maxDia;
                };

                var radius=diameter/2
                this.diameter=diameter;
                var bRadius=this.radius;
                this.radius=radius;
                this.setMouseRange();
                var ms=this.magnifier.style;
                ms.width=diameter+'px';
                ms.height=diameter+'px';
                ms.borderRadius=radius+1 + 'px';
                ms.marginLeft=-radius+'px';
                ms.marginTop=-radius+'px';
                var bBP=ms.backgroundPosition.split(' ');
                ms.backgroundPosition=parseFloat(bBP[0]) + (radius - bRadius) + 'px' + ' ' + (parseFloat(bBP[1]) + ( radius - bRadius) + 'px');

            },
            pause:function(){
                if(this.paused){
                    this.magnifier.classList.remove('pv-magnifier-container_pause');
                    document.addEventListener('mousemove',this._move,true);
                }else{
                    this.magnifier.classList.add('pv-magnifier-container_pause');
                    document.removeEventListener('mousemove',this._move,true);
                };
                this.paused=!this.paused;
            },
            setMouseRange:function(){
                var imgRange=this.imgRange;
                var radius=this.radius;
                this.mouseRange={//鼠标活动范围
                    x:[imgRange.x[0]-radius , imgRange.x[1] + radius],
                    y:[imgRange.y[0]-radius , imgRange.y[1] + radius],
                };
            },
            remove:function(){
                this.magnifier.parentNode.removeChild(this.magnifier);
                document.removeEventListener('mousemove',this._move,true);
                MagnifierC.all.splice(MagnifierC.all.indexOf(this),1);
            },
        };

        //图片窗口
        function ImgWindowC(img, data){
            this.img=img;
            this.src=img.src;
            this.data = data;

            this.init();
        };

        ImgWindowC.all=[];//所有的窗口对象
        ImgWindowC.styleZIndex=2147483647;//全局z-index;
        ImgWindowC.zoomRange=prefs.imgWindow.zoom.range.slice(0).sort();//升序
        ImgWindowC.zoomRangeR=ImgWindowC.zoomRange.slice(0).reverse();//降序
        ImgWindowC.overlayer=null;


        ImgWindowC.prototype={
            init:function(){
                var self=this;
                //图片是否已经被打开
                if(ImgWindowC.all._find(function(iwin){
                    if(iwin.src==self.src){
                        iwin.firstOpen();
                        return true;
                    };
                }))return;

                this.addStyle();

                var img=this.img;
                img.className='pv-pic-window-pic pv-pic-ignored';
                img.style.cssText='\
                 top:0px;\
                 left:0px;\
                 ';

                var imgNaturalSize={
                    h:img.naturalHeight,
                    w:img.naturalWidth,
                };
                this.imgNaturalSize=imgNaturalSize;

                var container=document.createElement('span');
                container.style.cssText='\
                 cursor:pointer;\
                 top:0px;\
                 left:0px;\
                 ';
                container.className='pv-pic-window-container';
                container.innerHTML=
                    '<span class="pv-pic-window-rotate-indicator">'+
                    '<span class="pv-pic-window-rotate-indicator-pointer"></span>'+
                    '</span>'+
                    '<span class="pv-pic-window-rotate-overlayer"></span>'+
                    '<span class="pv-pic-window-toolbar" unselectable="on">'+
                    '<span class="pv-pic-window-tb-hand pv-pic-window-tb-tool" title="'+i18n("hand")+'"></span>'+
                    '<span class="pv-pic-window-tb-tool-badge-container pv-pic-window-tb-tool-extend-menu-container">'+
                    '<span class="pv-pic-window-tb-rotate pv-pic-window-tb-tool" title="'+i18n("rotate")+'"></span>'+
                    '<span class="pv-pic-window-tb-tool-badge">0</span>'+
                    '<span class="pv-pic-window-tb-tool-extend-menu pv-pic-window-tb-tool-extend-menu-rotate">'+
                    '<span class="pv-pic-window-tb-tool-extend-menu-item">0</span>'+
                    '<span class="pv-pic-window-tb-tool-extend-menu-item">+90</span>'+
                    '<span class="pv-pic-window-tb-tool-extend-menu-item">-90</span>'+
                    '</span>'+
                    '</span>'+
                    '<span class="pv-pic-window-tb-tool-badge-container pv-pic-window-tb-tool-extend-menu-container">'+
                    '<span class="pv-pic-window-tb-zoom pv-pic-window-tb-tool" title="'+i18n("scale")+'"></span>'+
                    '<span class="pv-pic-window-tb-tool-badge">0</span>'+
                    '<span class="pv-pic-window-tb-tool-extend-menu pv-pic-window-tb-tool-extend-menu-zoom">'+
                    '<span class="pv-pic-window-tb-tool-extend-menu-item">1</span>'+
                    '<span class="pv-pic-window-tb-tool-extend-menu-item">+0.1</span>'+
                    '<span class="pv-pic-window-tb-tool-extend-menu-item">-0.1</span>'+
                    '</span>'+
                    '</span>'+
                    '<span class="pv-pic-window-tb-flip-horizontal pv-pic-window-tb-command" title="'+i18n("horizontalFlip")+'"></span>'+
                    '<span class="pv-pic-window-tb-flip-vertical pv-pic-window-tb-command" title="'+i18n("verticalFlip")+'"></span>'+
                    '</span>'+
                    '<span class="pv-pic-window-close"></span>' +
                    //'<span class="pv-pic-window-search" title="'+i18n("similarImage")+'"></span>' +
                    '<span class="pv-pic-window-range"></span>' +
                    '<span class="pv-pic-window-description"></span>'+
                    '<span class="pv-pic-search-state"></span>';

                container.insertBefore(img,container.firstChild);

                this.imgWindow=container;

                var toolMap={
                    'hand':container.querySelector('.pv-pic-window-tb-hand'),
                    'rotate':container.querySelector('.pv-pic-window-tb-rotate'),
                    'zoom':container.querySelector('.pv-pic-window-tb-zoom'),
                    'fh':container.querySelector('.pv-pic-window-tb-flip-horizontal'),
                    'fv':container.querySelector('.pv-pic-window-tb-flip-vertical'),
                };
                this.toolMap=toolMap;


                //关闭
                var closeButton=container.querySelector('.pv-pic-window-close');
                closeButton.style.cssText='top: -24px;right: 0px;';
                this.closeButton=closeButton;
                closeButton.addEventListener('click',function(e){
                    self.remove();
                },false);

                //var searchButton=container.querySelector('.pv-pic-window-search');
                //searchButton.style.cssText='top: -24px;right: 50px;';
                //this.searchButton=searchButton;
                var srcs, from;
                img.onerror=function(e){
                    setSearchState(i18n("loadNextSimilar"),img.parentNode);
                    console.info(img.src+i18n("loadError"));
                    var src=self.srcs.shift();
                    if(src)img.src=src;
                    else{
                        if(from<searchSort.length){
                            from++;
                            searchImgByImg(self.img.src, self.img.parentNode, function(srcs, index){
                                from=index;
                                self.srcs=srcs;
                                self.img.src=srcs.shift();
                            },null,null,from);
                        }else{
                            setSearchState(i18n("findNoPic"),img.parentNode);
                            setTimeout(function(){
                                setSearchState("",img.parentNode);
                            },2000);
                        }
                    }
                };
                img.onload=function(e){
                    setSearchState("",img.parentNode);
                    self.imgNaturalSize={
                        h:img.naturalHeight,
                        w:img.naturalWidth,
                    };
                    self.zoom(1);
                    self.fitToScreen();
                }
                /*searchButton.addEventListener('click',function(e){
                    sortSearch();
                    searchImgByImg(self.img.src, self.img.parentNode, function(srcs, index){
                        from=index;
                        self.srcs=srcs;
                        self.img.src=srcs.shift();
                    });
                },false);*/

                /**
         * 说明
         * 1、对原来的适应屏幕等功能会有影响，暂时禁用。
         * 2、分为 absolute 和默认的2种情况
         */
                if (this.data) {
                    var descriptionSpan = container.querySelector('.pv-pic-window-description');
                    // descriptionSpan.style.cssText = '\
                    //  bottom: -40px;\
                    //  left: 10px;\
                    // ';
                    descriptionSpan.textContent = this.data.description || '';
                    // descriptionSpan.style.display = this.data.description ? 'block' : 'none';
                    descriptionSpan.style.display = 'none';
                    this.descriptionSpan = descriptionSpan;
                }

                var toolbar=container.querySelector('.pv-pic-window-toolbar');
                toolbar.style.cssText='\
top: 0px;\
left: -45px;\
';
                this.toolbar=toolbar;

                this.selectedToolClass='pv-pic-window-tb-tool-selected';

                this.viewRange=container.querySelector('.pv-pic-window-range');

                this.rotateIndicator=container.querySelector('.pv-pic-window-rotate-indicator');
                this.rotateIPointer=container.querySelector('.pv-pic-window-rotate-indicator-pointer');
                this.rotateOverlayer=container.querySelector('.pv-pic-window-rotate-overlayer');


                this.hKeyUp=true;
                this.rKeyUp=true;
                this.zKeyUp=true;

                this.spaceKeyUp=true;
                this.ctrlKeyUp=true;
                this.altKeyUp=true;
                this.shiftKeyUp=true;

                //缩放工具的扩展菜单
                container.querySelector('.pv-pic-window-tb-tool-extend-menu-zoom').addEventListener('click',function(e){
                    var target=e.target;
                    var text=target.textContent;
                    var value;
                    switch(text){
                        case '1':{
                            value=1;
                        }break;
                        case '+0.1':{
                            value=self.zoomLevel + 0.1;
                        }break;
                        case '-0.1':{
                            value=self.zoomLevel - 0.1;
                        }break;
                    };
                    if(typeof value!='undefined'){
                        self.zoom(value,{x:0,y:0});
                    };
                },true);

                //旋转工具的扩展菜单
                container.querySelector('.pv-pic-window-tb-tool-extend-menu-rotate').addEventListener('click',function(e){
                    var target=e.target;
                    var text=target.textContent;
                    var value;
                    function convert(deg){
                        return deg * Math.PI/180;
                    };

                    switch(text){
                        case '0':{
                            value=0;
                        }break;
                        case '+90':{
                            value=self.rotatedRadians + convert(90);
                        }break;
                        case '-90':{
                            value=self.rotatedRadians - convert(90);
                        }break;
                    };

                    var PI=Math.PI;
                    if(typeof value!='undefined'){
                        if(value>=2*PI){
                            value-=2*PI;
                        }else if(value<0){
                            value+=2*PI;
                        };
                        self.rotate(value,true);
                    };
                },true);

                toolbar.addEventListener('mousedown',function(e){//鼠标按下选择工具
                    self.toolbarEventHandler(e);
                },false);


                toolbar.addEventListener('dblclick',function(e){//鼠标双击工具
                    self.toolbarEventHandler(e);
                },false);


                //阻止浏览器对图片的默认控制行为
                img.addEventListener('mousedown',function(e){
                    e.preventDefault();
                },false);


                container.addEventListener('mousedown',function(e){//当按下的时，执行平移，缩放，旋转操作
                    self.imgWindowEventHandler(e);
                },false);

                container.addEventListener('click',function(e){//阻止opera ctrl+点击保存图片
                    self.imgWindowEventHandler(e);
                },false);

                if(prefs.imgWindow.zoom.mouseWheelZoom){//是否使用鼠标缩放
                    addWheelEvent(container,function(e){//滚轮缩放
                        self.imgWindowEventHandler(e);
                    },false);
                };


                if(prefs.imgWindow.overlayer.shown){//是否显示覆盖层
                    var overlayer=ImgWindowC.overlayer;
                    if(!overlayer){
                        var overlayer=document.createElement('span');
                        ImgWindowC.overlayer=overlayer;
                        overlayer.className='pv-pic-window-overlayer';
                        document.body.appendChild(overlayer);
                        overlayer.style.backgroundColor=prefs.imgWindow.overlayer.color;
                    };
                    overlayer.style.display='block';
                };

                //是否点击图片外部关闭
                if(prefs.imgWindow.overlayer.shown && prefs.imgWindow.close.clickOutside){
                    var clickOutside=function(e){
                        var target=e.target;
                        if(!container.contains(target)){
                            self.remove();
                        };
                    };
                    this.clickOutside=clickOutside;
                    document.addEventListener(prefs.imgWindow.close.clickOutside,clickOutside,true);
                };

                //是否双击图片本身关闭
                if(prefs.imgWindow.close.dblClickImgWindow){
                    var dblClickImgWindow=function(e){
                        var target=e.target;
                        if(target==container || target==img || target==self.rotateOverlayer){
                            self.remove();
                        };
                    };
                    container.addEventListener('dblclick',dblClickImgWindow,true);
                };


                document.body.appendChild(container);
                ImgWindowC.all.push(this);

                this._blur=this.blur.bind(this);
                this._focusedKeydown=this.focusedKeydown.bind(this);
                this._focusedKeyup=this.focusedKeyup.bind(this);

                this.rotatedRadians=0;//已经旋转的角度
                this.zoomLevel=1;//缩放级别
                this.setToolBadge('zoom',1);

                //选中默认工具
                this.selectTool(prefs.imgWindow.defaultTool);

                this.firstOpen();
            },


            addStyle:function(){
                if(ImgWindowC.style)return;
                var style=document.createElement('style');
                ImgWindowC.style=style;
                style.textContent='\
                    .pv-pic-window-container {\
                    position: absolute;\
                    background-color: rgba(40,40,40,0.9);\
                    padding: 8px;\
                    border: 5px solid #ccc;\
                    line-height: 0;\
                    text-align: left;\
                    box-sizing: content-box;\
                    }\
                    .pv-pic-window-container_focus {\
                    box-shadow: 0 0 10px rgba(0,0,0,0.6);\
                    box-sizing: content-box;\
                    }\
                    .pv-pic-window-close,\
                    .pv-pic-window-search,\
                    .pv-pic-window-toolbar,\
                    .pv-pic-window-tb-tool-extend-menu{\
                    -webkit-transition: opacity 0.2s ease-in-out;\
                    transition: opacity 0.2s ease-in-out;\
                    }\
                    .pv-pic-window-toolbar {\
                    position: absolute;\
                    background-color: #535353;\
                    padding: 0;\
                    opacity: 0.9;\
                    display: none;\
                    cursor: default;\
                    -o-user-select: none;\
                    -webkit-user-select: none;\
                    -moz-user-select: -moz-none;\
                    user-select: none;\
                    }\
                    .pv-pic-window-toolbar:hover {\
                    opacity: 1;\
                    }\
                    .pv-pic-window-toolbar_focus {\
                    display: block;\
                    }\
                    .pv-pic-window-close {\
                    cursor: pointer;\
                    position: absolute;\
                    right: 0px;\
                    top: -24px;\
                    background: url("'+prefs.icons.close+'") no-repeat center bottom;\
                    height: 17px;\
                    width: 46px;\
                    opacity: 0.9;\
                    border:none;\
                    padding:0;\
                    padding-top:2px;\
                    background-color:#1771FF;\
                    display: none;\
                    }\
                    .pv-pic-window-close:hover {\
                    background-color:red;\
                    opacity: 1;\
                    }\
                    .pv-pic-window-close_focus {\
                    display: block;\
                    }\
                    .pv-pic-window-search {\
                    cursor: pointer;\
                    position: absolute;\
                    right: 50px;\
                    top: -24px;\
                    background: url("'+prefs.icons.searchBtn+'") no-repeat center bottom;\
                    height: 17px;\
                    width: 46px;\
                    opacity: 0.9;\
                    border:none;\
                    padding:0;\
                    padding-top:2px;\
                    background-color:#1771FF;\
                    display: none;\
                    }\
                    .pv-pic-window-search:hover {\
                    background-color:red;\
                    opacity: 1;\
                    }\
                    .pv-pic-window-search_focus {\
                    display: block;\
                    }\
                    .pv-pic-window-description {\
                    margin-top: 20px;\
                    min-height: 20px;\
                    }\
                    .pv-pic-search-state {\
                    top: 10px;\
                    left: 10px;\
                    display: block;\
                    position: absolute;\
                    z-index: 1;\
                    color: #ffff00;\
                    width: 500px;\
                    font-size: large;\
                    text-shadow: 1px 0 0 #000,-1px 0 0 #000,0 1px 0 #000,0 -1px 0 #000;\
                    -webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;\
                    -moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;\
                    }\
                    .pv-pic-window-pic {\
                    position: relative;\
                    display:inline-block;\/*opera把图片设置display:block会出现渲染问题，会有残影，还会引发其他各种问题，吓尿*/\
                    max-width:none;\
                    min-width:none;\
                    max-height:none;\
                    min-height:none;\
                    padding:0;\
                    margin:0;\
                    border:none;\
                    vertical-align:middle;\
                    }\
                    .pv-pic-window-pic_focus {\
                    box-shadow: 0 0 6px black;\
                    }\
                    .pv-pic-window-tb-tool,\
                    .pv-pic-window-tb-command{\
                    box-sizing:content-box;\
                    -moz-box-sizing:content-box;\
                    -webkit-box-sizing:content-box;\
                    height: 24px;\
                    width: 24px;\
                    padding: 12px 8px 6px 6px;\
                    margin:0;\
                    display: block;\
                    background: transparent no-repeat center;\
                    cursor: pointer;\
                    position: relative;\
                    border: none;\
                    border-left: 2px solid transparent;\
                    border-bottom: 1px solid #868686;\
                    background-origin: content-box;\
                    }\
                    .pv-pic-window-toolbar > span:last-child {\
                    border-bottom: none;\
                    }\
                    .pv-pic-window-tb-tool:hover,\
                    .pv-pic-window-tb-command:hover{\
                    border-left: 2px solid red;\
                    }\
                    .pv-pic-window-tb-tool-selected{\
                    box-shadow: inset 0 21px 0 rgba(255,255,255,0.3) ,inset 0 -21px 0 rgba(0,0,0,0.3);\
                    border-left:2px solid #1771FF;\
                    }\
                    .pv-pic-window-tb-hand {\
                    background-image: url("'+prefs.icons.hand+'");\
                    }\
                    .pv-pic-window-tb-rotate {\
                    background-image: url("'+prefs.icons.rotate+'");\
                    }\
                    .pv-pic-window-tb-zoom {\
                    background-image: url("'+prefs.icons.zoom+'");\
                    }\
                    .pv-pic-window-tb-flip-horizontal {\
                    background-image: url("'+prefs.icons.flipHorizontal+'");\
                    }\
                    .pv-pic-window-tb-flip-vertical {\
                    background-image: url("'+prefs.icons.flipVertical+'");\
                    }\
                    .pv-pic-window-tb-tool-badge-container {\
                    display: block;\
                    position: relative;\
                    }\
                    .pv-pic-window-tb-tool-badge {\
                    position: absolute;\
                    top: -3px;\
                    right: 1px;\
                    font-size: 10px;\
                    line-height: 1.5;\
                    padding: 0 3px;\
                    background-color: #F93;\
                    border-radius: 50px;\
                    opacity: 0.5;\
                    color: black;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu{\
                    position:absolute;\
                    top:0;\
                    margin-left:-1px;\
                    background-color:#535353;\
                    display:none;\
                    left:40px;\
                    color:#C3C3C3;\
                    font-size:12px;\
                    text-shadow:0px -1px 0px black;\
                    opacity:0.7;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu:hover{\
                    opacity:0.9;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-item{\
                    display:block;\
                    line-height:1.5;\
                    text-align:center;\
                    padding:10px;\
                    cursor:pointer;\
                    border: none;\
                    border-right: 2px solid transparent;\
                    border-bottom: 1px solid #868686;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-item:last-child{\
                    border-bottom: none;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-item:hover{\
                    border-right:2px solid red;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-item:active{\
                    padding:11px 9px 9px 11px;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-container:hover .pv-pic-window-tb-tool{\
                    border-left:2px solid red;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-container:hover .pv-pic-window-tb-tool-extend-menu{\
                    display:block;\
                    }\
                    .pv-pic-window-tb-tool-extend-menu-container::after{\
                    content:"";\
                    position:absolute;\
                    right:1px;\
                    bottom:2px;\
                    width:0;\
                    height:0;\
                    padding:0;\
                    margin:0;\
                    border:3px solid #C3C3C3;\
                    border-top-color:transparent;\
                    border-left-color:transparent;\
                    opacity:0.5;\
                    }\
                    .pv-pic-window-overlayer{\
                    height:100%;\
                    width:100%;\
                    position:fixed;\
                    z-index:999999999;\
                    top:0;\
                    left:0;\
                    }\
                    .pv-pic-window-rotate-indicator{\
                    display:none;\
                    position:fixed;\
                    width:250px;\
                    height:250px;\
                    padding:10px;\
                    margin-top:-135px;\
                    margin-left:-135px;\
                    background:transparent url("'+ prefs.icons.rotateIndicatorBG +'") no-repeat center;\
                    }\
                    .pv-pic-window-rotate-indicator-pointer{\
                    display:block;\
                    margin-left:auto;\
                    margin-right:auto;\
                    background:transparent url("'+ prefs.icons.rotateIndicatorPointer +'") no-repeat center;\
                    width:60px;\
                    height:240px;\
                    position:relative;\
                    top:5px;\
                    transform:rotate(0.1deg);\
                    }\
                    .pv-pic-window-rotate-overlayer{/*当切换到旋转工具的时候显示这个覆盖层，然后旋转指示器显示在这个覆盖层的下面*/\
                    position:absolute;\
                    top:0;\
                    bottom:0;\
                    left:0;\
                    right:0;\
                    display:none;\
                    background-color:transparent;\
                    }\
                    .pv-pic-window-range{\
                    position:absolute;\
                    border:none;\
                    width:100px;\
                    height:100px;\
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);\
                    display:none;\
                    padding:0;\
                    background-color:rgba(255, 0, 0, 0.150);\
                    }\
                    ';
                document.head.appendChild(style);
            },

            firstOpen:function(){
                ImgWindowC.selectedTool='hand';
                this.focus();
                var imgWindow=this.imgWindow;
                var scrolled=getScrolled();
                imgWindow.style.left=-5 + scrolled.x + 'px';
                imgWindow.style.top=-5 + scrolled.y + 'px';

                if(prefs.imgWindow.fitToScreen){
                    this.fitToScreen();
                    this.center(true,true);
                }else{
                    //window的尺寸
                    var wSize=getWindowSize();
                    //空隙
                    wSize.h -= 16;
                    wSize.w -= 16;

                    var imgWindowCS=unsafeWindow.getComputedStyle(imgWindow);

                    var rectSize={
                        h:parseFloat(imgWindowCS.height),
                        w:parseFloat(imgWindowCS.width),
                    };

                    this.center(rectSize.w <= wSize.w , rectSize.h <= wSize.h);
                };

                this.keepScreenInside();
            },
            keepScreenInside:function(){//保持按钮在屏幕里面.
                var imgWindow=this.imgWindow;
                var imgWindowFullSize={
                    h:imgWindow.offsetHeight,
                    w:imgWindow.offsetWidth,
                };

                var windowSize=getWindowSize();

                function keepSI(obj,offsetDirection,defaultValue, out){
                    var objRect=obj.getBoundingClientRect();
                    var objStyle=obj.style;

                    while(offsetDirection.length){
                        var oD=offsetDirection[0];
                        var oDV=defaultValue[0];
                        offsetDirection.shift();
                        defaultValue.shift();
                        var oValue=parseFloat(objStyle[oD]);
                        var newValue;
                        switch(oD){
                            case 'top':{
                                newValue=oValue - objRect.top;
                                if(objRect.top<0){
                                    newValue=Math.min(newValue,imgWindowFullSize.h);
                                }else{
                                    newValue=Math.max(newValue,oDV);
                                };
                            }break;
                            case 'right':{
                                newValue=oValue + (objRect.right - windowSize.w);
                                if(objRect.right > windowSize.w){//屏幕外
                                    newValue=Math.min(newValue,imgWindowFullSize.w);
                                }else{
                                    newValue=Math.max(newValue,oDV);
                                };
                            }break;
                            case 'bottom':{
                                newValue=oValue + (objRect.bottom - windowSize.h);
                                if(objRect.bottom > windowSize.h){//屏幕外
                                    newValue=Math.min(newValue,imgWindowFullSize.h);
                                }else{
                                    newValue=Math.max(newValue,oDV);
                                };
                            }break;
                            case 'left':{
                                newValue=oValue - objRect.left;
                                if(objRect.left<0){
                                    newValue=Math.min(newValue,imgWindowFullSize.w);
                                }else{
                                    newValue=Math.max(newValue,oDV);
                                }
                            }break;
                        };
                        //console.log(newValue);
                        objStyle[oD]=newValue + 'px';

                    };
                };

                keepSI(this.closeButton,['top','right'],[-24,0]);
                //keepSI(this.searchButton,['top','right'],[-24,50]);
                keepSI(this.toolbar,['top','left'],[0,-45]);

                // 保持注释在图片里面
                // keepSI(this.descriptionSpan,['bottom', 'left'],[-40, 10]);
            },
            fitToScreen:function(){
                if(!prefs.imgWindow.fitToScreen)return;
                var wSize=getWindowSize();
                //空隙
                wSize.h -= 16;
                wSize.w -= 16;

                var imgWindow=this.imgWindow;
                var imgWindowCS=unsafeWindow.getComputedStyle(imgWindow);
                var rectSize={
                    h:parseFloat(imgWindowCS.height),
                    w:parseFloat(imgWindowCS.width),
                };

                var size;
                if(rectSize.w - wSize.w>0 || rectSize.h - wSize.h>0){//超出屏幕，那么缩小。
                    if(rectSize.w/rectSize.h > wSize.w/wSize.h){
                        size={
                            w:wSize.w,
                            h:wSize.w / (rectSize.w/rectSize.h),
                        };
                    }else{
                        size={
                            h:wSize.h,
                            w:wSize.h * (rectSize.w/rectSize.h),
                        }
                    };

                    this.zoom(this.getRotatedImgCliSize(size).w/this.imgNaturalSize.w);
                };
            },
            center:function(horizontal,vertical){
                if(!horizontal && !vertical)return;
                var wSize=getWindowSize();
                var imgWindow=this.imgWindow;
                var scrolled=getScrolled();
                if(horizontal)imgWindow.style.left= (wSize.w - imgWindow.offsetWidth)/2 + scrolled.x +'px';
                if(vertical)imgWindow.style.top= (wSize.h - imgWindow.offsetHeight)/2 + scrolled.y +'px';
            },


            move:function(e){
                this.working=true;
                var cursor=this.cursor;
                this.changeCursor('handing');

                var mouseCoor={
                    x:e.pageX,
                    y:e.pageY,
                };
                var imgWindow=this.imgWindow;
                var imgWStyle=imgWindow.style;
                var oriOffset={
                    left:parseFloat(imgWStyle.left),
                    top:parseFloat(imgWStyle.top),
                };
                var self=this;
                var moveHandler=function(e){
                    imgWStyle.left=oriOffset.left+ e.pageX-mouseCoor.x +'px';
                    imgWStyle.top=oriOffset.top + e.pageY-mouseCoor.y +'px';
                    self.keepScreenInside();
                };
                var mouseupHandler=function(){
                    e.preventDefault();
                    self.changeCursor(cursor);
                    self.working=false;
                    if(self.tempHand && self.spaceKeyUp){//如果是临时切换到抓手工具，平移完成后返回上个工具
                        self.tempHand=false;
                        self.changeCursor(self.selectedTool);
                    };
                    document.removeEventListener('mousemove',moveHandler,true);
                    document.removeEventListener('mouseup',mouseupHandler,true);
                };
                document.addEventListener('mousemove',moveHandler,true);
                document.addEventListener('mouseup',mouseupHandler,true);
            },
            rotate:function(origin,topLeft){

                var img=this.img;
                var imgWindow=this.imgWindow;

                var iTransform=img.style[support.cssTransform].replace(/rotate\([^)]*\)/i,'');

                var imgWindowCS=unsafeWindow.getComputedStyle(imgWindow);
                var imgRectSize={
                    h:parseFloat(imgWindowCS.height),
                    w:parseFloat(imgWindowCS.width),
                };

                var rectOffset={
                    top:parseFloat(imgWindow.style.top),
                    left:parseFloat(imgWindow.style.left),
                };

                var imgSize={
                    h:img.clientHeight,
                    w:img.clientWidth,
                };

                var imgOffset={
                    top:parseFloat(img.style.top),
                    left:parseFloat(img.style.left),
                };

                var self=this;
                var PI=Math.PI;

                var rotate=function (radians){
                    if(self.rotatedRadians==radians)return;
                    img.style[support.cssTransform] = ' rotate('+ radians +'rad) ' + iTransform;//旋转图片
                    self.rotateIPointer.style[support.cssTransform]='rotate('+ radians +'rad)';//旋转指示器

                    self.rotatedRadians=radians;
                    self.setToolBadge('rotate',radians/(PI/180));

                    var afterimgRectSize=self.getRotatedImgRectSize( radians, imgSize );
                    imgWindow.style.width=afterimgRectSize.w +'px';
                    imgWindow.style.height=afterimgRectSize.h + 'px';

                    if(!topLeft){
                        self.setImgWindowOffset(rectOffset,imgRectSize,afterimgRectSize);
                    };

                    self.setImgOffset(imgOffset,imgRectSize,afterimgRectSize);
                    self.keepScreenInside();
                };


                if(typeof origin=='number'){
                    rotate(origin);
                    return;
                };


                this.working=true;

                var lastRotatedRadians=this.rotatedRadians;
                this.shiftKeyUp=true;
                var shiftRotateStep=prefs.imgWindow.shiftRotateStep / (180/Math.PI);//转成弧度

                var moveHandler=function(e){
                    self.rotateIndicator.style.display='block';
                    var radians=lastRotatedRadians + Math.atan2( e.clientY - origin.y, e.clientX - origin.x );
                    if(radians>=2*PI){
                        radians-=2*PI;
                    }else if(radians<0){
                        radians+=2*PI;
                    };

                    if(!self.shiftKeyUp){//如果按下了shift键，那么步进缩放
                        radians -= radians % shiftRotateStep;
                        radians += shiftRotateStep;
                    };
                    rotate(radians);
                };

                var mouseupHandler=function(){
                    self.working=false;
                    self.rotateIndicator.style.display='none';
                    document.removeEventListener('mousemove',moveHandler,true);
                    document.removeEventListener('mouseup',mouseupHandler,true);
                };

                document.addEventListener('mousemove',moveHandler,true);
                document.addEventListener('mouseup',mouseupHandler,true);
            },
            convertToValidRadians:function(radians){
                //转成0-90的等价角度。
                var PI=Math.PI;
                if(radians > PI){
                    radians = 2*PI - radians;
                };
                if(radians > 1/2*PI){
                    radians = PI - radians;
                };
                return radians;
            },
            getRotatedImgRectSize:function( radians, imgSize ){//通过旋转后的角度和图片的大小，求虚拟矩形的大小
                imgSize= imgSize ? imgSize :{
                    h:this.img.clientHeight,
                    w:this.img.clentWidth,
                };

                if(typeof radians==='undefined'){
                    radians = this.rotatedRadians;
                };

                radians=this.convertToValidRadians(radians);

                return {
                    h:this.notExponential(imgSize.h* Math.cos(radians) + imgSize.w * Math.sin(radians)),
                    w:this.notExponential(imgSize.h* Math.sin(radians) + imgSize.w * Math.cos(radians)),
                };
            },
            getRotatedImgCliSize:function(rectSize,radians){//通过虚拟矩形的大小和图片的旋转角度，求图片的大小

                if(typeof radians==='undefined'){
                    radians = this.rotatedRadians;
                };

                radians=this.convertToValidRadians(radians);

                if(radians==0){
                    //radians=Math.PI/180 * 1/100;
                    return rectSize;
                };

                var h=(rectSize.h-rectSize.w * Math.tan(radians))/(Math.cos(radians)-Math.sin(radians)*Math.tan(radians));
                var w=(rectSize.h - h*Math.cos(radians))/Math.sin(radians);
                return {
                    h:h,
                    w:w,
                };

            },
            setImgOffset:function(oriOffset,bImgSize,aImgSize){
                var imgStyle=this.img.style;

                //避免出现指数形式的数字和单位相加，导致变成无效值
                var top=this.notExponential(oriOffset.top + (aImgSize.h-bImgSize.h)*1/2) + 'px';
                var left=this.notExponential(oriOffset.left + (aImgSize.w-bImgSize.w)*1/2)  + 'px';
                imgStyle.top= top;
                imgStyle.left= left;
            },
            setImgWindowOffset:function(oriOffset,bImgWindowSize,aImgWidnowSize,ratio){
                ratio= ratio? ratio : {x:1/2,y:1/2};
                var imgWindowStyle=this.imgWindow.style;
                var top=oriOffset.top - (aImgWidnowSize.h-bImgWindowSize.h)*ratio.y + 'px';
                var left=oriOffset.left - (aImgWidnowSize.w-bImgWindowSize.w)*ratio.x + 'px';
                imgWindowStyle.top= top;
                imgWindowStyle.left= left;
            },
            zoom:function(e,ratio){//e可能是undefined,可能是事件对象，可能是直接的缩放级别数字
                var imgWindow=this.imgWindow;
                var imgWindowCS=unsafeWindow.getComputedStyle(imgWindow);
                var imgRectSize={
                    h:parseFloat(imgWindowCS.height),
                    w:parseFloat(imgWindowCS.width),
                };

                var rectOffset={
                    top:parseFloat(imgWindow.style.top),
                    left:parseFloat(imgWindow.style.left),
                };

                var img=this.img;
                var self=this;

                var zoom=function(level){//缩放到指定级别
                    if(typeof level=='undefined' || level<0 || level==self.zoomLevel)return;

                    var afterImgSize={
                        h:self.imgNaturalSize.h * level,
                        w:self.imgNaturalSize.w * level,
                    };
                    img.width=afterImgSize.w;
                    img.height=afterImgSize.h;

                    var afterimgRectSize=self.getRotatedImgRectSize( self.rotatedRadians, afterImgSize );
                    //console.log(afterimgRectSize);
                    imgWindow.style.width=afterimgRectSize.w +'px';
                    imgWindow.style.height=afterimgRectSize.h + 'px';
                    self.setImgWindowOffset(rectOffset,imgRectSize,afterimgRectSize,ratio);
                    self.setImgOffset({top:0,left:0},afterImgSize,afterimgRectSize);//如果旋转了，调整偏移
                    self.zoomLevel=level;
                    self.setToolBadge('zoom',level);
                    self.keepScreenInside();
                };

                if(typeof e!='object'){
                    ratio=ratio? ratio : {
                        x:1/2,
                        y:1/2,
                    };
                    zoom(e);
                    return;
                };

                this.working=true;

                ratio=this.getZoomRatio({
                    x:e.clientX,
                    y:e.clientY,
                });


                var moved;
                var lastPageX=e.pageX;
                var currentLevel=this.zoomLevel;
                var moveFired=0;
                var moveHandler=function(e){
                    moveFired++
                    if(moveFired < 2){//有时候点击的时候不小心会触发一发move
                        return;
                    };
                    moved=true;
                    var pageX=e.pageX;
                    var level;
                    if(pageX > lastPageX){//向右移，zoomin扩大
                        self.changeCursor('zoom',false);
                        level=0.05;
                    }else{//向左移，zoomout缩小
                        self.changeCursor('zoom',true);
                        level=-0.05;
                    };
                    lastPageX=pageX;
                    currentLevel += level;
                    zoom(currentLevel);
                };

                var mouseupHandler=function(e){
                    self.working=false;
                    document.removeEventListener('mousemove',moveHandler,true);
                    document.removeEventListener('mouseup',mouseupHandler,true);

                    var level=self.getNextZoomLevel();

                    if(self.zoomOut && self.altKeyUp){
                        self.zoomOut=false;
                    };

                    if(!moved){//如果没有平移缩放。
                        zoom(level);
                    };

                    self.changeCursor('zoom',self.zoomOut);

                    if(self.tempZoom && self.ctrlKeyUp && self.altKeyUp){
                        self.tempZoom=false;
                        self.changeCursor(self.selectedTool);
                    };

                };

                document.addEventListener('mousemove',moveHandler,true);
                document.addEventListener('mouseup',mouseupHandler,true);
            },
            getNextZoomLevel:function(){
                var level;
                var self=this;
                if(this.zoomOut){//缩小
                    ImgWindowC.zoomRangeR._find(function(value){
                        if(value < self.zoomLevel){
                            level=value;
                            return true;
                        }
                    })
                }else{
                    ImgWindowC.zoomRange._find(function(value){
                        if(value > self.zoomLevel){
                            level=value;
                            return true;
                        };
                    });
                }
                return level;
            },
            getZoomRatio:function(mouseCoor){
                var ibcRect=this.img.getBoundingClientRect();
                var ratio={
                    x:(mouseCoor.x-ibcRect.left)/ibcRect.width,
                    y:(mouseCoor.y-ibcRect.top)/ibcRect.height,
                };
                if(ratio.x<0){
                    ratio.x=0
                }else if(ratio.x>1){
                    ratio.x=1
                };
                if(ratio.y<0){
                    ratio.y=0
                }else if(ratio.y>1){
                    ratio.y=1
                };
                return ratio;
            },
            aerialView:function(e){
                this.working=true;
                //记住现在的缩放比例
                var cLevel=this.zoomLevel;

                var wSize=getWindowSize();
                wSize.h -= 16;
                wSize.w -= 16;

                var imgWindow=this.imgWindow;
                var imgWindowCS=unsafeWindow.getComputedStyle(imgWindow);
                var rectSize={
                    h:parseFloat(imgWindowCS.height),
                    w:parseFloat(imgWindowCS.width),
                };
                var rectRatio=rectSize.h/rectSize.w;
                var windowRatio=wSize.h/wSize.w;

                var size;
                var rangeSize={};
                if(rectRatio > windowRatio){
                    size={
                        h:wSize.h,
                        w:wSize.h / rectRatio,
                    };
                    rangeSize.h=Math.min(wSize.h *  (size.h / rectSize.h), size.h);
                    rangeSize.w=Math.min(rangeSize.h / windowRatio , size.w);
                }else{
                    size={
                        w:wSize.w,
                        h:wSize.w * rectRatio,
                    };
                    rangeSize.w=Math.min(wSize.w *  (size.w / rectSize.w), size.w);
                    rangeSize.h=Math.min(rangeSize.w * windowRatio , size.h);
                };


                this.zoom(this.getRotatedImgCliSize(size).w/this.imgNaturalSize.w);

                this.center(true,true);

                this.keepScreenInside();

                var viewRange=this.viewRange;
                var vRS=viewRange.style;
                vRS.display='block';
                vRS.height=rangeSize.h + 'px';
                vRS.width=rangeSize.w + 'px';
                vRS.top=0 + 'px';
                vRS.left=0 + 'px';



                var viewRangeRect=viewRange.getBoundingClientRect();
                var scrolled=getScrolled();
                var viewRangeCenterCoor={
                    x:viewRangeRect.left + scrolled.x + 1/2 * rangeSize.w,
                    y:viewRangeRect.top + scrolled.y + 1/2 * rangeSize.h,
                };

                var self=this;

                var moveRange={
                    x:[8,8+size.w-rangeSize.w],
                    y:[8,8+size.h-rangeSize.h]
                };


                function setViewRangePosition(pageXY){
                    var top=pageXY.y - viewRangeCenterCoor.y;
                    var left=pageXY.x - viewRangeCenterCoor.x;
                    if(top<=moveRange.y[0]){
                        top=moveRange.y[0];
                    }else if(top>=moveRange.y[1]){
                        top=moveRange.y[1];
                    };
                    vRS.top= top + 'px';
                    if(left<=moveRange.x[0]){
                        left=moveRange.x[0];
                    }else if(left>=moveRange.x[1]){
                        left=moveRange.x[1];
                    };
                    vRS.left= left + 'px';
                };

                setViewRangePosition({
                    x:e.pageX,
                    y:e.pageY,
                });

                var moveHandler=function(e){
                    setViewRangePosition({
                        x:e.pageX,
                        y:e.pageY,
                    });
                };

                var mouseupHandler=function(){
                    self.working=false;
                    viewRange.style.display='none';
                    self.zoom(cLevel);
                    var scrolled=getScrolled();
                    imgWindow.style.top= -13 -  rectSize.h * ((parseFloat(vRS.top) - moveRange.y[0])/size.h) + scrolled.y +'px';
                    imgWindow.style.left= -13 - rectSize.w * ((parseFloat(vRS.left) - moveRange.x[0])/size.w) + scrolled.x +'px';

                    //说明图片的高度没有屏幕高，居中
                    //说明图片的宽度没有屏幕宽，居中
                    self.center(rangeSize.w == size.w , rangeSize.h == size.h);

                    self.keepScreenInside();

                    document.removeEventListener('mousemove',moveHandler,true);
                    document.removeEventListener('mouseup',mouseupHandler,true);
                };
                document.addEventListener('mousemove',moveHandler,true);
                document.addEventListener('mouseup',mouseupHandler,true);
            },
            setToolBadge:function(tool,content){
                var scale=0;
                switch(tool){
                    case 'zoom':{
                        scale=2;
                    }break;
                    case 'rotate':{
                        scale=1;
                    }break;
                    default:break;
                }
                content=typeof content=='string'? content : content.toFixed(scale);
                this.toolMap[tool].nextElementSibling.textContent=content;
            },
            notExponential:function(num){//不要转为指数形势
                if(num>0){
                    if(num >= 999999999999999934463){
                        return  999999999999999934463;
                    }else if(num <= 0.000001){
                        return 0.000001;
                    };
                }else if(num < 0){
                    if(num >= -0.000001){
                        return -0.000001;
                    }else if(num <= -999999999999999934463){
                        return -999999999999999934463
                    };
                };

                return num;
            },

            blur:function(e){
                if(!this.focused)return;
                var imgWindow =this.imgWindow;
                //点击imgWinodw的外部的时候失去焦点
                if(e!==true && imgWindow.contains(e.target))return;
                imgWindow.classList.remove('pv-pic-window-container_focus');
                this.toolbar.classList.remove('pv-pic-window-toolbar_focus');
                this.closeButton.classList.remove('pv-pic-window-close_focus');
                //this.searchButton.classList.remove('pv-pic-window-search_focus');
                this.img.classList.remove('pv-pic-window-pic_focus');
                document.removeEventListener('mousedown',this._blur,true);
                document.removeEventListener('keydown',this._focusedKeydown,true);
                document.removeEventListener('keyup',this._focusedKeyup,true);
                this.changeCursor('default');
                ImgWindowC.selectedTool=this.selectedTool;
                this.focused=false;
            },
            focus:function(){
                if(this.focused)return;
                this.imgWindow.classList.add('pv-pic-window-container_focus');
                this.toolbar.classList.add('pv-pic-window-toolbar_focus');
                this.closeButton.classList.add('pv-pic-window-close_focus');
                //this.searchButton.classList.add('pv-pic-window-search_focus');
                this.img.classList.add('pv-pic-window-pic_focus');
                this.imgWindow.style.zIndex= ImgWindowC.styleZIndex;
                this.zIndex=ImgWindowC.styleZIndex;
                ImgWindowC.styleZIndex ++;
                document.addEventListener('keydown',this._focusedKeydown,true);
                document.addEventListener('keyup',this._focusedKeyup,true);
                document.addEventListener('mousedown',this._blur,true);

                //还原鼠标样式。
                this.changeCursor(this.selectedTool);

                if(prefs.imgWindow.syncSelectedTool && ImgWindowC.selectedTool){
                    this.selectTool(ImgWindowC.selectedTool);
                };

                this.focused=true;
            },
            focusedKeyup:function(e){
                var keyCode=e.keyCode;
                var valid=[32,18,16,72,17,72,82,90,67];
                if(valid.indexOf(keyCode)==-1)return;

                e.preventDefault();

                switch(keyCode){
                    case 32:{//空格键，临时切换到移动
                        this.spaceKeyUp=true;
                        if(!this.tempHand)return;//如果之前没有临时切换到抓手工具（当已经在工作的时候，按下空格不会临时切换到抓手工具）
                        if(!this.working){//松开按键的时候，没有在继续平移了。
                            this.tempHand=false;
                            this.changeCursor(this.selectedTool);
                        };
                    }break;
                    case 18:{//alt键盘切换缩小放大。
                        this.altKeyUp=true;
                        if(!this.zoomOut)return;
                        if(!this.working){
                            this.zoomOut=false;
                            this.changeCursor('zoom');
                            if(this.tempZoom && this.ctrlKeyUp){
                                this.tempZoom=false;
                                this.changeCursor(this.selectedTool);
                            };
                        };
                    }break;
                    case 16:{//shift键，旋转的时候按住shift键，步进缩放。
                        this.shiftKeyUp=true;
                    }break;
                    case 17:{//ctrl键
                        clearTimeout(this.ctrlkeyDownTimer);
                        if(!this.justCKeyUp){//如果刚才没有松开c，规避划词软件的ctrl+c松开
                            this.ctrlKeyUp=true;
                            if(!this.tempZoom)return;//如果没有切换到了缩放
                            if(!this.working && this.altKeyUp){
                                this.tempZoom=false;
                                this.changeCursor(this.selectedTool);
                            };
                        };
                    }break;
                    case 67:{//c键
                        this.justCKeyUp=true;
                        var self=this;
                        clearTimeout(this.justCKeyUpTimer);
                        this.justCKeyUpTimer=setTimeout(function(){
                            self.justCKeyUp=false;
                        },100)
                    }break;
                    case 72:{//h键
                        this.hKeyUp=true;
                    }break;
                    case 82:{//r键
                        this.rKeyUp=true;
                    }break;
                    case 90:{//z键
                        this.zKeyUp=true;
                    }break;
                    default:break;
                };

                if([72,82,90].indexOf(keyCode)!=-1){
                    if(!this.working && this.restoreBeforeTool){
                        this.restoreBeforeTool=false;
                        this.selectTool(this.beforeTool);
                    };
                };
            },
            focusedKeydown:function(e){
                var keyCode=e.keyCode;
                var valid=[32,82,72,90,18,16,17,27,67];//有效的按键
                if(valid.indexOf(keyCode)==-1) return;

                e.preventDefault();

                if(this.working){//working的时候也可以接受按下shift键，以便旋转的时候可以任何时候按下
                    if(keyCode==16){//shift键
                        this.shiftKeyUp=false;
                    };
                    return;
                };

                switch(keyCode){
                    case 82:{//r键,切换到旋转工具
                        if(this.rKeyUp){
                            this.rKeyUp=false;
                            this.beforeTool=this.selectedTool;
                            this.selectTool('rotate');
                        };
                    }break;
                    case 72:{//h键,切换到抓手工具
                        if(this.hKeyUp){
                            this.hKeyUp=false;
                            this.beforeTool=this.selectedTool;
                            this.selectTool('hand');
                        };
                    }break;
                    case 90:{//z键,切换到缩放工具
                        if(this.zKeyUp){
                            this.zKeyUp=false;
                            this.beforeTool=this.selectedTool;
                            this.selectTool('zoom');
                        };
                    }break;
                    case 32:{//空格键阻止,临时切换到抓手功能
                        if(this.spaceKeyUp){
                            this.spaceKeyUp=false;
                            if(this.selectedTool!='hand'){
                                this.tempHand=true;
                                this.changeCursor('hand');
                            };
                        };
                    }break;
                    case 18:{//alt键,在当前选择是缩放工具的时候，按下的时候切换到缩小功能
                        if(this.altKeyUp){
                            if((this.selectedTool!='zoom' && !this.tempZoom) || this.zoomOut)return;
                            this.zoomOut=true;
                            this.altKeyUp=false;
                            this.changeCursor('zoom',true);
                        };
                    }break;
                    case 17:{//ctrl键临时切换到缩放工具
                        if(this.ctrlKeyUp){
                            var self=this;
                            this.ctrlkeyDownTimer=setTimeout(function(){//规避词典软件的ctrl+c，一瞬间切换到缩放的问题
                                self.ctrlKeyUp=false;
                                if(self.selectedTool!='zoom'){
                                    self.tempZoom=true;
                                    self.changeCursor('zoom');
                                };
                            },100);
                        };
                    }break;
                    case 67:{//c键
                        clearTimeout(this.ctrlkeyDownTimer);
                    }break;
                    case 27:{//ese关闭窗口
                        if(prefs.imgWindow.close.escKey){
                            this.remove();
                        };
                    }break;
                    default:break;
                };
            },

            toolbarEventHandler:function(e){
                e.stopPropagation();
                var target=e.target;
                var toolMap=this.toolMap;
                for(var i in toolMap){
                    if(toolMap.hasOwnProperty(i) && toolMap[i]==target){
                        switch(e.type){
                            case 'mousedown':{
                                this.selectTool(i);
                            }break;
                            case 'dblclick':{
                                this.dblclickCommand(i);
                            }break;
                            default:break;
                        };
                        break;
                    };
                };
            },
            imgWindowEventHandler:function(e){
                e.stopPropagation();
                switch(e.type){
                    case 'click':{//阻止opera的图片保存
                        if(e.ctrlKey && e.target.nodeName=='IMG'){
                            e.preventDefault();
                        };
                    }break;
                    case 'mousedown':{
                        if(!this.focused){//如果没有focus，先focus
                            this.focus();
                            this.keepScreenInside();
                        };

                        var target=e.target;
                        if(e.button==2){//由于rotate时候的覆盖层问题，修复右键的图片菜单弹出
                            if(target!=this.rotateOverlayer)return;
                            var self=this;
                            this.rotateOverlayer.style.display='none';
                            var upHandler=function(){
                                document.removeEventListener('mouseup',upHandler,true);
                                setTimeout(function(){
                                    self.rotateOverlayer.style.display='block';
                                },10);
                            };
                            document.addEventListener('mouseup',upHandler,true);
                            return;
                        };

                        if(e.button!=0 || (target!=this.imgWindow && target!=this.img && target!=this.rotateOverlayer))return;
                        e.preventDefault();
                        var selectedTool=this.selectedTool;
                        if(this.tempHand){
                            this.move(e);
                        }else if(this.tempZoom){
                            this.zoom(e);
                        }else if(selectedTool=='hand'){
                            this.restoreBeforeTool=!this.hKeyUp;
                            if(this.hKeyUp){
                                this.move(e);
                            }else{//鸟瞰视图
                                this.aerialView(e);
                            };
                        }else if(selectedTool=='rotate'){
                            var origin={//旋转原点
                                x:e.clientX - 30,//稍微偏左一点。
                                y:e.clientY ,
                            };

                            var rIS=this.rotateIndicator.style;
                            //rIS.display='block';
                            rIS.top=origin.y + 'px';
                            rIS.left=origin.x + 'px';

                            this.restoreBeforeTool=!this.rKeyUp;
                            this.rotate(origin);
                        }else if(selectedTool=='zoom'){
                            this.restoreBeforeTool=!this.zKeyUp;
                            this.zoom(e);
                        };
                    }break;
                    case 'wheel':{
                        if(!this.focused)return;//如果没有focus
                        if(e.deltaY===0)return;//非Y轴的滚动
                        e.preventDefault();
                        if(this.working)return;
                        var oriZoomOut=this.zoomOut;
                        this.zoomOut = !!(e.deltaY > 0);

                        var ratio=this.getZoomRatio({
                            x:e.clientX,
                            y:e.clientY,
                        });

                        var level=this.getNextZoomLevel();

                        this.zoom(level,ratio);
                        this.zoomOut=oriZoomOut;
                    }break;
                    default:break;
                };
            },

            dblclickCommand:function(tool){
                var done;
                switch(tool){
                    case 'hand':{//双击居中,并且适应屏幕
                        this.zoom(1);
                        this.fitToScreen();
                        this.center(true,true);
                        this.keepScreenInside();
                    }break;
                    case 'rotate':{//双击还原旋转
                        if(this.rotatedRadians==0)return;
                        done=true;
                        this.rotate(0,true);
                    }break;
                    case 'zoom':{//双击还原缩放
                        if(this.zoomLevel==1)return;
                        done=true;
                        this.zoom(1,{x:0,y:0});
                    }break;
                    default:break;
                };

                if((tool=='rotate' || tool=='zoom') && done){
                    var scrolled=getScrolled();
                    var imgWindow=this.imgWindow;
                    var imgWinodowRect=imgWindow.getBoundingClientRect();
                    var imgWindowStyle=imgWindow.style;
                    if(imgWinodowRect.left<40){
                        imgWindowStyle.left=40 + scrolled.x + 'px';
                    };
                    if(imgWinodowRect.top<-5){
                        imgWindowStyle.top=-5 + scrolled.y +'px';
                    };
                    this.keepScreenInside();
                };

            },
            doFlipCommand:function(command){
                var map={
                    fv:[/scaleY\([^)]*\)/i,' scaleY(-1) '],
                    fh:[/scaleX\([^)]*\)/i,' scaleX(-1) '],
                };

                var iTransform=this.img.style[support.cssTransform];

                var toolClassList=this.toolMap[command].classList;

                if(map[command][0].test(iTransform)){
                    iTransform=iTransform.replace(map[command][0],'');
                    toolClassList.remove(this.selectedToolClass);
                }else{
                    iTransform += map[command][1];
                    toolClassList.add(this.selectedToolClass);
                };
                this.img.style[support.cssTransform]=iTransform;

            },
            selectTool:function(tool){
                var command=['fv','fh'];
                if(command.indexOf(tool)==-1){//工具选择
                    if(this.selectedTool==tool){
                        if(tool=="rotate"){
                            var PI=Math.PI;
                            var value=this.rotatedRadians + 90 * PI/180;
                            if(value>=2*PI){
                                value-=2*PI;
                            }
                            this.rotate(value,true);
                        }
                        return;
                    }
                    var selectedTool=this.selectedTool;
                    this.selectedTool=tool;
                    if(this.tempHand || this.tempZoom){//临时工具中。不变鼠标
                        return;
                    };

                    this.rotateOverlayer.style.display=(tool=='rotate'? 'block' : 'none');//这个覆盖层是为了捕捉双击或者单击事件。

                    if(selectedTool){
                        this.toolMap[selectedTool].classList.remove(this.selectedToolClass);
                    };
                    this.toolMap[tool].classList.add(this.selectedToolClass);
                    this.changeCursor(tool);
                }else{//命令
                    this.doFlipCommand(tool);
                };
            },
            changeCursor:function(tool,zoomOut){
                if(tool=='zoom'){
                    tool+=zoomOut? '-out' : '-in';
                };
                if(this.cursor==tool)return;
                this.cursor=tool;

                var cursor;

                switch(tool){
                    case 'hand':{
                        cursor=support.cssCursorValue.grab || 'pointer';
                    }break;
                    case 'handing':{
                        cursor=support.cssCursorValue.grabbing || 'pointer';
                    }break;
                    case 'zoom-in':{
                        cursor=support.cssCursorValue.zoomIn;
                    }break;
                    case 'zoom-out':{
                        cursor=support.cssCursorValue.zoomOut;
                    }break;
                    case 'rotate':{
                        cursor='progress';
                    }break;
                    case 'default':{
                        cursor='';
                    }break;
                };

                if(typeof cursor!='undefined'){
                    this.imgWindow.style.cursor=cursor;
                };

            },

            remove:function(){
                if(this.removed)return;
                this.removed=true;
                this.blur(true);
                this.img.src= prefs.icons.brokenImg_small;//如果在加载中取消，图片也取消读取。

                this.imgWindow.parentNode.removeChild(this.imgWindow);

                var index=ImgWindowC.all.indexOf(this);
                ImgWindowC.all.splice(index,1);

                //focus next
                if(ImgWindowC.all.length==0){
                    if(ImgWindowC.overlayer){
                        ImgWindowC.overlayer.style.display='none';
                    };
                }else{
                    var topmost=0;
                    ImgWindowC.all.forEach(function(iwin){
                        if(iwin.zIndex > topmost){
                            topmost=iwin;
                        };
                    });
                    if(topmost){
                        topmost.focus();
                    };
                };

            },

        };

        // 载入动画
        function LoadingAnimC(data,buttonType,waitImgLoad,openInTopWindow){
            this.args=arrayFn.slice.call(arguments,0);
            this.data=data;//data
            this.buttonType=buttonType;//点击的按钮类型
            this.openInTopWindow=openInTopWindow;//是否在顶层窗口打开，如果在frame里面的话
            this.waitImgLoad=waitImgLoad;//是否等待完全读取后打开
            this.init();
        };

        LoadingAnimC.all=[];

        LoadingAnimC.prototype={
            init:function(){
                LoadingAnimC.all.push(this);
                this.addStyle();
                var container=document.createElement('span');

                container.className='pv-loading-container';
                this.loadingAnim=container;

                container.title=i18n("loading")+':' + this.data.src;
                container.innerHTML=
                    '<span class="pv-loading-button pv-loading-retry" title="重试"></span>'+
                    '<span class="pv-loading-button pv-loading-cancle" title="取消"></span>';

                document.body.appendChild(container);

                var self = this;
                container.addEventListener('click',function(e){
                    var tcl=e.target.classList;
                    if(tcl.contains('pv-loading-cancle')){
                        self.imgReady.abort();
                        self.remove();
                    }else if(tcl.contains('pv-loading-retry')){
                        self.remove();
                        new LoadingAnimC(self.args[0],self.args[1],self.args[2],self.args[3]);
                    };
                },true);

                this.setPosition();

                if (this.buttonType == 'current') {
                    this.loadImg(this.data.imgSrc);
                } else {
                    if (!this.data.xhr) {
                        if(this.buttonType == 'search'){
                            sortSearch();
                            let from=0;
                            let searchFun=function(){
                                searchImgByImg(self.data.imgSrc, null, function(srcs, index){
                                    let src=srcs.shift();
                                    if(index==3){
                                        self.loadImg(src, srcs);
                                    }else{
                                        from=index+1;
                                        self.loadImg(src, srcs, searchFun);
                                    }
                                },function(e) {
                                    self.error("网络错误");
                                },function(e) {
                                    self.error("没有找到原图");
                                }, from);
                            };
                            searchFun();
                        }else{
                            this.loadImg(this.data.src||this.data.imgSrc, this.data.srcs);
                        }
                    } else {
                        xhrLoad.load({
                            url: this.data.src,
                            xhr: this.data.xhr,
                            cb: function(imgSrc, imgSrcs, caption) {
                                if (imgSrc) {
                                    self.loadImg(imgSrc, imgSrcs);
                                } else {
                                    self.error();
                                }
                            },
                            onerror: function() {
                                self.error();
                            }
                        });
                    }
                }
            },
            addStyle:function(){
                if(LoadingAnimC.styleAdded)return;
                LoadingAnimC.styleAdded=true;
                var style=document.createElement('style');
                style.type='text/css';
                style.textContent='\
                .pv-loading-container {\
                position: absolute;\
                z-index:999999997;\
                background: black url("'+prefs.icons.loading+'") center no-repeat;\
                background-origin: content-box;\
                border: none;\
                padding: 1px 30px 1px 2px;\
                margin: 0;\
                opacity: 0.7;\
                height: 24px;\
                min-width: 24px;\
                box-shadow: 2px 2px 0px #666;\
                -webkit-transition: opacity 0.15s ease-in-out;\
                transition: opacity 0.15s ease-in-out;\
                }\
                .pv-loading-container:hover {\
                opacity: 0.9;\
                }\
                .pv-loading-button {\
                cursor: pointer;\
                height: 24px;\
                width: 24px;\
                position: absolute;\
                right: 0;\
                top: 0;\
                opacity: 0.4;\
                background:transparent center no-repeat;\
                -webkit-transition: opacity 0.15s ease-in-out;\
                transition: opacity 0.15s ease-in-out;\
                }\
                .pv-loading-button:hover {\
                opacity: 1;\
                }\
                .pv-loading-cancle{\
                background-image: url("'+prefs.icons.loadingCancle+'");\
                }\
                .pv-loading-retry{\
                display:none;\
                background-image: url("'+prefs.icons.retry+'");\
                }\
                .pv-loading-container_error{\
                background-image:none;\
                }\
                .pv-loading-container_error::after{\
                content:"'+i18n("loadError")+'";\
                line-height: 24px;\
                color: red;\
                font-size: 14px;\
                display:inline;\
                }\
                .pv-loading-container_error .pv-loading-cancle{\
                display:none;\
                }\
                .pv-loading-container_error .pv-loading-retry{\
                display:block;\
                }\
                ';
                document.head.appendChild(style);
            },
            remove:function(){
                if(!this.removed){
                    this.removed=true;
                    this.loadingAnim.parentNode.removeChild(this.loadingAnim);
                    LoadingAnimC.all.splice(LoadingAnimC.all.indexOf(this),1);
                };
            },
            error:function(msg,img,e){
                if(msg)console.debug(msg);
                this.loadingAnim.classList.add('pv-loading-container_error');
                console.debug('picviewer CE 载入大图错误：%o', this.data);

                var self=this;
                setTimeout(function(){
                    self.remove();
                },3000);
            },
            setPosition:function(){
                var position=getContentClientRect(this.data.img);
                var cs=this.loadingAnim.style;
                var scrolled=getScrolled();
                cs.top=position.top + scrolled.y +1 + 'px';
                cs.left=position.left + scrolled.x +1 + 'px';
                cs.removeProperty('display');
            },

            // 根据 imgSrc 载入图片，imgSrcs 为备用图片地址，imgSrc 加载失败备用
            loadImg: function(imgSrc, imgSrcs, nextFun) {
                var self = this;

                var img = document.createElement('img');
                img.src = imgSrc;

                var opts = {
                    error: function(e) {
                        if (Array.isArray(imgSrcs)) {
                            var src = imgSrcs.shift();
                            if (src) {
                                self.loadImg(src, imgSrcs, nextFun);
                                return;
                            }
                        }

                        if(nextFun) nextFun();
                        else self.error('', this, e);
                    },
                };

                opts[self.waitImgLoad ? 'load' : 'ready'] = function(e) {
                    self.load(this, e);
                };

                self.imgReady = imgReady(img, opts);
            },

            load:function(img,e){
                this.remove();
                this.img=img;
                var buttonType=this.buttonType;

                if(buttonType=='gallery'){
                    var allData=this.getAllValidImgs();
                    allData.target=this.data;
                    this.data=allData;
                };

                var self=this;
                function openInTop(){
                    var data=self.data;

                    //删除不能发送的项。
                    var delCantClone=function(obj){
                        if(!obj)return;
                        delete obj.img;
                        delete obj.imgPA;
                    };

                    if(Array.isArray(data)){
                        frameSentSuccessData=frameSentData;
                        frameSentData=cloneObject(data,true);
                        delCantClone(data.target);
                        data.forEach(function(obj){
                            delCantClone(obj);
                        });
                    }else{
                        delCantClone(data);
                    };

                    window.postMessage({
                        messageID:messageID,
                        src:img.src,
                        data:data,
                        command:'open',
                        buttonType:buttonType,
                        to:'top',
                    },'*');
                };

                if(this.openInTopWindow && isFrame && topWindowValid!==false && buttonType!='magnifier'){
                    if(topWindowValid){
                        openInTop();
                    }else{//先发消息问问顶层窗口是不是非frameset窗口
                        window.postMessage({
                            messageID:messageID,
                            command:'topWindowValid',
                            to:'top',
                        },'*');

                        document.addEventListener('pv-topWindowValid',function(e){
                            topWindowValid=e.detail;
                            if(topWindowValid){//如果顶层窗口有效
                                openInTop();
                            }else{
                                self.open();
                            };
                        },true);
                    };

                }else{
                    this.open();
                };


            },
            getAllValidImgs:function(){
                var doc=window.parent==window?document:window.parent.document;
                var validImgs=[],imgsHandle=function(imgs){
                    arrayFn.forEach.call(imgs,function(img,index,imgs){
                        var result=findPic(img);
                        if(result){
                            validImgs.push(result);
                        };
                    });
                };
                imgsHandle(doc.getElementsByTagName('img'));
                arrayFn.forEach.call(doc.querySelectorAll("iframe"),function(iframe){
                    if(iframe.src.replace(/\/[^\/]*$/,"").indexOf(location.hostname)!=-1)
                        try{
                            imgsHandle(iframe.contentWindow.document.getElementsByTagName('img'));
                        }catch(e){
                            console.log(e.toString());
                        }
                });
                return validImgs;
            },
            open:function(){
                switch(this.buttonType){
                    case 'gallery':{
                        if(!gallery){
                            gallery=new GalleryC();
                        };
                        gallery.load(this.data,this.from);
                    }break;
                    case 'magnifier':{
                        new MagnifierC(this.img,this.data);
                    }break;
                    case 'actual':;
                    case 'search':;
                    case 'current':;
                    case 'original':{//original 是为了兼容以前的规则
                        new ImgWindowC(this.img, this.data);
                    }break;
                };
            },
        };

        //工具栏
        function FloatBarC(){
            this.init();
        };

        FloatBarC.prototype={
            init:function(){
                this.addStyle();
                var container=document.createElement('span');
                container.id='pv-float-bar-container';
                container.innerHTML=
                    '<span class="pv-float-bar-button"></span>'+
                    '<span class="pv-float-bar-button"></span>'+
                    '<span class="pv-float-bar-button"></span>'+
                    //'<span class="pv-float-bar-button"></span>'+
                    '<span class="pv-float-bar-button"></span>';
                document.body.appendChild(container);

                var buttons={
                };
                this.buttons=buttons;
                this.children=container.children;

                arrayFn.forEach.call(this.children,function(child,index){
                    var titleMap={
                        actual:i18n("actualBtn"),
                        search:i18n("searchBtn"),
                        gallery:i18n("galleryBtn"),
                        current:i18n("currentBtn"),
                        magnifier:i18n("magnifierBtn"),
                    };
                    var buttonName=prefs.floatBar.butonOrder[index];
                    buttons[buttonName]=child;
                    child.title=titleMap[buttonName];
                    child.classList.add('pv-float-bar-button-' + buttonName);
                });


                this.floatBar=container;


                var self=this;
                container.addEventListener('click',function(e){
                    var buttonType;
                    var target=e.target;
                    for(var type in buttons){
                        if(!buttons.hasOwnProperty(type))return;
                        if(target==buttons[type]){
                            buttonType=type;
                            break;
                        };
                    };
                    if(!buttonType)return;

                    self.hide();
                    self.open(e,buttonType);

                },true);


                addCusMouseEvent('mouseleave',container,function(e){
                    clearTimeout(self.hideTimer);
                    self.hideTimer=setTimeout(function(){
                        self.hide();
                    },prefs.floatBar.hideDelay);
                });

                addCusMouseEvent('mouseenter',container,function(e){
                    clearTimeout(self.hideTimer);
                });

                this._scrollHandler=this.scrollHandler.bind(this);
            },
            addStyle:function(){
                var style=document.createElement('style');
                style.type='text/css';
                style.textContent='\
                    #pv-float-bar-container {\
                    position: absolute;\
                    z-index:9999999998;\
                    padding: 5px;\
                    margin: 0;\
                    border: none;\
                    opacity: 0.6;\
                    line-height: 0;\
                    -webkit-transition: opacity 0.2s ease-in-out;\
                    transition: opacity 0.2s ease-in-out;\
                    display:none;\
                    }\
                    #pv-float-bar-container:hover {\
                    opacity: 1;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button {\
                    vertical-align:middle;\
                    cursor: pointer;\
                    width: 18px;\
                    height: 18px;\
                    padding: 0;\
                    margin:0;\
                    border: none;\
                    display: inline-block;\
                    position: relative;\
                    box-shadow: 1px 0 3px 0px rgba(0,0,0,0.9);\
                    background: transparent center no-repeat;\
                    background-size:100% 100%;\
                    background-origin: content-box;\
                    -webkit-transition: margin-right 0.15s ease-in-out ,  width 0.15s ease-in-out ,  height 0.15s ease-in-out ;\
                    transition: margin-right 0.15s ease-in-out ,  width 0.15s ease-in-out ,  height 0.15s ease-in-out ;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button:not(:last-child){\
                    margin-right: -14px;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button:first-child {\
                    z-index: 4;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button:nth-child(2) {\
                    z-index: 3;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button:nth-child(3) {\
                    z-index: 2;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button:last-child {\
                    z-index: 1;\
                    }\
                    #pv-float-bar-container:hover > .pv-float-bar-button {\
                    width: 24px;\
                    height: 24px;\
                    }\
                    #pv-float-bar-container:hover > .pv-float-bar-button:not(:last-child) {\
                    margin-right: 4px;\
                    }\
                    #pv-float-bar-container .pv-float-bar-button-actual {\
                    background-image:url("'+ prefs.icons.actual +'");\
                    }\
                    #pv-float-bar-container .pv-float-bar-button-search {\
                    background-image:url("'+ prefs.icons.search +'");\
                    }\
                    #pv-float-bar-container .pv-float-bar-button-gallery {\
                    background-image:url("'+ prefs.icons.gallery +'");\
                    }\
                    #pv-float-bar-container .pv-float-bar-button-current {\
                    background-image:url("'+ prefs.icons.current +'");\
                    }\
                    #pv-float-bar-container .pv-float-bar-button-magnifier {\
                    background-image:url("'+ prefs.icons.magnifier +'");\
                    }\
                    ';
                document.head.appendChild(style);
            },
            start:function(data){

                //读取中的图片,不显示浮动栏,调整读取图标的位置.
                if(LoadingAnimC.all._find(function(item,index,array){
                    if(data.img==item.data.img){
                        return true;
                    };
                }))return;


                //被放大镜盯上的图片,不要显示浮动栏.
                if(MagnifierC.all._find(function(item,index,array){
                    if(data.img==item.data.img){
                        return true;
                    };
                }))return;

                this.data=data;
                var self=this;
                clearTimeout(this.hideTimer);

                var imgOutHandler=function(e){
                    document.removeEventListener('mouseout',imgOutHandler,true);
                    clearTimeout(self.showTimer);
                    clearTimeout(self.hideTimer);
                    self.hideTimer=setTimeout(function(){
                        self.hide();
                    },prefs.floatBar.hideDelay);
                };

                clearTimeout(this.globarOutTimer);
                this.globarOutTimer=setTimeout(function(){//稍微延时。错开由于css hover样式发生的out;
                    document.addEventListener('mouseout',imgOutHandler,true);
                },150);

                clearTimeout(this.showTimer);
                this.showTimer=setTimeout(function(){
                    self.show();
                },prefs.floatBar.showDelay);
            },
            setButton:function(){
                if(this.data.noActual){
                    this.buttons['actual'].style.display='none';
                    this.buttons['magnifier'].style.display='none';
                }else{
                    this.buttons['actual'].style.removeProperty('display');
                    this.buttons['magnifier'].style.removeProperty('display');
                };

                if (this.data.img.nodeName != 'IMG') {
                    this.buttons['gallery'].style.display = 'none';
                    //this.buttons['current'].style.display = 'none';
                } else {
                    this.buttons['gallery'].style.removeProperty('display');
                    //this.buttons['current'].style.removeProperty('display');
                }
            },
            setPosition:function(){
                //如果图片被删除了，或者隐藏了。
                if(this.data.img.offsetWidth==0){
                    return true;
                };
                var targetPosi=getContentClientRect(this.data.img);
                var windowSize=getWindowSize();
                var img=this.data.img;

                var floatBarPosi=prefs.floatBar.position.toLowerCase().split(/\s+/);

                var offsetX=prefs.floatBar.offset.x;
                var offsetY=prefs.floatBar.offset.y;


                var scrolled=getScrolled();

                var fbs=this.floatBar.style;
                var setPosition={
                    top:function(){
                        fbs.opacity=1;
                        var top=targetPosi.top + scrolled.y;
                        if(targetPosi.top + offsetY < 0){//满足图标被遮住的条件.
                            top=scrolled.y;
                            offsetY=0;
                        };
                        fbs.top=top + offsetY + 'px';
                    },
                    right:function(){
                        fbs.opacity=1;
                        var right=windowSize.w - targetPosi.right;
                        if(right < offsetX){
                            right= -scrolled.x;
                            offsetX=0;
                        }else{
                            right -=scrolled.x;
                        };
                        fbs.right=right - offsetX + 'px';
                    },
                    bottom:function(){
                        fbs.opacity=1;
                        var bottom=windowSize.h - targetPosi.bottom;
                        if(bottom <= offsetY){
                            bottom=-scrolled.y;
                            offsetY=0;
                        }else{
                            bottom -= scrolled.y;
                        };
                        fbs.bottom=bottom - offsetY + 'px';
                    },
                    left:function(){
                        fbs.opacity=1;
                        var left=targetPosi.left + scrolled.x;
                        if(targetPosi.left + offsetX < 0){
                            left=scrolled.x;
                            offsetX=0;
                        };
                        fbs.left=left + offsetX + 'px';
                    },
                    center:function(){
                        fbs.opacity=1;
                        var left=targetPosi.left + scrolled.x + offsetX;
                        fbs.left=left + img.width/2 + 'px';
                    },
                    hide:function(){
                        fbs.opacity=0;
                    },
                };

                setPosition[floatBarPosi[0]]();
                if(floatBarPosi.length>1)
                setPosition[floatBarPosi[1]]();
            },
            show:function(){
                if(this.setPosition())return;
                this.shown=true;
                this.setButton();
                this.floatBar.style.display='block';
                clearTimeout(this.hideTimer);
                window.removeEventListener('scroll',this._scrollHandler,true);
                window.addEventListener('scroll',this._scrollHandler,true);
            },
            hide:function(){
                clearTimeout(this.showTimer);
                this.shown=false;
                this.floatBar.style.display='none';
                window.removeEventListener('scroll',this._scrollHandler,true);
            },
            scrollHandler:function(){//更新坐标
                clearTimeout(this.scrollUpdateTimer);
                var self=this;
                this.scrollUpdateTimer=setTimeout(function(){
                    self.setPosition();
                },100);
            },
            open:function(e,buttonType){
                var waitImgLoad = e && e.ctrlKey ? !prefs.waitImgLoad : prefs.waitImgLoad; //按住ctrl取反向值
                var openInTopWindow = e && e.shiftKey ? !prefs.framesPicOpenInTopWindow : prefs.framesPicOpenInTopWindow; //按住shift取反向值
                if (!waitImgLoad && buttonType == 'magnifier' && !envir.chrome) { //非chrome的background-image需要全部载入后才能显示出来
                    waitImgLoad = true;
                };
                new LoadingAnimC(this.data, buttonType, waitImgLoad, openInTopWindow);
            },
        };

        /**
        * 提取自 Mouseover Popup Image Viewer 脚本，用于 xhr 方式的获取
        */
            var xhrLoad = function() {
            var _ = {};

            var caches = {};
            var handleError;

            /**
     * @param  q  图片的选择器或函数
     * @param  c  图片说明的选择器或函数
     */
            function parsePage(url, q, c, post, cb) {
                downloadPage(url, post, function(html) {
                    var iurl, iurls = [], cap, doc = createDoc(html);

                    if(typeof q == 'function') {
                        iurl = q(html, doc);
                    } else {
                        var inodes = findNodes(q, doc);
                        inodes.forEach(function(node) {
                            iurls.push(findFile(node, url));
                        });
                        iurl = iurls.shift();
                    }

                    if(typeof c == 'function') {
                        cap = c(html, doc);
                    } else {
                        var cnodes = findNodes(c, doc);
                        cap = cnodes.length ? findCaption(cnode[0]) : false;
                    }

                    // 缓存
                    if (iurl) {
                        caches[url] = {
                            iurl: iurl,
                            iurls: iurls,
                            cap: cap
                        };
                    }

                    cb(iurl, iurls, cap);
                });
            }

            function downloadPage(url, post, cb) {
                var opts = {
                    method: 'GET',
                    url: url,
                    onload: function(req) {
                        try {
                            if(req.status > 399) throw 'Server error: ' + req.status;
                            cb(req.responseText, req.finalUrl || url);
                        } catch(ex) {
                            handleError(ex);
                        }
                    },
                    onerror: handleError
                };
                if(post) {
                    opts.method = 'POST';
                    opts.data = post;
                    opts.headers = {'Content-Type':'application/x-www-form-urlencoded','Referer':url};
                }

                GM_xmlhttpRequest(opts);
            }

            function createDoc(text) {
                var doc = document.implementation.createHTMLDocument('picViewerCE');
                doc.documentElement.innerHTML = text;
                return doc;
            }

            function findNodes(q, doc) {
                var nodes = [],
                    node;
                if (!Array.isArray(q)) q = [q];
                for (var i = 0, len = q.length; i < len; i++) {
                    node = qs(q[i], doc);
                    if (node) {
                        nodes.push(node);
                    }
                }
                return nodes;
            }

            function findFile(n, url) {
                var path = n.src || n.href;
                return path ? path.trim() : false;
            }

            function findCaption(n) {
                return n.getAttribute('content') || n.getAttribute('title') || n.textContent;
            }

            function qs(s, n) {
                return n.querySelector(s);
            }

            _.load = function(opt) {
                var info = caches[opt.url];
                if (info) {
                    opt.cb(info.iurl, info.iruls, info.cap);
                    return;
                }

                handleError = opt.onerror || function() {};

                parsePage(opt.url, opt.xhr.q, opt.xhr.c, opt.post, opt.cb);
            };

            return _;
        }();


        /**
         * 兼容 Mousever Popup Image Viewer 脚本规则
         * 规则说明地址：http://w9p.co/userscripts/mpiv/host_rules.html
         */
        var MPIV = (function() {

            var hosts = Rule.MPIV;

            var d = document, wn = window;
            var cfg = {
                thumbsonly: true,
            };
            // 我新加的
            var rgxHTTPs = /^https?:\/\/(?:www\.)?/;

            function loadRule() {
                var rules = Rule.MPIV;

                var isStringFn = function(a) {
                    return typeof a == 'string' && a.indexOf('return ') > -1;
                };

                rules.forEach(function(h) {
                    try {
                        if(h.r) h.r = toRE(h.r, 'i');
                        if(isStringFn(h.s)) h.s = new Function('m', 'node', h.s);
                        if(isStringFn(h.q)) h.q = new Function('text', 'doc', h.q);
                        if(isStringFn(h.c)) h.c = new Function('text', 'doc', h.c);
                    } catch(ex) {
                        console.error('MPIV 规则无效: %o', h, ex);
                    }
                });

                var filter = function(hn, h) {
                    return !h.d || hn.indexOf(h.d) > -1;
                };

                hosts = rules.filter(filter.bind(null, location.hostname));

                return hosts;
            }

            function hasBg(node) {
                return node ? wn.getComputedStyle(node).backgroundImage != 'none' && node.className.indexOf('YTLT-') < 0 : false;
            }

            function rel2abs(rel, abs) {
                if(rel.indexOf('//') === 0) rel = 'http:' + rel;
                var re = /^([a-z]+:)?\/\//;
                if(re.test(rel))  return rel;
                if(!re.exec(abs)) return;
                if(rel[0] == '/') return abs.substr(0, abs.indexOf('/', RegExp.lastMatch.length)) + rel;
                return abs.substr(0, abs.lastIndexOf('/')) + '/' + rel;
            }

            /**
             * 我新增了特殊的替换模式
             * 规则：
             *   {"r":"hotimg\\.com/image", "s":"/image/direct/"}
             *   把 image 替换为 direct ，就是 .replace(/image/, "direct")
             */
            function replace(s, m, r, http) {
                if(!m) return s;

                if (r && s.startsWith('r;')) {  // 特殊的替换模式
                    s = m.input.replace(r, s.slice(2));
                } else if(s.indexOf('/') === 0) {
                    var mid = /[^\\]\//.exec(s).index+1;
                    var end = s.lastIndexOf('/');
                    var re = new RegExp(s.substring(1, mid), s.substr(end+1));
                    s = m.input.replace(re, s.substring(mid+1, end));
                } else {
                    for(var i = m.length; i--;) {
                        s = s.replace('$'+i, m[i]);
                    }
                }

                if (!s.startsWith('http') && http) {
                    return http + s;
                }

                return s;
            }

            function rect(node, q) {
                if(q) {
                    var n = node;
                    while(tag(n = n.parentNode) != 'BODY') {
                        if(matches(n, q)) return n.getBoundingClientRect();
                    }
                }
                var nodes = node.querySelectorAll('*');
                for(var i = nodes.length; i-- && (n = nodes[i]);) {
                    if(n.offsetHeight > node.offsetHeight) node = n;
                }
                return node.getBoundingClientRect();
            }

            function matches(n, q) {
                var p = Element.prototype, m = p.mozMatchesSelector || p.webkitMatchesSelector || p.oMatchesSelector || p.matchesSelector || p.matches;
                if(m) return m.call(n, q);
            }

            function tag(n) {
                return n && n.tagName && n.tagName.toUpperCase();
            }

            function qs(s, n) {
                return n.querySelector(s);
            }

            function parseNode(node) {
                var a, img, url, info;
                if(tag(node) == 'A') {
                    a = node;
                } else if(node.parentNode){
                    if(tag(node) == 'IMG') {
                        img = node;
                        if(img.src.substr(0, 5) != 'data:') url = rel2abs(img.src, location.href);
                    }
                    info = findInfo(url, node);
                    if(info) return info;
                    a = tag(node.parentNode) == 'A' ? node.parentNode : (tag(node.parentNode.parentNode) == 'A' ? node.parentNode.parentNode : false);
                }
                if(a) {
                    if(cfg.thumbsonly && !(img || qs('i', a) || a.rel == 'theater') && !hasBg(a) && !hasBg(a.parentNode) && !hasBg(a.firstElementChild)) return;
                    url = a.getAttribute('data-expanded-url') || a.getAttribute('data-full-url') || a.getAttribute('data-url') || a.href;
                    if(url.substr(0, 5) == 'data:') url = false;
                    else if(url.indexOf('//t.co/') > -1) url = 'http://' + a.textContent;
                    info = findInfo(url, a);
                    if(info) return info;
                }
                if(img) return {url:img.src, node:img, rect:rect(img), distinct:true};
            }

            function decodeURIComponentEx(uriComponent){
                if(!uriComponent){
                    return  uriComponent;
                }
                var ret;
                try{
                    ret = decodeURIComponent(uriComponent);
                }catch(ex){
                    ret = unescape(uriComponent);
                }
                return ret;
            };

            function findInfo(url, node, noHtml, skipHost) {
                for(var i = 0, len = hosts.length, tn = tag(node), h, m, html, urls, URL, http; i < len && (h = hosts[i]); i++) {
                    if(h.e && !matches(node, h.e) || h == skipHost) continue;
                    if(h.r) {
                        if(h.html && !noHtml && (tn == 'A' || tn == 'IMG' || h.e)) {
                            if(!html) html = node.outerHTML;
                            m = h.r.exec(html)
                        } else if(url) {
                            // 去掉前面的 https://
                            URL = url.replace(rgxHTTPs, '');
                            http = url.slice(0, url.length - URL.length);
                            m = h.r.exec(URL);
                        } else {
                            m = null;
                        }
                    } else {
                        m = url ? /.*/.exec(url) : [];
                    }
                    if(!m || tn == 'IMG' && !('s' in h)) continue;
                    if('s' in h) {
                        urls = (Array.isArray(h.s) ? h.s : [h.s]).map(function(s) { if(typeof s == 'string') return decodeURIComponentEx(replace(s, m, h.r, http)); if(typeof s == 'function') return s(m, node); return s; });
                        if(Array.isArray(urls[0])) urls = urls[0];
                        if(urls[0] === false) continue;
                        urls = urls.map(function(u) { return u ? decodeURIComponentEx(u) : u; });
                    } else {
                        urls = [m.input];
                    }
                    if((h.follow === true || typeof h.follow == 'function' && h.follow(urls[0])) && !h.q) return findInfo(urls[0], node, false, h);

                    // debug('MPIV 找到的规则是 %o', h);
                    return {
                        node: node,
                        url: urls.shift(),
                        urls: urls,
                        r: h.r,
                        s: h.s,
                        q: h.q,
                        c: h.c,
                        // g: h.g ? loadGalleryParser(h.g) : h.g,
                        xhr: h.xhr,
                        post: typeof h.post == 'function' ? h.post(m) : h.post,
                        follow: h.follow,
                        css: h.css,
                        // manual: h.manual,
                        distinct: h.distinct,
                        // rect: rect(node, h.rect)
                    };
                };
            }

            // TODO
            function rulesToString(rules) {
                var newRules = [];

                rules.forEach(function(h) {
                    var newInfo = {}
                    Object.keys(h).forEach(function(key) {
                        if (key == 'r') {
                            newInfo.r = h.r instanceof RegExp ?
                                h.r.toString() : null;
                        }

                    });
                });
            }

            return {
                parseNode: parseNode,
                findInfo: findInfo,
                loadRule: loadRule,
            }

        })();

        // ------------------- run -------------------------

        var matchedRule,
            URL=location.href,
            floatBar;

        function findPic(img){
            //获取包裹img的第一个a元素。
            var imgPN=img;
            var imgPA;
            while(imgPN=imgPN.parentElement){
                if(imgPN.nodeName=='A'){
                    imgPA=imgPN;
                    break;
                };
            };

            var iPASrc=imgPA? imgPA.href : '';
            //base64字符串过长导致正则匹配卡死浏览器
            var base64Img=/^data:[^;]+;base64,/i.test(img.src);
            var src,  // 大图地址
                srcs,  // 备用的大图地址
                type,  // 类别
                noActual = false, //没有原图
                imgSrc = img.src||img.srcset,  // img 节点的 src
                xhr,
                description;  // 图片的注释

            if(!src && matchedRule && !base64Img){// 通过高级规则获取.
                // 排除
                if (matchedRule.exclude && matchedRule.exclude.test(imgSrc)) {
                    return;
                } else {
                    try{
                        var newSrc=matchedRule.getImage.call(img,img,imgPA);
                        if(imgSrc!=newSrc) src=newSrc;
                    }catch(err){
                        throwErrorInfo(err);
                    }

                    if(src) {
                        if (Array.isArray(src)) {
                            srcs = src;
                            src = srcs.shift();
                        }

                        type = 'rule';
                        xhr = matchedRule.xhr;

                        if (matchedRule.lazyAttr) {  // 由于采用了延迟加载技术，所以图片可能为 loading.gif
                            imgSrc = img.getAttribute(matchedRule.lazyAttr) || img.src;
                        }

                        if (matchedRule.description) {
                            var node = getElementMix(matchedRule.description, img);
                            if (node) {
                                description = node.getAttribute('title') || node.textContent;
                            }
                        }
                    }
                }
            };

            if (!src && !base64Img) { // 兼容 MPIV 脚本规则
                var info = MPIV.parseNode(img);
                if (info && info.url && (info.url != imgSrc)) {
                    type = 'rule';
                    src = info.url;
                    srcs = info.urls;
                    if (info.q) {
                        xhr = {
                            q: info.q
                        };
                    }
                }
            }

            if(!src && !base64Img){//遍历通配规则
                tprules._find(function(rule,index,array){
                    try{
                        src=rule.call(img,img,imgPA);
                        if(src){
                            //console.log('匹配的通配规则',rule);
                            return true;
                        };
                    }catch(err){
                        throwErrorInfo(err);
                    };
                });
                if(src)type='tpRule';
            };

            if(!src && imgPA){//链接可能是一张图片...
                if(/\.(?:jpg|jpeg|png|gif|bmp)(\?[^\?]*)?$/i.test(iPASrc) && iPASrc!=img.src){
                    src=iPASrc;
                    srcs=[imgSrc];
                };
                if(src)type='scale';
            };

            var imgAS={//实际尺寸。
                h:img.naturalHeight,
                w:img.naturalWidth,
            };
            if(!src || src==imgSrc){//本图片是否被缩放.
                noActual=true;

                var imgCStyle=unsafeWindow.getComputedStyle(img);
                var imgCS={
                    h: parseFloat(imgCStyle.height),
                    w: parseFloat(imgCStyle.width),
                };
                if(!(imgAS.w==imgCS.w && imgAS.h==imgCS.h)){//如果不是两者完全相等,那么被缩放了.
                    if(imgAS.h > prefs.floatBar.minSizeLimit.h && imgAS.w > prefs.floatBar.minSizeLimit.w){//最小限定判断.
                        src=imgSrc;
                        type='scale';
                    }
                }else{
                    if(prefs.floatBar.forceShow.enabled && (imgCS.w>prefs.floatBar.forceShow.size.w && imgCS.h>prefs.floatBar.forceShow.size.h)){
                        src=imgSrc;
                        type='force';
                    }
                }
            };

            if(!src)return;
            if (imgAS.h < prefs.gallery.scaleSmallSize && imgAS.w < prefs.gallery.scaleSmallSize) {
                type = 'scaleSmall';
            }

            try{
                //src=decodeURIComponent(src);
            }catch(e){}
            if(!srcs && imgSrc!=src){
                srcs=[imgSrc];
            }
            var ret = {
                src: src,                  // 得到的src
                srcs: srcs,                // 多个 src，失败了会尝试下一个
                type: type,                // 通过哪种方式得到的
                imgSrc: imgSrc,            // 处理的图片的src
                iPASrc: iPASrc,            // 图片的第一个父a元素的链接地址
                sizeH:imgAS.h,
                sizeW:imgAS.w,

                noActual:noActual,
                xhr: xhr,
                description: description || '',

                img: img,                  // 处理的图片
                imgPA: imgPA,              // 图片的第一个父a元素
            };
            return ret;
        }

        function getMatchedRule() {
            var rule = siteInfo._find(function(site, index, array) {
                if (site.url && toRE(site.url).test(URL)) {
                    return true;
                }
            });

            rule = rule ? rule[0] : false;

            return rule;
        }

        var isFrame=window!=window.parent;
        var topWindowValid;//frameset的窗口这个标记为false
        var frameSentData;
        var frameSentSuccessData;
        function handleMessage(e){ // contentscript里面的message监听，监听来自别的窗口的数据。
            var data=e.data;
            if( !data || !data.messageID || data.messageID != messageID )return;//通信ID认证
            var source=e.source;
            //chrome中所有window窗口的引用都是undefined
            if(typeof source=='undefined' || source!==window){//来自别的窗口
                if(!isFrame){//顶层窗口
                    var command=data.command;
                    switch(command){
                        case 'open':{
                            var img=document.createElement('img');
                            img.src=data.src;

                            imgReady(img,{
                                ready:function(){
                                    LoadingAnimC.prototype.open.call({
                                        img:img,
                                        data:data.data,
                                        buttonType:data.buttonType,
                                        from:data.from,//来自哪个窗口
                                    });
                                },
                            });
                        }break;
                        case 'navigateToImg':{
                            var cusEvent=document.createEvent('CustomEvent');
                            cusEvent.initCustomEvent('pv-navigateToImg',false,false,data.exist);
                            document.dispatchEvent(cusEvent);
                        }break;
                        case 'topWindowValid':{
                            if(data.from)
                            window.postMessage({
                                messageID:messageID,
                                command:'topWindowValid_frame',
                                valid:document.body.nodeName!='FRAMESET',
                                to:data.from,
                            },'*');
                        }break;
                    };

                }else{//frame窗口
                    var command=data.command;
                    switch(command){
                        case 'navigateToImg':{

                            if(!frameSentData.unique){
                                var unique=GalleryC.prototype.unique(frameSentData);
                                frameSentData=unique.data;
                                frameSentData.unique=true;
                            };
                            var targetImg=frameSentData[data.index].img;
                            var exist=(document.documentElement.contains(targetImg) && unsafeWindow.getComputedStyle(targetImg).display!='none');

                            if(exist){
                                if(gallery && gallery.shown){//frame里面也打开了一个呢。
                                    gallery.minimize();
                                };
                                setTimeout(function(){
                                    GalleryC.prototype.navigateToImg(targetImg);
                                    flashEle(targetImg);
                                },0);
                            };
                            window.postMessage({
                                messageID:messageID,
                                command:'navigateToImg',
                                exist:exist,
                                to:data.from,
                            },'*');
                        }break;
                        case 'sendFail':{
                            frameSentData=frameSentSuccessData;//frameSentData重置为发送成功的数据。
                        }break;
                        case 'topWindowValid_frame':{
                            var cusEvent=document.createEvent('CustomEvent');
                            cusEvent.initCustomEvent('pv-topWindowValid',false,false,data.valid);
                            document.dispatchEvent(cusEvent);
                        }break;
                    };
                };

            };
        }

        //页面脚本用来转发消息
        //原因chrome的contentscript无法访问非自己外的别的窗口。都会返回undefined，自然也无法向其他的窗口发送信息,这里用pagescript做个中间代理
        //通讯逻辑..A页面的contentscript发送到A页面的pagescript，pagescript转交给B页面的contentscript
        var messageID='pv-0.5106795670312598';

        function addPageScript() {

            var pageScript=document.createElement('script');
            pageScript.id = 'picviewer-page-script';

            var pageScriptText=function(messageID){
                var frameID=Math.random();
                var frames={
                    top:window.top,
                };

                window.addEventListener('message',function(e){
                    var data=e.data;
                    if( !data || !data.messageID || data.messageID != messageID )return;//通信ID认证
                    var source=e.source;
                    if(source===window){//来自contentscript,发送出去,或者干嘛。
                        if(data.to){
                            data.from=frameID;
                            frames[data.to].postMessage(data,'*');
                        }else{
                            switch(data.command){
                                case 'getIframeObject':{
                                    var frameWindow=frames[data.windowId];
                                    var iframes=document.getElementsByTagName('iframe');
                                    var iframe;
                                    var targetIframe;
                                    for(var i=iframes.length-1 ; i>=0 ; i--){
                                        iframe=iframes[i];
                                        if(iframe.contentWindow===frameWindow){
                                            targetIframe=iframe;
                                            break;
                                        };
                                    };
                                    var cusEvent=document.createEvent('CustomEvent');
                                    cusEvent.initCustomEvent('pv-getIframeObject',false,false,targetIframe);
                                    document.dispatchEvent(cusEvent);
                                }break;
                            };
                        };

                    }else{//来自别的窗口的，contentscript可以直接接收，这里保存下来自的窗口的引用
                        frames[data.from]=source;
                    };
                },true)
            };

            pageScript.textContent='(' + pageScriptText.toString() + ')('+ JSON.stringify(messageID) +')';
            document.head.appendChild(pageScript);
        }

        function clikToOpen(data){
            var preventDefault = matchedRule.clikToOpen.preventDefault;

            function mouseout(){
                document.removeEventListener('mouseout',mouseout,true);
                document.removeEventListener('click',click,true);
                if(data.imgPA && preventDefault){
                    data.imgPA.removeEventListener('click',clickA,false);
                };
            };

            function click(e){
                if(e.button!=0)return;
                FloatBarC.prototype.open.call({
                    data:data,
                },
                                              e,
                                              matchedRule.clikToOpen.type);
            };

            function clickA(e){//阻止a的默认行为
                e.preventDefault();
            };

            document.addEventListener('click',click,true);

            if(data.imgPA && preventDefault){
                data.imgPA.addEventListener('click',clickA,false);
            };

            setTimeout(function(){//稍微延时。错开由于css hover样式发生的out;
                document.addEventListener('mouseout',mouseout,true);
            },100);

            return function(){
                mouseout();
            };
        }

        //监听 mouseover
        var canclePreCTO;
        function globalMouseoverHandler(e){

            if(e.altKey)return;
            //console.log(e);
            if(galleryMode)return;//库模式全屏中......

            var target = e.target;

            if (!target || !target.classList || target.classList.contains('pv-pic-ignored')) {
                return;
            }

            // 扩展模式，检查前面一个是否为 img
            if (target.nodeName != 'IMG' && matchedRule && matchedRule.ext) {
                var _type = typeof matchedRule.ext;
                if (_type == 'string') {
                    switch (matchedRule.ext) {
                        case 'previous':
                            target = target.previousElementSibling;
                            break;
                        case 'previous-2':
                            target = target.previousElementSibling &&
                                target.previousElementSibling.previousElementSibling;
                            break;
                    }
                } else if (_type == 'function') {
                    try {
                        target = matchedRule.ext(target);
                    } catch(ex) {
                        throwErrorInfo(ex);
                    }

                    if (!target) return;
                }
            }

            var result;
            if (target.nodeName != 'IMG' && typeof target.className === 'string' && target.className.indexOf("pv-float-bar")==-1){
                var targetStyle=getComputedStyle(target);
                if(prefs.floatBar.listenBg && targetStyle.backgroundImage && /^url/.test(targetStyle.backgroundImage) && targetStyle.backgroundImage.indexOf("about:blank")==-1 && targetStyle.width.replace("px","")>prefs.floatBar.minSizeLimit.w && targetStyle.height.replace("px","")>prefs.floatBar.minSizeLimit.h){
                    var src=targetStyle.backgroundImage.replace(/url\(["'](.*)["']\)/,"$1"),nsrc=src,noActual=true,type="scale";
                    var img={src:src};
                    result = {
                        src: nsrc,
                        type: type,
                        imgSrc: src,
                        noActual:noActual,
                        img: target
                    };
                }else if(target.children.length<=2 && target.querySelectorAll("img").length==1){
                    target=target.children[0];
                }else if(target.parentNode){
                    if(target.parentNode.nodeName=='IMG'){
                        target=target.parentNode;
                    }else{
                        if(unsafeWindow.getComputedStyle(target).position=="absolute"){
                            var imgChild=target.parentNode.querySelectorAll('img');
                            if(imgChild.length==1){
                                target=imgChild[0];
                            }
                        }
                    }
                }
            }

            if (!target || !result && target.nodeName != 'IMG') return;

            if (!result) {
                result = findPic(target);
            }

            if(result){
                if(!floatBar){
                    floatBar=new FloatBarC();
                };
                if(result.type=='rule' && matchedRule.clikToOpen && matchedRule.clikToOpen.enabled){
                    if(canclePreCTO){//取消上次的，防止一次点击打开多张图片
                        canclePreCTO();
                    };
                    canclePreCTO=clikToOpen(result);
                };
                floatBar.start(result);//出现悬浮工具栏
            };
        }

        function isKeyDownEffectiveTarget(target) {
            var localName = target.localName;

            // 确保光标不是定位在文字输入框或选择框
            if (localName == 'textarea' || localName == 'input' || localName == 'select')
                return false;

            // 视频播放器
            if (localName == 'object' || localName == 'embed')
                return false;

            // 百度贴吧回复输入的问题
            if (target.getAttribute('contenteditable') == 'true')
                return false;

            return true;
        }

        function openGallery(){
            if(!gallery){
                gallery=new GalleryC();
            }
            gallery.data=[];
            var allData=gallery.getAllValidImgs();
            if(allData.length<1)return true;
            gallery.data=allData;
            gallery.load(gallery.data);
        }

        function keydown(event) {
            var key = String.fromCharCode(event.keyCode).toLowerCase();
            if(event.ctrlKey && key==prefs.floatBar.keys['gallery']){
                openGallery();
                event.stopPropagation();
                event.preventDefault();
                return true;
            }else{
                if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey)
                    return;

                if (floatBar && floatBar.shown && isKeyDownEffectiveTarget(event.target)) {
                    Object.keys(prefs.floatBar.keys).some(function(action) {
                        if (action == 'enable') return;
                        if (key == prefs.floatBar.keys[action]) {
                            floatBar.open(null, action);
                            event.stopPropagation();
                            event.preventDefault();
                            return true;
                        }
                    })
                }
            }
        }

        matchedRule = getMatchedRule();

        // 添加自定义样式
        if (matchedRule && matchedRule.css) {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'gm-picviewer-site-style';
            style.textContent = matchedRule.css;
            document.head.appendChild(style);
        }

        MPIV.loadRule();

        window.addEventListener('message', handleMessage, true);

        addPageScript();

        document.addEventListener('mouseover', globalMouseoverHandler, true);

        var debug;  // 调试函数

        GM_config.init({
            id: 'pv-prefs',
            title: GM_config.create('a', {
                href: 'https://greasyfork.org/zh-CN/scripts/24204-picviewer-ce',
                target: '_blank',
                textContent: 'Picviewer CE+ '+i18n("config"),
                title: i18n("openHomePage")
            }),
            isTabs: true,
            skin: 'tab',
            frameStyle: {
                width: '480px',
                zIndex:'2147483648',
            },
            css: [
                "#pv-prefs input[type='text'] { width: 50px; } ",
                "#pv-prefs input[type='number'] { width: 50px; } ",
                "#pv-prefs .inline .config_var { margin-left: 6px; }",
                "#pv-prefs label.size { width: 205px; }",
                "#pv-prefs span.sep-x { margin-left: 0px !important; }",
                "#pv-prefs label.sep-x { margin-right: 5px; }",
                "#pv-prefs label.floatBar-key { margin-left: 20px; width: 100px; }",
                "#pv-prefs input.color { width: 120px; }",
                "#pv-prefs input.order { width: 250px; }",
            ].join('\n'),
            fields: {
                // 浮动工具栏
                'floatBar.position': {
                    label: i18n("position"),
                    type: 'select',
                    options: {
                        'top left': i18n("topLeft"),
                        'top right': i18n("topRight"),
                        'bottom right': i18n("bottomRight"),
                        'bottom left': i18n("bottomLeft"),
                        'top center': i18n("topCenter"),
                        'bottom center': i18n("bottomCenter"),
                        'hide': i18n("hide")
                    },
                    "default": prefs.floatBar.position,
                    section: [i18n("floatBar")],
                },
                'floatBar.showDelay': {
                    label: i18n("showDelay"),
                    type: 'int',
                    "default": prefs.floatBar.showDelay,
                    after: ' '+i18n("ms"),
                },
                'floatBar.hideDelay': {
                    label: i18n("hideDelay"),
                    type: 'int',
                    className: 'hideDelay',
                    "default": prefs.floatBar.hideDelay,
                    after: ' '+i18n("ms")
                },
                'floatBar.forceShow.size.w': {
                    label: i18n("forceShow"),
                    type: 'int',
                    className: 'size',
                    "default": prefs.floatBar.forceShow.size.w,
                    title: i18n("forceShowTip"),
                    line: 'start',
                },
                'floatBar.forceShow.size.h': {
                    label: ' x ',
                    type: 'int',
                    className: 'sep-x',
                    after: ' '+i18n("px"),
                    "default": prefs.floatBar.forceShow.size.h,
                    line: 'end',
                },
                'floatBar.minSizeLimit.w': {
                    label: i18n("minSizeLimit"),
                    type: 'int',
                    className: 'size',
                    "default": prefs.floatBar.minSizeLimit.w,
                    title: i18n("minSizeLimitTip"),
                    line: 'start',
                },
                'floatBar.minSizeLimit.h': {
                    label: ' x ',
                    type: 'int',
                    className: 'sep-x',
                    after: ' '+i18n("px"),
                    "default": prefs.floatBar.minSizeLimit.h,
                    line: 'end',
                },
                'floatBar.butonOrder': {
                    label: i18n("butonOrder"),
                    type: 'text',
                    className: 'order',
                    "default": prefs.floatBar.butonOrder.join(', '),
                },
                'floatBar.listenBg': {
                    label: i18n("listenBg"),
                    type: 'checkbox',
                    "default": prefs.floatBar.listenBg,
                    title: i18n("listenBgTip")
                },
                // 按键
                'floatBar.keys.enable': {
                    label: i18n("keysEnable"),
                    type: 'checkbox',
                    "default": prefs.floatBar.keys.enable
                },
                'floatBar.keys.actual': {
                    label: i18n("keysActual"),
                    type: 'text',
                    className: 'floatBar-key',
                    "default": prefs.floatBar.keys.actual,
                    title: i18n("keysActualTip")
                },
                /*'floatBar.keys.search': {
                    label: i18n("keysSearch"),
                    type: 'text',
                    className: 'floatBar-key',
                    "default": prefs.floatBar.keys.search,
                    title: i18n("keysSearchTip")
                },*/
                'floatBar.keys.current': {
                    label: i18n("keysCurrent"),
                    type: 'text',
                    className: 'floatBar-key',
                    "default": prefs.floatBar.keys.current,
                    title: i18n("keysCurrentTip")
                },
                'floatBar.keys.magnifier': {
                    label: i18n("keysMagnifier"),
                    type: 'text',
                    className: 'floatBar-key',
                    "default": prefs.floatBar.keys.magnifier,
                    title: i18n("keysMagnifierTip")
                },
                'floatBar.keys.gallery': {
                    label: i18n("keysGallery"),
                    type: 'text',
                    className: 'floatBar-key',
                    "default": prefs.floatBar.keys.gallery,
                    title: i18n("keysGalleryTip")
                },

                // 放大镜
                'magnifier.radius': {
                    label: i18n("magnifierRadius"),
                    type: 'int',
                    "default": prefs.magnifier.radius,
                    section: [i18n("magnifier")],
                    after: ' '+i18n("px")
                },
                'magnifier.wheelZoom.enabled': {
                    label: i18n("magnifierWheelZoomEnabled"),
                    type: 'checkbox',
                    "default": prefs.magnifier.wheelZoom.enabled,
                },
                'magnifier.wheelZoom.range': {
                    label: i18n("magnifierWheelZoomRange"),
                    type: 'textarea',
                    "default": prefs.magnifier.wheelZoom.range.join(', '),
                },

                // 图库
                'gallery.fitToScreen': {
                    label: i18n("galleryFitToScreen"),
                    type: 'checkbox',
                    "default": prefs.gallery.fitToScreen,
                    section: [i18n("gallery")],
                    title: i18n("galleryFitToScreenTip"),
                    line: 'start',
                },
                'gallery.fitToScreenSmall': {
                    label: i18n("galleryFitToScreenSmall"),
                    type: 'checkbox',
                    "default": prefs.gallery.fitToScreenSmall,
                    line: 'end',
                },
                'gallery.scrollEndToChange': {
                    label: i18n("galleryScrollEndToChange"),
                    type: 'checkbox',
                    "default": prefs.gallery.scrollEndToChange,
                    title: i18n("galleryScrollEndToChangeTip")
                },
                'gallery.exportType': {
                    label: i18n("galleryExportType"),
                    type: 'select',
                    options: {
                        'grid': i18n("grid"),
                        'gridBig': i18n("gridBig"),
                        'list': i18n("list")
                    },
                    "default": prefs.gallery.exportType,
                },
                'gallery.loadMore': {
                    label: i18n("galleryAutoLoad"),
                    type: 'checkbox',
                    "default": prefs.gallery.loadMore
                },
                'gallery.loadAll': {
                    label: i18n("galleryLoadAll"),
                    type: 'checkbox',
                    "default": prefs.gallery.loadAll,
                    title: i18n("galleryLoadAllTip")
                },
                'gallery.scaleSmallSize': {
                    label: i18n("galleryScaleSmallSize1"),
                    type: 'int',
                    "default": prefs.gallery.scaleSmallSize,
                    after: i18n("galleryScaleSmallSize2")
                },
                'gallery.showSmallSize':{
                    label: i18n("galleryShowSmallSize"),
                    type: 'checkbox',
                    "default": prefs.gallery.showSmallSize
                },
                'gallery.transition': {
                    label: i18n("galleryTransition"),
                    type: 'checkbox',
                    "default": prefs.gallery.transition
                },
                'gallery.sidebarPosition': {
                    label: i18n("gallerySidebarPosition"),
                    type: 'select',
                    options: {
                        'bottom': i18n("bottom"),
                        'right': i18n("right"),
                        'left': i18n("left"),
                        'top': i18n("top")
                    },
                    "default": prefs.gallery.sidebarPosition,
                    line: 'start',
                },
                'gallery.sidebarSize': {
                    label: i18n("gallerySidebarSize"),
                    type: 'int',
                    "default": prefs.gallery.sidebarSize,
                    title: i18n("gallerySidebarSizeTip"),
                    after: ' '+i18n("px"),
                    line: 'end',
                },
                'gallery.max': {
                    label: i18n("galleryMax1"),
                    type: 'number',
                    "default": prefs.gallery.max,
                    after: i18n("galleryMax2")
                },
                'gallery.autoZoom': {
                    label: i18n("galleryAutoZoom"),
                    type: 'checkbox',
                    "default": prefs.gallery.autoZoom,
                    title: i18n("galleryAutoZoomTip")
                },
                'gallery.descriptionLength': {
                    label: i18n("galleryDescriptionLength1"),
                    type: 'int',
                    "default": prefs.gallery.descriptionLength,
                    after: i18n("galleryDescriptionLength2")
                },
                'gallery.autoOpenSites': {
                    label: i18n("galleryAutoOpenSites"),
                    type: 'textarea',
                    "default": prefs.gallery.autoOpenSites
                },
                'gallery.editSite': {
                    label: i18n("galleryEditSite"),
                    type: 'select',
                    options: {
                        'Pixlr': 'Pixlr',
                        'Toolpic': 'Toolpic'
                    },
                    "default": prefs.gallery.editSite,
                },

                // 图片窗口
                'imgWindow.fitToScreen': {
                    label: i18n("imgWindowFitToScreen"),
                    type: 'checkbox',
                    "default": prefs.imgWindow.fitToScreen,
                    section: [i18n("imgWindow")],
                    title: i18n("imgWindowFitToScreenTip"),
                },
                'imgWindow.close.defaultTool': {
                    label: i18n("imgWindowDefaultTool"),
                    type: 'select',
                    options: {
                        'hand': i18n("hand"),
                        'rotate': i18n("rotate"),
                        'zoom': i18n("zoom"),
                    },
                    "default": prefs.imgWindow.close.defaultTool,
                },
                'imgWindow.close.escKey': {
                    label: i18n("imgWindowEscKey"),
                    type: 'checkbox',
                    "default": prefs.imgWindow.close.escKey,
                    line: 'start',
                },
                'imgWindow.close.dblClickImgWindow': {
                    label: i18n("imgWindowDblClickImgWindow"),
                    type: 'checkbox',
                    "default": prefs.imgWindow.close.dblClickImgWindow,
                },
                'imgWindow.close.clickOutside': {
                    label: i18n("imgWindowClickOutside"),
                    type: 'select',
                    options: {
                        '': i18n("none"),
                        'click': i18n("click"),
                        'dblclick': i18n("dblclick"),
                    },
                    "default": prefs.imgWindow.close.clickOutside,
                    title: i18n("imgWindowClickOutsideTip"),
                    line: 'end',
                },
                'imgWindow.overlayer.shown': {
                    label: i18n("imgWindowOverlayerShown"),
                    type: 'checkbox',
                    "default": prefs.imgWindow.overlayer.shown,
                    line: 'start',
                },
                'imgWindow.overlayer.color': {
                    label: i18n("imgWindowOverlayerColor"),
                    type: 'text',
                    className: 'color',
                    "default": prefs.imgWindow.overlayer.color,
                    line: 'end'
                },
                'imgWindow.shiftRotateStep': {
                    label: i18n("imgWindowShiftRotateStep1"),
                    type: 'int',
                    "default": prefs.imgWindow.shiftRotateStep,
                    after: i18n("imgWindowShiftRotateStep2")
                },
                'imgWindow.zoom.mouseWheelZoom': {
                    label: i18n("imgWindowMouseWheelZoom"),
                    type: 'checkbox',
                    "default": prefs.imgWindow.zoom.mouseWheelZoom,
                },
                'imgWindow.zoom.range': {
                    label: i18n("imgWindowZoomRange"),
                    type: 'textarea',
                    "default": prefs.imgWindow.zoom.range.join(', '),
                    title: i18n("imgWindowZoomRangeTip"),
                    attr: {
                        "spellcheck": "false"
                    }
                },

                // 其它
                'waitImgLoad': {
                    label: i18n("waitImgLoad"),
                    type: 'checkbox',
                    "default": prefs.waitImgLoad,
                    section: [i18n("others")],
                    title: i18n("waitImgLoadTip")
                },
                'debug': {
                    label: i18n("debug"),
                    type: 'checkbox',
                    "default": prefs.debug
                },
                /*'firstEngine': {
                    label: i18n("firstEngine"),
                    type: 'select',
                    options: {
                        "Tineye":"Tineye",
                        "Google":"Google",
                        "Baidu":"Baidu"
                    },
                    "default": prefs.firstEngine,
                },*/
            },
            events: {
                open: function(doc, win, frame) {
                },
                save: function() {
                    loadPrefs();
                }
            }
        });


        GM_registerMenuCommand('Picviewer CE+ '+i18n("config"), openPrefs);

        loadPrefs();

        if(prefs.gallery.autoOpenSites && new RegExp(prefs.gallery.autoOpenSites).test(location.href)){
            setTimeout(function(){openGallery();},2000);
        }

        // 注册按键
        if (prefs.floatBar.keys.enable) {
            document.addEventListener('keydown', keydown, false);
        }

        function openPrefs() {
            GM_config.open();
        }

        function loadPrefs() {
            // 根据 GM_config 的 key 载入设置到 prefs
            Object.keys(GM_config.fields).forEach(function(keyStr) {
                var keys = keyStr.split('.');
                var lastKey = keys.pop();

                var lastPref = keys.reduce(function(previousValue, curKey) {
                    return previousValue[curKey];
                }, prefs) || prefs;

                var value = GM_config.get(keyStr);
                if (typeof value != 'undefined') {
                    // 特殊的
                    if (keyStr == 'magnifier.wheelZoom.range' || keyStr == 'imgWindow.zoom.range') {
                        lastPref[lastKey] = value.split(/[,，]\s*/).map(function(s) { return parseFloat(s)});
                    } else if(keyStr == 'floatBar.butonOrder') {
                        lastPref[lastKey] = value.replace(/^\s*|\s*$/g,"").split(/\s*[,，]\s*/);
                    } else {
                        lastPref[lastKey] = value;
                    }
                }
            });

            debug = prefs.debug ? console.debug.bind(console) : function() {};
        }

    };

    function init2(){
        init(topObject,window,document,arrayFn,envir,storage,unsafeWindow);
    };


    //大致检测运行环境
    var envir={
        ie:typeof document.documentMode == 'number',
        firefox:typeof XPCNativeWrapper == 'function',
        opera:!!window.opera,
        chrome:!!window.chrome,
    };

    //ie的话，不支持 < ie9的版本
    if(envir.ie && document.documentMode < 9){
        return;
    };


    var arrayFn=(function(){
        //Array的某些方法对所有的类数组都有效，比如HTMLCollection,NodeList,DOMStringList.....

        //添加一个当函数返回true时，返回[array[index],index]，并且跳出循环的方法
        //类似做到 for 循环，在满足条件的时候直接break跳出的效果。
        if(typeof Array.prototype['_find']!='function'){
            Object.defineProperty(Array.prototype,'_find',{
                value:function(callback , thisArg){
                    if (this == null){
                        throw new TypeError( "this is null or not defined" );
                    };

                    if(typeof callback != 'function') {
                        throw new TypeError( callback + " is not a function" );
                    };

                    var i = 0,
                        l = this.length,
                        value,
                        hasOwnProperty=Object.prototype.hasOwnProperty
                    ;


                    while(i<l){
                        if(hasOwnProperty.call(this,i)){
                            value = this[i];
                            if(callback.call( thisArg, value, i, this )===true){
                                return [value,i,this];
                            };
                        };
                        i++;
                    };
                },
                writable:true,
                enumerable:false,//与原生方法一样不可枚举，维护网页和谐。。。
                configurable:true,
            });
        };

        var arrayProto=Array.prototype;
        return {
            _find:arrayProto._find,
            slice:arrayProto.slice,
            forEach:arrayProto.forEach,
            some:arrayProto.some,
            every:arrayProto.every,
            map:arrayProto.map,
            filter:arrayProto.filter,
            indexOf:arrayProto.indexOf,
            lastIndexOf:arrayProto.lastIndexOf,
        };

    })();


    var storage={
        supportGM: typeof GM_getValue=='function' && typeof GM_getValue('a','b')!='undefined',//chrome的gm函数式空函数
        mxAppStorage:(function(){//傲游扩展储存接口
            try{
                return window.external.mxGetRuntime().storage;
            }catch(e){
            };
        })(),
        operaUJSStorage:(function(){//opera userjs全局存储接口
            try{
                return window.opera.scriptStorage;
            }catch(e){
            };
        })(),
        setItem:function(key,value){
            if(this.operaUJSStorage){
                this.operaUJSStorage.setItem(key,value);
            }else if(this.mxAppStorage){
                this.mxAppStorage.setConfig(key,value);
            }else if(this.supportGM){
                GM_setValue(key,value);
            }else if(window.localStorage){
                window.localStorage.setItem(key,value);
            };
        },
        getItem:function(key){
            var value;
            if(this.operaUJSStorage){
                value=this.operaUJSStorage.getItem(key);
            }else if(this.mxAppStorage){
                value=this.mxAppStorage.getConfig(key);
            }else if(this.supportGM){
                value=GM_getValue(key);
            }else if(window.localStorage){
                value=window.localStorage.getItem(key);
            };
            return value;
        },
    };

    function getUrl(url, callback, onError){
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            onload: callback,
            onerror: onError
        });
    }

    function setSearchState(words,imgCon){
        if(words)console.info(words);
        var searchState = (imgCon?imgCon:document).querySelector('.pv-pic-search-state');
        if(searchState)searchState.innerHTML=words;
    }

    var searchSort=["Tineye","Google","Baidu"];
    function sortSearch(){
        for(var i=0;i<searchSort.length;i++){
            if(searchSort[i]==prefs.firstEngine){
                searchSort.splice(i,1);
                break;
            }
        }
        searchSort.unshift(prefs.firstEngine);
    }

    function searchImgByImg(imgSrc, imgCon, callBack, onError, noneResult, searchFrom){
        let srcs=[];
        var searchBaidu=function(){
            setSearchState(i18n("beginSearchImg","百度"),imgCon);
            getUrl("http://image.baidu.com/n/same?queryImageUrl="+encodeURIComponent(imgSrc)+"&isguessword=1&rn=30&fr=pc&pn=0&sort=size", function(d){
                let baiduJson;
                try{
                    baiduJson=JSON.parse(d.responseText);
                }catch(e){
                    setSearchState(i18n("findNoPic"),imgCon);
                    setTimeout(function(){
                        setSearchState("",imgCon);
                    },2000);
                    searchNext();
                    return;
                }
                if(baiduJson.data[0]){
                    srcs=[];
                    for(let imgData of baiduJson.data){
                        if(srcs.length>2)break;
                        srcs.push(imgData.objURL);
                    }
                    setSearchState(i18n("findOverBeginLoad",["百度",srcs.length]),imgCon);
                    callBackFun(srcs);
                }else{
                    searchNext();
                    return;
                }
            }, onError);
        };
        var searchGoogle=function(){
            setSearchState(i18n("beginSearchImg","Google"),imgCon);
            getUrl("https://www.google.com/searchbyimage?safe=off&image_url="+encodeURIComponent(imgSrc), function(d){
                let googleHtml=document.implementation.createHTMLDocument('');
                googleHtml.documentElement.innerHTML = d.responseText;
                let sizeUrl=googleHtml.querySelector("div.card-section>div>div>span.gl>a");
                if(sizeUrl){
                    getUrl("https://www.google.com"+sizeUrl.getAttribute("href"), function(d){
                        googleHtml.documentElement.innerHTML = d.responseText;
                        let imgs=googleHtml.querySelectorAll("div.rg_meta");
                        if(imgs.length==0){searchNext();return;}
                        srcs=[];
                        for(var i=0;i<imgs.length;i++){
                            if(srcs.length>2)break;
                            let jsonData=JSON.parse(imgs[i].innerHTML);
                            srcs.push(jsonData.ou);
                        }
                        setSearchState(i18n("findOverBeginLoad",["Google",srcs.length]),imgCon);
                        callBackFun(srcs);
                    }, onError);
                }else{
                    searchNext();
                }
            }, onError);
        };
        var searchTineye=function(){
            setSearchState(i18n("beginSearchImg","Tineye"),imgCon);
            getUrl("https://www.tineye.com/search?url="+encodeURIComponent(imgSrc)+"&sort=size", function(d){
                let tineyeHtml=document.implementation.createHTMLDocument('');
                tineyeHtml.documentElement.innerHTML = d.responseText;
                let searchImg=tineyeHtml.querySelectorAll(".match-details>div.match:first-of-type>p.image-link:first-of-type>a");
                if(searchImg.length>0){
                    srcs=[];
                    for(var i=0;i<searchImg.length;i++){
                        if(srcs.length>2)break;
                        srcs.push(searchImg[i].href);
                    }
                    setSearchState(i18n("findOverBeginLoad",["Tineye",srcs.length]),imgCon);
                    callBackFun(srcs);
                }else{
                    searchNext();
                }
            }, onError);
        };
        var searchNext=function(){
            searchFrom++;
            if(searchFrom<=searchSort.length)switchSearch();
            else{
                if(noneResult)noneResult();
                setSearchState(i18n("findNoPic"),imgCon);
                setTimeout(function(){
                    setSearchState("",imgCon);
                },2000);
            }
        };
        var callBackFun=function(srcs){
            callBack(srcs, searchFrom);
        };
        if(!searchFrom)searchFrom=1;
        var switchSearch=function(){
            switch(searchSort[searchFrom-1]){
                case "Baidu":
                    searchBaidu();
                    break;
                case "Google":
                    searchGoogle();
                    break;
                case "Tineye":
                    searchTineye();
                    break;
                default:
                    searchTineye();
                    break;
            }
        };
        switchSearch();
    }

    init2();

})(this,window,document,(typeof unsafeWindow=='undefined'? window : unsafeWindow));