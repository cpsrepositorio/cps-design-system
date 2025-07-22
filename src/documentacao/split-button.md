# SplitButton

Um botão dividido é uma espécie de variação do [Button](./button.md) comum, mas com comportamento tão específico que merece ser documentado à parte. Trata-se de um botão que possui uma área maior para ação principal, como em um botão comum, mas também conta com uma área menor à direita com comportamento de _drop down_, ou seja, abrindo um menu flutuante com opções extras.

Muito comum em barras de tarefas, inclusive em variações apenas com ícone, ou com texto e ícone, é um tipo de usabilidade de conhecimento quase generalizado, por causa de _softwares_ como Word e Excel. Também é eventualmente utilizado em outros cenários, por exemplo, para designar uma ação principal de busca de dados em uma tabela, e ações secundárias oferecendo outros comportamentos de busca menos utilizados.

<LinkToCpsElements name="split-button" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu estado de repouso, oferecendo acesso imediato à sua ação principal ao ser acionado em sua área maior, ou o acesso ao menu flutuante com opções extras ao ser acionado em sua área menor à direita. No mais, é visualmente e em comportamento muito semelhante a um botão comum.

A aparência desta variação em modo claro:

![SplitButton - Modo Claro - Padrão](~@source/assets/images/component-splitbutton-light-standard.png)

A aparência desta variação em modo escuro:

![SplitButton - Modo Escuro - Padrão](~@source/assets/images/component-splitbutton-dark-standard.png)


### Aberto

Esta variação é automaticamente acessada ao se acionar a área menor à direita, a qual serve como um _drop down_ para exibição de opções adicionais à ação principal do botão. É importante considerar que o menu flutuante é aqui exibido meramente como referência de posicionamento em relação ao botão, visto que a documentação detalhada desta peça de interface encontra-se em [MenuFlyout](./menu-flyout.md).

A aparência desta variação em modo claro:

![SplitButton - Modo Claro - Aberto](~@source/assets/images/component-splitbutton-light-open.png)

A aparência desta variação em modo escuro:

![SplitButton - Modo Escuro - Aberto](~@source/assets/images/component-splitbutton-dark-open.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Quase todas as caraterísticas de _layout_ de botões comuns devem ser seguidas da mesma maneira para botões divididos, exceto a variante de ênfase, visto que um botão dividido nunca pode ser ao mesmo tempo um botão de ênfase, visto que a ênfase deve ser indubitável e somente focada em uma única ação de importância máxima na tela.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.

Estendendo sobre a navegação por teclado, reforça-se que deve diferenciar a área maior à esquerda em relação à área menor à direita, ou seja, cada divisão do botão deve receber o estado `:focus` de teclado individualmente, para poder ser acionada pela tecla <kbd>Enter</kbd> também individualmente.
