# FloatingPanel

Um painel flutuante é uma espécie de componente misto, integrando a experiência de [Card](./card.md) com [Dialog](./dialog.md) em um painel que cobre o restante da interface através do uso de material [esfumaçado](../guia-visual/camadas-e-materiais.md#esfumaçado), com o cartão aparecendo a partir de uma das laterais da tela e ocupando verticalmente todo o _viewport_.

Painéis flutuantes são úteis em várias situações, por exemplo, exibir dados detalhados após selecionar um registro em uma tabela, oferecer um conjunto de filtros a serem escolhidos antes da exportação de um relatório, disponibilizar um pequeno conjunto de campos para atualização de algum registro que não exige uma interface grande e complexa.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu _layout_ mínimo, composto pelo plano de fundo esfumaçado, o cartão com título (e subtítulo opcional), uma área de conteúdo que pode ser utilizada conforme necessário (inclusive com uso de barra de rolagem vertical caso necessário) e um botão para fechamento do painel, ação esta que também se dá através de clique/toque no plano de fundo esfumaçado, assim como ocorre em um [Dialog](./dialog.md).

A aparência desta variação em modo claro:

![FloatingPanel - Modo Claro - Padrão](~@source/assets/images/component-floatingpanel-light-standard.png)

A aparência desta variação em modo escuro:

![FloatingPanel - Modo Escuro - Padrão](~@source/assets/images/component-floatingpanel-dark-standard.png)

### Com botões

Esta variação é uma extensão natural da padrão, apenas acrescida de uma barra de botões para proporcionar uma ação de ênfase e uma ação secundária. Recomenda-se que os botões se comportem como em [Dialog](./dialog.md) para evitar quebrar a experiência que o usuário já estará acostumado, ou seja, o botão ênfase oferecendo uma ação especial (por exemplo, salvar um registro conforme os campos informados no painel) enquanto o botão secundário apenas cancela a operação, a mesma ação que fechar o painel flutuante.

A aparência desta variação em modo claro:

![FloatingPanel - Modo Claro - Com botões](~@source/assets/images/component-floatingpanel-light-withbuttons.png)

A aparência desta variação em modo escuro:

![FloatingPanel - Modo Escuro - Com botões](~@source/assets/images/component-floatingpanel-dark-withbuttons.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Sempre ofereça um título curto, direto e evidente sobre que tipo de conteúdo está sendo exibido no painel flutuante. Além disso, deve ser grafado em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Ofereça um subtítulo somente se estritamente necessário, para evitar ocupar espaço vertical desnecessariamente. Por exemplo, um painel com título `"Meus dados"` e um subtítulo `"Preencha com seus dados"` seria um desperdício de espaço vertical e apenas mais um texto para poluir visualmente a tela, enquanto um painel com título `"Exportação de relatório"` e um subtítulo `"Alunos por período letivo"` seria um bom uso de título e subtítulo que realmente se complementam e acrescentam informações relevantes à interface.

Embora úteis para exibir detalhamentos de registros ou até mesmo pequenos formulários de forma dinâmica em uma apresentação de foco total para o usuário, esfumaçando o restante do conteúdo, painéis flutuantes são propositalmente limitados em tamanho para garantir que permaneçam pequenos e direcionados ao que for estritamente necessário exibir. Não utilize de forma exagerada enchendo a aplicação de painéis flutuantes para todas as operações.

O posicionamento de abertura do painel, ou seja, se aparece a partir da esquerda ou a partir da direita da página, deve depender da posição do elemento que foi acionado para que o painel surgisse, para evitar que o usuário precise desviar o olhar e mover o _mouse_ por toda a tela para usar o painel flutuante. Por exemplo, um botão à esquerda na página abriria um painel a partir da esquerda, enquanto um botão à direita na página abriria um painel também a partir da direita. Em caso de dúvidas, como para elementos mais centralizados, preferencialmente abrir o painel flutuante a partir da direita da tela, para evitar atrapalhar a abertura de menus laterais que comumente ficam à esquerda.

O cartão do painel flutuante, embora sempre se ajuste verticalmente conforme o espaço disponível no _viewport_, deve se limitar a `26rem` em seu tamanho horizontal, isto é, pode apresentar uma medida menor caso esteja sendo exibido em telas menores, mas não deve ultrapassar este tamanho caso esteja sendo exibido em telas maiores.

O uso de barra de rolagem vertical na área de conteúdo é viável, mas somente para preparar o painel para ser exibido adequadamente em telas de resolução menor. Idealmente, o conteúdo do painel deve ser pensado para não exigir rolagem vertical na maioria dos casos.

Nunca cubra um painel flutuante com outro painel flutuante.

### Acessibilidade

Quando um painel flutuante está aberto, pressionar <kbd>Enter</kbd> corresponde à ação de confirmação de seu botão de ênfase. Evidentemente, um painel flutuante sem botão de ênfase não deve ter ação alguma quando esta tecla é pressionada, mantendo-se aberto.

Quando um painel flutuante está aberto, pressionar <kbd>Esc</kbd> corresponde à ação de fechamento sem realizar qualquer ação, assim como em um _click_/_touch_ no plano de fundo esfumaçado ao redor do painel, ou no botão de fechar do painel.
