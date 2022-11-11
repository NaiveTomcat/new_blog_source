const nav = require('./config/nav.js');

module.exports = {
  title: "NaiveTomcat's blog",
  description: 'NaiveTomcat的博客，什么都写，Linux使用&踩坑，深度学习，后端开发，程序语言等', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/vdoing-demo-blog/', // '/<github仓库名>/'， 默认'/' 
  head: [
    ['meta', { name: 'chartset', content: 'utf-8' }],
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '个人技术博客,后端,后端开发,技术文档,学习,面试,程序语言,编译器,go,c++,alolang,git,github,markdown'}],
    ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    ['meta', { name: "baidu-site-verification", content: "code-RQXBsNYt4g"},'/'],
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-DRRYLMDHK1",async: true}],
    ['script', {},
                " window.dataLayer = window.dataLayer || [];\
                function gtag(){dataLayer.push(arguments);}\
                gtag('js', new Date());\
                gtag('config', 'G-DRRYLMDHK1');"],
    ['script', { "crossorigin": "anonymous", src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2005126511162911" ,async: true}],

    
    //  ['script', { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ,async: true}],
    //  ['script', {},
    //             '(adsbygoogle = window.adsbygoogle || []).push({\
    //             google_ad_client: "ca-pub-000000000000",\
    //             enable_page_level_ads: true});'],
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },
  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/neko_avatar_blue.png', // 导航栏logo
    // repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: false, // 编辑链接
    editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    bodyBgImg: [
      '/img/20200507175828.jpeg',
      '/img/20200507175845.jpeg',
      '/img/20200507175846.jpeg'
    ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'NaiveTomcat', // 必需
      href: 'https://github.com/NaiveTomcat' // 可选的
    },
    blogger:{ // 博主信息，显示在首页侧边栏
      avatar: '/img/neko_avatar_blue.png',
      name: 'NaiveTomcat',
      slogan: '知行合一，格物致知'
    },
    social:{ // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:tomdang@naivetomcat.cn'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/NaiveTomcat'
        },
        {
          iconClass: 'icon-zhihu',
          title: '知乎',
          link: 'https://www.zhihu.com/people/nx-01enterprise'
        },
        {
          iconClass: 'icon-twitter',
          title: 'Twitter',
          link: 'https://twitter.com/NaiveTomcat'
        },
        {
          iconClass: 'icon-telegram',
          title: 'Telegram',
          link: 'https://t.me/NaiveTomcat'
        },
        {
          iconClass: 'icon-rss',
          title: '订阅',
          link: '/feed.xml'
        }
      ]
    },
    footer:{ // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo: 'NaiveTomcat | MIT License | <a href="https://icp.gov.moe" target="_blank">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=20212004" target="_blank"> 20212004号</a>', // 博客版权信息，支持a标签
    },
    htmlModules: {
      sidebarB: `
      <p>
      <hr>
      <center>
      <h3>购买云服务器，选Vultr！</h3>
      <h4>通过此链接注册即可获100$赠金</h4>
      <a href="https://www.vultr.com/?ref=8470306-6G"><img src="https://www.vultr.com/media/banners/banner_160x600.png" width="160" height="600"></a>
      </center>
      </p>`
    }
  },
  plugins: [ // 插件
    [require('./plugins/love-me'), { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q='
        }
      ]
    }],

    // 'vuepress-plugin-baidu-autopush', // 百度自动推送

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector:'.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '06819c1492a497e7a6cfdaa35a468242'
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk', 
        options: {
          clientID: '12a6f8e3f6cb6c7928ff',
          clientSecret: 'fcf3b06a658e094dfca3fe76a55def41f325f07a',
          repo: 'blog', // GitHub 仓库
          owner: 'NaiveTomcat', // GitHub仓库所有者
          admin: ['NaiveTomcat'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body:"页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://blog.tsinghuamakerxian.cn'
      }
    ],
    [
      'vuepress-plugin-md-enhance',
      {
        mermaid: true
      }
    ],
    [
      'feed',
      {
        canonical_base: 'https://blog.tsinghuamakerxian.cn',
      }
    ]
  ]
}
