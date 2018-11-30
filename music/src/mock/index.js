import axios from "axios"
import MockAdapter from "axios-mock-adapter" //拦截axios发起http请求
import banner from "./data/banner";
import detail from "./data/detail";
let axiosMock = new MockAdapter(axios);
axiosMock.onGet('/banner').reply(200, banner);
const reg = /^\/api\/detail\?remmendid=(\d+)$/;
axiosMock.onGet(reg).reply((config) => {
    let remmendid = +config.url.match(reg)[1];
    return [200, detail.data.find(item => item.id === remmendid)]
})