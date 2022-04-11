# ToggleButton

Um botão de alternância é uma espécie de variação do [Button](./button.md) comum, mas com comportamento tão específico que merece ser documentado à parte. Trata-se de um botão que pode ser selecionado e deselecionado pelo usuário.

Muito comum em barras de tarefas, inclusive em variações apenas com ícone, ou com texto e ícone, é um tipo de usabilidade de conhecimento quase generalizado, por causa de _softwares_ como Word e Excel. Também é eventualmente utilizado em grupos, quando selecionar um dos botões do grupo automaticamente de-seleciona os outros, como um mecanismo de alternância de ações na interface.

## Variações

Este componente não exige a documentação de variações, apenas se adaptando ao modo de cor em uso. No mais, as mesmas possibilidades de um [Button](./button.md) comum também se aplicam, como o uso de ícone junto ao texto, ou o uso apenas de ícone.

A aparência em modo claro:

![ToggleButton - Modo Claro - Padrão](~@source/assets/images/component-togglebutton-light-standard.png)

A aparência em modo escuro:

![ToggleButton - Modo Escuro - Padrão](~@source/assets/images/component-togglebutton-dark-standard.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Quase todas as caraterísticas de _layout_ de botões comuns devem ser seguidas da mesma maneira para botões de alternância, com duas exceções:

1. Botões de alternância nunca podem ser considerados botões de ênfase, pois seu estado normal (deselecionado) é sempre correspondente à aparência de um botão comum, enquanto seu estado selecionado utiliza cores da paleta de [Cor de Ênfase](../guia-visual/cores.md#paleta-de-cor-de-ênfase) por simples motivação visual, não representando o comportamento de um botão de ênfase.
2. Botões de alternância apenas com ícone devem manter seu visual em todos os estados, conforme aqui apresentado, sem remover suas bordas como ocorreria em um botão comum.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>TAB</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.
