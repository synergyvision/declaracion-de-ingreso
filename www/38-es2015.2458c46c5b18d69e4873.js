(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{wMrW:function(n,t,i){"use strict";i.r(t),i.d(t,"NotificationsPageModule",(function(){return h}));var o=i("TEn/"),e=i("tyNb"),a=i("ofXK"),c=i("3Pt+"),r=i("j1ZV"),s=i("fXoL"),b=i("B7gC"),p=i("2gss");const g=function(){return{w:1,h:1}};function l(n,t){if(1&n&&(s.Qb(0,"ion-item",6),s.Qb(1,"ion-row",7),s.Qb(2,"ion-col",8),s.Qb(3,"app-aspect-ratio",9),s.Lb(4,"app-image-shell",10),s.Pb(),s.Pb(),s.Qb(5,"ion-col",11),s.Qb(6,"h2",12),s.yc(7),s.Pb(),s.Qb(8,"p",13),s.yc(9),s.Pb(),s.Pb(),s.Qb(10,"ion-col",14),s.Qb(11,"h3",15),s.yc(12),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&n){const n=t.$implicit;s.zb(3),s.jc("ratio",s.lc(6,g)),s.zb(1),s.jc("src",n.image)("alt","user image"),s.zb(3),s.zc(n.name),s.zb(2),s.zc(n.message),s.zb(3),s.zc(n.date)}}function f(n,t){if(1&n&&(s.Qb(0,"ion-item",6),s.Qb(1,"ion-row",7),s.Qb(2,"ion-col",8),s.Qb(3,"app-aspect-ratio",9),s.Lb(4,"app-image-shell",10),s.Pb(),s.Pb(),s.Qb(5,"ion-col",11),s.Qb(6,"h2",12),s.yc(7),s.Pb(),s.Qb(8,"p",13),s.yc(9),s.Pb(),s.Pb(),s.Qb(10,"ion-col",14),s.Qb(11,"h3",15),s.yc(12),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&n){const n=t.$implicit;s.zb(3),s.jc("ratio",s.lc(6,g)),s.zb(1),s.jc("src",n.image)("alt","user image"),s.zb(3),s.zc(n.name),s.zb(2),s.zc(n.message),s.zb(3),s.zc(n.date)}}function d(n,t){if(1&n&&(s.Ob(0),s.Qb(1,"ion-item-group"),s.Qb(2,"ion-item-divider",4),s.Qb(3,"ion-label"),s.yc(4,"Today"),s.Pb(),s.Pb(),s.wc(5,l,13,7,"ion-item",5),s.Pb(),s.Qb(6,"ion-item-group"),s.Qb(7,"ion-item-divider",4),s.Qb(8,"ion-label"),s.yc(9,"Yesterday"),s.Pb(),s.Pb(),s.wc(10,f,13,7,"ion-item",5),s.Pb(),s.Nb()),2&n){const n=s.cc();s.zb(5),s.jc("ngForOf",n.notifications.today),s.zb(5),s.jc("ngForOf",n.notifications.yesterday)}}let m=(()=>{class n{constructor(n){this.route=n}ngOnInit(){this.subscriptions=this.route.data.subscribe(n=>{this.subscriptions=n.data.source.subscribe(n=>{this.notifications=n},n=>{})},n=>{})}ionViewWillLeave(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(e.a))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-notifications"]],decls:8,vars:1,consts:[["color","primary"],["slot","start"],[1,"notifications-content"],[4,"ngIf"],["sticky",""],["class","notification-item","lines","none",4,"ngFor","ngForOf"],["lines","none",1,"notification-item"],[1,"notification-item-wrapper"],["size","2"],[3,"ratio"],[1,"notification-image",3,"src","alt"],[1,"details-wrapper"],[1,"details-name"],[1,"details-description"],["size","2",1,"date-wrapper"],[1,"notification-date"]],template:function(n,t){1&n&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar",0),s.Qb(2,"ion-buttons",1),s.Lb(3,"ion-menu-button"),s.Pb(),s.Qb(4,"ion-title"),s.yc(5," Notifications "),s.Pb(),s.Pb(),s.Pb(),s.Qb(6,"ion-content",2),s.wc(7,d,11,2,"ng-container",3),s.Pb()),2&n&&(s.zb(7),s.jc("ngIf",t.notifications))},directives:[o.l,o.T,o.h,o.v,o.R,o.k,a.m,o.q,o.p,o.r,a.l,o.o,o.C,o.j,b.a,p.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin)}.notifications-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:0px;padding:var(--page-margin);color:var(--ion-color-medium);box-shadow:inset 0 8px 2px -9px var(--ion-color-darkest)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-item-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;align-items:center}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-left:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;font-size:16px;font-weight:400;letter-spacing:.2px;color:var(--ion-color-secondary)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{font-size:12px;margin:0}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{align-self:flex-start}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]   .notification-date[_ngcontent-%COMP%]{margin:0;font-size:12px;text-align:end}","app-image-shell.notification-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]}),n})();var P=i("tk/3");let u=(()=>{class n{constructor(n){this.http=n}getData(){return this.http.get("./assets/sample-data/notifications.json")}}return n.\u0275fac=function(t){return new(t||n)(s.Ub(P.a))},n.\u0275prov=s.Gb({token:n,factory:n.\u0275fac}),n})(),O=(()=>{class n{constructor(n){this.notificationsService=n}resolve(){return{source:this.notificationsService.getData()}}}return n.\u0275fac=function(t){return new(t||n)(s.Ub(u))},n.\u0275prov=s.Gb({token:n,factory:n.\u0275fac}),n})(),h=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},providers:[O,u],imports:[[o.U,a.c,c.f,r.a,e.i.forChild([{path:"",component:m,resolve:{data:O}}])]]}),n})()}}]);