//url get post data" key=value&key=value async true false
let ajax = function(url, async = true, type = 'get', data = '') {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        //xhr.readystate 3-4 
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(new Error('error'));
            }
        }
        xhr.open(type, url, async);
        xhr.send(data);
    });
};

let loadImage = function(src) {
    return new Promise((resolve, reject) => {
        const images = new Image();
        images.onload = () => {
            resolve(images);
        };
        images.onerror = () => {
            reject('error')
        };
        images.src = src;
    })
}
ajax('http://localhost:8081/data').then(function(data) {
    //resolve
    var data = JSON.parse(data).data;
    render(data);
    throw new Error('error');
}, function(data) {
    //reject
    console.log(data);
}).catch(function(data) {
    console.log(data);
})


function render(data) {
    //[{},{},{}]
    let arr = data.map(val => {
        return loadImage(val.images); //promise
    }); //arr = [promise,promise,promise]
    Promise.all(arr).then(function(data) { //[img,img,img]
        data.forEach(val => {
            document.body.append(val);
        })
    })
}