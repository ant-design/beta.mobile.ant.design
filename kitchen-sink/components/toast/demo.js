webpackJsonp([23,141],{6:function(n,a,s){"use strict";s(12),s(11)},11:function(n,a){},12:function(n,a){},15:function(n,a,s){"use strict";s(18)},17:function(n,a,s){"use strict";s(6),s(21)},18:function(n,a){},21:function(n,a){},26:function(n,a,s){"use strict";s(6),s(33)},27:function(n,a,s){"use strict";s(6),s(15),s(38)},33:function(n,a){},38:function(n,a){},168:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a;return g&&(g.destroy(),g=null),g=k["default"].newInstance({prefixCls:v,style:{},transitionName:"am-fade",className:(0,m["default"])((a={},(0,c["default"])(a,v+"-mask",n),(0,c["default"])(a,v+"-nomask",!n),a))})}function p(n,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,t=arguments[3],p=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"}[a],c=e(p);c.notice({duration:s,style:{},content:o?u["default"].createElement("div",{className:v+"-text "+v+"-text-icon",role:"alert","aria-live":"assertive"},u["default"].createElement(f["default"],{type:o,size:"lg"}),u["default"].createElement("div",{className:v+"-text-info"},n)):u["default"].createElement("div",{className:v+"-text",role:"alert","aria-live":"assertive"},u["default"].createElement("div",null,n)),onClose:function(){t&&t(),c.destroy(),c=null,g=null}})}Object.defineProperty(a,"__esModule",{value:!0});var o=s(9),c=t(o),l=s(1),u=t(l),i=s(185),k=t(i),r=s(36),f=t(r),d=s(7),m=t(d),g=void 0,v="am-toast";a["default"]={SHORT:3,LONG:8,show:function(n,a,s){return p(n,"info",a,function(){},s)},info:function(n,a,s,t){return p(n,"info",a,s,t)},success:function(n,a,s,t){return p(n,"success",a,s,t)},fail:function(n,a,s,t){return p(n,"fail",a,s,t)},offline:function(n,a,s,t){return p(n,"offline",a,s,t)},loading:function(n,a,s,t){return p(n,"loading",a,s,t)},hide:function(){g&&(g.destroy(),g=null)}},n.exports=a["default"]},169:function(n,a,s){"use strict";s(6),s(15),s(182)},182:function(n,a){},183:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(9),p=t(e),o=s(3),c=t(o),l=s(10),u=t(l),i=s(5),k=t(i),r=s(4),f=t(r),d=s(1),m=t(d),g=s(7),v=t(g),h=s(14),y=t(h),C=function(n){function a(){var n,s,t,e;(0,c["default"])(this,a);for(var p=arguments.length,o=Array(p),l=0;l<p;l++)o[l]=arguments[l];return s=t=(0,k["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.close=function(){t.clearCloseTimer(),t.props.onClose()},t.startCloseTimer=function(){t.props.duration&&(t.closeTimer=setTimeout(function(){t.close()},1e3*t.props.duration))},t.clearCloseTimer=function(){t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=null)},e=s,(0,k["default"])(t,e)}return(0,f["default"])(a,n),(0,u["default"])(a,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,a=this.props,s=a.prefixCls+"-notice",t=(n={},(0,p["default"])(n,""+s,1),(0,p["default"])(n,s+"-closable",a.closable),(0,p["default"])(n,a.className,!!a.className),n);return m["default"].createElement("div",{className:(0,v["default"])(t),style:a.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer},m["default"].createElement("div",{className:s+"-content"},a.children),a.closable?m["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:s+"-close"},m["default"].createElement("span",{className:s+"-close-x"})):null)}}]),a}(d.Component);C.propTypes={duration:y["default"].number,onClose:y["default"].func,children:y["default"].any},C.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},a["default"]=C,n.exports=a["default"]},184:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){return"rcNotification_"+L+"_"+O++}Object.defineProperty(a,"__esModule",{value:!0});var p=s(25),o=t(p),c=s(9),l=t(c),u=s(2),i=t(u),k=s(3),r=t(k),f=s(10),d=t(f),m=s(5),g=t(m),v=s(4),h=t(v),y=s(1),C=t(y),T=s(14),w=t(T),E=s(1),N=t(E),b=s(79),x=t(b),_=s(186),B=t(_),M=s(7),j=t(M),S=s(183),W=t(S),O=0,L=Date.now(),P=function(n){function a(){var n,s,t,p;(0,r["default"])(this,a);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return s=t=(0,g["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(c))),t.state={notices:[]},t.add=function(n){var a=n.key=n.key||e();t.setState(function(s){var t=s.notices;if(!t.filter(function(n){return n.key===a}).length)return{notices:t.concat(n)}})},t.remove=function(n){t.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},p=s,(0,g["default"])(t,p)}return(0,h["default"])(a,n),(0,d["default"])(a,[{key:"getTransitionName",value:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a}},{key:"render",value:function(){var n,a=this,s=this.props,t=this.state.notices.map(function(n){var t=(0,B["default"])(a.remove.bind(a,n.key),n.onClose);return C["default"].createElement(W["default"],(0,i["default"])({prefixCls:s.prefixCls},n,{onClose:t}),n.content)}),e=(n={},(0,l["default"])(n,s.prefixCls,1),(0,l["default"])(n,s.className,!!s.className),n);return C["default"].createElement("div",{className:(0,j["default"])(e),style:s.style},C["default"].createElement(x["default"],{transitionName:this.getTransitionName()},t))}}]),a}(y.Component);P.propTypes={prefixCls:w["default"].string,transitionName:w["default"].string,animation:w["default"].oneOfType([w["default"].string,w["default"].object]),style:w["default"].object},P.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},P.newInstance=function(n){var a=n||{},s=a.getContainer,t=(0,o["default"])(a,["getContainer"]),e=void 0;s?e=s():(e=document.createElement("div"),document.body.appendChild(e));var p=N["default"].render(C["default"].createElement(P,t),e);return{notice:function(n){p.add(n)},removeNotice:function(n){p.remove(n)},component:p,destroy:function(){N["default"].unmountComponentAtNode(e),s||document.body.removeChild(e)}}},a["default"]=P,n.exports=a["default"]},185:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(184),p=t(e);a["default"]=p["default"],n.exports=a["default"]},186:function(n,a){"use strict";function s(){var n=[].slice.call(arguments,0);return 1===n.length?n[0]:function(){for(var a=0;a<n.length;a++)n[a]&&n[a].apply&&n[a].apply(this,arguments)}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},628:function(n,a,s){n.exports={content:[["p","text\u3001icon\u3001success\u3001failure\u3001offline\u3001loading"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a toast tips !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">showToastNoMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'Toast without mask !!!\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Load success !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'Load failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'Network connection failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Loading...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Load complete !!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> customIcon <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0</span> <span class="token attr-name">0</span> <span class="token attr-name">64</span> <span class="token attr-name">64"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-icon</span> <span class="token attr-name">am-icon-md"</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">fillRule</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>evenodd<span class="token punctuation">"</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M59.177</span> <span class="token attr-name">29.5s-1.25</span> <span class="token attr-name">0-1.25</span> <span class="token attr-name">2.5c0</span> <span class="token attr-name">14.47-11.786</span> <span class="token attr-name">26.244-26.253</span> <span class="token attr-name">26.244C17.206</span> <span class="token attr-name">58.244</span> <span class="token attr-name">5.417</span> <span class="token attr-name">46.47</span> <span class="token attr-name">5.417</span> <span class="token attr-name">32c0-13.837</span> <span class="token attr-name">11.414-25.29</span> <span class="token attr-name">25.005-26.26v6.252c0</span> <span class="token attr-name">.622-.318</span> <span class="token attr-name">1.635.198</span> <span class="token attr-name">1.985a1.88</span> <span class="token attr-name">1.88</span> <span class="token attr-name">0</span> <span class="token attr-name">0</span> <span class="token attr-name">0</span> <span class="token attr-name">1.75.19l21.37-8.545c.837-.334</span> <span class="token attr-name">1.687-1.133</span> <span class="token attr-name">1.687-2.384C55.425</span> <span class="token attr-name">1.99</span> <span class="token attr-name">53.944</span> <span class="token attr-name">2</span> <span class="token attr-name">53.044</span> <span class="token attr-name">2h-21.37C15.134</span> <span class="token attr-name">2</span> <span class="token attr-name">1.667</span> <span class="token attr-name">15.46</span> <span class="token attr-name">1.667</span> <span class="token attr-name">32c0</span> <span class="token attr-name">16.543</span> <span class="token attr-name">13.467</span> <span class="token attr-name">30</span> <span class="token attr-name">30.007</span> <span class="token attr-name">30</span> <span class="token attr-name">16.538</span> <span class="token attr-name">0</span> <span class="token attr-name">29.918-13.458</span> <span class="token attr-name">29.993-30</span> <span class="token attr-name">.01-2.5-1.24-2.5-1.24-2.5h-1.25"</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Text toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToastNoMask<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Without mask<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Cumstom Icon\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Failed toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Network failure toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Loading toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(){g["default"].info("This is a toast tips !!!",1)}function t(){g["default"].info("Toast without mask !!!",2,null,!1)}function e(){g["default"].success("Load success !!!",1)}function p(){g["default"].fail("Load failed !!!",1)}function o(){g["default"].offline("Network connection failed !!!",1)}function c(){g["default"].loading("Loading...",1,function(){console.log("Load complete !!!")})}var l=s(1),u=(s(1),s(26),s(54)),i=n(u),k=(s(27),s(53)),r=n(k),f=(s(17),s(28)),d=n(f),m=(s(169),s(168)),g=n(m),v=function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",className:"am-icon am-icon-md"},l.createElement("path",{fillRule:"evenodd",d:"M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25"}))},h=function(){return l.createElement(i["default"],null,l.createElement(d["default"],null),l.createElement(r["default"],{onClick:a},"Text toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:t},"Without mask"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:function(){return g["default"].info(v(),1)}},"Cumstom Icon"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:e},"Success toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:p},"Failed toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:o},"Network failure toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:c},"Loading toast"),l.createElement(d["default"],null))};return l.createElement(h,null)}}},748:function(n,a,s){n.exports={basic:s(628)}}});