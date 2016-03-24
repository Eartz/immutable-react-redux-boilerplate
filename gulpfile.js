var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var babelify = require('babelify');


var MODULE_NOM = "module";
var babelPresets = ["es2015", "react"];

var exports = {};
var sourceDir = "./src/js/" + MODULE_NOM + "/";
var distDir = "./site/lib/js/dist";
var files = [ // fichiers a watcher
        sourceDir + "actions.js",
        sourceDir + "reducers.js",
        sourceDir + "exports.js"
    ];

exports['build-' + MODULE_NOM + '-dev'] = function () {
  process.env.NODE_ENV = "production";
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: sourceDir + "exports.js",
    debug: false
  }).transform(babelify, {presets: babelPresets});

  return b.bundle()
    .pipe(source('' + MODULE_NOM + '.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distDir))
        .pipe(notify("" + MODULE_NOM + "-dev OK"));
};
exports['build-' + MODULE_NOM + ''] = function () {
  process.env.NODE_ENV = "production";
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: sourceDir + "exports.js",
    debug: true
  }).transform(babelify, {presets: babelPresets});

  return b.bundle()
    .pipe(source('' + MODULE_NOM + '.min.js'))
    .pipe(buffer())
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
    .pipe(gulp.dest(distDir))
        .pipe(notify("" + MODULE_NOM + " OK"));
};
exports['watch-' + MODULE_NOM + ''] = function() {   
    var watcher = gulp.watch(files, ["build-" + MODULE_NOM + "-dev"]);
};




for(var taskName in exports) {
    if(exports.hasOwnProperty(taskName)) {
        gulp.task(taskName, exports[taskName]);
    }
}


gulp.task('default', function() {
    
});