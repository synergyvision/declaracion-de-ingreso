function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{QgiU:function(n,t,e){n.exports=function(){"use strict";return function(n,t,e){n=n||{};var o=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};e.en.relativeTime=i;var a=function(t,o,a,c){for(var r,l,g,s=a.$locale().relativeTime||i,p=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=p.length,m=0;m<d;m+=1){var b=p[m];b.d&&(r=c?e(t).diff(a,b.d,!0):a.diff(t,b.d,!0));var f=(n.rounding||Math.round)(Math.abs(r));if(g=r>0,f<=b.r||!b.r){f<=1&&m>0&&(b=p[m-1]);var u=s[b.l];l="string"==typeof u?u.replace("%d",f):u(f,o,b.l,g);break}}return o?l:(g?s.future:s.past).replace("%s",l)};o.to=function(n,t){return a(n,t,this,!0)},o.from=function(n,t){return a(n,t,this)};var c=function(n){return n.$u?e.utc():e()};o.toNow=function(n){return this.to(c(this),n)},o.fromNow=function(n){return this.from(c(this),n)}}}()},bkrf:function(n,t,e){"use strict";e.r(t),e.d(t,"DealsListingPageModule",(function(){return X}));var o,i=e("ofXK"),a=e("3Pt+"),c=e("tyNb"),r=e("tk/3"),l=e("TEn/"),g=e("j1ZV"),s=e("iTUp"),p=e("y+sA"),d=e("evT8"),m=e("SQnO"),b=e("fXoL"),f=e("B7gC"),u=e("2gss"),h=e("zK/y"),P=e("dAQS"),C=e("ykzn"),w=e("Wgwc"),_=e("QgiU"),M=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"transform",value:function(n){w.extend(_);var t="";if(n){var e=!(w(n).diff(w(),"day")<0);t=w().to(w(n),e)}return t}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275pipe=b.Jb({name:"appTimeAgo",type:o,pure:!0}),o),O=function(n){return["/app/categories/deals/",n]};function x(n,t){if(1&n&&(b.Qb(0,"ion-col",29),b.Qb(1,"ion-button",30),b.Qb(2,"span",31),b.yc(3,"CLAIM"),b.Pb(),b.Lb(4,"ion-icon",32),b.Pb(),b.Pb()),2&n){var e=b.cc().$implicit;b.zb(1),b.jc("routerLink",b.mc(1,O,e.slug))}}function v(n,t){1&n&&(b.Qb(0,"ion-col",29),b.Qb(1,"span",33),b.yc(2,"EXPIRED"),b.Pb(),b.Pb())}function y(n,t){if(1&n&&(b.Ob(0),b.Qb(1,"span",34),b.Lb(2,"app-text-shell",26),b.dc(3,"appTimeAgo"),b.Pb(),b.Nb()),2&n){var e=b.cc().$implicit;b.zb(2),b.jc("data",b.ec(3,1,e.expirationDate))}}var k=function(){return{from:"hour",to:"second"}};function D(n,t){if(1&n&&(b.Ob(0),b.Qb(1,"ion-row",35),b.Lb(2,"app-countdown-timer",36),b.Pb(),b.Nb()),2&n){var e=b.cc().$implicit;b.zb(2),b.jc("end",e.expirationDate)("units",b.lc(2,k))}}var z=function(n,t,e,o){return{ended:n,"imminent-end":t,"ends-soon":e,"distant-end":o}},Q=function(){return{w:128,h:32}},j=function(n){return{expired:n}},T=function(n){return{"countdown-active":n}};function L(n,t){if(1&n&&(b.Qb(0,"div",6),b.dc(1,"appTimeDifference"),b.dc(2,"appTimeDifference"),b.dc(3,"appTimeDifference"),b.dc(4,"appTimeDifference"),b.dc(5,"appTimeDifference"),b.dc(6,"appTimeDifference"),b.dc(7,"appTimeDifference"),b.Qb(8,"ion-row",7),b.Qb(9,"ion-col",8),b.Qb(10,"app-aspect-ratio",9),b.Lb(11,"app-image-shell",10),b.Pb(),b.Pb(),b.wc(12,x,5,3,"ion-col",11),b.dc(13,"appTimeDifference"),b.wc(14,v,3,0,"ion-col",11),b.dc(15,"appTimeDifference"),b.Pb(),b.Qb(16,"ion-row",12),b.Qb(17,"ion-col",13),b.Qb(18,"h4",14),b.Qb(19,"a",15),b.Lb(20,"app-text-shell",16),b.Pb(),b.Pb(),b.Qb(21,"p",17),b.Lb(22,"app-text-shell",18),b.Pb(),b.Pb(),b.Qb(23,"ion-col",19),b.Qb(24,"ion-button",20),b.Lb(25,"ion-icon",21),b.Pb(),b.Pb(),b.Pb(),b.Qb(26,"ion-row",22),b.Qb(27,"ion-col",23),b.Qb(28,"span",24),b.yc(29,"Use this code:"),b.Pb(),b.Qb(30,"span",25),b.dc(31,"appTimeDifference"),b.Lb(32,"app-text-shell",26),b.Pb(),b.Pb(),b.Qb(33,"ion-col",27),b.dc(34,"appTimeDifference"),b.dc(35,"appTimeDifference"),b.Qb(36,"span",28),b.yc(37),b.dc(38,"appTimeDifference"),b.Pb(),b.wc(39,y,4,3,"ng-container",4),b.dc(40,"appTimeDifference"),b.dc(41,"appTimeDifference"),b.wc(42,D,3,3,"ng-container",4),b.dc(43,"appTimeDifference"),b.dc(44,"appTimeDifference"),b.Pb(),b.Pb(),b.Pb()),2&n){var e=t.$implicit;b.jc("ngClass",b.oc(49,z,b.ec(1,15,e.expirationDate)<0,b.ec(2,17,e.expirationDate)>0&&b.ec(3,19,e.expirationDate)<=2,b.ec(4,21,e.expirationDate)>0&&b.ec(5,23,e.expirationDate)>2&&b.ec(6,25,e.expirationDate)<10,b.ec(7,27,e.expirationDate)>=10)),b.zb(10),b.jc("ratio",b.lc(54,Q)),b.zb(1),b.jc("src",e.logo)("alt","deals logo"),b.zb(1),b.jc("ngIf",b.ec(13,29,e.expirationDate)>0),b.zb(2),b.jc("ngIf",b.ec(15,31,e.expirationDate)<0),b.zb(5),b.jc("routerLink",b.mc(55,O,e.slug)),b.zb(1),b.jc("data",e.name),b.zb(2),b.jc("data",e.description),b.zb(8),b.jc("ngClass",b.mc(57,j,b.ec(31,33,e.expirationDate)<0)),b.zb(2),b.jc("data",e.code),b.zb(1),b.jc("ngClass",b.mc(59,T,b.ec(34,35,e.expirationDate)>0&&b.ec(35,37,e.expirationDate)<=2)),b.zb(4),b.Ac("DEAL ",b.ec(38,39,e.expirationDate)<0?"EXPIRED":"EXPIRES IN",":"),b.zb(2),b.jc("ngIf",b.ec(40,41,e.expirationDate)<0||b.ec(41,43,e.expirationDate)>2),b.zb(3),b.jc("ngIf",b.ec(43,45,e.expirationDate)>0&&b.ec(44,47,e.expirationDate)<=2)}}function I(n,t){if(1&n&&(b.Ob(0),b.wc(1,L,45,61,"div",5),b.Nb()),2&n){var e=b.cc();b.zb(1),b.jc("ngForOf",e.listing.items)}}var S,E,A,N=((E=function(){function n(t){_classCallCheck(this,n),this.route=t}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.subscriptions=this.route.data.subscribe((function(t){n.subscriptions=d.a.extractData(t.data,m.a).subscribe((function(t){n.listing=t}),(function(n){}))}),(function(n){}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.listing||!this.listing.isShell)}}]),n}()).\u0275fac=function(n){return new(n||E)(b.Kb(c.a))},E.\u0275cmp=b.Eb({type:E,selectors:[["app-deals-listing"]],hostVars:2,hostBindings:function(n,t){2&n&&b.Bb("is-shell",t.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"deals-listing-content"],[4,"ngIf"],["class","listing-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"listing-item",3,"ngClass"],[1,"top-row"],["size","6",1,"logo-col"],[3,"ratio"],["animation","spinner",1,"deal-logo",3,"src","alt"],["class","call-to-action-col",4,"ngIf"],[1,"middle-row"],[1,"info-col"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],["animation","bouncing",3,"data"],[1,"item-description"],["animation","bouncing","lines","3",3,"data"],["size","2"],["expand","block","fill","clear","color","claim",1,"bookmark-button"],["slot","icon-only","name","pricetag"],[1,"bottom-row"],[1,"code-wrapper"],[1,"code-cta"],[1,"item-code",3,"ngClass"],[3,"data"],["size","5",1,"time-left-wrapper",3,"ngClass"],[1,"expiration-cta"],[1,"call-to-action-col"],["expand","block","color","claim",1,"claim-button",3,"routerLink"],[1,"button-cta"],["slot","end","name","arrow-forward"],[1,"expired-cta"],[1,"item-time-left"],[1,"countdown-wrapper"],["fill","inner-time",1,"item-countdown",3,"end","units"]],template:function(n,t){1&n&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar",0),b.Qb(2,"ion-buttons",1),b.Lb(3,"ion-back-button",2),b.Pb(),b.Qb(4,"ion-title"),b.yc(5,"Deals Listing"),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content",3),b.wc(7,I,2,1,"ng-container",4),b.Pb()),2&n&&(b.zb(7),b.jc("ngIf",null==t.listing?null:t.listing.items))},directives:[l.l,l.T,l.h,l.d,l.e,l.R,l.k,i.m,i.l,i.k,l.C,l.j,f.a,u.a,c.h,l.ab,h.a,l.g,l.m,c.g,P.a],pipes:[C.a,M],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-countdown-fill-shadow-color:rgba(var(--ion-color-darkest-rgb),0.2);--page-item-shadow-color:rgba(var(--ion-color-dark-rgb),.1);--page-deal-code-height:30px;--page-countdown-gutter:3px;--page-expired-color:var(--ion-color-medium-tint);--page-ends-soon-color:#ffab6b;--page-distant-end-color:#70df70;--page-deal-color:var(--ion-color-medium);--page-deal-border-color:var(--ion-color-light-shade);--page-color:#70df70;--ion-color-claim:#70df70;--ion-color-claim-rgb:112,223,112;--ion-color-claim-contrast:#fff;--ion-color-claim-contrast-rgb:255,255,255;--ion-color-claim-shade:#63c463;--ion-color-claim-tint:#7ee27e}[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-claim)!important;--ion-color-base-rgb:var(--ion-color-claim-rgb)!important;--ion-color-contrast:var(--ion-color-claim-contrast)!important;--ion-color-contrast-rgb:var(--ion-color-claim-contrast-rgb)!important;--ion-color-shade:var(--ion-color-claim-shade)!important;--ion-color-tint:var(--ion-color-claim-tint)!important}.deals-listing-content[_ngcontent-%COMP%]{--background:var(--page-background)}.listing-item[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest);margin:var(--page-margin);border-radius:var(--app-fair-radius);box-shadow:1px 1px 4px 1px var(--page-item-shadow-color);border-bottom:calc(var(--page-margin)/2*3) solid var(--page-deal-border-color)}.listing-item.ended[_ngcontent-%COMP%]{--page-deal-color:var(--page-expired-color);--page-deal-border-color:var(--page-expired-color);border-bottom-style:none}.listing-item.imminent-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-ends-soon-color);--page-deal-border-color:var(--page-distant-end-color)}.listing-item.ends-soon[_ngcontent-%COMP%]{--page-deal-color:var(--page-ends-soon-color);--page-deal-border-color:var(--page-ends-soon-color);border-bottom-style:none}.listing-item.distant-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color);--page-deal-border-color:var(--page-distant-end-color);border-bottom-style:none}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;border-bottom:2px dashed rgba(var(--ion-color-dark-rgb),.1);padding:calc(var(--page-margin)/2);justify-content:space-between;align-items:center}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%]{align-self:center}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{flex-grow:0}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .expired-cta[_ngcontent-%COMP%]{color:var(--page-expired-color);font-size:16px;font-weight:600;letter-spacing:.8px}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:var(--app-fair-radius);margin:0}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]:focus{outline:none}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   .button-cta[_ngcontent-%COMP%]{display:block;line-height:18px;font-size:16px;font-weight:600}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:calc(var(--page-margin)/2);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin)/2)}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin)/2);color:var(--ion-color-dark-tint);font-size:16px}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:14px}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .bookmark-button[_ngcontent-%COMP%]{--padding-start:5px;--padding-end:5px;margin:0;font-size:16px}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:0 calc(var(--page-margin)/2) calc(var(--page-margin)/2);justify-content:space-between}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .code-cta[_ngcontent-%COMP%]{font-size:12px;font-weight:500;margin-bottom:5px;display:block}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code[_ngcontent-%COMP%]{height:var(--page-deal-code-height);text-transform:uppercase;padding:calc(var(--page-margin)/4) calc(var(--page-margin)/2);border:2px solid var(--page-color);font-size:12px;font-weight:500;line-height:1;border-radius:calc(var(--page-deal-code-height)/2);display:flex;align-items:center;justify-content:center}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code.expired[_ngcontent-%COMP%]{border-color:var(--page-expired-color);color:var(--page-expired-color);opacity:.6}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]{flex-shrink:0;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]   .expiration-cta[_ngcontent-%COMP%]{font-size:12px;font-weight:500;margin-bottom:5px;display:block;text-transform:uppercase;text-align:end}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]:not(.countdown-active)   .item-time-left[_ngcontent-%COMP%]{color:var(--page-deal-color);font-size:14px;font-weight:500;display:block;text-align:end}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]{display:block;position:relative}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;position:absolute;right:0}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%]{--countdown-time-margin:0px;--countdown-time-padding:0px;--countdown-inner-time-margin:var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;--countdown-inner-time-padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);--countdown-fill-border:none;--countdown-fill-border-radius:var(--app-narrow-radius);--countdown-fill-background:var(--ion-color-lightest);--countdown-fill-shadow:0px 0px 5px 0px var(--page-countdown-fill-shadow-color);--countdown-value-color:var(--ion-color-darkest);--countdown-unit-color:var(--ion-color-medium-shade);--countdown-time-flex-direction:column;font-weight:500;font-size:14px;margin-right:calc(var(--page-countdown-gutter)*-1)}","[_nghost-%COMP%]{--shell-color:#70df70;--shell-color-rgb:112,223,112}app-image-shell.deal-logo[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.30);--text-shell-line-height:16px}.item-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:14px}.item-code[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:14px;min-width:60px}.item-code[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.item-time-left[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:14px;min-width:60px}.item-time-left[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}",".ios[_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%]{height:2.2em}"]}),E),U=((S=function(){function n(t){_classCallCheck(this,n),this.dealsService=t}return _createClass(n,[{key:"resolve",value:function(){var n=this.dealsService.getListingDataSource();return this.dealsService.getListingStore(n)}}]),n}()).\u0275fac=function(n){return new(n||S)(b.Ub(p.a))},S.\u0275prov=b.Gb({token:S,factory:S.\u0275fac}),S),$=[{path:"",component:N,resolve:{data:U}}],X=((A=function n(){_classCallCheck(this,n)}).\u0275mod=b.Ib({type:A}),A.\u0275inj=b.Hb({factory:function(n){return new(n||A)},providers:[U,p.a],imports:[[i.c,a.f,l.U,c.i.forChild($),g.a,s.a,r.b]]}),A)}}]);