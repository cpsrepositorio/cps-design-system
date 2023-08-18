# ProgressIndicator

Um indicador de progresso fornece _feedback_ ao usuário de que uma operação de longa duração está em andamento. Isso pode significar que o usuário não pode interagir com o aplicativo quando o indicador de progresso estiver visível e, eventualmente, indicar quanto tempo de espera é estimado. Ou pode significar uma espera assíncrona por um resultado, onde o usuário pode realizar outras operações não diretamente afetadas pela atual.

Interfaces gráficas modernas evitam o chamado _layout shift_, quando os blocos de conteúdo são totalmente alterados por causa do carregamento de dados ou situações de espera por resposta. Desta forma, o uso de indicadores de progresso tem sido reduzido, preferindo-se o uso de [SkeletonIndicator](./skeleton-indicator.md).

Ainda assim, indicadores de progresso permanecem sendo comumente usados em duas variações, em situações diversas dependendo da variação, conforme descrito a seguir.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Barra de progresso

A variação em forma de barra de progresso é comumente usada em operações de _upload_/_download_ de dados (inclusive no topo das páginas, durante a navegação entre telas), para sinalizar estado indeterminado de carregamento de dados (por exemplo, enquanto um grande arquivo de exportação é empacotado e preparado para envio por um servidor) e para sinalizar situações adversas durante o carregamento (como envio ou recebimento de dados pausado pelo usuário, ou ainda erro durante a operação).

A aparência desta variação em modo claro, com seus diferentes estados:

![ProgressIndicator - Modo Claro - Barra de progresso](~@source/assets/images/component-progressindicator-light-bar.png)

A aparência desta variação em modo escuro, com seus diferentes estados:

![ProgressIndicator - Modo Escuro - Barra de progresso](~@source/assets/images/component-progressindicator-dark-bar.png)

### Anel de progresso

A variação em forma de anel de progresso é comumente usada dentro de outros elementos, para auxiliar no entendimento de que aquele item específico do _layout_ está sendo carregado e, portanto, não pode sofrer interação por parte do usuário. Por exemplo, uma caixa de texto de pesquisa pode exibir uma variação pequena deste indicador de progresso no lugar do ícone de lupa, enquanto a pesquisa é realizada. Outro exemplo é o texto de um botão ser trocado para este indicador em forma de anel enquanto a ação realizada por tal botão está em processamento.

A aparência desta variação em modo claro:

![ProgressIndicator - Modo Claro - Anel de progresso](~@source/assets/images/component-progressindicator-light-ring.png)

A aparência desta variação em modo escuro:

![ProgressIndicator - Modo Escuro - Anel de progresso](~@source/assets/images/component-progressindicator-dark-ring.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Indicador em forma de barra de progresso pode ser ampliado horizontalmente conforme necessário, até mesmo conforme a largura de toda a página caso seja utilizado para denotar o processo de carregamento de uma nova tela.

Indicador em forma de barra de progresso nunca deve ser ampliado verticalmente.

Indicador em forma de anel de progresso deve se manter em uma das três medidas apresentadas, as quais correspondem respectivamente a `1rem` (ou `16x`), `2rem` (ou `32px`) e `4rem` (ou `64px`).

### Animação

Embora exibidos aqui em imagens estáticas, ambas as variações deste componente devem ser animadas para demonstrar ao usuário que algo está acontecendo naquele momento, ou seja, a interface não está parada "travada".

Indicador em forma de barra de progresso deve ter sua área colorida animada, de forma que inicie sem largura e vá aumentando até cobrir toda a área cinza. Isto pode ocorrer de forma sincronizada com o tempo previsto para conclusão, caso seja uma duração conhecida (ainda que estimada), ou permanecer animando indefinidamente caso tenha duração indeterminada.

Indicador em forma de anel de progresso deve permanecer animando indefinidamente, em movimento circular no sentido horário.

### Acessibilidade

Por serem meramente visuais, indicadores de progresso devem possuir texto alternativo, usando-se alguma [técnica de acessibilidade para conteúdo invisível](https://webaim.org/techniques/css/invisiblecontent/) que só poderá ser acessado por leitores de tela.

No caso de barra de progresso de duração indeterminada, basta utilizar um texto que denote o carregamento, por exemplo: `"Carregando..."`. Já barra de progresso de duração específica deve claramente informar a posição operação, por exemplo: `"Progresso de 25% de carregamento..."`.

No caso de anel de progresso, por ser sempre de duração indeterminada, basta utilizar um texto que denote o carregamento, por exemplo: `"Carregando..."`.
