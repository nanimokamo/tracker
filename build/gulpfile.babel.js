import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./tasks', { recurse: false });

gulp.task('default', ['development']);
gulp.task('development', ['server', 'watch:scss', 'watch:js', 'watch:html', 'watch:images']);
gulp.task('build', ['build:scss', 'build:js', 'build:html', 'build:images']);
