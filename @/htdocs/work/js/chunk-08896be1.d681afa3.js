(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08896be1"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function o(t,e,r,o,a,n,s){try{var i=t[n](s),l=i.value}catch(c){return void r(c)}i.done?e(l):Promise.resolve(l).then(o,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var s=t.apply(e,r);function i(t){o(s,a,n,i,l,"next",t)}function l(t){o(s,a,n,i,l,"throw",t)}i(void 0)}))}}},"1dde":function(t,e,r){var o=r("d039"),a=r("b622"),n=r("2d00"),s=a("species");t.exports=function(t){return n>=51||!o((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var o=r("23e7"),a=r("b727").filter,n=r("1dde"),s=r("ae40"),i=n("filter"),l=s("filter");o({target:"Array",proto:!0,forced:!i||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"8d5b":function(t,e,r){t.exports=r.p+"img/tirhalLogo2.cc4cba6d.png"},"96cf":function(t,e,r){var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch($){l=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof v?e:v,n=Object.create(a.prototype),s=new O(o||[]);return n._invoke=R(t,r,s),n}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}t.wrap=c;var d="suspendedStart",f="suspendedYield",m="executing",p="completed",h={};function v(){}function b(){}function g(){}var y={};y[n]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(L([])));k&&k!==r&&o.call(k,n)&&(y=k);var x=g.prototype=v.prototype=Object.create(y);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function U(t,e){function r(a,n,s,i){var l=u(t[a],t,n);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,i)}),(function(t){r("throw",t,s,i)})):e.resolve(d).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,i)}))}i(l.arg)}var a;function n(t,o){function n(){return new e((function(e,a){r(t,o,e,a)}))}return a=a?a.then(n,n):n()}this._invoke=n}function R(t,e,r){var o=d;return function(a,n){if(o===m)throw new Error("Generator is already running");if(o===p){if("throw"===a)throw n;return S()}r.method=a,r.arg=n;while(1){var s=r.delegate;if(s){var i=_(s,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=u(t,e,r);if("normal"===l.type){if(o=r.done?p:f,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}function _(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var n=a.arg;return n?n.done?(r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function L(t){if(t){var r=t[n];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function r(){while(++a<t.length)if(o.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:S}}function S(){return{value:e,done:!0}}return b.prototype=x.constructor=g,g.constructor=b,b.displayName=l(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},A(U.prototype),U.prototype[s]=function(){return this},t.AsyncIterator=U,t.async=function(e,r,o,a,n){void 0===n&&(n=Promise);var s=new U(c(e,r,o,a),n);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},A(x),l(x,i,"Generator"),x[n]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(o,a){return i.type="throw",i.arg=t,r.next=o,a&&(r.method="next",r.arg=e),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],i=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var l=o.call(s,"catchLoc"),c=o.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var a=o.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:L(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=o}catch(a){Function("r","regeneratorRuntime = r")(o)}},a547:function(t,e,r){"use strict";r.r(e);var o,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-navbar",{attrs:{variant:"faded",type:"light"}},[o("b-navbar-brand",{attrs:{href:"#"}},[o("img",{staticStyle:{width:"100px",hight:"100px"},attrs:{src:r("8d5b"),alt:"Kitten","position:":"",sticky:""}})]),o("b-navbar-nav",{staticClass:"ml-auto"},[o("div",[o("b-button",{staticStyle:{background:"#f05623",width:"150px","margin-left":"50px"},attrs:{href:"drivers",pill:"",size:"md"}},[t._v("Drivers")]),o("b-button",{staticStyle:{background:"#f05623",width:"150px"},attrs:{pill:"",size:"md"},on:{click:t.logOut}},[t._v("Log Out")])],1)])],1),o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"my-1",attrs:{lg:"6"}}),o("b-col",{staticClass:"my-1",attrs:{lg:"6"}}),o("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[o("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[o("b-input-group",{attrs:{size:"sm"}},[o("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),o("b-input-group-append",[o("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),o("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[o("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter On","label-cols-sm":"3","label-align-sm":"right","label-size":"sm",description:"Leave all unchecked to filter on all data"}},[o("b-form-checkbox-group",{staticClass:"mt-1",model:{value:t.filterOn,callback:function(e){t.filterOn=e},expression:"filterOn"}},[o("b-form-checkbox",{attrs:{value:"name"}},[t._v("Name")]),o("b-form-checkbox",{attrs:{value:"true"}},[t._v("isActive")]),o("b-form-checkbox",{attrs:{value:"true"}},[t._v("isAdmin")])],1)],1)],1)],1),o("b-table",{ref:"table",attrs:{"show-empty":"",small:"",busy:t.isBusy,items:t.myProvider,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,filterIncludedFields:t.filterOn},on:{"update:busy":function(e){t.isBusy=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(e.value.first)+" "+t._s(e.value.last)+" ")]}},{key:"cell(actions)",fn:function(e){return[o("b-col",[o("b-icon",{attrs:{icon:"pencil-square",scale:"2"},on:{click:function(r){return t.updateUser(e)}}}),o("b-icon",{staticStyle:{"margin-left":"30px"},attrs:{icon:"trash",scale:"2"},on:{click:function(r){return t.deleteUser(e)}}},[t._v(' scale="2" class="bg-info">')]),o("b-button",{staticStyle:{"margin-left":"30px"},attrs:{size:"sm",variant:"danger"},on:{click:function(r){return t.updatePassword(e)}}},[t._v(" Reset password ")])],1)]}},{key:"row-details",fn:function(e){return[o("b-card",[o("ul",t._l(e.item,(function(e,r){return o("li",{key:r},[t._v(t._s(r)+": "+t._s(e))])})),0)])]}}])}),o("b-row",[o("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"mr-1",attrs:{variant:"success"}},[t._v(" Add User ")])],1),o("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[o("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),o("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing3","hide-footer":"",title:"Reset user password"},on:{show:t.resetModal,hidden:t.resetModal}},[o("form",{on:{submit:[t.onResetPassword,function(t){t.stopPropagation(),t.preventDefault()}],hidden:t.resetModalReset}},[o("b-form-group",{attrs:{id:"input-group-2",label:"Password","label-for":"input-2","invalid-feedback":t.invalidFeedback2,"valid-feedback":t.validFeedback2,state:t.state2}},[o("b-form-input",{attrs:{type:"password",id:"text-password-2","aria-describedby":"password-help-block",required:"",placeholder:"password",state:t.state2},model:{value:t.formReset.password1,callback:function(e){t.$set(t.formReset,"password1",e)},expression:"formReset.password1"}})],1),o("b-form-group",{attrs:{id:"input-group",label:"Confirm Password","label-for":"input1","invalid-feedback":t.invalidFeedback,"valid-feedback":t.validFeedback,state:t.state}},[o("b-form-input",{attrs:{type:"password",id:"text-password2","aria-describedby":"password-help-block",required:"",placeholder:"Confirm Password",state:t.state},model:{value:t.formReset.password,callback:function(e){t.$set(t.formReset,"password",e)},expression:"formReset.password"}})],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formReset.id,expression:"formReset.id"}],attrs:{type:"hidden"},domProps:{value:t.formReset.id},on:{input:function(e){e.target.composing||t.$set(t.formReset,"id",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formReset.UserName,expression:"formReset.UserName"}],attrs:{type:"hidden"},domProps:{value:t.formReset.UserName},on:{input:function(e){e.target.composing||t.$set(t.formReset,"UserName",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formReset.isActive,expression:"formReset.isActive"}],attrs:{type:"hidden"},domProps:{value:t.formReset.isActive},on:{input:function(e){e.target.composing||t.$set(t.formReset,"isActive",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formReset.isAdmin,expression:"formReset.isAdmin"}],attrs:{type:"hidden"},domProps:{value:t.formReset.isAdmin},on:{input:function(e){e.target.composing||t.$set(t.formReset,"isAdmin",e.target.value)}}}),o("center",[o("b-button",{staticStyle:{width:"250px"},attrs:{id:"mybtn",type:"submit",pill:"",block:""}},[t._v("save")])],1)],1)]),o("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing","hide-footer":"",title:"Add new user"},on:{show:t.resetModal,hidden:t.resetModal}},[o("form",{on:{submit:[t.onSubmit,function(t){t.stopPropagation(),t.preventDefault()}],hidden:t.resetModal}},[o("b-form-group",{attrs:{label:"User Name","label-for":"name-input","invalid-feedback":"Name is required"}},[o("b-form-input",{attrs:{id:"name-input",required:"",placeholder:"user  name"},model:{value:t.form.UserName,callback:function(e){t.$set(t.form,"UserName",e)},expression:"form.UserName"}})],1),o("b-form-group",{attrs:{id:"input-group-2",label:"Password","label-for":"input-2","invalid-feedback":"password is required"}},[o("b-form-input",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block",required:"",placeholder:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),o("b-form-group",[o("b-form-checkbox-group",[o("b-form-checkbox",{attrs:{id:"checkbox-group-20",value:"true"},model:{value:t.form.isActive,callback:function(e){t.$set(t.form,"isActive",e)},expression:"form.isActive"}},[t._v("Active")])],1),o("b-form-checkbox-group",[o("b-form-checkbox",{attrs:{id:"checkbox-group-33",value:"true"},model:{value:t.form.isAdmin,callback:function(e){t.$set(t.form,"isAdmin",e)},expression:"form.isAdmin"}},[t._v("Admin")])],1)],1),o("center",[o("b-button",{staticStyle:{width:"250px"},attrs:{id:"mybtn",type:"submit",pill:"",block:""}},[t._v("save")])],1)],1)]),o("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing2","hide-footer":"",title:"Update user info"},on:{show:t.resetModal,hidden:t.resetModal}},[o("form",{on:{submit:[t.onSaveUpdate,function(t){t.stopPropagation(),t.preventDefault()}],hidden:t.resetModal}},[o("b-form-group",{attrs:{label:"User Name","label-for":"name-input","invalid-feedback":"Name is required"}},[o("b-form-input",{attrs:{id:"name-input",required:"",placeholder:"user  name"},model:{value:t.formUdate.UserName,callback:function(e){t.$set(t.formUdate,"UserName",e)},expression:"formUdate.UserName"}})],1),o("b-form-group",[o("label",[t._v("is user Admin?")]),o("b-form-radio",{attrs:{name:"some-radios2",value:"True"},model:{value:t.formUdate.isAdmin,callback:function(e){t.$set(t.formUdate,"isAdmin",e)},expression:"formUdate.isAdmin"}},[t._v("Yes")]),o("b-form-radio",{attrs:{name:"some-radios3",value:"false"},model:{value:t.formUdate.isAdmin,callback:function(e){t.$set(t.formUdate,"isAdmin",e)},expression:"formUdate.isAdmin"}},[t._v("No")])],1),o("b-form-group",[o("label",[t._v("is user Active?")]),o("b-form-radio",{attrs:{name:"some-radios",value:"true"},model:{value:t.formUdate.isActive,callback:function(e){t.$set(t.formUdate,"isActive",e)},expression:"formUdate.isActive"}},[t._v("Yes")]),o("b-form-radio",{attrs:{name:"some-radios1",value:"false"},model:{value:t.formUdate.isActive,callback:function(e){t.$set(t.formUdate,"isActive",e)},expression:"formUdate.isActive"}},[t._v("No")])],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formUdate.id,expression:"formUdate.id"}],attrs:{type:"hidden"},domProps:{value:t.formUdate.id},on:{input:function(e){e.target.composing||t.$set(t.formUdate,"id",e.target.value)}}}),o("b-row",[o("b-col",[o("b-button",{attrs:{id:"mybtn3",type:"Save",size:"sm",pill:"",block:"",onSaveUpdate:""},on:{"click:":function(t){}}},[t._v("save")])],1)],1)],1)]),o("div",[o("b-overlay",{attrs:{show:t.busy,rounded:"lg",opacity:"0.6"},scopedSlots:t._u([{key:"overlay",fn:function(){return[o("div",{staticClass:"d-flex align-items-center"},[o("b-spinner",{attrs:{small:"",type:"grow",variant:"secondary"}}),o("b-spinner",{attrs:{type:"grow",variant:"dark"}}),o("b-spinner",{attrs:{small:"",type:"grow",variant:"secondary"}}),o("span",{staticClass:"sr-only"},[t._v("Please wait...")])],1)]},proxy:!0}])})],1),o("div",[o("b-modal",{attrs:{id:"my-modal","hide-footer":""},on:{delete:t.deleteUser}},[t._v(" are you sure you want to delete user? "),o("b-row",[o("b-col",[o("b-button",{attrs:{size:"sm",id:"mybtn",type:"delete",variant:"danger"},on:{click:t.deleteUser}},[t._v(" Delete ")]),o("b-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"sm",id:"mybtn"}},[t._v(" cancel ")])],1)],1)],1)],1)],1)],1)},n=[],s=(r("4de4"),r("d81d"),r("ade3")),i=(r("96cf"),r("1da1")),l=r("bc3a"),c=r.n(l),u=r("4360"),d={data:function(){return{formUdate:{id:"",UserName:"",isActive:!1,isAdmin:!1,selected:[]},formReset:{id:"",UserName:"",password1:"",password:"",isActive:!1,isAdmin:!1},form:{UserName:"",password:"",isActive:!1,isAdmin:!1},show:!1,name:"",items:[],fields:[{key:"userName",label:"User Name",sortable:!0},{key:"isAdmin",label:"is Admin",formatter:function(t,e,r){return t?"Yes":"No"},sortable:!0,sortByFormatted:!0,filterByFormatted:!0},{key:"isActive",label:"is Active",formatter:function(t,e,r){return t?"Yes":"No"},sortable:!0,sortByFormatted:!0,filterByFormatted:!0},{key:"actions",label:"Actions"}],totalRows:1,currentPage:1,perPage:5,sortBy:"",isBusy:!1,filter:null,filterOn:[],options:[{text:"Admin",value:"isAdmin"},{text:"Active",value:"isActive"}],busy:!1,timeout:null}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},state:function(){return this.formReset.password.length>=4&&this.formReset.password==this.formReset.password1},invalidFeedback:function(){return this.formReset.password!=this.formReset.password1?"password is not matching":"Please enter something"},validFeedback:function(){return!0===this.state?"looks good":""},state2:function(){return this.formReset.password1.length>=4},invalidFeedback2:function(){return this.formReset.password1.length<=4?"password must be at least 4 charecters, you can use letters, numbers and symbols":!0===this.state2?"valid Password":""},validFeedback2:function(){return!0===this.state2?"valid Password":""}},methods:(o={logOut:function(){u["a"].user=null,this.$router.push("/")},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"null",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"null";this.$bvToast.toast(e,{title:" ".concat(t||"Message"),variant:t,solid:!0}),this.onOk()},onOk:function(){this.$refs.table.refresh(),this.resetModal()},onSubmit:function(t){var e=this;t.preventDefault();var r=new FormData;for(var o in this.form)r.append(o,this.form[o]);console.log(r),this.busy=!0,c.a.post("http://localhost:8081/add",r).then((function(t){console.log(t),e.busy=!1,"user Saved"==t.data?(e.makeToast("success","user added successfully!"),e.resetModal()):(e.makeToastdanger("danger","Something went wrong! user not added"),e.resetModal())})).catch((function(t){e.busy=!1,console.log(t)}))},noteMsg:function(t,e){this.$bvToast.toast(e,{title:"System message",variant:t,solid:!0})},toFormData:function(t){var e=new FormData;for(var r in t)e.append(r,t[r]);return e},myProvider:function(t){var e=this;this.isBusy=!0;var r=c.a.get("http://localhost:8081/users?page="+t.currentPage+"&pagesize="+t.perPage+"&filter="+t.filter);return r.then((function(t){console.log(t);var r=t.data.items;return e.totalRows=t.data.pagination.total,e.isBusy=!1,r})).catch((function(t){return console.log(t),e.isBusy=!1,[]}))},onFiltered:function(t){},resetModal:function(){var t=this;this.form.UserName="",this.form.password="",this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")}))},resetModalUpate:function(){var t=this;this.form.Driver_name="",this.form.Driver_id="",this.form.phoneNum="",this.form.SimNum="",this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing2")}))},resetModalReset:function(){var t=this;this.password="",this.formReset.password1="",this.formReset.password="",this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing3")}))},updateUser:function(t){this.formUdate.id=t.item.id,this.formUdate.UserName=t.item.userName,this.formUdate.isAdmin=t.item.isAdmin,this.formUdate.isActive=t.item.isActive,this.$bvModal.show("modal-prevent-closing2")},onSaveUpdate:function(t){var e=this;t.preventDefault();var r=new FormData;for(var o in this.formUdate)r.append(o,this.formUdate[o]);this.busy=!0,c.a.put("http://localhost:8081//update",r).then((function(t){console.log(t),e.busy=!1,"Record updated successfully"==t.data?(e.makeToast("success","Record updated successfully"),e.resetModalUpate()):(e.makeToastdanger("danger","Something went wrong! user info does not update"),e.resetModalUpate())})).catch((function(t){e.busy=!1,console.log(t)}))},updatePassword:function(t){this.formReset.id=t.item.id,this.formReset.UserName=t.item.userName,this.formReset.isAdmin=t.item.isAdmin,this.formReset.isActive=t.item.isActive,this.$bvModal.show("modal-prevent-closing3")},onResetPassword:function(t){var e=this;t.preventDefault();var r=new FormData;for(var o in this.formReset)r.append(o,this.formReset[o]);!0===this.state&&(this.busy=!0,c.a.put("http://localhost:8081//reset",r).then((function(t){console.log(t),e.busy=!1,"password updated successfully"==t.data?(e.makeToast("success","password reset successfully"),e.resetModalReset()):(e.makeToastdanger("danger","Something went wrong! user info does not update"),e.resetModalReset())})).catch((function(t){e.busy=!1,console.log(t)})))}},Object(s["a"])(o,"noteMsg",(function(t,e){this.$bvToast.toast(e,{title:"System message",variant:t,solid:!0})})),Object(s["a"])(o,"deleteConfirmation",(function(t){this.$bvModal.show("my-modal")})),Object(s["a"])(o,"toFormData",(function(t){var e=new FormData;for(var r in t)e.append(r,t[r]);return e})),Object(s["a"])(o,"getRoles",(function(){var t=this;c.a.get("http://localhost:8081/all").then((function(e){return t.items=e.data}))})),Object(s["a"])(o,"deleteUser",function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("are you sure you want to delete "+e.item.userName+"?")){t.next=4;break}return this.busy=!0,t.next=4,c.a.delete("http://localhost:8081/deleteUser?Id="+e.item.id).then((function(t){console.log(t),r.busy=!1,t.data=="user was deleted with id:"+e.item.id?r.makeToast("success","user deleted successfully!"):r.makeToastdanger("danger","Something went wrong! user not deleted")})).catch((function(t){r.busy=!1,console.log(t)}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()),o)},f=d,m=r("2877"),p=Object(m["a"])(f,a,n,!1,null,null,null);e["default"]=p.exports},ade3:function(t,e,r){"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return o}))},d81d:function(t,e,r){"use strict";var o=r("23e7"),a=r("b727").map,n=r("1dde"),s=r("ae40"),i=n("map"),l=s("map");o({target:"Array",proto:!0,forced:!i||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-08896be1.d681afa3.js.map