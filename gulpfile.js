// const gulp = require("gulp");
// const plumber = require("gulp-plumber");
// const sourcemap = require("gulp-sourcemaps");
// const less = require("gulp-less");
// const postcss = require("gulp-postcss");
// const autoprefixer = require("autoprefixer");
// const sync = require("browser-sync").create(); //поднимаем сервер
// const csso = require("gulp-csso"); //минификация css
// const rename = require("gulp-rename");
// const imagemin = require("gulp-imagemin");
// const webp = require("gulp-webp");
// const svgstore = require("gulp-svgstore");
// const del = require("del");
// const htmlmin = require("gulp-htmlmin");

// // Styles

// const styles = () => {
//   return gulp
//     .src("source/less/style.less")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(less())
//     .pipe(postcss([autoprefixer()]))
//     .pipe(csso())
//     .pipe(rename("styles.min.css"))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("build/css"))
//     .pipe(sync.stream());
// };

// exports.styles = styles;

// // Server

// const server = (done) => {
//   sync.init({
//     server: {
//       baseDir: "source",
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// };

// exports.server = server;

// // Watcher наблюдатели

// const watcher = () => {
//   gulp.watch("source/less/**/*.less", gulp.series("styles"));
//   gulp.watch("source/*.html").on("change", sync.reload);
// };

// exports.default = gulp.series(styles, server, watcher);

// // Опимизируем изображения

// const images = () => {
//   return gulp.src("build/img/**/*.{jpg,png,svg}").pipe(
//     imagemin([
//       imagemin.optipng({
//         optimizationLevel: 3,
//       }),
//       imagemin.mozjpeg({
//         progressive: true,
//       }),
//       imagemin.svgo(),
//     ])
//   );
// };
// exports.images = images;

// const toWebp = () => {
//   return gulp
//     .src("build/img/**/*.{jpg,png}")
//     .pipe(
//       webp({
//         quality: 90,
//       })
//     )
//     .pipe(gulp.dest("build/img"));
// };
// exports.webp = toWebp;

// // Собираем svg-спрайт

// const sprite = () => {
//   return gulp
//     .src("source/img/**/icon-*.svg")
//     .pipe(svgstore())
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img"));
// };
// exports.sprite = sprite;

// // сборка продакшн версии в папку  build

// const copy = () => {
//   return gulp
//     .src(
//       [
//         "source/fonts/**/*.{woff,woff2}",
//         "source/img/**",
//         "source/js/**",
//         "source/*.ico",
//         "source/*.html",
//       ], {
//         base: "source",
//       }
//     )
//     .pipe(gulp.dest("build"));
// };
// exports.copy = copy;

// // удалить старую версию build

// const clean = () => {
//   return del("build");
// };
// exports.clean = clean;

// const html = () => {
//   return gulp
//     .src("source/**/*.html")
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(gulp.dest("build"))
// };
// exports.html = html;

// // const build = gulp.series(clean, copy, styles, images, toWebp, sprite, html);
// const build = gulp.series(clean, copy, styles, html);

// exports.build = build;
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);
