webpackJsonp([35,141],{6:function(n,t,a){"use strict";a(18),a(17),a(12)},11:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var e=a(13),o=s(e);t["default"]=function(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return(0,o["default"])(n)}},12:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=a(11);s(e)},13:function(n,t,a){n.exports={"default":a(14),__esModule:!0}},14:function(n,t,a){a(30),a(16),n.exports=a(20).Array.from},15:function(n,t,a){"use strict";var s=a(25),e=a(29);n.exports=function(n,t,a){t in n?s.f(n,t,e(0,a)):n[t]=a}},16:function(n,t,a){"use strict";var s=a(28),e=a(22),o=a(26),p=a(34),u=a(33),c=a(31),i=a(15),l=a(32);e(e.S+e.F*!a(35)(function(n){Array.from(n)}),"Array",{from:function(n){var t,a,e,r,f=o(n),d="function"==typeof this?this:Array,k=arguments.length,m=k>1?arguments[1]:void 0,h=void 0!==m,v=0,g=l(f);if(h&&(m=s(m,k>2?arguments[2]:void 0,2)),void 0==g||d==Array&&u(g))for(t=c(f.length),a=new d(t);t>v;v++)i(a,v,h?m(f[v],v):f[v]);else for(r=g.call(f),a=new d;!(e=r.next()).done;v++)i(a,v,h?p(r,m,[e.value,v],!0):e.value);return a.length=v,a}})},17:function(n,t){},18:function(n,t){},23:function(n,t,a){"use strict";a(36)},24:function(n,t,a){"use strict";a(6),a(38)},36:function(n,t){},38:function(n,t){},297:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(2),o=s(e),p=a(10),u=s(p),c=a(3),i=s(c),l=a(5),r=s(l),f=a(4),d=s(f),k=a(1),m=s(k),h=a(7),v=s(h),g=a(357),b=s(g),y=a(54),x=s(y),w=function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]]);return a},N=function(n){function t(){return(0,i["default"])(this,t),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n=this,t=this.props,a=t.className,s=t.showNumber,e=w(t,["className","showNumber"]),p=(0,v["default"])(a,(0,u["default"])({},"showNumber",!!s));return m["default"].createElement(b["default"],(0,o["default"])({upHandler:m["default"].createElement(x["default"],{type:"plus",size:"xxs"}),downHandler:m["default"].createElement(x["default"],{type:"minus",size:"xxs"})},e,{ref:function(t){return n.stepperRef=t},className:p}))},t}(m["default"].Component);t["default"]=N,N.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1,useTouch:!0},n.exports=t["default"]},298:function(n,t,a){"use strict";a(6),a(23),a(324)},324:function(n,t){},355:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(3),o=s(e),p=a(8),u=s(p),c=a(5),i=s(c),l=a(4),r=s(l),f=a(1),d=s(f),k=a(45),m=s(k),h=function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]]);return a},v=function(n){function t(){return(0,o["default"])(this,t),(0,i["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,r["default"])(t,n),(0,u["default"])(t,[{key:"render",value:function(){var n=this.props,t=n.prefixCls,a=n.disabled,s=n.onTouchStart,e=n.onTouchEnd,o=h(n,["prefixCls","disabled","onTouchStart","onTouchEnd"]);return d["default"].createElement(m["default"],{disabled:a,onTouchStart:s,onTouchEnd:e,activeClassName:t+"-handler-active"},d["default"].createElement("span",o))}}]),t}(f.Component);t["default"]=v,n.exports=t["default"]},356:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){}function o(n){return n.replace(/[^\w\.-]+/g,"")}Object.defineProperty(t,"__esModule",{value:!0});var p=a(3),u=s(p),c=a(8),i=s(c),l=a(5),r=s(l),f=a(4),d=s(f),k=a(1),m=s(k),h=200,v=600,g=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,b=function(n){function t(n){(0,u["default"])(this,t);var a=(0,r["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));a.onFocus=function(){a.setState({focused:!0});var n=a.props.onFocus;n&&n.apply(void 0,arguments)},a.onBlur=function(n){for(var t=arguments.length,s=Array(t>1?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];a.setState({focused:!1});var o=a.getCurrentValidValue(a.state.inputValue);n.persist(),a.setValue(o,function(){var t=a.props.onBlur;t&&t.apply(void 0,[n].concat(s))})},a.getCurrentValidValue=function(n){var t=n;return t=""===t?"":a.isNotCompleteNumber(t)?a.state.value:a.getValidValue(t),a.toNumber(t)},a.getValidValue=function(n){var t=parseFloat(n);return isNaN(t)?n:(t<a.props.min&&(t=a.props.min),t>a.props.max&&(t=a.props.max),t)},a.setValue=function(n,t){var s=a.isNotCompleteNumber(parseFloat(n))?void 0:parseFloat(n),e=s!==a.state.value||""+s!=""+a.state.inputValue;if("value"in a.props?a.setState({inputValue:a.toPrecisionAsStep(a.state.value)},t):a.setState({value:s,inputValue:a.toPrecisionAsStep(n)},t),e){var o=a.props.onChange;o&&o(s)}},a.getPrecision=function(n){if("precision"in a.props)return a.props.precision;var t=n.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var s=0;return t.indexOf(".")>=0&&(s=t.length-t.indexOf(".")-1),s},a.getMaxPrecision=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in a.props)return a.props.precision;var s=a.props.step,e=a.getPrecision(t),o=a.getPrecision(s),p=a.getPrecision(n);return n?Math.max(p,e+o):e+o},a.getPrecisionFactor=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=a.getMaxPrecision(n,t);return Math.pow(10,s)},a.toPrecisionAsStep=function(n){if(a.isNotCompleteNumber(n)||""===n)return n;var t=Math.abs(a.getMaxPrecision(n));return isNaN(t)?n.toString():Number(n).toFixed(t)},a.isNotCompleteNumber=function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},a.toNumber=function(n){return a.isNotCompleteNumber(n)?n:"precision"in a.props?Number(Number(n).toFixed(a.props.precision)):Number(n)},a.toNumberWhenUserInput=function(n){return(/\.\d*0$/.test(n)||n.length>16)&&a.state.focused?n:a.toNumber(n)},a.stepCompute=function(n,t,s){var e=a.props,o=e.step,p=e.min,u=a.getPrecisionFactor(t,s),c=Math.abs(a.getMaxPrecision(t,s)),i=void 0,l="up"===n?1:-1;return i="number"==typeof t?((u*t+l*u*+o*s)/u).toFixed(c):p===-(1/0)?l*+o:p,a.toNumber(i)},a.step=function(n,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t&&t.preventDefault();var e=a.props;if(!e.disabled){var o=a.getCurrentValidValue(a.state.inputValue)||0;if(!a.isNotCompleteNumber(o)){var p=a.stepCompute(n,o,s);p>e.max?p=e.max:p<e.min&&(p=e.min),a.setValue(p),a.setState({focused:!0})}}},a.stop=function(){a.autoStepTimer&&clearTimeout(a.autoStepTimer)},a.action=function(n,t,s,e){t.persist&&t.persist(),a.stop(),a.step(n,t,s),a.autoStepTimer=setTimeout(function(){a.action(n,t,s,!0)},e?h:v)},a.down=function(n,t,s){a.action("down",n,t,s)},a.up=function(n,t,s){a.action("up",n,t,s)};var s=void 0;return s="value"in n?n.value:n.defaultValue,s=a.toNumber(s),a.state={inputValue:a.toPrecisionAsStep(s),value:s,focused:n.autoFocus},a}return(0,d["default"])(t,n),(0,i["default"])(t,[{key:"componentWillReceiveProps",value:function(n){if("value"in n){var t=this.state.focused?n.value:this.getValidValue(n.value);this.setState({value:t,inputValue:t})}}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"onChange",value:function a(n){var t=this.props,s=t.parser,a=t.onChange,e=s&&s(this.getValueFromEvent(n).trim());this.setState({inputValue:e}),a&&a(this.toNumberWhenUserInput(e))}}]),t}(m["default"].Component);t["default"]=b,b.defaultProps={max:g,min:-g,step:1,style:{},onChange:e,onFocus:e,onBlur:e,parser:o},n.exports=t["default"]},357:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){}function o(n){n.preventDefault()}Object.defineProperty(t,"__esModule",{value:!0});var p=a(10),u=s(p),c=a(2),i=s(c),l=a(3),r=s(l),f=a(8),d=s(f),k=a(5),m=s(k),h=a(4),v=s(h),g=a(1),b=s(g),y=a(7),x=s(y),w=a(356),N=s(w),O=a(355),C=s(O),S=function(n){function t(){(0,r["default"])(this,t);var n=(0,m["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return n.setInput=function(t){n.input=t},n}return(0,v["default"])(t,n),(0,d["default"])(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentWillUpdate",value:function(){try{this.start=this.input.selectionStart,this.end=this.input.selectionEnd}catch(n){}}},{key:"componentDidUpdate",value:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.input.setSelectionRange(this.start,this.end):this.focus()}}},{key:"getRatio",value:function(n){var t=1;return n.metaKey||n.ctrlKey?t=.1:n.shiftKey&&(t=10),t}},{key:"getValueFromEvent",value:function(n){return n.target.value}},{key:"focus",value:function(){this.input.focus()}},{key:"formatWrapper",value:function(n){return this.props.formatter?this.props.formatter(n):n}},{key:"render",value:function(){var n,t=(0,i["default"])({},this.props),a=t.prefixCls,s=void 0===a?"":a,p=t.disabled,c=t.readOnly,l=t.max,r=t.min,f=(0,x["default"])((n={},(0,u["default"])(n,s,!0),(0,u["default"])(n,t.className,!!t.className),(0,u["default"])(n,s+"-disabled",p),(0,u["default"])(n,s+"-focused",this.state.focused),n)),d="",k="",m=this.state.value;if(m)if(isNaN(m))d=s+"-handler-up-disabled",k=s+"-handler-down-disabled";else{var h=Number(m);h>=l&&(d=s+"-handler-up-disabled"),h<=r&&(k=s+"-handler-down-disabled")}var v=!t.readOnly&&!t.disabled,g=void 0;g=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value),void 0!==g&&null!==g||(g="");var y=void 0,w=void 0;y={onTouchStart:v&&!d?this.up:e,onTouchEnd:this.stop},w={onTouchStart:v&&!k?this.down:e,onTouchEnd:this.stop};var N=this.formatWrapper(g),O=!!d||p||c,S=!!k||p||c;return b["default"].createElement("div",{className:f,style:t.style},b["default"].createElement("div",{className:s+"-handler-wrap"},b["default"].createElement(C["default"],(0,i["default"])({disabled:O,prefixCls:s,unselectable:!0},y,{role:"button","aria-label":"Increase Value","aria-disabled":!!O,className:s+"-handler "+s+"-handler-up "+d}),this.props.upHandler||b["default"].createElement("span",{unselectable:!0,className:s+"-handler-up-inner",onClick:o})),b["default"].createElement(C["default"],(0,i["default"])({disabled:S,prefixCls:s,unselectable:!0},w,{role:"button","aria-label":"Decrease Value","aria-disabled":!!S,className:s+"-handler "+s+"-handler-down "+k}),this.props.downHandler||b["default"].createElement("span",{unselectable:!0,className:s+"-handler-down-inner",onClick:o}))),b["default"].createElement("div",{className:s+"-input-wrap",role:"spinbutton","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":m},b["default"].createElement("input",{className:s+"-input",tabIndex:t.tabIndex,autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,autoFocus:t.autoFocus,readOnly:t.readOnly,disabled:t.disabled,max:t.max,min:t.min,step:t.step,onChange:this.onChange,ref:this.setInput,value:N})))}}]),t}(N["default"]);t["default"]=S,S.defaultProps=(0,i["default"])({},N["default"].defaultProps,{focusOnUpDown:!1,useTouch:!1,prefixCls:"rmc-input-number"}),n.exports=t["default"]},685:function(n,t,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">wrap</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">showNumber</span>\n              <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        show number value\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function t(n){return n&&n.__esModule?n:{"default":n}}function s(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function o(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(t,a):n(t,a))}var p=a(1);a(1);a(24);var u=t(a(40))["default"];a(298);var c=t(a(297))["default"],i=function(n){function t(a){s(this,t);var o=e(this,n.call(this,a));return o.onChange=function(n){o.setState({val:n})},o.onChange1=function(n){o.setState({val1:n})},o.state={val:3,val1:2},o}return o(t,n),t.prototype.render=function(){return p.createElement(u,null,p.createElement(u.Item,{wrap:!0,extra:p.createElement(c,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange})},"show number value"),p.createElement(u.Item,{extra:p.createElement(c,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"disabled"))},t}(p.Component);return p.createElement(i,null)}}},761:function(n,t,a){n.exports={basic:a(685)}}});