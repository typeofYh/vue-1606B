// var obj = {
//     name: 'zs' //数据属性 
// };



// Object.defineProperty(obj, 'name', {
//     get() {
//         return true;
//     },
//     set(val) {
//         console.log(val);
//     }
// });

// console.log(obj.name);

// obj.name = 'ww';

// console.log(obj);


// var arr = [];
// Object.setPrototypeOf(arr, String.prototype);
// console.log(Object.getPrototypeOf(arr)); //Array.prototype


// let data = {
//     'A': ['anwei'],
//     'B': ['背景']
// };
// //[['anwe'],['beij']]
// Object.entries(data).forEach(val => {
//     console.log(val);
// });


// let arr = [1, 4, 2, 3, 51, 1, 3, 1];

// const arr1 = new Set();

// arr.forEach(val => {
//     arr1.add(val);
// });
// console.log(arr1, arr1.size);

// let o = {
//     name: 'zs'
// };

// let o1 = new Map();
// o1.set(o, 'ls');
// console.log(o1.get(o));
// console.log(o1.keys());