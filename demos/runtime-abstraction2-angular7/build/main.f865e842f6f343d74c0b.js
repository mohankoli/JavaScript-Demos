(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t("DHAg");var o=t("wov0");t("ZYjt").platformBrowser().bootstrapModuleFactory(o.AppModuleNgFactory)},"3lrJ":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex ;\n  margin-bottom: 25px ;\n}\n.nav__item[_ngcontent-%COMP%] {\n  border: 1px solid red ;\n  border-radius: 3px 3px 3px 3px ;\n  color: red ;\n  cursor: pointer ;\n  flex: 0 1 auto ;\n  margin-right: 10px ;\n  padding: 7px 15px 7px 15px ;\n}\n.nav__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px ;\n}\n.nav__item--selected[_ngcontent-%COMP%] {\n  background-color: red ;\n  color: white ;\n}\n.list-view[_ngcontent-%COMP%] {\n  border-left: 4px solid #cccccc;\n  margin: 20px 0px 20px 0px ;\n  padding: 10px 0px 10px 20px ;\n}\n.list-view__form[_ngcontent-%COMP%] {\n  margin: 0px 0px 20px 0px ;\n}\n.list-view__list[_ngcontent-%COMP%] {\n  margin: 20px 0px 0px 0px ;\n}\n.intake[_ngcontent-%COMP%] {\n  display: flex ;\n}\n.intake__name[_ngcontent-%COMP%] {\n  flex: 0 0 auto ;\n  font-size: 18px ;\n  margin-right: 8px ;\n  width: 200px ;\n}\n.intake__submit[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border: 1px solid #cccccc;\n  flex: 0 0 auto ;\n  font-size: 16px ;\n}\n.list[_ngcontent-%COMP%] {\n  list-style-type: none ;\n  margin: 0px 0px 0px 0px ;\n  padding: 0px 0px 0px 0px ;\n  width: 600px ;\n}\n.list__item[_ngcontent-%COMP%] {\n  border-top: 1px solid #cccccc;\n  margin: 0px 0px 0px 0px ;\n  padding: 10px 3px 10px 3px ;\n}\n.list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #cccccc;\n}\n.person[_ngcontent-%COMP%] {\n  display: flex ;\n}\n.person__name[_ngcontent-%COMP%] {\n  flex: 1 1 auto ;\n}\n.person__delete[_ngcontent-%COMP%] {\n  color: #999999;\n  cursor: pointer ;\n  flex: 0 1 auto ;\n  text-decoration: underline ;\n  text-transform: lowercase ;\n}\n.person__delete[_ngcontent-%COMP%]:hover {\n  color: red ;\n}"]},DHAg:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t("kzjQ"),t("0TWp")},"E/TA":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("CcnG"),l=function(){function n(){var n=this;this.handleUnload=function(e){for(var t=0,o=n.unloadCallbacks;t<o.length;t++){var l=o[t];try{l(n)}catch(n){console.group("App Unload Callback Error"),console.log(l),console.error(n),console.groupEnd()}}},this.unloadCallbacks=[],window.addEventListener("beforeunload",this.handleUnload,!1)}return n.prototype.loadData=function(n){try{var e=window.localStorage.getItem(n);if(null!==e)return window.localStorage.removeItem(n),JSON.parse(e)}catch(n){}return null},n.prototype.registerUnloadCallback=function(n){this.unloadCallbacks.push(n)},n.prototype.saveData=function(n,e){try{window.localStorage.setItem(n,JSON.stringify(e))}catch(n){}},n.ngInjectableDef=o.defineInjectable({factory:function(){return new n},token:n,providedIn:"root"}),n}();e.AppStorageService=l},K0Kg:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}"]},Mn8e:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("W9Cx");var o=function(){function n(n){this.santaRuntime=n,this.selectedListType=this.santaRuntime.getSelectedListType(),this.people=this.santaRuntime.getPeople(),this.niceCount=this.santaRuntime.getNiceCount(),this.naughtyCount=this.santaRuntime.getNaughtyCount()}return n.prototype.addPerson=function(n){this.santaRuntime.addPerson(n)},n.prototype.ngOnInit=function(){var n=window.location.hash.slice(1).toLowerCase();"nice"!==n&&"naughty"!==n||this.santaRuntime.selectList(n)},n.prototype.removePerson=function(n){this.santaRuntime.removePerson(n.id)},n.prototype.showList=function(n){window.location.hash=n,this.santaRuntime.selectList(n)},n}();e.AppComponent=o},SmDo:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){return function(){}}();e.AppModule=o},W9Cx:function(n,e,t){"use strict";var o=this&&this.__awaiter||function(n,e,t,o){return new(t||(t=Promise))(function(l,r){function i(n){try{u(o.next(n))}catch(n){r(n)}}function a(n){try{u(o.throw(n))}catch(n){r(n)}}function u(n){n.done?l(n.value):new t(function(e){e(n.value)}).then(i,a)}u((o=o.apply(n,e||[])).next())})},l=this&&this.__generator||function(n,e){var t,o,l,r,i={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(l=2&r[0]?o.return:r[0]?o.throw||((l=o.return)&&l.call(o),0):o.next)&&!(l=l.call(o,r[1])).done)return l;switch(o=0,l&&(r=[2&r[0],l.value]),r[0]){case 0:case 1:l=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,o=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(l=(l=i.trys).length>0&&l[l.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3])){i.label=r[1];break}if(6===r[0]&&i.label<l[1]){i.label=l[1],l=r;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(r);break}l[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(n,i)}catch(n){r=[6,n],o=0}finally{t=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var r=t("DtyJ"),i=t("ahDk"),a=(t("E/TA"),t("e87X")),u=t("CcnG"),s=t("E/TA"),p=function(){function n(n){var e=this;this.storageSaveData=function(){e.appStorage.saveData(e.appStorageKey,e.store.getSnapshot())},this.appStorage=n;this.store=new a.SimpleStore({v:3,selectedListType:"nice",nicePeople:[],naughtyPeople:[]}),this.appStorageKey="santa_runtime_storage",this.storageLoadData(),this.appStorage.registerUnloadCallback(this.storageSaveData)}return n.prototype.addPerson=function(n){return o(this,void 0,void 0,function(){var e,t;return l(this,function(o){return e={id:Date.now(),name:n},"nice"===(t=this.store.getSnapshot()).selectedListType?this.store.setState({nicePeople:t.nicePeople.concat(e)}):this.store.setState({naughtyPeople:t.naughtyPeople.concat(e)}),[2,e.id]})})},n.prototype.removePerson=function(n){return o(this,void 0,void 0,function(){var e,t,o,r;return l(this,function(l){return e=this.store.getSnapshot(),t=e.nicePeople,o=e.naughtyPeople,r=function(e){return e.id!==n},this.store.setState({nicePeople:t.filter(r),naughtyPeople:o.filter(r)}),[2]})})},n.prototype.selectList=function(n){return o(this,void 0,void 0,function(){return l(this,function(e){return this.store.setState({selectedListType:n}),[2]})})},n.prototype.getNaughtyCount=function(){return this.store.select("naughtyPeople").pipe(i.map(function(n){return n.length}))},n.prototype.getNiceCount=function(){return this.store.select("nicePeople").pipe(i.map(function(n){return n.length}))},n.prototype.getPeople=function(){return r.combineLatest(this.store.select("selectedListType"),this.store.select("nicePeople"),this.store.select("naughtyPeople")).pipe(i.map(function(n){var e=n[0],t=n[1],o=n[2];return"nice"===e?t:o}))},n.prototype.getSelectedListType=function(){return this.store.select("selectedListType")},n.prototype.storageLoadData=function(){var n=this.store.getSnapshot(),e=this.appStorage.loadData(this.appStorageKey);e&&e.v&&e.v===n.v&&this.store.setState(e)},n.ngInjectableDef=u.defineInjectable({factory:function(){return new n(u.inject(s.AppStorageService))},token:n,providedIn:"root"}),n}();e.SantaRuntime=p},e87X:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("DtyJ"),l=t("ahDk"),r=t("ahDk"),i=function(){function n(n){this.stateSubject=new o.BehaviorSubject(n)}return n.prototype.getSnapshot=function(){return this.stateSubject.getValue()},n.prototype.getState=function(){return this.stateSubject.asObservable()},n.prototype.select=function(n){return this.stateSubject.pipe(r.map(function(e){return e[n]}),l.distinctUntilChanged())},n.prototype.setState=function(n){var e=this.getSnapshot(),t=n instanceof Function?n(e):n;if(void 0!==t){var o=Object.assign({},e,t);this.stateSubject.next(o)}},n}();e.SimpleStore=i},kcRK:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("K0Kg"),l=t("CcnG"),r=t("l+FB"),i=t("zAbR"),a=t("Ip0R"),u=t("Mn8e"),s=t("W9Cx"),p=[o.styles],c=l.ɵcrt({encapsulation:0,styles:p,data:{}});function d(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,5,"my-santa",[],null,[[null,"listTypeSelect"],[null,"peopleAdd"],[null,"peopleRemove"]],function(n,e,t){var o=!0,l=n.component;"listTypeSelect"===e&&(o=!1!==l.showList(t)&&o);"peopleAdd"===e&&(o=!1!==l.addPerson(t)&&o);"peopleRemove"===e&&(o=!1!==l.removePerson(t)&&o);return o},r.View_SantaComponent_0,r.RenderType_SantaComponent)),l.ɵdid(1,573440,null,0,i.SantaComponent,[],{selectedListType:[0,"selectedListType"],niceCount:[1,"niceCount"],naughtyCount:[2,"naughtyCount"],people:[3,"people"]},{listTypeSelectEvents:"listTypeSelect",peopleAddEvents:"peopleAdd",peopleRemoveEvents:"peopleRemove"}),l.ɵpid(131072,a.AsyncPipe,[l.ChangeDetectorRef]),l.ɵpid(131072,a.AsyncPipe,[l.ChangeDetectorRef]),l.ɵpid(131072,a.AsyncPipe,[l.ChangeDetectorRef]),l.ɵpid(131072,a.AsyncPipe,[l.ChangeDetectorRef])],function(n,e){var t=e.component;n(e,1,0,l.ɵunv(e,1,0,l.ɵnov(e,2).transform(t.selectedListType)),l.ɵunv(e,1,1,l.ɵnov(e,3).transform(t.niceCount)),l.ɵunv(e,1,2,l.ɵnov(e,4).transform(t.naughtyCount)),l.ɵunv(e,1,3,l.ɵnov(e,5).transform(t.people)))},null)}function m(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,d,c)),l.ɵdid(1,114688,null,0,u.AppComponent,[s.SantaRuntime],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_AppComponent=c,e.View_AppComponent_0=d,e.View_AppComponent_Host_0=m;var g=l.ɵccf("my-app",u.AppComponent,m,{},{},[]);e.AppComponentNgFactory=g},"l+FB":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("3lrJ"),l=t("CcnG"),r=t("Ip0R"),i=t("gIcY"),a=t("zAbR"),u=[o.styles],s=l.ɵcrt({encapsulation:0,styles:u,data:{}});function p(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,4,"li",[["class","list__item person"]],null,null,null,null,null)),(n()(),l.ɵeld(1,0,null,null,1,"span",[["class","person__name"]],null,null,null,null,null)),(n()(),l.ɵted(2,null,[" "," "])),(n()(),l.ɵeld(3,0,null,null,1,"a",[["class","person__delete"]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;"click"===e&&(o=!1!==l.removePerson(n.context.$implicit)&&o);return o},null,null)),(n()(),l.ɵted(-1,null,[" Delete "]))],null,function(n,e){n(e,2,0,e.context.$implicit.name)})}function c(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,2,"ul",[["class","list-view__list list"]],null,null,null,null,null)),(n()(),l.ɵand(16777216,null,null,1,null,p)),l.ɵdid(2,278528,null,0,r.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,2,0,e.component.people)},null)}function d(n){return l.ɵvid(2,[(n()(),l.ɵeld(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.ɵted(-1,null,[" Santa's Christmas List\n"])),(n()(),l.ɵeld(2,0,null,null,4,"nav",[["class","nav"]],null,null,null,null,null)),(n()(),l.ɵeld(3,0,null,null,1,"a",[["class","nav__item"]],[[2,"nav__item--selected",null]],[[null,"click"]],function(n,e,t){var o=!0,l=n.component;"click"===e&&(o=!1!==l.showList("nice")&&o);return o},null,null)),(n()(),l.ɵted(4,null,[" Nice (",") "])),(n()(),l.ɵeld(5,0,null,null,1,"a",[["class","nav__item"]],[[2,"nav__item--selected",null]],[[null,"click"]],function(n,e,t){var o=!0,l=n.component;"click"===e&&(o=!1!==l.showList("naughty")&&o);return o},null,null)),(n()(),l.ɵted(6,null,[" Naughty (",") "])),(n()(),l.ɵeld(7,0,null,null,15,"div",[["class","list-view"]],null,null,null,null,null)),(n()(),l.ɵeld(8,0,null,null,12,"form",[["class","list-view__form intake"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,t){var o=!0,r=n.component;"submit"===e&&(o=!1!==l.ɵnov(n,10).onSubmit(t)&&o);"reset"===e&&(o=!1!==l.ɵnov(n,10).onReset()&&o);"submit"===e&&(o=!1!==r.processIntake()&&o);return o},null,null)),l.ɵdid(9,16384,null,0,i.ɵangular_packages_forms_forms_bh,[],null,null),l.ɵdid(10,4210688,null,0,i.NgForm,[[8,null],[8,null]],null,null),l.ɵprd(2048,null,i.ControlContainer,null,[i.NgForm]),l.ɵdid(12,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(n()(),l.ɵeld(13,0,null,null,5,"input",[["class","intake__name"],["name","name"],["placeholder","Name..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,t){var o=!0,r=n.component;"input"===e&&(o=!1!==l.ɵnov(n,14)._handleInput(t.target.value)&&o);"blur"===e&&(o=!1!==l.ɵnov(n,14).onTouched()&&o);"compositionstart"===e&&(o=!1!==l.ɵnov(n,14)._compositionStart()&&o);"compositionend"===e&&(o=!1!==l.ɵnov(n,14)._compositionEnd(t.target.value)&&o);"ngModelChange"===e&&(o=!1!==(r.intake.name=t)&&o);return o},null,null)),l.ɵdid(14,16384,null,0,i.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),l.ɵprd(1024,null,i.NG_VALUE_ACCESSOR,function(n){return[n]},[i.DefaultValueAccessor]),l.ɵdid(16,671744,null,0,i.NgModel,[[2,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l.ɵprd(2048,null,i.NgControl,null,[i.NgModel]),l.ɵdid(18,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(n()(),l.ɵeld(19,0,null,null,1,"button",[["class","intake__submit"],["type","submit"]],null,null,null,null,null)),(n()(),l.ɵted(-1,null,[" Add Person "])),(n()(),l.ɵand(16777216,null,null,1,null,c)),l.ɵdid(22,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,16,0,"name",t.intake.name),n(e,22,0,t.people.length)},function(n,e){var t=e.component;n(e,3,0,"nice"===t.selectedListType),n(e,4,0,t.niceCount),n(e,5,0,"naughty"===t.selectedListType),n(e,6,0,t.naughtyCount),n(e,8,0,l.ɵnov(e,12).ngClassUntouched,l.ɵnov(e,12).ngClassTouched,l.ɵnov(e,12).ngClassPristine,l.ɵnov(e,12).ngClassDirty,l.ɵnov(e,12).ngClassValid,l.ɵnov(e,12).ngClassInvalid,l.ɵnov(e,12).ngClassPending),n(e,13,0,l.ɵnov(e,18).ngClassUntouched,l.ɵnov(e,18).ngClassTouched,l.ɵnov(e,18).ngClassPristine,l.ɵnov(e,18).ngClassDirty,l.ɵnov(e,18).ngClassValid,l.ɵnov(e,18).ngClassInvalid,l.ɵnov(e,18).ngClassPending)})}function m(n){return l.ɵvid(0,[(n()(),l.ɵeld(0,0,null,null,1,"my-santa",[],null,null,null,d,s)),l.ɵdid(1,573440,null,0,a.SantaComponent,[],null,null)],null,null)}e.RenderType_SantaComponent=s,e.View_SantaComponent_0=d,e.View_SantaComponent_Host_0=m;var g=l.ɵccf("my-santa",a.SantaComponent,m,{selectedListType:"selectedListType",niceCount:"niceCount",naughtyCount:"naughtyCount",people:"people"},{listTypeSelectEvents:"listTypeSelect",peopleAddEvents:"peopleAdd",peopleRemoveEvents:"peopleRemove"},[]);e.SantaComponentNgFactory=g},wov0:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("CcnG"),l=t("SmDo"),r=t("Mn8e"),i=t("kcRK"),a=t("Ip0R"),u=t("ZYjt"),s=t("gIcY"),p=o.ɵcmf(l.AppModule,[r.AppComponent],function(n){return o.ɵmod([o.ɵmpd(512,o.ComponentFactoryResolver,o.ɵCodegenComponentFactoryResolver,[[8,[i.AppComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.ɵmpd(5120,o.LOCALE_ID,o.ɵangular_packages_core_core_k,[[3,o.LOCALE_ID]]),o.ɵmpd(4608,a.NgLocalization,a.NgLocaleLocalization,[o.LOCALE_ID,[2,a.ɵangular_packages_common_common_a]]),o.ɵmpd(4608,o.Compiler,o.Compiler,[]),o.ɵmpd(5120,o.APP_ID,o.ɵangular_packages_core_core_f,[]),o.ɵmpd(5120,o.IterableDiffers,o.ɵangular_packages_core_core_i,[]),o.ɵmpd(5120,o.KeyValueDiffers,o.ɵangular_packages_core_core_j,[]),o.ɵmpd(4608,u.DomSanitizer,u.ɵDomSanitizerImpl,[a.DOCUMENT]),o.ɵmpd(6144,o.Sanitizer,null,[u.DomSanitizer]),o.ɵmpd(4608,u.HAMMER_GESTURE_CONFIG,u.HammerGestureConfig,[]),o.ɵmpd(5120,u.EVENT_MANAGER_PLUGINS,function(n,e,t,o,l,r,i,a){return[new u.ɵDomEventsPlugin(n,e,t),new u.ɵKeyEventsPlugin(o),new u.ɵHammerGesturesPlugin(l,r,i,a)]},[a.DOCUMENT,o.NgZone,o.PLATFORM_ID,a.DOCUMENT,a.DOCUMENT,u.HAMMER_GESTURE_CONFIG,o.ɵConsole,[2,u.HAMMER_LOADER]]),o.ɵmpd(4608,u.EventManager,u.EventManager,[u.EVENT_MANAGER_PLUGINS,o.NgZone]),o.ɵmpd(135680,u.ɵDomSharedStylesHost,u.ɵDomSharedStylesHost,[a.DOCUMENT]),o.ɵmpd(4608,u.ɵDomRendererFactory2,u.ɵDomRendererFactory2,[u.EventManager,u.ɵDomSharedStylesHost]),o.ɵmpd(6144,o.RendererFactory2,null,[u.ɵDomRendererFactory2]),o.ɵmpd(6144,u.ɵSharedStylesHost,null,[u.ɵDomSharedStylesHost]),o.ɵmpd(4608,o.Testability,o.Testability,[o.NgZone]),o.ɵmpd(4608,s.ɵangular_packages_forms_forms_j,s.ɵangular_packages_forms_forms_j,[]),o.ɵmpd(1073742336,a.CommonModule,a.CommonModule,[]),o.ɵmpd(1024,o.ErrorHandler,u.ɵangular_packages_platform_browser_platform_browser_a,[]),o.ɵmpd(1024,o.APP_INITIALIZER,function(n){return[u.ɵangular_packages_platform_browser_platform_browser_j(n)]},[[2,o.NgProbeToken]]),o.ɵmpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.ɵmpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.ɵConsole,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.ɵmpd(1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.ɵmpd(1073742336,u.BrowserModule,u.BrowserModule,[[3,u.BrowserModule]]),o.ɵmpd(1073742336,s.ɵangular_packages_forms_forms_bc,s.ɵangular_packages_forms_forms_bc,[]),o.ɵmpd(1073742336,s.FormsModule,s.FormsModule,[]),o.ɵmpd(1073742336,l.AppModule,l.AppModule,[]),o.ɵmpd(256,o.ɵAPP_ROOT,!0,[])])});e.AppModuleNgFactory=p},zAbR:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("CcnG"),l=function(){function n(){this.naughtyCount=0,this.niceCount=0,this.people=[],this.selectedListType="nice",this.listTypeSelectEvents=new o.EventEmitter,this.peopleAddEvents=new o.EventEmitter,this.peopleRemoveEvents=new o.EventEmitter,this.intake={name:""}}return n.prototype.ngOnChanges=function(n){console.group("SANTA COMPONENT INPUT CHANGES"),console.log(n),console.groupEnd()},n.prototype.processIntake=function(){this.intake.name&&(this.peopleAddEvents.emit(this.intake.name),this.intake.name="")},n.prototype.removePerson=function(n){this.peopleRemoveEvents.emit(n)},n.prototype.showList=function(n){this.listTypeSelectEvents.emit(n)},n}();e.SantaComponent=l},zn8P:function(n,e){function t(n){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="zn8P"}},[["0ZzE",1,2]]]);
//# sourceMappingURL=main.f865e842f6f343d74c0b.js.map