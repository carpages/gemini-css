const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const sass = require( 'gulp-sass' );
const compass = require( 'compass-importer' );
const autoprefixer = require( 'autoprefixer' );
const cssnano = require( 'cssnano' );

const processors = [
  autoprefixer({ browsers: [ 'last 2 versions' ]}),
  cssnano()
];

gulp.task( 'sass:default', () => {
  return gulp.src( './src/test.scss' )
    .pipe( sass({
      importer: compass
    }))
    .pipe( postcss( processors ))
    .pipe( gulp.dest( './dist' ));
});

gulp.task( 'default', [ 'sass:default' ]);
