# Pré-processadores CSS

Os pré-processadores CSS trazem mais poder e possibilidades na hora de escrever CSS. Para utilizá-los são necessários compiladores para gerar o CSS puro.

Dentre os muitos pré-processadores CSS existentes, os mais usados são **Sass**, **Less** e **Stylus**. Neste curso usaremos o Sass, que está disponível para todos os sistemas operacionais (Windows, Linux e Mac) e é fácil de instalar e começar a usar.

O Sass disponibiliza 2 sintaxes diferentes: sass e scss (até a extensão dos arquivos muda conforme a sintaxe).

Para rodar o Sass, entre na pasta **/6-pre-processadores** e rode o comando:

```bash
sass scss/index.scss build/index.css --watch --sourcemap=none
```

## Referências

- [Sass: Syntactically Awesome Style Sheets. Site oficial do Sass.](http://sass-lang.com/)
- [SassMeister. Site mostrado em aula que permite testes com Sass direto pelo navegador.](https://www.sassmeister.com/)
- ["--watch Yo' Sass". Instruções de como automatizar a compilação de Sass para CSS.](http://sassbreak.com/watch-your-sass/)
- [Compass. Framework mundialmente usado que estende as funcionalidades do Sass.](http://compass-style.org/)
- [Awesome Sass. Coletânea de recursos diversos para Sass!](https://github.com/HugoGiraudel/awesome-sass)