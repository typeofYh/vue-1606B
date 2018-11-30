class Process {
    constructor(parent, data) {
        //图片总个数
        this.len = data.length;
        //默认加载0张图片
        this.count = 0;
        //数据
        this.data = data;
        this.parent = this.getElement(parent);
        this.loading = this.getElement('.loadingbox', this.parent);
        this.loadingCur = this.getElement('.loadingcur', this.loading);
        this.processStart();
        this.processEnd();
    }
    getElement(classname, parentnode = document) {
        return parentnode.querySelector(classname);
    }
    processStart() { //计算进度条
        this.data.forEach(url => {
            this.loadimg(url).then(img => {
                this.count++;
                var width = (this.count / this.len * 100).toFixed(2) + '%';
                this.loadingCur.style.width = width;
                this.loadingCur.innerHTML = width;
            })
        });
    }
    processEnd() { //promise ALL 全部图片加载完成 显示图片
        var imgPromise = this.data.map(url => this.loadimg(url));
        var ul = this.getElement('ul', this.getElement('.content'));
        Promise.all(imgPromise).then(data => {
            data.forEach(img => {
                var li = document.createElement('li');
                li.append(img);
                ul.append(li);
                this.loading.style.display = 'none';
            })
        });
    }
    loadimg(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function() {
                reject('找不到图片地址:' + url);
            };
            img.src = url;
        })
    }
}