(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0972":function(t,e,s){},1399:function(t,e,s){"use strict";var a=s("ef4a"),n=s.n(a);n.a},"21bb":function(t,e,s){"use strict";var a=s("2dad"),n=s.n(a);n.a},"2dad":function(t,e,s){},"49c5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r=(s("5c0b"),s("2877")),c={},o=Object(r["a"])(c,n,i,!1,null,null,null),l=o.exports,u=(s("be35"),s("78a7"),s("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("c8be"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("ef24"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("dc44"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3  text-center pt-3 text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),a("list-card",{attrs:{icon:"Menu",title:"新闻资讯",categories:t.newCat},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),a("list-card",{attrs:{icon:"hero",title:"英雄列表",categories:t.heroCat},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])})],1)},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],f=(s("96cf"),s("1da1")),v=s("5a0c"),h=s.n(v),m={filters:{date:function(t){return h()(t).format("MM/DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newCat:[],heroCat:[]}},created:function(){this.fetchNewsCats(),this.fetchHeroesCats()},methods:{fetchNewsCats:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("news/list");case 2:e=t.sent,this.newCat=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchHeroesCats:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/list");case 2:e=t.sent,this.heroCat=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},g=m,_=(s("21bb"),Object(r["a"])(g,p,d,!1,null,null,null)),b=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"nav bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav pb-1 nav-inverse w-100 jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",tag:"div"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("ef24"),alt:"",height:"30"}}),a("div",{staticClass:"px-2 flex-1 "},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],w={},y=w,k=(s("a006"),Object(r["a"])(y,C,x,!1,null,null,null)),j=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2"},[s("div",{staticClass:"iconfont icon-Back"}),s("strong",{staticClass:"flex-1"},[t._v(" "+t._s(t.model.title)+" ")]),s("div",{staticClass:"text-grey fs-xs"})]),s("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}})])},$=[],S={props:{id:{require:!0}},data:function(){return{model:{}}},methods:{fetch:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("articles/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()}},E=S,R=(s("1399"),Object(r["a"])(E,O,$,!1,null,null,null)),M=R.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("ef24"),alt:"",height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄>")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 d-flex flex-column jc-end h-100"},[a("div",[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-info"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-red"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("span",{staticClass:"text-grey"},[t._v(" 皮肤：2 > ")])])])])]):t._e()},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1 "},[s("span",{staticClass:"text-white"},[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略战")])])}],L={props:{id:{require:!0}},data:function(){return{model:null}},methods:{fetch:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()}},T=L,H=(s("6e94"),Object(r["a"])(T,P,q,!1,null,null,null)),N=H.exports;a["a"].use(u["a"]);var A=[{path:"/",component:j,children:[{path:"/",name:"home",component:b},{path:"/articles/:id",name:"article",component:M,props:!0}]},{path:"/heroes/:id",name:"hero",component:N,props:!0}],D=new u["a"]({routes:A}),J=D,B=s("7212"),I=s.n(B),U=(s("dfa4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-3 mt-3 bg-white"},[s("div",{staticClass:"card-header d-flex ai-center pb-3"},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2 title"},[t._v(t._s(t.title))]),s("i",{staticClass:"iconfont icon-more1-vertical"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),z=[],F={props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},G=F,K=(s("e60d"),Object(r["a"])(G,U,z,!1,null,null,null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},W=[],X={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},Y=X,Z=Object(r["a"])(Y,V,W,!1,null,null,null),tt=Z.exports,et=s("bc3a"),st=s.n(et);a["a"].component("mCard",Q),a["a"].component("ListCard",tt),a["a"].prototype.$http=st.a.create({baseURL:"http://localhost:3000/web/api"}),a["a"].use(I.a),a["a"].config.productionTip=!1,new a["a"]({router:J,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"6e94":function(t,e,s){"use strict";var a=s("49c5"),n=s.n(a);n.a},"78a7":function(t,e,s){},"9c0c":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("0972"),n=s.n(a);n.a},be35:function(t,e,s){},c8be:function(t,e,s){t.exports=s.p+"img/201703081610285716673.ba964822.jpg"},dc44:function(t,e,s){t.exports=s.p+"img/20191202092119_23.d3c69e70.png"},e60d:function(t,e,s){"use strict";var a=s("e9ec"),n=s.n(a);n.a},e9ec:function(t,e,s){},ef24:function(t,e,s){t.exports=s.p+"img/20191127163057_106 (2).0bb9e1ae.png"},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.4f7c8073.js.map