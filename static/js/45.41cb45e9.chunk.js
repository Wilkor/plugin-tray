(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[45],{98:function(t,e,o){"use strict";o.r(e),o.d(e,"bds_modal",(function(){return a}));var n=o(10),i=function(t,e,o,n){function i(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,l){function a(t){try{r(n.next(t))}catch(e){l(e)}}function s(t){try{r(n.throw(t))}catch(e){l(e)}}function r(t){t.done?o(t.value):i(t.value).then(a,s)}r((n=n.apply(t,e||[])).next())}))},l=function(t,e){var o,n,i,l,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(e){return r([t,e])}}function r(l){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&l[0]?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=e.call(t,a)}catch(s){l=[6,s],n=0}finally{o=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},a=function(){function t(t){var e=this;Object(n.r)(this,t),this.bdsModalChanged=Object(n.c)(this,"bdsModalChanged",7),this.open=!1,this.closeButton=!0,this.handleMouseClick=function(){e.open=!1,e.bdsModalChanged.emit({modalStatus:"closed"})}}return t.prototype.toggle=function(){return i(this,void 0,void 0,(function(){return l(this,(function(t){return this.open=!this.open,this.open?this.bdsModalChanged.emit({modalStatus:"opened"}):this.bdsModalChanged.emit({modalStatus:"closed"}),[2]}))}))},t.prototype.render=function(){return Object(n.h)("div",{class:{modal__dialog:!0,"modal__dialog--open":this.open}},Object(n.h)("div",{class:"modal"},this.closeButton&&Object(n.h)("bds-icon",{size:"medium",class:"close-button",name:"close",onClick:this.handleMouseClick}),Object(n.h)("slot",null)))},t}();a.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .modal__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:-ms-flexbox;display:flex}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:#ffffff;-webkit-box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.modal__dialog .modal .close-button{color:#505f79;-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog--open{opacity:1;visibility:visible}'}}]);