(()=>{"use strict";var t={705:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var o="",r=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),r&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=t(n),r&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(t,o,r,e,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),e&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=e):p[4]="".concat(e)),n.push(p))}},n}},738:t=>{t.exports=function(t){return t[1]}},424:(t,n,o)=>{var r=o(738),e=o.n(r),a=o(705),c=o.n(a)()(e());c.push([t.id,".foo {\n  font-size: 24px;\n}\n",""])}},n={};function o(r){var e=n[r];if(void 0!==e)return e.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,o),a.exports}o.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},o.d=(t,n)=>{for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{o(424);var t=1+2;console.log(t)})()})();