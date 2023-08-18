(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{540:function(e,a,o){e.exports=o.p+"assets/img/component-sidenavigation-light-standard.c34c2d50.png"},541:function(e,a,o){e.exports=o.p+"assets/img/component-sidenavigation-dark-standard.beaa376e.png"},542:function(e,a,o){e.exports=o.p+"assets/img/component-sidenavigation-light-collapsed.18a2714a.png"},543:function(e,a,o){e.exports=o.p+"assets/img/component-sidenavigation-dark-collapsed.3592fe22.png"},665:function(e,a,o){"use strict";o.r(a);var t=o(35),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sidenavigation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sidenavigation"}},[e._v("#")]),e._v(" SideNavigation")]),e._v(" "),t("p",[e._v("O componente de navegação lateral ("),t("em",[e._v("side navigation")]),e._v(") é um elemento recorrente e de estruturação básica do "),t("em",[e._v("layout")]),e._v(" de muitas aplicações, principalmente quando se tratam de sistemas corporativos com grande quantidade de telas distintas, as quais não seriam facilmente apresentáveis usando apenas "),t("RouterLink",{attrs:{to:"/documentacao/top-navigation.html"}},[e._v("TopNavigation")]),e._v(" em sua variação com menu superior.")],1),e._v(" "),t("p",[e._v("Este componente eventualmente possui nomes genéricos como "),t("strong",[e._v("menu")]),e._v(" ("),t("em",[e._v("menu")]),e._v(") e barra lateral ("),t("em",[e._v("sidebar")]),e._v(") em outros "),t("em",[e._v("design systems")]),e._v(". Por vezes também é decomposto em peças menores, como a separação do corpo do menu em si, do botão de abrir/fechar ou contrair/expandir (dependendo da funcionalidade desejada para este botão).")]),e._v(" "),t("h2",{attrs:{id:"variacoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variacoes"}},[e._v("#")]),e._v(" Variações")]),e._v(" "),t("p",[e._v("Este componente pode ser utilizado conforme as variações descritas a seguir.")]),e._v(" "),t("h3",{attrs:{id:"padrao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#padrao"}},[e._v("#")]),e._v(" Padrão")]),e._v(" "),t("p",[e._v("A variação padrão deste componente apresenta seu "),t("em",[e._v("layout")]),e._v(" de menu lateral expandido ocupando uma dimensão horizontal de "),t("code",[e._v("320px")]),e._v(", medida recorrente em diversas aplicações Web. É uma variação de uso geral em sistemas corporativos, por oferecer um bom espaço da interface para a apresentação dos itens do menu, os quais podem conter textos relativamente grandes para designar claramente o que cada opção de menu apresenta.")]),e._v(" "),t("p",[e._v("Por ocupar bastante espaço horizontal, não é um "),t("em",[e._v("layout")]),e._v(" adequado para resoluções menores do que "),t("em",[e._v("desktops")]),e._v(", embora eventualmente seja utilizada em dispositivos móveis através de alternância de estado, ou seja, quando aberto o menu flutua sobre o restante da página, como um "),t("RouterLink",{attrs:{to:"/documentacao/floating-panel.html"}},[e._v("FloatingPanel")]),e._v(", mantendo-se totalmente recolhido e sem ocupar qualquer espaço quando não aberto, comumente utilizando o recorrente ícone "),t("kbd",[e._v("☰")]),e._v(" para tal ação.")],1),e._v(" "),t("p",[e._v("A aparência desta variação em modo claro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(540),alt:"SideNavigation - Modo Claro - Padrão"}})]),e._v(" "),t("p",[e._v("A aparência desta variação em modo escuro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(541),alt:"SideNavigation - Modo Escuro - Padrão"}})]),e._v(" "),t("h3",{attrs:{id:"contraido"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contraido"}},[e._v("#")]),e._v(" Contraído")]),e._v(" "),t("p",[e._v("A variação com "),t("em",[e._v("layout")]),e._v(" contraído ocupa somente "),t("code",[e._v("50px")]),e._v(" horizontais, tornando-se viável inclusive em resoluções menores recorrentes em "),t("em",[e._v("tablets")]),e._v(". Esta variação apresenta os itens com uma variação visual que prioriza o ícone em detrimento do texto, e possui como principal desvantagem à variação padrão não permitir a apresentação de textos muito longos em cada item.")]),e._v(" "),t("p",[e._v("Alguns sistemas preferem adotar a postura permitir que o usuário escolha qual variação deseja manter em exibição, através da utilização de um botão de contrair/expandir a navegação lateral, comumente utilizando o recorrente ícone "),t("kbd",[e._v("☰")]),e._v(" para tal ação.")]),e._v(" "),t("p",[e._v("A aparência desta variação em modo claro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(542),alt:"SideNavigation - Modo Claro - Contraído"}})]),e._v(" "),t("p",[e._v("A aparência desta variação em modo escuro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(543),alt:"SideNavigation - Modo Escuro - Contraído"}})]),e._v(" "),t("h2",{attrs:{id:"boas-praticas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boas-praticas"}},[e._v("#")]),e._v(" Boas práticas")]),e._v(" "),t("p",[e._v("Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.")]),e._v(" "),t("h3",{attrs:{id:"exibicao-e-comportamento"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exibicao-e-comportamento"}},[e._v("#")]),e._v(" Exibição e comportamento")]),e._v(" "),t("p",[e._v("Utilize este componente em praticamente todas as telas de um sistema corporativo, com exceção às poucas telas de conteúdo mínimo e centralizado tanto verticalmente quanto horizontalmente, como em telas de "),t("em",[e._v("login")]),e._v(". Esta recomendação só não é pertinente quando poucas telas existirem no sistema (seja em geral, ou seja conforme permissões do usuário ativo), situação esta onde pode ser mais relevante utilizar-se apenas da variação de menu superior do componente "),t("RouterLink",{attrs:{to:"/documentacao/top-navigation.html"}},[e._v("TopNavigation")]),e._v(".")],1),e._v(" "),t("p",[e._v("Cada item do menu atua como um "),t("RouterLink",{attrs:{to:"/documentacao/toggle-button.html"}},[e._v("ToggleButton")]),e._v(" com aparência personalizada, ou seja, o item selecionado representa a tela atualmente em exibição no sistema e, portanto, acionar outro item automaticamente remove a seleção do item atual, bem como conduz a navegação à nova tela.")],1),e._v(" "),t("p",[e._v("Itens de menu devem ser grafados em notação "),t("em",[e._v("Sentence case")]),e._v(", conforme explanado em "),t("RouterLink",{attrs:{to:"/guia-visual/tipografia.html#regras-de-formatação"}},[e._v("Tipografia")]),e._v(".")],1),e._v(" "),t("p",[e._v("O botão inicial com o ícone "),t("kbd",[e._v("☰")]),e._v(" pode designar ações diferentes, dependendo das necessidades em relação à persistência do menu lateral na interface, ou seja, da relevância de contraí-lo ou de escondê-lo, bem como da variação dessas necessidades em diferentes resoluções. Ou seja, diferentes comportamentos são válidos, como os casos descritos a seguir:")]),e._v(" "),t("ul",[t("li",[e._v("Eventualmente, tal botão pode nem precisar ser exibido, caso a visibilidade da navegação lateral e de qual variação utilizar for totalmente controlada pela aplicação e não pelo usuário.")]),e._v(" "),t("li",[e._v("Em resoluções a partir de "),t("code",[e._v("1024px")]),e._v(", este botão pode contrair/expandir o menu, alternando entre suas duas variações, para permitir que o usuário escolha entre ter mais espaço para o conteúdo principal ou mais espaço para ler as opções do menu de forma persistente.")]),e._v(" "),t("li",[e._v("Em resoluções intermediárias, geralmente entre "),t("code",[e._v("768px")]),e._v(" e "),t("code",[e._v("1023px")]),e._v(", a opção de expandir o menu pode ser totalmente desabilitada, e o botão com ícone "),t("kbd",[e._v("☰")]),e._v(" escondido somente neste caso.")]),e._v(" "),t("li",[e._v("Alternativamente, em resoluções menores do que "),t("code",[e._v("1024px")]),e._v(", o botão com ícone "),t("kbd",[e._v("☰")]),e._v(" pode passar a ter comportamento de esconder/exibir o menu como um todo ao invés de contrair/expandir, permitindo que este se comporte como um "),t("RouterLink",{attrs:{to:"/documentacao/floating-panel.html"}},[e._v("FloatingPanel")]),e._v(" quando visível. Neste cenário, é comum que tal botão seja reposicionado para o topo da tela, antes da área de título do componente "),t("RouterLink",{attrs:{to:"/documentacao/top-navigation.html"}},[e._v("TopNavigation")]),e._v(".")],1),e._v(" "),t("li",[e._v("Ou ainda, o comportamento descrito no item anterior pode ser desejado apenas em resoluções intermediárias, geralmente entre "),t("code",[e._v("768px")]),e._v(" e "),t("code",[e._v("1023px")]),e._v(", enquanto em resoluções menores o menu lateral pode ser completamente removido, dando lugar ao menu superior diretamente no "),t("RouterLink",{attrs:{to:"/documentacao/top-navigation.html"}},[e._v("TopNavigation")]),e._v(", opção viável somente quando a quantidade de itens for pequena o suficiente para serem todos exibidos horizontalmente em telas pequenas.")],1)]),e._v(" "),t("h3",{attrs:{id:"acessibilidade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acessibilidade"}},[e._v("#")]),e._v(" Acessibilidade")]),e._v(" "),t("p",[e._v("Este componente em si não possui características de acessibilidade, mas cada um de seus elementos internos, sejam eles "),t("RouterLink",{attrs:{to:"/documentacao/button.html"}},[e._v("Button")]),e._v(", "),t("RouterLink",{attrs:{to:"/documentacao/hyperlink.html"}},[e._v("Hyperlink")]),e._v(", ou "),t("RouterLink",{attrs:{to:"/documentacao/toggle-button.html"}},[e._v("ToggleButton")]),e._v(", devem respeitar suas próprias características de acessibilidade e usabilidade.")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);