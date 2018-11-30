const fs = require('fs');


const getFile = function(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, function(err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        })
    })

};

async function fun() {
    let data = await getFile('../data/data.json');
    return data;
};

fun().then((data) => {
    console.log(data);
}).catch(res => {
    console.log(res);
});


function* getData() {
    let data = yield getFile('../data/data.json');
    console.log(data);
};
var o = getData(); //{value:,done:}
console.log(o);