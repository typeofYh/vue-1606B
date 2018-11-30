import Mock from "mockjs";
let title = [];
for (let i = 10; i <= 29; i++) {
    title.push('今日头条' + i);
}
export default Mock.mock({
    'data|20': [{
        "id|+1": 10,
        "title|+1": title,
        "text": '@cparagraph'
    }]
})