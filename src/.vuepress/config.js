module.exports = {
  title: 'CPS Design System',
  description: 'Design System Corporativo para utilização em sistemas internos do Centro Paula Souza, composto pelo Guia Visual e pela documenta visual de Componentes.',

  base: '/cps-design-system/',

  head: [
    ['meta', { name: 'theme-color', content: '#b20000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "shortcut icon", href: "favicon.ico?v=20220630"}],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;600;700&display=swap' }]
  ],

  themeConfig: {
    logo: '/images/logo-cps-ds.svg?v=20220903',
    smoothScroll: true,
    editLinks: false,
    repo: 'https://github.com/cpsrepositorio/cps-design-system/',
    searchPlaceholder: 'O que você procura?',
    sidebarDepth: 2,
    nav: [
      {
        text: 'Guia Visual',
        link: '/guia-visual/',
      },
      {
        text: 'Documentação',
        link: '/documentacao/'
      },
      {
        text: 'Componentes',
        link: 'https://cpsrepositorio.github.io/cps-elements/'
      }
    ],
    sidebar: {
      '/guia-visual/': [
        {
          title: 'Guia Visual',
          collapsable: false,
          children: [
            '',
            'camadas-e-materiais',
            'dimensoes-e-espacamentos',
            'elevacao',
            'tipografia',
            'cores',
            'icones',
          ]
        }
      ],
      '/documentacao/': [
        {
          title: 'Documentação',
          collapsable: false,
          children: [
            'accordion',
            'avatar',
            'badge',
            // { title: 'BarChart' },
            'split-button',
            'button',
            'calendar',
            'callout',
            'card',
            'check-field',
            'chip',
            'color-field',
            'data-table',
            'date-field',
            'dialog',
            'dropdown-button',
            'dropdown-field',
            'floating-panel',
            // { title: 'Gauge' },
            'grid-view',
            'hyperlink',
            // { title: 'LineChart' },
            'list-view',
            'menu-flyout',
            'multi-select-field',
            'number-field',
            'pagination',
            // { title: 'PieChart' },
            'progress-indicator',
            'rating-field',
            'separator',
            'side-navigation',
            'skeleton-indicator',
            'slider-field',
            // { title: 'StackedChart' },
            'stepper',
            'tab-bar',
            'text-field',
            'toast-notification',
            'toggle-button',
            'top-navigation',
            'tree-view',
          ]
        }
      ]
    }
  },

  plugins: [
    /*
    // TODO: Temporary disabled since timestamps are not being properly updated.
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const date = new Date(timestamp)
          return date.toLocaleString(
            'pt-BR',
            {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            }
          ).replace(' ', ' às ')
        }
      }
    ],
    */
    '@vuepress/active-header-links',
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: '.theme-default-content :not(a) > img:not(.no-zoom)'
      }
    ]
  ]
}
