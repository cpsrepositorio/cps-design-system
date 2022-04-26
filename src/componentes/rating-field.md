# RatingField

Um campo de classificação é um elemento de entrada de dados que permite ao usuário oferecer uma nota, frequentemente como um número de estrelas de zero a cinco, enquanto em usabilidade é similar a um [SliderField](./slider-field.md).

É um componente típico em interfaces de comércio eletrônico para avaliação de produtos, em mapas para avaliação de locais, ou em bibliotecas de mídia para avaliação de músicas, vídeos, jogos eletrônicos, dentre outros. Em sistemas corporativos são uso é mais raro, mas sempre há espaço para este componente em interfaces de solicitação de _feedback_ ao usuário sobre como tem sido sua experiência com a aplicação.

## Variações

Este componente não exige a documentação de variações, apenas se adaptando ao modo de cor em uso. Entretanto, trata-se de um componente composto, visto o campo de entrada em si é apenas um _container_ sem visual próprio, sendo que cada item da escala de notas é um ícone de estrela independente, com seus próprios estados de interação. Desta forma, ambos serão documentados aqui em mais detalhes.

### Campo de classificação

O campo de classificação é somente um _container_ sem visual próprio, sendo que toda a interação do componente ocorre a partir de cada um dos ícones de estrela de classificação. Entretanto, o campo principal pode ser desabilitado como ocorre em outros campos de entrada de dados e, neste caso, todas as estrelas de classificação são desabilitadas junto.

A aparência deste componente em modo claro:

![RatingField - Modo Claro - Campo de classificação](~@source/assets/images/component-ratingfield-light.png)

A aparência deste componente em modo escuro:

![RatingField - Modo Escuro - Campo de classificação](~@source/assets/images/component-ratingfield-dark.png)

### Estrela de classificação

Cada nota dentro de um campo de classificação é um ícone de estrela de classificação, o qual possui alguma semelhança comportamental com um [ToggleButton](./toggle-button.md), embora com visual bem próprio. Isto significa que uma estrela de classificação em estado de repouso (não ativa), possui estados `:hover`, `:active`, enquanto uma estrela de classificação ativa (selecionada) não possui visuais diferenciados para estes estados.

A aparência deste componente em modo claro:

![RatingField - Modo Claro - Estrela de classificação](~@source/assets/images/component-ratingfield-light-item.png)

A aparência deste componente em modo escuro:

![RatingField - Modo Escuro - Estrela de classificação](~@source/assets/images/component-ratingfield-dark-item.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Embora teoricamente plausível ter classificações com outras quantidades de estrelas/notas, uma enorme quantidade de interfaces no mundo utilizam este componente com cinco estrelas, o que o tornaria excessivamente estranho aos usuários ao ser apresentado de outra maneira.

Se diferentes faixas de avaliação são necessárias ao invés de `0` a `5`, considere trabalhar com simples conversões numéricas a nível de código. Por exemplo, em uma escala de `0` a `100`, três estrelas seria nota `50`, mas isto pode ser confuso se o usuário precisar ver este valor e não entender como foi obtido. Outra opção, neste caso, é simplesmente descartar o uso deste componente e preferir o [SliderField](./slider-field.md).

Embora algumas aplicações incorretamente não permitam que o usuário ofereça zero estrelas, deixando de preencher o campo de classificação, ou clicando de volta em uma primeira estrela já marcada para desmarcá-la, esta é uma ação plenamente válida e deve ser permitida, pois o impedimento é ainda mais frustrante para usuários que querem demonstrar seu descontentamento com algo e são impedidos. Se for um campo para coletar _feedback_ e você não está preparado para receber avaliação zero por parte dos usuários, simplesmente não solicite uma classificação.

### Acessibilidade

O campo de classificação em si não possui características próprias de acessibilidade. Mas cada uma das estrelas de classificação, por serem sub-componentes acionáveis pelo usuário, devem aplicar corretamente todos os diferentes estados de interação quando em uso: `:hover` para movimentação do _mouse_ sobre a estrela, `:active` para o exato momento em que se encontra pressionada ou tocada (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitada e não pode ser acionada.

Para facilitar classificar ou desclassificar de forma rápida, acionar uma estrela atualmente desmarcada, deve-se marcar esta e todas as anteriores. Por outro lado, a acionar uma estrela marcada que possua outras estrelas marcadas posteriores, deve-se desmarcar somente as posteriores. Por fim, ao acionar uma estrela marcada que não possua outras estrelas marcadas posteriores, deve-se desmarcar somente a estrela que foi acionada.

Para fins de facilitar a manipulação do valor atual, além da natural interação de clicar/tocar em cada estrela, quando qualquer uma possui foco de teclado, as teclas de setas <kbd>&larr;</kbd> e <kbd>&darr;</kbd> devem decrementar a classificação atual movendo-a para trás, enquanto as teclas de setas <kbd>&rarr;</kbd> e <kbd>&uarr;</kbd> devem incrementar a classificação atual movendo-a para frente.

Este componente não apresenta o valor numérico atualmente em uso para a classificação, mas este é naturalmente subentendido a partir da visualização das estrelas. Entretanto, para cenários com leitores de tela, recomenda-se fortemente existir um bloco de texto não visível mas acessível, permitindo-se ler reativamente a classificação atual.
