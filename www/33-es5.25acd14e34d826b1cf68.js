function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"6i+d":function(n,t,e){"use strict";e.r(t),e.d(t,"FoodListingPageModule",(function(){return I}));var o=e("ofXK"),i=e("3Pt+"),r=e("tyNb"),c=e("tk/3"),a=e("TEn/"),g=e("j1ZV"),s=e("iTUp"),l=e("MrCo"),p=e("evT8"),b=e("WAd3"),d=e("fXoL"),m=e("2gss"),u=e("B7gC"),P=e("zK/y"),C=e("+1ss");function O(n,t){if(1&n&&(d.Qb(0,"ion-col",29),d.Qb(1,"span",30),d.Lb(2,"app-text-shell",18),d.Pb(),d.Pb()),2&n){var e=t.$implicit;d.zb(2),d.jc("data",e)}}function _(n,t){1&n&&(d.Qb(0,"span",31),d.yc(1,"$"),d.Pb())}function f(n,t){1&n&&(d.Qb(0,"span",32),d.yc(1,"$"),d.Pb())}var M=function(n){return["/app/categories/food/",n]};function h(n,t){if(1&n&&(d.Qb(0,"a",36),d.Qb(1,"span",37),d.yc(2),d.Pb(),d.Pb()),2&n){var e=d.cc(2).$implicit;d.jc("routerLink",d.mc(2,M,e.slug)),d.zb(2),d.zc(e.pictures.length-5)}}var v=function(){return{w:1,h:1}};function w(n,t){if(1&n&&(d.Qb(0,"ion-col",33),d.Qb(1,"app-aspect-ratio",10),d.Lb(2,"app-image-shell",34),d.Pb(),d.wc(3,h,3,4,"a",35),d.Pb()),2&n){var e=t.$implicit,o=t.index,i=d.cc().$implicit;d.zb(1),d.jc("ratio",d.lc(4,v)),d.zb(1),d.jc("src",e)("alt","food image"),d.zb(1),d.jc("ngIf",4==o&&i.pictures.length>5)}}var x=function(){return{w:35,h:15}},k=function(){return{w:20,h:7}},z=function(){return[]};function y(n,t){if(1&n&&(d.Qb(0,"div",6),d.Qb(1,"div",7),d.Qb(2,"a",8),d.Qb(3,"app-image-shell",9),d.Qb(4,"app-aspect-ratio",10),d.Qb(5,"div",11),d.Qb(6,"app-aspect-ratio",10),d.Lb(7,"app-image-shell",12),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(8,"ion-row",13),d.Qb(9,"ion-col",14),d.Qb(10,"ion-row",15),d.Qb(11,"h3",16),d.Qb(12,"a",17),d.Lb(13,"app-text-shell",18),d.Pb(),d.Pb(),d.Qb(14,"p",19),d.Lb(15,"app-text-shell",18),d.Pb(),d.Qb(16,"ion-row",20),d.wc(17,O,3,1,"ion-col",21),d.Pb(),d.Pb(),d.Pb(),d.Qb(18,"ion-col",22),d.Qb(19,"span",23),d.dc(20,"floor"),d.Lb(21,"app-text-shell",18),d.Pb(),d.Qb(22,"div",24),d.wc(23,_,2,0,"span",25),d.wc(24,f,2,0,"span",26),d.Pb(),d.Pb(),d.Pb(),d.Qb(25,"ion-row",27),d.wc(26,w,4,5,"ion-col",28),d.Pb(),d.Pb()),2&n){var e=t.$implicit;d.zb(2),d.jc("routerLink",d.mc(17,M,e.slug)),d.zb(1),d.jc("display","cover")("src",e.image),d.zb(1),d.jc("ratio",d.lc(19,x)),d.zb(2),d.jc("ratio",d.lc(20,k)),d.zb(1),d.jc("src",e.icon),d.zb(5),d.jc("routerLink",d.mc(21,M,e.slug)),d.zb(1),d.jc("data",e.name),d.zb(2),d.jc("data",e.address),d.zb(2),d.jc("ngForOf",e.tags),d.zb(2),d.Ab("ratingBase",d.ec(20,15,e.rating)),d.zb(2),d.jc("data",e.rating),d.zb(2),d.jc("ngForOf",d.lc(23,z).constructor(e.priceRange)),d.zb(1),d.jc("ngForOf",d.lc(24,z).constructor(5-(e.priceRange||1))),d.zb(2),d.jc("ngForOf",e.pictures.slice(0,5))}}function Q(n,t){if(1&n&&(d.Ob(0),d.wc(1,y,27,25,"div",5),d.Nb()),2&n){var e=d.cc();d.zb(1),d.jc("ngForOf",e.listing.items)}}var j,L,F,B=((L=function(){function n(t){_classCallCheck(this,n),this.route=t}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.subscriptions=this.route.data.subscribe((function(t){n.subscriptions=p.a.extractData(t.data,b.a).subscribe((function(t){n.listing=t}),(function(n){}))}),(function(n){}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.listing||!this.listing.isShell)}}]),n}()).\u0275fac=function(n){return new(n||L)(d.Kb(r.a))},L.\u0275cmp=d.Eb({type:L,selectors:[["app-food-listing"]],hostVars:2,hostBindings:function(n,t){2&n&&d.Bb("is-shell",t.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"food-listing-content"],[4,"ngIf"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"cover-wrapper"],[1,"cover-anchor",3,"routerLink"],["animation","spinner",1,"cover-image","add-overlay",3,"display","src"],[3,"ratio"],[1,"cover-icon-wrapper"],[1,"item-icon",3,"src"],[1,"info-row"],[1,"description-col"],[1,"description-wrapper"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],[3,"data"],[1,"item-address"],[1,"item-tags"],["class","tag-wrapper",4,"ngFor","ngForOf"],["size","2",1,"stats-col"],[1,"item-rating"],[1,"item-price-range"],["class","price",4,"ngFor","ngForOf"],["class","no-price",4,"ngFor","ngForOf"],[1,"pictures-row"],["class","picture-wrapper","size","2",4,"ngFor","ngForOf"],[1,"tag-wrapper"],[1,"item-tag"],[1,"price"],[1,"no-price"],["size","2",1,"picture-wrapper"],[1,"picture-image",3,"src","alt"],["class","has-more-pictures",3,"routerLink",4,"ngIf"],[1,"has-more-pictures",3,"routerLink"],[1,"pictures-count"]],template:function(n,t){1&n&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar",0),d.Qb(2,"ion-buttons",1),d.Lb(3,"ion-back-button",2),d.Pb(),d.Qb(4,"ion-title"),d.yc(5,"Food Listing"),d.Pb(),d.Pb(),d.Pb(),d.Qb(6,"ion-content",3),d.wc(7,Q,2,1,"ng-container",4),d.Pb()),2&n&&(d.zb(7),d.jc("ngIf",null==t.listing?null:t.listing.items))},directives:[a.l,a.T,a.h,a.d,a.e,a.R,a.k,o.m,o.l,r.h,a.ab,m.a,u.a,a.C,a.j,P.a],pipes:[C.a],styles:['[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-pictures-gutter:calc(var(--page-margin)/4);--page-tags-gutter:4px;--page-rating-5-color:#7ce198;--page-rating-4-color:#a8e07c;--page-rating-3-color:#cee07c;--page-rating-2-color:#e0c77c;--page-rating-1-color:#e07c7c;--page-color:#ebbb00;--page-color-rgb:235,187,0}.food-listing-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]{border-bottom:2px solid var(--ion-color-medium-tint);margin-bottom:calc(var(--page-margin)*2);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]:last-child{border-bottom:none;margin-bottom:0}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]{margin-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-icon-wrapper[_ngcontent-%COMP%]{margin:0 20%;display:flex;height:100%;justify-content:center;align-items:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter)*-1);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:after, .listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]{height:100%;justify-content:space-between;flex-direction:column}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark-tint);font-size:20px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:5px 0 0;color:var(--ion-color-medium-tint);font-size:12px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]{margin-top:5px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]{padding-right:var(--page-tags-gutter);flex-grow:0;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child{padding-right:0}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%]{display:block;border-radius:var(--app-narrow-radius);border:1px solid var(--ion-color-light-shade);padding:calc(var(--page-tags-gutter)/2) var(--page-tags-gutter);font-size:10px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]{padding-left:calc(var(--page-margin)/2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]{background-color:rgba(var(--page-color-rgb),.35);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:calc(var(--page-margin)/3) calc(var(--page-margin)/2);font-size:12px;font-weight:600;width:100%;display:block;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="1"][_ngcontent-%COMP%]{background-color:var(--page-rating-1-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="2"][_ngcontent-%COMP%]{background-color:var(--page-rating-2-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="3"][_ngcontent-%COMP%]{background-color:var(--page-rating-3-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="4"][_ngcontent-%COMP%]{background-color:var(--page-rating-4-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="5"][_ngcontent-%COMP%]{background-color:var(--page-rating-5-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]{margin-top:5px;font-size:12px;letter-spacing:1px;font-weight:500;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%]{color:rgba(var(--ion-color-light-shade-rgb),.4)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter)*-1)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]{padding:0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;margin:0 var(--page-pictures-gutter);background-color:rgba(var(--page-color-rgb),.7);border-radius:var(--app-narrow-radius);display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:2}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]{font-size:22px;color:var(--ion-color-lightest);font-weight:600}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]:before{content:"+";font-size:26px;color:var(--ion-color-lightest);font-weight:600}',"[_nghost-%COMP%]{--shell-color:#ebbb00;--shell-color-rgb:235,187,0}app-image-shell.cover-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius);--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-overlay-background:transparent;--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}app-image-shell.item-icon[_ngcontent-%COMP%]{--image-shell-loading-background:transparent}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.25);--text-shell-line-height:20px;max-width:30%}.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:12px;max-width:50%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-tag[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:10px;min-width:30px}.item-tag[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.item-rating[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:12px}app-image-shell.picture-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-narrow-radius);--image-shell-loading-background:rgba(var(--shell-color-rgb),.20)}"]}),L),S=((j=function(){function n(t){_classCallCheck(this,n),this.foodService=t}return _createClass(n,[{key:"resolve",value:function(){var n=this.foodService.getListingDataSource();return this.foodService.getListingStore(n)}}]),n}()).\u0275fac=function(n){return new(n||j)(d.Ub(l.a))},j.\u0275prov=d.Gb({token:j,factory:j.\u0275fac}),j),$=[{path:"",component:B,resolve:{data:S}}],I=((F=function n(){_classCallCheck(this,n)}).\u0275mod=d.Ib({type:F}),F.\u0275inj=d.Hb({factory:function(n){return new(n||F)},providers:[S,l.a],imports:[[o.c,i.f,a.U,r.i.forChild($),g.a,s.a,c.b]]}),F)}}]);