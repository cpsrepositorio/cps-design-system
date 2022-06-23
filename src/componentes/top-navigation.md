# TopNavigation

O componente de navegação superior (_top navigation_) é um elemento recorrente e de estruturação básica do _layout_ da maioria das aplicações, principalmente quando se tratam de sistemas corporativos.

Representa o conjunto fundamental de informações que um usuário deve ter acesso no topo de cada uma das interfaces de um mesmo sistema (ou ao menos na maioria delas), contendo os acessos rápidos à tela principal do sistema, seu título, campo de pesquisa persistente, e ações globais e recorrentes como alternância de [modo de cor](../guia-visual/cores.md#modos-de-cor) e [Avatar](./avatar.md) de usuário atualmente autenticado. Dependendo das necessidades de navegação do sistema, outras opções podem ser exibidas, desde que adequadamente visualizáveis em diferentes resoluções.

Este componente eventualmente possui nomes genéricos como **cabeçalho** (_header_) em outros _design systems_. Por vezes também é decomposto em peças menores, como a separação da barra de título (_title bar_) da barra de navegação (_navigation bar_) em componentes distintos. Aqui, optou-se por tratar como variações de um mesmo componente.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente apresenta sua composição mínima em um cabeçalho contendo o _logo_ do CPS e título da aplicação (acionáveis direcionando o usuário à tela principal do sistema em questão), barra de busca persistente para localizar informações em todo o sistema de forma rápida, botões de apoio para alternância de modo de cor e para controle de usuário autenticado (ou botão para acesso ao sistema quando não autenticado). Outros elementos podem ser acomodados nesta área, como ícone de notificações ou botão de ajuda, caso estritamente imprescindíveis à utilização do sistema em questão, mas com grande cautela para que não se quebra a visualização linear em resoluções pequenas.

A aparência desta variação em modo claro:

![TopNavigation - Modo Claro - Padrão](~@source/assets/images/component-topnavigation-light-standard.png)

A aparência desta variação em modo escuro:

![TopNavigation - Modo Escuro - Padrão](~@source/assets/images/component-topnavigation-dark-standard.png)

### Menu Superior

A variação com menu superior mantém as mesmas características já abordadas para a área principal do componente, porém acrescenta a chamada "barra de navegação" como uma segunda fileira de opções. Os itens da barra são apresentados com ícones exclusivos e sugestivos, bem como com texto de apoio simples e direto para cada item. Esta variação só deve ser utilizada em cenários onde a quantidade de itens de navegação é pequena, garantindo-se boa visualização de todas as opções mesmo em resoluções pequenas.

A aparência desta variação em modo claro:

![TopNavigation - Modo Claro - Menu Superior](~@source/assets/images/component-topnavigation-light-topmenu.png)

A aparência desta variação em modo escuro:

![TopNavigation - Modo Escuro - Menu Superior](~@source/assets/images/component-topnavigation-dark-topmenu.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Utilize este componente em praticamente todas as telas de um sistema corporativo, com exceção às poucas telas de conteúdo mínimo e centralizado tanto verticalmente quanto horizontalmente, como em telas de _login_.

O campo de pesquisa persistente é um [TextField](./text-field.md) com acionamento da busca ao pressionar-se a tela <kbd>Enter</kbd> ou através de clique/toque no ícone de pesquisa (lupa) e, como tal, deve respeitar todos os comportamentos e boas práticas já documentos neste componente.

O campo de pesquisa persistente é altamente recomendado, mas podem existir casos extremos onde não precise ser exibido. Por exemplo, em sistemas com poucas telas e poucas informações exibidas nelas, ou seja, onde a necessidade de utilização de uma ferramenta de busca global não seria justificável.

Este _design system_ foi projetado com alternância de [Modos de Cor](../guia-visual/cores.md#modos-de-cor) como princípio básico de sua concepção. Dado que este é um recurso constante em todos os grandes sistemas operacionais atuais, é essencial que as aplicações Web respeitem a configuração de modo de cor do sistema operacional, quando existir, mas que permitam que o usuário alterne especificamente para a aplicação em questão, quando desejado. Desta forma, o botão de alternância de modo de cor neste componente é obrigatório.

Quando utilizando menu superior, cada item do menu atua como um [ToggleButton](./toggle-button.md) com aparência personalizada, ou seja, o item selecionado representa a tela atualmente em exibição no sistema e, portanto, acionar outro item automaticamente remove a seleção do item atual, bem como conduz a navegação à nova tela.

Em resolução maiores, principalmente a partir de `1024px` de largura (medida convencionalmente considerada o ponto de partida para _desktops_), é natural que o maior espaço horizontal possa ser aproveitado de forma diferenciada pelas interfaces. Desta forma, é recomendável que a variação com menu superior não seja utilizada em resoluções maiores. Ao invés disso, alterna-se para a variação padrão e complementa-se o _layout_ com a exibição do componente [SideNavigation](./side-navigation.md) para oferecer as mesmas opções de navegação, porém dispostas na lateral esquerda da página ao invés de fazerem parte da área de navegação superior. Observe um exemplo animado desta alternância responsiva:

![TopNavigation - Exemplo - Alternância Responsiva para SideNavigation](~@source/assets/images/component-topnavigation-responsive-sample.gif)

### Acessibilidade

Este componente em si não possui características de acessibilidade, mas cada um de seus elementos internos, sejam eles [Button](./button.md), [Hyperlink](./hyperlink.md), [TextField](./text-field.md) ou [ToggleButton](./toggle-button.md), devem respeitar suas próprias características de acessibilidade e usabilidade.
