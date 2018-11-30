const gulp = require('gulp');
const webserver = require('gulp-webserver');
const fs = require('fs');
const path = require('path');
const getFile = function(req, res, filepath) {
    fs.exists(filepath, function(mes) {
        if (!mes) {
            res.end('not find file');
            return;
        };
        fs.readFile(filepath, function(err, data) {
            if (err) {
                res.end(err);
                return;
            };
            res.end(data.toString());
        })
    })
}
gulp.task('server', function() {
    return gulp.src('.')
        .pipe(webserver({
            port: 8081,
            host: 'localhost',
            middleware: function(req, res) {
                if (req.url === '/favicon.ico') {
                    res.end('');
                    return;
                };
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*'
                });
                var filename = require('url').parse(req.url).pathname;
                getFile(req, res, path.join(__dirname, 'data', filename + '.json'));
            }
        }))
});