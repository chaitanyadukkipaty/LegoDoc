(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],d=0,v=[];d<l.length;d++)i=l[d],r[i]&&v.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00b6":function(t,e,a){"use strict";var n=a("c548"),r=a.n(n);r.a},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},1507:function(t,e,a){"use strict";var n=a("cccb"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("v-app",{attrs:{id:"inspire"}},[a("v-toolbar",{attrs:{dark:"",color:"#0356B3"}},[a("router-link",{attrs:{to:{path:"/home"}}},[a("v-toolbar-title",{staticClass:"white--text"},[t._v("Lego Doc")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[0==t.authenticated?a("v-btn",{staticClass:"font-weight-regular",attrs:{flat:"",to:"/home"}},[t._v("Home")]):t._e(),t.authenticated?a("v-btn",{staticClass:"font-weight-regular",attrs:{flat:"",to:"/home"}},[t._v("Home")]):t._e(),t.authenticated?a("v-btn",{staticClass:"font-weight-regular",attrs:{flat:"",to:"/upload"}},[t._v("Upload")]):t._e(),0==t.authenticated?a("v-btn",{staticClass:"font-weight-regular",attrs:{flat:"",to:"/login"}},[t._v("Login")]):t._e(),0==t.authenticated?a("v-btn",{staticClass:"font-weight-regular",attrs:{flat:"",to:"/register"}},[t._v("Register")]):t._e(),t.authenticated?a("v-btn",{staticClass:"font-weight-regular",attrs:{flat:"",to:"/",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e()],1)],1),a("router-view",{attrs:{authenticated:t.authenticated,username:t.username},on:{authenticated:t.setAuthenticated,username:t.setUsername}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("head",[a("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",rel:"stylesheet"}})])}],i=(a("a481"),{name:"app",data:function(){return{authenticated:!1,username:"1234"}},mounted:function(){this.authenticated||this.$router.replace({name:"Home"})},methods:{setAuthenticated:function(t){this.authenticated=t},setUsername:function(t){this.username=t},logout:function(){this.authenticated=!1}}}),l=i,o=(a("034f"),a("2877")),c=Object(o["a"])(l,r,s,!1,null,null,null),u=c.exports,d=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("v-app",{attrs:{id:"inspire"}},[a("vue-particles",{attrs:{color:"#dedede",particleOpacity:1,particlesNumber:100,shapeType:"circle",particleSize:5,linesColor:"#000",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"elevation-12"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Login")])],1),a("v-card-text",[a("v-text-field",{attrs:{"prepend-icon":"person",label:"Login ID",type:"text",rules:t.idRules,required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password",type:"password",rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:t.validate}},[t._v("\n                  Validate\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},m=[],f=a("bc3a"),p=a.n(f),h=a("ff07"),b=h.ip,_={name:"login",data:function(){return{dialog:!0,valid:!0,id:"",category:0,idRules:[function(t){return!!t||"Login ID is required"}],password:"",passwordRules:[function(t){return!!t||"Password is required"}]}},methods:{validate:function(){var t=this;if(this.$refs.form.validate()){var e=this.id,a=this.password;p.a.post("http://".concat(b,"/login"),{username:e,password:a}).then(function(e){t.$emit("authenticated",!0),t.$emit("username",t.id),t.$router.replace({name:"Home",params:{id:t.id}})}).catch()}}}},y=_,x=Object(o["a"])(y,v,m,!1,null,"20d28c16",null),g=x.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Add CSI Member")])],1),a("v-card-text",[a("v-text-field",{attrs:{label:"Student ID",type:"text",rules:t.idRules,counter:10,required:""},model:{value:t.studentId,callback:function(e){t.studentId=e},expression:"studentId"}}),a("v-text-field",{attrs:{rules:t.nameRules,counter:25,label:"Full name",required:""},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{rules:t.phoneRules,counter:10,label:"Phone no.",required:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("v-select",{attrs:{items:t.yearList,label:"Year"},model:{value:t.yearSelect,callback:function(e){t.yearSelect=e},expression:"yearSelect"}}),a("v-select",{attrs:{items:t.branchList,label:"Branch"},model:{value:t.branchSelect,callback:function(e){t.branchSelect=e},expression:"branchSelect"}}),a("v-text-field",{attrs:{rules:t.rollRules,counter:2,label:"Roll no.",required:""},model:{value:t.rollno,callback:function(e){t.rollno=e},expression:"rollno"}}),a("v-select",{attrs:{items:t.batchList,label:"Batch"},model:{value:t.batchSelect,callback:function(e){t.batchSelect=e},expression:"batchSelect"}}),a("v-select",{attrs:{items:t.membershipList,label:"Membership Years"},model:{value:t.membershipSelect,callback:function(e){t.membershipSelect=e},expression:"membershipSelect"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:t.validate}},[t._v("\n                  Submit\n                ")])],1)],1)],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{timeout:3e3,top:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(this.text)+"\n      "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n        Close\n      ")])],1)],1)},w=[],S={name:"dashAdd",data:function(){return{snackbar:!1,text:"",yearSelect:"",yearList:["FE","SE","TE","BE"],branchSelect:"",branchList:["IT","COMPS","EXTC","MECH-A","MECH-B"],batchSelect:"",batchList:["A","B","C","D"],membershipSelect:"",membershipList:["One Year","Two Years","Three Years","Four Years"],valid:!0,studentId:"",idRules:[function(t){return!!t||"Student ID is required"},function(t){return t.length<=10||"ID must be less than 10 characters"}],fullName:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=25||"Name must be less than 25 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],phone:"",phoneRules:[function(t){return!!t||"Phone number is required"},function(t){return t.length<=25||"Phone must be less than 25 characters"},function(t){return!isNaN(t)||"Phone number is invalid"}],rollno:"",rollRules:[function(t){return!!t||"Roll number is required"},function(t){return t.length<=2||"Phone must be less than 2 characters"},function(t){return!isNaN(t)||"Phone number is invalid"}]}},methods:{validate:function(){var t,e=this,a=this.studentId,n=this.fullName,r=this.email,s=this.phone,i=this.yearSelect,l=this.branchSelect,o=this.rollno,c=this.batchSelect;t="One Year"==this.membershipSelect?"1":"Two Years"==this.membershipSelect?"2":"Three Years"==this.membershipSelect?"3":"4",p.a.post("http://206.189.135.147:8081/profile/new",{studentId:a,fullName:n,email:r,phone:s,yearSelect:i,branchSelect:l,rollno:o,batchSelect:c,membershipSelect:t}).then(function(t){e.text="Successfull"}).catch(function(t){e.text="Unsuccessfull"}),this.snackbar=!0}}},C=S,E=Object(o["a"])(C,k,w,!1,null,"77abee08",null),j=(E.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-card",[a("v-card-title",[t._v("\n        CSI Members\n        "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.members,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),a("td",[t._v(t._s(e.item.name))]),a("td",[t._v(t._s(e.item.email))]),a("td",[t._v(t._s(e.item.phone))]),a("td",[t._v(t._s(e.item.year))]),a("td",[t._v(t._s(e.item.branch))]),a("td",[t._v(t._s(e.item.rollno))]),a("td",[t._v(t._s(e.item.batch))]),a("td",[t._v(t._s(e.item.membership_left))])]}}])},[a("v-alert",{attrs:{value:!0,color:"error",icon:"warning"},scopedSlots:t._u([{key:"no-results",fn:function(){return[t._v('\n          Your search for "'+t._s(t.search)+'" found no results.\n        ')]},proxy:!0}])})],1)],1)],1)],1)}),O=[],L={name:"dashMembers",data:function(){return{search:"",headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Year",value:"year"},{text:"Branch",value:"branch"},{text:"Roll no.",value:"rollno"},{text:"Batch",value:"batch"},{text:"Membership Left",value:"years"}],members:[]}},mounted:function(){var t=this;p.a.post("http://206.189.135.147:8081/profile/view",{}).then(function(e){console.log(e),t.members=e.data}).catch()}},R=L,q=Object(o["a"])(R,j,O,!1,null,"0f0d2dc1",null),D=(q.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("cards",{attrs:{authenticated:t.authenticated}})],1)}),P=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-container",{staticStyle:{background:"#e3f2fd"},attrs:{fluid:"","grid-list-xl":""}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-combobox",{attrs:{label:"Select your field",items:t.fields},on:{change:function(e){return t.changeField()}},model:{value:t.fieldselect,callback:function(e){t.fieldselect=e},expression:"fieldselect"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-combobox",{attrs:{items:t.sortedArray1,label:"Search for your template","item-text":"name","single-line":"","return-object":""},on:{change:function(e){return t.changeArray()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.sortedArray1,function(e){return a("v-flex",{key:e._id,attrs:{xs12:"",md6:"",lg4:""}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#1565c0",dark:"","max-width":"400","min-height":"200"}},[a("v-card-title",{staticClass:"myclass",on:{click:function(a){return t.myfun(e)}}},[a("span",{staticClass:"headline font-condensed"},[t._v(t._s(e.name))])]),a("v-card-text",{staticClass:"title font-condensed font-weight-light"},[t._v("\n              "+t._s(e.des)+"\n            ")]),a("v-card-actions",[a("v-list-tile",{staticClass:"grow"},[a("v-layout",{attrs:{"align-center":"","justify-start":""}},[a("v-flex",{attrs:{xs12:""}},[1==e.upvoteflag?a("v-btn",{attrs:{slot:"activator",flat:"",icon:"",id:t.iconID},on:{click:function(a){return t.upvote(e)}},slot:"activator"},[a("v-icon",{staticClass:"mr-1",attrs:{left:""}},[t._v("arrow_upward")])],1):t._e(),0==e.upvoteflag?a("v-btn",{attrs:{slot:"activator",flat:"",icon:""},on:{click:function(a){return t.upvote(e)}},slot:"activator"},[a("v-icon",{staticClass:"mr-1",attrs:{left:""}},[t._v("arrow_upward")])],1):t._e(),a("span",{staticClass:"subheading mr-2"},[t._v(t._s(e.upvotes))]),1==e.downvoteflag?a("v-btn",{attrs:{slot:"activator",flat:"",icon:"",id:t.iconID2},on:{click:function(a){return t.downvote(e)}},slot:"activator"},[a("v-icon",{staticClass:"mr-1 myclass"},[t._v("arrow_downward")])],1):t._e(),0==e.downvoteflag?a("v-btn",{attrs:{slot:"activator",flat:"",icon:""},on:{click:function(a){return t.downvote(e)}},slot:"activator"},[a("v-icon",{staticClass:"mr-1 myclass"},[t._v("arrow_downward")])],1):t._e()],1)],1)],1),a("v-spacer"),a("h4",{staticClass:"font-weight-light"},[t._v(t._s(e.type))]),a("pre",[t._v(" | ")]),a("h4",{staticClass:"font-weight-light"},[t._v(t._s(e.username))])],1)],1)],1)}),1)],1)],1)],1)},$=[],I=(a("7f7f"),a("55dd"),a("ff07")),M=I.ip,A={name:"cards",props:["authenticated"],data:function(){return{show:!1,myname:"caldem",iconID:"myID",iconID2:"myID2",name:"",fieldselect:"",fields:["Freelancer","Software","Writers","Photography","Wills","Real Estate","Personal","Designer","Sales & Purchase","MBA"],array:[],array1:[]}},computed:{sortedArray:function(){function t(t,e){return t.upvotes<e.upvotes?1:t.upvotes>e.upvotes?-1:0}return this.array.sort(t)},sortedArray1:function(){function t(t,e){return t.upvotes<e.upvotes?1:t.upvotes>e.upvotes?-1:0}return this.array1.sort(t)}},methods:{changeArray:function(){this.myFunction()},changeField:function(){this.myFunction()},myFunction:function(){var t=this;if(this.fieldselect){var e=this.array.filter(function(e){if(e.type==t.fieldselect)return e});if(this.array1=e,null!=this.name.name){e=this.array1.filter(function(e){if(e.name==t.name.name)return e});this.array1=e}}else this.array1=this.array,this.name.name=""},myfun:function(t){1==this.authenticated&&this.$router.replace({name:"TemplateContent",params:{_id:t._id}})},clickme:function(){document.querySelector(".sai");var t=document.querySelector(".getcontent"),e=document.querySelector(".editor"),a=e.innerHTML;t.style.display="block",t.textContent=a},upvote:function(t){0==t.upvoteflag?(t.upvotes=t.upvotes+1,t.upvoteflag=!0,t.downvoteflag=!1):(t.upvotes=t.upvotes-1,t.upvoteflag=!1)},downvote:function(t){0==t.downvoteflag?(t.upvotes=t.upvotes-1,t.upvoteflag=!1,t.downvoteflag=!0):(t.upvotes=t.upvotes+1,t.downvoteflag=!1)}},created:function(){var t=this;p.a.post("http://".concat(M,"/"),{}).then(function(e){console.log(e.data),t.array=e.data,t.array1=e.data}).catch()}},N=A,B=(a("1507"),Object(o["a"])(N,T,$,!1,null,"22275270",null)),U=B.exports,F={name:"home",components:{cards:U},props:["authenticated"],data:function(){return{}},created:function(){}},H=F,Y=Object(o["a"])(H,D,P,!1,null,"401463ec",null),z=Y.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-container",{staticStyle:{background:"#e3f2fd"},attrs:{fluid:"","grid-list-xl":""}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs9:""}},[a("v-card",[a("editor")],1)],1),a("v-flex",{attrs:{xs3:""}},[a("v-card",[a("v-card-title",{staticClass:"headline",staticStyle:{color:"#0356B3"},attrs:{"text-lg-left":""}},[t._v(t._s(this.title))]),a("v-card-text",{staticClass:"text-lg-left"},[a("h2",{staticStyle:{display:"inline-block"}},[t._v("Username")]),a("pre",{staticStyle:{display:"inline-block"}},[t._v(" : ")]),a("h5",{staticClass:"headline",staticStyle:{color:"#0356B3",display:"inline-block"}},[t._v(t._s(this.username))]),a("br"),a("h2",{staticStyle:{display:"inline-block"}},[t._v("Type")]),a("pre",{staticStyle:{display:"inline-block"}},[t._v(" : ")]),a("h5",{staticClass:"headline",staticStyle:{color:"#0356B3",display:"inline-block"}},[t._v(t._s(this.type))]),a("br"),a("h2",{staticStyle:{display:"inline-block"}},[t._v("Date")]),a("pre",{staticStyle:{display:"inline-block"}},[t._v(" : ")]),a("h5",{staticClass:"headline",staticStyle:{color:"#0356B3",display:"inline-block"}},[t._v(t._s(this.date))]),a("br"),a("br")]),a("v-btn",{staticClass:"sai",attrs:{block:"",color:"primary",dark:""},on:{click:t.clickme}},[t._v("Download"),a("pre",[t._v(" ")]),a("v-icon",{attrs:{small:""}},[t._v("save_alt")])],1)],1)],1)],1)],1)],1)],1)],1)},J=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"mx-auto"},[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-card",{staticClass:"mx-auto"},[a("v-title",[a("span",{staticClass:"headline font-weight-bold"},[t._v("iefwhouiewfhouwe niue ")])]),a("v-card-text",{staticClass:"title"},[t._v("\n                        oifehwoui\n                    ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("favorite")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("share")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},X=[],G={},K=G,Q=Object(o["a"])(K,V,X,!1,null,"3c4dfe26",null),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("html",{attrs:{lang:"en"}},[t._m(0),a("body",[a("div",{staticClass:"toolbar"},[a("button",{attrs:{onclick:"document.execCommand('underline', false, '');"}},[a("v-icon",[t._v("format_underlined")])],1),a("button",{attrs:{onclick:"document.execCommand('italic', false, '');"}},[a("v-icon",[t._v("format_italic")])],1),a("button",{attrs:{onclick:"document.execCommand('bold', false, '');"}},[a("v-icon",[t._v("format_bold")])],1),a("button",{attrs:{onclick:"document.execCommand('cut',false,'')"}},[a("v-icon",[t._v("not_interested")])],1),a("button",{attrs:{onclick:"document.execCommand('undo',false,'')"}},[a("v-icon",[t._v("undo")])],1),a("button",{attrs:{onclick:"document.execCommand('redo',false,'')"}},[a("v-icon",[t._v("redo")])],1),a("button",{attrs:{onclick:"document.execCommand('strikeThrough',false,'')"}},[a("v-icon",[t._v("format_strikethrough")])],1),a("button",{attrs:{onclick:"document.execCommand('delete',false,'')"}},[a("v-icon",[t._v("backspace")])],1),a("button",{attrs:{onclick:"document.execCommand('selectAll',false,'')"}},[a("v-icon",[t._v("select_all")])],1),a("button",{attrs:{onclick:"document.execCommand('justifyCenter',false,'')"}},[a("v-icon",[t._v("format_align_center")])],1),a("button",{attrs:{onclick:"document.execCommand('justifyLeft',false,'')"}},[a("v-icon",[t._v("format_align_left")])],1),a("button",{attrs:{onclick:"document.execCommand('justifyRight',false,'')"}},[a("v-icon",[t._v("format_align_right")])],1)]),t._m(1)])])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("head",[a("link",{attrs:{rel:"preconnect",href:"https://cdnjs.cloudflare.com"}}),a("meta",{attrs:{charset:"UTF-8"}}),a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),a("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"ie=edge"}}),a("title",[t._v("Document")]),a("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center"},[a("div",{staticClass:"editor",attrs:{id:"abc",contenteditable:""}},[a("p",[t._v("Start typing")])])])}],at={name:"editor"},nt=at,rt=(a("00b6"),Object(o["a"])(nt,tt,et,!1,null,"5633a646",null)),st=rt.exports,it=a("ff07"),lt=it.ip,ot={name:"templatecontent",_id:"",components:{commets:Z,editor:st},data:function(){return{title:"Calden",des:"Some Description",date:"17/03/2019",type:"Chaitanya did not gave",username:"calden",template:"<h1>Calde</h1>"}},methods:{clickme:function(){var t=document.querySelector(".editor"),e=t.innerHTML;p.a.post("http://".concat(lt,"/printPDF"),{htmldata:e}).then(function(t){var e=t.data;p()({url:"http://".concat(lt,"/printPDF/")+e,method:"GET",responseType:"blob"}).then(function(t){var e=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=e,a.setAttribute("download","file.pdf"),document.body.appendChild(a),a.click()})}).catch()}},created:function(){var t=this;this._id=this.$route.params._id;var e=this._id;p.a.post("http://".concat(lt,"/viewtemplate"),{_id:e}).then(function(e){console.log(e.data),t.title=e.data.name,t.type=e.data.type,t.username=e.data.username,t.des=e.data.des,document.getElementById("abc").innerHTML=e.data.template}).catch(function(t){console.log(t)})}},ct=ot,ut=Object(o["a"])(ct,W,J,!1,null,"91bee496",null),dt=ut.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("textinput",{attrs:{username:t.username}})},mt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-text-field",{attrs:{label:"Title",type:"text",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-select",{attrs:{items:t.typeList,label:"Type"},model:{value:t.typeSelect,callback:function(e){t.typeSelect=e},expression:"typeSelect"}})],1),a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-textarea",{attrs:{outline:"",name:"des",label:"Description"},model:{value:t.des,callback:function(e){t.des=e},expression:"des"}})],1)],1)],1),a("editor"),a("v-flex",{attrs:{xs8:"","offset-xs2":""}},[a("v-alert",{attrs:{value:!0,type:"info"}},[t._v("\n      Use ~ to create input text, eg: ~Name~\n    ")])],1),a("v-flex",{attrs:{xs10:"","offset-xs9":""}},[a("v-btn",{staticClass:"sai",attrs:{color:"primary",dark:"",right:"",large:""},on:{click:t.clickme}},[t._v("Upload")])],1)],1)],1)],1),a("v-snackbar",{attrs:{timeout:4e3,top:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n     "+t._s(this.text)+"\n     "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n       Close\n     ")])],1)],1)},pt=[],ht=a("ff07"),bt=ht.ip,_t={name:"textinput",components:{editor:st},props:["username"],data:function(){return{snackbar:!1,valid:!1,text:"",name:"",des:"",typeSelect:"",typeList:["Freelancer","Software","Writers","Photography","Wills","Real Estate","Personal","Designer","Sales & Purchase","MBA"]}},methods:{clickme:function(){var t=this,e=document.querySelector(".editor"),a=e.innerHTML;console.log(this.username);var n=this.username,r=this.name,s=this.des,i=this.typeSelect,l=a;p.a.post("http://".concat(bt,"/uploadtemplate"),{username:n,name:r,des:s,type:i,template:l}).then(function(e){console.log(e.data),t.array=e.data,t.text="Successful upload"}).catch(function(e){t.text="Unsucessful upload"}),this.snackbar=!0}}},yt=_t,xt=Object(o["a"])(yt,ft,pt,!1,null,"3503ec74",null),gt=xt.exports,kt={name:"upload",components:{textinput:gt},props:["username"]},wt=kt,St=Object(o["a"])(wt,vt,mt,!1,null,"abea1ac4",null),Ct=St.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("vue-particles",{attrs:{color:"#dedede",particleOpacity:1,particlesNumber:100,shapeType:"circle",particleSize:5,linesColor:"#000",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"elevation-12"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Register")])],1),a("v-card-text",[a("v-text-field",{attrs:{"prepend-icon":"person",label:"User Name",type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{"prepend-icon":"person",label:"name",type:"text",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{"prepend-icon":"email",label:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.validate}},[t._v("\n                  Validate\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},jt=[],Ot=a("7618"),Lt=(a("e096"),a("ff07")),Rt=Lt.ip,qt={name:"register",data:function(){return{dialog:!0,username:"",name:"",email:"",password:""}},methods:{validate:function(){if(this.$refs.form.validate()){var t=this.username,e=this.name,a=this.email,n=this.password,r={username:t,name:e,email:a,password:n};console.log(Object(Ot["a"])(r)),p.a.post("http://".concat(Rt,"/register"),{username:t,name:e,email:a,password:n}).then(function(t){console.log("OK")}).catch(function(t){console.log(t)})}}}},Dt=qt,Pt=Object(o["a"])(Dt,Et,jt,!1,null,"1e4aa62a",null),Tt=Pt.exports;n["default"].use(d["a"]);var $t=new d["a"]({routes:[{path:"/",redirect:{name:"Home"}},{path:"/login",name:"Login",component:g},{path:"/home",name:"Home",component:z},{path:"/templatecontent",name:"TemplateContent",component:dt},{path:"/upload",name:"Upload",component:Ct},{path:"/register",name:"Register",component:Tt}]}),It=a("ce5b"),Mt=a.n(It),At=(a("bf40"),a("98c9"));n["default"].use(Mt.a),n["default"].use(At["a"]),n["default"].use(d["a"]),n["default"].config.productionTip=!1,new n["default"]({router:$t,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},c548:function(t,e,a){},cccb:function(t,e,a){},ff07:function(t,e){ip="localhost:8082",t.exports={ip:ip}}});
//# sourceMappingURL=app.278a13bc.js.map