module.exports = {
  title: 'CPS Design System',
  description: 'Design System Corporativo para utilização em sistemas internos do Centro Paula Souza, composto por Design Language e Component Library.',

  head: [
    ['meta', { name: 'theme-color', content: '#b20000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/cpsrepositorio/cps-design-system/cps-design-system',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia Visual',
        link: '/guia-visual/',
      },
      {
        text: 'Componentes',
        link: '/componentes/'
      },
      {
        text: 'Manual de Identidade Visual',
        link: 'https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2020/08/manual_centro_paula_souza_gestao2019_atualizado.pdf'
      }
    ],
    sidebar: {
      '/guia-visual/': [
        {
          title: 'Guia Visual',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/componentes/': [
        {
          title: 'Componentes',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
