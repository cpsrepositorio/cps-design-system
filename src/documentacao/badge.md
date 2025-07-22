# Badge

Usar distintivos (_badges_) é uma maneira não intrusiva e intuitiva de exibir pequenas notificações e ajudar o usuário a focar em peças de informação importantes em uma área da aplicação - seja para notificações, indicação de novo conteúdo ou exibição de um alerta sutil.

Distintivos podem ser mínimos "pontinhos" acima de algum elemento da interface, como em um ícone de notificações, também podem ser um pouco maiores e exibirem seu próprio ícone dentro de sua área circular, ou ainda podem se expandir conforme a necessidade para acomodar valores numéricos, por exemplo, para exibir quantos registros estão sendo impactados por aquela informação de estado apresentada pelo distintivo atrelado.

<LinkToCpsElements name="badge" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Neutro

Um distintivo neutro não carrega significado especial e pode ser utilizado em diversas situações onde apenas se deseja pontuar uma informação ou exibir uma totalização numérica sobre um conjunto de registros dentro de uma seção.

A aparência desta variação em modo claro:

![Badge - Modo Claro - Neutro](~@source/assets/images/component-badge-light-neutral.png)

A aparência desta variação em modo escuro:

![Badge - Modo Escuro - Neutro](~@source/assets/images/component-badge-dark-neutral.png)

### Informativo

Um distintivo informativo é próximo ao neutro, mas como chama um pouco de atenção, pode ser utilizado quando se deseja garantir que o usuário percebe sua presença dentre tantas outras coisas em um _layout_.

A aparência desta variação em modo claro:

![Badge - Modo Claro - Informativo](~@source/assets/images/component-badge-light-information.png)

A aparência desta variação em modo escuro:

![Badge - Modo Escuro - Informativo](~@source/assets/images/component-badge-dark-information.png)

### Alerta

Um distintivo de alerta deve ser utilizado quando as informações à qual está atrelado precisam de atenção por parte do usuário, por exemplo, alguma ação realizada pode causar problemas.

A aparência desta variação em modo claro:

![Badge - Modo Claro - Alerta](~@source/assets/images/component-badge-light-warning.png)

A aparência desta variação em modo escuro:

![Badge - Modo Escuro - Alerta](~@source/assets/images/component-badge-dark-warning.png)

### Crítico

Um distintivo crítico chama a maior atenção possível do usuário e está inerentemente ligado a situações de erro crítico e qualquer outra situação que exija ação imediata do usuário.

A aparência desta variação em modo claro:

![Badge - Modo Claro - Crítico](~@source/assets/images/component-badge-light-critical.png)

A aparência desta variação em modo escuro:

![Badge - Modo Escuro - Crítico](~@source/assets/images/component-badge-dark-critical.png)

### Sucesso

O extremo oposto de um distintivo crítico é sua variação de sucesso, a qual também chama atenção do usuário, porém de forma positiva, quando um resultado favorável precisa ser comunicado com ênfase.

A aparência desta variação em modo claro:

![Badge - Modo Claro - Sucesso](~@source/assets/images/component-badge-light-success.png)

A aparência desta variação em modo escuro:

![Badge - Modo Escuro - Sucesso](~@source/assets/images/component-badge-dark-success.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

_Badges_ não devem ser redimensionados verticalmente, mantendo dimensão equivalente a `0.25rem` em sua versão mínima, e equivalente a `0.875rem` em sua versão padrão.

_Badges_ não devem ser redimensionados horizontalmente de forma bruta, ou seja, apenas podem se expandir naturalmente caso seja necessário por causa do conteúdo interno, mas nunca "esticados" propositalmente.

### Acessibilidade

Por serem meramente visuais em suas versões mínima ou com ícone, _badges_ nestas versões devem possuir texto alternativo, usando-se alguma [técnica de acessibilidade para conteúdo invisível](https://webaim.org/techniques/css/invisiblecontent/) que só poderá ser acessado por leitores de tela.

A versão numérica não precisa de tal preocupação, pois os números já são elementos de acessibilidade acessíveis por leitores de tela.
