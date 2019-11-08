module.exports = {
  title: 'magnetW',
  description: '磁力链接聚合搜索',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/'},
      {
        text: '相关项目',
        items: [
          {text: 'magnetX', link: 'https://github.com/youusername/magnetX'}
        ]
      },
      {text: 'GitHub', link: 'https://github.com/dengyuhan/magnetW'},
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/setting',
          '/guide/proxy'
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          '/advanced/rule',
          '/advanced/add-source'
        ]
      }
    ],
    displayAllHeaders: true
  }
}
