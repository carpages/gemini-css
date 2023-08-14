const { task, src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function compileSass() {
  return src('./test.scss')
    .pipe(
      sass
        .sync({
          includePaths: ['node_modules', 'node_modules/compass-mixins/lib'],
        })
        .on('error', sass.logError),
    )
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('.'));
}

function watchSass() {
  watch('../**/*.scss', compileSass);
  console.log('watching sass files...');
}

task('sass', compileSass);
task('watch', series(compileSass, watchSass));
task('default', compileSass);
