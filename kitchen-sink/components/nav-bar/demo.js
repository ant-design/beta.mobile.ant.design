webpackJsonp([43,141],{6:function(n,a,s){"use strict";s(18),s(17),s(13)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(12),p=t(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,p["default"])(n)}},12:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},13:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=s(11);t(e)},14:function(n,a,s){s(29),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),e=s(28);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(27),e=s(22),p=s(26),o=s(34),c=s(33),l=s(31),u=s(15),i=s(32);e(e.S+e.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),f="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,m=void 0!==g,v=0,y=i(k);if(m&&(g=t(g,d>2?arguments[2]:void 0,2)),void 0==y||f==Array&&c(y))for(a=l(k.length),s=new f(a);a>v;v++)u(s,v,m?g(k[v],v):k[v]);else for(r=y.call(k),s=new f;!(e=r.next()).done;v++)u(s,v,m?o(r,g,[e.value,v],!0):e.value);return s.length=v,s}})},17:function(n,a){},18:function(n,a){},23:function(n,a,s){"use strict";s(36)},36:function(n,a){},188:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),r=t(i),k=s(1),f=t(k),d=s(7),g=t(d),m=s(51),v=t(m),y=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},h=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.prefixCls,s=n.className,t=n.children,e=n.mode,o=n.iconName,c=n.leftContent,l=n.rightContent,u=n.onLeftClick,i=y(n,["prefixCls","className","children","mode","iconName","leftContent","rightContent","onLeftClick"]),r=(0,g["default"])(a,a+"-"+e,s);return f["default"].createElement("div",(0,p["default"])({},i,{className:r}),f["default"].createElement("div",{className:a+"-left",role:"button",onClick:u},f["default"].createElement("span",{className:a+"-left-icon","aria-hidden":"true"},"string"==typeof o?f["default"].createElement(v["default"],{type:o}):o),f["default"].createElement("span",{className:a+"-left-content"},c)),f["default"].createElement("div",{className:a+"-title"},t),f["default"].createElement("div",{className:a+"-right"},l))},a}(f["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},189:function(n,a,s){"use strict";s(6),s(23),s(208)},208:function(n,a){},562:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u5bfc\u822a\u680f","en-US":"NavBar"},filename:"components/nav-bar/demo/basic.md",id:"components-nav-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NavBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onLeftClick\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token operator">&lt;</span>Icon key<span class="token operator">=</span><span class="token string">"0"</span> type<span class="token operator">=</span><span class="token string">"search"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>NavBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onLeftClick\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">rightContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token operator">&lt;</span>Icon key<span class="token operator">=</span><span class="token string">"0"</span> type<span class="token operator">=</span><span class="token string">"search"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>NavBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(1),s(189),s(188)),e=n(t),p=(s(23),s(51)),o=n(p);return a.createElement("div",null,a.createElement(e["default"],{leftContent:"back",mode:"light",onLeftClick:function(){return console.log("onLeftClick")},rightContent:[a.createElement(o["default"],{key:"0",type:"search",style:{marginRight:"16px"}}),a.createElement(o["default"],{key:"1",type:"ellipsis"})]},"NavBar"),a.createElement(e["default"],{leftContent:"back",mode:"dark",onLeftClick:function(){return console.log("onLeftClick")},rightContent:[a.createElement(o["default"],{key:"0",type:"search",style:{marginRight:"16px"}}),a.createElement(o["default"],{key:"1",type:"ellipsis"})]},"NavBar"))}}},727:function(n,a,s){n.exports={basic:s(562)}}});