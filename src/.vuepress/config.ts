import { viteBundler } from "@vuepress/bundler-vite";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { catalogPlugin } from "@vuepress/plugin-catalog";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

const __dirname = import.meta.dirname || getDirname(import.meta.url);

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: true,
      },
    },
  }),

  lang: "pt-BR",
  title: "CPS Design System",
  description:
    "Design System Corporativo para utilização em sistemas internos do Centro Paula Souza, composto pelo Guia Visual e pela documenta visual de Componentes.",

  base: "/cps-design-system/",

  head: [
    ["meta", { name: "theme-color", content: "#b20000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/cps-design-system/favicon.ico?v=20220630",
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;600;700&display=swap",
      },
    ],
  ],

  theme: defaultTheme({
    logo: "/images/logo-cps-ds.svg?v=20250723",
    logoDark: "/images/logo-cps-ds-dark.svg?v=20250723",
    repo: "https://github.com/cpsrepositorio/cps-design-system/",
    sidebarDepth: 2,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    notFound: ["Não encontramos o que você está procurando."],
    backToHome: "Voltar para a página inicial",
    openInNewWindow: "Abre em uma nova janela",
    toggleColorMode: "Alternar modo de cor",
    toggleSidebar: "Alternar barra lateral",
    next: "Próximo",
    prev: "Anterior",
    navbar: [
      {
        text: "Guia Visual",
        link: "/guia-visual/",
      },
      {
        text: "Documentação",
        link: "/documentacao/",
      },
      {
        text: "Componentes",
        link: "https://cpsrepositorio.github.io/cps-elements/",
      },
    ],
    sidebar: {
      "/guia-visual/": [
        {
          text: "Guia Visual",
          children: [
            "",
            "camadas-e-materiais",
            "dimensoes-e-espacamentos",
            "elevacao",
            "tipografia",
            "cores",
            "icones",
          ],
        },
      ],
      "/documentacao/": [
        {
          text: "Documentação",
          children: [
            "accordion",
            "avatar",
            "badge",
            "button",
            "calendar",
            "callout",
            "card",
            "check-field",
            "chip",
            "color-field",
            "data-table",
            "date-field",
            "dialog",
            "dropdown-button",
            "dropdown-field",
            "floating-panel",
            "grid-view",
            "hyperlink",
            "list-view",
            "menu-flyout",
            "multi-select-field",
            "number-field",
            "pagination",
            "progress-indicator",
            "rating-field",
            "separator",
            "side-navigation",
            "skeleton-indicator",
            "slider-field",
            "split-button",
            "stepper",
            "tab-bar",
            "text-field",
            "toast-notification",
            "toggle-button",
            "top-navigation",
            "tree-view",
          ],
        },
      ],
    },
    themePlugins: {
      git: false,
    },
  }),

  plugins: [
    activeHeaderLinksPlugin(),
    backToTopPlugin({
      locales: {
        "/": {
          backToTop: "Voltar ao topo",
        },
      },
    }),
    catalogPlugin({}),
    copyCodePlugin({
      locales: {
        "/": {
          copy: "Copiar",
          copied: "Copiado!",
        },
      },
    }),
    markdownImagePlugin({
      lazyload: true,
      size: true,
    }),
    mediumZoomPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],

  extendsPage: (page) => {
    page.routeMeta = {
      title: page.title,
    };
  },
});
