(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{438:function(e,a,o){e.exports=o.p+"assets/img/component-callout-light-standard.0f52b317.png"},439:function(e,a,o){e.exports=o.p+"assets/img/component-callout-dark-standard.1ce8481a.png"},440:function(e,a,o){e.exports=o.p+"assets/img/component-callout-light-withbutton.4a57354c.png"},441:function(e,a,o){e.exports=o.p+"assets/img/component-callout-dark-withbutton.addf228a.png"},639:function(e,a,o){"use strict";o.r(a);var t=o(35),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"callout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#callout"}},[e._v("#")]),e._v(" Callout")]),e._v(" "),t("p",[e._v("Uma chamada de destaque ("),t("em",[e._v("callout")]),e._v(") é um tipo de dica flutuante ancorada a um elemento, a qual pode ser usada para ensinar usuários ou orientá-los pela aplicação, normalmente sem bloquear completamente a interface em volta.")]),e._v(" "),t("p",[e._v("Alguns "),t("em",[e._v("design system")]),e._v(' nomeiam este componente como termos abstratos como "pulo sobre" ('),t("em",[e._v("popover")]),e._v(') ou "balão de ensino" ('),t("em",[e._v("teaching bubble")]),e._v("), enquanto outros o consideram uma variação de dica de ferramenta ("),t("em",[e._v("tooltip")]),e._v(").")]),e._v(" "),t("p",[e._v("Entretanto, embora o "),t("em",[e._v("callout")]),e._v(" possa ser considerado um tipo de "),t("em",[e._v("tooltip")]),e._v(" e, portanto, poderia ser usado também desta forma neste "),t("em",[e._v("design system")]),e._v(", recomendamos o uso de dicas de ferramenta nativas do navegador Web (atributo "),t("code",[e._v("title")]),e._v(" do HTML), pois se integram melhor ao Sistema Operacional em uso e possui lógica embutida de posicionamento dinâmico.")]),e._v(" "),t("h2",{attrs:{id:"variacoes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variacoes"}},[e._v("#")]),e._v(" Variações")]),e._v(" "),t("p",[e._v("Este componente pode ser utilizado conforme as variações descritas a seguir.")]),e._v(" "),t("h3",{attrs:{id:"padrao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#padrao"}},[e._v("#")]),e._v(" Padrão")]),e._v(" "),t("p",[e._v("A variação padrão deste componente representa seu "),t("em",[e._v("layout")]),e._v(" mínimo, representado por um balão flutuante atrelado a um elemento da interface. Esta variação não exige ação do usuário para ser descartada, podendo tal acontecimento ser atrelado a outra ação na interface, como o movimento do mouse para fora do elemento atrelado, bem como qualquer outra ação conveniente de acordo com as necessidades de instrução desejadas.")]),e._v(" "),t("p",[e._v("A aparência desta variação em modo claro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(438),alt:"Callout - Modo Claro - Padrão"}})]),e._v(" "),t("p",[e._v("A aparência desta variação em modo escuro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(439),alt:"Callout - Modo Escuro - Padrão"}})]),e._v(" "),t("h3",{attrs:{id:"com-botao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-botao"}},[e._v("#")]),e._v(" Com botão")]),e._v(" "),t("p",[e._v("Esta variação é muito parecida visualmente com a variação padrão, porém exige ação explícita do usuário, através do botão de ação ou do ícone de fechamento da caixa de chamada de destaque. É uma variação especialmente útil durante ensino guiado do usuário por novas interfaces, quando este precisa confirmar que entendeu determinado comportamento antes de seguir para o próximo, ou explicitamente fechar as instruções que não deseja mais ver.")]),e._v(" "),t("p",[e._v("A aparência desta variação em modo claro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(440),alt:"Callout - Modo Claro - Com Botão"}})]),e._v(" "),t("p",[e._v("A aparência desta variação em modo escuro:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(441),alt:"Callout - Modo Escuro - Com Botão"}})]),e._v(" "),t("h2",{attrs:{id:"boas-praticas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boas-praticas"}},[e._v("#")]),e._v(" Boas práticas")]),e._v(" "),t("p",[e._v("Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.")]),e._v(" "),t("h3",{attrs:{id:"exibicao-e-comportamento"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exibicao-e-comportamento"}},[e._v("#")]),e._v(" Exibição e comportamento")]),e._v(" "),t("p",[e._v("Este componente é mais informativo do que intrusivo, portanto não utilize uma chamada de destaque para pedir confirmação de ação. Nestes casos, use "),t("RouterLink",{attrs:{to:"/componentes/dialog.html"}},[e._v("Dialog")]),e._v(", pois este bloqueia a ação no restante da interface e garante total atenção do usuário em relação à confirmação a ser concedida.")],1),e._v(" "),t("p",[e._v('Sempre coloque uma chamada de destaque perto do objeto que está sendo descrito, com a "cauda" do balão apontando diretamente este elemento, se possível. Assim, intuitivamente, nunca mostre chamadas de destaque sobre elementos atualmente invisíveis ao usuário.')]),e._v(" "),t("p",[e._v("Não use blocos de texto grandes em seu texto explicativo da chamada de destaque, pois eles se tornam difíceis de ler e acabam sendo esmagadoramente ignorados.")]),e._v(" "),t("p",[e._v("Evite bloquear elementos de interface importantes ao usuário com o posicionamento de alguma chamada de destaque. É uma experiência de usuário ruim que levará à frustração.")]),e._v(" "),t("p",[e._v("Não abuse dos "),t("em",[e._v("callouts")]),e._v(", usar muitas chamadas abertas automaticamente em sequência pode ser percebido como uma interrupção no fluxo de trabalho de alguém. Algumas aplicações tem cometido esse erro ao receber novos usuários após o primeiro "),t("em",[e._v("login")]),e._v(", exigindo que o usuário veja e confirme vários passos instrutivos (por vezes, mais de 5 passos) antes de efetivamente usar a aplicação. É uma experiência de usuário muito ruim e deve ser evitada.")]),e._v(" "),t("p",[e._v("Uma abordagem sutil e útil para utilização deste componente é quando um conceito particularmente complexo precisa de explicação. Então, coloque um ícone de informações ao lado do texto para indicar que há mais informações úteis disponíveis e quando alguém passar o mouse ou acionar o ícone, a chamada de destaque explicativa aparecerá.")]),e._v(" "),t("h3",{attrs:{id:"acessibilidade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acessibilidade"}},[e._v("#")]),e._v(" Acessibilidade")]),e._v(" "),t("p",[e._v("Se a chamada de destaque estiver sendo usada como uma caixa de diálogo (o que nós realmente não recomendamos), ao menos defina "),t("code",[e._v('role="dialog"')]),e._v(" no "),t("em",[e._v("container")]),e._v(" da chamada de destaque.")]),e._v(" "),t("p",[e._v("Se a chamada de destaque possuir botões, estes devem ser acessíveis através de navegação por teclado e devem respeitar seus próprios padrões de acessibilidade conforme documentado em "),t("RouterLink",{attrs:{to:"/componentes/button.html"}},[e._v("Button")]),e._v(".")],1),e._v(" "),t("p",[e._v("Qualquer "),t("em",[e._v("callout")]),e._v(" aberto em uma interface deve ser descartada imediatamente se a tecla "),t("kbd",[e._v("Esc")]),e._v(" for pressionada.")])])}),[],!1,null,null,null);a.default=s.exports}}]);