const gulp = require('gulp');
const watch = require('gulp-watch');

// CSS
const stylus = require('gulp-stylus');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const rupture = require('rupture');

const paths = {
	'style': {
		main: './client/content/index.styl',
		all: './client/content/**/*.styl',
		output: './client/dist/css/'
	}
};

gulp.task('watch', function () {
	return gulp.watch(paths.style.all, ['build']);
});

gulp.task('build', function() {
    return gulp.src(paths.style.main)
		.pipe(stylus({
			'include css': true,
			'use': [rupture()]
		}))
		.pipe(autoprefixer())
		.pipe(cssmin())
        .pipe(gulp.dest(paths.style.output));
});
