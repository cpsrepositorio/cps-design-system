# MultiSelectField

Um campo de seleção múltipla é uma espécie de extensão do [DropdownField](./dropdown-field.md), porém documentado separadamente por apresentar visual e comportamentos únicos. Este tipo de componente é utilizado quando a seleção de múltiplos itens dentro de uma única caixa de seleção for possível, onde mais de um item atualmente selecionado está sempre visível enquanto outros itens são visíveis sob demanda.

Assim como os campos de lista suspensa, campos de seleção múltipla são normalmente usados para formulários, em situações onde a quantidade de opções alternativas para seleção é grande demais para a exibição de vários [CheckField](./check-field.md) em modo _checkbox_ na tela.

Vale ressaltar que campos de seleção múltipla atuam da mesma forma que outros campos de entrada de dados em um formulário, portanto também podem exibir rótulo antes da caixa, e também devem reagir a estado `:invalid` caso não passem por alguma validação de dados na tela, todos os mesmos comportamentos descritos para o [TextField](./text-field.md).

<LinkToCpsElements name="select" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu estado de repouso, oferecendo acesso imediato à sua ação principal ao ser acionado, exibindo-se o menu flutuante com a lista suspensa a partir da ação. Adicionalmente, cada item por ventura já selecionado anteriormente apresenta-se como um [Chip](./chip.md) acessível neste estado padrão, facilitando a usabilidade de remover um item previamente selecionado graças à variação descartável do _chip_.

A aparência desta variação em modo claro:

![MultiSelectField - Modo Claro - Padrão](~@source/assets/images/component-multiselectfield-light-closed.png)

A aparência desta variação em modo escuro:

![MultiSelectField - Modo Escuro - Padrão](~@source/assets/images/component-multiselectfield-dark-closed.png)

### Aberto

Esta variação é acessada sempre que o componente é acionado, apresentando um conjunto de opções que podem ser concomitantemente selecionadas através de _checkboxes_, devido à característica de seleção múltipla do componente. É importante considerar que o menu flutuante é aqui exibido meramente como referência de posicionamento em relação ao campo de seleção múltipla, visto que a documentação detalhada desta peça de interface encontra-se em [MenuFlyout](./menu-flyout.md).

A aparência desta variação em modo claro:

![MultiSelectField - Modo Claro - Aberto](~@source/assets/images/component-multiselectfield-light-open.png)

A aparência desta variação em modo escuro:

![MultiSelectField - Modo Escuro - Aberto](~@source/assets/images/component-multiselectfield-dark-open.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Use um campo de seleção múltipla quando uma das situações a seguir for válida:
- As várias opções concomitantes podem ser recolhidas em um título simplificado.
- A lista de itens é muito longa e o espaço na tela é restrito.
- As opções selecionadas são mais importantes que as alternativas (em contraste com os campos de checagem onde todas as opções são visíveis, dando ênfase igual a todas ao mesmo tempo).

Dado o espaço horizontal disponível para exibir o campo de seleção múltipla, pode não ser possível exibir os _chips_ de todos os itens atualmente selecionados. Neste caso, recomenda-se utilizar reticências após o último item que cabe na visualização, como um sutil indicativo de que há mais itens selecionados. Observe este breve exemplo:

![MultiSelectField - Exemplo - Múltiplos Chips](~@source/assets/images/component-multiselectfield-light-many-chips.png)

Sempre que possível (ou seja, quando não houverem diferentes grupos de informação organizados através de separadores), recomenda-se que a lista de itens tenha opções ordenadas alfabeticamente/incrementalmente/cronologicamente, para facilitar a rápida localização por parte do usuário. Isto vale tanto para os itens em repouso quanto os itens dentro do menu flutuante.

É essencial manter a ordem dos itens exibidos em estado de repouso equivalente à ordem dos itens exibidos no menu flutuante, visto que isto permitirá que o usuário compreenda exatamente quais itens não couberam na exibição em repouso, bem como facilitará que o usuário localize rapidamente itens para seleciona/de-selecionar.

Por fim, ressalta-se que todas as boas práticas de _layout_ descritas em [DropdownField](./dropdown-field.md) também se aplicam a este componente e devem ser observadas.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.

Quando fizer parte de um formulário, deixe claro quais campos são obrigatórios durante a entrada de dados, ativando o correto estado `:invalid` durante o preenchimento. Para leitores de tela, certifique-se de que a propriedade `aria-required="true"` esteja definida no elemento, e que o _label_ correspondente (que serve como título da caixa de texto) possua o atributo `for` adequadamente interligado ao `id` do campo.

Sobre a acessibilidade durante a navegação no menu flutuante aberto, é importante garantir que as teclas de setas <kbd>&uarr;</kbd> e <kbd>&darr;</kbd> alternem a seleção dos elementos anteriores e posteriores ao atual, respectivamente. Pressionar <kbd>Enter</kbd> com o menu aberto seleciona/de-seleciona o item em foco, mas não influencia no menu em si, mantendo-se aberto.
