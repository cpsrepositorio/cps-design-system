# ColorField

Um campo seletor de cor (_colorfield_) é um tipo especializado de componente de entrada de dados que apresenta um menu flutuante para seleção precisa de uma cor, apresentando um estado de repouso similar a um [DropdownField](./dropdown-field.md) contendo um [Chip](./chip.md) para apresentação da cor atualmente selecionada.

Vale ressaltar que campos seletor de cor atuam da mesma forma que outros campos de entrada de dados em um formulário, portanto também podem exibir rótulo antes da caixa, e também devem reagir a estado `:invalid` caso não passem por alguma validação de dados na tela, todos os mesmos comportamentos descritos para o [TextField](./text-field.md).

<LinkToCpsElements name="input">
  <p>Embora ele não tenha sido especificamente criado para atender esta especificação de <i>colorfield</i>, utilizá-lo com <code>type</code> igual a <code>color</code> deve atender às necessidades mais comuns.</p>
</LinkToCpsElements>

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu estado de repouso, oferecendo acesso imediato à sua ação principal ao ser acionado, exibindo-se o menu flutuante com a interface de seleção de cor a partir da ação. Além disso, quando uma cor encontra-se atualmente selecionada, está é apresentada como um [Chip](./chip.md) dentro do componente em sua variação descartável, para permitir facilmente limpar a cor selecionada atualmente com sua ação de descarte.

A aparência desta variação em modo claro:

![ColorField - Modo Claro - Padrão](~@source/assets/images/component-colorfield-light-closed.png)

A aparência desta variação em modo escuro:

![ColorField - Modo Escuro - Padrão](~@source/assets/images/component-colorfield-dark-closed.png)

### Aberto

Esta variação é acessada sempre que o componente é acionado. É importante considerar que o menu flutuante é aqui exibido meramente como referência de posicionamento em relação ao campo seletor de cor, visto que a documentação detalhada desta peça de interface encontra-se em [MenuFlyout](./menu-flyout.md).

A aparência desta variação em modo claro:

![ColorField - Modo Claro - Aberto](~@source/assets/images/component-colorfield-light-open.png)

A aparência desta variação em modo escuro:

![ColorField - Modo Escuro - Aberto](~@source/assets/images/component-colorfield-dark-open.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Grande parte das questões de _layout_ já abordadas no componente [TextField](./text-field.md) também são válidas para este, como: não redimensionar a caixa verticalmente, não colocar o campo em meio a frases, incluir rótulo (_label_) conforme necessário, reagir a diferentes estados de validação de dados, seguir notação _Sentence case_ conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Estendendo às recomendações sobre rótulo (_label_), recomenda-se que este descreva com clareza a que informação a cor que está sendo selecionada se refere, por exemplo, se é a cor de uma categorização (como um marcador personalizado), se é uma cor de personalização de algum elemento da interface, se é parte dos dados de um item sendo editado (como a cor de um produto).

O texto de espaço reservado (_placeholder_) é altamente recomendado para este componente quando ele puder permanecer vazio, ou seja, sem uma cor selecionada. Desta forma, um rótulo como `"Selecione uma cor"` pode ser muito pertinente para que o usuário perceba rapidamente que não se trata de um simples campo de digitação de texto, mas sim um campo seletor de cor.

Um campo seletor de cor pode não ser "limpável", ou seja, o [Chip](./chip.md) da cor selecionada pode ser utilizado em sua variação padrão ao invés da variação descartável. Isto pode ser relevante em situações onde o usuário pode alterar uma cor padrão, mas não pode deixar sem uma cor selecionada, por exemplo, ao escolher a cor de um pincel em um quadro virtual (onde não seria viável escolher um pincel "sem cor").

A interface do seletor de cores é muito similar, visualmente e comportamentalmente, à interface nativa de seleção de cores do Windows, facilmente observável no aplicativo nativo Microsoft Paint. As três diferenças fundamentais são:
- Campo [SliderField](./slider-field.md) para seleção do nível de opacidade (ou transparência) da cor. Inclusive, este é um elemento opcional, podendo não ser utilizado em casos onde a cor a ser informada pelo usuário deva ser sempre opaca, sem variações de opacidade.
- Campo [TextField](./text-field.md) para apresentação e edição facilitada da cor atualmente selecionada em formato hexadecimal, o formato típico de definição de cores na _web_ e, portanto, uma forma útil para permitir que usuários possam copiar e colar rapidamente cores "prontas".
- Campo [DropdownField](./dropdown-field.md) para permitir alternar entre o formato de exibição decomposto em `RGBA` (visualização padrão baseada nos níveis de _red_, _green_, _blue_, e _alpha_) ou `HSLA` (visualização alternativa baseada nos níveis de _hue_, _saturation_, _light_, e _alpha_).

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.

Quando fizer parte de um formulário, deixe claro quais campos são obrigatórios durante a entrada de dados, ativando o correto estado `:invalid` durante o preenchimento. Para leitores de tela, certifique-se de que a propriedade `aria-required="true"` esteja definida no elemento, e que o _label_ correspondente (que serve como título da caixa de texto) possua o atributo `for` adequadamente interligado ao `id` do campo.
