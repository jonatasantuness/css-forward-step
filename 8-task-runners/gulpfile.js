var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var sass = require('gulp-sass')(require('sass'))


// gulp-clean-css: Minificar CSS
gulp.task('minify-css', function () {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
})

// gulp-sass: Compilar o SCSS para CSS
gulp.task('sass', function () {
  return gulp.src('style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

// Task com pipes combinados para automatizar o CSS
gulp.task('build-style', function () {
  return gulp.src('style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build'))
})

// Tarefa para atualização de arquivos
gulp.task('watch', function () {
  return gulp.watch('style/*.scss', ['build-style'])
})

// Tarefa Padrão
gulp.task('default', gulp.parallel('build-style'))