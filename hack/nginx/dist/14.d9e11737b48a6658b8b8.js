(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{rsU3:function(e,n,d){"use strict";d.r(n);var t=d("CcnG"),l=function(){return function(e){}}(),o=d("t68o"),p=d("zbXB"),c=d("xYTU"),i=d("NcP4"),r=d("X8zA"),a=d("pMnS"),m=d("r+ED"),u=d("lzlj"),s=d("FVSy"),b=d("ph/j"),f=d("A7o+"),v=d("bujt"),h=d("UodH"),I=d("dWZg"),g=d("lLAP"),y=d("wFw1"),S=d("Mr+X"),A=d("SMsm"),C=(d("ggiK"),d("0/uQ")),F=d("6blF"),T=d("psW0");function R(e,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),Object(T.b)(e,n)(this)}F.a.prototype.mergeMap=R,F.a.prototype.flatMap=R,d("MPj/");var _=function(){function e(e,n){this.muraaiHttpCoreServices=e,this.sharedService=n,this.processInstanceIds=[]}return e.prototype.uploadToACS=function(e,n,d){var t=this;return Object(C.a)(this.muraaiHttpCoreServices.httpFilePost("ap/rest/services/uploadToAcs",e)).switchMap((function(e){return t.saveInboundInvoiceDoc(e.fileName,e.nodeRef).switchMap((function(l){return t.startProcess(l.inboundInvoiceDocId,n).switchMap((function(n){return t.saveInboundInvoiceDoc(e.fileName,e.nodeRef,n.id,l.inboundInvoiceDocId)})).mergeMap((function(e){return t.addRelatedContent(d,e)}))}))})).catch(this.sharedService.handleError)},e.prototype.startProcess=function(e,n){return n.variables[0].value=e,this.muraaiHttpCoreServices.httpPost("ap/rest/services/startProcess",n)},e.prototype.saveInboundInvoiceDoc=function(e,n,d,t){return void 0===d&&(d=0),void 0===t&&(t=0),0!==d&&this.processInstanceIds.push(d),n=n&&n.split("/")[3]?n.split("/")[3]:[],this.muraaiHttpCoreServices.httpPost("ap/rest/services/saveInboundInvoiceDoc",{docRef:n,docName:e,processInstanceId:d,inboundInvoiceDocId:t})},e.prototype.addRelatedContent=function(e,n){var d=n.processInstanceId;return e.sourceId=n.docRef,this.muraaiHttpCoreServices.httpPost("ap/rest/services/markRelatedContent/"+d,e).catch(this.sharedService.handleError)},e}(),w=d("QdS8"),M=d("6CzD"),k=d("mrSG"),D=d("U7mz"),P=function(){function e(e,n,d){this.uploadInvoiceService=e,this.dialog=n,this.appConfigService=d,this.acceptedFilesType="*",this.multiple=!0,this.versioning=!0,this.overwrite=!1,this.count=0}return e.prototype.ngOnInit=function(){},e.prototype.onFilesAdded=function(e){var n=b.cc.toFileArray(e.detail.files).map((function(e){return e.file}));this.uploadFiles(n),e.target.value=""},e.prototype.uploadFiles=function(e){var n,d,t=this;if(this.count=0,this.uploadInvoiceService.processInstanceIds=[],e.map(this.createFileModel.bind(this)).filter(this.isFileAcceptable.bind(this)).length>0)try{for(var l=k.__values(e),o=l.next();!o.done;o=l.next()){var p=o.value,c={siteId:this.appConfigService.get("siteId"),containerId:this.appConfigService.get("containerId"),fileData:p,overwrite:this.overwrite,status:!0},i={processDefinitionKey:this.appConfigService.get("processDefinitionKey"),variables:[{name:"inbound_invoice_doc_id",scope:"global",type:"int",value:0}]};this.uploadInvoiceService.uploadToACS(c,i,{link:!0,mimeType:"application/pdf",name:p.name,source:"alfresco-1",sourceId:""}).subscribe((function(n){var d,l;if(n.contentAvailable&&(t.count++,t.count===e.length)){var o="",p=0;try{for(var c=k.__values(t.uploadInvoiceService.processInstanceIds),i=c.next();!i.done;i=c.next())o+=(p>0?", ":" ")+i.value,p++}catch(r){d={error:r}}finally{try{i&&!i.done&&(l=c.return)&&l.call(c)}finally{if(d)throw d.error}}t.showAlert("Success","Invoice processing has been initiated with the process id/s ( "+o+" )")}}),(function(){t.showAlert("Error","Something went wrong")}))}}catch(r){n={error:r}}finally{try{o&&!o.done&&(d=l.return)&&d.call(l)}finally{if(n)throw n.error}}},e.prototype.isFileAcceptable=function(e){return"*"===this.acceptedFilesType||-1!==this.acceptedFilesType.split(",").map((function(e){return e.replace(/^\./,"")})).indexOf(e.extension)},e.prototype.createFileModel=function(e){return new b.Yb(e,{newVersion:this.versioning,parentId:this.appConfigService.get("rootFolderId")})},e.prototype.showAlert=function(e,n){var d=n,t=this.dialog.open(D.b,{disableClose:!0,width:"30%"});t.componentInstance.header=e,t.componentInstance.textMessage=d,t.afterClosed().subscribe()},e}(),j=d("o3x0"),N=t["\u0275crt"]({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%]{margin:20px .5em .5em}.create-attachment[_ngcontent-%COMP%]{text-align:center;margin-top:20px;margin-bottom:20px}"]],data:{}});function E(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,20,"mat-card",[["class","mat-card"]],null,null,null,u.d,u.a)),t["\u0275did"](1,49152,null,0,s.a,[],null,null),(e()(),t["\u0275eld"](2,0,null,0,18,"div",[["class","upload-border"],["id","new_process_content_button_via_drag"]],null,[[null,"upload-files"],[null,"click"]],(function(e,n,d){var l=!0,o=e.component;return"click"===n&&(l=!1!==t["\u0275nov"](e,3).onClick(d)&&l),"upload-files"===n&&(l=!1!==o.onFilesAdded(d)&&l),l}),null,null)),t["\u0275did"](3,212992,null,0,b.fe,[t.ElementRef,t.Renderer2,t.NgZone],{enabled:[0,"enabled"],multiple:[1,"multiple"]},null),(e()(),t["\u0275eld"](4,0,null,null,9,"adf-empty-list",[],null,null,null,m.Cb,m.Q)),t["\u0275did"](5,49152,null,0,b.Tb,[],null,null),(e()(),t["\u0275eld"](6,0,null,1,7,"div",[["adf-empty-list-body",""]],null,null,null,null,null)),t["\u0275did"](7,16384,null,0,b.Sb,[],null,null),(e()(),t["\u0275eld"](8,0,null,null,2,"div",[["class","adf-empty-list-drag_drop"],["fxHide.lt-md","true"]],null,null,null,null,null)),(e()(),t["\u0275ted"](9,null,[" "," "])),t["\u0275pid"](131072,f.j,[f.k,t.ChangeDetectorRef]),(e()(),t["\u0275eld"](11,0,null,null,2,"div",[["class","adf-empty-list__any-files-here-to-add"],["fxHide.lt-md","true"]],null,null,null,null,null)),(e()(),t["\u0275ted"](12,null,[" "," "])),t["\u0275pid"](131072,f.j,[f.k,t.ChangeDetectorRef]),(e()(),t["\u0275eld"](14,0,null,null,6,"div",[["class","create-attachment"]],null,null,null,null,null)),(e()(),t["\u0275eld"](15,0,null,null,5,"button",[["color","primary"],["id","add_new_process_content_button"],["mat-button",""],["mat-icon-button",""],["mat-raised-button",""],["mode","['click']"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(e,n,d){var l=!0;return"click"===n&&(l=!1!==t["\u0275nov"](e,17).onClick(d)&&l),l}),v.d,v.b)),t["\u0275did"](16,180224,null,0,h.b,[t.ElementRef,I.a,g.h,[2,y.a]],{color:[0,"color"]},null),t["\u0275did"](17,212992,null,0,b.fe,[t.ElementRef,t.Renderer2,t.NgZone],{enabled:[0,"enabled"],mode:[1,"mode"],multiple:[2,"multiple"]},null),(e()(),t["\u0275eld"](18,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,S.b,S.a)),t["\u0275did"](19,9158656,null,0,A.b,[t.ElementRef,A.d,[8,null],[2,A.a]],null,null),(e()(),t["\u0275ted"](-1,0,["add"]))],(function(e,n){e(n,3,0,!0,!0),e(n,16,0,"primary"),e(n,17,0,!0,"['click']",!0),e(n,19,0)}),(function(e,n){e(n,9,0,t["\u0275unv"](n,9,0,t["\u0275nov"](n,10).transform("ADF_TASK_LIST.ATTACHMENT.EMPTY.DRAG-AND-DROP.TITLE"))),e(n,12,0,t["\u0275unv"](n,12,0,t["\u0275nov"](n,13).transform("ADF_TASK_LIST.ATTACHMENT.EMPTY.DRAG-AND-DROP.SUBTITLE"))),e(n,15,0,t["\u0275nov"](n,16).disabled||null,"NoopAnimations"===t["\u0275nov"](n,16)._animationMode),e(n,18,0,t["\u0275nov"](n,19).inline,"primary"!==t["\u0275nov"](n,19).color&&"accent"!==t["\u0275nov"](n,19).color&&"warn"!==t["\u0275nov"](n,19).color)}))}function O(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"upload-invoice",[],null,null,null,E,N)),t["\u0275prd"](512,null,_,_,[w.a,M.a]),t["\u0275did"](2,114688,null,0,P,[_,j.e,b.l],null,null)],(function(e,n){e(n,2,0)}),null)}var x=t["\u0275ccf"]("upload-invoice",P,O,{},{},[]),L=d("bu6E"),z=d("Ip0R"),H=d("eDkP"),X=d("Fzqc"),K=d("4tE/"),Y=d("M2Lx"),q=d("Wf4p"),J=d("jQLj"),Q=d("uGex"),U=d("ZYjt"),Z=d("mVsa"),G=d("v9Dh"),B=d("gIcY"),V=d("UyM+"),W=d("OzfB"),$=d("t/Na"),ee=d("OBdK"),ne=d("ziPl"),de=d("4c35"),te=d("qAlS"),le=d("de3e"),oe=d("/dO6"),pe=d("seP3"),ce=d("r43C"),ie=d("/VYK"),re=d("b716"),ae=d("LC5p"),me=d("0/Q6"),ue=d("Blfk"),se=d("9It4"),be=d("kWGw"),fe=d("y4qS"),ve=d("BHnd"),he=d("La40"),Ie=d("Z+uX"),ge=d("Nsh5"),ye=d("vARd"),Se=d("8mMr"),Ae=d("6Wmm"),Ce=d("vvyD"),Fe=d("AHN1"),Te=d("YhbO"),Re=d("jlZm"),_e=d("ZYCi"),we=d("21Lb"),Me=d("hUWP"),ke=d("3pJQ"),De=d("V9q+"),Pe=d("w+lc"),je=d("J12g"),Ne=d("c1yi"),Ee=function(){return function(){}}(),Oe=d("qD9m"),xe=d("YSh2");d.d(n,"UploadInvoiceModuleNgFactory",(function(){return Le}));var Le=t["\u0275cmf"](l,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,p.b,p.a,c.a,c.b,i.a,r.a,a.a,m.Yb,m.l,m.Zb,m.t,m.e,m.f,m.h,m.j,m.i,m.g,m.d,m.x,m.rb,m.nb,m.m,m.pb,m.F,m.k,m.E,m.v,m.A,m.H,m.r,m.tb,m.qb,m.z,m.G,m.q,m.b,m.w,m.n,m.u,m.c,m.ob,m.mb,m.y,m.s,m.p,m.o,m.B,m.a,m.sb,m.C,m.D,x,L.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,z.q,z.p,[t.LOCALE_ID,[2,z.F]]),t["\u0275mpd"](4608,H.c,H.c,[H.i,H.e,t.ComponentFactoryResolver,H.h,H.f,t.Injector,t.NgZone,z.d,X.b,[2,z.j]]),t["\u0275mpd"](5120,H.j,H.k,[H.c]),t["\u0275mpd"](5120,K.b,K.c,[H.c]),t["\u0275mpd"](4608,Y.c,Y.c,[]),t["\u0275mpd"](4608,q.b,q.b,[]),t["\u0275mpd"](5120,j.c,j.d,[H.c]),t["\u0275mpd"](135680,j.e,j.e,[H.c,t.Injector,[2,z.j],[2,j.b],j.c,[3,j.e],H.e]),t["\u0275mpd"](4608,J.i,J.i,[]),t["\u0275mpd"](5120,J.a,J.b,[H.c]),t["\u0275mpd"](4608,q.a,q.x,[[2,q.f],I.a]),t["\u0275mpd"](5120,Q.a,Q.b,[H.c]),t["\u0275mpd"](4608,U.f,q.c,[[2,q.g],[2,q.l]]),t["\u0275mpd"](5120,Z.b,Z.g,[H.c]),t["\u0275mpd"](5120,G.b,G.c,[H.c]),t["\u0275mpd"](4608,B.C,B.C,[]),t["\u0275mpd"](4608,V.a,V.n,[[2,q.f],q.a]),t["\u0275mpd"](4608,f.g,f.f,[]),t["\u0275mpd"](4608,f.c,f.e,[]),t["\u0275mpd"](4608,f.i,f.d,[]),t["\u0275mpd"](4608,f.b,f.a,[]),t["\u0275mpd"](4608,f.k,f.k,[f.l,f.g,f.c,f.i,f.b,f.m,f.n]),t["\u0275mpd"](4608,b.ac,b.ac,[b.ae]),t["\u0275mpd"](4608,b.sc,b.sc,[b.tc]),t["\u0275mpd"](135680,b.Ud,b.Ud,[b.me,b.l]),t["\u0275mpd"](4608,b.Td,b.Td,[b.g,A.d,U.c]),t["\u0275mpd"](4608,b.ad,b.ad,[b.Td]),t["\u0275mpd"](4608,b.Ic,b.Ic,[U.c]),t["\u0275mpd"](4608,b.hd,b.hd,[]),t["\u0275mpd"](4608,b.Je,b.Je,[]),t["\u0275mpd"](4608,b.Ke,b.Ke,[]),t["\u0275mpd"](4608,b.cd,b.cd,[]),t["\u0275mpd"](135680,b.Oc,b.Oc,[b.me,b.l]),t["\u0275mpd"](135680,b.yb,b.yb,[b.me,b.l]),t["\u0275mpd"](4608,b.S,b.S,[z.d,b.Rc,b.md]),t["\u0275mpd"](4608,B.e,B.e,[]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,(function(e,n){return[W.k(e,n)]}),[z.d,t.PLATFORM_ID]),t["\u0275mpd"](4608,$.i,$.o,[z.d,t.PLATFORM_ID,$.m]),t["\u0275mpd"](4608,$.p,$.p,[$.i,$.n]),t["\u0275mpd"](5120,$.a,(function(e){return[e]}),[$.p]),t["\u0275mpd"](4608,$.l,$.l,[]),t["\u0275mpd"](6144,$.j,null,[$.l]),t["\u0275mpd"](4608,$.h,$.h,[$.j]),t["\u0275mpd"](6144,$.b,null,[$.h]),t["\u0275mpd"](4608,$.f,$.k,[$.b,t.Injector]),t["\u0275mpd"](4608,$.c,$.c,[$.f]),t["\u0275mpd"](135680,g.h,g.h,[t.NgZone,I.a]),t["\u0275mpd"](4608,ee.f,ee.f,[t.TemplateRef]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,ne.a,ne.a,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,q.l,q.l,[[2,q.d],[2,U.g]]),t["\u0275mpd"](1073742336,I.b,I.b,[]),t["\u0275mpd"](1073742336,q.w,q.w,[]),t["\u0275mpd"](1073742336,q.u,q.u,[]),t["\u0275mpd"](1073742336,q.r,q.r,[]),t["\u0275mpd"](1073742336,de.g,de.g,[]),t["\u0275mpd"](1073742336,te.c,te.c,[]),t["\u0275mpd"](1073742336,H.g,H.g,[]),t["\u0275mpd"](1073742336,K.e,K.e,[]),t["\u0275mpd"](1073742336,h.c,h.c,[]),t["\u0275mpd"](1073742336,s.f,s.f,[]),t["\u0275mpd"](1073742336,Y.d,Y.d,[]),t["\u0275mpd"](1073742336,le.c,le.c,[]),t["\u0275mpd"](1073742336,oe.f,oe.f,[]),t["\u0275mpd"](1073742336,pe.e,pe.e,[]),t["\u0275mpd"](1073742336,j.k,j.k,[]),t["\u0275mpd"](1073742336,g.a,g.a,[]),t["\u0275mpd"](1073742336,J.j,J.j,[]),t["\u0275mpd"](1073742336,q.n,q.n,[]),t["\u0275mpd"](1073742336,ce.b,ce.b,[]),t["\u0275mpd"](1073742336,A.c,A.c,[]),t["\u0275mpd"](1073742336,ie.c,ie.c,[]),t["\u0275mpd"](1073742336,re.c,re.c,[]),t["\u0275mpd"](1073742336,ae.b,ae.b,[]),t["\u0275mpd"](1073742336,me.d,me.d,[]),t["\u0275mpd"](1073742336,q.y,q.y,[]),t["\u0275mpd"](1073742336,q.o,q.o,[]),t["\u0275mpd"](1073742336,ue.c,ue.c,[]),t["\u0275mpd"](1073742336,se.c,se.c,[]),t["\u0275mpd"](1073742336,Q.d,Q.d,[]),t["\u0275mpd"](1073742336,be.c,be.c,[]),t["\u0275mpd"](1073742336,fe.p,fe.p,[]),t["\u0275mpd"](1073742336,ve.m,ve.m,[]),t["\u0275mpd"](1073742336,he.k,he.k,[]),t["\u0275mpd"](1073742336,Z.e,Z.e,[]),t["\u0275mpd"](1073742336,Ie.c,Ie.c,[]),t["\u0275mpd"](1073742336,ge.h,ge.h,[]),t["\u0275mpd"](1073742336,ye.e,ye.e,[]),t["\u0275mpd"](1073742336,Se.b,Se.b,[]),t["\u0275mpd"](1073742336,G.e,G.e,[]),t["\u0275mpd"](1073742336,Ae.b,Ae.b,[]),t["\u0275mpd"](1073742336,Ce.a,Ce.a,[]),t["\u0275mpd"](1073742336,B.z,B.z,[]),t["\u0275mpd"](1073742336,B.l,B.l,[]),t["\u0275mpd"](1073742336,f.h,f.h,[]),t["\u0275mpd"](1073742336,Fe.f,Fe.f,[]),t["\u0275mpd"](1073742336,V.i,V.i,[]),t["\u0275mpd"](1073742336,V.o,V.o,[]),t["\u0275mpd"](1073742336,V.m,V.m,[]),t["\u0275mpd"](1073742336,Te.c,Te.c,[]),t["\u0275mpd"](1073742336,Re.d,Re.d,[]),t["\u0275mpd"](1073742336,b.Fe,b.Fe,[]),t["\u0275mpd"](1073742336,_e.o,_e.o,[[2,_e.u],[2,_e.l]]),t["\u0275mpd"](1073742336,b.lb,b.lb,[]),t["\u0275mpd"](1073742336,b.db,b.db,[]),t["\u0275mpd"](1073742336,b.yd,b.yd,[]),t["\u0275mpd"](1073742336,b.Ab,b.Ab,[]),t["\u0275mpd"](1073742336,b.R,b.R,[]),t["\u0275mpd"](1073742336,b.pb,b.pb,[]),t["\u0275mpd"](1073742336,b.d,b.d,[]),t["\u0275mpd"](1073742336,B.v,B.v,[]),t["\u0275mpd"](1073742336,b.Xd,b.Xd,[]),t["\u0275mpd"](1073742336,W.c,W.c,[]),t["\u0275mpd"](1073742336,we.f,we.f,[]),t["\u0275mpd"](1073742336,Me.d,Me.d,[]),t["\u0275mpd"](1073742336,ke.a,ke.a,[]),t["\u0275mpd"](1073742336,De.a,De.a,[[2,W.h],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,b.qe,b.qe,[]),t["\u0275mpd"](1073742336,b.Jd,b.Jd,[]),t["\u0275mpd"](1073742336,b.zb,b.zb,[]),t["\u0275mpd"](1073742336,b.vc,b.vc,[]),t["\u0275mpd"](1073742336,b.ke,b.ke,[]),t["\u0275mpd"](1073742336,$.e,$.e,[]),t["\u0275mpd"](1073742336,$.d,$.d,[]),t["\u0275mpd"](1073742336,b.k,b.k,[]),t["\u0275mpd"](1073742336,b.sd,b.sd,[]),t["\u0275mpd"](1073742336,b.J,b.J,[]),t["\u0275mpd"](1073742336,b.Qb,b.Qb,[]),t["\u0275mpd"](1073742336,b.ec,b.ec,[]),t["\u0275mpd"](1073742336,b.X,b.X,[]),t["\u0275mpd"](1073742336,b.Xc,b.Xc,[]),t["\u0275mpd"](1073742336,b.Mc,b.Mc,[]),t["\u0275mpd"](1073742336,b.Fc,b.Fc,[]),t["\u0275mpd"](1073742336,b.u,b.u,[]),t["\u0275mpd"](1073742336,b.Qd,b.Qd,[]),t["\u0275mpd"](1073742336,b.yc,b.yc,[]),t["\u0275mpd"](1073742336,b.Md,b.Md,[]),t["\u0275mpd"](1073742336,b.ld,b.ld,[]),t["\u0275mpd"](1073742336,b.Gd,b.Gd,[]),t["\u0275mpd"](1073742336,b.hb,b.hb,[b.ae]),t["\u0275mpd"](1073742336,Pe.b,Pe.b,[]),t["\u0275mpd"](1073742336,ee.d,ee.d,[]),t["\u0275mpd"](1073742336,je.b,je.b,[]),t["\u0275mpd"](1073742336,Ne.Fb,Ne.Fb,[]),t["\u0275mpd"](1073742336,Ne.xb,Ne.xb,[]),t["\u0275mpd"](1073742336,Ee,Ee,[]),t["\u0275mpd"](1073742336,Oe.a,Oe.a,[]),t["\u0275mpd"](1073742336,l,l,[b.ae]),t["\u0275mpd"](256,oe.a,{separatorKeyCodes:[xe.f]},[]),t["\u0275mpd"](256,q.e,q.i,[]),t["\u0275mpd"](256,V.b,V.c,[]),t["\u0275mpd"](256,f.n,void 0,[]),t["\u0275mpd"](256,f.m,void 0,[]),t["\u0275mpd"](256,$.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,$.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,_e.j,(function(){return[[{path:"",component:P,canActivate:[b.o]}]]}),[])])}))}}]);