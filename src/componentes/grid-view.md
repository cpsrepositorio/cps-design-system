# GridView

Uma exibição em grade (_grid view_) permite apresentar dados empilhados horizontalmente. Embora muitas vezes usado para simples apresentação somente leitura de informações empilhadas, tal componente também pode ser um mecanismo de entrada de dados, por permitir estados de seleção tanto para um único item quanto para vários ao mesmo tempo.

A exibição em grade com empilhamento horizontal funciona melhor para itens com tamanho vertical considerável e, preferencialmente, com verticais medidas similares entre todos os itens. Outra caraterística relevante de exibição em grade é a possibilidade de fluir automaticamente os itens para novas linhas de conteúdo, quando a dimensão horizontal não pode ser acomodada dentro das medidas da exibição em grade. Alguns casos de uso comuns para a exibição em grade inclui visualização de miniaturas de arquivos, exibição de diversos componentes [Card](./card.md) em uma grade de itens (produtos, serviços, registros em geral), _dashboards_ com gráficos em uma tela principal, dentre outros casos de uso.

Uma apresentação em grade até pode ser utilizada com fluidez vertical (ou seja, itens um abaixo do outro), uma situação válida quando se está utilizando exibição em grade em telas pequenas e dois ou mais itens não cabem horizontalmente na mesma linha. Mas isto é apenas uma reação do efeito de quebra automática de linha (_wrap_), já que lista propositalmente empilhadas sempre na vertical correspondem a outro componente, o [ListView](./list-view.md).

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A exibição em grade padrão é a variação mais recorrente em uma aplicação, sendo composta por um conjunto de itens lado a lado (quebrando para uma nova linha automaticamente se necessário), estáticos ou acionáveis ao serem clicados, dependendo da necessidade da interface. Os items da grade podem ser qualquer tipo de componente simples ou complexo, como um [Card](./card.md), ou mesmo um _container_ HTML com diversos outros elementos e/ou componentes dentro.

A aparência deste componente em modo claro:

![GridView - Modo Claro - Padrão](~@source/assets/images/component-gridview-light-standard.png)

A aparência deste componente em modo escuro:

![GridView - Modo Escuro - Padrão](~@source/assets/images/component-gridview-dark-standard.png)

### Seleção Múltipla

Esta variação é utilizada com menos frequência, mas é relevante quando mais de um item da grade puder ser selecionado concomitantemente. Neste caso, é possível selecionar e de-selecionar os itens de forma independente entre si.

A aparência desta variação em modo claro:

![GridView - Modo Claro - Seleção Múltipla](~@source/assets/images/component-gridview-light-multiselect.png)

A aparência desta variação em modo escuro:

![GridView - Modo Escuro - Seleção Múltipla](~@source/assets/images/component-gridview-dark-multiselect.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Exibições em grade são muito flexíveis, sendo peça chave para construção de _layouts_ modernos e responsivos, que se adaptam de colunas para linhas conforme o espaço horizontal disponível. Utilize isso a favor da interface que estiver construindo e lembre-se de testar os dimensionamentos fluidos e reposicionamentos de quebra em diferentes resoluções, conforme descrito em [ajustes para responsividade](../guia-visual/dimensoes-e-espacamentos.md#ajustes-para-responsividade).

Quando várias grades são utilizadas em uma mesma interface, sugere-se que estas sejam explicitamente agrupadas conforme a temática, utilizando-se rótulos descritivos antes de cada grade, componentes [Separator](./separator.md), ou mesmo elementos textuais com diferentes escalas da [pilha tipográfica](../guia-visual/tipografia.md#pilha-tipográfica) para representar títulos e subtítulos da seção apresentada através de exibição em grade.

No caso de grades com seleção múltipla, deve-se também agrupar conjuntos de opções mutuamente exclusivas ou múltiplas selecionáveis.

Itens da grade, quando forem apenas sentenças textuais curtas, devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Em uma percepção mais abrangente, uma grade de itens poderia ser utilizada com diferentes dimensões horizontais e verticais em suas colunas e linhas, permitindo estruturar qualquer tipo de _layout_ desejado. De fato, este é um raciocínio correto mas não exige-se um componente específico para tal, uma vez que a própria especificação de [CSS Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout) proporciona toda a flexibilidade necessária para construção de grades de dimensões diversas entre colunas e linhas, bem como outras características avançadas (como _column span_, _row span_, _grid area_, _template rows_, _template columns_, _gap_, dentre outras características).

### Acessibilidade

Caso a visualização em grade seja composta por itens selecionáveis, é importante garantir que as teclas de setas <kbd>&uarr;</kbd> e <kbd>&darr;</kbd> alternem a seleção dos elementos anteriores e posteriores ao atual, respectivamente.

Caso seja seleção simples, pressionar <kbd>Enter</kbd> confirma a seleção, automaticamente colocando o item que estava marcado/focado como o novo item exclusivamente selecionado.

Caso seja seleção múltipla, pressionar <kbd>Enter</kbd> apenas seleciona ou de-seleciona o item marcado/focado, mantendo-se outros itens em seus estados atuais.
