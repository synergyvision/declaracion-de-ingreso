(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+Dkm":function(n,t,e){"use strict";e.r(t),e.d(t,"RealEstateListingPageModule",(function(){return Q}));var o=e("ofXK"),i=e("3Pt+"),c=e("tyNb"),a=e("tk/3"),s=e("TEn/"),r=e("j1ZV"),l=e("r7vE"),g=e("evT8"),m=e("FUeK"),p=e("fXoL"),d=e("2gss"),b=e("B7gC"),P=e("zK/y");function O(n,t){1&n&&p.Lb(0,"ion-icon",31)}function C(n,t){1&n&&p.Lb(0,"ion-icon",32)}function M(n,t){if(1&n&&p.Lb(0,"ion-icon",41),2&n){const n=p.cc().$implicit;p.jc("src",n.icon)}}function _(n,t){if(1&n&&(p.Qb(0,"ion-col",38),p.wc(1,M,1,1,"ion-icon",39),p.Qb(2,"span",40),p.Lb(3,"app-text-shell",16),p.Pb(),p.Pb()),2&n){const n=t.$implicit;p.zb(1),p.jc("ngIf",n.icon),p.zb(2),p.jc("data",n.name)}}function u(n,t){if(1&n&&(p.Qb(0,"ion-col",42),p.Qb(1,"span",43),p.yc(2),p.Pb(),p.Pb()),2&n){const n=p.cc(2).$implicit;p.zb(2),p.Ac("+",n.amenities.length-4,"")}}function h(n,t){if(1&n&&(p.Qb(0,"ion-col",33),p.Qb(1,"h5",34),p.yc(2,"Amenities"),p.Pb(),p.Qb(3,"ion-row",35),p.Ob(4),p.wc(5,_,4,2,"ion-col",36),p.wc(6,u,3,1,"ion-col",37),p.Nb(),p.Pb(),p.Pb()),2&n){const n=p.cc().$implicit,t=p.cc();p.zb(5),p.jc("ngForOf",n.amenities.slice(0,4)),p.zb(1),p.jc("ngIf",3==t.i&&n.amenities.length>4)}}const w=function(n){return["/app/categories/real-estate/",n]},f=function(){return{w:365,h:125}};function v(n,t){if(1&n&&(p.Qb(0,"div",5),p.Qb(1,"ion-row",6),p.Qb(2,"ion-col",7),p.Qb(3,"a",8),p.Qb(4,"app-image-shell",9),p.Lb(5,"app-aspect-ratio",10),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(6,"ion-row",11),p.Qb(7,"ion-col",12),p.Qb(8,"ion-row",13),p.Qb(9,"ion-col"),p.Qb(10,"h4",14),p.Qb(11,"span",15),p.yc(12,"$"),p.Pb(),p.Lb(13,"app-text-shell",16),p.Pb(),p.Qb(14,"p",17),p.Lb(15,"app-text-shell",16),p.Pb(),p.Pb(),p.Qb(16,"ion-col",18),p.wc(17,O,1,0,"ion-icon",19),p.wc(18,C,1,0,"ion-icon",20),p.Pb(),p.Pb(),p.Pb(),p.Qb(19,"ion-col",21),p.Qb(20,"ion-row",22),p.Qb(21,"ion-col",23),p.Lb(22,"ion-icon",24),p.Qb(23,"span",25),p.yc(24,"Guests"),p.Pb(),p.Qb(25,"span",26),p.Lb(26,"app-text-shell",16),p.Pb(),p.Pb(),p.Qb(27,"ion-col",23),p.Lb(28,"ion-icon",27),p.Qb(29,"span",25),p.yc(30,"Bedrooms"),p.Pb(),p.Qb(31,"span",26),p.Lb(32,"app-text-shell",16),p.Pb(),p.Pb(),p.Qb(33,"ion-col",23),p.Lb(34,"ion-icon",28),p.Qb(35,"span",25),p.yc(36,"Bathrooms"),p.Pb(),p.Qb(37,"span",26),p.Lb(38,"app-text-shell",16),p.Pb(),p.Pb(),p.Qb(39,"ion-col",23),p.Lb(40,"ion-icon",29),p.Qb(41,"span",25),p.yc(42,"Patios"),p.Pb(),p.Qb(43,"span",26),p.Lb(44,"app-text-shell",16),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.wc(45,h,7,2,"ion-col",30),p.Pb(),p.Pb()),2&n){const n=t.$implicit;p.zb(3),p.jc("routerLink",p.mc(13,w,n.slug)),p.zb(1),p.jc("display","cover")("src",n.picture),p.zb(1),p.jc("ratio",p.lc(15,f)),p.zb(8),p.jc("data",n.price),p.zb(2),p.jc("data",n.address),p.zb(2),p.jc("ngIf",n.liked),p.zb(1),p.jc("ngIf",!n.liked),p.zb(8),p.jc("data",null==n.accommodations?null:n.accommodations.guests),p.zb(6),p.jc("data",null==n.accommodations?null:n.accommodations.bedrooms),p.zb(6),p.jc("data",null==n.accommodations?null:n.accommodations.bathrooms),p.zb(6),p.jc("data",null==n.accommodations?null:n.accommodations.patios),p.zb(1),p.jc("ngIf",n.amenities)}}let x=(()=>{class n{constructor(n){this.route=n}get isShell(){return!(!this.listing||!this.listing.isShell)}ngOnInit(){this.subscriptions=this.route.data.subscribe(n=>{this.subscriptions=g.a.extractData(n.data,m.a).subscribe(n=>{this.listing=n},n=>{})},n=>{})}ionViewWillLeave(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(p.Kb(c.a))},n.\u0275cmp=p.Eb({type:n,selectors:[["app-real-estate-listing"]],hostVars:2,hostBindings:function(n,t){2&n&&p.Bb("is-shell",t.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"real-estate-listing-content"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"image-row"],["size","12"],[1,"image-anchor",3,"routerLink"],["animation","spinner",1,"item-picture",3,"display","src"],[3,"ratio"],[1,"description-row"],["size","12",1,"details-col"],[1,"details-wrapper"],[1,"item-price"],[1,"price-icon"],[3,"data"],[1,"item-address"],["size","2",1,"bookmark-col"],["class","like-icon","name","heart",4,"ngIf"],["class","like-icon","name","heart-outline",4,"ngIf"],["size","12",1,"accommodations-col"],[1,"accommodations-wrapper"],[1,"item-accommodation"],["src","./assets/custom-icons/real-estate/guests.svg",1,"accommodation-icon"],[1,"accommodation-property"],[1,"accommodation-value"],["src","./assets/custom-icons/real-estate/bedrooms.svg",1,"accommodation-icon"],["src","./assets/custom-icons/real-estate/bathroom.svg",1,"accommodation-icon"],["src","./assets/custom-icons/real-estate/patio.svg",1,"accommodation-icon"],["size","12","class","amenities-col",4,"ngIf"],["name","heart",1,"like-icon"],["name","heart-outline",1,"like-icon"],["size","12",1,"amenities-col"],[1,"amenities-title"],[1,"amenities-wrapper"],["class","item-amenity","size","4",4,"ngFor","ngForOf"],["class","has-more-amenities",4,"ngIf"],["size","4",1,"item-amenity"],["class","amenity-icon",3,"src",4,"ngIf"],[1,"amenity-value"],[1,"amenity-icon",3,"src"],[1,"has-more-amenities"],[1,"amenities-count"]],template:function(n,t){1&n&&(p.Qb(0,"ion-header"),p.Qb(1,"ion-toolbar",0),p.Qb(2,"ion-buttons",1),p.Lb(3,"ion-back-button",2),p.Pb(),p.Qb(4,"ion-title"),p.yc(5,"Real Estate Listing"),p.Pb(),p.Pb(),p.Pb(),p.Qb(6,"ion-content",3),p.wc(7,v,46,16,"div",4),p.Pb()),2&n&&(p.zb(7),p.jc("ngForOf",t.listing.items))},directives:[s.l,s.T,s.h,s.d,s.e,s.R,s.k,o.l,s.C,s.j,c.h,s.ab,d.a,b.a,P.a,o.m,s.m],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-amenity-vertical-gutter:6px;--page-amenity-horizontal-gutter:4px;--page-color:#d9453a}.real-estate-listing-content[_ngcontent-%COMP%]{--background:var(--page-background)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) var(--page-margin) 0}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{justify-content:space-between}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]{margin:0 0 5px;font-weight:500;color:var(--ion-color-dark-tint);display:flex;align-items:center}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%]{margin-right:5px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%]{font-size:32px;color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]{padding:0 var(--page-margin) var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]{padding-top:calc(var(--page-margin))}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%] + .item-accommodation[_ngcontent-%COMP%]{padding-left:calc(var(--page-margin)/2*3)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-property[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%]{display:inline-block;font-weight:400;font-size:14px;color:var(--ion-color-medium-tint);margin-top:4px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%]{display:inline-block;font-size:12px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);font-size:30px}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]{padding:0 var(--page-margin) calc(var(--page-margin)/2);background:var(--app-background-shade)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-title[_ngcontent-%COMP%]{margin:var(--page-margin) 0 calc(var(--page-margin)/2);font-size:12px;text-transform:uppercase;letter-spacing:1px;color:var(--ion-color-medium-shade)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]{margin:0 calc(var(--page-amenity-horizontal-gutter)*-1)}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]{padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);display:flex;align-items:center;justify-content:center}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);font-size:30px;flex-shrink:0}.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-value[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:12px;color:var(--ion-color-medium-tint);margin-left:calc(var(--page-amenity-horizontal-gutter)*2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}","[_nghost-%COMP%]{--shell-color:#d9453a;--shell-color-rgb:217,69,58}app-image-shell.item-picture[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}.item-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.25);min-width:50px;max-width:100px}.item-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:14px;max-width:60%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.accommodation-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:14px;min-width:30px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.amenity-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.05);--text-shell-line-height:12px;min-width:50px}.amenity-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}"]}),n})(),y=(()=>{class n{constructor(n){this.realEstateService=n}resolve(){const n=this.realEstateService.getListingDataSource();return this.realEstateService.getListingStore(n)}}return n.\u0275fac=function(t){return new(t||n)(p.Ub(l.a))},n.\u0275prov=p.Gb({token:n,factory:n.\u0275fac}),n})();const z=[{path:"",component:x,resolve:{data:y}}];let Q=(()=>{class n{}return n.\u0275mod=p.Ib({type:n}),n.\u0275inj=p.Hb({factory:function(t){return new(t||n)},providers:[y,l.a],imports:[[o.c,i.f,s.U,c.i.forChild(z),r.a,a.b]]}),n})()},evT8:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var o=e("f/Ol"),i=e("LRne");class c{static extractData(n,t){return n instanceof o.a?n.state:n instanceof t?Object(i.a)(n):void 0}}}}]);