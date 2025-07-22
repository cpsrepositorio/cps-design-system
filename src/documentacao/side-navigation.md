# SideNavigation

O componente de navegação lateral (_side navigation_) é um elemento recorrente e de estruturação básica do _layout_ de muitas aplicações, principalmente quando se tratam de sistemas corporativos com grande quantidade de telas distintas, as quais não seriam facilmente apresentáveis usando apenas [TopNavigation](./top-navigation.md) em sua variação com menu superior.

Este componente eventualmente possui nomes genéricos como **menu** (_menu_) e barra lateral (_sidebar_) em outros _design systems_. Por vezes também é decomposto em peças menores, como a separação do corpo do menu em si, do botão de abrir/fechar ou contrair/expandir (dependendo da funcionalidade desejada para este botão).

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente apresenta seu _layout_ de menu lateral expandido ocupando uma dimensão horizontal de `320px`, medida recorrente em diversas aplicações _web_. É uma variação de uso geral em sistemas corporativos, por oferecer um bom espaço da interface para a apresentação dos itens do menu, os quais podem conter textos relativamente grandes para designar claramente o que cada opção de menu apresenta.

Por ocupar bastante espaço horizontal, não é um _layout_ adequado para resoluções menores do que _desktops_, embora eventualmente seja utilizada em dispositivos móveis através de alternância de estado, ou seja, quando aberto o menu flutua sobre o restante da página, como um [FloatingPanel](./floating-panel.md), mantendo-se totalmente recolhido e sem ocupar qualquer espaço quando não aberto, comumente utilizando o recorrente ícone <kbd>☰</kbd> para tal ação.

A aparência desta variação em modo claro:

![SideNavigation - Modo Claro - Padrão](~@source/assets/images/component-sidenavigation-light-standard.png)

A aparência desta variação em modo escuro:

![SideNavigation - Modo Escuro - Padrão](~@source/assets/images/component-sidenavigation-dark-standard.png)

### Contraído

A variação com _layout_ contraído ocupa somente `50px` horizontais, tornando-se viável inclusive em resoluções menores recorrentes em _tablets_. Esta variação apresenta os itens com uma variação visual que prioriza o ícone em detrimento do texto, e possui como principal desvantagem à variação padrão não permitir a apresentação de textos muito longos em cada item.

Alguns sistemas preferem adotar a postura permitir que o usuário escolha qual variação deseja manter em exibição, através da utilização de um botão de contrair/expandir a navegação lateral, comumente utilizando o recorrente ícone <kbd>☰</kbd> para tal ação.

A aparência desta variação em modo claro:

![SideNavigation - Modo Claro - Contraído](~@source/assets/images/component-sidenavigation-light-collapsed.png)

A aparência desta variação em modo escuro:

![SideNavigation - Modo Escuro - Contraído](~@source/assets/images/component-sidenavigation-dark-collapsed.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Utilize este componente em praticamente todas as telas de um sistema corporativo, com exceção às poucas telas de conteúdo mínimo e centralizado tanto verticalmente quanto horizontalmente, como em telas de _login_. Esta recomendação só não é pertinente quando poucas telas existirem no sistema (seja em geral, ou seja conforme permissões do usuário ativo), situação esta onde pode ser mais relevante utilizar-se apenas da variação de menu superior do componente [TopNavigation](./top-navigation.md).

Cada item do menu atua como um [ToggleButton](./toggle-button.md) com aparência personalizada, ou seja, o item selecionado representa a tela atualmente em exibição no sistema e, portanto, acionar outro item automaticamente remove a seleção do item atual, bem como conduz a navegação à nova tela.

Itens de menu devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

O botão inicial com o ícone <kbd>☰</kbd> pode designar ações diferentes, dependendo das necessidades em relação à persistência do menu lateral na interface, ou seja, da relevância de contraí-lo ou de escondê-lo, bem como da variação dessas necessidades em diferentes resoluções. Ou seja, diferentes comportamentos são válidos, como os casos descritos a seguir:
- Eventualmente, tal botão pode nem precisar ser exibido, caso a visibilidade da navegação lateral e de qual variação utilizar for totalmente controlada pela aplicação e não pelo usuário.
- Em resoluções a partir de `1024px`, este botão pode contrair/expandir o menu, alternando entre suas duas variações, para permitir que o usuário escolha entre ter mais espaço para o conteúdo principal ou mais espaço para ler as opções do menu de forma persistente.
- Em resoluções intermediárias, geralmente entre `768px` e `1023px`, a opção de expandir o menu pode ser totalmente desabilitada, e o botão com ícone <kbd>☰</kbd> escondido somente neste caso.
- Alternativamente, em resoluções menores do que `1024px`, o botão com ícone <kbd>☰</kbd> pode passar a ter comportamento de esconder/exibir o menu como um todo ao invés de contrair/expandir, permitindo que este se comporte como um [FloatingPanel](./floating-panel.md) quando visível. Neste cenário, é comum que tal botão seja reposicionado para o topo da tela, antes da área de título do componente [TopNavigation](./top-navigation.md).
- Ou ainda, o comportamento descrito no item anterior pode ser desejado apenas em resoluções intermediárias, geralmente entre `768px` e `1023px`, enquanto em resoluções menores o menu lateral pode ser completamente removido, dando lugar ao menu superior diretamente no [TopNavigation](./top-navigation.md), opção viável somente quando a quantidade de itens for pequena o suficiente para serem todos exibidos horizontalmente em telas pequenas.

### Acessibilidade

Este componente em si não possui características de acessibilidade, mas cada um de seus elementos internos, sejam eles [Button](./button.md), [Hyperlink](./hyperlink.md), ou [ToggleButton](./toggle-button.md), devem respeitar suas próprias características de acessibilidade e usabilidade.
