import Mock from "mockjs"

var imgs = [];
for (var i = 1; i <= 4; i++) {
    imgs.push({
        title: "@csentence",
        url: "banner" + i + '.jpg'
    })
}
export default Mock.mock({
    'banner': imgs,
    'list|20': [{
        title: "@ctitle",
        info: "@csentence",
        images: '@image',
        'id|+1': 10
    }]
});