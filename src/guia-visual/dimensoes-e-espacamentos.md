# Dimensões e Espaçamentos

Usar a combinação apropriada de dimensões e espaçamentos, de forma padronizada ao longo de uma aplicação, proporciona uma experiência do usuário mais apropriada aos requisitos de funcionalidade e interação, além de evidentemente transmitir uma sensação de maior profissionalismo em relação à construção da interface.

## Ajustes para Responsividade

Aplicações _web_ podem ser executadas em qualquer dispositivo que suporte executar um navegador, o que atualmente inclui _smartphones_, _tablets_, _laptops_, computadores de mesa convencionais, TVs e muito mais. Interfaces modernas precisam ser planejadas desde o princípio para que se encaixem bem em dispositivos com telas pequenas, e então que se expandam naturalmente tirando vantagem de telas maiores. Esta abordagem é conhecida como **design responsivo iniciando em dispositivos móveis** (_mobile first responsive design_) e, embora não seja uma abordagem unânime, é provavelmente a mais utilizada e é altamente recomendada por este _design system_.

::: tip Dica
Ao projetar pontos de quebra, considere a quantidade de espaço efetivamente disponível dentro do aplicativo, não o tamanho da tela em si. Quando o aplicativo é executado em tela inteira, a janela do aplicativo tem o mesmo tamanho da tela, mas quando não está em tela inteira, a janela é eventualmente menor. Considerando-se a execução dentro de um navegador _web_, o que importa é a área disponível para visualização (_viewport_).
:::

Com um grande número de dispositivo e tamanhos de tela variados, em vez de tentar otimizar a interface para cada dispositivo, é mais recomendável projetar para algumas categorias de largura de chave (também chamadas de "pontos de quebra", ou _breakpoints_). As classificações mais convencionais costumam abordar três pontos chave: **Pequenos** (até `640px`), **Médios** (entre `641px` e `1023px`) e **Grandes** (a partir de `1024px`).

![Responsividade](~@source/assets/images/responsive-design.png)

### Pontos de Quebra

Trabalhar com apenas três pontos de quebra pode ser inconvenientemente limitado. Uma vez que a abordagem _mobile first_ seja utilizada, é conveniente começar projetando para as menores telas disponíveis (em geral, _smartphones_ antigos com _viewport_ faixa de `320px` de largura) e se apoiar em pontos de quebra para cada dimensão superior relevante, permitindo ajustar os elementos conforme mais espaço é disponibilizado.

Com isto em mente, o **CPS Design System** se respalda em seis pontos de quebra, ou seja, deriva um sub-nível dentro de cada ponto de quebra comumente utilizado, conforme esta tabela:

| Nome | Largura mínima | CSS |
| :- | :- | :- |
| **xs** | `380px` | `@media (min-width: 380px) { ... }` |
| **sm** | `640px` | `@media (min-width: 640px) { ... }` |
| **md** | `768px` | `@media (min-width: 768px) { ... }` |
| **lg** | `1024px` | `@media (min-width: 1024px) { ... }` |
| **xl** | `1280px` | `@media (min-width: 1280px) { ... }` |
| **2xl** | `1536px` | `@media (min-width: 1536px) { ... }` |

Com tais definições, fica simples construir os elementos da interface pensando-se nas telas menores, bastante não utilizar nenhum ponto de quebra, e depois ajustar tais elementos apenas com os atributos que precisarem ser modificados em telas maiores, por exemplo:

``` css
.fluid-container {
  display: grid;
  grid-auto-flow: col;
  padding: 1rem;
  gap: 1rem;
}

@media (min-width: 768px) {
  .fluid-container {
    grid-auto-flow: row;
    padding: 1.5rem;
  }
}
```

::: details Como aplicar corretamente a responsividade?
Conhecer _breakpoints_ ou mesmo saber como aplicar a filosofia do _mobile first_ não é o suficiente para construir aplicações com responsividade incrível, pois isto exige muito estudo e boa percepção de usabilidade.

Um bom ponto de partida é este excelente material sobre [Técnicas de Design Responsivo](https://docs.microsoft.com/pt-br/windows/apps/design/layout/responsive-design), encontrado na documentação de _design_ do Fluent para Windows 11, cheio de explicações e de imagens em movimento demonstrando boas práticas de responsividade, na prática.
:::

## Padronização de Medidas

Neste _design system_, os tamanhos, margens, espaçamentos e posições dos elementos na interface são construídos a partir da medida de fonte padrão do navegador _web_, o `rem`. Consideração a configuração padrão, `1rem` equivale a `16px`, porém com a vantagem de ser flexível a configurações personalizadas realizadas por usuários com necessidades específicas.

A partir disto, a tabela de padronização de espaçamentos se utiliza de dividendos e múltiplos de `2` a partir do tamanho padrão, obtendo-se a seguinte escala:

<SpacingScale />

Repare que apenas o valor especial `px` não segue a ideia dos dividendos e múltiplos de `2`, uma vez que há diversos cenários em interfaces grandes onde `1px` é uma dimensão viável (como bordas de elementos, separadores de seções, e ajustes finos de posicionamento de ícones).

## Cantos Arredondados

Em um sentido mais primordial, interfaces gráficas são apenas conjuntos de blocos, quadrados e retângulos espalhados ao longo da tela no intuito de trazer diferentes significados a partir da utilização de outras características, como [Elevação](./elevacao.md) e [Cores](./cores.md). Entretanto, a própria geometria pode ajudar diferenciar um pouco os elementos. Com isso, ajuda-se a criar experiências que parecerem coerentes em todo o _design system_.

![Exemplo de Cantos Arredondados](~@source/assets/images/rounded-corners.png)

No **CPS Design System**, a geometria foi pensada para dar suporte a experiências modernas, através de cantos arredondados progressivamente, elementos aninhados e medianizes consistentes que se combinam para criar um efeito suave, sutil e acessível, enfatizando a finalidade e a facilidade de uso, conforme esta tabela:

| Nome | Medida | Uso |
| :- | :- | :- |
| **0** | `0px` | Cantos retos são comuns quando elementos se interseccionam, ainda que estes possuam cantos arredondados nas extremidades opostas. |
| **sm** | `2px` | Utilizado em elementos de entrada de dados, como caixas de texto e caixas de seleção. |
| **md** | `4px` | Utilizado em elementos acionáveis da interface, como botões e items de listas de seleção. |
| **lg** | `8px` | Utilizado em todos os contêineres de nível superior, como nas diferentes camadas base, nos painéis, nos cartões, nas caixas de diálogo, etc. |
| **full** | `50%` | Arredondamento percentual ao tamanho de cada canto do elemento, transformando-o de retangular para circular, usado comumente em _avatares_ e rótulos indicativos. |
