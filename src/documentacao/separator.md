# Separator

Separadores são elementos de interface simples, porém recorrentes, evidente utilizados para separar blocos de conteúdo de forma evidente, quando uma separação baseada apenas em espaçamento não é o suficiente, ou quando uma separação baseada em diferentes camadas se tornaria confusa para o contexto dos dados utilizados.

Este é um caso de componente primitivo, que além de poder ser utilizado diretamente pelos desenvolvedores, outros componentes também o utilizam, como [Card](./card.md) quando necessário separar cabeçalho e botões do conteúdo, ou [FloatingPanel](./floating-panel.md) também para separar cabeçalho e botões do conteúdo.

<LinkToCpsElements name="separator" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu _layout_ mínimo, uma simples linha de sutil opacidade se adaptando suavemente ao contexto onde se encontra, para levemente mais escuro quando em modo claro, ou para levemente mais claro quando em modo escuro. Esta variação também permite que o separador seja posicionado tanto horizontalmente quanto verticalmente, dependendo do tipo de separação desejada na interface.

A aparência desta variação em modo claro:

![Separator - Modo Claro - Padrão](~@source/assets/images/component-separator-light-standard.png)

A aparência desta variação em modo escuro:

![Separator - Modo Escuro - Padrão](~@source/assets/images/component-separator-dark-standard.png)

### Com texto

Esta variação se oferece um texto terciário centralizado horizontalmente e verticalmente, posicionado por cima em relação à linha separadora. É muito útil para criar categorizações organizadas entre diferentes blocos de conteúdo, por exemplo, para organizar seções em uma linha do tempo cronológica. Dada a dificuldade de leitura de textos girados, esta variação deve ser utilizada apenas com separador na horizontal.

A aparência desta variação em modo claro:

![Separator - Modo Claro - Com texto](~@source/assets/images/component-separator-light-text.png)

A aparência desta variação em modo escuro:

![Separator - Modo Escuro - Com texto](~@source/assets/images/component-separator-dark-text.png)

### Com ícone

Uma alternativa à variação com texto, esta variação se utiliza de ícone para uma sutil representação do conteúdo que virá na seção após o separador. Utilizada com menos frequência, visto que iconografia pura pode ser de difícil compreensão, serve mais como elemento decorativo para trazer alguma empolgação para uma interface com muitas seções.

A aparência desta variação em modo claro:

![Separator - Modo Claro - Com ícone](~@source/assets/images/component-separator-light-icon.png)

A aparência desta variação em modo escuro:

![Separator - Modo Escuro - Com ícone](~@source/assets/images/component-separator-dark-icon.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

A linha separadora sempre terá exatamente `1px` de altura, quando na horizontal, ou de largura, quando na vertical, sendo que a dimensão oposta deve fluir e preencher todo o _container_ onde se encontra.

Espaçamento em volta do separador não é uma definição deste componente em si, mas sim do _container_ onde se encontra, ou seja, dependendo de seu `padding`. Há componentes que utilizam espaçamento interno completo em todos os seus elementos, incluindo o separador, como o [FloatingPanel](./floating-panel.md). Por outro lado, há componentes que não consideram o separador como parte do seu espaçamento interno, posicionando-o como uma linha divisória que cobre todo o _container_ ainda que haja espaçamento interno para os outros componentes, como é o caso do [Dialog](./dialog.md) em sua barra de botões.

Dada a dificuldade de leitura de textos girados, separador em variação com texto deve ser utilizado apenas quando disposto na horizontal.

Dada a distorção ou possível alteração de significado em ícones girados, separador em variação com ícone deve ser utilizado apenas quando disposto na horizontal.

### Acessibilidade

Sendo elementos primitivos puramente visuais e decorativos, separadores padrão ou com ícone não exigem nenhum tratamento de acessibilidade especial.

Já separadores com texto, por representarem parte das informações da página, também devem fazer parte dos elementos acessíveis por leitores de tela. Entretanto, em geral, não é necessário fazer nada específico para isso, visto que blocos de texto já são acessíveis naturalmente.
