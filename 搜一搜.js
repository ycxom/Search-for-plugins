import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'
import { segment } from "oicq";
import puppeteer, { connect } from 'puppeteer';
const proxyChain = import('proxy-chain');
//代码小白。。。能用就行哈，求大佬指点
//打开市面上几乎...（我的功能非常简单...）
//启动时记得先修改下面的代理地址和浏览器地址，以防出现错误

//千万不要忘记pnpm i puppeteer - w 和pnpm i proxy-chain -w，安装依赖！！！


//代理设置
const proxyUrl = "http://127.0.0.1:7890"
//chrome地址，edge也可以
const chromeF = "D:/chrome/chrome.exe"
//搜索提示词，个别网站访问较慢可以适当修改提示增加提示时间
const echo = `搜索中...`




export class example extends plugin {
    constructor () {
      super({
        /** 功能名称 */
        name: '全网一下',
        /** 功能描述 */
        dsc: '简单开发示例',
        /** https://oicqjs.github.io/oicq/#events */
        event: 'message',
        /** 优先级，数字越小等级越高 */
        priority: 5000,
        rule: [
          {
            /** 命令正则匹配 */
            reg: '^#搜一搜帮助$',
            /** 执行方法 */
            fnc: 'so_help'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#百度=(.*)$',
            /** 执行方法 */
            fnc: 'so_baidu'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#搜狗=(.*)$',
            /** 执行方法 */
            fnc: 'so_sg'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#duckduckgo=(.*)$',
            /** 执行方法 */
            fnc: 'so_duckduckgo'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#必应=(.*)$',
            /** 执行方法 */
            fnc: 'so_bing'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#google=(.*)$',
            /** 执行方法 */
            fnc: 'so_google'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#wiki=(.*)$',
            /** 执行方法 */
            fnc: 'so_wiki'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#ecosia=(.*)$',
            /** 执行方法 */
            fnc: 'so_ecosia'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#360=(.*)$',
            /** 执行方法 */
            fnc: 'so_360'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#2345=(.*)$',
            /** 执行方法 */
            fnc: 'so_2345'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#youtube=(.*)$',
            /** 执行方法 */
            fnc: 'so_ytb'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#推特找人=(.*)$',
            /** 执行方法 */
            fnc: 'so_twzr'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#科学打开网页=(.*)$',
            /** 执行方法 */
            fnc: 'so_fqopenwebui'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#打开网页=(.*)$',
            /** 执行方法 */
            fnc: 'so_openwebui'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#bilibili=(.*)$',
            /** 执行方法 */
            fnc: 'so_blbl'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#github=(.*)$',
            /** 执行方法 */
            fnc: 'so_github'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#动漫资源=(.*)$',
            /** 执行方法 */
            fnc: 'so_acg'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#ping=(.*)$',
            /** 执行方法 */
            fnc: 'so_ping'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#webcrawler=(.*)$',
            /** 执行方法 */
            fnc: 'so_webcrawler'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#aol=(.*)$',
            /** 执行方法 */
            fnc: 'so_aol'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#ask=(.*)$',
            /** 执行方法 */
            fnc: 'so_ask'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#yahoo=(.*)$',
            /** 执行方法 */
            fnc: 'so_yahoo'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#pornhub=(.*)$',
            /** 执行方法 */
            fnc: 'so_ph'
          },     
          {
            /** 命令正则匹配 */
            reg: '^#?#pixiv=(.*)$',
            /** 执行方法 */
            fnc: 'so_pixiv'
          }, 
          {
            /** 命令正则匹配 */
            reg: '^#?#sankaku=(.*)$',
            /** 执行方法 */
            fnc: 'so_sankaku'
          },         
          {
            /** 命令正则匹配 */
            reg: '^#?#亚马逊=(.*)$',
            /** 执行方法 */
            fnc: 'so_amz'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#niconico=(.*)$',
            /** 执行方法 */
            fnc: 'so_niconico'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#syosetu=(.*)$',
            /** 执行方法 */
            fnc: 'so_syosetu'
          },    
          {
            /** 命令正则匹配 */
            reg: '^#?#dmm=(.*)$',
            /** 执行方法 */
            fnc: 'so_dmm'
          },
          {
            /** 命令正则匹配 */
            reg: '^#?#cpu排行(.*)$',
            /** 执行方法 */
            fnc: 'so_cpuz'
          },   
          {
            /** 命令正则匹配 */
            reg: '^#?#cpu=(.*)$',
            /** 执行方法 */
            fnc: 'so_cpu'
          },   
          {
            /** 命令正则匹配 */
            reg: '^#?#gpu排行',
            /**""" 执行方法 */
            fnc: 'so_gpuz'
          },   
          {
            /** 命令正则匹配 */
            reg: '^#?#gpu=(.*)$',
            /**""" 执行方法 */
            fnc: 'so_gpu'
          },   
        ]
      })
    }
    
    async so_help(e) {
      /** e.msg 用户的命令消息 */
      logger.info("[用户命令]", e.msg);
      await this.reply(
        `- 输入【#搜一搜帮助】获得列表\n- 输入【#百度=】百度一下 \n- 例如：【#百度=114514】\n- 支持网页浏览 【#打开网页=输入网址】\n- 支持ping 【#ping=baidu.com】\n- 支持的搜索引擎 百度，必应，google，360，搜狗，推特找人，youtube，duckduckgo，wiki，ecosia, bilibili, github, 动漫资源, webcrawler, aol, ask, yahoo \n- 支持其他 pornhub,pixiv,sankaku，\n- 购物网 亚马逊，dmm（日本）\n- 动漫网 niconico（日本）\n- 小说网站 syosetu（日本）\n- 电脑硬件 cpu=，gpu=,cpu排行，gpu排行`
      );
    }
    
    /** e.msg 用户的命令消息 */
    async so_google(e) {
      logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#google=", "").trim();
      msg = msg.split(" ");
      await e.reply(echo) //提示词    
      const browser = await puppeteer.launch({
        args: [`--proxy-server=${proxyUrl}`],
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 740, height: 2400 }); //截图大小（页面大小）
      await page.goto('https://www.google.com/search?q='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      //const png = await page.screenshot();
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }

    /** e.msg 用户的命令消息 */
    async so_bing(e) {
       logger.info("[用户命令]", e.msg);
    let msg = e.msg.replace("#必应=", "").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词        
          const browser = await puppeteer.launch({
            args: [`--proxy-server=${proxyUrl}`],
          });
          const page = await browser.newPage();
          await page.setViewport({ width: 900, height: 3000 }); //截图大小（页面大小）
          await page.goto('https://www.bing.com/search?q='+msg[0]);
          //await new Promise((r) => setTimeout(r, 5000));
          const screenshotPath = `screenshot.png`;
          await page.screenshot({ path: screenshotPath });
          await browser.close();
      
          const imageSegment = segment.image(`file:///${screenshotPath}`);
          await e.reply(imageSegment)
        }
    
        /** e.msg 用户的命令消息 */
      async so_baidu(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#百度=", "").trim();
      msg = msg.split(" ");
      await e.reply(echo) //提示词    
      const browser = await puppeteer.launch({
        /*args: [`--proxy-server=${proxyUrl}`],*/
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 800, height: 2300 }); //截图大小（页面大小）
      await page.goto('https://www.baidu.com/s?wd='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
        /** e.msg 用户的命令消息 */
        async so_360(e) {
          logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#360=", "").trim();
        msg = msg.split(" ");
        await e.reply(echo) //提示词 
        const browser = await puppeteer.launch({
          /*args: [`--proxy-server=${proxyUrl}`],*/
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 2300 }); //截图大小（页面大小）
        await page.goto('https://www.so.com/s?q='+msg[0]);
        await new Promise((r) => setTimeout(r, 5000));
        const screenshotPath = `screenshot.png`;
        await page.screenshot({ path: screenshotPath });
        await browser.close();
    
        const imageSegment = segment.image(`file:///${screenshotPath}`);
        await e.reply(imageSegment)
      }
        /** e.msg 用户的命令消息 */
        async so_twzr(e) {
          logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#推特找人=", "").trim();
        msg = msg.split(" ");
        await e.reply(echo) //提示词      
        const browser = await puppeteer.launch({
          args: [`--proxy-server=${proxyUrl}`],
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 770, height: 2900 }); //截图大小（页面大小）
        await page.goto('https://www.twitter.com/'+msg[0]);
        await new Promise((r) => setTimeout(r, 5000));
        const screenshotPath = `screenshot.png`;
        await page.screenshot({ path: screenshotPath });
        await browser.close();
    
        const imageSegment = segment.image(`file:///${screenshotPath}`);
        await e.reply(imageSegment)
      }

        /** e.msg 用户的命令消息 */
        async so_ytb(e) {
          logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#youtube=","").trim();
        msg = msg.split(" ");
        await e.reply(echo) //提示词      
        const browser = await puppeteer.launch({
          headless: false,
          executablePath: chromeF,
          args: [`--proxy-server=${proxyUrl}`,
                '--disable-web-security', // 允许跨域
              ], 
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 800, height: 2400 }); //截图大小（页面大小）
        await page.goto('https://www.youtube.com/results?search_query='+msg[0]);
        //await new Promise((r) => setTimeout(r, 5000));
        const screenshotPath = `screenshot.png`;
        await page.screenshot({ path: screenshotPath });
        await browser.close();
    
        const imageSegment = segment.image(`file:///${screenshotPath}`);
        await e.reply(imageSegment)
      }
        /** e.msg 用户的命令消息 */
        async so_sg(e) {
          logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#搜狗=","").trim();
        msg = msg.split(" ");
        await e.reply(echo) //提示词      
        const browser = await puppeteer.launch({
          headless: false,
          executablePath: chromeF,
          args: [`--proxy-server=${proxyUrl}`,
                '--disable-web-security', // 允许跨域
              ], 
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 2300 }); //截图大小（页面大小）
        await page.goto('https://www.sogou.com/web?query='+msg[0]);
        //await new Promise((r) => setTimeout(r, 5000));
        const screenshotPath = `screenshot.png`;
        await page.screenshot({ path: screenshotPath });
        await browser.close();
    
        const imageSegment = segment.image(`file:///${screenshotPath}`);
        await e.reply(imageSegment)
      }
        /** e.msg 用户的命令消息 */
        async so_duckduckgo(e) {
          logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#duckduckgo=","").trim();
        msg = msg.split(" ");
        await e.reply(echo) //提示词      
        const browser = await puppeteer.launch({
          headless: false,
          executablePath: chromeF,
          args: [`--proxy-server=${proxyUrl}`,
                //'--disable-web-security', // 允许跨域
              ], 
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 2400 }); //截图大小（页面大小）
        await page.goto('https://duckduckgo.com/?q='+msg[0]);
        //await new Promise((r) => setTimeout(r, 5000));
        const screenshotPath = `screenshot.png`;
        await page.screenshot({ path: screenshotPath });
        await browser.close();
    
        const imageSegment = segment.image(`file:///${screenshotPath}`);
        await e.reply(imageSegment)
      }
       /** e.msg 用户的命令消息 */
        async so_wiki(e) {
          logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#wiki=","").trim();
        msg = msg.split(" ");
        await e.reply(echo) //提示词      
        const browser = await puppeteer.launch({
          //headless: false,
          //executablePath: chromeF,
          args: [`--proxy-server=${proxyUrl}`,
                //'--disable-web-security', // 允许跨域
              ], 
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 800, height: 1300 }); //截图大小（页面大小）
        await page.goto('https://zh.wikipedia.org/wiki/'+msg[0]);
        //await new Promise((r) => setTimeout(r, 5000));
        const screenshotPath = `screenshot.png`;
        await page.screenshot({ path: screenshotPath });
        await browser.close();
    
        const imageSegment = segment.image(`file:///${screenshotPath}`);
        await e.reply(imageSegment)
      }
       /** e.msg 用户的命令消息 */
       async so_ecosia(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#ecosia=","").trim();
      msg = msg.split(" ");
      await e.reply(echo) //提示词    
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: [//`--proxy-server=${proxyUrl}`,
              //'--disable-web-security', // 允许跨域
            ], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://www.ecosia.org/search?q='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_fqopenwebui(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#科学打开网页=","").trim();
      msg = msg.split(" ");
      await e.reply(`打开中...请骚等`) //提示词    
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`,
              '--disable-web-security', // 允许跨域
            ], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1599 }); //截图大小（页面大小）
      await page.goto(''+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_openwebui(e) {
        logger.info("[用户命令]", e.msg);
        let msg = e.msg.replace("#打开网页=","").trim();
        msg = msg.split(" ");
        await e.reply(`打开中...请骚等`) //提示词    
        const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: ['--proxy-bypass-list=*'], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1599 }); //截图大小（页面大小）
      await page.goto(''+msg[0]);
      await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close(); 
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_blbl(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#bilibili=","").trim();
      msg = msg.split(" ");
      await e.reply(echo) //提示词    
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: ['--proxy-bypass-list=*'], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://search.bilibili.com/all?keyword='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_github(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#github=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词    
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`,
              '--disable-web-security', // 允许跨域
            ], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://github.com/search?q='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
  
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
       }
       /** e.msg 用户的命令消息 */
       async so_acg(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#动漫资源=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://acg.rip/?term='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
    async so_ping(e) {
      logger.info("[用户命令]", e.msg);
    let msg = e.msg.replace("#ping=","").trim();
    msg = msg.split(" ");
    await e.reply(`ping中....请等待30秒`)
    const browser = await puppeteer.launch({
      //headless: false,
      //executablePath: chromeF,
      args: [`--proxy-server=${proxyUrl}`], 
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1380, height: 4200 }); //截图大小（页面大小）
    await page.goto('https://www.ping.cn/http/'+msg[0]);
    await new Promise((r) => setTimeout(r, 33000));
    const screenshotPath = `screenshot.png`;
    await page.screenshot({ path: screenshotPath });
    await browser.close();

    const imageSegment = segment.image(`file:///${screenshotPath}`);
    await e.reply(imageSegment)
  }
       /** e.msg 用户的命令消息 */
       async so_webcrawler(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#webcrawler=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1399 }); //截图大小（页面大小）
      await page.goto('https://www.webcrawler.com/serp?q='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_aol(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#aol=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1290, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://search.aol.com/aol/search;_ylt=Awr49uVf6lVkxqUXR7dpCWVH;_ylc=X1MDMTE5NzgwMzg4MQRfcgMyBGZyA2NvbXNlYXJjaARncHJpZANlNFlSdHIzY1JiZWppNHFpOEVnUG1BBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNzZWFyY2guYW9sLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDNARxdWVyeQMlRTYlODglOTElRTclOUElODQlRTQlQjglOTYlRTclOTUlOEMEdF9zdG1wAzE2ODMzNTIxNjY-?q='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_ask(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#ask=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1290, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://www.ask.com/web?q='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_yahoo(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#yahoo=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1290, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://search.yahoo.com/search;_ylt=Awr.0fVK6FVkH3oXNmZXNyoA;_ylc=X1MDMjc2NjY3OQRfcgMyBGZyA3NmcARmcjIDc2ItdG9wBGdwcmlkA2dWZGpFRTAxU0YyanFhaFhacUt1UEEEbl9yc2x0AzAEbl9zdWdnAzIEb3JpZ2luA3NlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzMEcXVlcnkDJUU4JTk0JUExJUU1JUJFJTkwJUU1JTlEJUE0BHRfc3RtcAMxNjgzMzUxNjQw?p='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    } 
       /** e.msg 用户的命令消息 */
       async so_ph(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#pornhub=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1290, height: 1599 }); //截图大小（页面大小）
      await page.goto('https://cn.pornhub.com/video/search?search='+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }    
       /** e.msg 用户的命令消息 */
       async so_pixiv(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#pixiv=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1290, height: 3599 }); //截图大小（页面大小）
      await page.goto('https://www.pixiv.net/tags/'+msg[0]);
      //await new Promise((r) => setTimeout(r, 5000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_sankaku(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#sankaku=","").trim();
      msg = msg.split(" ");
        await e.reply(echo +'请烧等30秒') //提示词
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1730, height: 1499 }); //截图大小（页面大小）
      await page.goto('https://sankaku.app/zh-CN?tags='+msg[0], {waitUntil: 'networkidle2'});
      await new Promise((r) => setTimeout(r, 20000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_amz(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#亚马逊=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1260, height: 2499 }); //截图大小（页面大小）
      await page.goto('https://www.amazon.cn/s?k='+msg[0], {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 20000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_niconico(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#niconico=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1045, height: 2499 }); //截图大小（页面大小）
      await page.goto('https://www.nicovideo.jp/search/'+msg[0], {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_syosetu(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#syosetu=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1065, height: 2499 }); //截图大小（页面大小）
      await page.goto('https://yomou.syosetu.com/search.php?word='+msg[0], {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_dmm(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#dmm=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1065, height: 2499 }); //截图大小（页面大小）
      await page.goto('https://www.dmm.com/search/=/searchstr='+msg[0], {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_cpuz(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#cpu排行").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1275, height: 4499 }); //截图大小（页面大小）
      await page.goto('https://valid.x86.fr/bench/1', {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_cpu(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#cpu=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        //headless: false,
        //executablePath: chromeF,
        //args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1275, height: 3465 }); //截图大小（页面大小）
      await page.goto('https://browser.geekbench.com/search?utf8=%E2%9C%93&q='+msg[0]+" "+msg[1], {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_gpuz(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#gpu排行").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        //args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1275, height: 4499 }); //截图大小（页面大小）
      await page.goto('https://technical.city/zh/video/rating', {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }
       /** e.msg 用户的命令消息 */
       async so_gpu(e) {
        logger.info("[用户命令]", e.msg);
      let msg = e.msg.replace("#gpu=","").trim();
      msg = msg.split(" ");
        await e.reply(echo) //提示词
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: chromeF,
        //args: [`--proxy-server=${proxyUrl}`], 
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1275, height: 1109 }); //截图大小（页面大小）
      await page.goto('https://technical.city/zh/search?q='+msg , {waitUntil: 'networkidle2'});
      //await new Promise((r) => setTimeout(r, 50000));
      const screenshotPath = `screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      await browser.close();
      
      const imageSegment = segment.image(`file:///${screenshotPath}`);
      await e.reply(imageSegment)
    }

    //💩山堆屎, 
  }
