(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[42],{95:function(t,o,n){"use strict";n.r(o),n.d(o,"bds_menu",(function(){return s}));var e=n(10),i=function(t,o,n,e){function i(t){return t instanceof n?t:new n((function(o){o(t)}))}return new(n||(n=Promise))((function(n,r){function s(t){try{p(e.next(t))}catch(o){r(o)}}function u(t){try{p(e.throw(t))}catch(o){r(o)}}function p(t){t.done?n(t.value):i(t.value).then(s,u)}p((e=e.apply(t,o||[])).next())}))},r=function(t,o){var n,e,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(t){return function(o){return p([t,o])}}function p(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,e&&(i=2&r[0]?e.return:r[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,r[1])).done)return i;switch(e=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,e=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=o.call(t,s)}catch(u){r=[6,u],e=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},s=function(){function t(t){Object(e.r)(this,t),this.menuPositionTopToBottom=0,this.menuPositionLeftToBottom=0,this.menuPositionTopToRight=0,this.menuPositionLeftToRight=0,this.menu=null,this.position="right",this.open=!1}return t.prototype.toggle=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.open=!this.open,[2]}))}))},t.prototype.openMenu=function(){if(1==this.open){var t=document.getElementById(this.menu);this.menuPositionTopToBottom=t.offsetTop+t.offsetHeight,this.menuPositionLeftToBottom=t.offsetLeft,this.menuPositionTopToRight=t.offsetTop,this.menuPositionLeftToRight=t.offsetLeft+t.offsetWidth}},t.prototype.render=function(){var t,o=this;return Object(e.h)("div",{class:(t={menu:!0},t["menu__".concat(this.position)]=!0,t.menu__open=this.open,t),style:function(t){return"right"==t?{top:"".concat(o.menuPositionTopToRight,"px"),left:"".concat(o.menuPositionLeftToRight,"px")}:{top:"".concat(o.menuPositionTopToBottom,"px"),left:"".concat(o.menuPositionLeftToBottom,"px")}}(this.position)},Object(e.h)("slot",null))},Object.defineProperty(t,"watchers",{get:function(){return{open:["openMenu"]}},enumerable:!1,configurable:!0}),t}();s.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .menu{position:absolute;pointer-events:none;padding:16px 2px;background-color:#ffffff;border-radius:8px;-webkit-box-shadow:0px 10px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 10px 16px rgba(7, 71, 166, 0.12);max-width:224px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.menu__open{pointer-events:auto;opacity:1}'}}]);
//# sourceMappingURL=42.e60619d6.chunk.js.map