# Introdução

::: tip Dica
Este capítulo introdutório prossegue por tópicos mais teóricos e, embora recomendemos muito a leitura para contextualização, pode ser pulado se você estiver com muita pressa.
:::

À medida que o _design_ de <abbr title="User Interface">UI</abbr> evoluiu ao longo dos anos, a escala e a velocidade com que interfaces devem ser criadas também aumentaram. Com essa expansão drástica, surge uma necessidade extrema de as organizações otimizarem o trabalho de _design_. Assim, muitas equipes de _design_ aproveitam _design systems_ robustos para gerenciar _designs_ em escala e com mais agilidade.

Assim, um _design system_ pode ser definido como um conjunto completo de padrões destinados a gerenciar o _design_ em escala, com padrões e componentes reutilizáveis.

## Início rápido

Se você é desenvolvedor, sabemos que está querendo sair correndo para ver a documentação visual dos componentes, mas esta não é a maneira ideal de iniciar com um _design system_.

Passe primeiro pelo **Guia Visual**, lendo [Camadas e Materiais](./camadas-e-materiais.md), [Dimensões e Espaçamentos](./dimensoes-e-espacamentos.md), [Elevação](./elevacao.md), [Tipografia](./tipografia.md), [Cores](./cores.md) e [Ícones](./camadas-e-materiais.md), preferencialmente nesta ordem. Depois, vá à imersão com a documentação visual dos [**Componentes**](../componentes/).

## O que é o CPS Design System?

**CPS Design System** é um sistema de _design_ corporativo para utilização em sistemas internos do [Centro Paula Souza](https://www.cps.sp.gov.br/), isto é, trata-se de um conjunto completo de padrões a serem utilizados e replicados em diferentes sistemas internos, a fim de simplificar a viabilização de <abbr title="User Experience">UX</abbr> padronizada.

## Por que aderir a ele?

Design Systems não são novidade em grandes corporações, e também tem se tornado mais e mais frequentes em corporações menores. Quando bem implementados, podem fornecer muitos benefícios para as equipes.

#### _Design_ e desenvolvimento de UI pode ser realizado rapidamente e em escala

O principal benefício é a capacidade de replicar designs rapidamente, utilizando componentes e elementos de UI pré-fabricados. As equipes podem continuar a usar os mesmos elementos repetidamente, reduzindo a necessidade de reinventar a roda e, assim, diminuindo-se o risco de inconsistências não intencionais.

#### Alivia a pressão sobre _designers_ para se concentrar em problemas mais complexos

Como os elementos de UI mais simples já definidos e reutilizáveis, os profissionais de UI/UX podem então se concentrar menos em ajustar a aparência visual e mais em problemas mais complexos (como priorização de informações, otimização de fluxo de trabalho e gerenciamento de jornada).

Embora essa recompensa possa parecer pequena quando você cria apenas um pequeno número de telas, torna-se substancial quando se trata de coordenar esforços em dezenas de equipes e milhares de telas.

#### Cria uma linguagem unificada entre equipes multifuncionais

Quando as responsabilidades pela UI/UX dos sistemas mudam, ou quando equipes se dispersam geograficamente, uma linguagem unificada reduz o desperdício de _design_ ou tempo de desenvolvimento devido a falhas de comunicação.

Por exemplo, a funcionalidade ou a aparência de um menu suspenso não seria debatida, pois esse termo é reservado para um elemento especificamente definido no _design system_.

#### Cria consistência visual entre produtos distintos (e potencialmente isolados)

Particularmente quando as equipes trabalham em produtos "independentes", onde cada produto opera sem grande ou nenhuma interferência dos outros, a ausência de um _design system_ em toda a organização pode levar a uma aparência visual inconsistente e experiências que parecem fragmentadas ou não relacionadas à marca.

Os sistemas de _design_ fornecem uma única fonte da verdade sobre o estilo visual das interfaces e dos componentes, com padrões e estilos que unificam experiências desconexas para que sejam visualmente coesas e pareçam fazer parte do mesmo ecossistema. Além da evidente imagem mais "profissional" que isso passa aos usuários (principalmente àqueles que utilizam mais de um produto da instituição), como um bônus, qualquer grande redesenho ou _rebrand_ da marca pode ser gerenciado em escala por meio do _design system_.

#### Pode servir como uma ferramenta educacional a desenvolvedores e até a outros _designers_

Diretrizes de uso e guias de estilo explicitamente escritos ajudam a integrar colaboradores individuais que são novos no _design_ de UI (em geral ou na instituição) e servem como um lembrete para o restante dos colaboradores.

E para os desenvolvedores, exime-os de precisar ter conhecimento sobre _design_ de interfaces para construir aplicações com boa experiência de usuário, podendo focar em desenvolver código para resolver problemas de negócio ao invés de focar em criar UI do zero. Por fim, desenvolvedores que seguem fielmente bons _design systems_ acabam aprendendo boas práticas de _design_ com eles, ganhando algum conhecimento em UI/UX por experiência prática.

## Quais os princípios do projeto?

Todo _design system_ precisa ser fundamentado em alguns princípios (eventualmente também chamados de **valores**) que norteiam as decisões tomadas pela equipe de _design_ durante sua definição e, posteriormente, durante sua evolução contínua. **CPS Design System** se fundamenta em três princípios simples mas essenciais, os quais já foram explicitados em nossa página inicial, mas aqui estão expostos em mais detalhes.

::: details Exemplos práticos da aplicação dos princípios
Não meramente filosóficos, é fácil perceber como os princípios _"Natural aos usuários"_, _"Intuitivo e poderoso"_, _"Empolgante e imersivo"_ se aplicam em cenários práticos:
- A escolha de elementos com formatos comumente utilizados em aplicações similares facilita a compreensão. Por exemplo, é fácil reconhecer um [_checkbox_](../componentes/check-field.md) quando você vê um quadrado na tela com um ícone familiar de checagem (`✓`) dentro.
- A utilização de cores com real significado diante do contexto também torna tudo mais intuitivo e simples de utilizar. Por exemplo, uma caixa de texto com borda vermelha certamente chama atenção para algum erro no preenchimento daquela informação. Claro que a acessibilidade também entra em jogo neste caso, mas é um assunto fora do escopo deste exemplo.
- A escolha de ícones coerentes e tradicionais com a operação, quando viável, reduz drasticamente a cognição necessária para compreender um comportamento. Por exemplo, o tradicional ícone de trigrama (`☰`, também conhecido popularmente como _hamburger icon_) está mais do que estabelecido como o ícone que as pessoas procuram para abrir e fechar um menu de opções global da aplicação, não haveria motivos para divagar sobre a utilização de outro ícone para isso.
:::

### Natural aos usuários

**CPS Design System** foi construído com fortes inspirações no [Fluent Design System](https://www.microsoft.com/design/fluent/#/), da Microsoft. Embora estendendo e definindo suas próprias soluções para alguns cenários, foi concebido para ser percebido como propositalmente familiar.

Mais do que a boa e velha máxima sobre "não reinventar a roda", a principal razão por trás desta escolha foi o fato de colaboradores do CPS, em geral, estarem acostumados à utilização de ferramentas Microsoft em seu dia-a-dia. Mais do que isto, Fluent é um design moderno e interessante, servindo como uma excelente base para respaldar este _design system_.

### Intuitivo e poderoso

Experiências baseadas no **CPS Design System** se ajustam ao comportamento e à intenção dos usuários, isto é, buscam entender e antecipar o que é necessário ao invés de forçar o usuário a entender e aprender do zero como usar as interfaces.

### Empolgante e imersivo

O mundo físico é nosso vocabulário. **CPS Design System** fala sobre luz e sombra, dimensões, elevações, materiais. O linguajar foi pensado com o intuito de reduzir o esforço necessário para que pessoas de diferentes áreas o compreendam.

## Como utilizar, de forma prática?

**CPS Design System** é um referencial teórico, composto por este guia visual, mais uma documentação ilustrativa, que pode ser utilizada para guiar o _design_ e o desenvolvimento de interfaces de usuário para aplicações do CPS, independentemente de quais linguagens ou _frameworks_ estiverem sendo utilizados pelas equipes.

::: warning Atenção
**CPS Design System** não é um _framework_ ou uma biblioteca de componentes, e não deve ser entendido como tal. Se o que você procura é efetivamente uma biblioteca de componentes totalmente aderente ao **CPS Design System**, mas que seja pronta para uso diretamente em seus projetos de soluções Web, acesse **[CPS Elements](https://cpsrepositorio.github.io/cps-elements/)**, uma biblioteca de Web Components de ponta, sem complicação, que podem executar nativamente em todos os navegadores modernos, bem como pode ser integrada com qualquer _framework_ JavaScript moderno, como Angular, React, Vue, etc.
:::

## Como me envolver?

Quer obter mais informações sobre o **CPS Design System**, tirar dúvidas sobre sua utilização, ou até mesmo participar e colaborar com a evolução contínua do projeto?

Excelente! Comece enviando um e-mail para o Prof. [Erick Petrucelli](mailto:erick.petrucelli@cps.sp.gov.br).
