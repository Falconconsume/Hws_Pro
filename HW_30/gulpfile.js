import gulp from "gulp";
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";

export const images = () => {
    console.log('Processing images...');
    
    return gulp.src(path.src.files) 
        .pipe(newer(path.build.files))
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.files))
        .on('end', () => {
            console.log('Images processed successfully.');
        });
}


export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(path.build.html))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.files, images);
}

const mainTasks = gulp.parallel(copy, html,images, scss );

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);
