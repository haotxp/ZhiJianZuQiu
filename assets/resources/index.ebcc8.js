window.__require=function t(e,n,r){function o(c,p){if(!n[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var s="function"==typeof __require&&__require;if(!p&&s)return s(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){return o(e[c][1][t]||t)},u,u.exports,t,e,n,r)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)o(r[c]);return o}({TipsManager:[function(t,e,n){"use strict";cc._RF.push(e,"203bew+Gh1NSocV7QnpQahw","TipsManager");var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,p=c.ccclass,a=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tipsPrefab=null,e.pool=null,e.poolName="TipUI",e}var n;return o(e,t),n=e,Object.defineProperty(e,"Instance",{get:function(){return null==this.__instance&&(this.__instance=new n),this.__instance},enumerable:!1,configurable:!0}),e.prototype.Initial=function(){if(this.pool=new cc.NodePool(this.poolName),!this.tipsPrefab){var t=this;cc.resources.load("tips/tips",function(e,n){if(e)return console.log("\u52a0\u8f7dtips",e);t.tipsPrefab=n})}},e.prototype.createTips=function(t){var e=this.pool.get();null==e&&(e=cc.instantiate(this.tipsPrefab)),cc.find("str",e).getComponent(cc.Label).string=t,e.position=cc.v3(cc.winSize.width/2,cc.winSize.height/2),cc.tween(e).delay(.5).to(1,{position:cc.v3(e.x,e.y+100,0)}).call(function(){e&&e.removeFromParent(!0)}).start(),e.zIndex=255,e.parent=cc.director.getScene()},n=i([p],e)}(cc.Component));n.default=a,cc._RF.pop()},{}]},{},["TipsManager"]);