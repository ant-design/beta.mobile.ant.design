webpackJsonp([19,141],{6:function(n,a,s){"use strict";s(18),s(17),s(13)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(12),p=t(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,p["default"])(n)}},12:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},13:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=s(11);t(e)},14:function(n,a,s){s(30),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),e=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(28),e=s(22),p=s(26),o=s(34),l=s(33),u=s(31),c=s(15),i=s(32);e(e.S+e.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),d="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,v=0,h=i(k);if(g&&(m=t(m,f>2?arguments[2]:void 0,2)),void 0==h||d==Array&&l(h))for(a=u(k.length),s=new d(a);a>v;v++)c(s,v,g?m(k[v],v):k[v]);else for(r=h.call(k),s=new d;!(e=r.next()).done;v++)c(s,v,g?o(r,m,[e.value,v],!0):e.value);return s.length=v,s}})},17:function(n,a){},18:function(n,a){},27:function(n,a,s){"use strict";s(6),s(37)},37:function(n,a){},41:function(n,a,s){"use strict";s(6),s(44)},44:function(n,a){},72:function(n,a,s){var t=s(22),e=s(20),p=s(126);n.exports=function(n,a){var s=(e.Object||{})[n]||Object[n],o={};o[n]=a(s),t(t.S+t.F*p(function(){s(1)}),"Object",o)}},131:function(n,a,s){n.exports={"default":s(136),__esModule:!0}},132:function(n,a,s){n.exports={"default":s(137),__esModule:!0}},133:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(132),p=t(e),o=s(131),l=t(o);a["default"]=function u(n,a,s){null===n&&(n=Function.prototype);var t=(0,l["default"])(n,a);if(void 0===t){var e=(0,p["default"])(n);return null===e?void 0:u(e,a,s)}if("value"in t)return t.value;var o=t.get;if(void 0!==o)return o.call(s)}},136:function(n,a,s){s(138);var t=s(20).Object;n.exports=function(n,a){return t.getOwnPropertyDescriptor(n,a)}},137:function(n,a,s){s(139),n.exports=s(20).Object.getPrototypeOf},138:function(n,a,s){var t=s(104),e=s(167).f;s(72)("getOwnPropertyDescriptor",function(){return function(n,a){return e(t(n),a)}})},139:function(n,a,s){var t=s(26),e=s(187);s(72)("getPrototypeOf",function(){return function(n){return e(t(n))}})},154:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a){return Object.keys(a).some(function(s){return n.target===(0,v.findDOMNode)(a[s])})}function p(n,a){var s=a.min,t=a.max;return n<s||n>t}function o(n){return n.touches.length>1||"touchend"===n.type.toLowerCase()&&n.touches.length>0}function l(n,a){var s=a.marks,t=a.step,e=a.min,p=Object.keys(s).map(parseFloat);if(null!==t){var o=Math.round((n-e)/t)*t+e;p.push(o)}var l=p.map(function(a){return Math.abs(n-a)});return p[l.indexOf(Math.min.apply(Math,(0,g["default"])(l)))]}function u(n){var a=n.toString(),s=0;return a.indexOf(".")>=0&&(s=a.length-a.indexOf(".")-1),s}function c(n,a){return n?a.clientY:a.pageX}function i(n,a){return n?a.touches[0].clientY:a.touches[0].pageX}function r(n,a){var s=a.getBoundingClientRect();return n?s.top+.5*s.height:s.left+.5*s.width}function k(n,a){var s=a.max,t=a.min;return n<=t?t:n>=s?s:n}function d(n,a){var s=a.step,t=l(n,a);return null===s?t:parseFloat(t.toFixed(u(s)))}function f(n){n.stopPropagation(),n.preventDefault()}Object.defineProperty(a,"__esModule",{value:!0});var m=s(11),g=t(m);a.isEventFromHandle=e,a.isValueOutOfRange=p,a.isNotTouchEvent=o,a.getClosestPoint=l,a.getPrecision=u,a.getMousePosition=c,a.getTouchPosition=i,a.getHandleCenterPosition=r,a.ensureValueInRange=k,a.ensureValuePrecision=d,a.pauseEvent=f;var v=s(1)},222:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(2),p=t(e),o=s(48),l=t(o),u=s(3),c=t(u),i=s(8),r=t(i),k=s(5),d=t(k),f=s(4),m=t(f),g=s(1),v=t(g),h=s(21),y=t(h),b=function(n){function a(){return(0,c["default"])(this,a),(0,d["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m["default"])(a,n),(0,r["default"])(a,[{key:"render",value:function(){var n=this.props,a=n.className,s=n.vertical,t=n.offset,e=n.style,o=n.disabled,u=n.min,c=n.max,i=n.value,r=(0,l["default"])(n,["className","vertical","offset","style","disabled","min","max","value"]),k=s?{bottom:t+"%"}:{left:t+"%"},d=(0,p["default"])({},e,k),f={};return void 0!==i&&(f=(0,p["default"])({},f,{"aria-valuemin":u,"aria-valuemax":c,"aria-valuenow":i,"aria-disabled":!!o})),v["default"].createElement("div",(0,p["default"])({role:"slider"},f,r,{className:a,style:d}))}}]),a}(v["default"].Component);a["default"]=b,b.propTypes={className:y["default"].string,vertical:y["default"].bool,offset:y["default"].number,style:y["default"].object,disabled:y["default"].bool,min:y["default"].number,max:y["default"].number,value:y["default"].number},n.exports=a["default"]},223:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(2),p=t(e),o=s(39),l=t(o),u=s(10),c=t(u),i=s(1),r=t(i),k=s(7),d=t(k),f=function(n){var a=n.className,s=n.vertical,t=n.marks,e=n.included,o=n.upperBound,u=n.lowerBound,i=n.max,k=n.min,f=Object.keys(t),m=f.length,g=m>1?100/(m-1):100,v=.9*g,h=i-k,y=f.map(parseFloat).sort(function(n,a){return n-a}).map(function(n){var i,f=!e&&n===o||e&&n<=o&&n>=u,m=(0,d["default"])((i={},(0,c["default"])(i,a+"-text",!0),(0,c["default"])(i,a+"-text-active",f),i)),g={marginBottom:"-50%",bottom:(n-k)/h*100+"%"},y={width:v+"%",marginLeft:-v/2+"%",left:(n-k)/h*100+"%"},b=s?g:y,x=t[n],_="object"===("undefined"==typeof x?"undefined":(0,l["default"])(x))&&!r["default"].isValidElement(x),O=_?x.label:x,S=_?(0,p["default"])({},b,x.style):b;return r["default"].createElement("span",{className:m,style:S,key:n},O)});return r["default"].createElement("div",{className:a},y)};a["default"]=f,n.exports=a["default"]},224:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(10),p=t(e),o=s(2),l=t(o),u=s(1),c=t(u),i=s(7),r=t(i),k=s(53),d=t(k),f=function(n,a,s,t,e,p){(0,d["default"])(!s||t>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var o=Object.keys(a).map(parseFloat);if(s)for(var l=e;l<=p;l+=t)o.indexOf(l)>=0||o.push(l);return o},m=function(n){var a=n.prefixCls,s=n.vertical,t=n.marks,e=n.dots,o=n.step,u=n.included,i=n.lowerBound,k=n.upperBound,d=n.max,m=n.min,g=n.dotStyle,v=n.activeDotStyle,h=d-m,y=f(s,t,e,o,m,d).map(function(n){var t,e=Math.abs(n-m)/h*100+"%",o=!u&&n===k||u&&n<=k&&n>=i,d=s?(0,l["default"])({bottom:e},g):(0,l["default"])({left:e},g);o&&(d=(0,l["default"])({},d,v));var f=(0,r["default"])((t={},(0,p["default"])(t,a+"-dot",!0),(0,p["default"])(t,a+"-dot-active",o),t));return c["default"].createElement("span",{className:f,style:d,key:n})});return c["default"].createElement("div",{className:a+"-step"},y)};a["default"]=m,n.exports=a["default"]},225:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(2),p=t(e),o=s(1),l=t(o),u=function(n){var a=n.className,s=n.included,t=n.vertical,e=n.offset,o=n.length,u=n.style,c=t?{bottom:e+"%",height:o+"%"}:{left:e+"%",width:o+"%"},i=(0,p["default"])({visibility:s?"visible":"hidden"},u,c);return l["default"].createElement("div",{className:a,style:i})};a["default"]=u,n.exports=a["default"]},226:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(){}function o(n){var a,s;return s=a=function(n){function a(n){(0,f["default"])(this,a);var s=(0,h["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onMouseDown=function(n){if(0===n.button){var a=s.props.vertical,t=W.getMousePosition(a,n);if(W.isEventFromHandle(n,s.handlesRefs)){var e=W.getHandleCenterPosition(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentMouseEvents(),W.pauseEvent(n)}},s.onTouchStart=function(n){if(!W.isNotTouchEvent(n)){var a=s.props.vertical,t=W.getTouchPosition(a,n);if(W.isEventFromHandle(n,s.handlesRefs)){var e=W.getHandleCenterPosition(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentTouchEvents(),W.pauseEvent(n)}},s.onMouseMove=function(n){if(!s.sliderRef)return void s.onEnd();var a=W.getMousePosition(s.props.vertical,n);s.onMove(n,a-s.dragOffset)},s.onTouchMove=function(n){if(W.isNotTouchEvent(n)||!s.sliderRef)return void s.onEnd();var a=W.getTouchPosition(s.props.vertical,n);s.onMove(n,a-s.dragOffset)},s.saveSlider=function(n){s.sliderRef=n};return s.handlesRefs={},s}return(0,_["default"])(a,n),(0,g["default"])(a,[{key:"componentWillUnmount",value:function(){(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this)&&(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=(0,C["default"])(document,"touchmove",this.onTouchMove),this.onTouchUpListener=(0,C["default"])(document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=(0,C["default"])(document,"mousemove",this.onMouseMove),this.onMouseUpListener=(0,C["default"])(document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"getSliderStart",value:function(){var n=this.sliderRef,a=n.getBoundingClientRect();return this.props.vertical?a.top:a.left}},{key:"getSliderLength",value:function(){var n=this.sliderRef;if(!n)return 0;var a=n.getBoundingClientRect();return this.props.vertical?a.height:a.width}},{key:"calcValue",value:function(n){var a=this.props,s=a.vertical,t=a.min,e=a.max,p=Math.abs(Math.max(n,0)/this.getSliderLength()),o=s?(1-p)*(e-t)+t:p*(e-t)+t;return o}},{key:"calcValueByPos",value:function(n){var a=n-this.getSliderStart(),s=this.trimAlignValue(this.calcValue(a));return s}},{key:"calcOffset",value:function(n){var a=this.props,s=a.min,t=a.max,e=(n-s)/(t-s);return 100*e}},{key:"saveHandle",value:function(n,a){this.handlesRefs[n]=a}},{key:"render",value:function(){var n,s=this.props,t=s.prefixCls,e=s.className,o=s.marks,l=s.dots,u=s.step,c=s.included,r=s.disabled,d=s.vertical,f=s.min,m=s.max,g=s.children,v=s.maximumTrackStyle,h=s.style,y=s.railStyle,x=s.dotStyle,_=s.activeDotStyle,O=(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this),j=O.tracks,w=O.handles,M=(0,P["default"])(t,(n={},(0,k["default"])(n,t+"-with-marks",Object.keys(o).length),(0,k["default"])(n,t+"-disabled",r),(0,k["default"])(n,t+"-vertical",d),(0,k["default"])(n,e,e),n));return S["default"].createElement("div",{ref:this.saveSlider,className:M,onTouchStart:r?p:this.onTouchStart,onMouseDown:r?p:this.onMouseDown,style:h},S["default"].createElement("div",{className:t+"-rail",style:(0,i["default"])({},v,y)}),j,S["default"].createElement(T["default"],{prefixCls:t,vertical:d,marks:o,dots:l,step:u,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:f,dotStyle:x,activeDotStyle:_}),w,S["default"].createElement(L["default"],{className:t+"-mark",vertical:d,marks:o,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:f}),g)}}]),a}(n),a.displayName="ComponentEnhancer("+n.displayName+")",a.propTypes=(0,i["default"])({},n.propTypes,{min:w["default"].number,max:w["default"].number,step:w["default"].number,marks:w["default"].object,included:w["default"].bool,className:w["default"].string,prefixCls:w["default"].string,disabled:w["default"].bool,children:w["default"].any,onBeforeChange:w["default"].func,onChange:w["default"].func,onAfterChange:w["default"].func,handle:w["default"].func,dots:w["default"].bool,vertical:w["default"].bool,style:w["default"].object,minimumTrackStyle:w["default"].object,maximumTrackStyle:w["default"].object,handleStyle:w["default"].oneOfType([w["default"].object,w["default"].arrayOf(w["default"].object)]),trackStyle:w["default"].oneOfType([w["default"].object,w["default"].arrayOf(w["default"].object)]),railStyle:w["default"].object,dotStyle:w["default"].object,activeDotStyle:w["default"].object}),a.defaultProps=(0,i["default"])({},n.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(n){var a=n.index,s=(0,u["default"])(n,["index"]);return delete s.dragging,S["default"].createElement(D["default"],(0,i["default"])({},s,{key:a}))},onBeforeChange:p,onChange:p,onAfterChange:p,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),s}Object.defineProperty(a,"__esModule",{value:!0});var l=s(48),u=e(l),c=s(2),i=e(c),r=s(10),k=e(r),d=s(3),f=e(d),m=s(8),g=e(m),v=s(5),h=e(v),y=s(133),b=e(y),x=s(4),_=e(x);a["default"]=o;var O=s(1),S=e(O),j=s(21),w=e(j),M=s(192),C=e(M),E=s(7),P=e(E),N=s(53),B=(e(N),s(224)),T=e(B),V=s(223),L=e(V),R=s(222),D=e(R),A=s(154),W=t(A);n.exports=a["default"]},630:function(n,a,s){n.exports={content:[["p","Basic slider. When ",["code","disabled"]," is ",["code","true"],", the slider will not be interactable"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/slider/demo/basic.md",id:"components-slider-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint arrow-body-style: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  log <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-slider-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider With Customized Color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">trackStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">railStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">handleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              borderColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              marginLeft<span class="token punctuation">:</span> <span class="token string">\'-7px\'</span><span class="token punctuation">,</span>\n              marginTop<span class="token punctuation">:</span> <span class="token string">\'-4.5px\'</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function a(n){return n&&n.__esModule?n:{"default":n}}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var o=s(1);s(1);s(41);var l=a(s(55))["default"];s(711);var u=a(s(710))["default"];s(27);var c=a(s(42))["default"],i=function(n){function a(){var s,p,o;t(this,a);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return s=p=e(this,n.call.apply(n,[this].concat(u))),p.log=function(n){return function(a){console.log(n+": "+a)}},o=s,e(p,o)}return p(a,n),a.prototype.render=function(){return o.createElement("div",{className:"am-slider-example"
},o.createElement(c,{size:"lg"}),o.createElement(l,{size:"lg"},o.createElement("p",{className:"sub-title"},"Slider"),o.createElement(u,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),o.createElement(c,{size:"lg"}),o.createElement(l,{size:"lg"},o.createElement("p",{className:"sub-title"},"Disabled Slider"),o.createElement(u,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,disabled:!0,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),o.createElement(c,{size:"lg"}),o.createElement(l,{size:"lg"},o.createElement("p",{className:"sub-title"},"Slider With Customized Color"),o.createElement(u,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,trackStyle:{backgroundColor:"red",height:"5px"},railStyle:{backgroundColor:"blue",height:"5px"},handleStyle:{borderColor:"blue",height:"14px",width:"14px",marginLeft:"-7px",marginTop:"-4.5px",backgroundColor:"blue"}})))},a}(o.Component);return o.createElement(i,null)},style:".demo-preview-item .am-slider-wrapper {\n  margin-bottom: 15px;\n}\n.demo-preview-item .am-slider-example {\n  overflow: hidden;\n}\n.am-wingblank.am-wingblank-lg {\n  margin-bottom: 30px;\n}\n.demo-preview-item .am-slider-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n  margin: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-wingblank.am-wingblank-lg</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span><span class="token pseudo-class">:last-child</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},710:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(3),p=t(e),o=s(5),l=t(o),u=s(4),c=t(u),i=s(1),r=t(i),k=s(1002),d=t(k),f=function(n){function a(){return(0,p["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,c["default"])(a,n),a.prototype.render=function(){return r["default"].createElement("div",{className:this.props.prefixCls+"-wrapper"},r["default"].createElement(d["default"],this.props))},a}(r["default"].Component);a["default"]=f,f.defaultProps={prefixCls:"am-slider"},n.exports=a["default"]},711:function(n,a,s){"use strict";s(849)},761:function(n,a,s){n.exports={basic:s(630)}},849:function(n,a){},1002:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(2),o=e(p),l=s(3),u=e(l),c=s(8),i=e(c),r=s(5),k=e(r),d=s(4),f=e(d),m=s(1),g=e(m),v=s(21),h=e(v),y=s(53),b=(e(y),s(225)),x=e(b),_=s(226),O=e(_),S=s(154),j=t(S),w=function(n){function a(n){(0,u["default"])(this,a);var s=(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onEnd=function(){s.setState({dragging:!1}),s.removeDocumentEvents(),s.props.onAfterChange(s.getValue())};var t=void 0!==n.defaultValue?n.defaultValue:n.min,e=void 0!==n.value?n.value:t;return s.state={value:s.trimAlignValue(e),dragging:!1},s}return(0,f["default"])(a,n),(0,i["default"])(a,[{key:"componentWillReceiveProps",value:function(n){if("value"in n||"min"in n||"max"in n){var a=this.state.value,s=void 0!==n.value?n.value:a,t=this.trimAlignValue(s,n);t!==a&&(this.setState({value:t}),j.isValueOutOfRange(s,n)&&this.props.onChange(t))}}},{key:"onChange",value:function(n){var a=this.props,s=!("value"in a);s&&this.setState(n);var t=n.value;a.onChange(t)}},{key:"onStart",value:function(n){this.setState({dragging:!0});var a=this.props,s=this.getValue();a.onBeforeChange(s);var t=this.calcValueByPos(n);this.startValue=t,this.startPosition=n,t!==s&&this.onChange({value:t})}},{key:"onMove",value:function(n,a){j.pauseEvent(n);var s=this.state,t=this.calcValueByPos(a),e=s.value;t!==e&&this.onChange({value:t})}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,o["default"])({},this.props,a),t=j.ensureValueInRange(n,s);return j.ensureValuePrecision(t,s)}},{key:"render",value:function(){var n=this,a=this.props,s=a.prefixCls,t=a.vertical,e=a.included,p=a.disabled,l=a.minimumTrackStyle,u=a.trackStyle,c=a.handleStyle,i=a.min,r=a.max,k=a.handle,d=this.state,f=d.value,m=d.dragging,v=this.calcOffset(f),h=k({className:s+"-handle",vertical:t,offset:v,value:f,dragging:m,disabled:p,min:i,max:r,style:c[0]||c,ref:function(a){return n.saveHandle(0,a)}}),y=u[0]||u,b=g["default"].createElement(x["default"],{className:s+"-track",vertical:t,included:e,offset:0,length:v,style:(0,o["default"])({},l,y)});return{tracks:b,handles:h}}}]),a}(g["default"].Component);w.propTypes={defaultValue:h["default"].number,value:h["default"].number,disabled:h["default"].bool},a["default"]=(0,O["default"])(w),n.exports=a["default"]}});