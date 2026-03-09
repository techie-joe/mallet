// ==============================================================
// This is file tells gulp how to build the project.
// Find more information about Gulp on http://gulpjs.com
// ==============================================================
// To list available tasks, run: > gulp --tasks
// ==============================================================
const
  site = './',
  assets = './assets/',
  scss_dev = './_scss_dev/',
  sassLoadPaths = ['_scss/_dove', 'node_modules'],
  build_source = ((o={}) => {
    o['scss']     = [`_scss/**/*.scss`,'!**/*.x/**'];
    o['scss_dev'] = [`_scss_dev/**/*.scss`,'!**/*.x/**'];
    ['html', 'txt', 'md'].forEach(type => {
      ['_source/**/'].forEach(folder => {
        o[type] = [`${folder}*.${type}.pug`,'!**/*.x/**'];
      });
    });
    return o;
  })(),
  watch_source = build_source;
if (!site || !assets || !build_source || !watch_source) {
  throw new Error('Error reading gulp list');
}
const
  log = console.log,
  slog = (what, source) => log(`Writing ${what} from: ${source || '(none)'}`),
  redMessage = (message) => '\x1B[31m' + message + '\x1B[0m',
  onError = function (error) {
    const
      { message, msg, code, fileName, line, column } = error,
      logs = [redMessage(`Error: [${message || (code + ' : ' + msg)}]`)];
    if (fileName) logs.push(fileName + ((line && column) ? ` [${line}${column ? '|' + column : ''}]` : ''));
    log(logs.join('\n'));
    this.emit('end');
  },
  isEmpty = (...oo) => oo.every(o => Array.isArray(o) && o.length > 0),
  { src, dest, series, parallel, watch } = require('gulp'),
  pug = require('gulp-pug'), // read pug write html,txt,md
  sass = require('gulp-sass')(require("sass")), // read sass write css
  cleanCSS = require('gulp-clean-css'), // minify css
  rename = require('gulp-rename'), // name file extension
  ext = extname => rename((path) => {
    path.basename = path.basename.substring(0, path.basename.lastIndexOf('.'));
    path.extname = extname;
  }),
  watchOpt = {
    ignoreInitial: false
  },
  watch_ = (fn, src, dest, opt = watchOpt) => function watcher() {
    if (isEmpty(src, dest)) {
      log(`Watching: ${redMessage('[Error]')}\n- [src]: ${src || '(undefined)'}\n- [dest]: ${dest || '(undefined)'}`);
    }
    else {
      log(`Watching: ${src}`);
      watch(src, opt, fn(src, dest));
    }
  },
  html = (source, destination) => async function html_writer() {
    slog('HTML', source);
    return src(source)
      .on('error', onError)
      .pipe(pug({ basedir:__dirname, pretty:true }))
      .pipe(ext('.html'))
      .pipe(dest(destination));
  },
  txt = (source, destination) => async function txt_writer() {
    slog('TXT', source);
    return src(source)
      .on('error', onError)
      .pipe(pug({ basedir:__dirname }))
      .pipe(ext('.txt'))
      .pipe(dest(destination));
  },
  md = (source, destination) => async function md_writer() {
    slog('MD', source);
    return src(source)
      .on('error', onError)
      .pipe(pug({ basedir:__dirname }))
      .pipe(ext('.md'))
      .pipe(dest(destination));
  },
  sassOpt = {
    loadPaths: sassLoadPaths,
    outputStyle: 'compressed' // compressed | expanded
  },
  scss = (source, destination, opt = sassOpt) => async function scss_writer() {
    slog('SCSS', source);
    return src(source)
      .on('error', onError)
      .pipe(sass(opt))
      .pipe(cleanCSS())
      .pipe(dest(destination));
  };
const
  builders = parallel(
    html(build_source.html, site),
    txt(build_source.txt, site),
    md(build_source.md, site),
    scss(build_source.scss, assets),
    scss(build_source.scss_dev, scss_dev),
  ),
  watchers = parallel(
    watch_(html, watch_source.html, site),
    watch_(txt, watch_source.txt, site),
    watch_(md, watch_source.md, site),
    watch_(scss, watch_source.scss, assets),
    watch_(scss, watch_source.scss_dev, scss_dev),
  ),
  test = async () => {
    log('Build Source:', build_source);
    log('Watch Source:', watch_source);
  };
Object.assign(exports, {
  test,
  builders,
  default: builders,
  watch: watchers,
});