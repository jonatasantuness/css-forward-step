## CSSOO - CSS Orientado a Objetos

Assim como em programação, o paradigma de Orientação a Objetos pode ser utilizado no CSS com o objetivo de tornar nosso código reutilizável, escalável e de fácil manutenção.

## 1° Princípio - Separação de Estrutura e Visual

No exemplo abaixo temos uma estrtura HTML com 3 caixas, cada uma com uma cor diferente.

```html
<div class="boxred"></div>
<div class="boxgreen"></div>
<div class="boxblue"></div>
```

```css
.boxred {
  background-color: red;
  height: 100px;
  width: 100px;
  outline: 1px solid white;
}

.boxgreen {
  background-color: green;
  height: 100px;
  width: 100px;
  outline: 1px solid white;
}

.boxblue {
  background-color: blue;
  height: 100px;
  width: 100px;
  outline: 1px solid white;
}
```

Este exemplo pode ser melhor trabalhado, já que as propriedades de cada classe são quase todas iguais, só mudando a cor do background, então podemos separar uma classe ```.box``` responsável pela estilização da estrutura da caixa enquanto as outras classes alteram o seu visual:

```html
<div class="box box-red"></div>
<div class="box box-green"></div>
<div class="box box-blue"></div>
```

```css
.box {
  height: 100px;
  width: 100px;
  outline: 1px solid white;
}

.box-red {
  background-color: red;
}

.box-green {
  background-color: green;
}

.box-blue {
  background-color: blue;
}
```

## 2° Princípio - Independência entre Container e Conteúdo

Este princípio afirma que qualquer objeto pode ser colocado em outro container e continuar com a mesma aparência. No exemplo abaixo temos um exemplo onde um elemento ```<h3>``` deve ser sempre um filho de ```<aside>``` para funcionar:

```html
<aside>
  <h3>Titulo</h3>
</aside>
```

```css
aside h3 {
  color: #777;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}
```

Nessa abordagem, se for necessário por exemplo estilizar um ```<h3>``` dentro de um ```<footer>```, ai seria necessário repetir propriedades em uma nova regra. Então para resolver isso, podemos separar o que é comum para um título e especificar o que não é comum em novas classes baseadas no seu container:

```html
<aside>
  <h3 class="title">Titulo</h3>
</aside>

<footer>
  <h3 class="title">Titulo</h3>
</footer>
```

```css
.title {
  color: #777;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1;
}

aside .title {
  font-size: 2em;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

footer .title {
  font-size: 1.5em;
  text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
```