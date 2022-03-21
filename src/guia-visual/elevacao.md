# Elevação

A criação de uma hierarquia visual de elementos na interface do usuário facilita percorrer visualmente a tela e transmite com rapidez em que é importante focar. Elevação, desta forma, é o ato de trazer mais "à frente" elementos selecionados da interface do usuário, sendo frequentemente usada para oferecer maior sensação de hierarquia. Quando dois ou mais objetos ocupam o mesmo local na tela, somente o objeto com a elevação mais alta será renderizado nesse local.

Interfaces de usuário (sejam elas Web, _desktop_ ou _mobile_) residem em um ambiente de duas dimensões. Afinal, telas digitais são um plano cartesiano de _pixels_ com altura e largura, mas sem profundidade. Assim, a sensação de Elevação do **CPS Design System** trata-se de um efeito obtido através do uso de sombras e contornos (ou bordas) em controles e superfícies, de forma a simular sutilmente o efeito natural real de um elemento mais elevado do que os demais.

## Níveis de Elevação

O **CPS Design System** utiliza-se de seis níveis de elevação partindo da mais sutil à mais evidente, além de um nível base (de total ausência de elevação), usado para designar elementos cuja elevação não está sofrendo qualquer tipo de interferência.

A figura abaixo ilustra tais níveis, em ambos os [Modos de Cor](./cores.md#modos-de-cor) claro e escuro.

![Níveis de Elevação](~@source/assets/images/elevation-shadows.png)

Existem algumas aplicações variadas para cada um dos níveis, conforme descrito a seguir.

### shadow-none

A inexistência de elevação é descrita através deste nível, comumente utilizada para os elementos base da tela, ou seja, as camadas (ou _layers_). Tais elementos se diferenciam apenas através de sutis mudanças de cor de fundo ou do uso de separadores entre eles. Mais sobre isso em [Camadas e Materiais](./camadas-e-materiais.md).

![Nível de Elevação `none`](~@source/assets/images/elevation-sample-none.png)

### shadow-inset

Elevação sutilmente invertida "para dentro" (_inset_), isto é, como se a parte superior do elemento estivesse recebendo um pouco mais de luz do que a parte inferior. Este é o estado comumente utilizado em elementos acionáveis da interface, como caixas de texto, para ajudar a diferenciá-los visualmente de camadas estáticas.

![Nível de Elevação `inset`](~@source/assets/images/elevation-sample-inset.png)

### shadow

Considerada a elevação padrão do **CPS Design System**, é uma elevação com nível de sombra leve. Comumente utilizada em painéis com estilo cartão (_cards_), de forma a gerar um leve destacamento do cartão em relação às camadas base e em relação a outros cartões, servindo como um delimitador natural de conteúdo.

![Nível de Elevação `default`](~@source/assets/images/elevation-sample-default.png)

### shadow-md

Abreviação da palavra _medium_, o nível `md` oferece uma sombra sutilmente mais elevada do que o nível padrão, sendo indicado para designar elevação temporária de elementos nos níveis mais baixos. Comumente é o nível de elevação utilizado para destacar elementos que estão com o mouse sobre (_hover_).

![Nível de Elevação `md`](~@source/assets/images/elevation-sample-md.png)

### shadow-lg

Abreviação da palavra _large_, o nível `lg` oferece uma sobra bem mais esparsa do que os níveis anteriores, sendo o primeiro nível a evidenciar que o elemento está flutuando no plano de elementos, ao invés de apenas levemente destacado. Este nível de sombra é comumente utilizado em elementos para dicas (como _tooltips_, _callouts_ e _popovers_).

![Nível de Elevação `lg`](~@source/assets/images/elevation-sample-lg.png)

### shadow-xl

Abreviação da sentença _extra large_, o nível `xl` acrescenta ainda mais sensação de distância para elementos flutuantes do que o nível anterior, através de uma sombra um pouco mais esparsa e um pouco mais opaca do que a anterior. É uma elevação comumente utilizada em elementos de apoio que aparecem eventualmente, mas não fazem necessariamente parte do _layout_, como menus de contexto e painéis flutuantes (_flyouts_).

![Nível de Elevação `xl`](~@source/assets/images/elevation-sample-xl.png)

### shadow-2xl

Abreviação da sentença _double extra large_, o nível `2xl` é o nível de elevação mais alto utilizado no **CPS Design System**. Destaca-se fortemente dos anteriores por ser o único a utilizar duas sombras sobrepostas, gerando uma sensação ainda maior de estar fora da camada de elementos da aplicação, tendo seu uso comum em caixas de diálogo (_dialog_ e _modal_).

![Nível de Elevação `2xl`](~@source/assets/images/elevation-sample-2xl.png)
