webpackJsonp([18,141],{6:function(n,a,t){"use strict";t(18),t(17),t(13)},11:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(12),p=s(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return(0,p["default"])(n)}},12:function(n,a,t){n.exports={"default":t(14),__esModule:!0}},13:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=t(11);s(e)},14:function(n,a,t){t(29),t(16),n.exports=t(20).Array.from},15:function(n,a,t){"use strict";var s=t(25),e=t(28);n.exports=function(n,a,t){a in n?s.f(n,a,e(0,t)):n[a]=t}},16:function(n,a,t){"use strict";var s=t(27),e=t(23),p=t(26),o=t(35),l=t(34),u=t(30),c=t(15),i=t(31);e(e.S+e.F*!t(36)(function(n){Array.from(n)}),"Array",{from:function(n){var a,t,e,r,k=p(n),d="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,v=0,h=i(k);if(g&&(m=s(m,f>2?arguments[2]:void 0,2)),void 0==h||d==Array&&l(h))for(a=u(k.length),t=new d(a);a>v;v++)c(t,v,g?m(k[v],v):k[v]);else for(r=h.call(k),t=new d;!(e=r.next()).done;v++)c(t,v,g?o(r,m,[e.value,v],!0):e.value);return t.length=v,t}})},17:function(n,a){},18:function(n,a){},33:function(n,a,t){"use strict";t(6),t(38)},38:function(n,a){},42:function(n,a,t){"use strict";t(6),t(50)},50:function(n,a){},83:function(n,a,t){var s=t(23),e=t(20),p=t(172);n.exports=function(n,a){var t=(e.Object||{})[n]||Object[n],o={};o[n]=a(t),s(s.S+s.F*p(function(){t(1)}),"Object",o)}},174:function(n,a,t){n.exports={"default":t(179),__esModule:!0}},175:function(n,a,t){n.exports={"default":t(180),__esModule:!0}},176:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(175),p=s(e),o=t(174),l=s(o);a["default"]=function u(n,a,t){null===n&&(n=Function.prototype);var s=(0,l["default"])(n,a);if(void 0===s){var e=(0,p["default"])(n);return null===e?void 0:u(e,a,t)}if("value"in s)return s.value;var o=s.get;if(void 0!==o)return o.call(t)}},179:function(n,a,t){t(181);var s=t(20).Object;n.exports=function(n,a){return s.getOwnPropertyDescriptor(n,a)}},180:function(n,a,t){t(182),n.exports=t(20).Object.getPrototypeOf},181:function(n,a,t){var s=t(115),e=t(211).f;t(83)("getOwnPropertyDescriptor",function(){return function(n,a){return e(s(n),a)}})},182:function(n,a,t){var s=t(26),e=t(220);t(83)("getPrototypeOf",function(){return function(n){return e(s(n))}})},196:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,a){return Object.keys(a).some(function(t){return n.target===(0,v.findDOMNode)(a[t])})}function p(n,a){var t=a.min,s=a.max;return n<t||n>s}function o(n){return n.touches.length>1||"touchend"===n.type.toLowerCase()&&n.touches.length>0}function l(n,a){var t=a.marks,s=a.step,e=a.min,p=Object.keys(t).map(parseFloat);if(null!==s){var o=Math.round((n-e)/s)*s+e;p.push(o)}var l=p.map(function(a){return Math.abs(n-a)});return p[l.indexOf(Math.min.apply(Math,(0,g["default"])(l)))]}function u(n){var a=n.toString(),t=0;return a.indexOf(".")>=0&&(t=a.length-a.indexOf(".")-1),t}function c(n,a){return n?a.clientY:a.pageX}function i(n,a){return n?a.touches[0].clientY:a.touches[0].pageX}function r(n,a){var t=a.getBoundingClientRect();return n?t.top+.5*t.height:t.left+.5*t.width}function k(n,a){var t=a.max,s=a.min;return n<=s?s:n>=t?t:n}function d(n,a){var t=a.step,s=l(n,a);return null===t?s:parseFloat(s.toFixed(u(t)))}function f(n){n.stopPropagation(),n.preventDefault()}Object.defineProperty(a,"__esModule",{value:!0});var m=t(11),g=s(m);a.isEventFromHandle=e,a.isValueOutOfRange=p,a.isNotTouchEvent=o,a.getClosestPoint=l,a.getPrecision=u,a.getMousePosition=c,a.getTouchPosition=i,a.getHandleCenterPosition=r,a.ensureValueInRange=k,a.ensureValuePrecision=d,a.pauseEvent=f;var v=t(1)},249:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(2),p=s(e),o=t(48),l=s(o),u=t(3),c=s(u),i=t(8),r=s(i),k=t(5),d=s(k),f=t(4),m=s(f),g=t(1),v=s(g),h=t(21),y=s(h),b=function(n){function a(){return(0,c["default"])(this,a),(0,d["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m["default"])(a,n),(0,r["default"])(a,[{key:"render",value:function(){var n=this.props,a=n.className,t=n.vertical,s=n.offset,e=n.style,o=n.disabled,u=n.min,c=n.max,i=n.value,r=(0,l["default"])(n,["className","vertical","offset","style","disabled","min","max","value"]),k=t?{bottom:s+"%"}:{left:s+"%"},d=(0,p["default"])({},e,k),f={};return void 0!==i&&(f=(0,p["default"])({},f,{"aria-valuemin":u,"aria-valuemax":c,"aria-valuenow":i,"aria-disabled":!!o})),v["default"].createElement("div",(0,p["default"])({role:"slider"},f,r,{className:a,style:d}))}}]),a}(v["default"].Component);a["default"]=b,b.propTypes={className:y["default"].string,vertical:y["default"].bool,offset:y["default"].number,style:y["default"].object,disabled:y["default"].bool,min:y["default"].number,max:y["default"].number,value:y["default"].number},n.exports=a["default"]},250:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(2),p=s(e),o=t(39),l=s(o),u=t(10),c=s(u),i=t(1),r=s(i),k=t(7),d=s(k),f=function(n){var a=n.className,t=n.vertical,s=n.marks,e=n.included,o=n.upperBound,u=n.lowerBound,i=n.max,k=n.min,f=Object.keys(s),m=f.length,g=m>1?100/(m-1):100,v=.9*g,h=i-k,y=f.map(parseFloat).sort(function(n,a){return n-a}).map(function(n){var i,f=!e&&n===o||e&&n<=o&&n>=u,m=(0,d["default"])((i={},(0,c["default"])(i,a+"-text",!0),(0,c["default"])(i,a+"-text-active",f),i)),g={marginBottom:"-50%",bottom:(n-k)/h*100+"%"},y={width:v+"%",marginLeft:-v/2+"%",left:(n-k)/h*100+"%"},b=t?g:y,x=s[n],_="object"===("undefined"==typeof x?"undefined":(0,l["default"])(x))&&!r["default"].isValidElement(x),O=_?x.label:x,S=_?(0,p["default"])({},b,x.style):b;return r["default"].createElement("span",{className:m,style:S,key:n},O)});return r["default"].createElement("div",{className:a},y)};a["default"]=f,n.exports=a["default"]},251:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(10),p=s(e),o=t(2),l=s(o),u=t(1),c=s(u),i=t(7),r=s(i),k=t(62),d=s(k),f=function(n,a,t,s,e,p){(0,d["default"])(!t||s>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var o=Object.keys(a).map(parseFloat);if(t)for(var l=e;l<=p;l+=s)o.indexOf(l)>=0||o.push(l);return o},m=function(n){var a=n.prefixCls,t=n.vertical,s=n.marks,e=n.dots,o=n.step,u=n.included,i=n.lowerBound,k=n.upperBound,d=n.max,m=n.min,g=n.dotStyle,v=n.activeDotStyle,h=d-m,y=f(t,s,e,o,m,d).map(function(n){var s,e=Math.abs(n-m)/h*100+"%",o=!u&&n===k||u&&n<=k&&n>=i,d=t?(0,l["default"])({bottom:e},g):(0,l["default"])({left:e},g);o&&(d=(0,l["default"])({},d,v));var f=(0,r["default"])((s={},(0,p["default"])(s,a+"-dot",!0),(0,p["default"])(s,a+"-dot-active",o),s));return c["default"].createElement("span",{className:f,style:d,key:n})});return c["default"].createElement("div",{className:a+"-step"},y)};a["default"]=m,n.exports=a["default"]},252:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(2),p=s(e),o=t(1),l=s(o),u=function(n){var a=n.className,t=n.included,s=n.vertical,e=n.offset,o=n.length,u=n.style,c=s?{bottom:e+"%",height:o+"%"}:{left:e+"%",width:o+"%"},i=(0,p["default"])({visibility:t?"visible":"hidden"},u,c);return l["default"].createElement("div",{className:a,style:i})};a["default"]=u,n.exports=a["default"]},253:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(){}function o(n){var a,t;return t=a=function(n){function a(n){(0,f["default"])(this,a);var t=(0,h["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));t.onMouseDown=function(n){if(0===n.button){var a=t.props.vertical,s=W.getMousePosition(a,n);if(W.isEventFromHandle(n,t.handlesRefs)){var e=W.getHandleCenterPosition(a,n.target);t.dragOffset=s-e,s=e}else t.dragOffset=0;t.onStart(s),t.addDocumentMouseEvents(),W.pauseEvent(n)}},t.onTouchStart=function(n){if(!W.isNotTouchEvent(n)){var a=t.props.vertical,s=W.getTouchPosition(a,n);if(W.isEventFromHandle(n,t.handlesRefs)){var e=W.getHandleCenterPosition(a,n.target);t.dragOffset=s-e,s=e}else t.dragOffset=0;t.onStart(s),t.addDocumentTouchEvents(),W.pauseEvent(n)}},t.onMouseMove=function(n){if(!t.sliderRef)return void t.onEnd();var a=W.getMousePosition(t.props.vertical,n);t.onMove(n,a-t.dragOffset)},t.onTouchMove=function(n){if(W.isNotTouchEvent(n)||!t.sliderRef)return void t.onEnd();var a=W.getTouchPosition(t.props.vertical,n);t.onMove(n,a-t.dragOffset)},t.saveSlider=function(n){t.sliderRef=n};return t.handlesRefs={},t}return(0,_["default"])(a,n),(0,g["default"])(a,[{key:"componentWillUnmount",value:function(){(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this)&&(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=(0,C["default"])(document,"touchmove",this.onTouchMove),this.onTouchUpListener=(0,C["default"])(document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=(0,C["default"])(document,"mousemove",this.onMouseMove),this.onMouseUpListener=(0,C["default"])(document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"getSliderStart",value:function(){var n=this.sliderRef,a=n.getBoundingClientRect();return this.props.vertical?a.top:a.left}},{key:"getSliderLength",value:function(){var n=this.sliderRef;if(!n)return 0;var a=n.getBoundingClientRect();return this.props.vertical?a.height:a.width}},{key:"calcValue",value:function(n){var a=this.props,t=a.vertical,s=a.min,e=a.max,p=Math.abs(Math.max(n,0)/this.getSliderLength()),o=t?(1-p)*(e-s)+s:p*(e-s)+s;return o}},{key:"calcValueByPos",value:function(n){var a=n-this.getSliderStart(),t=this.trimAlignValue(this.calcValue(a));return t}},{key:"calcOffset",value:function(n){var a=this.props,t=a.min,s=a.max,e=(n-t)/(s-t);return 100*e}},{key:"saveHandle",value:function(n,a){this.handlesRefs[n]=a}},{key:"render",value:function(){var n,t=this.props,s=t.prefixCls,e=t.className,o=t.marks,l=t.dots,u=t.step,c=t.included,r=t.disabled,d=t.vertical,f=t.min,m=t.max,g=t.children,v=t.maximumTrackStyle,h=t.style,y=t.railStyle,x=t.dotStyle,_=t.activeDotStyle,O=(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this),j=O.tracks,w=O.handles,M=(0,P["default"])(s,(n={},(0,k["default"])(n,s+"-with-marks",Object.keys(o).length),(0,k["default"])(n,s+"-disabled",r),(0,k["default"])(n,s+"-vertical",d),(0,k["default"])(n,e,e),n));return S["default"].createElement("div",{ref:this.saveSlider,className:M,onTouchStart:r?p:this.onTouchStart,onMouseDown:r?p:this.onMouseDown,style:h},S["default"].createElement("div",{className:s+"-rail",style:(0,i["default"])({},v,y)}),j,S["default"].createElement(T["default"],{prefixCls:s,vertical:d,marks:o,dots:l,step:u,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:f,dotStyle:x,activeDotStyle:_}),w,S["default"].createElement(L["default"],{className:s+"-mark",vertical:d,marks:o,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:f}),g)}}]),a}(n),a.displayName="ComponentEnhancer("+n.displayName+")",a.propTypes=(0,i["default"])({},n.propTypes,{min:w["default"].number,max:w["default"].number,step:w["default"].number,marks:w["default"].object,included:w["default"].bool,className:w["default"].string,prefixCls:w["default"].string,disabled:w["default"].bool,children:w["default"].any,onBeforeChange:w["default"].func,onChange:w["default"].func,onAfterChange:w["default"].func,handle:w["default"].func,dots:w["default"].bool,vertical:w["default"].bool,style:w["default"].object,minimumTrackStyle:w["default"].object,maximumTrackStyle:w["default"].object,handleStyle:w["default"].oneOfType([w["default"].object,w["default"].arrayOf(w["default"].object)]),trackStyle:w["default"].oneOfType([w["default"].object,w["default"].arrayOf(w["default"].object)]),railStyle:w["default"].object,dotStyle:w["default"].object,activeDotStyle:w["default"].object}),a.defaultProps=(0,i["default"])({},n.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(n){var a=n.index,t=(0,u["default"])(n,["index"]);return delete t.dragging,S["default"].createElement(D["default"],(0,i["default"])({},t,{key:a}))},onBeforeChange:p,onChange:p,onAfterChange:p,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),t}Object.defineProperty(a,"__esModule",{value:!0});var l=t(48),u=e(l),c=t(2),i=e(c),r=t(10),k=e(r),d=t(3),f=e(d),m=t(8),g=e(m),v=t(5),h=e(v),y=t(176),b=e(y),x=t(4),_=e(x);a["default"]=o;var O=t(1),S=e(O),j=t(21),w=e(j),M=t(224),C=e(M),E=t(7),P=e(E),N=t(62),B=(e(N),t(251)),T=e(B),V=t(250),L=e(V),R=t(249),D=e(R),A=t(196),W=s(A);n.exports=a["default"]},597:function(n,a,t){n.exports={content:[["p","Basic slider. When ",["code","disabled"]," is ",["code","true"],", the slider will not be interactable"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/slider/demo/basic.md",id:"components-slider-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint arrow-body-style: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  log <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-slider-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider With Customized Color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">trackStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">railStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">handleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              borderColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              marginLeft<span class="token punctuation">:</span> <span class="token string">\'-7px\'</span><span class="token punctuation">,</span>\n              marginTop<span class="token punctuation">:</span> <span class="token string">\'-4.5px\'</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):a(n,t))}var o=t(1),l=(t(1),t(42),t(64)),u=n(l),c=(t(688),t(687)),i=n(c),r=(t(33),t(43)),k=n(r),d=function(n){function a(){var t,p,o;s(this,a);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return t=p=e(this,n.call.apply(n,[this].concat(u))),p.log=function(n){return function(a){console.log(n+": "+a)}},o=t,e(p,o)}return p(a,n),a.prototype.render=function(){return o.createElement("div",{className:"am-slider-example"},o.createElement(k["default"],{
size:"lg"}),o.createElement(u["default"],{size:"lg"},o.createElement("p",{className:"sub-title"},"Slider"),o.createElement(i["default"],{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),o.createElement(k["default"],{size:"lg"}),o.createElement(u["default"],{size:"lg"},o.createElement("p",{className:"sub-title"},"Disabled Slider"),o.createElement(i["default"],{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,disabled:!0,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),o.createElement(k["default"],{size:"lg"}),o.createElement(u["default"],{size:"lg"},o.createElement("p",{className:"sub-title"},"Slider With Customized Color"),o.createElement(i["default"],{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,trackStyle:{backgroundColor:"red",height:"5px"},railStyle:{backgroundColor:"blue",height:"5px"},handleStyle:{borderColor:"blue",height:"14px",width:"14px",marginLeft:"-7px",marginTop:"-4.5px",backgroundColor:"blue"}})))},a}(o.Component);return o.createElement(d,null)},style:".demo-preview-item .am-slider-wrapper {\n  margin-bottom: 15px;\n}\n.demo-preview-item .am-slider-example {\n  overflow: hidden;\n}\n.am-wingblank.am-wingblank-lg {\n  margin-bottom: 30px;\n}\n.demo-preview-item .am-slider-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n  margin: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-wingblank.am-wingblank-lg</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span><span class="token pseudo-class">:last-child</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},687:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(3),p=s(e),o=t(5),l=s(o),u=t(4),c=s(u),i=t(1),r=s(i),k=t(891),d=s(k),f=function(n){function a(){return(0,p["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,c["default"])(a,n),a.prototype.render=function(){return r["default"].createElement("div",{className:this.props.prefixCls+"-wrapper"},r["default"].createElement(d["default"],this.props))},a}(r["default"].Component);a["default"]=f,f.defaultProps={prefixCls:"am-slider"},n.exports=a["default"]},688:function(n,a,t){"use strict";t(823)},738:function(n,a,t){n.exports={basic:t(597)}},823:function(n,a){},891:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=t(2),o=e(p),l=t(3),u=e(l),c=t(8),i=e(c),r=t(5),k=e(r),d=t(4),f=e(d),m=t(1),g=e(m),v=t(21),h=e(v),y=t(62),b=(e(y),t(252)),x=e(b),_=t(253),O=e(_),S=t(196),j=s(S),w=function(n){function a(n){(0,u["default"])(this,a);var t=(0,k["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));t.onEnd=function(){t.setState({dragging:!1}),t.removeDocumentEvents(),t.props.onAfterChange(t.getValue())};var s=void 0!==n.defaultValue?n.defaultValue:n.min,e=void 0!==n.value?n.value:s;return t.state={value:t.trimAlignValue(e),dragging:!1},t}return(0,f["default"])(a,n),(0,i["default"])(a,[{key:"componentWillReceiveProps",value:function(n){if("value"in n||"min"in n||"max"in n){var a=this.state.value,t=void 0!==n.value?n.value:a,s=this.trimAlignValue(t,n);s!==a&&(this.setState({value:s}),j.isValueOutOfRange(t,n)&&this.props.onChange(s))}}},{key:"onChange",value:function(n){var a=this.props,t=!("value"in a);t&&this.setState(n);var s=n.value;a.onChange(s)}},{key:"onStart",value:function(n){this.setState({dragging:!0});var a=this.props,t=this.getValue();a.onBeforeChange(t);var s=this.calcValueByPos(n);this.startValue=s,this.startPosition=n,s!==t&&this.onChange({value:s})}},{key:"onMove",value:function(n,a){j.pauseEvent(n);var t=this.state,s=this.calcValueByPos(a),e=t.value;s!==e&&this.onChange({value:s})}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o["default"])({},this.props,a),s=j.ensureValueInRange(n,t);return j.ensureValuePrecision(s,t)}},{key:"render",value:function(){var n=this,a=this.props,t=a.prefixCls,s=a.vertical,e=a.included,p=a.disabled,l=a.minimumTrackStyle,u=a.trackStyle,c=a.handleStyle,i=a.min,r=a.max,k=a.handle,d=this.state,f=d.value,m=d.dragging,v=this.calcOffset(f),h=k({className:t+"-handle",vertical:s,offset:v,value:f,dragging:m,disabled:p,min:i,max:r,style:c[0]||c,ref:function(a){return n.saveHandle(0,a)}}),y=u[0]||u,b=g["default"].createElement(x["default"],{className:t+"-track",vertical:s,included:e,offset:0,length:v,style:(0,o["default"])({},l,y)});return{tracks:b,handles:h}}}]),a}(g["default"].Component);w.propTypes={defaultValue:h["default"].number,value:h["default"].number,disabled:h["default"].bool},a["default"]=(0,O["default"])(w),n.exports=a["default"]}});