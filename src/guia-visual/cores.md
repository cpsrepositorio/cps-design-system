# Cores

A cor fornece uma maneira intuitiva de comunicar informações nas interfaces, podendo ser usada para indicar interatividade, fornecer _feedback_ às ações do usuário, e dar à interface uma sensação de continuidade visual.

O **CPS Design System** emprega cor para ajudar usuários a se concentrarem em suas tarefas, construindo uma hierarquia visual e criando estrutura entre elementos de interface, a partir de diversos tons neutros pontualmente interrompidos por cores mais proeminente, enfatizando itens significativos somente quando necessário.

Isto é obtido através da combinação de três paletas de cores completas, isto é, compostas por uma cor base e três níveis de cores mais claras e três níveis de cores mais escuras, sendo uma [Paleta de Cinzas Neutros](#paleta-de-cinzas-neutros), uma [Paleta de Cor de Marca](#paleta-de-cor-de-marca) (_brand color_), e uma [Paleta de Cor de Ênfase](#paleta-de-cor-de-ênfase) (_accent color_), mais uma semi-paleta de [Cores de Estado](#cores-de-estado).

Mas antes de abordar cada uma das paletas de cores, é necessário compreender como este _design system_ foi estruturado para ser flexível a dois modos de cor.

## Modos de Cor

Uma das mais fortes tendências de _design_ dos últimos anos está em oferecer não apenas um esquema de cores, mas sim dois: **modo claro** (ou _light mode_) e **modo escuro** (_dark mode_). Cada modo consiste em um conjunto de valores de cores neutras que são ajustados automaticamente para garantir o contraste ideal, em seguida com as paletas de cores de marca e de ênfase sendo usadas conforme o nível de brilho desejado por cima de cada superfície.

Em ambos os modos de cor claro e escuro, cores mais escuras indicam superfícies de fundo de menos importância, com as superfícies importantes realçadas com cores mais claras e brilhantes. Vale lembrar, entretanto, que outras características influenciam na sensação de importância das superfícies, conforme abordado em [Camadas e Materiais](./camadas-e-materiais.md) e em [Elevação](./elevacao.md).

![Exemplo de Modos de Cor](~@source/assets/images/colors-sample-modes.png)

::: details Modo escuro é importante mesmo?
Existem ótimos argumentos [a favor](https://www.snoweb.io/en/website/dark-mode/) e [contra](https://www.androidauthority.com/dark-mode-1046425/) à utilização de modo escuro.

A característica mais importante do UX _design_ moderno é ser inclusivo e apropriadamente adaptável às eventuais necessidades e preferências do usuário, por exemplo:
- Respeitar preferências de tamanho de fonte;
- Navegação por teclado e por leitores de tela funcional;
- [Tipografia](./tipografia.md) que prioriza legibilidade;
- Contrastes de cores adequados;
- Não utilizar cores como único mecanismo de identificação de estados da interface (atenção aos diferentes tipos de daltonismo);
- Respeitar preferências de redução de movimentos (fonte de vertigens e epilepsias para determinadas pessoas, ou ainda meras distrações que alguns preferem evitar);
- Oferecer conteúdo alternativo textual (ou quando o principal não carrega, ou o usuário não pode vê-lo);
- Respeitar preferências de exibição da interface (e o modo escuro entra aí).

Ou seja, oferecer uma interface preparada para modo escuro não é apenas um luxo visual, é uma característica de acessibilidade para parte do público, e uma característica de respeito às preferências para todo o público.
:::

Falando em camadas, cada modo de cor é fundamentalmente um conjunto de quatro preenchimentos sólidos, conforme apresentado abaixo, para serem utilizados nas camadas básicas da aplicação. Assim, os elementos da interface são posicionados acima se utilizando de ajustes de cores em diferentes níveis de opacidade, para gerar o resultado mais adequado para cada modo de cor, tirando proveito das características de material [Translúcido](./camadas-e-materiais.md#translúcido) sempre que possível.

![Preenchimentos Sólidos dos Modos de Cor](~@source/assets/images/colors-modes-fills.png)

## Paleta de Cinzas Neutros

Muitos _design systems_ modernos se utilizam de paletas de cores com tons de cinza neutros, com o intuito de oferecer uma variedade de contrastes adequado para diversas necessidades, sem interferir em questões de identidade ou desviar a atenção desnecessariamente por causa do uso exagerado de cores.

Neste sentido, o **CPS Design System** é similar. Entretanto, diferencia-se fortemente de vários outros _design systems_ por respaldar sua paleta de cores neutras em apenas duas cores: **preto** e **branco**. Todas as outras tonalidades são obtidas através de variações de **opacidade**:

![Paleta de Cinzas Neutros](~@source/assets/images/colors-palette-gray.png)

Conforme já discutido, ao utilizar-se das características de material [Translúcido](./camadas-e-materiais.md#translúcido), tais tons neutros podem facilmente se adaptar em cima de tons coloridos das outras paletas de cores, bem como podem se mesclar uns aos outros de forma inteligente. Por exemplo, um elemento utilizando a cor base da paleta de cinzas teria aparência de cinza `#959595` quando por cima de uma camada quartenária do modo claro (cujo preenchimento é branco `#FFFFFF`), mas sutilmente e coerentemente ajustado à aparência de cinza `#8E8E8E` quando por cima de uma camada primária do modo claro (cujo preenchimento é cinza claro `#F3F3F3`).

::: tip Dica
A paleta de cinzas neutros, diferente das outras, é apenas uma referência. Ou seja, se determinada intensidade de opacidade não existente na paleta for necessária para algum cenário ou componente específico, não é problema ajustar, desde que se mantendo as mesmas características visuais do restante do _design system_.
:::

Embora um tanto quanto evidente, por ser totalmente baseada em opacidades, resta destacar que a paleta de cinzas neutros sofre influencia do modo de cor atual.

## Paleta de Cor de Marca

Conforme o [Manual de Identidade Visual](https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2020/08/manual_centro_paula_souza_gestao2019_atualizado.pdf) destaca, a cor de marca do CPS é o vermelho (`#B20000`), servindo tal cor como base para a paleta de cor de marca deste _design system_:

![Paleta de Cor de Marca](~@source/assets/images/colors-palette-brand.png)

Por ser justamente uma cor intermediária e de brilho intenso, fez-se necessário construir uma paleta de cores derivadas com três tons mais claros e três tons mais escuros. Existem diversas teorias e formulações válidas para geração de tons a partir de uma cor base, sendo que a paleta de marca deste _design system_ foi construída utilizando-se de [ajustes específicos](https://hihayk.github.io/scale/#3/3/38/55/-2/-24/100/-33/b20000/178/0/0/white) na ferramenta **Color Scale Generator** de [Hayk An](https://hayk.design/), considerando-se os seguintes valores de referência:

- **Tons claros**: _Luminosidade_ em `+55%`, _Ângulo de Matiz_ em `-24°` e _Desvio de Saturação_ em `+100%`.
- **Tons escuros**: _Luminosidade_ em `-38%`, _Ângulo de Matiz_ em `-2°` e _Desvio de Saturação_ em `-33%`.

Uma vez que esta cor de marca vermelha é muito intensa, marcante e cheia de significados intrínsecos nas interfaces gráficas (em geral, vermelhos denotam mensagens de erro ou problemas de preenchimento em formulários), não seria prudente utilizar a paleta de cor de marca para elementos diversos da interface, ficando esta restrita a:

- Evidentemente, o _logo_ do CPS, o qual nunca deve ter suas cores modificadas;
- O _logo_ dos sistemas internos que queiram seguir a mesma cor de marca;
- As âncoras para outras páginas (_hyperlinks_);
- Os elementos específicos e não persistentes (como o ícone de voltar ao topo da página deste _design system_).

Por fim, destaca-se que a paleta de cor de marca não sofre interferência dos [Modos de Cor](#modos-de-cor), isto é, as cores não são modificadas entre os dois modos. Porém, com exceção à cor base, as outras tonalidades podem sofrer ajuste de opacidade para se misturem melhor às camadas base dos modos de cor distintos.

## Paleta de Cor de Ênfase

Uma técnica comum de obtenção de cor de ênfase, quando a cor de marca não é pertinente para ser utilizada de forma persistente na interface, é buscar a tonalidade totalmente inversa à cor de marca. Conforme o [Guia de Identidade para Sites](https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2021/01/guia-digital-sites-cps-2021.pdf) destaca, a cor inversa ao vermelho da marca do CPS é um tom turquesa. Na verdade, a cor inversa imediata é um tom de turquesa muito claro e brilhante e, portante, este _design system_ optou por seguir o ajuste de intensidade previamente realizado pela equipe da Assessoria de Comunicação no guia supracitado, adotando o tom turquesa mais escuro (`#005C6E`) como a cor base da paleta de cor de ênfase.

![Paleta de Cor de Ênfase](~@source/assets/images/colors-palette-accent.png)

Em busca da versatilidade necessária para utilização da cor de ênfase em cenários distintos, tanto no modo claro quanto no modo escuro, mais uma vez fez-se necessário construir uma paleta de cores derivadas com três tons mais claros e três tons mais escuros, utilizando novamente a ferramenta **Color Scale Generator** com um conjunto de [ajustes específicos](https://hihayk.github.io/scale/#3/3/55/75/-4/3/100/-40/005C6E/0/92/110/white), considerando-se os seguintes valores de referência:

- **Tons claros**: _Luminosidade_ em `+75%`, _Ângulo de Matiz_ em `3°` e _Desvio de Saturação_ em `+100%`.
- **Tons escuros**: _Luminosidade_ em `-55%`, _Ângulo de Matiz_ em `-4°` e _Desvio de Saturação_ em `-40%`.

Uma vez que tons azulados, como esta cor turquesa de ênfase apresentada, são mais suaves aos olhos e possuem menos conflitos com significados intrínsecos na interface gráfica, tal paleta de cor de ênfase é o conjunto de cores ideal para uso recorrente nos elementos da interface que precisam ser destacados dos tons de cinzas neutros (como botões de ação e efeitos visuais em geral)

Por fim, destaca-se que a paleta de cor de ênfase não sofre interferência dos [Modos de Cor](#modos-de-cor), isto é, as cores não são modificadas entre os dois modos. Porém, com exceção à cor base, as outras tonalidades podem sofrer ajuste de opacidade para se misturem melhor às camadas base dos modos de cor distintos.

## Cores de Estado

Complementarmente às três [Paletas de Cores](#paletas-de-cores) principais, há um pequeno grupo de cores que denotam diferentes estados das informações, sendo tipicamente utilizadas em caixas de notificação e rótulos informativos.

![Paleta de Cores de Estado](~@source/assets/images/colors-states.png)

Destaca-se que, assim como a paleta de cinzas neutros, as cores de estado também sofrem influencia do modo de cor atual, ou seja, possui variações especificamente pensadas tanto para claro quanto para escuro.

::: warning Atenção
Dadas as eventuais limitações que indivíduos podem ter quanto à percepção de cores, em especial vermelho, verde e azul (protanomalia, deuteranomalia, tritanomalia, protanopia, deuteranopia, tritanopia e acromatopsia), a utilização de [Ícones](./icones.md) é fortemente recomenda em conjunto com tais cores de estado das informações.
:::
