# Evitando seletores superqualificados

O seletor possui o nível de trabalho que o navegador precisa ter para interpretar uma regra CSS, logo, quanto mais **superqualificado** é uma regra CSS, mais trabalho o navegador terá.

Abaixo temos um exemplo de seletor superqualificado:

```css
html body .wrapper #content a {}
```

Como não deve haver 2 ID's iguais dentro da página,este seletor poderia ser reduzido dessa forma:

```css
#content a {}
```

Outro exemplo de seletor superqualificado:

```css
ul#nav li a {}
```

Pode ser resumido dessa forma:

```css
#nav a {}
```