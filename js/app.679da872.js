(function(e){function t(t){for(var i,a,c=t[0],s=t[1],l=t[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"08fb":function(e,t,n){},"1cbd":function(e,t,n){"use strict";n("ef25")},"311d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main-page")},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload__container",on:{mouseup:function(t){return t.preventDefault(),e.mouseUp(t)},"&touchend":function(t){return e.mouseUp(t)}}},[n("div",{staticClass:"generator__button-container"},[n("v-btn",{staticClass:"download__img generator__button--main",on:{click:function(t){return e.cropPopUp()}}},[e._v(" Загрузить картинку ")]),n("v-btn",{staticClass:"download__img download__img--secondary generator__button--main",on:{click:function(t){return e.changeBGblur()}}},[e._v(" Размыть фон ")]),n("v-btn",{staticClass:"download__img download__img--secondary generator__button--main",on:{click:function(t){return e.changeOneColor()}}},[e._v(" Залить цветом ")]),e.oneColor?n("div",{staticClass:"change__color"},[n("color-picker",{attrs:{theme:"light",color:e.colour,"sucker-hide":!1},on:{changeColor:e.changeColor}})],1):e._e(),n("v-btn",{staticClass:"download__img download__img--save generator__button--main",on:{click:function(t){return e.download()}}},[e._v(" Скачать ")])],1),n("smile-input",{on:{receivedsmile:e.addToArrCheckedSmile}}),e.croppingStart?n("div",{staticClass:"upload__crop-container"},[n("div",{staticClass:"upload__crop-body"},[n("cropping-cropa",{on:{receiveimg:e.updateRenderedImg,closepopup:function(t){e.croppingStart=!1}}})],1)]):e._e(),n("div",{staticClass:"img__mini-container"},[n("div",{staticClass:"img__mini"},[0!==e.img?n("div",{staticClass:"img__container--border"},[n("div",{staticClass:"img__main-container--mini",style:e.color,on:{mousemove:function(t){return t.preventDefault(),e.mouseMove(t)},"&touchmove":function(t){return e.mouseMoveMobile(t)}}},[n("checked-smiles",{attrs:{dragg:e.dragging,koef:1,checkedarr:e.checkedSmile},on:{receiveddataformousedown:e.saveDataForMouseDown,receiveddataformousedownmobile:e.saveDataForMouseDownMobile}}),n("img",{staticClass:"img__main-render",attrs:{src:e.img},on:{onload:function(t){return e.render()}}}),n("img",{staticClass:"img__mini--bg",attrs:{src:0!==e.bgformini?e.bgformini:null,alt:"blur"}})],1)]):e._e()]),0!==e.smileForManipulation?n("div",{staticClass:"smile__item-corection--container"},[n("v-app",[n("div",{staticClass:"smile__item-corection-title"},[e._v("Размер")]),n("v-slider",{staticClass:"align-self-stretch",attrs:{min:"60",max:"300",step:"1"},model:{value:e.checkedSmile[e.findElfromSmileChecked()].width,callback:function(t){e.$set(e.checkedSmile[e.findElfromSmileChecked()],"width",t)},expression:"checkedSmile[findElfromSmileChecked()].width"}}),n("div",{staticClass:"smile__item-corection-title"},[e._v("Поворот")]),n("v-slider",{staticClass:"align-self-stretch",attrs:{min:"0",max:"360",step:"1"},model:{value:e.checkedSmile[e.findElfromSmileChecked()].deg,callback:function(t){e.$set(e.checkedSmile[e.findElfromSmileChecked()],"deg",t)},expression:"checkedSmile[findElfromSmileChecked()].deg"}}),n("button",{staticClass:"smile__delete",on:{click:function(t){e.deleteSmile(e.findElfromSmileChecked())}}},[e._v("Удалить")])],1)],1):e._e()]),0!==e.img?n("div",{attrs:{id:"render__hide"}},[n("div",{staticClass:"img__main-container",style:e.color,attrs:{id:"render"},on:{mousemove:function(t){return t.preventDefault(),e.mouseMove(t)}}},[n("checked-smiles",{attrs:{koef:3,checkedarr:e.checkedSmile,dragg:e.dragging},on:{receiveddataformousedown:e.saveDataForMouseDown}}),n("img",{staticClass:"img__main-render",attrs:{src:e.img},on:{onload:function(t){return e.render()}}})],1)]):e._e()],1)},c=[],s=(n("99af"),n("7db0"),n("c975"),n("a434"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__weapper"},[n("div",{staticClass:"popup__main-content"},[n("croppa",{attrs:{width:1080,height:1080,quality:1,"initial-size":"contain",accept:"image/*"},model:{value:e.myCroppa,callback:function(t){e.myCroppa=t},expression:"myCroppa"}}),n("button",{staticClass:"popup__btn-save",on:{click:function(t){return e.getImg()}}},[e._v("Сохранить")]),n("button",{staticClass:"popup__btn-save",on:{click:function(t){return e.closePopUp()}}},[e._v("Закрыть")])],1)])])}),l=[],u=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{data:function(){return{myCroppa:{},savedImg:0}},methods:{uploadCroppedImage:function(){this.myCroppa.generateBlob((function(e){}),"image/jpeg",1)},getImg:function(e){var t=this.myCroppa.getCanvas().toDataURL(),n=this.myCroppa.getChosenFile();if(void 0!==n){this.savedImg=URL.createObjectURL(n);var i=[t,this.savedImg];this.$emit("receiveimg",i)}},closePopUp:function(){this.$emit("closepopup")}}}),d=u,m=(n("1cbd"),n("2877")),f=Object(m["a"])(d,s,l,!1,null,null,null),p=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"smile__container"},e._l(e.smile,(function(t,i){return n("div",{key:i,staticClass:"smile__weapper",on:{click:function(n){return e.chekedSmile(t)}}},[n("img",{staticClass:"smile__image",attrs:{src:t.src,alt:t.name}})])})),0)},h=[],v={data:function(){return{smile:[{id:0,src:n("84b1"),name:"1"},{id:1,src:n("84b1"),name:"2"},{id:3,src:n("9835"),name:"3"}]}},methods:{chekedSmile:function(e){this.$emit("receivedsmile",e)}}},_=v,b=(n("f03e"),Object(m["a"])(_,g,h,!1,null,null,null)),k=b.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"smile__body"},e._l(e.checkedarr,(function(t,i){return n("div",{key:i,staticClass:"smile__item",style:{zIndex:10+i,top:e.koef*t.top+"px",left:e.koef*t.left+"px"},attrs:{"data-id":t.id}},[n("v-app",[n("div",{staticClass:"d-flex flex-column justify-space-between align-center",style:{transform:"rotate("+t.deg+"deg)"}},[1===e.koef?n("div",{staticClass:"smile__nav-container",class:!0===e.dragg?"smile__nav-container--dragging":null}):e._e(),n("v-img",{attrs:{"aspect-ratio":1,width:e.koef*t.width,contain:!0,src:t.src,"lazy-src":t.src},on:{mousedown:function(n){return n.preventDefault(),e.mouseDownSendData(n,t)},touchstart:function(n){return e.mouseDownSendDataMobile(n,t.id)}}})],1)])],1)})),0)},y=[],S=(n("a9e3"),{props:{checkedarr:{type:Array,required:!0},koef:{type:Number,required:!0},dragg:{type:Boolean,required:!0}},data:function(){return{tempElement:null}},methods:{mouseDownSendData:function(e,t){var n=[e,t];this.$emit("receiveddataformousedown",n)},mouseDownSendDataMobile:function(e,t){var n=this.checkedarr.find((function(e){return e.id==t})),i=[e,n];this.$emit("receiveddataformousedownmobile",i)}}}),w=S,M=(n("828f"),n("6544")),D=n.n(M),x=n("7496"),O=n("adda"),j=Object(m["a"])(w,C,y,!1,null,null,null),E=j.exports;D()(j,{VApp:x["a"],VImg:O["a"]});var q=n("fc84"),X=n("1642"),Y=n("c0e9"),F=n.n(Y),I=n("21a6"),P=n("8288"),$=n.n(P),U={components:{"cropping-cropa":p,"smile-input":k,"checked-smiles":E,"gradient-picker":X["gradientPicker"],colorPicker:q["a"]},data:function(){return{myCroppa:{},img:0,background:0,croppingStart:!1,oneColor:!1,colour:"#000",checkedSmile:[],bgformini:0,tempX:0,tempY:0,tempel:0,dragging:!1,startX:0,startY:0,smileForManipulation:0,gradient:{degree:0,points:[{left:0,red:0,green:0,blue:0,alpha:1},{left:100,red:255,green:0,blue:0,alpha:1}]}}},methods:{render:function(){ctx.drawImage(this.img,0,0)},cropPopUp:function(){this.croppingStart=!0,this.oneColor=!1},updateRenderedImg:function(e){this.img=e[0],this.background=e[1],this.croppingStart=!1},changeBGblur:function(){var e=this;if(this.oneColor=!1,0!==this.background)if(this.colour="rgba(0, 0, 0, 0)",null===document.querySelector("#forsavingasimg")){var t=document.createElement("img");t.setAttribute("id","forsavingasimg"),t.src=this.background,t.classList.add("img__background");var n=document.querySelector(".img__main-container");n.appendChild(t),$()(t),setTimeout((function(n){$()(t).then((function(n){t.src=n,e.bgformini=n})),document.querySelector("#forsavingasimg").classList.remove("img__background"),document.querySelector("#forsavingasimg").classList.add("img__background--final")}),100)}else document.querySelector("#forsavingasimg").src=this.background,document.querySelector("#forsavingasimg").classList.add("img__background"),setTimeout((function(t){var n=document.querySelector("#forsavingasimg");null!==n&&$()(n).then((function(t){n.src=t,document.querySelector("#forsavingasimg").classList.remove("img__background"),document.querySelector("#forsavingasimg").classList.add("img__background--final"),e.bgformini=t}))}),100)},changeOneColor:function(){this.colour="rgba(0, 0, 0, 1)";var e=document.querySelector("#forsavingasimg");e.parentNode.removeChild(e),this.oneColor=!0},changeColor:function(e){var t=e.rgba,n=t.r,i=t.g,o=t.b,r=t.a;this.colour="rgba(".concat(n,", ").concat(i,", ").concat(o,", ").concat(r,")")},download:function(){this.oneColor=!1;var e=document.getElementById("render");null!==e&&F()(e,{width:1080,height:1080,onclone:function(e){e.getElementById("render").style.visibility="visible"}}).then((function(e){e.toBlob((function(e){var t=(new Date).getHours(),n=(new Date).getMinutes(),i=(new Date).getMonth()+1,o=(new Date).getDate();i<10&&(i="0"+i),n<10&&(n="0"+n),o<10&&(o="0"+o),Object(I["saveAs"])(e,"".concat("insta_"+o+"-"+i+"_"+t+"-"+n,".png"))}))}))},addToArrCheckedSmile:function(e){this.oneColor=!1,this.checkedSmile.push({id:this.checkedSmile.length,name:e.name,src:e.src,top:0,left:0,width:60,deg:0}),this.smileForManipulation=0},saveDataForMouseDown:function(e){this.smileForManipulation=e[1],this.tempX=e[0].clientX,this.tempY=e[0].clientY,this.startX=e[1].left,this.startY=e[1].top,this.tempel=e[1],this.dragging=!0},saveDataForMouseDownMobile:function(e){this.smileForManipulation=e[1],this.tempX=e[0].touches[0].clientX,this.tempY=e[0].touches[0].clientY,this.startX=e[1].left,this.startY=e[1].top,this.tempel=e[1],this.dragging=!0},mouseMove:function(e){var t=this;if(this.dragging){var n=this.checkedSmile.find((function(e){return e==t.tempel}));n.left=this.startX+(e.clientX-this.tempX),n.top=this.startY+(e.clientY-this.tempY)}},mouseMoveMobile:function(e){var t=this;if(this.dragging){var n=this.checkedSmile.find((function(e){return e==t.tempel}));n.left=this.startX+(e.touches[0].clientX-this.tempX),n.top=this.startY+(e.touches[0].clientY-this.tempY)}},mouseUp:function(e){this.dragging=!1},findElfromSmileChecked:function(){var e=this,t=this.checkedSmile.find((function(t){return t.id==e.smileForManipulation.id}));if(void 0!==t)return this.checkedSmile.indexOf(t)},deleteSmile:function(e){this.checkedSmile.splice(e,1),this.smileForManipulation=0}},computed:{color:function(){return{backgroundColor:this.colour}}}},L=U,A=(n("b49c"),n("8336")),B=n("ba0d"),T=Object(m["a"])(L,a,c,!1,null,null,null),R=T.exports;D()(T,{VApp:x["a"],VBtn:A["a"],VSlider:B["a"]});var V={name:"App",components:{"main-page":R},data:function(){return{}}},z=V,G=(n("034f"),Object(m["a"])(z,o,r,!1,null,null,null)),J=G.exports,N=n("2f62");i["default"].use(N["a"]);var H=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=n("f309");n("bf40");i["default"].use(K["a"]);var Q=new K["a"]({}),W=n("2896"),Z=n.n(W),ee=(n("b107"),n("40d9"),n("3479"),n("0086")),te=n.n(ee);i["default"].use(te.a),i["default"].use(Z.a),i["default"].config.productionTip=!1,new i["default"]({store:H,vuetify:Q,render:function(e){return e(J)}}).$mount("#app")},"828f":function(e,t,n){"use strict";n("311d")},"84b1":function(e,t,n){e.exports=n.p+"img/smile.608f2e1f.png"},"85ec":function(e,t,n){},9835:function(e,t,n){e.exports=n.p+"img/Smiley.ab8a883a.png"},b107:function(e,t,n){},b49c:function(e,t,n){"use strict";n("08fb")},cb37:function(e,t,n){},ef25:function(e,t,n){},f03e:function(e,t,n){"use strict";n("cb37")}});
//# sourceMappingURL=app.679da872.js.map