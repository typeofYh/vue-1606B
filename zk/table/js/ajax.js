let ajax = (url, type = "get", async = true, data = null) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(new Error('error'));
            }
        }
        xhr.open(type, url, async);
        xhr.send(data);
    })

}