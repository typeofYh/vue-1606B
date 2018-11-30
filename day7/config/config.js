const path = require('path');
module.exports = {
    urls: function(u) {
        return path.join(__dirname, '../', u)
    }
}