# Chip

O termo _chip_ poderia ser traduzido como "lasca", um nome um pouco estranho, mas que remente ao significado intrínseco deste componente: um pedaço de informação, eventualmente de outro local da aplicação, mas que foi "lascado" para ser reapresentado naquele local.

Significado e semântica à parte, a utilização prática deste componente é apresentar peças de informação que precisam se destacar no contexto que estão inseridas, por exemplo, um filtro aplicado em uma interface de visualização de dados, ou uma categoria ou rótulo de identificação atribuído a um registro.

<LinkToCpsElements name="chip" />

## Variações

Este componente pode ser utilizado conforme as variações descritas a seguir.

### Padrão

Em sua variação mais básica, se utiliza apenas de uma leve borda e fundo sutilmente diferenciado com mínima opacidade para adornar o pedaço de informação apresentado.

A aparência desta variação em modo claro:

![Chip - Modo Claro - Padrão](~@source/assets/images/component-chip-light-default.png)

A aparência desta variação em modo escuro:

![Chip - Modo Escuro - Padrão](~@source/assets/images/component-chip-dark-default.png)

### Descartável

Nesta variação, um pequeno botão com ícone de "fechar" é acrescido após o texto, com o intuito de descartar o _chip_ retirando aquele pedaço de informação da interface. Este comportamento pode ser muito interessante, por exemplo, se este componente estiver sendo utilizado para apresentar vários filtros aplicados em uma grade de registros e, ao descartar um _chip_, o filtro em questão é removido e os registros exibidos atualizados.

A aparência desta variação em modo claro:

![Chip - Modo Claro - Descartável](~@source/assets/images/component-chip-light-closeable.png)

A aparência desta variação em modo escuro:

![Chip - Modo Escuro - Descartável](~@source/assets/images/component-chip-dark-closeable.png)

## Boas práticas

Para que este componente seja utilizado da melhor maneira possível, observe as práticas a seguir.

### Exibição e comportamento

Este componente pode acompanhar o tamanho de fonte do conteúdo onde está inserido, sendo as medidas aqui apresentadas na imagens de exemplo meras referências.

Uma prática interessante é deixar o _chip_ sempre uma medida de texto a menos do que o conteúdo à sua volta. Por exemplo, se o _chip_ está inserido em uma área que segue o tamanho base da aplicação (`text-base`), seu próprio texto pode ser estilizado um nível abaixo na escala (`text-label`), conforme definido em documentado em [Tipografia](../guia-visual/tipografia.md#escala-de-tamanhos-e-estilos).

Recomenda-se nunca utilizar fontes maiores do que o tamanho base da aplicação, ou seja, não ultrapassar o `text-base`.

### Cores

É válido optar por outras leves tonalidades de fundo, preferencialmente seguindo a paleta de [Cores de Estado](../guia-visual/cores.html#cores-de-estado), para representar lascas de informação com algum significado especial atrelado, por exemplo, um fundo sutilmente avermelhado para designar uma fatia de informação negativa.

### Acessibilidade

Sendo conteúdos explicitamente textuais dentro do componente, não é necessário nenhum tratamento de acessibilidade especial para este componente.
