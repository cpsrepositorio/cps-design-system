# TextField

A caixa de texto é o elemento mais comum para permitir a entrada de dados pelo usuário, através da digitação de texto no campo. Normalmente é usado para capturar uma única linha de texto, mas pode ser configurado para capturar várias linhas (o que em HTML são elementos diferentes, `<input>` e `<textarea>`, mas comportamentalmente podem ser designados como o mesmo componente). O texto é exibido na tela conforme informado, em formato bruto, uniforme e simples.

Caixas de texto também pode ser estendidas, a fim de simplificar a entrada de texto, desde a exibição de auto-completação a partir de valores informados previamente pelo usuário em campos de assunto similar, até a exibição de ícones e/ou botões internos que acrescentam funcionalidades extras, e ajudam a demonstrar o significado de determinada da caixa de texto de forma mais clara.

Pelo nível de especificidade, algumas destas variações acabam sendo consideradas componentes distintos, como [NumberField](./number-field.md) e [DateField](./date-field.md), mantendo-se neste documento apenas as variações mais sutis e que não modificam fortemente o comportamento padrão da caixa de texto.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu funcionamento mais básico, diretamente alinhado a elementos nativos do HTML (`<input>` e `<textarea>`), apenas com o visual adaptado a este _design system_.

A aparência desta variação em modo claro:

![TextField - Modo Claro - Padrão](~@source/assets/images/component-textfield-light-standard.png)

A aparência desta variação em modo escuro:

![TextField - Modo Escuro - Padrão](~@source/assets/images/component-textfield-dark-standard.png)

### Com rótulo

Embora alguns contestem que o rótulo de um campo seja especificado como parte deste campo, isto faz todo sentido tanto do ponto de vista visual, quanto do ponto de vista de comportamento e acessibilidade, já que o rótulo deve ser explicitamente vinculado à caixa de texto relacionada.

A aparência desta variação em modo claro:

![TextField - Modo Claro - Com rótulo](~@source/assets/images/component-textfield-light-label.png)

A aparência desta variação em modo escuro:

![TextField - Modo Escuro - Com rótulo](~@source/assets/images/component-textfield-dark-label.png)

### Limpável

Esta variação é o exemplo fundamental de como uma caixa de texto pode agregar elementos internos, neste caso um botão com ícone em forma de `X`, cujo acionamento limpa todo o conteúdo do campo em questão.

A aparência desta variação em modo claro:

![TextField - Modo Claro - Limpável](~@source/assets/images/component-textfield-light-clearable.png)

A aparência desta variação em modo escuro:

![TextField - Modo Escuro - Limpável](~@source/assets/images/component-textfield-dark-clearable.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Caixas de texto de linha simples não devem ser redimensionadas verticalmente, sempre mantendo-se a medida vertical em `2rem`, com o conteúdo adequadamente centralizado verticalmente.

Use um campo de texto de múltiplas linhas quando forem esperadas entradas longas de texto com quebras de linha. Neste caso, a medida vertical em `2rem` deve ser sua medida mínima aceitável quando redimensionado pelo usuário, podendo sua medida vertical padrão e sua medida vertical máxima serem ajustáveis conforme a necessidade da interface e a quantidade de texto esperado em média para aquela entrada.

Não coloque um campo de texto no meio de uma frase, porque a estrutura da frase pode não fazer sentido em todas as entradas de dados possíveis, ou pode ser simplesmente confuso para o usuário entender o que é esperado ali. Por exemplo, `"Lembrar-me em [TextField] semanas"` deve ser `"Lembrar-me em semanas: [TextField]"`.

Formate o campo de texto para a entrada esperada, ou seja, aplique **máscara de entrada** conforme necessário para formatos que o necessitem. Por exemplo, quando alguém precisa inserir um número de telefone, use uma máscara de entrada para indicar os três blocos de dígitos que devem ser inseridos, com dois dígitos para o código de área, quatro ou cinco dígitos para o prefixo, e quatro dígitos para o telefone.

Cautela quanto ao item anterior, muito pior do que não ter máscara de entrada é utilizar uma máscara erroneamente limitante. Por exemplo, RG é impossível de formatar com máscara, visto que varia de uma unidade federativa para outra. Outro exemplo, placas veiculares não podendo ser informadas por causa de máscara desatualizada, que não prevê a digitação de letras após o hífen. Exemplo final, não permitir a digitação de número de telefone com cinco dígitos no prefixo é um erro terrível de muitos sistemas ainda hoje (lembre-se que grande parte da população não usa mais telefone fixo, celular como telefone principal é plenamente plausível).

Inclua rótulo (_label_) acima do campo de texto para intitular o campo claramente, sempre que possível. Evite texto de espaço reservado (_placeholder_) em vez de rótulo. O texto de espaço reservado apresenta uma variedade de problemas, incluindo possíveis problemas com cor/contraste, ou pessoas pensando erroneamente que a entrada do formulário já está preenchida. Exceções apenas em casos pontuais, como em uma caixa de pesquisa cujo texto de espaço reservado `"Pesquisar..."` é o suficiente para o entendimento de que aquela caixa pode ser acionada e um valor ali ser informado.

O rótulo dos campos de texto devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação), exceto para casos pontuais de nomes próprios, siglas e abreviações amplamente conhecidas, conforme também apresentado nas regras de formatação tipográficas.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>TAB</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.

Quando fizer parte de um formulário, deixe claro quais campos são obrigatórios durante a entrada de dados, ativando o correto estado `:invalid` durante o preenchimento. Para leitores de tela, certifique-se de que a propriedade `aria-required="true"` esteja definida no elemento, e que o _label_ correspondente (que serve como título da caixa de texto) possua o atributo `for` adequadamente interligado ao `id` do campo.
