# DropdownButton

Um botão de lista suspensa (_dropdown_) é componente de aproveitamento de espaço na tela, servindo como uma ação de atalho para exibição de um menu flutuante, o qual pode oferecer listas de opções, ou mesmo outros componentes dentro, como um conjunto de outros botões (pense em botões na barra de ferramentas do pacote Office, por exemplo).

É fundamentalmente muito similar a um [DropdownField](./dropdown-field.md), entretanto exibe a aparência básica de um [Button](./button.md) padrão, em suas cores, dimensões e cantos arredondados. Portanto, é o elemento ideal para representar ações que resultem em listas suspensas, enquanto a caixa de lista suspensa é ideal para ser inserida em meio a outros campos de entrada de dados, como em um formulário.

<LinkToCpsElements name="dropdown" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu estado de repouso, oferecendo acesso imediato à sua ação principal ao ser acionado, exibindo-se o menu flutuante com a lista suspensa a partir da ação.

A aparência desta variação em modo claro:

![DropdownButton - Modo Claro - Padrão](~@source/assets/images/component-dropdownbutton-light-closed.png)

A aparência desta variação em modo escuro:

![DropdownButton - Modo Escuro - Padrão](~@source/assets/images/component-dropdownbutton-dark-closed.png)

Observa-se também que, diferente de um [DropdownField](./dropdown-field.md), este componente não exige texto sobre a opção atualmente selecionada, mas é recomendado utilizar texto junto ao ícone na maioria dos casos, para evitar possíveis desentendimentos a partir do significado do ícone sozinho.

### Aberto

Esta variação é acessada sempre que o componente é acionado. É importante considerar que o menu flutuante é aqui exibido meramente como referência de posicionamento em relação ao botão de lista suspensa, visto que a documentação detalhada desta peça de interface encontra-se em [MenuFlyout](./menu-flyout.md).

A aparência desta variação em modo claro:

![DropdownButton - Modo Claro - Aberto](~@source/assets/images/component-dropdownbutton-light-open.png)

A aparência desta variação em modo escuro:

![DropdownButton - Modo Escuro - Aberto](~@source/assets/images/component-dropdownbutton-dark-open.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Sendo um tipo especializado de botão, este componente também deve seguir recomendações básicas de _layout_ e dimensões apresentadas em [Button](./button.md), especialmente as que se aplicando à variação de botão padrão, por compartilharem aparência similar.

As mesmas recomendações sobre os itens da lista suspensa apresentadas em [DropdownField](./dropdown-field.md) também se aplicam aos botões de lista suspensa. Entretanto, reforça-se que as listas suspensas dos botões tão podem conter outros elementos que não sejam somente itens selecionáveis, como outros botões ou outros elementos relevantes para a operação da interface. Por exemplo, um menu flutuante totalmente personalizado como o utilizado no botão de "Inserir Tabela" na barra de ferramentas do Word.

### Acessibilidade

Por ser um componente acionável pelo usuário, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.

Sobre a acessibilidade durante a navegação na lista suspensa aberta, quando esta for composto por itens selecionáveis, é importante garantir que as teclas de setas <kbd>&uarr;</kbd> e <kbd>&darr;</kbd> alternem a seleção dos elementos anteriores e posteriores ao atual, respectivamente. Pressionar <kbd>Enter</kbd> com a lista suspensa aberta confirma a seleção, automaticamente fechando-a e colocando o item que estava marcado/focado como a nova opção selecionada.
