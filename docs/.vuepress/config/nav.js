import dev from './nav/dev'
import sec from './nav/sec'

const nav = [
    { text: '首页', link: '/' },
    dev,
    sec,
    { text: '生活', link: '/life/' },

   
    { text: '关于', link: '/about/' },
    { text: '站点导航', link: '/navigation/' },
    {
      text: '更多',
      link: '/more/',
      items: [
        { text: '分类', link: '/categories/' },
        { text: '标签', link: '/tags/' },
        { text: '归档', link: '/archives/' },
        { text: '博客Emoji', link: '/more/blog/emoji/'}
      ],
    },

    {text: 'Travelling', link: 'https://travellings.link/' },
  ]

export default nav

