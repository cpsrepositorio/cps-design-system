# Introdução

Com a aceleração do desenvolvimento de interfaces, tornou-se essencial otimizar o trabalho de _design_. Para isso, equipes adotam _design systems_: conjuntos de padrões e componentes reutilizáveis que facilitam a criação de interfaces em escala, promovendo agilidade e consistência.

**CPS Design System** é um _design system_ corporativo para os sistemas internos <abbr title="Centro Paula Souza">[CPS](https://www.cps.sp.gov.br/)</abbr>. Trata-se de um conjunto completo de padrões a serem replicados em diferentes sistemas internos, buscando a viabilização de <abbr title="User Experience">UX</abbr> padronizada.

## Início rápido

**CPS Design System** é um referencial teórico, composto por [guia visual](./guia-visual/) e por [documentação](./documentacao/) ilustrativa. Pode ser compreendido como um guia conceitual para o _design_ e o desenvolvimento de <abbr title="User Interface">UI</abbr> para aplicações do CPS.

Ler todo o guia é recomendado se você está desenhando _layouts_ do zero, ou mesmo desenvolvendo intensamente o _front-end_, de sistemas internos CPS. Mas atente-se para o fato de que este _design system_ não é um _framework_ ou uma biblioteca de componentes!

Se o que você procura é uma biblioteca totalmente aderente ao **CPS Design System**, pronta para uso em soluções _web_ modernas, visite agora mesmo o **[CPS Elements](https://cpsrepositorio.github.io/cps-elements/)**.

::: warning Atenção
**[CPS Elements](https://cpsrepositorio.github.io/cps-elements/)** é a biblioteca de componentes _web_ **oficial** para sistemas internos CPS.

Oferece um conjunto de _Web Components_ sem complicação, nascida a partir das definições visuais e funcionais deste _design system_, e que pode executar nativamente em todos os navegadores de ponta, além de suportar qualquer _framework_ JavaScript moderno, como Angular, React, Vue, etc.

Se você está criando um sistema para o CPS, é <u>**altamente recomendável**</u> que você use **CPS Elements** ao invés de construir suas interfaces com outros componentes escolhidos aleatoriamente.
:::

## Por que seguir _design systems_?

Seguir _design systems_ não é novidade em grandes corporações, e também tem se tornado cada vez mais frequente em empresas menores. Quando bem implementados, podem fornecer muitos benefícios para as equipes.

#### _Design_ e desenvolvimento de UI pode ser realizado rapidamente e em escala

O principal benefício é a capacidade de replicar designs rapidamente, utilizando componentes e elementos de UI pré-fabricados. As equipes podem continuar a usar os mesmos elementos repetidamente, reduzindo o tempo perdido e os riscos de ficar recriando a mesma solução várias vezes.

#### Alivia a pressão sobre _designers_ para cada nova interface a ser construída

Como os elementos de UI mais simples já definidos e reutilizáveis, os _designers_ podem então se concentrar menos na aparência visual, e mais em problemas complexos, bem como deixam de ser constantes pontos de bloqueio durante a definição das interface dos sistemas.

#### Cria uma linguagem unificada entre equipes multifuncionais

Quando as responsabilidades pela interface mudam, ou quando equipes se dispersam geograficamente, uma linguagem unificada reduz o desperdício de _design_ ou tempo de desenvolvimento _front-end_ devido a falhas de comunicação. Em geral, se reduz muita reflexão repetitiva, e até mesmo debates entre os times, pois os principais assuntos recorrentes sobre UI/UX já foram definidos no _design system_.

#### Cria consistência visual entre produtos distintos (e potencialmente isolados)

Particularmente quando as equipes trabalham em produtos "independentes", onde cada produto opera sem grande ou nenhuma interferência dos outros, a ausência de um _design system_ em toda a organização pode levar a uma aparência visual inconsistente e experiências que parecem fragmentadas ou não relacionadas à marca.

Os sistemas de _design_ fornecem uma única fonte da verdade sobre o estilo visual das interfaces e dos componentes. Além da evidente imagem mais "profissional" que isso passa aos usuários (principalmente os que utilizam mais de um produto da instituição), como um bônus, qualquer grande redesenho ou _rebrand_ da marca pode ser gerenciado em escala por meio do _design system_.

#### Serve como uma ferramenta educacional a desenvolvedores e até a outros _designers_

Diretrizes de uso e guias de estilo explicitamente escritos ajudam a integrar colaboradores individuais que são novos no _design_ de UI (em geral ou na instituição) e servem como um lembrete para o restante dos colaboradores.

E para os desenvolvedores, exime-os de precisar ter conhecimento profundo sobre o _design_ de interfaces, permitindo-os focar em criar código para resolver problemas de negócio ao invés de focar em definir interfaces do zero. No longo prazo, desenvolvedores que seguem fielmente bons _design systems_ ainda acabam aprendendo boas práticas de _design_.

## Quais os princípios adotados?

Todo _design system_ precisa ser fundamentado em alguns princípios (eventualmente também chamados de **valores**) que norteiam as decisões tomadas pela equipe de _design_ durante sua definição e, posteriormente, durante sua evolução contínua.

**CPS Design System** se fundamenta em três princípios simples, os quais já foram explicitados em nossa página inicial e aqui destacamos novamente.

### Natural aos usuários

**CPS Design System** foi construído com fortes inspirações nas definições do [Fluent Design System](https://www.microsoft.com/design/fluent/#/) da Microsoft e, embora estendendo e definindo suas próprias soluções para alguns cenários, foi propositalmente concebido para parecer algo familiar.

Mais do que isso, além do Fluent ser um _design_ interessante e completo, sendo uma excelente base para este _design system_, os colaboradores do CPS, em geral, já estão acostumados à utilização de ferramentas Microsoft no dia-a-dia, o que impulsiona ainda mais a sensação de naturalidade.

### Intuitivo e poderoso

Experiências baseadas no **CPS Design System** se ajustam ao comportamento e à intenção dos usuários, isto é, buscam entender e antecipar o que é necessário e se apoiar em padrões bem conhecidos, ao invés de forçar os usuários entenderem como usar de maneiras disruptivas.

### Empolgante e imersivo

O mundo físico é nosso vocabulário. **CPS Design System** fala sobre luz e sombra, materiais, elevações, dimensões e espaçamento. O linguajar foi pensado com o intuito de reduzir o esforço cognitivo necessário para que pessoas de diferentes áreas o compreendam.

## Como os princípios se aplicam?

Não meramente filosóficos, é fácil perceber como os princípios _"Natural aos usuários"_, _"Intuitivo e poderoso"_, _"Empolgante e imersivo"_ se aplicam em cenários práticos:

- A escolha de elementos com formatos comuns em aplicações similares facilita a compreensão. Por exemplo, é fácil reconhecer um [_checkbox_](../componentes/check-field.md) quando você vê um quadrado na tela com um ícone de checagem (`✓`) dentro.

- Usar cores com real significado diante do contexto torna tudo mais intuitivo e simples. Por exemplo, uma caixa com bordas vermelhas chama atenção para algum erro no preenchimento daquela informação de forma natural. Claro que a acessibilidade também entra em jogo, mas é um assunto fora do escopo deste exemplo.

- A escolha de ícones coerentes com a operação, quando viável, reduz drasticamente o esforço cognitivo. Por exemplo, o tradicional trigrama (`☰`, também conhecido popularmente como _hamburger icon_) está mais do que estabelecido para abrir e fechar menus laterais, então não haveria motivos para pensar em outro ícone para isso.

Mas estes são apenas exemplos superficiais. Para entender como tais princípios realmente se aplicam na prática, que tal começar a passear pelas próximas sessões desta documentação? [Camadas e materiais](./camadas-e-materiais.html) é um bom próximo passo!

## Como me envolver?

Quer obter mais informações sobre o **CPS Design System**, tirar dúvidas sobre sua utilização, ou até mesmo participar e colaborar com a evolução contínua do projeto?

Excelente! Comece enviando um e-mail para o Prof. [Erick Petrucelli](mailto:erick.petrucelli@cps.sp.gov.br).
