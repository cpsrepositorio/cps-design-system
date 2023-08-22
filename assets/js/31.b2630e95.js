(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{496:function(a,e,o){a.exports=o.p+"assets/img/component-floatingpanel-light-standard.669ed49e.png"},497:function(a,e,o){a.exports=o.p+"assets/img/component-floatingpanel-dark-standard.8f4b2509.png"},498:function(a,e,o){a.exports=o.p+"assets/img/component-floatingpanel-light-withbuttons.4f6e5088.png"},499:function(a,e,o){a.exports=o.p+"assets/img/component-floatingpanel-dark-withbuttons.ac417508.png"},651:function(a,e,o){"use strict";o.r(e);var t=o(35),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"floatingpanel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#floatingpanel"}},[a._v("#")]),a._v(" FloatingPanel")]),a._v(" "),t("p",[a._v("Um painel flutuante é uma espécie de componente misto, integrando a experiência de "),t("RouterLink",{attrs:{to:"/documentacao/card.html"}},[a._v("Card")]),a._v(" com "),t("RouterLink",{attrs:{to:"/documentacao/dialog.html"}},[a._v("Dialog")]),a._v(" em um painel que cobre o restante da interface através do uso de material "),t("RouterLink",{attrs:{to:"/guia-visual/camadas-e-materiais.html#esfumaçado"}},[a._v("esfumaçado")]),a._v(", com o cartão aparecendo a partir de uma das laterais da tela e ocupando verticalmente todo o "),t("em",[a._v("viewport")]),a._v(".")],1),a._v(" "),t("p",[a._v("Painéis flutuantes são úteis em várias situações, por exemplo, exibir dados detalhados após selecionar um registro em uma tabela, oferecer um conjunto de filtros a serem escolhidos antes da exportação de um relatório, disponibilizar um pequeno conjunto de campos para atualização de algum registro que não exige uma interface grande e complexa.")]),a._v(" "),t("h2",{attrs:{id:"variacoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variacoes"}},[a._v("#")]),a._v(" Variações")]),a._v(" "),t("p",[a._v("Este componente pode ser utilizado conforme as variações descritas a seguir.")]),a._v(" "),t("h3",{attrs:{id:"padrao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#padrao"}},[a._v("#")]),a._v(" Padrão")]),a._v(" "),t("p",[a._v("A variação padrão deste componente representa seu "),t("em",[a._v("layout")]),a._v(" mínimo, composto pelo plano de fundo esfumaçado, o cartão com título (e subtítulo opcional), uma área de conteúdo que pode ser utilizada conforme necessário (inclusive com uso de barra de rolagem vertical caso necessário) e um botão para fechamento do painel, ação esta que também se dá através de clique/toque no plano de fundo esfumaçado, assim como ocorre em um "),t("RouterLink",{attrs:{to:"/documentacao/dialog.html"}},[a._v("Dialog")]),a._v(".")],1),a._v(" "),t("p",[a._v("A aparência desta variação em modo claro:")]),a._v(" "),t("p",[t("img",{attrs:{src:o(496),alt:"FloatingPanel - Modo Claro - Padrão"}})]),a._v(" "),t("p",[a._v("A aparência desta variação em modo escuro:")]),a._v(" "),t("p",[t("img",{attrs:{src:o(497),alt:"FloatingPanel - Modo Escuro - Padrão"}})]),a._v(" "),t("h3",{attrs:{id:"com-botoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-botoes"}},[a._v("#")]),a._v(" Com botões")]),a._v(" "),t("p",[a._v("Esta variação é uma extensão natural da padrão, apenas acrescida de uma barra de botões para proporcionar uma ação de ênfase e uma ação secundária. Recomenda-se que os botões se comportem como em "),t("RouterLink",{attrs:{to:"/documentacao/dialog.html"}},[a._v("Dialog")]),a._v(" para evitar quebrar a experiência que o usuário já estará acostumado, ou seja, o botão ênfase oferecendo uma ação especial (por exemplo, salvar um registro conforme os campos informados no painel) enquanto o botão secundário apenas cancela a operação, a mesma ação que fechar o painel flutuante.")],1),a._v(" "),t("p",[a._v("A aparência desta variação em modo claro:")]),a._v(" "),t("p",[t("img",{attrs:{src:o(498),alt:"FloatingPanel - Modo Claro - Com botões"}})]),a._v(" "),t("p",[a._v("A aparência desta variação em modo escuro:")]),a._v(" "),t("p",[t("img",{attrs:{src:o(499),alt:"FloatingPanel - Modo Escuro - Com botões"}})]),a._v(" "),t("h2",{attrs:{id:"boas-praticas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boas-praticas"}},[a._v("#")]),a._v(" Boas práticas")]),a._v(" "),t("p",[a._v("Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.")]),a._v(" "),t("h3",{attrs:{id:"exibicao-e-comportamento"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exibicao-e-comportamento"}},[a._v("#")]),a._v(" Exibição e comportamento")]),a._v(" "),t("p",[a._v("Sempre ofereça um título curto, direto e evidente sobre que tipo de conteúdo está sendo exibido no painel flutuante. Além disso, deve ser grafado em notação "),t("em",[a._v("Sentence case")]),a._v(", conforme explanado em "),t("RouterLink",{attrs:{to:"/guia-visual/tipografia.html#regras-de-formatação"}},[a._v("Tipografia")]),a._v(".")],1),a._v(" "),t("p",[a._v("Ofereça um subtítulo somente se estritamente necessário, para evitar ocupar espaço vertical desnecessariamente. Por exemplo, um painel com título "),t("code",[a._v('"Meus dados"')]),a._v(" e um subtítulo "),t("code",[a._v('"Preencha com seus dados"')]),a._v(" seria um desperdício de espaço vertical e apenas mais um texto para poluir visualmente a tela, enquanto um painel com título "),t("code",[a._v('"Exportação de relatório"')]),a._v(" e um subtítulo "),t("code",[a._v('"Alunos por período letivo"')]),a._v(" seria um bom uso de título e subtítulo que realmente se complementam e acrescentam informações relevantes à interface.")]),a._v(" "),t("p",[a._v("Embora úteis para exibir detalhamentos de registros ou até mesmo pequenos formulários de forma dinâmica em uma apresentação de foco total para o usuário, esfumaçando o restante do conteúdo, painéis flutuantes são propositalmente limitados em tamanho para garantir que permaneçam pequenos e direcionados ao que for estritamente necessário exibir. Não utilize de forma exagerada enchendo a aplicação de painéis flutuantes para todas as operações.")]),a._v(" "),t("p",[a._v("O posicionamento de abertura do painel, ou seja, se aparece a partir da esquerda ou a partir da direita da página, deve depender da posição do elemento que foi acionado para que o painel surgisse, para evitar que o usuário precise desviar o olhar e mover o "),t("em",[a._v("mouse")]),a._v(" por toda a tela para usar o painel flutuante. Por exemplo, um botão à esquerda na página abriria um painel a partir da esquerda, enquanto um botão à direita na página abriria um painel também a partir da direita. Em caso de dúvidas, como para elementos mais centralizados, preferencialmente abrir o painel flutuante a partir da direita da tela, para evitar atrapalhar a abertura de menus laterais que comumente ficam à esquerda.")]),a._v(" "),t("p",[a._v("O cartão do painel flutuante, embora sempre se ajuste verticalmente conforme o espaço disponível no "),t("em",[a._v("viewport")]),a._v(", deve se limitar a "),t("code",[a._v("26rem")]),a._v(" em seu tamanho horizontal, isto é, pode apresentar uma medida menor caso esteja sendo exibido em telas menores, mas não deve ultrapassar este tamanho caso esteja sendo exibido em telas maiores.")]),a._v(" "),t("p",[a._v("O uso de barra de rolagem vertical na área de conteúdo é viável, mas somente para preparar o painel para ser exibido adequadamente em telas de resolução menor. Idealmente, o conteúdo do painel deve ser pensado para não exigir rolagem vertical na maioria dos casos.")]),a._v(" "),t("p",[a._v("Nunca cubra um painel flutuante com outro painel flutuante.")]),a._v(" "),t("h3",{attrs:{id:"acessibilidade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acessibilidade"}},[a._v("#")]),a._v(" Acessibilidade")]),a._v(" "),t("p",[a._v("Quando um painel flutuante está aberto, pressionar "),t("kbd",[a._v("Enter")]),a._v(" corresponde à ação de confirmação de seu botão de ênfase. Evidentemente, um painel flutuante sem botão de ênfase não deve ter ação alguma quando esta tecla é pressionada, mantendo-se aberto.")]),a._v(" "),t("p",[a._v("Quando um painel flutuante está aberto, pressionar "),t("kbd",[a._v("Esc")]),a._v(" corresponde à ação de fechamento sem realizar qualquer ação, assim como em um "),t("em",[a._v("click")]),a._v("/"),t("em",[a._v("touch")]),a._v(" no plano de fundo esfumaçado ao redor do painel, ou no botão de fechar do painel.")])])}),[],!1,null,null,null);e.default=r.exports}}]);