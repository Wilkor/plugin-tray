(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[48],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"bds_radio_group",(function(){return i}));var r=n(10),i=function(){function e(e){var t=this;Object(r.r)(this,e),this.bdsRadioGroupChange=Object(r.c)(this,"bdsRadioGroupChange",7),this.handleClick=function(e){var n=e.target&&e.target.closest("bds-radio");if(n){var r=t.value,i=n.value;i!==r&&(t.value=i)}}}return e.prototype.valueChanged=function(e){this.setSelectedRadio(e),this.bdsRadioGroupChange.emit({value:e})},e.prototype.getRadios=function(){return Array.from(this.el.querySelectorAll("bds-radio"))},e.prototype.setSelectedRadio=function(e){var t=this.getRadios(),n=t.find((function(e){return!e.disabled})),r=t.find((function(t){return t.value===e&&!t.disabled}));if(n||r)for(var i=0,o=t;i<o.length;i++){var a=o[i];a.value!==r.value&&(a.checked=!1)}},e.prototype.render=function(){return Object(r.h)(r.H,{onClick:this.handleClick},Object(r.h)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!1,configurable:!0}),e}()}}]);
//# sourceMappingURL=48.19d65d47.chunk.js.map