# Module (Módulos)

A categoria **Module** (Módulos) normalmente é a mais utilizada, isso porque nesta categoria estão os componentes mais específicos do projeto.

Os módulos podem estar contidos dentro de um **Layout**, exemplos disso são barras de navegação ou busca em um Header, widgets em uma Sidebar, etc.

Um módulo deve ser **independente**, ou seja, não pode depender de outros módulos para poder funcionar e deve ser **intercambiável**, ou seja, deve ser possível trocar um módulo de lugar ou página sem necessidades de ajustes.

É importante evitar o uso de seletores de elementos nos módulos, isso porque se for necessário alterar algum elemento futuramente, a regra poderá perder o efeito, então o ideal é utilizar classes:

```html
<div class="module-card">
  <h2 class="module-card-title">Teste de Módulo</h2>
  <span class="module-card-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellat accusamus facere dolorem quas ea. Laborum, amet dicta numquam eligendi hic recusandae fugiat voluptas saepe aliquam. Asperiores consequuntur doloribus officia?</span>
</div>
```

```css
.module-card {
  background-color: #eee;
}

.module-card .module-card-title {
  color: #222;
}

.module-card .module-card-summary {
  display: block;
}
```

> Não utilize ID's para estilizar módulos, isso é considerado má prática até pelo fato dos módulos serem elementos que podem reutilizados, e ID's devem ser únicos.