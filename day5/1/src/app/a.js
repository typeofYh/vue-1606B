export default class {
    constructor(name) {
        this.name = name;
        this.reverse();
    }
    reverse() {
        return this.name.split('').reverse().join('');
    }
}