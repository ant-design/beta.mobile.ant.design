webpackJsonp([37,141],{6:function(n,s,a){"use strict";a(13),a(12)},12:function(n,s){},13:function(n,s){},15:function(n,s,a){"use strict";a(19)},18:function(n,s,a){"use strict";a(6),a(22)},19:function(n,s){},22:function(n,s){},28:function(n,s,a){"use strict";a(6),a(15),a(36)},36:function(n,s){},626:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/result/demo/basic.md",id:"components-result-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Result<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> customIcon <span class="token operator">=</span> src <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon</span> <span class="token attr-name">am-icon</span> <span class="token attr-name">am-icon-md"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ResultExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>result-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u6210\u529f<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message={&lt;div</span><span class="token punctuation">></span></span><span class="token number">998.00</span>\u5143 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span><span class="token number">1098</span>\u5143<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9a8c\u8bc1\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"check-circle"</span> className<span class="token operator">=</span><span class="token string">"icon"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fill<span class="token punctuation">:</span> <span class="token string">\'#1F90E6\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u9a8c\u8bc1\u6210\u529f"</span>\n    message<span class="token operator">=</span><span class="token string">"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"cross-circle-o"</span> className<span class="token operator">=</span><span class="token string">"icon"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fill<span class="token punctuation">:</span> <span class="token string">\'#F13642\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u652f\u4ed8\u5931\u8d25"</span>\n    message<span class="token operator">=</span><span class="token string">"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7b49\u5f85\u5904\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7b49\u5f85\u5904\u7406<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u64cd\u4f5c\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var s=a(1),t=(a(1),a(15),a(35)),p=n(t),e=(a(18),a(27)),o=n(e),c=(a(726),a(725)),l=n(c),u=function(n){return s.createElement("img",{src:n,className:"icon am-icon am-icon-md",alt:"icon"})},i=function(){return s.createElement("div",{className:"result-example"},s.createElement("div",{className:"sub-title"},"\u652f\u4ed8\u6210\u529f"),s.createElement(l["default"],{img:u("https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"),title:"\u652f\u4ed8\u6210\u529f",message:s.createElement("div",null,"998.00\u5143 ",s.createElement("del",null,"1098\u5143"))}),s.createElement(o["default"],null),s.createElement("div",{className:"sub-title"},"\u9a8c\u8bc1\u6210\u529f"),s.createElement(l["default"],{img:s.createElement(p["default"],{type:"check-circle",className:"icon",style:{fill:"#1F90E6"}}),title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"}),s.createElement(o["default"],null),s.createElement("div",{className:"sub-title"},"\u652f\u4ed8\u5931\u8d25"),s.createElement(l["default"],{img:s.createElement(p["default"],{type:"cross-circle-o",className:"icon",style:{fill:"#F13642"}}),title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"}),s.createElement(o["default"],null),s.createElement("div",{className:"sub-title"},"\u7b49\u5f85\u5904\u7406"),s.createElement(l["default"],{img:u("https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"),title:"\u7b49\u5f85\u5904\u7406",message:"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"}),s.createElement(o["default"],null),s.createElement("div",{className:"sub-title"},"\u64cd\u4f5c\u5931\u8d25"),s.createElement(l["default"],{img:u("https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"),title:"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c",message:"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"}))};return s.createElement(i,null)},style:".sub-title {\n  margin-left: 15px;\n}\n.result-example .icon {\n  width: 60px;\n  height: 60px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.result-example</span> <span class="token class">.icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">60</span>px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">60</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},725:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var p=a(7),e=t(p),o=a(3),c=t(o),l=a(5),u=t(l),i=a(4),k=t(i),r=a(1),m=t(r),g=a(56),d=t(g),f=a(8),v=t(f),b=function(n){function s(){return(0,c["default"])(this,s),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=s.className,p=s.img,o=s.imgUrl,c=s.title,l=s.message,u=s.buttonText,i=s.onButtonClick,k=s.buttonType,r=s.style,g=(0,v["default"])((n={},(0,e["default"])(n,""+a,!0),(0,e["default"])(n,t,t),n)),f=null;return p?f=m["default"].createElement("div",{className:a+"-pic"},p):o&&(f=m["default"].createElement("div",{className:a+"-pic",style:{backgroundImage:"url("+o+")"}})),m["default"].createElement("div",{className:g,style:r,role:"alert"},f,c?m["default"].createElement("div",{className:a+"-title"},c):null,l?m["default"].createElement("div",{className:a+"-message"},l):null,u?m["default"].createElement("div",{className:a+"-button"},m["default"].createElement(d["default"],{type:k,onClick:i},u)):null)},s}(m["default"].Component);s["default"]=b,b.defaultProps={prefixCls:"am-result",buttonType:"",onButtonClick:function(){}},n.exports=s["default"]},726:function(n,s,a){"use strict";a(6),a(28),a(854)},775:function(n,s,a){n.exports={basic:a(626)}},854:function(n,s){}});