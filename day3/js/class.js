// function SetStyle(el) {
//     this.el = el;
//     this.color = 'red'
// };

// SetStyle.prototype.setbackground = function() {
//     this.el.style.background = this.color
// }

// new SetStyle(document.body);

class SetStyle {
    constructor(el) {
        this.el = el;
        this.color = 'red';
    };
    setbackground() {
        this.el.style.background = this.color;
    };
    static getcolor() {
        console.log(this);
        return this.color;
    }
}

new SetStyle();
SetStyle.getcolor()