webpackJsonp([44,141],{6:function(n,a,s){"use strict";s(18),s(17),s(13)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(12),e=t(p);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,e["default"])(n)}},12:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},13:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(11);t(p)},14:function(n,a,s){s(29),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),p=s(28);n.exports=function(n,a,s){a in n?t.f(n,a,p(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(27),p=s(23),e=s(26),o=s(35),c=s(34),l=s(30),u=s(15),i=s(31);p(p.S+p.F*!s(36)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,p,k,r=e(n),g="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,f=void 0!==m,b=0,x=i(r);if(f&&(m=t(m,d>2?arguments[2]:void 0,2)),void 0==x||g==Array&&c(x))for(a=l(r.length),s=new g(a);a>b;b++)u(s,b,f?m(r[b],b):r[b]);else for(k=x.call(r),s=new g;!(p=k.next()).done;b++)u(s,b,f?o(k,m,[p.value,b],!0):p.value);return s.length=b,s}})},17:function(n,a){},18:function(n,a){},24:function(n,a,s){"use strict";s(6),s(37)},37:function(n,a){},229:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(2),e=t(p),o=s(10),c=t(o),l=s(3),u=t(l),i=s(5),k=t(i),r=s(4),g=t(r),d=s(1),m=t(d),f=s(7),b=t(f),x=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var p=0,t=Object.getOwnPropertySymbols(n);p<t.length;p++)a.indexOf(t[p])<0&&(s[t[p]]=n[t[p]]);return s},h=function(n){function a(){return(0,u["default"])(this,a),(0,k["default"])(this,n.apply(this,arguments))}return(0,g["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.className,p=s.prefixCls,o=s.children,l=s.text,u=s.size,i=s.overflowCount,k=s.dot,r=s.corner,g=s.hot,d=x(s,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);i=i,l="number"==typeof l&&l>i?i+"+":l,k&&(l="");var f=(0,b["default"])((n={},(0,c["default"])(n,p+"-dot",k),(0,c["default"])(n,p+"-dot-large",k&&"large"===u),(0,c["default"])(n,p+"-text",!k&&!r),(0,c["default"])(n,p+"-corner",r),(0,c["default"])(n,p+"-corner-large",r&&"large"===u),n)),h=(0,b["default"])(p,t,(a={},(0,c["default"])(a,p+"-not-a-wrapper",!o),(0,c["default"])(a,p+"-corner-wrapper",r),(0,c["default"])(a,p+"-hot",!!g),(0,c["default"])(a,p+"-corner-wrapper-large",r&&"large"===u),a));return m["default"].createElement("span",{className:h},o,(l||k)&&m["default"].createElement("sup",(0,e["default"])({className:f},d),l))},a}(m["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},n.exports=a["default"]},230:function(n,a,s){"use strict";s(6),s(238)},238:function(n,a){},485:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003\u3002"]],"en-US":[["p","Usage cases."]]},meta:{order:4,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> BadgeDemo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Extra</span> <span class="token attr-name">content"</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'26px\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'26px\'</span><span class="token punctuation">,</span> background<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'inline-block\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Dot Badge<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">77</span><span class="token punctuation">}</span> overflowCount<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">55</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n    <span class="token operator">></span>\n      Content\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4fc3\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">corner</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>corner-badge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Use corner prop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>special-badge<span class="token punctuation">"</span></span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4fc3\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Custom corner\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Extra<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>text number <span class="token number">0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'new\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      Marketing<span class="token punctuation">:</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u51cf<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u60e0<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u514d<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u53cd<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>HOT<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      Customize\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5238<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 3px\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>NEW<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 3px\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#21b68a\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u7f34\u8d39<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n          padding<span class="token punctuation">:</span> <span class="token string">\'0 3px\'</span><span class="token punctuation">,</span>\n          backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n          borderRadius<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n          color<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span>\n          border<span class="token punctuation">:</span> <span class="token string">\'1px solid #f19736\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BadgeDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(1),s(24),s(41)),p=n(t),e=(s(230),s(229)),o=n(e),c=function(){return a.createElement(p["default"],null,a.createElement(p["default"].Item,{extra:"Extra content",arrow:"horizontal"},a.createElement(o["default"],{dot:!0},a.createElement("span",{style:{width:"26px",height:"26px",background:"#ddd",display:"inline-block"}})),a.createElement("span",{style:{marginLeft:12}},"Dot Badge")),a.createElement(p["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",extra:a.createElement(o["default"],{text:77,overflowCount:55}),arrow:"horizontal"},"Content"),a.createElement(p["default"].Item,null,a.createElement(o["default"],{text:"\u4fc3",corner:!0},a.createElement("div",{className:"corner-badge"},"Use corner prop"))),a.createElement(p["default"].Item,{className:"special-badge",extra:a.createElement(o["default"],{text:"\u4fc3"})},"Custom corner"),a.createElement(p["default"].Item,{extra:"Extra",arrow:"horizontal"},a.createElement(o["default"],{text:0,style:{marginLeft:12}},"text number 0"),a.createElement(o["default"],{text:"new",style:{marginLeft:12}})),a.createElement(p["default"].Item,null,"Marketing:",a.createElement(o["default"],{text:"\u51cf",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"\u60e0",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"\u514d",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"\u53cd",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"HOT",hot:!0,style:{marginLeft:12}})),a.createElement(p["default"].Item,null,"Customize",a.createElement(o["default"],{text:"\u5238",style:{marginLeft:12,padding:"0 3px",backgroundColor:"#f19736",borderRadius:2}}),a.createElement(o["default"],{text:"NEW",style:{marginLeft:12,padding:"0 3px",backgroundColor:"#21b68a",borderRadius:2}}),a.createElement(o["default"],{text:"\u81ea\u52a8\u7f34\u8d39",style:{marginLeft:12,padding:"0 3px",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}})))};return a.createElement(c,null)},style:".corner-badge {\n  height: 50px;\n  width: 200px;\n}\n.special-badge .am-list-line {\n  padding-right: 0;\n}\n.special-badge .am-list-line .am-list-extra {\n  padding: 0;\n  height: 44px;\n}\n.special-badge .am-badge {\n  transform: rotate(45deg);\n  transform-origin: right bottom;\n  right: 0;\n  top: 13px;\n  width: 50px;\n}\n.special-badge .am-badge-text {\n  border-radius: 1px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.corner-badge</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">50</span>px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-list-line</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-list-line</span> <span class="token class">.am-list-extra</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">44</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-badge</span> </span><span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">45</span>deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform-origin</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">13</span>px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">50</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-badge-text</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">1</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},706:function(n,a,s){n.exports={basic:s(485)}}});