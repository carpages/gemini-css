const gulp = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const sass = require( 'gulp-sass' );
const plumber = require( 'gulp-plumber' );
const gutil = require( 'gulp-util' );
const compass = require( 'compass-importer' );
const autoprefixer = require( 'autoprefixer' );
const cssnano = require( 'cssnano' );

const processors = [
  autoprefixer({ browsers: [ 'last 2 versions' ]}),
  cssnano()
];

gulp.task( 'sass', () => {
  return gulp.src( './src/test.scss' )
    .pipe( plumber({
      errorHandler: function( error ) {
        gutil.log( error );
        this.emit( 'end' );
      }
    }))
    .pipe( sass({
      importer: compass
    }))
    .pipe( postcss( processors ))
    .pipe( gulp.dest( './dist' ));
});

gulp.task( 'watch', [ 'sass' ], () => {
  gulp.watch( '../**/*.scss', [ 'sass' ]);
});

gulp.task( 'default', [ 'sass' ]);
