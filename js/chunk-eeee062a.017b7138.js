(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eeee062a"],{a675:function(e,s,t){"use strict";(function(e){t("6b54"),t("06db");var a=t("cebc"),n=t("539d"),r=t("55c1"),i=t("ce96"),o=t("2f62");t("6983");s["a"]={components:{"interface-bottom-text":n["a"],"interface-container-title":r["a"]},data:function(){return{message:"",showMessage:!1}},computed:Object(a["a"])({},Object(o["b"])({web3:"web3"})),watch:{message:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.$refs.signature.value=""},verifyMessage:function(){var s=JSON.parse(this.message),t=i["c"].hashPersonalMessage(i["c"].toBuffer(s.msg)),a=e.from(i["c"].getNakedAddress(s.sig),"hex");if(65===a.length){a[64]=0===a[64]||1===a[64]?a[64]+27:a[64],"3"===s.version?"trezor"===s.signer?t=i["c"].getTrezorHash(s.msg):"ledger"===s.signer&&(t=i["c"].hashPersonalMessage(e.from(s.msg))):"1"===s.version&&(t=this.web3.utils.sha3(s.msg));var n=i["c"].ecrecover(t,a[64],a.slice(0,32),a.slice(32,64));i["c"].getNakedAddress(s.address)!==i["c"].pubToAddress(n).toString("hex")?i["e"].responseHandler("Something went wrong!",i["e"].ERROR):this.showMessage=!0}else i["e"].responseHandler("Something went wrong!",i["e"].ERROR)}}}}).call(this,t("1c35").Buffer)},bb65:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"verify-message-container"},[t("interface-container-title",{attrs:{title:e.$t("common.verifyMessage")}}),t("div",{staticClass:"content-container"},[t("div",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[e._v("Signature:")]),t("div",{staticClass:"copy-buttons"},[t("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),t("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),t("div",{staticClass:"the-form signature"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{name:"verify"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}})]),t("div",[""!==e.message&&!0===e.showMessage?t("p",{staticClass:"success-message"},[e._v("\n          "+e._s(JSON.parse(e.message).address)+"\n          "+e._s(e.$t("interface.verifiedMessage"))+":\n          "),JSON.parse(e.message).msg.length>20?t("br"):e._e(),t("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("verify")?t("p",[e._v(e._s(e.errors.first("verify")))]):e._e()])]),t("div",{staticClass:"submit-button-container"},[t("div",{staticClass:"buttons"},[t("button",{class:[e.errors.has("verify")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v("\n          "+e._s(e.$t("common.verifyMessage"))+"\n        ")])]),t("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[],r=t("a675"),i=r["a"],o=(t("f637"),t("2877")),c=Object(o["a"])(i,a,n,!1,null,"6bffc700",null),l=c.exports;t.d(s,"default",function(){return l})},e0f0:function(e,s,t){},f637:function(e,s,t){"use strict";var a=t("e0f0"),n=t.n(a);n.a}}]);
//# sourceMappingURL=chunk-eeee062a.017b7138.js.map