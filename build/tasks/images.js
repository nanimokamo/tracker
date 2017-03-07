import gulp from 'gulp';
import PATH from 'path';
import util from 'gulp-util';
import imagemin from 'gulp-imagemin';
import pkg from '../../package.json';

const ROOT = '../../';
const IMAGES_SRC_FILES = [
	PATH.resolve(__dirname, ROOT, pkg.folders.images.entrypoint),
];
const IMAGES_DEVELOPMENT_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/public/images');
const IMAGES_PRODUCTION_BUILD_FOLDER = IMAGES_DEVELOPMENT_BUILD_FOLDER;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

gulp.task('build:images', () => {
	return gulp.src(IMAGES_SRC_FILES)
		.pipe(IS_PRODUCTION ? imagemin() : util.noop())
		.pipe(gulp.dest(IS_PRODUCTION ? IMAGES_PRODUCTION_BUILD_FOLDER : IMAGES_DEVELOPMENT_BUILD_FOLDER))
});

gulp.task('watch:images', ['build:images'], () => {
	gulp.watch(IMAGES_SRC_FILES, ['build:images']);
});
