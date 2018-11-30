let obj = {
    init() {
        console.log('app')
    },
    getnum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

export { obj as indexObject };