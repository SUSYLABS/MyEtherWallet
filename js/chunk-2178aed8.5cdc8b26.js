(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2178aed8"],{"29f8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("interface-container-title",{attrs:{title:e.$t("common.signMessage")}}),s("div",{staticClass:"content-container"},[s("div",{staticClass:"send-form"},[s("p",[e._v(e._s(e.$t("interface.signMessageDesc")))]),s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("interface.txSideMenuMessage")))])])]),s("div",{staticClass:"the-form"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"custom-textarea-1",attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}]},[e._v("\n          "+e._s(e.errors.first("message"))+"\n        ")])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("common.signature")))]),s("popover",{attrs:{popcontent:e.$t("popover.signature")}}),s("div",{staticClass:"copy-buttons"},[s("button",{staticClass:"title-button",on:{click:function(t){return e.deleteInputText("signature")}}},[e._v("\n              "+e._s(e.$t("common.clear"))+"\n            ")]),s("button",{staticClass:"title-button",on:{click:function(t){return e.copyToClipboard("signature")}}},[e._v("\n              "+e._s(e.$t("common.copy"))+"\n            ")])])],1)]),s("div",{staticClass:"the-form domain-name"},[s("textarea",{ref:"signature",staticClass:"custom-textarea-1"})])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.message.length>0?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.signMessage}},[e._v("\n          "+e._s(e.$t("common.sign"))+"\n        ")])]),s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[],i=s("f499"),o=s.n(i),c=s("cebc"),r=s("2f62"),l=s("ce96"),u=s("539d"),d=s("55c1"),m=s("19c9"),g={name:"SignMessage",components:{"interface-bottom-text":u["a"],"interface-container-title":d["a"],"success-modal":m["a"]},data:function(){return{message:""}},computed:Object(c["a"])({},Object(r["b"])({account:"account",web3:"web3"})),methods:{signMessage:function(){var e=this;this.web3.eth.sign(this.message,this.account.address).then(function(t){e.$refs.signature.value=o()({address:e.account.address,msg:e.message,sig:t,version:"3",signer:e.account.isHardware?e.account.identifier:"MEW"},null,2)}).catch(function(e){l["e"].responseHandler(e,!1)})},copyToClipboard:function(e){this.$refs[e].select(),document.execCommand("copy"),window.getSelection().removeAllRanges(),l["e"].responseHandler("Copied",l["e"].INFO)},deleteInputText:function(e){this.$refs[e].value=""}}},v=g,f=(s("680d"),s("2877")),p=Object(f["a"])(v,a,n,!1,null,"19803e0c",null),b=p.exports;s.d(t,"default",function(){return b})},"680d":function(e,t,s){"use strict";var a=s("d00b"),n=s.n(a);n.a},d00b:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2178aed8.5cdc8b26.js.map