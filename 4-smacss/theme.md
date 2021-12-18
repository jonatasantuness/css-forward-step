# Theme (Tema)

O significado de tema em **SMACSS** é o mesmo que em qualquer outro lugar, podemos definir como um conjunto de cores, imagens, tipografias e coisas que podem alterar o estilo que qualquer outra categoria do **SMACSS**. Como convenção as regras de tema possuem o prefixo ```theme-{}```.

Vamos pegar como exemplo a estilização de botões feitos na categoria **State** no arquivo **state.css**:

```css
.btn[data-state="default"] {
  color: #333;
}

.btn[data-state="pressed"] {
  color: #000;
}

.btn[data-state="disabled"] {
  opacity: .5;
  pointer-events: none;
}
```

Se no periodo de natal quisermos alterar o tema desses elementos, podemos criar um novo arquivo sobreescrevendo as regras anteriores:

```css
.theme-christmas .btn[data-state="pressed"] {
  color: #F00;
}
```

> É comum colocarmos a classe de tema que estará ativo, no body da página HTML.