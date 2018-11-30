let Mock = {
    mock(len) {
        let obj = {};
        for (let key in len) {
            let tit = key.split('|')[0];
            let count = key.split('|')[1];
            let dataType = typeof len[key];
            obj[tit] = dataType === 'string' ? this.stringFun(count, len[key]) : this.numberFun(count);
        }
        return obj; // 抛出对象
    },
    getcount(count) {
        return {
            min: count.split('-')[0],
            max: count.split('-')[1],
        }
    },
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    stringFun(count, val) {
        let { min, max } = this.getcount(count);
        return val.repeat(this.getRandom(min, max));
    },
    numberFun(count) {
        let { min, max } = this.getcount(count);
        return this.getRandom(min, max);
    }
}


let data = Mock.mock({
    'string|2-16': '9',
    'number|3-9': 9
});

console.log(data);