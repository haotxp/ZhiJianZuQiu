window.__require=function t(e,n,o){function r(i,s){if(!n[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var p="function"==typeof __require&&__require;if(!s&&p)return p(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var f=n[i]={exports:{}};e[i][0].call(f.exports,function(t){return r(e[i][1][t]||t)},f,f.exports,t,e,n,o)}return n[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<o.length;i++)r(o[i]);return r}({TipsManager:[function(t,e,n){"use strict";cc._RF.push(e,"203bew+Gh1NSocV7QnpQahw","TipsManager");var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tipsPrefab=null,e.pool=null,e.poolName="TipUI",e}var n;return r(e,t),n=e,Object.defineProperty(e,"Instance",{get:function(){return null==this.__instance&&(this.__instance=new n),this.__instance},enumerable:!1,configurable:!0}),e.prototype.Initial=function(){if(this.pool=new cc.NodePool(this.poolName),!this.tipsPrefab){var t=this;cc.resources.load("tips/tips",function(e,n){if(e)return console.log("\u52a0\u8f7dtips",e);t.tipsPrefab=n})}},e.prototype.createTips=function(t){var e=this.pool.get();null==e&&(e=cc.instantiate(this.tipsPrefab)),cc.find("str",e).getComponent(cc.Label).string=t,e.position=cc.v3(cc.winSize.width/2,cc.winSize.height/2),cc.tween(e).delay(.5).to(1,{position:cc.v3(e.x,e.y+100,0)}).call(function(){e&&e.removeFromParent(!0)}).start(),e.zIndex=255,e.parent=cc.director.getScene()},n=c([s],e)}(cc.Component));n.default=a,cc._RF.pop()},{}],cebianPanelSc:[function(t,e,n){"use strict";cc._RF.push(e,"f6459+2M8BFLYXUX8dqRK3k","cebianPanelSc");var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){},e.prototype.uiBtnClickCallBack=function(t,e){if("jin"==e){if(cc.sys.platform==cc.sys.BYTEDANCE_GAME){var n=this;tt.navigateToScene({scene:"sidebar",success:function(){console.log("navigate to scene success"),n.node.destroy()},fail:function(t){console.log("navigate to scene fail: ",t),n.node.destroy()}})}}else"close"==e&&this.node.destroy()},c([s],e)}(cc.Component));n.default=a,cc._RF.pop()},{}]},{},["cebianPanelSc","TipsManager"]);