# Callout

Uma chamada de destaque (_callout_) é um tipo de dica flutuante ancorada a um elemento, a qual pode ser usada para ensinar usuários ou orientá-los pela aplicação, normalmente sem bloquear completamente a interface em volta.

Alguns _design system_ nomeiam este componente como termos abstratos como "pulo sobre" (_popover_) ou "balão de ensino" (_teaching bubble_), enquanto outros o consideram uma variação de dica de ferramenta (_tooltip_).

Entretanto, embora o _callout_ possa ser considerado um tipo de _tooltip_ e, portanto, poderia ser usado também desta forma neste _design system_, recomendamos o uso de dicas de ferramenta nativas do navegador Web (atributo `title` do HTML), pois se integram melhor ao Sistema Operacional em uso e possui lógica embutida de posicionamento dinâmico.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

A variação padrão deste componente representa seu _layout_ mínimo, representado por um balão flutuante atrelado a um elemento da interface. Esta variação não exige ação do usuário para ser descartada, podendo tal acontecimento ser atrelado a outra ação na interface, como o movimento do mouse para fora do elemento atrelado, bem como qualquer outra ação conveniente de acordo com as necessidades de instrução desejadas.

A aparência desta variação em modo claro:

![Callout - Modo Claro - Padrão](~@source/assets/images/component-callout-light-standard.png)

A aparência desta variação em modo escuro:

![Callout - Modo Escuro - Padrão](~@source/assets/images/component-callout-dark-standard.png)

### Com botão

Esta variação é muito parecida visualmente com a variação padrão, porém exige ação explícita do usuário, através do botão de ação ou do ícone de fechamento da caixa de chamada de destaque. É uma variação especialmente útil durante ensino guiado do usuário por novas interfaces, quando este precisa confirmar que entendeu determinado comportamento antes de seguir para o próximo, ou explicitamente fechar as instruções que não deseja mais ver.

A aparência desta variação em modo claro:

![Callout - Modo Claro - Com Botão](~@source/assets/images/component-callout-light-withbutton.png)

A aparência desta variação em modo escuro:

![Callout - Modo Escuro - Com Botão](~@source/assets/images/component-callout-dark-withbutton.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Este componente é mais informativo do que intrusivo, portanto não utilize uma chamada de destaque para pedir confirmação de ação. Nestes casos, use [Dialog](./dialog.md), pois este bloqueia a ação no restante da interface e garante total atenção do usuário em relação à confirmação a ser concedida.

Sempre coloque uma chamada de destaque perto do objeto que está sendo descrito, com a "cauda" do balão apontando diretamente este elemento, se possível. Assim, intuitivamente, nunca mostre chamadas de destaque sobre elementos atualmente invisíveis ao usuário.

Não use blocos de texto grandes em seu texto explicativo da chamada de destaque, pois eles se tornam difíceis de ler e acabam sendo esmagadoramente ignorados.

Evite bloquear elementos de interface importantes ao usuário com o posicionamento de alguma chamada de destaque. É uma experiência de usuário ruim que levará à frustração.

Não abuse dos _callouts_, usar muitas chamadas abertas automaticamente em sequência pode ser percebido como uma interrupção no fluxo de trabalho de alguém. Algumas aplicações tem cometido esse erro ao receber novos usuários após o primeiro _login_, exigindo que o usuário veja e confirme vários passos instrutivos (por vezes, mais de 5 passos) antes de efetivamente usar a aplicação. É uma experiência de usuário muito ruim e deve ser evitada.

Uma abordagem sutil e útil para utilização deste componente é quando um conceito particularmente complexo precisa de explicação. Então, coloque um ícone de informações ao lado do texto para indicar que há mais informações úteis disponíveis e quando alguém passar o mouse ou acionar o ícone, a chamada de destaque explicativa aparecerá.

### Acessibilidade

Se a chamada de destaque estiver sendo usada como uma caixa de diálogo (o que nós realmente não recomendamos), ao menos defina `role="dialog"` no _container_ da chamada de destaque.

Se a chamada de destaque possuir botões, estes devem ser acessíveis através de navegação por teclado e devem respeitar seus próprios padrões de acessibilidade conforme documentado em [Button](./button.md).

Qualquer _callout_ aberto em uma interface deve ser descartada imediatamente se a tecla <kbd>Esc</kbd> for pressionada.
