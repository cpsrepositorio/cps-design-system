# DropdownField

Um campo de lista suspensa (_dropdown_) é um tipo de componente de entrada de dados que apresenta uma lista de opções, onde o item atualmente selecionado está sempre visível enquanto outros itens são visíveis sob demanda, ao se acionar qualquer área do componente.

Os campos de lista suspensa são normalmente usados para formulários, em situações onde a quantidade de opções alternativas para seleção é grande demais para a exibição de vários [CheckField](./check-field.md) em modo _radio_ na tela.

Vale ressaltar que campos de lista suspensa atuam da mesma forma que outros campos de entrada de dados em um formulário, portanto também podem exibir rótulo antes da caixa, e também devem reagir a estado `:invalid` caso não passem por alguma validação de dados na tela, todos os mesmos comportamentos descritos para o [TextField](./text-field.md).

<LinkToCpsElements name="select" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu estado de repouso, oferecendo acesso imediato à sua ação principal ao ser acionado, exibindo-se o menu flutuante com a lista suspensa a partir da ação.

A aparência desta variação em modo claro:

![DropdownField - Modo Claro - Padrão](~@source/assets/images/component-dropdownfield-light-closed.png)

A aparência desta variação em modo escuro:

![DropdownField - Modo Escuro - Padrão](~@source/assets/images/component-dropdownfield-dark-closed.png)

### Aberto

Esta variação é acessada sempre que o componente é acionado. É importante considerar que o menu flutuante é aqui exibido meramente como referência de posicionamento em relação ao campo de lista suspensa, visto que a documentação detalhada desta peça de interface encontra-se em [MenuFlyout](./menu-flyout.md).

A aparência desta variação em modo claro:

![DropdownField - Modo Claro - Aberto](~@source/assets/images/component-dropdownfield-light-open.png)

A aparência desta variação em modo escuro:

![DropdownField - Modo Escuro - Aberto](~@source/assets/images/component-dropdownfield-dark-open.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Use um campo de lista suspensa quando uma das situações a seguir for válida:
- As várias opções podem ser recolhidas em um título simplificado.
- A lista de itens é muito longa e o espaço na tela é restrito.
- A opção selecionada é mais importante que as alternativas (em contraste com os campos de checagem onde todas as opções são visíveis, dando ênfase igual a todas ao mesmo tempo).

Grande parte das questões de _layout_ já abordadas no componente [TextField](./text-field.md) também são válidas para este, como: não redimensionar a caixa verticalmente, não colocar o campo em meio a frases, incluir rótulo (_label_) conforme necessário, reagir a diferentes estados de validação de dados, seguir notação _Sentence case_ conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Estendendo às recomendações sobre rótulo (_label_), recomenda-se que este descreva com clareza que tipo de informação pode ser encontrada na lista de opções, ao invés de apresentar apenas um texto genérico do tipo `"Selecione uma opção"`. Este tipo de texto genérico se encaixa melhor como um texto de espaço reservado (_placeholder_) dentro do campo de lista suspensa, conforme descrito a seguir.

O texto de espaço reservado (_placeholder_) é altamente recomendado para este componente, sempre que não há item selecionado por padrão. Desta forma, um _placeholder_ como `"Selecione uma opção"` pode ser muito pertinente para que o usuário perceba rapidamente que não se trata de um simples campo de digitação de texto, mas sim um campo com uma lista suspensa oculta. Observe, portanto, que _label_ e _placeholder_ são complementares neste tipo de campo, e portanto ambos são recomendados, e com valores propositalmente distintos.

Sobre os itens da lista suspensa, algumas recomendações também são pertinentes:
- Se os dados a serem informados permitem que o usuário escolha `"Nenhum"`, coloque isto claramente como opção na lista suspensa. Isto garante que o usuário escolheu conscientemente esta opção, ao invés de simplesmente ter deixado o campo sem seleção por engano.
- Use frases resumidas ou palavras simples para os items da lista, evitando ao máximo a necessidade de quebras de linha ou o uso de truncagem com reticências nos itens.
- Monte os textos das opções usando construção paralela, isto é, comece as sentenças de todas as opções pela mesma parte do discurso ou pelo mesmo tempo verbal. Exemplo de opções ferindo esta prática: `"Desligar o computador"`, `"Ative a hibernação"`, `"Suspensão"`. Exemplo de opções seguindo corretamente esta prática: `"Desligar"`, `"Hibernar"`, `"Suspender"`.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.

Quando fizer parte de um formulário, deixe claro quais campos são obrigatórios durante a entrada de dados, ativando o correto estado `:invalid` durante o preenchimento. Para leitores de tela, certifique-se de que a propriedade `aria-required="true"` esteja definida no elemento, e que o _label_ correspondente (que serve como título da caixa de texto) possua o atributo `for` adequadamente interligado ao `id` do campo.

Sobre a acessibilidade durante a navegação na lista suspensa aberta, é importante garantir que as teclas de setas <kbd>&uarr;</kbd> e <kbd>&darr;</kbd> alternem a seleção dos elementos anteriores e posteriores ao atual, respectivamente. Pressionar <kbd>Enter</kbd> com a lista suspensa aberta confirma a seleção, automaticamente fechando-a e colocando o item que estava marcado/focado como a nova opção selecionada.
