webpackJsonp([40,141],{6:function(n,a,s){"use strict";s(18),s(17),s(12)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(13),e=t(p);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,e["default"])(n)}},12:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(11);t(p)},13:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},14:function(n,a,s){s(30),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),p=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,p(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(28),p=s(22),e=s(26),o=s(34),c=s(33),l=s(31),u=s(15),i=s(32);p(p.S+p.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,p,k,r=e(n),d="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,m=void 0!==g,v=0,y=i(r);if(m&&(g=t(g,f>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(a=l(r.length),s=new d(a);a>v;v++)u(s,v,m?g(r[v],v):r[v]);else for(k=y.call(r),s=new d;!(p=k.next()).done;v++)u(s,v,m?o(k,g,[p.value,v],!0):p.value);return s.length=v,s}})},17:function(n,a){},18:function(n,a){},23:function(n,a,s){"use strict";s(36)},27:function(n,a,s){"use strict";s(6),s(37)},36:function(n,a){},37:function(n,a){},499:function(n,a,s){"use strict";s(6),s(23),s(843)},645:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"en-US":"Notice Bar","zh-CN":"\u901a\u544a\u680f"},filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">marqueeProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> loop<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 7.5px\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Remove the <span class="token keyword">default</span> icon<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xxs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Customized icon<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1);s(1);s(23);var t=n(s(54))["default"];s(499);var p=n(s(382))["default"];s(27);var e=n(s(42))["default"],o=function(){return a.createElement("div",null,a.createElement(e,{size:"lg"}),a.createElement(p,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),a.createElement(e,{size:"lg"}),a.createElement(p,{mode:"link",onClick:function(){return alert("1")}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),a.createElement(e,{size:"lg"}),a.createElement(p,{mode:"closable",icon:null},"Remove the default icon."),a.createElement(e,{size:"lg"}),a.createElement(p,{mode:"closable",icon:a.createElement(t,{type:"check-circle-o",size:"xxs"})},"Customized icon."))};return a.createElement(o,null)}}},748:function(n,a,s){n.exports={basic:s(645)}},843:function(n,a){}});