# Como seletores CSS são interpretados?

Saber como os seletores CSS são interpretados é essencial para ter um código mais performático.

Existe uma eficiência inerente de seletores CSS, abaixo segue relação do mais eficiente para o menos eficiente.

### ID

```css
#header {}
```

### Classe

```css
.promo {}
```

### Tipo

```css
div {}
```

### Irmão Adjacente

```css
h2 + p {}
```

### Filho

```css
li > ul {}
```

### Descendente

```css
ul a {}
```

### Universal

```css
* {}
```

### Atributo

```css
[type="text"] {}
```

### Pseudo-classe ou Pseudo-elemento

```css
a:hover {}
```

Os seletores CSS são interpretados pelo navegador da DIREITA para ESQUERDA, no exemplo abaixo o navegador vai procurar primeiro todas as instâncias da classe ```.intro``` pra depois começar a subir no DOM e procurar o elemento ```#content```:

```css
#content .intro {}
```

Vamos pegar um exemplo de uma lista para entender o quão performático pode ser um seletor, para capturar todos os links de uma lista, normalmente poderiamos faze da seguinte forma:

```css
#social a {}
```

Só que dessa forma, o navegador começaria rastreando TODOS os links, inclusive links que não tem relação com o nosso objetivo, pra somente depois checar o ID e estilizar somente os links necessários.

Uma boa solução para isso é aplicar uma classe aos elementos que queremos estilizar:

```css
#social .social-link {}
```

E dependendo do caso e da estrutura do projeto, podemos deixar ainda mais performático, simplesmente eliminando a referência ao ID:

```css
.social-link {}
```