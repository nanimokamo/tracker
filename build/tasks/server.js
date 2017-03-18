import gulp from 'gulp';
import PATH from 'path';
import nodemon from 'gulp-nodemon';

const ROOT = '../../';
const SERVER_SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'server/index.js');

gulp.task('server', () => {
  nodemon({
    script: SERVER_SRC_FOLDER,
    // ext: 'js html',
    env: { 'NODE_ENV': 'development' },
  });
});
