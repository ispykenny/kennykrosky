const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack');
const browsersync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const targetBrowsers = ['last 5 versions'];

//project paths
const PATHS = {
  scss: '_scss/**/*.scss',
  scssincludes: [],
  jsentry: '_js/app.js',
  js: 'js/**/*.js',
  sitefiles: ['**/*.php'],
  dest: {
    css: 'dist/assets/css',
    js: 'dist/assets/js'
  }
};


const WEBPACK_CONFIG = {
  context: __dirname+'/_js',
  entry: './_index.js',
  output: {
    path: __dirname+'/dist/assets/js',
    filename: 'app.bundle.js'
  },
  bail: false,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|assets|_scss|dist|src)/,
      loader: 'babel-loader',
      query: {
        presets: [['env', {"targets": {"browsers": targetBrowsers }}]]
      }
    }]
  }
};

//webpack js bundle
gulp.task('webpack', () => {
  var webpackCompiler = webpack(WEBPACK_CONFIG);
  webpackCompiler.watch({}, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({chunks: false}));
    browsersync.reload();
  });
});



gulp.task('server', () => {
  browsersync.init({
    proxy: 'http://kennykrosky:8888/'
  }, (err, bs) => {
    //qrcode.generate('http://'+bs.utils.devIp[0]+':3000');
  });
});


gulp.task('scss', () => {
  return gulp.src(PATHS.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: targetBrowsers
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(PATHS.dest.css))
    .pipe(browsersync.stream())
});

gulp.task('minify-css', () => {
  return gulp.src('dist/assets/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/assets/js/app.bundle.js'),
        uglify(),
        gulp.dest('dist/assets/js/')
    ],
    cb
  );
});


let taskDefaults = ['scss', 'webpack', 'server'];
let buildSite = ['minify-css', 'compress'];

gulp.task('build', buildSite);

gulp.task('default', taskDefaults, () => {
  gulp.watch(PATHS.scss, ['scss']);
   gulp.watch(PATHS.sitefiles).on('change', browsersync.reload);
});