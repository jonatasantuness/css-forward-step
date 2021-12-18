# Layout

Dentro da metodologia SMACSS, o **Layout** pode ser considerado como blocos visuais maiores do site, como por exemplo Header, Footer, Sidebar, etc.

```css
#article {
  float: left;
  width: 80%;
}

#sidebar {
  float: right;
  width: 20%;
}
```

Caso seja necessário especificar uma nova regra dentro de um layout, podemos acrescentar classes com nomes padrões que remetem à um seletor da categoria **Layout**, como por exemplo a utilização do prefixo ```l-{nome}```:

```css
.l-fixed #article {
  width: 600px;
}

.l-fixed #sidebar {
  width: 200px;
}
```