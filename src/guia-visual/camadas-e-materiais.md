# Camadas e Materiais

Usuários precisam reconhecer constantemente onde está a navegação e os comandos gerais de uma aplicação, ao mesmo tempo em que possam focar rapidamente na parte mais importante: o conteúdo.

Para resolver este desafio, o **CPS Design System** se utiliza de um sistema com duas camadas para delimitar navegação e conteúdo, direcionamento a atenção do usuário conforme necessário, através de uma sutil diferença de tons.

<span class="color-dot" style="background: #6d69d8"></span> <b>Camada base:</b> Leve tom de cinza usado como pano de fundo, a base geral da área de navegação de todas as telas.
<br>
<span class="color-dot" style="background: #fce100"></span> <b>Camada de conteúdo:</b> Fundo semi-branco encaixado sobre a base, para foco rápido em onde está o conteúdo.

Um exemplo de uso observa-se através de uma estrutura de navegação típica de sistemas internos, onde área de cabeçalho e área de menu lateral seriam demarcadas com a camada base, enquanto o conteúdo dinâmico e mutável e cada tela do sistema seria demarcado pela camada de conteúdo.

![Visão Geral das Camadas](~@source/assets/images/layers-overview.png)

Em alguns casos especiais, como interfaces de acesso (_login_), a camada base pode ser limpa de qualquer conteúdo de navegação, passando-se a camada de conteúdo para uma posição centralizada de destaque.

![Camada de Conteúdo Centralizada](~@source/assets/images/layers-content-centered.png)

# Materiais

Além da separação geral em duas camadas, alguns cenários requerem a utilização de materiais específicos para proporcionar melhor compreensão do conteúdo, ou eventualmente apenas para gerar mais empolgação sobre o visual ao proporcionar algum efeito belo.

## Opaco

O material opaco costuma ser o mais comum ao longo das interfaces e, como o nome indica, trata-se da utilização de cores sólidas sem deixar transparecer qualquer coisa por trás. As própria camada base citada anteriormente costuma ser um material opaco em tom de cinza leve, conforme a paleta de tons neutros disponível em [Cores](./cores.md).

![Exemplos de Material Opaco](~@source/assets/images/materials-opaque.png)

## Translúcido

O material translúcido se trata de cores com a camada de transparência (_alpha_) deslocada em diferentes níveis, dependendo da situação e do efeito desejado.

Por exemplo, a camada de conteúdo supracitada costuma ser constituída de branco com 50% de opacidade, o que garante uma mesclagem suave a qualquer tonalidade e intensidade de brilho utilizada na camada base.

As bordas dos elementos também utilizam cores translúcidas, para oferecer a mesclagem ideal com qualquer cor de fundo. Por exemplo, a borda padrão da maioria dos elementos no esquema de cores claro é um preto com exatamente `5,78%` de opacidade. Este valor pode parecer arbitrário e até um pouco estranho, mas quando mesclado sobre um fundo branco gera o efeito visual correspondente a um cinza claro (`#eaeaea`). Porém, a grande vantagem em não ser exatamente cinza é que a borda pode se ajustar dinamicamente a mudanças na cor de fundo, mantendo a mesma intensidade de brilho (distância entre a iluminação das duas cores), ao ser aplicada por cima de outras cores de fundo.

::: details Exemplo de bordas opacas ou translúcidas
Observe a caixa à esquerda, com borda opaca em cinza médio (`#b2b2b2`) aplicada sobre um elemento com cor de fundo marcante, e compare com a caixa à direita, com a mesma cor de fundo marcante, mas utilizando uma borda preta com `30%` de opacidade. A diferença é evidente sobre como a borda translúcida se combina à cor do elemento, enquanto a cor opaca simplesmente atrapalha e parece destoar do restante.

<div style="padding:1rem;border-radius:6px;background:#fff">
  <span style="display:inline-block;width:256px;height:64px;background:#005c6e;border:2px solid #b2b2b2"></span>
  <span style="display:inline-block;width:256px;height:64px;background:#005c6e;border:2px solid rgba(0 0 0 / 30%)"></span>
</div>
:::

Outro elementos do **CPS Design System** também se utilizam de variações de transparência para efeitos diversos, por exemplo, botões em estado _hover_ possuem cor de fundo com `90%` de opacidade, enquanto botões pressionados se utilizam da mesma cor mas com `80%` de opacidade. Novamente, o intuito é proporcionar uma mesclagem mais coerente e adaptável a diferentes panos de fundo.

![Exemplos de Material Transparente](~@source/assets/images/materials-transparent.png)

# Acrílico

Acrílico é um material semitransparente que simula o efeito de vidro fosco, através de uma camada acinzentada de alta opacidade `44%`, uma sutil repetição de textura em padrão ruído (_noise_) a apenas `2%` de opacidade e um forte filtro de embaçamento de fundo (_backdrop blur_).

::: tip Dica
Você pode ver o acrílico em uso, aqui mesmo na interface da documentação deste _design system_, no cabeçalho superior. Basta rolar o conteúdo e observar o sutil efeito de transparência "borrada" se formando conforme o conteúdo vai passando por trás do cabeçalho.
:::

Originalmente conhecido como efeito vidro (_glass_) desde os tempos do Windows 7, evoluiu para acrílico no Windows 10 e foi levemente atualizado no Windows 11 para ser mais brilhante e mais translúcido, permitindo uma relação contextual mais forte com os visuais por trás dele. Com a evolução da linguagem CSS em relação ao efeito de embaçamento de fundo, o material acrílico também é viável atualmente em sistemas Web.

Por ser um efeito que chama a atenção, e por potencialmente dificultar a visualização de textos caso os elementos por trás tenham muita variação de contrastes, seu uso é recomendado com moderação, para superfícies transitórias como submenus e menus de contexto. Outro uso viável é em interfaces específicas que podem se utilizar de imagens de segundo plano, por trás do acrílico, como em telas de boas-vindas e de acesso ao sistema (_login_).

![Exemplos de Material Acrílico](~@source/assets/images/materials-acrylic.png)

<span class="color-dot" style="background: #6d69d8"></span> <b>Camada acrílica:</b> Material acrílico em uso por cima de uma imagem de pano de fundo para oferecer um efeito marcante em telas específicas de um sistema.
<br>
<span class="color-dot" style="background: #fce100"></span> <b>Camada com transparência:</b> Cartões ajustados em um leve tom de cinza com `90%` de opacidade, otimizados para tirar proveito da camada acrílica anterior a eles.

Destaca-se que o material acrílico é sensível à variação do esquema de cores, ou seja, possui variações especificamente pensadas tanto para modo claro quanto para modo escuro da interface.

![Exemplos de Material Acrílico em Modo Escuro](~@source/assets/images/materials-acrylic-dark.png)

# Esfumaçado

O esfumaçado ajuda a enfatizar uma superfície de interface do usuário extremamente importante, ao esmaecer as superfícies abaixo para que elas recedem em segundo plano, através de um preto com `40%` de opacidade e um filtro de embaçamento de fundo (_backdrop blur_), com intensidade um pouco menor do que a utilizada no material acrílico.

::: tip Dica
Você pode ver o esfumaçamento em uso, aqui mesmo na interface da documentação deste _design system_. Basta clicar sobre qualquer imagem para visualizá-la em foco total, e assim o restante do conteúdo ficará coberto por esfumaçamento, o qual pode ser acionado para fechar e voltar ao estado padrão da documentação.
:::

Comumente, o esfumaçado é utilizado para sinalizar bloqueio da interface, abaixo de uma caixa de diálogo modal, que não pode ser ignorada pelo usuário sem ser respondida.

![Exemplos de Material Esfumaçado](~@source/assets/images/materials-smoke.png)

O esfumaçamento não sofre interferência do esquema de cores, isto é, sempre translúcida em preto.
