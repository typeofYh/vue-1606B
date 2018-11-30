const gulp = require('gulp');
const server = require('gulp-webserver');
const path = require('path');
const url = require('url');
const fs = require('fs');
gulp.task('server', function() {
    return gulp.src('.')
        .pipe(server({
            port: 9000,
            middleware(req, res) {
                if (req.url === '/favicon.ico') {
                    res.end('');
                    return;
                };
                let pathname = url.parse(req.url).pathname;
                if (/^\/api/.test(pathname)) {
                    if (pathname === '/api/title') {
                        res.end(JSON.stringify(require('./data/title.json')));
                    }
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, pathname)));
                }

            }
        }))
})