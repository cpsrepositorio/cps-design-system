# ToastNotification

O barra de notificação é um elemento recorrente em interfaces de sistemas em geral. Atualmente é muito utilizada em sua forma flutuante, ou seja, aparece por cima da interface a partir do canto inferior da tela quando uma notificação precisa ser apresentada. Por lembrar metaforicamente uma torrada saltando de uma torradeira quando fica pronta, o nome "torrada de notificação" se popularizou em inglês (_toast notification_), mas nunca é utilizado de forma traduzida.

Barras de notificação são utilizadas para exibir mensagens de _status_ sobre qualquer coisa que ocorre em um aplicativo, sendo altamente visíveis para os usuários, mas não tão intrusivas quanto um [Dialog](./dialog.md).

Além de não cobrirem a maior parte do conteúdo da tela, normalmente barras de notificação são efêmeras, desaparecendo automaticamente após alguns segundos, além de poderem ser explicitamente fechadas pelo usuário. Eventualmente pode ser interessante exibir algum botão de ação em uma barra de notificação, sendo que a existência do botão pode ou não alterar o comportamento da barra poder ser fechada ou não.

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Informativo

Uma barra de notificação informativa é a aparência padrão deste componente, podendo ser utilizada quando se deseja expressar uma mensagem que não carrega grande significado consigo, seja este significado positivo ou negativo para a operação da interface. Por isso, embora seja a variação padrão do componente, não é utilizada com muita frequência.

A aparência desta variação em modo claro:

![ToastNotification - Modo Claro - Informativo](~@source/assets/images/component-toastnotification-light-information.png)

A aparência desta variação em modo escuro:

![ToastNotification - Modo Escuro - Informativo](~@source/assets/images/component-toastnotification-dark-information.png)

### Alerta

Uma notificação de alerta deve ser utilizada quando as informações à qual está atrelada precisam de atenção por parte do usuário, por exemplo, alguma ação realizada causou problemas.

A aparência desta variação em modo claro:

A aparência desta variação em modo claro:

![ToastNotification - Modo Claro - Alerta](~@source/assets/images/component-toastnotification-light-warning.png)

A aparência desta variação em modo escuro:

![ToastNotification - Modo Escuro - Alerta](~@source/assets/images/component-toastnotification-dark-warning.png)

### Crítico

Uma notificação crítica chama a maior atenção possível do usuário e está inerentemente ligada a situações de erro crítico, bem como qualquer ação essencial que o usuário tentou realizar e acabou falhando, em geral por erros internos da própria aplicação.

A aparência desta variação em modo claro:

![ToastNotification - Modo Claro - Crítico](~@source/assets/images/component-toastnotification-light-critical.png)

A aparência desta variação em modo escuro:

![ToastNotification - Modo Escuro - Crítico](~@source/assets/images/component-toastnotification-dark-critical.png)

### Sucesso

O extremo oposto de uma notificação crítica é sua variação de sucesso, a qual também chama atenção do usuário, porém de forma positiva, quando um resultado favorável precisa ser comunicado com ênfase.

A aparência desta variação em modo claro:

![ToastNotification - Modo Claro - Sucesso](~@source/assets/images/component-toastnotification-light-success.png)

A aparência desta variação em modo escuro:

![ToastNotification - Modo Escuro - Sucesso](~@source/assets/images/component-toastnotification-dark-success.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Uma barra de notificação é mais comumente encontrada na parte inferior central de um aplicativo, flutuando acima do conteúdo, usando [elevação](../guia-visual/elevacao.md#shadow-lg) para diferenciá-la do restante do conteúdo. Entretanto, se for uma informação estritamente direcionada a apenas uma parte do _layout_, é válido que barra de notificação seja embutida no fluxo do documento, empurrando o conteúdo posterior a ela quando estiver em exibição e, neste caso, sem utilizar elevação pois estará contida no mesmo plano que o restante do conteúdo.

Várias barras de notificação podem aparecer ao mesmo tempo, mas isto deve ser evitado sempre que possível para não causar confusão ao usuário sobre onde focar seu olhar.

As barras de notificação raramente são mostradas em resposta direta a uma ação do usuário. Em vez disso, eles devem ser exibidas quando houver algo que o usuário deva saber sobre o aplicativo em geral. Por exemplo, não é adequado ficar exibindo uma barra na variação de sucesso toda vez que o usuário salva um registro, pois o próprio fato da tela mudar sua visualização e mostrar o registro que acaba de ser salvo já serve como instrução ao usuário de que a ação foi bem sucedida. Por outro lado, se um arquivo estava sendo processado em segundo plano, uma barra de notificação é uma ótima forma do usuário ser informado sobre sucesso ou erro crítico após a conclusão da operação.

Limite os títulos a 50 caracteres (incluindo espaços), visto que as pessoas precisam ser capazes de ler rapidamente o título para determinar o propósito da mensagem. Títulos devem ser grafados em notação _Sentence case_, conforme explanado em [Tipografia](../guia-visual/tipografia.md#regras-de-formatação).

Descreva a informação ou o estado de erro de forma concisa, idealmente em uma única frase. Caso precise de múltiplas linhas, limite a mensagem a menos de 512 caracteres (incluindo espaços). Inclua pontuação final para frases completas.

Em geral, o tempo que uma barra de notificação deve ficar visível antes de desaparecer automaticamente deve ser proporcional à quantidade de texto somando-se título e descrição. Considerando uma barra com uma linha simples de conteúdo, 5 segundos costuma ser a medida ideal. A cada nova linha de texto na barra, acrescente 2 segundos ao total.

Ofereça um botão de ação para ajudar o usuário a resolver algum erro que tenha recebido na mensagem, ou para oferecer um mecanismo rápido para desfazer alguma ação que acaba de ser completada em segundo plano (pense em uma barra de notificação após enviar um e-mail pelo Gmail). Limite o texto do botão a menos de 15 caracteres (incluindo espaços). Os botões de ação podem ter qualquer retorno de chamada anexado a eles, mas em geral também dispensam a mensagem ao serem acionados, por representarem uma resolução para a barra de notificação que foi exibida.

Ofereça uma maneira rápida para as pessoas fecharem uma barra de notificação através do botão de fechar, a menos que haja um problema que precise ser resolvido imediatamente pelo usuário, fazendo com que a barra de notificação não oferecerá a opção de ser fechada. Por exemplo, uma funcionalidade que exige uma assinatura e esta está expirada, a barra de notificação nunca fechará enquanto a ação de renovar a assinatura não ocorrer.

### Acessibilidade

Enquanto a barra de notificação em si não possui características especiais de acessibilidade, tanto o botão de fechar em forma de ícone, quanto um eventual botão de ação, devem seguir as recomendações já descritas em [Button](./button.md).
