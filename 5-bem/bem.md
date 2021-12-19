# BEM

O BEM é uma sigla para Bloco, Elemento e Modificador, trata-se de uma convenção de escrita CSS.

## Bloco

O Bloco é uma entidade independente que possui o seu próprio significado (semântico), pensando no **SMACSS**, podemos associar Blocos com os Módulos. Exemplo:

```css
.search {}
```

## Elemento

No BEM, um elemento está dentro de um bloco, ou seja o elemento é descendente e ajuda constituir esse bloco. Por conveção utilizamos 2 underlines para nomear elementos, como no exemplo abaixo, um campo que pertence à um bloco de search:

```css
.search__field {}
```

## Modificador

É um estado ou versão diferente de um bloco ou um elemento. No exemplo abaixo podemos colocar um modificar no elemento, a convenção de nomes para modificadores é o uso de 2 hífens:

```css
.search__field--error {}
```

> Podemos continuar nomeando elementos com nome composto separados por um único hífen, exemplo: **.c-hero__meta-info-title**.