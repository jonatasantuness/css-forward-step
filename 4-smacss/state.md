# State (Estado)

No **SMACSS** o estado refere-se ao comportamento atual de um elemento, é como se fosse um modificador, os estados incrementam ou sobreescrevem outros estilos.

Por convenção utilizamos um prefixo ```is-{nome}``` para nomear uma regra de estado:


```html
<div id="header" class="is-collapsed">
  <div class="msg is-error">Ocorreu um erro!</div>

  <label for="searchbox" class="is-hidden">Busca</label>
  <input type="search" id="searchbox">
</div>
```

É comum que estilos de estado estejam associados com **JavaScript** e sejam inseridos dinamicamente, pois como vimos no exemplo anterior, as regras funcionam como modificadores de estado, indicando que algo está oculto, ou é um erro, ou está colapsado, etc.

Pode ser também que ao invés de usar um classe com o prefixo, seja utilizado o próprio atributo ```data-*``` do HTML para definir um estado:

```html
<div id="header" data-state="collapsed">
  ...
</div>
```

Outro exemplo de como estilizar botões baseado no seu estado:

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