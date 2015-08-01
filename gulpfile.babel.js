'use strict';
import conf from './esnext';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-istanbul';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';
import mocha from 'gulp-mocha';

const configFiles = './gulpfile.babel.js'
  , srcFiles = 'index.js'
  , testFiles = 'test/*.js';

gulp.task('lint', () => {
  return gulp.src([configFiles, srcFiles, testFiles])
    .pipe(eslint({
      baseConfig: {
        ecmaFeatures: conf.ecmaFeatures
      },
      envs: conf.env,
      rules: conf.rules,
      useEslintrc: false
    }))
    .pipe(eslint.formatEach('./node_modules/eslint-path-formatter'))
    .pipe(eslint.failOnError())
    .pipe(jscs({
      esnext: true
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('build', ['lint']);

gulp.task('test', ['build'], (cb) => {
  gulp.src(['index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src([testFiles])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
