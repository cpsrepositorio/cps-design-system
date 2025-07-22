# Ícones

A iconografia é um conjunto de imagens e símbolos visuais que ajudam os usuários a entender e navegar pela aplicação. No **CPS Design System**, ícones são fortemente recomendados para utilização ao longo de toda a interface, como sendo metáforas visuais que representam um conceito, uma ação ou uma situação.

::: tip Dica
Há quem brinque (ou até diga pejorativamente de propósito) que iconografia não passa de "encher de firulas" ou de "ficar enfeitando" interfaces.

Ledo engano, uma vez que criar metáforas visuais é uma das maneiras mais eficientes de atender ao menos duas das [10 Heurísticas de Jakob Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/): oferecer uma clara ponte entre o _software_ e o mundo real, e proporcionar rápido reconhecimento através da familiaridade.
:::

Antes discutir a tipografia deste _design system_, é importante delimitar adequadamente seu escopo.

## Ícones de Aplicação

Os ícones de aplicação representam uma imagem exclusiva e imediatamente reconhecível que ajuda a identificar a aplicação, em meio a outras, idealmente uma imagem que represente a identidade da aplicação, ou que remeta à sua funcionalidade principal por meio de uma metáfora. Ícones de aplicação envolvem o uso de cores de marca, efeitos visuais, sombras, dentre outras características de identificação única.

![Exemplo de Ícone de Aplicação](~@source/assets/images/icons-sample-application.png)

No contexto da _web_, também são usados principalmente para reconhecer e iniciar sua aplicação a partir de atalhos, como em uma _app drawer_ compartilhada entre vários sistemas, e também para identificar a aplicação onde quer que ele apareça no navegador, como na barra de títulos, na lista de favoritos, no histórico de navegação, etc.

::: warning Atenção
Para máxima compatibilidade em diferentes dispositivos e plataformas, aplicações _web_ modernas devem conter vários _assets_ de ícones, em formatos e tamanhos variados, bem como arquivos de manifesto e importações corretamente realizadas nas páginas _web_, para que sejam apresentados conforme esperado em cada cenário. Uma ferramenta como [Real Favicon Generator](https://realfavicongenerator.net/) pode ser de grande auxílio.
:::

Em algumas situações, ícones de aplicação são simplesmente derivações de marcas já existentes, como é o caso do _favicon_ utilizado nos portais do CPS, diretamente derivado de seu logotipo descrito no [Manual de Identidade Visual](https://www.cps.sp.gov.br/asscom/manuais-assessoria-de-comunicacao/).

Para todos os outros casos, incluindo cada sistema interno que aderir a este _design system_, recomenda-se fortemente que um ícone de aplicação seja construído por um _designer_, seguindo boas práticas de elaboração de ícones de aplicações (ou ao menos seguindo-se bons materiais sobre o assunto, como [How to Design a Great App Icon: What You Need to Know](https://www.shopify.com/partners/blog/app-icon) e [5 Tips for Designing the Perfect Mobile App Icon](https://uplandsoftware.com/localytics/resources/blog/tips-for-designing-the-perfect-mobile-app-icon/)).

## Ícones de Sistema

Ícones de sistema, por sua vez, são os símbolos visuais que efetivamente ajudam usuários a navegar pela aplicação, remetendo a objetos e ações do mundo real, criando metáforas visuais e facilitando o processo cognitivo de reconhecer o significado das coisas em uma interface.

![Exemplo de Ícone de Sistema](~@source/assets/images/icons-sample-system.png)

O **CPS Design System** segue, na iconografia, a mesma influência que norteou sua construção. Assim, recomenda-se o uso da biblioteca de ícones [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) da Microsoft, uma coleção livre sob [licença MIT](https://github.com/microsoft/fluentui-system-icons/blob/master/LICENSE), com mais de 4 mil ícones cuidadosamente construídos usando as mesmas características geométricas do restante da interface Fluent, através de três princípios estéticos:

1. **Mínimo:** Contêm apenas os mínimos traços necessários para comunicar o conceito.
2. **Harmonioso:** Se baseiam em formatos simples e geométricos.
3. **Evoluído:** Usam metáforas modernas e facilmente compreendidas.

Esta coleção de ícones é oferecida em duas variações de _design_: **versão regular** e **versão preenchida**.

### Versão Regular

A **versão regular** da biblioteca de ícones **Fluent UI System Icons** se baseia somente em linhas de demarcação dos glifos, ou seja, traços puros sem preenchimento. Normalmente, em outras bibliotecas de ícones, este visual é chamado de _outline_.

<IconsShowcase version="regular" />

### Versão Preenchida

A **versão preenchida** da biblioteca de ícones **Fluent UI System Icons**, como o nome já indica, possui preenchimento nos glifos, utilizando-se de intersecções vazadas para distinguir diferentes figuras dentro de um mesmo ícone.

<IconsShowcase version="filled" />

## Outros Pacotes de Ícones

Conforme já explanado, este _design system_ recomenda fortemente o uso da biblioteca **Fluent UI System Icons**, por seu ajuste ímpar ao estilo visual adotado no Fluent Design e, por consequência, no **CPS Design System**. Apesar disso, não é terminante proibido usar outras bibliotecas de ícones, desde que o estilo visual geral não seja impactado com a escolha de ícones sem qualquer semelhança visual com este _design system_.

::: danger Cuidado!
Utilizar ícones específicos em formato `SVG` de outras bibliotecas não é um problema em si, desde que respeitado o estilo visual. Mas isto não vale para o caso de importar bibliotecas de ícones inteiras (mesmo que em versão Web Font), pois o carregamento de diversas bibliotecas de ícones ao mesmo tempo seria um grave equívoco para o desempenho de carregamento da aplicação, para no final utilizar apenas alguns poucos ícones.
:::

Vale uma menção honrosa à a famosa biblioteca de ícones [Font Awesome](https://fontawesome.com/), recomendada pelo [Guia de Estilo Site CPS](https://cps.sp.gov.br/guia-estilo/). Embora tenha um visual agradável, similar ao que prega este _design system_, e seja muito utilizada em projetos pela _web_, é uma biblioteca mais limitada, com pouco mais de 2 mil ícones gratuitos (e um foco grande em vender os outros ícones com a versão Pro). Além disso, mesmo a versão gratuita não tem uma licença tão permissiva quanto a biblioteca aqui recomendada.
