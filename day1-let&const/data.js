let Mock = require('mockjs');
let data = Mock.mock({
    'string|2-10': '1',
    'number|10-20': 1000
});

console.log(data);