(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),l("DHAg");var o=l("wov0");l("ZYjt").platformBrowser().bootstrapModuleFactory(o.AppModuleNgFactory)},DHAg:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),l("kzjQ"),l("0TWp")},JbAP:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(){}return n.prototype.ngOnChanges=function(n){if(!this.user)throw new Error("Required input [user] not provided.")},n}();e.BadgeComponent=o},K0Kg:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}\ndiv[_ngcontent-%COMP%] {\n  margin-bottom: 16px ;\n}\nbn-badge[_ngcontent-%COMP%] {\n  min-width: 300px ;\n}"]},Mn8e:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){return function(){this.users=[{id:1,name:"Kim Doro",email:"ben+kim@bennadel.com",avatarUrl:"http://www.gravatar.com/avatar/5cbcec91c352ed84fa4ad6fc42fd2a05.jpg?s=150",startedAt:Date.now()},{id:2,name:"Sarah O'Neill",email:"ben+sarah@bennadel.com",avatarUrl:"http://www.gravatar.com/avatar/a65ac17d587bc4b2a0d4075fc8cb2938.jpg?s=150",startedAt:Date.now()},{id:3,name:"Tricia Nakatomi",email:"ben+tricia@bennadel.com",avatarUrl:"http://www.gravatar.com/avatar/e75d5660d83e33924a51b22cc1db0a91.jpg?s=150",startedAt:Date.now()}]}}();e.AppComponent=o},SmDo:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){return function(){}}();e.AppModule=o},WQja:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=["[_nghost-%COMP%] {\n  border: 1px solid #cccccc;\n  border-radius: 3px 3px 3px 3px ;\n  display: inline-block;\n}\n.layout[_ngcontent-%COMP%] {\n  display: flex ;\n  padding: 10px 10px 10px 10px ;\n}\n.layout__avatar[_ngcontent-%COMP%] {\n  flex: 0 0 auto ;\n  margin-right: 13px ;\n}\n.layout__info[_ngcontent-%COMP%] {\n  flex: 1 1 auto ;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: block ;\n  border-radius: 5px 5px 5px 5px ;\n  height: 40px ;\n  width: 40px ;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 16px ;\n  line-height: 21px ;\n}\n.info__name[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: bold ;\n  margin-bottom: 2px ;\n  margin-top: 1px ;\n}\n.info__email[_ngcontent-%COMP%] {\n  color: #999999;\n}"]},WbCY:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l("WQja"),t=l("CcnG"),a=l("JbAP"),r=[o.styles],u=t.ɵcrt({encapsulation:0,styles:r,data:{}});function i(n){return t.ɵvid(2,[(n()(),t.ɵeld(0,0,null,null,7,"div",[["class","layout"]],null,null,null,null,null)),(n()(),t.ɵeld(1,0,null,null,1,"div",[["class","layout__avatar"]],null,null,null,null,null)),(n()(),t.ɵeld(2,0,null,null,0,"img",[["class","avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t.ɵeld(3,0,null,null,4,"div",[["class","layout__info info"]],null,null,null,null,null)),(n()(),t.ɵeld(4,0,null,null,1,"div",[["class","info__name"]],null,null,null,null,null)),(n()(),t.ɵted(5,null,[" "," "])),(n()(),t.ɵeld(6,0,null,null,1,"div",[["class","info__email"]],null,null,null,null,null)),(n()(),t.ɵted(7,null,[" "," "]))],null,function(n,e){var l=e.component;n(e,2,0,l.user.avatarUrl),n(e,5,0,l.user.name),n(e,7,0,l.user.email)})}function p(n){return t.ɵvid(0,[(n()(),t.ɵeld(0,0,null,null,1,"bn-badge",[],null,null,null,i,u)),t.ɵdid(1,573440,null,0,a.BadgeComponent,[],null,null)],null,null)}e.RenderType_BadgeComponent=u,e.View_BadgeComponent_0=i,e.View_BadgeComponent_Host_0=p;var d=t.ɵccf("bn-badge",a.BadgeComponent,p,{user:"user"},{},[]);e.BadgeComponentNgFactory=d},kcRK:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l("K0Kg"),t=l("CcnG"),a=l("WbCY"),r=l("JbAP"),u=l("Ip0R"),i=l("Mn8e"),p=[o.styles],d=t.ɵcrt({encapsulation:0,styles:p,data:{}});function c(n){return t.ɵvid(0,[(n()(),t.ɵeld(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.ɵeld(1,0,null,null,1,"bn-badge",[],null,null,null,a.View_BadgeComponent_0,a.RenderType_BadgeComponent)),t.ɵdid(2,573440,null,0,r.BadgeComponent,[],{user:[0,"user"]},null)],function(n,e){n(e,2,0,e.context.$implicit)},null)}function s(n){return t.ɵvid(0,[(n()(),t.ɵand(16777216,null,null,1,null,c)),t.ɵdid(1,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t.ɵeld(2,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.ɵeld(3,0,null,null,1,"bn-badge",[],null,null,null,a.View_BadgeComponent_0,a.RenderType_BadgeComponent)),t.ɵdid(4,573440,null,0,r.BadgeComponent,[],null,null)],function(n,e){n(e,1,0,e.component.users)},null)}function m(n){return t.ɵvid(0,[(n()(),t.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,s,d)),t.ɵdid(1,49152,null,0,i.AppComponent,[],null,null)],null,null)}e.RenderType_AppComponent=d,e.View_AppComponent_0=s,e.View_AppComponent_Host_0=m;var _=t.ɵccf("my-app",i.AppComponent,m,{},{},[]);e.AppComponentNgFactory=_},wov0:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l("CcnG"),t=l("SmDo"),a=l("Mn8e"),r=l("kcRK"),u=l("Ip0R"),i=l("ZYjt"),p=o.ɵcmf(t.AppModule,[a.AppComponent],function(n){return o.ɵmod([o.ɵmpd(512,o.ComponentFactoryResolver,o.ɵCodegenComponentFactoryResolver,[[8,[r.AppComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.ɵmpd(5120,o.LOCALE_ID,o.ɵangular_packages_core_core_o,[[3,o.LOCALE_ID]]),o.ɵmpd(4608,u.NgLocalization,u.NgLocaleLocalization,[o.LOCALE_ID,[2,u.ɵangular_packages_common_common_a]]),o.ɵmpd(4608,o.Compiler,o.Compiler,[]),o.ɵmpd(5120,o.APP_ID,o.ɵangular_packages_core_core_g,[]),o.ɵmpd(5120,o.IterableDiffers,o.ɵangular_packages_core_core_m,[]),o.ɵmpd(5120,o.KeyValueDiffers,o.ɵangular_packages_core_core_n,[]),o.ɵmpd(4608,i.DomSanitizer,i.ɵDomSanitizerImpl,[u.DOCUMENT]),o.ɵmpd(6144,o.Sanitizer,null,[i.DomSanitizer]),o.ɵmpd(4608,i.HAMMER_GESTURE_CONFIG,i.HammerGestureConfig,[]),o.ɵmpd(5120,i.EVENT_MANAGER_PLUGINS,function(n,e,l,o,t,a,r,u){return[new i.ɵDomEventsPlugin(n,e,l),new i.ɵKeyEventsPlugin(o),new i.ɵHammerGesturesPlugin(t,a,r,u)]},[u.DOCUMENT,o.NgZone,o.PLATFORM_ID,u.DOCUMENT,u.DOCUMENT,i.HAMMER_GESTURE_CONFIG,o.ɵConsole,[2,i.HAMMER_LOADER]]),o.ɵmpd(4608,i.EventManager,i.EventManager,[i.EVENT_MANAGER_PLUGINS,o.NgZone]),o.ɵmpd(135680,i.ɵDomSharedStylesHost,i.ɵDomSharedStylesHost,[u.DOCUMENT]),o.ɵmpd(4608,i.ɵDomRendererFactory2,i.ɵDomRendererFactory2,[i.EventManager,i.ɵDomSharedStylesHost]),o.ɵmpd(6144,o.RendererFactory2,null,[i.ɵDomRendererFactory2]),o.ɵmpd(6144,i.ɵSharedStylesHost,null,[i.ɵDomSharedStylesHost]),o.ɵmpd(4608,o.Testability,o.Testability,[o.NgZone]),o.ɵmpd(1073742336,u.CommonModule,u.CommonModule,[]),o.ɵmpd(1024,o.ErrorHandler,i.ɵangular_packages_platform_browser_platform_browser_a,[]),o.ɵmpd(1024,o.APP_INITIALIZER,function(n){return[i.ɵangular_packages_platform_browser_platform_browser_j(n)]},[[2,o.NgProbeToken]]),o.ɵmpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.ɵmpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.ɵConsole,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.ɵmpd(1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.ɵmpd(1073742336,i.BrowserModule,i.BrowserModule,[[3,i.BrowserModule]]),o.ɵmpd(1073742336,t.AppModule,t.AppModule,[]),o.ɵmpd(256,o.ɵAPP_ROOT,!0,[])])});e.AppModuleNgFactory=p},zn8P:function(n,e){function l(n){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="zn8P"}},[["0ZzE",1,2]]]);
//# sourceMappingURL=main.fa3bf90baed7f70b5a7e.js.map