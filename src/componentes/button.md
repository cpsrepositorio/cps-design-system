# Button

Um botão dá ao usuário uma maneira de acionar uma ação imediata, certamente um dos componentes mais utilizados em diversos tipos de aplicações. Alguns botões são especializados para tarefas específicas, como navegação, ações direcionadas ou apresentação de menus.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

O botão padrão é a variação mais recorrente em uma aplicação, devendo ser utilizado sempre que uma ação direta e imediata do usuário for exigida, apresentando texto claro e imperativo sobre o que ocorre ao ser acionado.

A aparência desta variação em modo claro:

![Button - Modo Claro - Padrão](~@source/assets/images/component-button-light-standard.png)

A aparência desta variação em modo escuro:

![Button - Modo Escuro - Padrão](~@source/assets/images/component-button-dark-standard.png)

### Texto e ícone

Há situações em que uma interface cheia de botões textuais pode se tornar desagradável, difícil de utilizar, ou simplesmente entediante. Um ícone pode ser um grande aliado para que o usuário perceba rapidamente do que se trata determinado botão, antes mesmo de ler seu texto. Ainda assim, o texto pode ser necessário para deixar mais evidente a ação que o botão causa, assim justificando a variação com texto e ícone.

A aparência desta variação em modo claro:

![Button - Modo Claro - Texto e ícone](~@source/assets/images/component-button-light-texticon.png)

A aparência desta variação em modo escuro:

![Button - Modo Escuro - Texto e ícone](~@source/assets/images/component-button-dark-texticon.png)

### Ícone

Existem operações que simplesmente não precisam de grandes explicações, normalmente por já possuírem ícones de grande aceitação popular e conhecimento geral dos usuário. Exemplos típicos são ícones em forma de `X` para fechar algo, ícones em forma de lixeira para excluir algo, setas em geral para designar avançar e voltar entre vários passos em uma tela, dentre outros exemplo. Nestes casos, o uso de texto junto ao ícone seria não somente desperdício de espaço, mas poluição visual.

A aparência desta variação em modo claro:

![Button - Modo Claro - Ícone](~@source/assets/images/component-button-light-icon.png)

A aparência desta variação em modo escuro:

![Button - Modo Escuro - Ícone](~@source/assets/images/component-button-dark-icon.png)

### Ênfase

O botão de ênfase utiliza cores da paleta de [Cor de Ênfase](../guia-visual/cores.md#paleta-de-cor-de-ênfase) e, portanto, representa a variação de botão mais visualmente chamativa da interface. De fato, estes botões são propositalmente preparados para atrair o olhar do usuário e, portanto, devem ser utilizados com cautela apenas para a ação mais importante de uma tela, a chamada _call to action_ da tela.

A aparência desta variação em modo claro:

![Button - Modo Claro - Ênfase](~@source/assets/images/component-button-light-accent.png)

A aparência desta variação em modo escuro:

![Button - Modo Escuro - Ênfase](~@source/assets/images/component-button-dark-accent.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Botões não devem ser redimensionados verticalmente, sempre mantendo-se a medida vertical em `2rem`, com o conteúdo adequadamente centralizado verticalmente e horizontalmente.

Botões textuais devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Botões textuais devem manter espaçamento horizontal confortável, para que o texto não pareça espremido nas bordas. Em geral, ao menos `2.5rem` em cada lado é necessário para manter essa sensação de espaçamento confortável, mas o tamanho pode ser levemente ajustado conforme a necessidade.

Botões que contenham ícones devem seguir as recomendações de [iconografia](../guia-visual/icones.md) deste _design system_. Vale citar também que os ícones em botões devem partir de `1rem` de tamanho, só podendo ser aumentados em situações raras.

Botões em variação apenas com ícone deixam de ter borda e não precisam mais atender às exigências quanto ao espaçamento interno. São excelentes ferramentas para compor uma interface com várias opções conhecias pelos usuários em geral, como uma barra de ferramentas de ações de formatação de textos, por exemplo.

Botões de ênfase, conforme já discutido, devem ser utilizados com cautela. A regra fundamental é utilizar **somente um botão de ênfase por tela**. Vale destacar que isto vale para a área atualmente utilizável da tela, por exemplo: Uma caixa de diálogo cobre a tela com material [esfumaçado](../guia-visual/camadas-e-materiais.md#esfumaçado), ainda que a interface por trás já tenha seu botão de ênfase, ele não está acessível neste momento, então é totalmente plausível que a caixa de dialogo tenha um botão de ênfase.

Botões de ênfase também podem ser adaptados para utilizarem ícones, mas recomenda-se evitar utilizá-los apenas com ícone, sem texto. Por ser a ação mais importante da interface, é essencial que o usuário tenha plena consciência do que efetivamente acontece ao acionar este tipo de botão.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>TAB</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.
