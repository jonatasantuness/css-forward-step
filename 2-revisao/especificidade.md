# Especificidade CSS

A especificidade no CSS funciona como sistema de pesos, que determina qual regra CSS será aplicada à um determinado elemento. 

Existe uma matemática que determina qual regra terá procedência quando ocorre conflito entre regras, basicamente temos 4 parâmetros que precisamos observar para determinar esse sistema de pesos.

Para entender melhor vamos agrupar os parâmetros em letras (A, B, C, D). Então seguindo do maior peso **A**, para o menor peso **D**, temos:

- **A** - Estilos inline
- **B** - ID's
- **C** - Classes, pseudoclasses e atributos
- **D** - Elementos e pseudoelementos

Qual seria o peso para a estilização abaixo?

```css
h1 {
  color: red;
}
```

Para calcular o peso é necessário checar os parâmetros um a um, então, devemos fazer as seguintes perguntas:

- Possui algum estilo inline? Não
- Possui algum ID? Não
- Possui Classes, pseudoclasses ou atributos? Não
- É um elemento ou pseudoelemento? Sim!

Logo definimos seu peso assim:

**0, 0, 0, 1**

ou simplesmente:

**0001**

Agora se colocarmos um ID no seletor, teremos um novo peso:

```css
#content h1 {
  color: red;
}
```

- Possui algum estilo inline? Não
- Possui algum ID? Sim!
- Possui Classes, pseudoclasses ou atributos? Não
- É um elemento ou pseudoelemento? Sim!

Repare que dessa vez temos 1 ID, então devemos colocar a quantidade de ID's encontrados no cáculo do peso:

**0, 1, 0, 1**

ou

**0101**

> Podemos ler o peso calculado como o número **101**, e dessa forma como **101** é maior que **1**, essa regra tem mais procedência sobre a regra anterior.

Agora um exemplo um pouco mais realista e complicado:

```css
#sidebar ul li a.myClass:hover {
  color: red;
}
```

- Possui algum estilo inline? Não
- Possui algum ID? Sim, tem 1!
- Possui Classes, pseudoclasses ou atributos? Sim, tem 2!
- É um elemento ou pseudoelemento? Sim, tem 3!

**0, 1, 2, 3**

ou

**0123**

## Empate

Quando ocorre um empate de peso em conflito de regras, ai a cascata CSS entra em ação.


## !impotant

Essa propriedade adiciona prioridade total na especificidade do elemento.


## Referências

- [Calculadora de especificidade](https://specificity.keegan.st/)