import dayjs from 'dayjs'
import baiduCode from './baiduCode' // 百度统计hm码
import { resolve } from 'path'
// 插件配置
const plugins = {
    // 导入本地插件（供学习参考）
    [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    },
    
    // // 百度自动推送
    // 'vuepress-plugin-baidu-autopush': {},

    // 百度统计
    'vuepress-plugin-baidu-tongji': {
      hm: baiduCode,
    },

    // 顶部阅读进度插件
      'reading-progress':{},
    // 全文搜索
    'fulltext-search': {},

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    'thirdparty-search': {
      thirdparty: [
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
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
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        },
      ],
    },

    

    // 代码块复制按钮
    'one-click-copy': {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },

    // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
    'demo-block': {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },

    // 放大图片
    'vuepress-plugin-zooming': {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },

    // 评论区
    'vuepress-plugin-comment': {
      choosen: 'gitalk',
      options: {
        clientID: 'ce8d24a63bb0c5701685',
        clientSecret: 'e6b33c9d3e857f675b3bb34a1c491b323325b49d',
        repo: 'WikiTalk', // GitHub 仓库
        owner: 'p0josec', // GitHub仓库所有者
        admin: ['p0josec'], // 对仓库有写权限的人
        distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },

    // "上次更新"的时间格式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  }

  export default plugins