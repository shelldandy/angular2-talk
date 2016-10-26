title: Gulp Como Herramienta para Front-End Devs
author:
  name: Miguel Palau & Hugo Aguirre
output: index.html
style: style.css

--
# Angular 2 y Ionic 33333

--
### ¿Qué es Gulp?
- Task runner que vive en Node.js
- Te hace la vida más fácil
- Múltiples cosas en paralelo o en órden
- Ej: Compilar Sass a CSS, Concatenar y minimizar JS.
- Deploy a Gh-pages, FTP, Heroku, etc.

--
# ![Node.js el logo oficial](img/nodejs.svg)
http://nodejs.org/
http://brew.sh/

--
# ![npm el logo oficial](img/npm.svg)
https://www.npmjs.com/
![Atom](img/atom.svg)
![MEAN](img/meanio.svg)
![Ghost](img/ghost.svg)

--
### Instalemos Gulp!

```
$ npm install -g gulp

$ npm install --save-dev gulp

$ touch gulpfile.js

```
Let's go!
![Let's Go!](img/letsgo.gif)

--
### 'Hello world'
- En tu gulpfile.js

```
'use strict';
var gulp = require('gulp');

gulp.task('hello', function() {
  console.log('Hola DevNights! 🍺');
  });
```

- En la terminal
- `$ gulp hello`

--
# Enter plugins!
http://gulpjs.com/plugins/

--
### Compilar Sass a CSS

```
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
```

--
### Vigilemos cambios!
```
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});
```

--
### Ejemplo Real de Sass
```
'use strict'
gulp        = require 'gulp'
sass        = require 'gulp-sass'
prefix      = require 'gulp-autoprefixer'
sourcemaps  = require 'gulp-sourcemaps'
browserSync = require 'browser-sync'
config      = require './config'


gulp.task 'sass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe sourcemaps.init()
  .pipe sass(
    includePaths : config.sassIncludes
    outputStyle : 'nested'
    )
  .pipe prefix(
    browsers : ['last 2 versions']
    )
  .pipe sourcemaps.write './'
  .pipe gulp.dest './dist/css/'
  .pipe browserSync.reload(stream : true)
```

--
# Demo On Point
https://github.com/mike3run/ground-zero

--
### Referencias
http://www.sitepoint.com/introduction-gulp-js/
http://blog.teamtreehouse.com/install-node-js-npm-mac

--
# Ver Online
http://mike3run.github.io/gulp-talk/
