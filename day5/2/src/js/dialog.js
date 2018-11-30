export default class {
    constructor(title) {
        this.title = title;
        this.init();
    }
    init() {
        let parent = document.createElement('div');
        parent.innerHTML = this.title;
        document.body.append(parent);
    }
}