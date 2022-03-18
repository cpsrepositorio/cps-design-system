# Tipografia

![Pangrama da Tipografia](~@source/assets/images/typography-pangram.png)

Como a representação visual da linguagem textual, a principal tarefa da tipografia é informar com clareza, ao mesmo tempo em que reforça a identidade. O sistema de tipográfico do **CPS Design System** ajuda a criar estrutura e hierarquia no conteúdo textual, para maximizar a legibilidade nas interfaces.

[Open Sans Variável](https://fonts.google.com/specimen/Open+Sans) é a fonte principal deste _design system_. É uma versão atualizada em 2021 da Open Sans clássica e usa a tecnologia de [fonte variável](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts) para fornecer dinamicamente excelente legibilidade em tamanhos muito pequenos, variabilidade para diferentes mídias, e contornos aprimorados para diversos tamanhos de exibição.

> **Open Sans** é um tipo de letra humanista sem serifa, desenhado por Steve Matteson, Diretor de Tipos da Ascender Corp. Esta versão contém o conjunto completo de 897 caracteres, que inclui os conjuntos de caracteres padrão ISO Latin 1, Latin CE, Grego e Cirílico. Open Sans foi projetado com uma tensão vertical, formas abertas e uma aparência neutra, mas amigável. Foi otimizado para interfaces de impressão, Web e dispositivos móveis, e possui excelentes características de legibilidade em suas letras.

## Questões de padronização

A definição da **Open Sans** como padrão deste _design system_ partiu não somente por suas características positivas citadas acima, mas também a partir de profunda reflexão sobre o teor dos dois principais materiais previamente existentes no CPS em relação a padronizações visuais:

- O [Manual de Identidade Visual](https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2020/08/manual_centro_paula_souza_gestao2019_atualizado.pdf) destaca a relevante importância de utilização de uma fonte padronizada para unidade visual dos materiais, o que faz todo sentido. Em seguida, especifica a fonte [Verdana](https://en.wikipedia.org/wiki/Verdana) como a fonte padrão, motivado por ser <cite>"encontrada pela maioria dos sistemas operacionais dos computadores"</cite>. Esta motivação não é relevante para aplicações Web, uma vez que a utilização exclusiva de System Fonts (fontes disponíveis nativamente no sistema operacional do usuário), ao invés de [Web Fonts](https://fonts.google.com/knowledge/using_type/using_web_fonts) (carregadas a partir de um servidor Web), pode resultar em disparidades indesejadas na apresentação do conteúdo, entre diferentes dispositivos, plataformas e usuários. Ademais, Verdana é uma fonte antiga, não tendo sido pensada para diferentes dispositivos e resoluções, além de não ter sofrido atualizações relevantes ao longo dos anos, não tendo suporte à variabilidade disponível em fontes modernas.
- O [Guia de Identidade para Sites](https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2021/01/guia-digital-sites-cps-2021.pdf), embora não cite as motivações por trás de suas escolhas, ignora completamente a recomendação de uso da fonte Verdana, adotando três Web Fonts diferentes: [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) (recomendada para títulos de seções), [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) (recomendada somente para items do menu principal) e a própria **Open Sans** (recomendada para uso geral nos conteúdos). De fato, a escolha pela **Open Sans** foi fortemente inspirada por este guia, pois apesar de existirem diversas outras Web Fonts modernas, com variabilidade e boa legibilidade, adotar a mesma fonte utilizada nos portais públicos do CPS simplesmente pareceu mais sensato. Quanto ao uso de fontes diferentes para elementos específicos do _layout_, embora possam haver [alguns bons motivos](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces) para isso em materiais fortemente baseados em texto (como publicações em _blog_), se manter em uma única fonte pode ter vantagens estéticas (ainda mais com o uso de fonte variável que permite explorar diferentes pesos, espessuras e estilos ópticos na mesma fonte) como também vantagens de desempenho (carregar uma Web Font significa fazer um _download_ obrigatório de um conjunto de _assets_ potencialmente inexistente no navegador do usuário, carregar outras eleva desnecessariamente o tempo desprendido neste processo antes dos _layouts_ poderem ser apresentados ao usuário).

## Pilha tipográfica

Embora a utilização de Web Fonts apresente uma vantagem de padronização para todos os dispositivos e usuários, eventualmente (e bem raramente), algo pode falhar no servidor que a hospeda, ou algo pode falhar no navegador do usuário impedindo sua renderização. Neste caso, a abordagem mais segura, que também foi a escolha adotada por este este _design system_, é utilizar uma pilha tipográfica, especificando a fonte mais prioritária para utilização, seguida de fontes alternativas em caso de problemas, com tais fontes _fallback_ baseadas em fontes de sistema.

Com isto em mente, o **CPS Design System** utiliza e recomenda a seguinte pilha:

``` css
font-family: "Open Sans", "Segoe UI", Verdana, Sans-serif;
```

A fonte [Segoe UI](https://en.wikipedia.org/wiki/Segoe) é uma família de fonte utilizada em numerosas aplicações Microsoft e pré-instalada em muitas versões do Windows, ou instalada junto com o pacote Office em outros sistemas operacionais, além de apresentar visualmente muitas características similares à **Open Sans**. Caso eventualmente também não possa ser utilizada, Verdana entra em ação por potencialmente estar presenta de forma nativa em muitos computadores, reforçando-se que isto só ocorrerá caso as fontes anteriores não tenham podido ser carregadas por algum motivo raro.

## Escala de tamanhos e estilos

O **CPS Design System** utiliza-se de diferentes tamanhos e estilos para proporcionar facilitar a tarefa de hierarquizar as informações, conforme tabela a seguir, sempre com a preocupação de que tais variações não sejam meramente visuais e não representem barreira no caminho à comunicação.

![Escala de Tamanhos e Estilos](~@source/assets/images/typography-ramp.png)

## Regras de formatação

Algumas regras devem ser seguidas em relação ao uso da tipografia:

- **Peso:** Texto _semibold_ (peso `600`) é usado para destaques e títulos em geral. Texto regular (peso `400`) é usado para todos os outros fins. Em alguns locais específicos, o _sembibold_ é substituído por negrito tradicional (ou _bold_, peso `700`).
- **Legibilidade:** Texto mais leve que o regular nunca deve ser utilizado (por exemplo, _light_, ou peso `300`). Texto _sembibold_ não deve ser usado em tamanhos menores que 14px. Textos de tamanho 16px e inferiores exigem contraste de `4,5:1` em relação ao plano de fundo. Textos maiores exigem apenas contraste de `3:1` com o plano de fundo.
- **Alinhamento:** O alinhamento à esquerda deve ser usado por padrão para quase todos os fins.
Alinhamento justificado não é adequadamente legível em interfaces digitais. Alinhamento à direita é restrito a casos bem específico, como colunas de tabelas com valores numéricos. Alinhamento ao centro pode ser aplicado em determinadas situações, como botão de ação ou título abaixo de ícone.
- **Notação de maiúsculas**: A notação em estilo [Sentence case](https://en.wiktionary.org/wiki/sentence_case) deve ser usada para todo o texto da interface, com exceção de items de menu de primeiro nível, que podem utilizar [Title case](https://en.wiktionary.org/wiki/title_case).
Nomes próprios, siglas, acrônimos e abreviações devem seguir suas respectivas notações padrão (exemplos: "Estado de São Paulo", "Paula Souza", "CPS"). Nomes de tecnologias devem obedecer sua notação oficial (exemplos: "JavaScript", "PostgreSQL", "Nginx", "HTML").
- **Truncagem:** User reticências (ou _ellipsis_, ou literalmente `...`) é o método preferido de truncagem, devendo ser usado sempre que possível. Em espaços curtos ou quando o significado poderia ser perdido com as reticências, recorte bruto de texto também é um método aceitável.
