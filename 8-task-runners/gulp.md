# Gulp

Para configurar o Gulp precisamos criar um arquivo chamado gulpfile.js.

> No gulpfile, o método ```gulp.src()``` do módulo do Gulp significa que algum arquivo será utilizado, o ```gulp.pipe()``` representa um encadeamento de funções que serão realizadas em determinada tarefa.,  e o ```gulp.dest()``` representa o caminho no qual a task irá realizar o output de arquivos já trabalhados.

> O nome 'default' é um nome reservado do Gulp que roda uma tarefa "padrão" ao executar o comando ```gulp```no terminal.

## Minificação CSS

Um dos plugins mais usados para minificar CSS é o gupl-clean-css:

```bash
npm install gulp-clean-css --save-dev
```

## gulp-sass

```bash
npm install sass gulp-sass --save-dev
```

## Referências

- [gulp-clean-css (plugin para minificar CSS)](https://www.npmjs.com/package/gulp-clean-css)