function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{pvlM:function(e,n,t){"use strict";t.r(n),t.d(n,"DealsDetailsPageModule",(function(){return I}));var a=t("ofXK"),o=t("3Pt+"),i=t("tyNb"),l=t("tk/3"),r=t("TEn/"),c=t("j1ZV"),s=t("iTUp"),d=t("y+sA"),p=t("evT8"),g=t("UG6G"),b=t("fXoL"),m=t("B7gC"),u=t("2gss"),P=t("zK/y"),h=t("dAQS"),C=t("ykzn"),_=function(){return{from:"hour",to:"second"}};function O(e,n){if(1&e&&(b.Qb(0,"ion-row",34),b.Qb(1,"span",35),b.yc(2,"Deal expires in:"),b.Pb(),b.Lb(3,"app-countdown-timer",36),b.Pb()),2&e){var t=b.cc();b.zb(3),b.jc("end",null==t.details?null:t.details.expirationDate)("units",b.lc(2,_))}}var M=function(){return{w:56,h:40}};function w(e,n){if(1&e&&(b.Qb(0,"ion-slide",37),b.Qb(1,"ion-row",38),b.Qb(2,"app-aspect-ratio",11),b.Lb(3,"app-image-shell",39),b.Pb(),b.Pb(),b.Pb()),2&e){var t=n.$implicit;b.zb(2),b.jc("ratio",b.lc(3,M)),b.zb(1),b.jc("src",t)("alt","deals details")}}var f=function(){return{w:1,h:1}};function v(e,n){if(1&e&&(b.Qb(0,"ion-row",43),b.Qb(1,"ion-col",44),b.Qb(2,"app-aspect-ratio",11),b.Lb(3,"app-image-shell",45),b.Pb(),b.Pb(),b.Qb(4,"ion-col",46),b.Qb(5,"h4",47),b.Lb(6,"app-text-shell",27),b.Pb(),b.Qb(7,"p",48),b.Lb(8,"app-text-shell",27),b.Pb(),b.Pb(),b.Pb()),2&e){var t=n.$implicit;b.zb(2),b.jc("ratio",b.lc(5,f)),b.zb(1),b.jc("src",t.logo)("alt","deals logo"),b.zb(3),b.jc("data",null==t?null:t.name),b.zb(2),b.jc("data",null==t?null:t.description)}}function x(e,n){if(1&e&&(b.Qb(0,"div",40),b.Qb(1,"h3",41),b.yc(2,"More hot deals"),b.Pb(),b.wc(3,v,9,6,"ion-row",42),b.Pb()),2&e){var t=b.cc();b.zb(3),b.jc("ngForOf",t.details.relatedDeals)}}var z,k,y,Q=function(e,n,t,a){return{ended:e,"imminent-end":n,"ends-soon":t,"distant-end":a}},D=function(){return{w:128,h:32}},j=((k=function(){function e(n){_classCallCheck(this,e),this.route=n,this.slidesOptions={zoom:{toggle:!1}}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions=this.route.data.subscribe((function(n){e.subscriptions=p.a.extractData(n.data,g.a).subscribe((function(n){e.details=n}),(function(e){}))}),(function(e){}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.details||!this.details.isShell)}}]),e}()).\u0275fac=function(e){return new(e||k)(b.Kb(i.a))},k.\u0275cmp=b.Eb({type:k,selectors:[["app-deals-details"]],hostVars:2,hostBindings:function(e,n){2&e&&b.Bb("is-shell",n.isShell)},decls:57,vars:46,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories/deals"],[1,"deals-details-content",3,"ngClass"],["class","expiration-countdown",4,"ngIf"],[1,"details-wrapper"],[1,"slider-row"],["pager","true",1,"details-slides",3,"options"],["class","",4,"ngFor","ngForOf"],[1,"description-row"],["size","6",1,"logo-col"],[3,"ratio"],["animation","spinner",1,"logo-image",3,"src","alt"],["size","9",1,"info-col"],[1,"details-name"],["animation","bouncing",3,"data"],[1,"details-description"],["animation","bouncing","lines","3",3,"data"],["size","3",1,"preview-image-col"],["animation","spinner",1,"preview-image",3,"src","alt"],[1,"promo-row"],[1,"promo-title"],["size","8"],[1,"promo-description"],["size","6"],["expand","block","shape","round","fill","outline","color","claim",1,"promo-code-btn"],[1,"promo-code"],[3,"data"],[1,"promo-instructions"],["target","_blank","href","https://google.com/search?q=chocolate",1,"instructions-anchor"],[1,"expiration-notice"],[1,"notice-message"],[1,"expiration-value"],["class","related-deals-wrapper",4,"ngIf"],[1,"expiration-countdown"],[1,"expiration-lead"],["fill","countdown",1,"item-countdown",3,"end","units"],[1,""],[1,"slide-inner-row"],["animation","spinner",1,"showcase-image",3,"src","alt"],[1,"related-deals-wrapper"],[1,"related-deals-title"],["class","related-deal",4,"ngFor","ngForOf"],[1,"related-deal"],["size","4",1,"deal-logo-wrapper"],["animation","spinner",1,"related-deal-logo",3,"src","alt"],["size","8",1,"deal-info-wrapper"],[1,"related-deal-title"],[1,"related-deal-description"]],template:function(e,n){1&e&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar",0),b.Qb(2,"ion-buttons",1),b.Lb(3,"ion-back-button",2),b.Pb(),b.Qb(4,"ion-title"),b.yc(5,"Deals Details"),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content",3),b.dc(7,"appTimeDifference"),b.dc(8,"appTimeDifference"),b.dc(9,"appTimeDifference"),b.dc(10,"appTimeDifference"),b.dc(11,"appTimeDifference"),b.dc(12,"appTimeDifference"),b.dc(13,"appTimeDifference"),b.wc(14,O,4,3,"ion-row",4),b.dc(15,"appTimeDifference"),b.dc(16,"appTimeDifference"),b.Qb(17,"div",5),b.Qb(18,"ion-row",6),b.Qb(19,"ion-slides",7),b.wc(20,w,4,4,"ion-slide",8),b.Pb(),b.Pb(),b.Qb(21,"ion-row",9),b.Qb(22,"ion-col",10),b.Qb(23,"app-aspect-ratio",11),b.Lb(24,"app-image-shell",12),b.Pb(),b.Pb(),b.Qb(25,"ion-col",13),b.Qb(26,"h4",14),b.Lb(27,"app-text-shell",15),b.Pb(),b.Qb(28,"p",16),b.Lb(29,"app-text-shell",17),b.Pb(),b.Pb(),b.Qb(30,"ion-col",18),b.Qb(31,"app-aspect-ratio",11),b.Lb(32,"app-image-shell",19),b.Pb(),b.Pb(),b.Pb(),b.Qb(33,"ion-row",20),b.Qb(34,"h3",21),b.yc(35,"Copy the Code"),b.Pb(),b.Qb(36,"ion-col",22),b.Qb(37,"p",23),b.yc(38," Paste this code at checkout to get an extra 50% off "),b.Pb(),b.Pb(),b.Qb(39,"ion-col",24),b.Qb(40,"ion-button",25),b.Qb(41,"span",26),b.Lb(42,"app-text-shell",27),b.Pb(),b.Pb(),b.Pb(),b.Qb(43,"ion-col",22),b.Qb(44,"p",28),b.yc(45," Go to "),b.Qb(46,"a",29),b.yc(47,"lancasternutcandy.com"),b.Pb(),b.yc(48," and paste the code at checkout. "),b.Pb(),b.Pb(),b.Pb(),b.Qb(49,"div",30),b.Qb(50,"span",31),b.yc(51),b.dc(52,"appTimeDifference"),b.Pb(),b.Qb(53,"span",32),b.Lb(54,"app-text-shell",27),b.dc(55,"date"),b.Pb(),b.Pb(),b.Pb(),b.wc(56,x,4,1,"div",33),b.Pb()),2&e&&(b.zb(6),b.jc("ngClass",b.oc(39,Q,b.ec(7,16,null==n.details?null:n.details.expirationDate)<0,b.ec(8,18,null==n.details?null:n.details.expirationDate)>0&&b.ec(9,20,null==n.details?null:n.details.expirationDate)<=2,b.ec(10,22,null==n.details?null:n.details.expirationDate)>0&&b.ec(11,24,null==n.details?null:n.details.expirationDate)>2&&b.ec(12,26,null==n.details?null:n.details.expirationDate)<10,b.ec(13,28,null==n.details?null:n.details.expirationDate)>=10)),b.zb(8),b.jc("ngIf",b.ec(15,30,null==n.details?null:n.details.expirationDate)>0&&b.ec(16,32,null==n.details?null:n.details.expirationDate)<=2),b.zb(5),b.jc("options",n.slidesOptions),b.zb(1),b.jc("ngForOf",null==n.details?null:n.details.showcaseImages),b.zb(3),b.jc("ratio",b.lc(44,D)),b.zb(1),b.jc("src",null==n.details?null:n.details.logo)("alt","deals details"),b.zb(3),b.jc("data",null==n.details?null:n.details.name),b.zb(2),b.jc("data",null==n.details?null:n.details.description),b.zb(2),b.jc("ratio",b.lc(45,f)),b.zb(1),b.jc("src",null==n.details?null:n.details.previewImage)("alt","deals details"),b.zb(10),b.jc("data",null==n.details?null:n.details.code),b.zb(9),b.Ac("Cupon ",b.ec(52,34,null==n.details?null:n.details.expirationDate)<0?"expired":"expires"," on:"),b.zb(3),b.jc("data",b.fc(55,36,null==n.details?null:n.details.expirationDate,"mediumDate")),b.zb(2),b.jc("ngIf",(null==n.details?null:n.details.relatedDeals)&&n.details.relatedDeals.length>0))},directives:[r.l,r.T,r.h,r.d,r.e,r.R,r.k,a.k,a.m,r.C,r.J,a.l,r.j,m.a,u.a,P.a,r.g,h.a,r.I],pipes:[C.a,a.f],styles:['@charset "UTF-8";[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-swiper-pagination-space:30px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-countdown-fill-shadow-color:rgba(var(--ion-color-darkest-rgb),0.2);--page-expired-color:var(--ion-color-medium-tint);--page-ends-soon-color:#ffab6b;--page-distant-end-color:#70df70;--page-deal-color:var(--ion-color-medium);--page-color:#70df70;--ion-color-claim:#70df70;--ion-color-claim-rgb:112,223,112;--ion-color-claim-contrast:#fff;--ion-color-claim-contrast-rgb:255,255,255;--ion-color-claim-shade:#63c463;--ion-color-claim-tint:#7ee27e}[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-claim)!important;--ion-color-base-rgb:var(--ion-color-claim-rgb)!important;--ion-color-contrast:var(--ion-color-claim-contrast)!important;--ion-color-contrast-rgb:var(--ion-color-claim-contrast-rgb)!important;--ion-color-shade:var(--ion-color-claim-shade)!important;--ion-color-tint:var(--ion-color-claim-tint)!important}.deals-details-content[_ngcontent-%COMP%]{--background:var(--page-background)}.deals-details-content.ended[_ngcontent-%COMP%]{--page-deal-color:var(--page-expired-color)}.deals-details-content.imminent-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color)}.deals-details-content.ends-soon[_ngcontent-%COMP%]{--page-deal-color:var(--page-ends-soon-color)}.deals-details-content.distant-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color)}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]{color:var(--ion-color-lightest);background-color:var(--ion-color-danger);padding:calc(var(--page-margin)/2) var(--page-margin);position:-webkit-sticky;position:sticky;top:0;z-index:8;text-align:center;justify-content:center;align-items:center}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   .expiration-lead[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin)/2);text-transform:uppercase;font-weight:500;font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%]{--countdown-margin:0px;--countdown-padding:0px 3px;--countdown-time-margin:0px 2px;--countdown-time-padding:0px 2px;--countdown-inner-time-margin:0px 2px 0px 0px;--countdown-inner-time-padding:calc(var(--page-margin)/2) 0px;--countdown-fill-border:none;--countdown-fill-border-radius:var(--app-narrow-radius);--countdown-fill-background:var(--ion-color-lightest);--countdown-fill-shadow:0px 0px 5px 0px var(--page-countdown-fill-shadow-color);--countdown-value-color:var(--ion-color-darkest);--countdown-unit-color:var(--ion-color-medium-shade);padding:0 calc(var(--page-margin)/4);font-size:14px;font-weight:500}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{margin:var(--page-margin);border-radius:var(--app-broad-radius);background-color:var(--ion-color-lightest)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-primary);--bullet-background-active:var(--ion-color-primary);height:100%;width:100%;border-radius:var(--app-broad-radius) var(--app-broad-radius) 0 0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-bottom:var(--page-swiper-pagination-space);box-sizing:border-box}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:calc(var(--page-margin)/2) var(--page-margin) var(--page-margin);border-bottom:2px dashed rgba(var(--ion-color-dark-rgb),.1);align-items:center}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%]{padding-bottom:calc(var(--page-margin)/2)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin)/2)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin)/2);color:var(--ion-color-dark-tint);font-size:16px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);text-align:center;justify-content:center}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]{font-size:22px;font-weight:300;text-transform:uppercase;letter-spacing:4px;color:var(--ion-color-dark-tint);margin:0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]:after, .deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]:before{content:"\xb7";color:var(--ion-color-dark-tint)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%]{margin:var(--page-margin) 0;color:var(--ion-color-medium-tint);font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code-btn[_ngcontent-%COMP%]{margin:0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code[_ngcontent-%COMP%]{display:block;font-size:14px;line-height:1}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0;color:var(--ion-color-medium-tint);font-size:12px;line-height:1.4}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]   .instructions-anchor[_ngcontent-%COMP%]{color:var(--page-color);text-decoration:none}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]{background-color:var(--page-deal-color);padding:calc(var(--page-margin)/2) var(--page-margin);color:var(--ion-color-lightest);border-radius:0 0 var(--app-broad-radius) var(--app-broad-radius);display:flex;justify-content:space-evenly}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .notice-message[_ngcontent-%COMP%]{display:block;margin-right:5px;text-transform:capitalize}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%]{display:block}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*3) var(--page-margin) calc(var(--page-margin)*2)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deals-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:400;text-transform:uppercase;color:var(--ion-color-dark-shade);margin:0 0 var(--page-margin)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;border-radius:var(--app-broad-radius);background-color:var(--ion-color-lightest)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin)/2)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-logo-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/4) var(--page-margin) calc(var(--page-margin)/4) calc(var(--page-margin)/2);border-right:2px dashed rgba(var(--ion-color-dark-rgb),.1)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/4) calc(var(--page-margin)/2) calc(var(--page-margin)/4) var(--page-margin);display:flex;flex-direction:column;justify-content:center}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-title[_ngcontent-%COMP%]{margin:0 0 5px;color:var(--ion-color-dark-tint);font-size:20px}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:16px}[_nghost-%COMP%]     .details-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height))/2)}[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}[_nghost-%COMP%]     app-countdown-timer.item-countdown .time-unit{font-size:.8em}',"[_nghost-%COMP%]{--shell-color:#70df70;--shell-color-rgb:112,223,112}app-image-shell.showcase-image[_ngcontent-%COMP%]{--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}app-image-shell.logo-image[_ngcontent-%COMP%], app-image-shell.showcase-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10)}app-image-shell.logo-image[_ngcontent-%COMP%]{--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.details-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.30);--text-shell-line-height:16px}.details-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:14px}app-image-shell.preview-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.promo-code[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:14px;min-width:80px}.promo-code[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.expiration-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-lightest-rgb),.20);--text-shell-line-height:18px;min-width:60px}.expiration-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}app-image-shell.related-deal-logo[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.related-deal-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.30);--text-shell-line-height:20px;max-width:30%}.related-deal-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.related-deal-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:16px;max-width:50%}.related-deal-description[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),k),T=((z=function(){function e(n){_classCallCheck(this,e),this.dealsService=n}return _createClass(e,[{key:"resolve",value:function(){var e=this.dealsService.getDetailsDataSource();return this.dealsService.getDetailsStore(e)}}]),e}()).\u0275fac=function(e){return new(e||z)(b.Ub(d.a))},z.\u0275prov=b.Gb({token:z,factory:z.\u0275fac}),z),L=[{path:"",component:j,resolve:{data:T}}],I=((y=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ib({type:y}),y.\u0275inj=b.Hb({factory:function(e){return new(e||y)},providers:[T,d.a],imports:[[a.c,o.f,r.U,i.i.forChild(L),c.a,s.a,l.b]]}),y)}}]);