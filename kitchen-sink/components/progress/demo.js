webpackJsonp([29,141],{6:function(n,s,a){"use strict";a(18),a(17),a(13)},11:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}s.__esModule=!0;var p=a(12),e=t(p);s["default"]=function(n){if(Array.isArray(n)){for(var s=0,a=Array(n.length);s<n.length;s++)a[s]=n[s];return a}return(0,e["default"])(n)}},12:function(n,s,a){n.exports={"default":a(14),__esModule:!0}},13:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=a(11);t(p)},14:function(n,s,a){a(30),a(16),n.exports=a(20).Array.from},15:function(n,s,a){"use strict";var t=a(25),p=a(29);n.exports=function(n,s,a){s in n?t.f(n,s,p(0,a)):n[s]=a}},16:function(n,s,a){"use strict";var t=a(28),p=a(22),e=a(26),o=a(34),c=a(33),u=a(31),l=a(15),i=a(32);p(p.S+p.F*!a(35)(function(n){Array.from(n)}),"Array",{from:function(n){var s,a,p,r,k=e(n),f="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,m=void 0!==g,h=0,v=i(k);if(m&&(g=t(g,d>2?arguments[2]:void 0,2)),void 0==v||f==Array&&c(v))for(s=u(k.length),a=new f(s);s>h;h++)l(a,h,m?g(k[h],h):k[h]);else for(r=v.call(k),a=new f;!(p=r.next()).done;h++)l(a,h,m?o(r,g,[p.value,h],!0):p.value);return a.length=h,a}})},17:function(n,s){},18:function(n,s){},23:function(n,s,a){"use strict";a(36)},27:function(n,s,a){"use strict";a(6),a(37)},36:function(n,s){},37:function(n,s){},41:function(n,s,a){"use strict";a(6),a(44)},43:function(n,s,a){"use strict";a(6),a(23),a(47)},44:function(n,s){},47:function(n,s){},608:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u8fdb\u5ea6\u6761\u793a\u4f8b\u3002"]],"en-US":[["p","Basic demo of Progress."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Progress<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyProgress</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    percent<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> percent<span class="token punctuation">:</span> p <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> percent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token attr-name">unfilled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">appearTransition</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token operator">%</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token punctuation">)</span><span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyProgress</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],e=Object.getOwnPropertyDescriptor(s,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function s(n){return n&&n.__esModule?n:{"default":n}}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function e(s,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(s,a):n(s,a))}var o=a(1);a(1);a(41);var c=s(a(55))["default"];a(43);var u=s(a(56))["default"];a(27);var l=s(a(42))["default"];a(706);var i=s(a(705))["default"],r=function(n){function s(){var a,e,o;t(this,s);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return a=e=p(this,n.call.apply(n,[this].concat(u))),e.state={percent:50},e.add=function(){var n=e.state.percent+10;e.state.percent>=100&&(n=0),e.setState({percent:n})},o=a,p(e,o)}return e(s,n),s.prototype.render=function(){var n=this.state.percent;return o.createElement("div",{className:"progress-container"},o.createElement(i,{percent:30,position:"fixed"}),o.createElement("div",{style:{height:18}}),o.createElement(i,{percent:40,position:"normal",unfilled:!1,appearTransition:!0}),o.createElement("div",{className:"show-info"},o.createElement("div",{className:"progress"},o.createElement(i,{percent:n,position:"normal"})),o.createElement("div",{"aria-hidden":"true"},n,"%")),o.createElement(l,{size:"xl"}),o.createElement(c,null,o.createElement(u,{onClick:this.add},"(+-)10")))},s}(o.Component);return o.createElement(r,null)},style:".show-info {\n  margin-top: 18px;\n  display: flex;\n  align-items: center;\n}\n.show-info .progress {\n  margin-right: 5px;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.show-info</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">18</span>px<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.show-info</span> <span class="token class">.progress</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">5</span>px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},705:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var p=a(2),e=t(p),o=a(10),c=t(o),u=a(3),l=t(u),i=a(5),r=t(i),k=a(4),f=t(k),d=a(1),g=t(d),m=a(7),h=t(m),v=function(n){function s(){return(0,l["default"])(this,s),(0,r["default"])(this,n.apply(this,arguments))}return(0,f["default"])(s,n),s.prototype.componentWillReceiveProps=function(){this.noAppearTransition=!0},s.prototype.componentDidMount=function(){var n=this;this.props.appearTransition&&setTimeout(function(){n.barRef.style.width=n.props.percent+"%"},10)},s.prototype.render=function(){var n,s=this,a=this.props,t=a.className,p=a.prefixCls,o=a.position,u=a.unfilled,l=a.style,i=void 0===l?{}:l,r=a.barStyle,k=void 0===r?{}:r,f={width:this.noAppearTransition||!this.props.appearTransition?this.props.percent+"%":0,height:0},d=(0,h["default"])(p+"-outer",t,(n={},(0,c["default"])(n,p+"-fixed-outer","fixed"===o),(0,c["default"])(n,p+"-hide-outer",!u),n));return g["default"].createElement("div",{style:i,className:d,role:"progressbar","aria-valuenow":this.props.percent,"aria-valuemin":"0","aria-valuemax":"100"},g["default"].createElement("div",{ref:function(n){return s.barRef=n},className:p+"-bar",style:(0,e["default"])({},k,f)}))},s}(g["default"].Component);s["default"]=v,v.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:!0,appearTransition:!1},n.exports=s["default"]},706:function(n,s,a){"use strict";a(6),a(846)},754:function(n,s,a){n.exports={basic:a(608)}},846:function(n,s){}});