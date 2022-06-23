# Card

Um cartão de conteúdo (_card_) é um dos elementos mais recorrentes para organização do _layout_ em aplicações modernas, variando em utilização com diversas possíveis disposições de conteúdo interno. Neste _design system_, eles se encaixam especialmente bem tanto em camadas de [Material Opaco](../guia-visual/camadas-e-materiais.html#opaco) quanto em camadas de [Material Acrílico](../guia-visual/camadas-e-materiais.html#acrilico).

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão do _card_ é baseada na cor de plano de fundo mais clara do modo de cor vigente, e apresenta uma sombra de elevação sutil em seu estado padrão de repouso. Eventualmente, toda a área de um cartão pode ser acionável ao se clicar/tocar nele, neste caso os estados `:hover` e `:active` podem ser utilizados, os quais se utilizam somente de variação na [Elevação](../guia-visual/elevacao.md) para proporcionar o efeito visual.

A aparência desta variação em modo claro:

![Card - Modo Claro - Padrão](~@source/assets/images/component-card-light-standard.png)

A aparência desta variação em modo escuro:

![Card - Modo Escuro - Padrão](~@source/assets/images/component-card-dark-standard.png)

### Sobre Acrílico

Esta variação do _card_ utiliza-se de uma opacidade levemente menor, para favorecer o visual quando posicionado sobre superfícies acrílicas. Tirando este sutil ajuste, todas as outras caraterísticas, inclusive a possibilidade de utilizar os estados `:hover` e `:active`, permanecem como na variação padrão.

A aparência desta variação em modo claro:

![Card - Modo Claro - Padrão](~@source/assets/images/component-card-light-onacrylic.png)

A aparência desta variação em modo escuro:

![Card - Modo Escuro - Padrão](~@source/assets/images/component-card-dark-onacrylic.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Recomenda-se utilizar um espaçamento interno (_padding_) padrão de `1.5rem` entre as bordas dos cartões e seus elementos internos. Recomenda-se também manter uma distância padrão de `1rem` entre os elementos internos do cartão, ou entre blocos de elementos no caso de _layouts_ mais complexos.

Os estados `:hover` e `:active` só devem ser utilizados caso toda a área do cartão for acionável durante clique/toque. Por exemplo, cartões de produtos (contendo uma grande imagem e um breve título abaixo) geralmente direcionam para outra tela que apresenta detalhes do produto, usabilidade esta favorecida se todo o cartão puder ser acionado para que esta navegação ocorra, portanto este tipo de cartão deve utilizar seus diferentes estados. Como contra-exemplo, um cartão informativo que possui vários botões em seu rodapé não é acionável por inteiro, visto que cada botão possui sua própria ação, portanto este tipo de cartão não deve utilizar seus diferentes estados, permanecendo em estado padrão de repouso.

Cartões podem ser organizados em diferentes blocos de conteúdo, normalmente utilizando-se pequenos separados com linhas de `1px` entre os blocos. Por exemplo, um cenário típico é um cartão contendo cabeçalho com alguns elementos, uma área de conteúdo que pode ser construída de acordo com a necessidade de cada _layout_, e uma área de rodapé com botões de ação.

A aparência deste exemplo de utilização em modo claro:

![Card - Modo Claro - Exemplo de Layout](~@source/assets/images/component-card-light-sample.png)

A aparência deste exemplo de utilização em modo escuro:

![Card - Modo Escuro - Exemplo de Layout](~@source/assets/images/component-card-dark-sample.png)

### Acessibilidade

Quando o _card_ for inteiramente acionável pelo usuário, conforme já abordado, utilizando estados de interação `:hover` para movimentação do _mouse_ e `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), é essencial que também utilize `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), utilizando o mesmo retângulo de foco padrão desde _design system_, apresentado em outros componentes acionáveis por teclado, como [Button](./button.md).
