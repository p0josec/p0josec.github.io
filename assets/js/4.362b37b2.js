(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{458:function(t,a,r){},502:function(t,a,r){"use strict";r(458)},515:function(t,a,r){"use strict";r.r(a);r(233);var e={props:{cardData:{type:Array,default:[]},cardListSize:{type:Number,default:3},carTitleColor:{type:String,default:"#000"},carHoverColor:{type:String,default:"#000"}},mounted:function(){this.cardHoverColor()},methods:{cardHoverColor:function(){if(!document.querySelector(".card")){var t=this.carHoverColor,a=document.createElement("style");a.className="card",a.innerHTML=".card-nav-content:hover{color: ".concat(t,"}"),document.head.appendChild(a)}}}},c=(r(502),r(15)),n=Object(c.a)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[null!=t.cardData[0].title?[r("div",{staticStyle:{"text-align":"center","font-weight":"900"}},[t._v(t._s(t.cardData[0].title))])]:t._e(),t._v(" "),r("div",{staticClass:"kbt-row"},t._l(t.cardData,(function(a,e){return r("div",{key:e,staticClass:"card-nav-box",style:4==t.cardListSize?"width: 25%;":2==t.cardListSize?"width: 50%;":"width: 33.333%;"},[r("a",{attrs:{href:a.cardSrc,target:"_blank"}},[r("div",{staticClass:"card-nav-item"},[r("div",{staticClass:"card-nav-title"},[a.cardImgSrc&&""!=a.cardImgSrc?r("img",{staticClass:"card-nav-img",attrs:{src:a.cardImgSrc,alt:"正在加载 ..."}}):t._e(),t._v(" "),r("p",{staticClass:"card-nav-name",style:"color:"+t.carTitleColor},[t._v("\n            "+t._s(a.cardName)+"\n          ")])]),t._v(" "),r("div",{staticClass:"card-nav-content",attrs:{title:a.cardContent}},[t._v("\n          "+t._s(a.cardContent)+"\n        ")])])])])})),0)],2)}),[],!1,null,"093b234a",null);a.default=n.exports}}]);