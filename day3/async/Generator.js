let getnum = function(n) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            var num = Math.floor(Math.random() * 100);
            resolve(num)
        }, n)
    })
}

function* getData() {
    let data = yield getnum(100);
    return data;
};
var o = getData(); //{value:,done:}
o.next().value.then(res => {
    o.next(res).value
});