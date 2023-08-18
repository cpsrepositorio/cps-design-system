# Hyperlink

Os famosos _hyperlinks_, eventualmente também conhecidos em português como âncoras, dispensam apresentações. Embora não sejam tão recorrentes em sistemas internos quanto em _websites_ em geral, eventualmente servem como boas ferramentas para transitar o usuário de um conteúdo para outro, principalmente quando esta interligação ocorre através de palavras em meio a textos.

## Variações

Este componente não possui variações, apenas se adaptando ao modo de cor em uso.

![Hyperlink - Modos Claro e Escuro](~@source/assets/images/component-hyperlink.png)

::: tip Dica
Neste _design system_, as âncoras que apontam para endereços externos possuem sim uma variação, pois apresentam um ícone de seta denotando que um conteúdo externo será aberto. Caso não tenha percebido até agora, observe esta âncora apontando para o _website_ do [CPS](https://www.cps.sp.gov.br/). Embora seja um comportamento válido e útil aqui, não é esperado que seja necessário em sistemas internos.
:::

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Âncoras textuais normalmente fluem junto ao texto em que estão inseridas, portanto não possuem especificações de medidas a não ser o tamanho da fonte coerente com o texto em que se localizam.

Entretanto, _hyperlinks_ também pode ser utilizados como _containers_ de outros elementos, como _cards_ e imagens. Neste caso, eles apenas embrulham seus elementos filhos e não possuem qualquer interferência no _layout_ padrão.

### Acessibilidade

Complementarmente, _hyperlinks_ também demandam acessibilidade adequada. Desta forma, tanto âncoras textuais quanto aquelas utilizadas como _containers_ deve ser adequadamente acessíveis por teclado e apresentarem o estado `:focus-visible`.

Já sobre os estados `:hover` e `:active` em um _hyperlink_ não textual, é importante que os elementos filhos que ele embrulha se responsabilizem por sinalizar tais mudanças de estado adequadamente.
