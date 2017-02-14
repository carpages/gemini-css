const gulp            = require( 'gulp' );
const postcss         = require( 'gulp-postcss' );
const sass            = require( 'gulp-sass' );
const plumber         = require( 'gulp-plumber' );
const gutil           = require( 'gulp-util' );
const parker          = require( 'gulp-parker' );
const autoprefixer    = require( 'autoprefixer' );
const cssnano         = require( 'cssnano' );

const processors = [
  autoprefixer({ browsers: [ 'last 2 versions' ]}),
  cssnano()
];

gulp.task( 'sass', () => {
  return gulp.src( './test.scss' )
    .pipe( plumber({
      errorHandler: function( error ) {
        gutil.log( error );
        this.emit( 'end' );
      }
    }))
    .pipe( sass({
      includePaths: [ 'node_modules/compass-mixins/lib' ]
    }))
    .pipe( postcss( processors ))
    .pipe( gulp.dest('.'));
});

gulp.task( 'watch', [ 'sass' ], () => {
  gulp.watch( '../**/*.scss', [ 'sass' ]);
});

gulp.task( 'default', [ 'sass' ]);
