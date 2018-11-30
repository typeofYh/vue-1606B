let loadeImage = (url) => {
    let image = new Image();
    return new Promise((resolve, reject) => {
        image.onload = function() {
            resolve(this);
        }
        image.onerror = function() {
            reject('图片找不到')
        };
        image.src = url;
    })
};

loadeImage('http://172.16.10.119:8080/bwie/images/image/banner1.png').then(res => {
    document.body.append(res);
}, res => {
    console.log(res);
});