'use strict';
import babel from 'gulp-babel';
import conf from './src/esnext';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';

const configFiles = './gulpfile.babel.js'
  , srcFiles = 'src/*.js'
  , testFiles = 'test/*.js';

gulp.task('lint', () =>
  gulp.src([configFiles, srcFiles, testFiles])
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
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
);

gulp.task('build', ['lint'], () =>
  gulp.src([srcFiles])
    .pipe(babel())
    .pipe(gulp.dest('./'))
);
