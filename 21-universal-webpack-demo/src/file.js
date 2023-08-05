import img from "./public/nhlt.jpg";

// 创一个img元素
const imgEl = new Image();
// imgEl.src = require('../img/zznh.png').default;
// imgEl.src = '../img/zznh.png'; 直接写相对路径的方式不能正常加载图片
imgEl.src = img; // 使用es6 module
// imgEl.src = require('../img/zznh.png'); // 当使用webpack5的asset/resource特性时，不再需要读取default属性
document.body.appendChild(imgEl);

// 创建一个div，设置背景图片
const bgDiv = document.createElement("div");
bgDiv.style.width = "200px";
bgDiv.style.height = "200px";
bgDiv.className = "bg";
// bgDiv.style.backgroundColor = 'red';
document.body.appendChild(bgDiv);
