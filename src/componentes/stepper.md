# Stepper

Um assistente de passos (_stepper_) é um componente que transmite progresso através de etapas numeradas. Este tipo de componente viabiliza um fluxo de trabalho com etapas, deixando evidente ao usuário em qual passo se encontra.

Enquanto é mais comumente utilizado para sequências de formulários do tipo _wizard_, também podem ser utilizados para navegação em geral, embora exija-se cautela caso isso possa causar mais confusão do que benefícios ao usuário.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

O _stepper_ padrão é a variação mais recorrente em uma aplicação, utilizado com fins informativos, quando o conteúdo de uma etapa depende das etapas anteriores, utilizando-se de uma lógica linear sequencial. Por exemplo, durante um fluxo de cadastro, uma primeira etapa pode solicitar dados básicos como nome e e-mail, uma segunda etapa pode solicitar alguns dados pessoais adicionais como telefone e data de nascimento, e uma terceira etapa pode solicitar uma senha de acesso. É importante observa que, neste caso, não é possível pular etapas, o fluxo só faz sentido em sequencia e com as etapas anteriores sendo informadas, portanto um _stepper_ padrão é o indicado.

A aparência desta variação em modo claro:

![Stepper - Modo Claro - Padrão](~@source/assets/images/component-stepper-light-standard.png)

A aparência desta variação em modo escuro:

![Stepper - Modo Escuro - Padrão](~@source/assets/images/component-stepper-dark-standard.png)

### Selecionável

A variação selecionável apresenta a diferença fundamental de que cada um dos itens numerados trata-se de um [ToggleButton](./toggle-button.md), ou seja, é possível navegar diretamente acionando-se o item desejado, o que automaticamente marca todos os itens anteriores a este como já concluídos. Evidentemente, este comportamento só é desejável para construir interfaces cujos passos possuem alguma relação, mas não são estritamente obrigatórios ou dependentes entre si.

A aparência desta variação em modo claro:

![Stepper - Modo Claro - Selecionável](~@source/assets/images/component-stepper-light-selectable.png)

A aparência desta variação em modo escuro:

![Stepper - Modo Escuro - Selecionável](~@source/assets/images/component-stepper-dark-selectable.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Um assistente de passos só faz sentido quando um número definido e pequeno de passos é válido para uma tarefa específica. Não é recomendado construir interfaces com mais de cinco passos, sendo que três passos deve ser a meta para a maioria das situações.

Usuários entendem linearidade sequencial apenas na horizontal, portanto o _stepper_ não deve ser reposicionado para uma disposição vertical dos itens, nem mesmo em interfaces de dispositivos móveis com resoluções menores.

No caso de _stepper_ selecionável, todas as características visuais e comportamentais de um [ToggleButton](./toggle-button.md) devem ser respeitadas nos itens do componente.

### Acessibilidade

Em um _stepper_ padrão, não há características especiais de acessibilidade a serem consideradas. Em sua variação selecionável, cada um dos itens deve respeitar as características de acessibilidade de [ToggleButton](./toggle-button.md), isto é, exige-se que todos os diferentes estados de interação sejam adequadamente abordados quando em uso: `:hover` para movimentação do _mouse_ sobre o componente, `:active` para o exato momento em que se encontra pressionado ou tocado (no caso de uma tela sensível ao toque), `:focus` para quando a tela está sendo navegada através de teclado (normalmente pela tecla <kbd>Tab</kbd>), e `:disabled` evidentemente para quando se encontra desabilitado e não pode ser acionado.
