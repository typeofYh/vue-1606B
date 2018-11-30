class PriceKeyBoard {
    constructor(wrap, onSelect) {
        this.keyboard = document.querySelector(wrap);
        this.price = document.querySelector('.price');
        this.number = 0
        this.onSelect = onSelect;
        this.showKeyBoard();
        this.bindEvent();
    }
    bindEvent() {

        this.keyboard.addEventListener('click', (e) => {
            //在这里根据点击的键盘数字更新this.number
            this.number = this.price.innerHTML;
            var tag = e.target;
            if (tag.className === 'qrBtn') { //确认
                this.closeKeyBoard();
            } else if (tag.className === 'rem') { //退格
                this.number = this.number.substr(0, this.number.length - 1);
            } else if (tag.nodeName === 'LI') { //0-9 .
                if (tag.className === 'dian') { //判断点
                    if (this.number === '') {
                        this.number += '0.'
                    } else {
                        if (this.number.indexOf('.') == -1) {
                            this.number += '.';
                        }
                    }
                } else {
                    this.number += tag.innerHTML; //li
                }
            }
            //同时触发回调
            this.onSelect(this.number, this.price);
        })
    };
    //打开键盘
    showKeyBoard() {
        this.price.addEventListener('click', () => {
            this.keyboard.style.display = 'block';
        })
    };
    //关闭键盘
    closeKeyBoard() {
        this.keyboard.style.display = 'none';
    }
}

function onSelect(number, input) {
    //在这里根据参数number更新金额栏的数据
    let index = number.indexOf('.');
    if (index != -1) {
        number = number.substr(0, index + 3);
    }
    input.innerHTML = number;
}
//实例化数字键盘
new PriceKeyBoard('.keyBox', onSelect)
    //点击金额栏元素时，通过showKeyBoard打开数字键盘，点击键盘的确定按钮时通过closeKeyBoard可以关闭数字键盘