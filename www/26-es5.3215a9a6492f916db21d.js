function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"HbU+":function(n,t,e){"use strict";e.r(t),e.d(t,"TravelListingPageModule",(function(){return Q}));var i=e("ofXK"),o=e("3Pt+"),a=e("tyNb"),c=e("tk/3"),r=e("TEn/"),s=e("j1ZV"),g=e("v0Fq"),l=e("evT8"),m=e("8zxt"),p=e("fXoL"),b=e("2gss"),u=e("B7gC"),d=e("zK/y"),f=function(n){return["/app/categories/travel/",n]},P=function(){return{w:3,h:2}},C=function(){return{w:1,h:1}};function h(n,t){if(1&n&&(p.Qb(0,"div",5),p.Qb(1,"ion-row",6),p.Qb(2,"ion-col",7),p.Qb(3,"app-image-shell",8),p.Qb(4,"app-aspect-ratio",9),p.Qb(5,"div",10),p.Qb(6,"div",11),p.Qb(7,"app-aspect-ratio",9),p.Lb(8,"app-image-shell",12),p.Pb(),p.Pb(),p.Qb(9,"div",13),p.Qb(10,"span"),p.yc(11,"Explore"),p.Pb(),p.Lb(12,"ion-icon",14),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(13,"ion-row",15),p.Qb(14,"ion-col",16),p.Qb(15,"h3",17),p.Qb(16,"a",18),p.Lb(17,"app-text-shell",19),p.Pb(),p.Pb(),p.Qb(18,"p",20),p.Lb(19,"app-text-shell",21),p.Pb(),p.Qb(20,"p",22),p.Lb(21,"app-text-shell",19),p.Pb(),p.Pb(),p.Pb(),p.Qb(22,"ion-row",23),p.Qb(23,"ion-col",24),p.Qb(24,"span",25),p.Lb(25,"app-text-shell",26),p.Pb(),p.Lb(26,"ion-icon",27),p.Pb(),p.Qb(27,"ion-col",28),p.Qb(28,"span",29),p.Lb(29,"app-text-shell",26),p.Pb(),p.Lb(30,"ion-icon",30),p.Pb(),p.Pb(),p.Pb()),2&n){var e=t.$implicit;p.zb(3),p.jc("display","cover")("src",e.image)("routerLink",p.mc(12,f,e.slug)),p.zb(1),p.jc("ratio",p.lc(14,P)),p.zb(3),p.jc("ratio",p.lc(15,C)),p.zb(1),p.jc("src",e.icon),p.zb(8),p.jc("routerLink",p.mc(16,f,e.slug)),p.zb(1),p.jc("data",null!=e&&e.name&&null!=e&&e.category?e.name+" - "+e.category:e.name),p.zb(2),p.jc("data",e.description),p.zb(2),p.jc("data",e.address),p.zb(4),p.jc("data",e.rating),p.zb(4),p.jc("data",e.reviewsCount)}}function _(n,t){if(1&n&&(p.Ob(0),p.wc(1,h,31,18,"div",4),p.Nb()),2&n){var e=p.cc();p.zb(1),p.jc("ngForOf",e.listing.items)}}var v,O,M,w,x=((M=function(){function n(t){_classCallCheck(this,n),this.route=t}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.subscriptions=this.route.data.subscribe((function(t){n.subscriptions=l.a.extractData(t.data,m.a).subscribe((function(t){n.listing=t}),(function(n){}))}),(function(n){}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.listing||!this.listing.isShell)}}]),n}()).\u0275fac=function(n){return new(n||M)(p.Kb(a.a))},M.\u0275cmp=p.Eb({type:M,selectors:[["app-travel-listing"]],hostVars:2,hostBindings:function(n,t){2&n&&p.Bb("is-shell",t.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[4,"ngIf"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"image-row"],["size","12"],[1,"add-overlay","item-image",3,"display","src","routerLink"],[3,"ratio"],[1,"content-inside-item-image"],[1,"item-icon"],[1,"icon-image",3,"src"],[1,"item-cta"],["name","arrow-forward",1,"cta-icon"],[1,"info-row"],[1,"main-info-col"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],["animation","bouncing",3,"data"],[1,"item-description"],["animation","bouncing","lines","3",3,"data"],[1,"item-address"],[1,"stats-row"],["size","2",1,"item-rating"],[1,"rating-value"],[3,"data"],["src","./assets/custom-icons/travel/star.svg",1,"stats-icon"],["size","2",1,"item-reviews"],[1,"reviews-count"],["src","./assets/custom-icons/travel/comments.svg",1,"stats-icon"]],template:function(n,t){1&n&&(p.Qb(0,"ion-header"),p.Qb(1,"ion-toolbar",0),p.Qb(2,"ion-buttons",1),p.Lb(3,"ion-back-button",2),p.Pb(),p.Qb(4,"ion-title"),p.yc(5,"Travel Listing"),p.Pb(),p.Pb(),p.Pb(),p.Qb(6,"ion-content"),p.wc(7,_,2,1,"ng-container",3),p.Pb()),2&n&&(p.zb(7),p.jc("ngIf",null==t.listing?null:t.listing.items))},directives:[r.l,r.T,r.h,r.d,r.e,r.R,r.k,i.m,i.l,r.C,r.j,b.a,r.ab,a.g,u.a,r.m,a.h,d.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-color:#00afff}.listing-item[_ngcontent-%COMP%]{padding:0 0 var(--page-margin);background-color:var(--page-background);border-bottom:calc(var(--page-margin)/2) solid var(--page-color)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{cursor:pointer}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]:focus{outline:none}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]{padding:0 12%;height:100%;display:flex;justify-content:center;flex-direction:column}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{width:54px;align-self:center;margin-bottom:24px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%]{margin:0 auto;padding:calc(var(--page-margin)/2) calc(var(--page-margin));text-transform:uppercase;font-size:20px;font-weight:700;text-align:center;color:var(--ion-color-light);display:flex;align-items:center;background-color:var(--page-color);border-radius:var(--app-fair-radius)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]{font-size:26px;margin-left:calc(var(--page-margin)/2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);padding-bottom:calc(var(--page-margin)/2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .main-info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin)/2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0 0 var(--page-margin);text-transform:capitalize;font-size:16px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{color:var(--ion-color-dark);display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{margin:0 0 calc(var(--page-margin)/2);color:var(--ion-color-dark-shade);font-size:14px;line-height:1.3}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark-tint);font-size:12px}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:0 var(--page-margin);justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]{font-size:24px}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]{display:inline-flex;text-align:center;justify-content:flex-end;margin-right:10px}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%]{font-size:16px;margin:auto}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%]{display:inline-flex;text-align:center;justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%]   .reviews-count[_ngcontent-%COMP%]{font-size:16px;margin:auto}","[_nghost-%COMP%]{--shell-color:#00afff;--shell-color-rgb:0,175,255}app-image-shell.item-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-overlay-background:rgba(var(--ion-color-dark-rgb),.60)}app-image-shell.icon-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.15)}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:70%}.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:12px;max-width:60%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.rating-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%], .reviews-count[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;min-width:30px}"]}),M),k=((O=function(){function n(t){_classCallCheck(this,n),this.travelService=t}return _createClass(n,[{key:"resolve",value:function(){var n=this.travelService.getListingDataSource();return this.travelService.getListingStore(n)}}]),n}()).\u0275fac=function(n){return new(n||O)(p.Ub(g.a))},O.\u0275prov=p.Gb({token:O,factory:O.\u0275fac}),O),y=((v=function(){function n(t){_classCallCheck(this,n),this.travelService=t}return _createClass(n,[{key:"resolve",value:function(){return this.travelService.getListingDataSource()}}]),n}()).\u0275fac=function(n){return new(n||v)(p.Ub(g.a))},v.\u0275prov=p.Gb({token:v,factory:v.\u0275fac}),v),z=[{path:"",component:x,resolve:{data:k}}],Q=((w=function n(){_classCallCheck(this,n)}).\u0275mod=p.Ib({type:w}),w.\u0275inj=p.Hb({factory:function(n){return new(n||w)},providers:[k,y,g.a],imports:[[i.c,o.f,r.U,a.i.forChild(z),s.a,c.b]]}),w)},evT8:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var i=e("f/Ol"),o=e("LRne"),a=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"extractData",value:function(n,t){return n instanceof i.a?n.state:n instanceof t?Object(o.a)(n):void 0}}]),n}()}}]);