# SkeletonIndicator

O indicador esqueleto é assim denominado por representar apenas o esqueleto de um _layout_ ainda em carregamento. Trata-se de um espaço reservado de animação temporário para quando uma chamada de serviço demora para retornar dados, a fim de não bloquear a renderização do restante da interface do usuário.

Comumente, os _containers_ principais e componentes superiores do _layout_, independentes de dados, podem ser exibidos desde o carregamento da tela em seus locais corretos, e então os pedaços menores e internos podem ser carregados enquanto seus esqueletos ficam visíveis temporariamente.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Linha

A variação em linha é relevante para denotar linhas de texto que potencialmente aparecerão no lugar do esqueleto após o carregamento concluído. Desta forma, esta variação dificilmente é utilizada apenas uma vez, mas sim algumas vezes seguidas, uma abaixo da outra, para passar a sensação de linhas de texto em um parágrafo.

![SkeletonIndicator - Modo Claro - Linha](~@source/assets/images/component-skeletonindicator-light-line.png)

A aparência desta variação em modo escuro:

![SkeletonIndicator - Modo Escuro - Linha](~@source/assets/images/component-skeletonindicator-dark-line.png)

### Caixa

A variação em caixa é a mais versátil, podendo assumir diferentes tamanhos horizontais e verticais para denotar outros componentes que aparecerão no lugar do esqueleto após o carregamento concluído, como caixas de texto, caixas de seleção, botões, imagens, dentre outros.

A aparência desta variação em modo claro:

![SkeletonIndicator - Modo Claro - Caixa](~@source/assets/images/component-skeletonindicator-light-box.png)

A aparência desta variação em modo escuro:

![SkeletonIndicator - Modo Escuro - Caixa](~@source/assets/images/component-skeletonindicator-dark-box.png)

### Círculo

A variação em círculo possui utilização mais limitada, geral restringindo-se a demonstrar que aquela área de _layout_ em carregamento apresentará um [Avatar](./avatar.md) quando o conteúdo for recebido. Ainda que um uso mais limitado, gera um efeito visual bem interessante quando em conjunto com as outras variações para o restante do _layout_ em carregamento.

A aparência desta variação em modo claro:

![SkeletonIndicator - Modo Claro - Círculo](~@source/assets/images/component-skeletonindicator-light-circle.png)

A aparência desta variação em modo escuro:

![SkeletonIndicator - Modo Escuro - Círculo](~@source/assets/images/component-skeletonindicator-dark-circle.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Layout

Este indicador esqueleto existe justamente para evitar _layout shift_ e melhorar a percepção que o usuário tem do _layout_ que será apresentado em breve, portanto suas medidas devem ser sempre as mais próximas possíveis do elemento que aparecerá em seu lugar quando o carregamento for concluído.

Isto é regra para medidas verticais, mas nem sempre é possível para medidas horizontais. Quando uma medida exata não for possível na largura, é recomendado sortear um tamanho dentro de um intervalo de valores aproximados em relação ao conteúdo real que aparecerá quando o carregamento for concluído. Isto gera uma experiência mais agradável durante a transição do conteúdo esqueleto para o conteúdo real.

### Animação

- Embora exibidos aqui em imagens estáticas, todas as variações deste componente devem ser animadas para demonstrar ao usuário que algo está carregando naquele local, ou seja, a interface não está parada "travada".
- O sutil gradiente existente no indicador é o que deve ser animando, transitando horizontalmente através do elemento, o que gera um efeito similar a um brilho passando repetidamente pelo componente.

### Acessibilidade

Sendo conteúdos meramente ilustrativos e que não cumprem papel de definição de conteúdo, além de idealmente desaparecem em poucos instantes após a abertura de uma tela, não é necessário nenhum tratamento de acessibilidade especial para este componente.
