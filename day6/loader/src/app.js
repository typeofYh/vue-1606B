import { indexObject } from "./js/index";
import "./sass/style.scss";
import "./sass/aa.scss";
import "./sass/common.css";



var xhr = new XMLHttpRequest();
xhr.open('get', '/data', false);
xhr.send(null);
console.log(xhr.responseText);


var xhr1 = new XMLHttpRequest();
xhr1.open('post', '/user', false);
xhr1.send('name=zs&pwd=1234');
console.log(xhr1.responseText);