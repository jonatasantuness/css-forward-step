# Boas Práticas do BEM

## Não Replique a estrutura HTML

A seguinte estrutura HTML tem diversas classes que tentar expressar elemento em um bloco de card:

```html
<div class="card">
  <div class="card__header">
    <h2 class="card__header__title">Titulo do Card</h2>
  </div>

  <div class="card__body">
    <img src="..." class="card__body__img">

    <p class="card__body__text">Texto de Teste</p>

    <p class="card__body__text">
      <a href="#" class="card__body__text__link"></a>
    </p>
  </div>
</div>
```

Porém essa não é a melhor maneira de se escrever com BEM, ao invés de concatenar vários undelines, podemos simplificar o nome de cada elemento, pois já fica subentendido que pertecem ao bloco card:

```html
<div class="card">
  <div class="card__header">
    <h2 class="card__title">Titulo do Card</h2>
  </div>

  <div class="card__body">
    <img src="..." class="card__img">

    <p class="card__text">Texto de Teste</p>

    <p class="card__text">
      <a href="#" class="card__link"></a>
    </p>
  </div>
</div>
```