# Namespaces

Os namespaces são convenções de códigos e referem-se ao nomes de classes CSS para que a leitura código fique mais organizada e fácil de entender.

## Namespaces de Utilitários (u-)

Esses namespaces tem o prefixo de ```u-{nome}```, e geralmente são utilizados para regras de CSS únicas, servindo à propósitos muito específicos com apenas uma estilização, exemplo:

```css
.u-bold { font-weight: bold; }
.u-italic { font-style: italic; }
.u-text-align-center { text-align: center; }
```

## Namespaces de Componente (c-)

Esses namespaces tem o prefixo de ```c-{nome}```, os elementos que recebem o namespace de componente, normalmente estão no diretório de **Module** dentro do **SMACSS**. É opcional o nome do arquivo em si começar com o prefixo, mas é importante que a classe dentro dele esteja seguindo o padrão.

```scss
.c-article {
  display: block;

  &__title {
    font-size: 24px;
  }
}
```

## Namespaces de Estado (is-) e (has-)

Esses namespaces tem os prefixos de ```is-{nome}``` ou ```has-{nome}```, que significam respectivamente alterações de estado que expressam "**é**" ou "**possui**".

```css
.is-active {
  display: block;
}
```

## Namespaces de Temas (t-)

Esses namespaces tem o prefixo de ```t-{nome}```, fazem referência ao uso de temas:

```scss
.c-btn {
  display: block;
  background-color: #e4e4e4;
  padding: 1em;

  .t-dark & {
    background-color: #333;
    color: #fff;
  }
}
```

Neste exemplo aplicamos o namespace de tema diretamente num arquivo de componente, mas os sites normalmente usam o conceito de **Stateful Themes**. que são temas que podem ser habilitados ou desabilitados facilmente inserindo a classe diretamente no elemento ```<body>```.

## Namespaces de Escopo (s-)

Esses namespaces tem o prefixo de ```s-{nome}```, podem ser úteis por exemplo em códigos gerados automáticamente em Wordpress, que vem com classes padrões, ai para estilizá-los podemos envolver o código numa classe com prefixo ```s-{nome}```.

```html
<div class="s-main-menu">
  <nav class="menu-main-menu-container">
    <ul id="menu-main-menu" class="main-menu">
      <li class="menu-item">...</li>
      <li class="menu-item">...</li>
      <li class="menu-item">...</li>
    </ul>
  </nav>
</div>
```

## Namespaces de JavaScript (js-)

Esses namespaces tem o prefixo de ```js-{nome}```, são usadas em classes onde o elemento será alvo de um código em JavaScript e não necessariamente será usado para estilização.

```html
<a href="#"class="c-buy-button js-buy-button">Clique</a>
```

## Referências

- ["More Transparent UI Code with Namespaces". Artigo com maiores explicações sobre Namespaces CSS e apresentação de outros namespaces.](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
- ["Writing modular CSS (Part 2) — Namespaces". Outro excelente artigo para aprimorar os conhecimentos sobre o tema.](https://zellwk.com/blog/css-architecture-2/)