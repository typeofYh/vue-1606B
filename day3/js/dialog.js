class Dialog {
    constructor(el = '.dialog', ops) {
        this.el = this.getElement(el);
        this.ops = ops;

        this.setHTML();
        this.addEvent();
    };
    getElement(ele, parent = document) {
        return typeof ele === 'string' ? parent.querySelector(ele) : ele;
    };
    setStyle() {
        let { clientw, clienth } = { clientw: window.innerWidth, clienth: window.innerHeight };
        this.el.style.left = (clientw - this.el.offsetWidth) / 2 + 'px';
        this.el.style.top = (clienth - this.el.offsetHeight) / 2 + 'px';
    };
    setHTML() {
        this.el.style.display = 'block';
        let html = `
            <h2>${this.ops.title}</h2>
            <div>
                <button class="sure">确定</button>
                <button class="esc">取消</button>
            </div>
        `;
        this.el.innerHTML = html;
        this.setStyle();
    };
    addEvent() {
        let sure = this.getElement('.sure', this.el);
        let esc = this.getElement('.esc', this.el);
        sure.onclick = this.ops.sure.bind(this);
        esc.onclick = this.ops.esc.bind(this);
    }
}


class DialogDrag extends Dialog {
    constructor(el, ops) {
        super(el, ops); //当作函数使用时 
        this.drag();
    };
    drag() {
        this.el.onmousedown = e => {
            let { x, y } = { x: e.offsetX, y: e.offsetY };
            document.onmousemove = e => {
                this.el.style.left = e.clientX - x + 'px';
                this.el.style.top = e.clientY - y + 'px';
            }
        };
        document.onmouseup = () => {
            document.onmousemove = null;
        }

    }
}