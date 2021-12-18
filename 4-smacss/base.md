# Base

As regras da categoria **Base** no SMACSS são aquelas aplicadas à elementos usados em seletores de elemento, seletor descendente, seletor filho, pseudoclasses ou classes mais genéricas que podem ser usadas em qualquer ponto do projeto.

Nesta categoria colocamos regras gerais que definem a estrutura básica do projeto, como reset de espaçamentos no body, estilização de links, resets de CSS, etc. Exemplo:

```css
body {
  margin: 0;
  padding: 0;
}

a {
  color: blue;
}

a:hover {
  color: deepskyblue;
}
```