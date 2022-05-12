# ListView

Uma exibição em lista (_list view_) permite apresentar dados empilhados verticalmente. Embora tal componente possa ser usado para simples apresentação somente leitura de informações empilhadas, na maioria das vezes é utilizado como mecanismo de entrada de dados, sendo um subcomponente recorrente em situações onde menus são utilizados, como em [DropdownField](./dropdown-field.md) e [DropdownButton](./dropdown-button.md).

A exibição em lista com empilhamento vertical funciona melhor para itens com texto como ponto focal, e/ou coleções que devem ser lidas de cima para baixo (ou seja, ordenadas alfabeticamente/incrementalmente/cronologicamente). Alguns casos de uso comuns para a exibição em lista inclui listas de mensagens e resultados de pesquisa.

Teoricamente, uma apresentação em lista poderia ser utilizada com fluidez horizontal (ou seja, itens lado a lado), porém, para facilitar a identificação, este _design system_ optou por nomear tal situação como um componente distinto, o [GridView](./grid.md).

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A exibição em lista padrão é a variação mais recorrente em uma aplicação, sendo composta por um conjunto de itens de lista, estáticos ou acionáveis ao serem clicados, dependendo da necessidade da interface. Os items de lista podem ser meramente textuais como no exemplo aqui apresentado, mas também podem conter ícone antes do texto, seguindo as mesmas recomendações de ícones com texto existente em [Button](./button.md).

A aparência deste componente em modo claro:

![ListView - Modo Claro - Padrão](~@source/assets/images/component-listview-light-standard.png)

A aparência deste componente em modo escuro:

![ListView - Modo Escuro - Padrão](~@source/assets/images/component-listview-dark-standard.png)

### Seleção Múltipla

Esta variação é utilizada com menos frequência, mas é relevante quando mais de um item de lista puder ser selecionado concomitantemente. Neste caso, é possível selecionar e de-selecionar os itens de forma independente entre si.

A aparência desta variação em modo claro:

![ListView - Modo Claro - Seleção Múltipla](~@source/assets/images/component-listview-light-multiselect.png)

A aparência desta variação em modo escuro:

![ListView - Modo Escuro - Seleção Múltipla](~@source/assets/images/component-listview-dark-multiselect.png)

### Item de lista

Não necessariamente uma variação, mas sim um complemento às variações previamente documentadas. Cada opção dentro de uma exibição em lista é um sub-componente próprio, o qual possui alguma semelhança comportamental com um [ToggleButton](./toggle-button.md), embora com visual bem próprio. Isto significa que um item de lista em estado de repouso (não ativo), possui estados `:hover`, `:active` e `:focus`, enquanto um item de lista ativo (selecionado) não possui visuais diferenciados para estes estados.

A aparência deste componente em modo claro:

![ListView - Modo Claro - Item de lista](~@source/assets/images/component-listview-light-item.png)

A aparência deste componente em modo escuro:

![ListView - Modo Escuro - Item de lista](~@source/assets/images/component-listview-dark-item.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Embora cada um dos itens de lista tenham uma medida vertical padrão equivalente a [Button](button.md), é possível que possuam altura maior no caso de exibirem informações em múltiplas linhas dentro de cada item, conforme a necessidade de apresentação de dados do _layout_.

Itens podem ser puramente textuais conforme os exemplos aqui demonstrados, mas também podem conter ícones junto ao texto, ou mesmo outros elementos de apoio, como [Avatar](./avatar.md) no caso de uma lista de usuários, [Badge](./badge.md) para acrescentar-se informações após os textos, ou ainda composições em uma ou mais linhas dentro do item, com variações de fonte para designar texto principal do item e diferenciá-lo de textos secundários.

Quando várias listas são utilizadas em uma mesma interface, sugere-se que estas sejam explicitamente agrupadas conforme a temática, utilizando-se rótulo descritivo assim como em [TextField](./text-field.md).

No caso de listas com seleção múltipla, deve-se também agrupar conjuntos de opções mutuamente exclusivas ou múltiplas selecionáveis.

Itens de lista devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Em uma percepção mais abrangente, uma lista de itens poderia ser utilizada com múltiplas colunas de dados para cada linha (ou seja, para cada item da lista), entretanto esta composição é conhecida como um componente à parte para fins de organização, o componente [DataTable](./data-table.md).

### Acessibilidade

Caso a visualização em lista seja composta por itens selecionáveis, é importante garantir que as teclas de setas <kbd>&uarr;</kbd> e <kbd>&darr;</kbd> alternem a seleção dos elementos anteriores e posteriores ao atual, respectivamente.

Caso seja seleção simples, pressionar <kbd>Enter</kbd> confirma a seleção, automaticamente colocando o item que estava marcado/focado como o novo item exclusivamente selecionado.

Caso seja seleção múltipla, pressionar <kbd>Enter</kbd> apenas seleciona ou de-seleciona o item marcado/focado, os outros itens em seus estados atuais.
