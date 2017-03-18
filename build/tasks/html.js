import gulp from 'gulp';
import PATH from 'path';
import pkg from '../../package.json';

const ROOT = '../../';
const HTML_SRC_FILES = [
	PATH.resolve(__dirname, ROOT, pkg.folders.html.entrypoint),
];
const HTML_DEVELOPMENT_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist');
const HTML_PRODUCTION_BUILD_FOLDER = HTML_DEVELOPMENT_BUILD_FOLDER;

gulp.task('build:html', () => {
	return gulp.src(HTML_SRC_FILES)
		.pipe(gulp.dest(HTML_PRODUCTION_BUILD_FOLDER));
});

gulp.task('watch:html', ['build:html'], () => {
	gulp.watch(HTML_SRC_FILES, ['build:html']);
});
