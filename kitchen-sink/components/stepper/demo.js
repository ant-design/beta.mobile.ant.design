webpackJsonp([36,144],{6:function(n,s,a){"use strict";a(14),a(13)},13:function(n,s){},14:function(n,s){},16:function(n,s){"use strict";s.__esModule=!0,s["default"]=function(n,s){var a={};for(var t in n)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}},17:function(n,s,a){"use strict";a(19)},18:function(n,s,a){"use strict";a(6),a(23)},19:function(n,s){},23:function(n,s){},324:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(2),p=t(e),o=a(7),u=t(o),c=a(3),i=t(c),l=a(5),r=t(l),d=a(4),f=t(d),k="/Users/zzy/Projects/ant-design-mobile/components/stepper/index.tsx",h=a(1),m=t(h),v=a(8),g=t(v),b=a(362),y=t(b),w=a(34),x=t(w),N=function(n,s){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&s.indexOf(t)<0&&(a[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)s.indexOf(t[e])<0&&(a[t[e]]=n[t[e]]);return a},C=function(n){function s(){return(0,i["default"])(this,s),(0,r["default"])(this,n.apply(this,arguments))}return(0,f["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.className,t=s.showNumber,e=N(s,["className","showNumber"]),o=(0,g["default"])((n={},(0,u["default"])(n,a,!!a),(0,u["default"])(n,"showNumber",!!t),n));return m["default"].createElement(y["default"],(0,p["default"])({upHandler:m["default"].createElement(x["default"],{type:"plus",size:"xxs",__source:{fileName:k,lineNumber:21}}),downHandler:m["default"].createElement(x["default"],{type:"minus",size:"xxs",__source:{fileName:k,lineNumber:21}})},e,{ref:"inputNumber",className:o,__source:{fileName:k,lineNumber:21}}))},s}(m["default"].Component);s["default"]=C,C.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1,useTouch:!0},n.exports=s["default"]},325:function(n,s,a){"use strict";a(6),a(17),a(354)},354:function(n,s){},361:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(16),p=t(e),o=a(3),u=t(o),c=a(12),i=t(c),l=a(5),r=t(l),d=a(4),f=t(d),k=a(1),h=t(k),m=a(11),v=t(m),g=a(72),b=t(g),y=function(n){function s(){return(0,u["default"])(this,s),(0,r["default"])(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return(0,f["default"])(s,n),(0,i["default"])(s,[{key:"render",value:function(){var n=this.props,s=n.prefixCls,a=n.disabled,t=(0,p["default"])(n,["prefixCls","disabled"]);return h["default"].createElement(b["default"],{disabled:a,activeClassName:s+"-handler-active"},h["default"].createElement("span",t))}}]),s}(k.Component);y.propTypes={prefixCls:v["default"].string,disabled:v["default"].bool},s["default"]=y,n.exports=s["default"]},362:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function p(n){n.preventDefault()}Object.defineProperty(s,"__esModule",{value:!0});var o=a(7),u=t(o),c=a(2),i=t(c),l=a(1),r=t(l),d=a(11),f=t(d),k=a(21),h=t(k),m=a(8),v=t(m),g=a(363),b=t(g),y=a(361),w=t(y),x=(0,h["default"])({displayName:"InputNumber",propTypes:{focusOnUpDown:f["default"].bool,onChange:f["default"].func,onKeyDown:f["default"].func,onKeyUp:f["default"].func,prefixCls:f["default"].string,disabled:f["default"].bool,onFocus:f["default"].func,onBlur:f["default"].func,readOnly:f["default"].bool,max:f["default"].number,min:f["default"].number,step:f["default"].oneOfType([f["default"].number,f["default"].string]),upHandler:f["default"].node,downHandler:f["default"].node,useTouch:f["default"].bool,formatter:f["default"].func,parser:f["default"].func,onMouseEnter:f["default"].func,onMouseLeave:f["default"].func,onMouseOver:f["default"].func,onMouseOut:f["default"].func,precision:f["default"].number},mixins:[b["default"]],getDefaultProps:function(){return{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentWillUpdate:function(){try{this.start=this.refs.input.selectionStart,this.end=this.refs.input.selectionEnd}catch(n){}},componentDidUpdate:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.refs.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.refs.input.setSelectionRange(this.start,this.end):this.focus()}},onKeyDown:function N(n){if(38===n.keyCode){var s=this.getRatio(n);this.up(n,s),this.stop()}else if(40===n.keyCode){var a=this.getRatio(n);this.down(n,a),this.stop()}var N=this.props.onKeyDown;if(N){for(var t=arguments.length,e=Array(t>1?t-1:0),p=1;p<t;p++)e[p-1]=arguments[p];N.apply(void 0,[n].concat(e))}},onKeyUp:function C(n){this.stop();var C=this.props.onKeyUp;if(C){for(var s=arguments.length,a=Array(s>1?s-1:0),t=1;t<s;t++)a[t-1]=arguments[t];C.apply(void 0,[n].concat(a))}},getRatio:function(n){var s=1;return n.metaKey||n.ctrlKey?s=.1:n.shiftKey&&(s=10),s},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},formatWrapper:function(n){return this.props.formatter?this.props.formatter(n):n},render:function(){var n,s=(0,i["default"])({},this.props),a=s.prefixCls,t=s.disabled,o=s.readOnly,c=s.useTouch,l=(0,v["default"])((n={},(0,u["default"])(n,a,!0),(0,u["default"])(n,s.className,!!s.className),(0,u["default"])(n,a+"-disabled",t),(0,u["default"])(n,a+"-focused",this.state.focused),n)),d="",f="",k=this.state.value;if(k)if(isNaN(k))d=a+"-handler-up-disabled",f=a+"-handler-down-disabled";else{var h=Number(k);h>=s.max&&(d=a+"-handler-up-disabled"),h<=s.min&&(f=a+"-handler-down-disabled")}var m=!s.readOnly&&!s.disabled,g=void 0;g=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value),void 0!==g&&null!==g||(g="");var b=void 0,y=void 0;c?(b={onTouchStart:m&&!d?this.up:e,onTouchEnd:this.stop},y={onTouchStart:m&&!f?this.down:e,onTouchEnd:this.stop}):(b={onMouseDown:m&&!d?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop},y={onMouseDown:m&&!f?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop});var x=this.formatWrapper(g),N=!!d||t||o,C=!!f||t||o;return r["default"].createElement("div",{className:l,style:s.style,onMouseEnter:s.onMouseEnter,onMouseLeave:s.onMouseLeave,onMouseOver:s.onMouseOver,onMouseOut:s.onMouseOut},r["default"].createElement("div",{className:a+"-handler-wrap"},r["default"].createElement(w["default"],(0,i["default"])({ref:"up",disabled:N,prefixCls:a,unselectable:"unselectable"},b,{role:"button","aria-label":"Increase Value","aria-disabled":!!N,className:a+"-handler "+a+"-handler-up "+d}),this.props.upHandler||r["default"].createElement("span",{unselectable:"unselectable",className:a+"-handler-up-inner",onClick:p})),r["default"].createElement(w["default"],(0,i["default"])({ref:"down",disabled:C,prefixCls:a,unselectable:"unselectable"},y,{role:"button","aria-label":"Decrease Value","aria-disabled":!!C,className:a+"-handler "+a+"-handler-down "+f}),this.props.downHandler||r["default"].createElement("span",{unselectable:"unselectable",className:a+"-handler-down-inner",onClick:p}))),r["default"].createElement("div",{className:a+"-input-wrap",role:"spinbutton","aria-valuemin":s.min,"aria-valuemax":s.max,"aria-valuenow":k},r["default"].createElement("input",{type:s.type,placeholder:s.placeholder,onClick:s.onClick,className:a+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:m?this.onKeyDown:e,onKeyUp:m?this.onKeyUp:e,autoFocus:s.autoFocus,maxLength:s.maxLength,readOnly:s.readOnly,disabled:s.disabled,max:s.max,min:s.min,name:s.name,id:s.id,onChange:this.onChange,ref:"input",value:x})))}});s["default"]=x,n.exports=s["default"]},363:function(n,s){"use strict";function a(){}function t(n){return n.replace(/[^\w\.-]+/g,"")}Object.defineProperty(s,"__esModule",{value:!0});var e=200,p=600,o=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1;s["default"]={getDefaultProps:function(){return{max:o,min:-o,step:1,style:{},onChange:a,onKeyDown:a,onFocus:a,onBlur:a,parser:t}},getInitialState:function(){var n=void 0,s=this.props;return n="value"in s?s.value:s.defaultValue,n=this.toNumber(n),{inputValue:this.toPrecisionAsStep(n),value:n,focused:s.autoFocus}},componentWillReceiveProps:function(n){"value"in n&&this.setState({inputValue:n.value,value:n.value})},componentWillUnmount:function(){this.stop()},onChange:function(n){var s=this.props.parser(this.getValueFromEvent(n).trim());this.setState({inputValue:s}),this.props.onChange(this.toNumberWhenUserInput(s))},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){for(var s=this,a=arguments.length,t=Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];this.setState({focused:!1});var p=this.getCurrentValidValue(this.state.inputValue);n.persist(),this.setValue(p,function(){var a;(a=s.props).onBlur.apply(a,[n].concat(t))})},getCurrentValidValue:function(n){var s=n,a=this.props;return""===s?s="":this.isNotCompleteNumber(s)?s=this.state.value:(s=Number(s),s<a.min&&(s=a.min),s>a.max&&(s=a.max)),this.toNumber(s)},setValue:function(n,s){var a=this.isNotCompleteNumber(parseFloat(n,10))?void 0:parseFloat(n,10),t=a!==this.state.value;"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},s):this.setState({value:a,inputValue:this.toPrecisionAsStep(n)},s),t&&this.props.onChange(a)},getPrecision:function(n){if("precision"in this.props)return this.props.precision;var s=n.toString();if(s.indexOf("e-")>=0)return parseInt(s.slice(s.indexOf("e-")+2),10);var a=0;return s.indexOf(".")>=0&&(a=s.length-s.indexOf(".")-1),a},getMaxPrecision:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in this.props)return this.props.precision;var a=this.props.step,t=this.getPrecision(s),e=this.getPrecision(a),p=this.getPrecision(n);return n?Math.max(p,t+e):t+e},getPrecisionFactor:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.getMaxPrecision(n,s);return Math.pow(10,a)},toPrecisionAsStep:function(n){if(this.isNotCompleteNumber(n)||""===n)return n;var s=Math.abs(this.getMaxPrecision(n));return s?Number(n).toFixed(s):n.toString()},isNotCompleteNumber:function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},toNumber:function(n){return this.isNotCompleteNumber(n)?n:"precision"in this.props?Number(Number(n).toFixed(this.props.precision)):Number(n)},toNumberWhenUserInput:function(n){return(/\.\d*0$/.test(n)||n.length>16)&&this.state.focused?n:this.toNumber(n)},upStep:function(n,s){var a=this.props,t=a.step,e=a.min,p=this.getPrecisionFactor(n,s),o=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((p*n+p*t*s)/p).toFixed(o):e===-(1/0)?t:e,this.toNumber(u)},downStep:function(n,s){var a=this.props,t=a.step,e=a.min,p=this.getPrecisionFactor(n,s),o=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((p*n-p*t*s)/p).toFixed(o):e===-(1/0)?-t:e,this.toNumber(u)},step:function(n,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;s&&s.preventDefault();var t=this.props;if(!t.disabled){var e=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(e)){var p=this[n+"Step"](e,a);p>t.max?p=t.max:p<t.min&&(p=t.min),this.setValue(p),this.setState({focused:!0})}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,s,a){var t=this;n.persist&&n.persist(),this.stop(),this.step("down",n,s),this.autoStepTimer=setTimeout(function(){t.down(n,s,!0)},a?e:p)},up:function(n,s,a){var t=this;n.persist&&n.persist(),this.stop(),this.step("up",n,s),this.autoStepTimer=setTimeout(function(){t.up(n,s,!0)},a?e:p)}},n.exports=s["default"]},606:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Demos\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">wrap</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">showNumber</span>\n              <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Show number <span class="token function">value</span><span class="token punctuation">(</span>Use TouchEvent <span class="token keyword">for</span> mobile by <span class="token keyword">default</span><span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">wrap</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">showNumber</span>\n              <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val1<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange1<span class="token punctuation">}</span></span>\n              <span class="token attr-name">useTouch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Show number <span class="token function">value</span><span class="token punctuation">(</span>Use MouseEvent <span class="token keyword">for</span> PC<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],p=Object.getOwnPropertyDescriptor(s,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function p(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var o=a(1),u=(a(9),a(18),a(25)),c=n(u),i=(a(325),a(324)),l=n(i),r=function(n){function s(a){t(this,s);var p=e(this,n.call(this,a));return p.onChange=function(n){p.setState({val:n})},p.onChange1=function(n){p.setState({val1:n})},p.state={val:3,val1:2},p}return p(s,n),s.prototype.render=function(){return o.createElement(c["default"],{renderHeader:function(){return"Demos"}},o.createElement(c["default"].Item,{wrap:!0,extra:o.createElement(l["default"],{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange})},"Show number value(Use TouchEvent for mobile by default)"),o.createElement(c["default"].Item,{wrap:!0,extra:o.createElement(l["default"],{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,value:this.state.val1,onChange:this.onChange1,useTouch:!1})},"Show number value(Use MouseEvent for PC)"),o.createElement(c["default"].Item,{extra:o.createElement(l["default"],{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"Disabled"))},s}(o.Component);return o.createElement(r,null)}}},760:function(n,s,a){n.exports={basic:a(606)}}});