let a = 'zs';
export { a as name };
export function aa() {
    console.log(111);
};

export default class {
    constructor(n) {
        this.name = n
    }
}