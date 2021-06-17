const { src, dest, watch, task } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const Fiber = require("fibers");

sass.compiler = require("sass");

function errorHandler(error) {
  console.log("Stack:", error.stack);
}

function buildSass() {
  return src("./src/test.scss")
    .pipe(plumber({ errorHandler }))
    .pipe(sass({ fiber: Fiber }))
    .pipe(dest("./public/build"));
}

task("build", buildSass);
task("watch", () => {
  watch("../**/*.scss", buildSass);
});
