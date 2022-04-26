# Accordion

Um _accordion_ é um conjunto de cabeçalhos interativos empilhados verticalmente, cada um contendo um título, trecho de conteúdo ou miniatura representando uma seção de conteúdo. Os títulos funcionam como controles que permitem aos usuários revelar ou ocultar suas seções de conteúdo associadas.

São comumente usados para reduzir a necessidade de rolar a página ao apresentar várias seções de conteúdo em um espaço vertical limitado, ou simplesmente como mecanismos de agrupamento de informações de forma organizada.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Contraído

Quando contraído, o bloco de conteúdos referente àquele cabeçalho de _accordion_ fica completamente oculto. Caso haja vários cabeçalhos de _accordion_ em sequência, os posteriores ao elemento contraído devem naturalmente fluir para cima e ocupar o espaço não mais ocupado pelo conteúdo que foi escondido.

A aparência desta variação em modo claro, com seus diferentes estados:

![Accordion - Modo Claro - Contraído](~@source/assets/images/component-accordion-light-collapsed.png)

A aparência desta variação em modo escuro, com seus diferentes estados:

![Accordion - Modo Escuro - Contraído](~@source/assets/images/component-accordion-dark-collapsed.png)

### Expandido

Quando expandido, o bloco de conteúdos referente àquele cabeçalho de _accordion_ se torna visível. Caso haja vários cabeçalhos de _accordion_ em sequência, os posteriores ao elemento expandido devem naturalmente fluir para baixo.

A aparência desta variação em modo claro, com seus diferentes estados:

![Accordion - Modo Claro - Expandido](~@source/assets/images/component-accordion-light-expanded.png)

A aparência desta variação em modo escuro, com seus diferentes estados:

![Accordion - Modo Escuro - Expandido](~@source/assets/images/component-accordion-dark-expanded.png)

#### Exemplo com conteúdo

Conforme citado, cabeçalhos de _accordion_ podem ser posicionados em grupo. Além disso, os cabeçalhos também podem receber conteúdo personalizado, como ícone e subtítulo no cabeçalho, bem como os conteúdos da área expandida de cada _accordion_ podem ser completamente personalizados conforme a necessidade. Basta apenas garantir que o espaçamento do conteúdo interno respeite o alinhamento de espaçamento do cabeçalho correspondente.

Exemplo em modo claro:

![Accordion - Modo Claro - Exemplo com conteúdo](~@source/assets/images/component-accordion-light-sample-content.png)

Exemplo em modo escuro:

![Accordion - Modo Escuro - Exemplo com conteúdo](~@source/assets/images/component-accordion-dark-sample-content.png)
## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

- Cabeçalhos de _accordion_ sempre possuem `64px` de altura, ainda que esteja sendo exibido apenas um título, sem ícone e/ou subtítulo.
- Área de conteúdo de um _accordion_ expandido não precisa ter altura fixa, a menos que se queira propositalmente limitar seu tamanho e exibir barra de rolagem vertical ali mesmo. Em geral, é uma melhor opção deixar o conteúdo do _accordion_ expandir livremente seu _container_, ficando a barra de rolagem vertical no exterior do grupo de cabeçalhos de _accordion_.

### Usabilidade

Quando cabeçalhos de _accordion_ são posicionados em grupo, duas usabilidades distintas são válidas, cabendo ao desenvolvedor escolher conforme a necessidade:

1. Ao expandir um cabeçalho de _accordion_, os outros permanecem em seus estados atuais (sejam eles expandidos ou contraídos), sem que um interfira no outro. Esta abordagem é interessante quando as áreas de conteúdo não tem qualquer relação, ou quando o espaço vertical não é um problema, ou ao menos a exibição de barra de rolagem vertical no _container_ da área de _accordion_ não é um problema.
2. Ao expandir um cabeçalho de _accordion_, os outros são automaticamente contraídos, garantindo-se sempre apenas uma área de conteúdo expandida. Esta abordagem é interessante para evitar excessivo reposicionamento de itens, ou qual a exibição de barra de rolagem vertical no _container_ da área de _accordion_ pode causar um resultado ruim.

### Acessibilidade

Cada cabeçalho de _accordion_ deve ser acessível por teclado, ou seja, deve respeitar `tabindex` e deve apresentar corretamente o indicador de foco conforme demonstrado no estado `:focus-visible`. A ação da tecla <kbd>Enter</kbd> em um cabeçalho de _accordion_ com foco deve ser a mesma de clicar/tocar neste: Expandir ou contrair seu conteúdo, alternando de acordo com o estado atual.
