# TreeView

Uma exibição em árvore (_tree view_) permite apresentar dados empilhados hierarquicamente. Embora tal componente possa ser usado para simples apresentação somente leitura de informações hierárquicas, na maioria das vezes é utilizado como mecanismo de entrada de dados, permitindo seleção simples ou múltipla de registros.

É uma espécie de "evolução" do componente [ListView](./list-view.md), ao acrescentar-se diferentes níveis aos itens da lista.

Embora seja muitas vezes considerado um componente de usabilidade avançada no âmbito de sistemas Web, é ao mesmo tempo uma usabilidade comum nos sistemas operacionais _desktop_ em geral, como na árvore de arquivos do Windows Explorer ou do macOS Finder.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A exibição em árvore padrão é a variação mais recorrente em uma aplicação, sendo composta por um conjunto de itens de lista, estáticos ou acionáveis ao serem clicados, dependendo da necessidade da interface. Os items de lista podem ser meramente textuais como no exemplo aqui apresentado, mas também podem conter ícone antes do texto, seguindo as mesmas recomendações de ícones com texto existente em [Button](./button.md).

A aparência deste componente em modo claro:

![TreeView - Modo Claro - Padrão](~@source/assets/images/component-treeview-light-standard.png)

A aparência deste componente em modo escuro:

![TreeView - Modo Escuro - Padrão](~@source/assets/images/component-treeview-dark-standard.png)

### Seleção Múltipla

Esta variação é utilizada com menos frequência, mas é relevante quando mais de um item da árvore puder ser selecionado concomitantemente. Neste caso, é possível selecionar e de-selecionar os itens de forma independente entre si. Eventualmente, atrela-se este comportamento ao nível hierárquico da árvore, por exemplo, automaticamente selecionando-se os itens de níveis superiores quando determinado item de nível interno é selecionado.

A aparência desta variação em modo claro:

![TreeView - Modo Claro - Seleção Múltipla](~@source/assets/images/component-treeview-light-multiselect.png)

A aparência desta variação em modo escuro:

![TreeView - Modo Escuro - Seleção Múltipla](~@source/assets/images/component-treeview-dark-multiselect.png)

### Item de Lista

Não necessariamente uma variação, mas sim um complemento às variações previamente documentadas. No caso da exibição em árvore, os itens de lista se comportamento de forma muito semelhante aos itens de lista do componente [ListView](./list-view.md#item-de-lista), exceto pelo fato de que itens em níveis superiores se utilizam de ícone em forma de chevron para apresentar seu estado contraído ou expandido.

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Embora cada um dos itens de lista tenha uma medida vertical padrão equivalente a [Button](button.md), é possível que possuam altura maior no caso de exibirem informações em múltiplas linhas dentro de cada item, conforme a necessidade de apresentação de dados do _layout_. Entretanto, itens excessivamente grandes verticalmente podem quebrar a noção de hierarquia da árvore e devem ser utilizados com muita cautela e sem exageros.

Itens podem ser puramente textuais conforme os exemplos aqui demonstrados, mas também podem conter ícones junto ao texto, ou mesmo outros elementos de apoio, como [Avatar](./avatar.md) no caso de uma árvore de usuários, [Badge](./badge.md) para acrescentar-se informações após os textos, ou ainda composições em uma ou mais linhas dentro do item, com variações de fonte para designar texto principal do item e diferenciá-lo de textos secundários.

No caso de árvores com seleção múltipla, deve-se também agrupar conjuntos de opções mutuamente exclusivas ou múltiplas selecionáveis de forma que faça sentido na hierarquia. Por exemplo, considere como a lógica de agrupar arquivos dentro de pastas em uma árvore de arquivos faz sentido logicamente para o usuário final.

Itens de lista devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

### Acessibilidade

Caso a visualização em árvore seja composta por itens selecionáveis, é importante garantir que as teclas de setas <kbd>&uarr;</kbd> e <kbd>&darr;</kbd> alternem a seleção dos elementos anteriores e posteriores ao atual, respectivamente.

Caso seja seleção simples, pressionar <kbd>Enter</kbd> confirma a seleção, automaticamente colocando o item que estava marcado/focado como o novo item exclusivamente selecionado.

Caso seja seleção múltipla, pressionar <kbd>Enter</kbd> apenas seleciona ou de-seleciona o item marcado/focado, mantendo-se outros itens em seus estados atuais.
