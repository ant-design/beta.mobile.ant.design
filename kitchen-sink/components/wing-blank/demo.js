webpackJsonp([45,141],{6:function(n,a,s){"use strict";s(18),s(17),s(13)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(12),e=t(p);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,e["default"])(n)}},12:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},13:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(11);t(p)},14:function(n,a,s){s(30),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),p=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,p(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(28),p=s(22),e=s(26),o=s(34),c=s(33),l=s(31),u=s(15),i=s(32);p(p.S+p.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,p,k,r=e(n),g="function"==typeof this?this:Array,d=arguments.length,f=d>1?arguments[1]:void 0,m=void 0!==f,v=0,h=i(r);if(m&&(f=t(f,d>2?arguments[2]:void 0,2)),void 0==h||g==Array&&c(h))for(a=l(r.length),s=new g(a);a>v;v++)u(s,v,m?f(r[v],v):r[v]);else for(k=h.call(r),s=new g;!(p=k.next()).done;v++)u(s,v,m?o(k,f,[p.value,v],!0):p.value);return s.length=v,s}})},17:function(n,a){},18:function(n,a){},27:function(n,a,s){"use strict";s(6),s(37)},37:function(n,a){},41:function(n,a,s){"use strict";s(6),s(44)},44:function(n,a){},668:function(n,a,s){n.exports={content:[["p",["code","<WingBlank size='md'>...</WingBlank>"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/wing-blank/demo/basic.md",id:"components-wing-blank-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> PlaceHolder <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ebebef\'</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> <span class="token string">\'#bbb\'</span><span class="token punctuation">,</span>\n      textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n      height<span class="token punctuation">:</span> <span class="token string">\'30px\'</span><span class="token punctuation">,</span>\n      lineHeight<span class="token punctuation">:</span> <span class="token string">\'30px\'</span><span class="token punctuation">,</span>\n      width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">{...props}</span>\n  <span class="token punctuation">></span></span>block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> WingBlankExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'15px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlankExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1);s(1);s(27);var t=n(s(42))["default"];s(41);var p=n(s(55))["default"],e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},o=function(n){return a.createElement("div",e({style:{backgroundColor:"#ebebef",color:"#bbb",textAlign:"center",height:"30px",lineHeight:"30px",width:"100%"}},n),"block")},c=function(){return a.createElement("div",{style:{padding:"15px 0"}},a.createElement(p,null,a.createElement(o,null)),a.createElement(t,{size:"lg"}),a.createElement(p,{size:"md"},a.createElement(o,null)),a.createElement(t,{size:"lg"}),a.createElement(p,{size:"sm"},a.createElement(o,null)))};return a.createElement(c,null)}}},772:function(n,a,s){n.exports={basic:s(668)}}});