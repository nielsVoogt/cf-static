'use strict';

var gulp           = require('gulp'),
    notify         = require('gulp-notify'),
    watch          = require('gulp-watch'),
    browserSync    = require('browser-sync').create(),
    sass           = require('gulp-sass'),
    autoprefixer   = require('gulp-autoprefixer'),
    merge          = require('merge-stream');

function onError(err) {
    console.log(err);
    this.emit('end');
}

var folders = [
    './styling',
];

// --------------------------------------------------- SASS/CSS DEST

var sassInput  = './sass/**/*.scss',
    cssInput   = './web/css/*.css',
    devInput   = './web/*.html';

// --------------------------------------------------- COMPILE OPTIONS

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// --------------------------------------------------- AUTOPREFIXER OPTIONS

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%', 'Safari 8', 'Firefox ESR']
};

// --------------------------------------------------- BROWSERSYNC TASK (combines 'sass' with 'browsersync')

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        browser: ["chrome"],
        server: {
            baseDir: 'web/'
        },
    });

    gulp.watch(sassInput, ['sass']);
    gulp.watch(sassInput).on('change', browserSync.reload);
    gulp.watch(devInput).on('change', browserSync.reload);
});

gulp.task('watch', ['sass'], function() {
    gulp.watch(sassInput, ['sass']);
});

// --------------------------------------------------- SASS TASK

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest('./web/css/'));
  });
  
