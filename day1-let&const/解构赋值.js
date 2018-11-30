// let a = 10;
// let b = ['bawei','wangzhan'];
// let c = 12;

// const [a, [...b], c] = [10, ['bawei', 'wangzhan'], 12];
// console.log(a, b, c);
// // const d;  错误写法
// // console.log(d);

// let obj = [...document.querySelectorAll('p')];
// obj.push(111);
// console.log(obj);


// let [name = 'zs', age] = [null, 18];
// console.log(name, age);

// function format(url = location.href) {
//     //url ? url : location.href;
// }
// format();

// let { a:a, b } = { a: 'zs', b: 'ls' };
// let { d: str变量名 } = { d: 'ww' 变量值, str: '1606b' };
// console.log(str);


let data = {
    name: '1606b',
    person: 37,
    friend: ['1606A', '1605A']
};

//name='1606b' person=37 classS= ['1606A', '1605A']

let { name, person, friend } = data;
console.log(name, person, friend);

//{属性名:变量名} ={属性名:变量值}

let str = 'bawei';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let n of str) {
    console.log(n); //代表每一个字符
}

let star = '※';
let n = Math.floor(Math.random() * 6 + 5);

// let newstar = '';
// for (let i = 0; i < n; i++) {
//     newstar += star;
// }
console.log(star.repeat(n));