import gulp from 'gulp';
import PATH from 'path';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import pkg from '../../package.json';

const ROOT = '../../';
const SCSS_SRC_FILE = PATH.resolve(__dirname, ROOT, pkg.folders.css.entrypoint);
const SCSS_SRC_FILES = [
	SCSS_SRC_FILE,
	PATH.resolve(__dirname, ROOT, 'app/components/') + '/**/*.scss',
	PATH.resolve(__dirname, ROOT, 'app/assets/styles/') + '/**/*.scss',
];
const SCSS_DEVELOPMENT_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/public/css');
const SCSS_PRODUCTION_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/public/css');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

gulp.task('build:scss', () => {
	return gulp.src(SCSS_SRC_FILE)
		.pipe(IS_PRODUCTION ? util.noop() : sourcemaps.init())
		.pipe(sass(({ outputStyle: IS_PRODUCTION ? 'compressed' : 'expanded' })).on('error', sass.logError))
		.pipe(IS_PRODUCTION ? autoprefixer('last 2 Chrome versions') : util.noop())
		.pipe(IS_PRODUCTION ? util.noop() : sourcemaps.write())
		.pipe(gulp.dest(IS_PRODUCTION ? SCSS_PRODUCTION_BUILD_FOLDER : SCSS_DEVELOPMENT_BUILD_FOLDER));
});

gulp.task('watch:scss', ['build:scss'], () => {
	gulp.watch(SCSS_SRC_FILES, ['build:scss']);
});
