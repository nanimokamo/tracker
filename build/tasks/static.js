import gulp from 'gulp';
import PATH from 'path';
import pkg from '../../package.json';

const ROOT = '../../';
const STATIC_SRC_FILES = [
	PATH.resolve(__dirname, ROOT, pkg.folders.manifest.entrypoint),
];
const STATIC_DEVELOPMENT_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/public');
const STATIC_PRODUCTION_BUILD_FOLDER = STATIC_DEVELOPMENT_BUILD_FOLDER;

gulp.task('build:static', () => {
	return gulp.src(STATIC_SRC_FILES)
		.pipe(gulp.dest(STATIC_PRODUCTION_BUILD_FOLDER));
});

gulp.task('watch:static', ['build:static'], () => {
	gulp.watch(STATIC_SRC_FILES, ['build:static']);
});
