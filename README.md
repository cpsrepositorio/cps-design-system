# CPS Design System

> Documentação do Design System Corporativo do CPS

## Introdução

**CPS Design System** é um sistema de _design_ corporativo para utilização em sistemas internos do [Centro Paula Souza](https://www.cps.sp.gov.br/), isto é, trata-se de um conjunto completo de padrões a serem utilizados e replicados em diferentes sistemas internos, a fim de simplificar a viabilização de UX (User Experience) padronizada.

Para saber mais sobre as motivações por trás deste projeto e a relevância de aderir ao _design system_ coporativo, [leia mais](https://cpsrepositorio.github.io/cps-design-system/guia-visual/#introducao).

## Contribuindo

A documentação deste _design system_ foi construída através do [VuePress](https://vuepress.vuejs.org/), ferramenta de desenvolvimento de documentações que executa através do [Node](https://nodejs.org/en/). Em um ambiente de desenvolvimento com Node instalado previamente, execute em um terminal:

``` bash
# Instalar dependências de desenvolvimento:
npm install

# Executar documentação em modo de desenvolvimento:
npm run dev
```

A partir daí, é possível acessar a versão local em execução da documentação, através do endereço http://localhost:8080. Assim, alterações diretas em qualquer arquivo do projeto, especialmente os arquivos `.md` contendo os textos da documentação, são automaticamente reproduzidas no navegador em que a documentação em modo de desenvolvimento está sendo visualizada.

As imagens e _assets_ em geral da documentação foram construídos através do Figma, com base em um conjunto de _forks_ do Windows UI Design e do Fluent UI Web da Microsoft. A elaboração de arquivo unificado no Figma está sendo planejada, para permitir contribuição facilitada diretamente nas peças de _design_, mas ainda não está disponível.
