# 搜一搜插件
## 将本插件放至`Yunzai-Bot\plugins\example`中
 - 然后在Yunzai根目录执行以下命令安装环境
```bash:numbers
pnpm i puppeteer -w
```
```bash:numbers
pnpm i proxy-chain -w
```
## **打开插件配置代理信息，浏览器地址**
```sh
//代理设置
const proxyUrl = "http://127.0.0.1:7890" //填写你自己的代理地址
//chrome地址，edge也可以
const chromeF = "D:/chrome/chrome.exe"   //填写你浏览器所在的地址，填写到二进制文件
```
- 使用命令
群聊发送`#搜一搜帮助`获取菜单
- 建议在配置好的电脑上运行，因为有些网页他会`真的打开浏览器进行截图`，假设你在玩游戏的时候，快乐的群友进行搜索....你的游戏画面你就会跑出一个浏览器，要是配置低的话，有些网页就会加载很久...
# 
- 答辩代码，求大佬指点
- 欢迎各位大佬的优化，也欢迎各位添加搜索、增加搜索地址
###
