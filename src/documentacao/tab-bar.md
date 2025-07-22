# TabBar

Uma barra de abas é uma maneira de exibir um conjunto de guias e seu respectivo conteúdo. São úteis para exibir várias sub-páginas de conteúdo de forma organizada dentro de uma interface, ao mesmo tempo em que dão ao usuário a capacidade de focar especificamente apenas na aba atualmente ativa no momento.

Interfaces com abas aparecem nas aplicações em um de dois estilos distintos, que diferem em função e aparência: Abas estáticas, frequentemente encontradas em janelas de configurações, com um número definido de guias em uma ordem fixa e conteúdo predefinido; Abas dinâmicas, frequentemente de acordo com documentos abertos (como páginas em navegadores _web_), onde os usuários podem criar, remover e reorganizar guias, movê-las entre janelas, e alterar o documento aberto atualmente na aba ativa.

Com esta definição em mente, as abas descritas neste _design system_ são abas estáticas, visto que dentro de interfaces de sistemas, elas servem como organização de conteúdo previamente definido pelo desenvolvedor, ao invés de conteúdo dinâmico aberto pelo usuário.

## Variações

Este componente não exige a documentação de variações, apenas se adaptando ao modo de cor em uso. Entretanto, trata-se de um componente composto, visto que a barra de abas em si é _container_, e cada botão de guia que compõe a barra é como um sub-componente com seus próprios estados. Desta forma, ambos serão documentados aqui em mais detalhes.

### Barra de abas

A barra de abas apresenta seus botões de guia no topo, bem como a área abaixo que funciona como um [Card](./card.md) acoplado, cujo conteúdo é exibido condicionalmente de acordo com a guia atualmente ativa.

A aparência deste componente em modo claro:

![TabBar - Modo Claro - Barra de abas](~@source/assets/images/component-tabbar-light.png)

A aparência deste componente em modo escuro:

![TabBar - Modo Escuro - Barra de abas](~@source/assets/images/component-tabbar-dark.png)

### Botão de guia

Cada opção dentro de uma barra de abas é um botão de guia, o qual possui alguma semelhança comportamental com um [ToggleButton](./toggle-button.md), embora com visual bem próprio. Isto significa que um botão de guia em estado de repouso (não ativo), possui estados `:hover`, `:active` e `:focus`, enquanto um botão de guia ativo (selecionado) não possui visuais diferenciados para estes estados.

A aparência deste componente em modo claro:

![TabBar - Modo Claro - Botão de guia](~@source/assets/images/component-tabbar-light-item.png)

A aparência deste componente em modo escuro:

![TabBar - Modo Escuro - Botão de guia](~@source/assets/images/component-tabbar-dark-item.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Barras de abas são uma ferramenta potencialmente útil de organização de diversas interfaces em uma única página. Entretanto leve em consideração que alguns usuários podem ignorar as guias secundárias, focando apenas no conteúdo da guia ativa por padrão. Deve ficar bem claro qual tipo de conteúdo é exibido nas outras abas e sua relevância para a ação do usuário. Ainda assim, se houver conteúdo extremamente importante para a ação do usuário desde o princípio, este não deveria estar escondido em abas secundárias, mas sim o _layout_ deveria ser estruturado de outra forma para não depender de barra de abas.

Não é válido uma barra de abas com apenas um botão de guia, afinal isto não seria uma barra, apenas um cartão em exibição contínua. Utilize barra de abas somente se diferentes guias forem necessárias.

A guia ativa por padrão, cujo conteúdo é exibido logo durante o carregamento da página, deve ser sempre a guia correspondente ao primeiro botão da barra de abas.

Botões de guia podem ter somente texto, embora seja recomendado que utilizem ícone junto ao texto para facilitar a identificação rápida do tipo de conteúdo ali apresentado.

Assim como em outros botões, guias devem ser grafadas em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

### Acessibilidade

A barra de abas em si não possui características especiais de acessibilidade. Já cada botão de guia, por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), e `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>). Este componente não possui estado `:disabled`, pois não se deve desabilitar guias, apenas escondê-las caso não sejam necessárias.

Interfaces fortemente baseadas em barras de abas (quando a maior parte da interface de uma tela fica contida dentro de cada guia), é importante que a ação de alternar guias seja similar à alternância entre páginas diferentes, isto é, a mudança de guia ativa deve desencadear uma alteração de URL no navegador, permitindo que o usuário possa copiar a URL alterada e compartilhar, salvar a URL da guia ativa nos favoritos, e utilizar o histórico do navegador para navegação entre guias.
