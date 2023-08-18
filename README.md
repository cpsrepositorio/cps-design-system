# CPS Design System

> Design System Corporativo para utilização em sistemas internos do Centro Paula Souza.

## Introdução

**CPS Design System** é um sistema de _design_ corporativo para utilização em sistemas internos do [Centro Paula Souza](https://www.cps.sp.gov.br/), isto é, trata-se de um conjunto completo de padrões a serem utilizados e replicados em diferentes sistemas internos, a fim de simplificar a viabilização de UX (User Experience) padronizada. Para saber mais sobre as motivações deste projeto e a relevância de aderir a ele, [leia mais](https://cpsrepositorio.github.io/cps-design-system/guia-visual/#introducao).

## Como utilizar, de forma prática?

**CPS Design System** é um conjunto de padrões de _design_, é um referencial puramente teórico e ilustrativo, que pode ser utilizado para guiar o design e o desenvolvimento de interfaces de usuário para aplicações do CPS, independentemente de quais linguagens ou frameworks estiverem sendo utilizados pelas equipes. Entretanto, por si só não é um _framework_ ou uma biblioteca de componentes, e portanto, não disponibiliza qualquer tipo de pacote para utilização por desenvolvedores finais.

Se o que você procura é efetivamente uma biblioteca de componentes que seja totalmente aderente ao **CPS Design System**, mas que já esteja pronta para uso, diretamente em seus projetos de soluções Web, acesse **[CPS Elements](https://cpsrepositorio.github.io/cps-elements/)**. Trata-se de uma biblioteca de Web Components de ponta, sem complicação, que podem executar nativamente em todos os navegadores modernos, bem como pode ser integrada com qualquer _framework_ JavaScript moderno, como Angular, React, Vue, etc.

## Contribuindo

A documentação deste _design system_ foi construída através do [VuePress](https://vuepress.vuejs.org/), ferramenta de desenvolvimento de documentações que executa através do [Node](https://nodejs.org/en/). Em um ambiente de desenvolvimento com Node instalado previamente, execute em um terminal:

``` bash
# Instalar dependências de desenvolvimento:
npm install

# Executar documentação em modo de desenvolvimento:
npm run dev
```

A partir daí, é possível acessar a versão local em execução da documentação, através do endereço http://localhost:8080. Assim, alterações diretas em qualquer arquivo do projeto, especialmente os arquivos `.md` contendo os textos da documentação, são automaticamente reproduzidas no navegador em que a documentação em modo de desenvolvimento está sendo visualizada.

As imagens e _assets_ em geral foram construídos através do [Figma](https://www.figma.com/), com base em _forks_ do [Windows UI](https://www.figma.com/community/file/989931624019688277) e do [Microsoft Fluent Web](https://www.figma.com/community/file/836828295772957889). A elaboração de um arquivo unificado no Figma está sendo planejada, para permitir contribuição facilitada diretamente nas peças de _design_.
