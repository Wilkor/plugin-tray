(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[10],{59:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_accordion_header",(function(){return a}));var o=n(10),i=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(e){r(e)}}function c(t){try{l(o.throw(t))}catch(e){r(e)}}function l(t){t.done?n(t.value):i(t.value).then(a,c)}l((o=o.apply(t,e||[])).next())}))},r=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(c){r=[6,c],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},a=function(){function t(t){var e=this;Object(o.r)(this,t),this.accordionElement=null,this.isOpen=!1,this.btToggleIsfocus=!1,this.numberElement=null,this.accordionTitle=null,this.icon=null,this.avatarName=null,this.avatarThumb=null,this.toggleHeader=function(){var t;null===(t=e.accordionElement)||void 0===t||t.toggle()}}return t.prototype.toggle=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.isOpen=!this.isOpen,[2]}))}))},t.prototype.close=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.isOpen=!1,[2]}))}))},t.prototype.componentWillRender=function(){this.accordionElement=this.element.parentElement},t.prototype.handleKeyDown=function(t){var e;"Enter"==t.key&&(null===(e=this.accordionElement)||void 0===e||e.toggle())},t.prototype.render=function(){return Object(o.h)("div",{onClick:this.toggleHeader,class:{accordion_header:!0}},this.avatarName||this.avatarThumb?Object(o.h)("bds-avatar",{name:this.avatarName,thumbnail:this.avatarThumb,size:"extra-small"}):this.icon&&Object(o.h)("bds-icon",{size:"x-large",name:"tag",color:"inherit"}),this.accordionTitle&&Object(o.h)("bds-typo",{bold:"bold",variant:"fs-16","line-height":"double"},this.accordionTitle),Object(o.h)("slot",null),Object(o.h)("bds-icon",{class:{accButton:!0,accButton__isopen:this.isOpen,accButton__isfocus:this.btToggleIsfocus},size:"x-large",name:"arrow-down",color:"inherit",tabindex:"0",onKeyDown:this.handleKeyDown.bind(this)}))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),t}();a.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:#202c44;cursor:pointer}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:#c226fb}.accordion_header .accButton:hover{background-color:#f2f2f2}.accordion_header .accButton:active{background-color:#e6e6e6}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid #b9cbd3;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:0 24px 48px;position:relative;color:#202c44}'}}]);
//# sourceMappingURL=10.7aba2bbe.chunk.js.map