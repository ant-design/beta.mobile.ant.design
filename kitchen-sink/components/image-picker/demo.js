webpackJsonp([19,141],{6:function(n,a,t){"use strict";t(18),t(17),t(13)},11:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(12),o=s(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return(0,o["default"])(n)}},12:function(n,a,t){n.exports={"default":t(14),__esModule:!0}},13:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=t(11);s(e)},14:function(n,a,t){t(29),t(16),n.exports=t(20).Array.from},15:function(n,a,t){"use strict";var s=t(25),e=t(28);n.exports=function(n,a,t){a in n?s.f(n,a,e(0,t)):n[a]=t}},16:function(n,a,t){"use strict";var s=t(27),e=t(23),o=t(26),p=t(35),c=t(34),l=t(30),u=t(15),i=t(31);e(e.S+e.F*!t(36)(function(n){Array.from(n)}),"Array",{from:function(n){var a,t,e,r,f=o(n),k="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,h=0,y=i(f);if(g&&(m=s(m,d>2?arguments[2]:void 0,2)),void 0==y||k==Array&&c(y))for(a=l(f.length),t=new k(a);a>h;h++)u(t,h,g?m(f[h],h):f[h]);else for(r=y.call(f),t=new k;!(e=r.next()).done;h++)u(t,h,g?p(r,m,[e.value,h],!0):e.value);return t.length=h,t}})},17:function(n,a){},18:function(n,a){},22:function(n,a,t){"use strict";t(32)},32:function(n,a){},42:function(n,a,t){"use strict";t(6),t(50)},50:function(n,a){},66:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(2),o=s(e),p=t(10),c=s(p),l=t(3),u=s(l),i=t(5),r=s(i),f=t(4),k=s(f),d=t(1),m=s(d),g=t(7),h=s(g),y=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]]);return t},v=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,p=a.align,l=a.alignContent,u=a.className,i=a.children,r=a.prefixCls,f=a.style,k=y(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),d=(0,h["default"])(r,u,(n={},(0,c["default"])(n,r+"-dir-row","row"===t),(0,c["default"])(n,r+"-dir-row-reverse","row-reverse"===t),(0,c["default"])(n,r+"-dir-column","column"===t),(0,c["default"])(n,r+"-dir-column-reverse","column-reverse"===t),(0,c["default"])(n,r+"-nowrap","nowrap"===s),(0,c["default"])(n,r+"-wrap","wrap"===s),(0,c["default"])(n,r+"-wrap-reverse","wrap-reverse"===s),(0,c["default"])(n,r+"-justify-start","start"===e),(0,c["default"])(n,r+"-justify-end","end"===e),(0,c["default"])(n,r+"-justify-center","center"===e),(0,c["default"])(n,r+"-justify-between","between"===e),(0,c["default"])(n,r+"-justify-around","around"===e),(0,c["default"])(n,r+"-align-start","start"===p),(0,c["default"])(n,r+"-align-center","center"===p),(0,c["default"])(n,r+"-align-end","end"===p),(0,c["default"])(n,r+"-align-baseline","baseline"===p),(0,c["default"])(n,r+"-align-stretch","stretch"===p),(0,c["default"])(n,r+"-align-content-start","start"===l),(0,c["default"])(n,r+"-align-content-end","end"===l),(0,c["default"])(n,r+"-align-content-center","center"===l),(0,c["default"])(n,r+"-align-content-between","between"===l),(0,c["default"])(n,r+"-align-content-around","around"===l),(0,c["default"])(n,r+"-align-content-stretch","stretch"===l),n));return m["default"].createElement("div",(0,o["default"])({className:d,style:f},k),i)},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=a["default"]},67:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(2),o=s(e),p=t(3),c=s(p),l=t(5),u=s(l),i=t(4),r=s(i),f=t(1),k=s(f),d=t(7),m=s(d),g=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]]);return t},h=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.children,t=n.className,s=n.prefixCls,e=n.style,p=g(n,["children","className","prefixCls","style"]),c=(0,m["default"])(s+"-item",t);return k["default"].createElement("div",(0,o["default"])({className:c,style:e},p),a)},a}(k["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},68:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(66),o=s(e),p=t(67),c=s(p);o["default"].Item=c["default"],a["default"]=o["default"],n.exports=a["default"]},69:function(n,a,t){"use strict";t(6),t(70)},70:function(n,a){},169:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a;return g&&(g.destroy(),g=null),g=r["default"].newInstance({prefixCls:h,style:{},transitionName:"am-fade",className:(0,m["default"])((a={},(0,c["default"])(a,h+"-mask",n),(0,c["default"])(a,h+"-nomask",!n),a))})}function o(n,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,s=arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],p={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"}[a],c=e(o);c.notice({duration:t,style:{},content:p?u["default"].createElement("div",{className:h+"-text "+h+"-text-icon",role:"alert","aria-live":"assertive"},u["default"].createElement(k["default"],{type:p,size:"lg"}),u["default"].createElement("div",{className:h+"-text-info"},n)):u["default"].createElement("div",{className:h+"-text",role:"alert","aria-live":"assertive"},u["default"].createElement("div",null,n)),onClose:function(){s&&s(),c.destroy(),c=null,g=null}})}Object.defineProperty(a,"__esModule",{value:!0});var p=t(10),c=s(p),l=t(1),u=s(l),i=t(186),r=s(i),f=t(52),k=s(f),d=t(7),m=s(d),g=void 0,h="am-toast";a["default"]={SHORT:3,LONG:8,show:function(n,a,t){return o(n,"info",a,function(){},t)},info:function(n,a,t,s){return o(n,"info",a,t,s)},success:function(n,a,t,s){return o(n,"success",a,t,s)},fail:function(n,a,t,s){return o(n,"fail",a,t,s)},offline:function(n,a,t,s){return o(n,"offline",a,t,s)},loading:function(n,a,t,s){return o(n,"loading",a,t,s)},hide:function(){g&&(g.destroy(),g=null)}},n.exports=a["default"]},170:function(n,a,t){"use strict";t(6),t(22),t(183)},183:function(n,a){},184:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(10),o=s(e),p=t(3),c=s(p),l=t(8),u=s(l),i=t(5),r=s(i),f=t(4),k=s(f),d=t(1),m=s(d),g=t(7),h=s(g),y=t(21),v=s(y),b=function(n){function a(){var n,t,s,e;(0,c["default"])(this,a);for(var o=arguments.length,p=Array(o),l=0;l<o;l++)p[l]=arguments[l];return t=s=(0,r["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),s.close=function(){s.clearCloseTimer(),s.props.onClose()},s.startCloseTimer=function(){s.props.duration&&(s.closeTimer=setTimeout(function(){s.close()},1e3*s.props.duration))},s.clearCloseTimer=function(){s.closeTimer&&(clearTimeout(s.closeTimer),s.closeTimer=null)},e=t,(0,r["default"])(s,e)}return(0,k["default"])(a,n),(0,u["default"])(a,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,a=this.props,t=a.prefixCls+"-notice",s=(n={},(0,o["default"])(n,""+t,1),(0,o["default"])(n,t+"-closable",a.closable),(0,o["default"])(n,a.className,!!a.className),n);return m["default"].createElement("div",{className:(0,h["default"])(s),style:a.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer},m["default"].createElement("div",{className:t+"-content"},a.children),a.closable?m["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:t+"-close"},m["default"].createElement("span",{className:t+"-close-x"})):null)}}]),a}(d.Component);b.propTypes={duration:v["default"].number,onClose:v["default"].func,children:v["default"].any},b.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},a["default"]=b,n.exports=a["default"]},185:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){return"rcNotification_"+A+"_"+S++}Object.defineProperty(a,"__esModule",{value:!0});var o=t(48),p=s(o),c=t(10),l=s(c),u=t(2),i=s(u),r=t(3),f=s(r),k=t(8),d=s(k),m=t(5),g=s(m),h=t(4),y=s(h),v=t(1),b=s(v),C=t(21),w=s(C),j=t(1),x=s(j),O=t(85),_=s(O),E=t(187),P=s(E),I=t(7),N=s(I),T=t(184),M=s(T),S=0,A=Date.now(),U=function(n){function a(){var n,t,s,o;(0,f["default"])(this,a);for(var p=arguments.length,c=Array(p),l=0;l<p;l++)c[l]=arguments[l];return t=s=(0,g["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(c))),s.state={notices:[]},s.add=function(n){var a=n.key=n.key||e();s.setState(function(t){var s=t.notices;if(!s.filter(function(n){return n.key===a}).length)return{notices:s.concat(n)}})},s.remove=function(n){s.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},o=t,(0,g["default"])(s,o)}return(0,y["default"])(a,n),(0,d["default"])(a,[{key:"getTransitionName",value:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a}},{key:"render",value:function(){var n,a=this,t=this.props,s=this.state.notices.map(function(n){var s=(0,P["default"])(a.remove.bind(a,n.key),n.onClose);return b["default"].createElement(M["default"],(0,i["default"])({prefixCls:t.prefixCls},n,{onClose:s}),n.content)}),e=(n={},(0,l["default"])(n,t.prefixCls,1),(0,l["default"])(n,t.className,!!t.className),n);return b["default"].createElement("div",{className:(0,N["default"])(e),style:t.style},b["default"].createElement(_["default"],{transitionName:this.getTransitionName()},s))}}]),a}(v.Component);U.propTypes={prefixCls:w["default"].string,transitionName:w["default"].string,animation:w["default"].oneOfType([w["default"].string,w["default"].object]),style:w["default"].object},U.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},U.newInstance=function(n){var a=n||{},t=a.getContainer,s=(0,p["default"])(a,["getContainer"]),e=void 0;t?e=t():(e=document.createElement("div"),document.body.appendChild(e));var o=x["default"].render(b["default"].createElement(U,s),e);return{notice:function(n){o.add(n)},removeNotice:function(n){o.remove(n)},component:o,destroy:function(){x["default"].unmountComponentAtNode(e),t||document.body.removeChild(e)}}},a["default"]=U,n.exports=a["default"]},186:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(185),o=s(e);a["default"]=o["default"],n.exports=a["default"]},187:function(n,a){"use strict";function t(){var n=[].slice.call(arguments,0);return 1===n.length?n[0]:function(){for(var a=0;a<n.length;a++)n[a]&&n[a].apply&&n[a].apply(this,arguments)}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},386:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var o=t(3),p=s(o),c=t(5),l=s(c),u=t(4),i=s(u),r=t(1),f=s(r),k=t(7),d=s(k),m=t(64),g=s(m),h=t(68),y=s(h),v=t(169),b=s(v),C=t(51),w=s(C),j=y["default"].Item,x=function(n){function a(){(0,p["default"])(this,a);var t=(0,l["default"])(this,n.apply(this,arguments));return t.getOrientation=function(n,a){var t=new FileReader;t.onload=function(n){var t=new DataView(n.target.result);if(65496!==t.getUint16(0,!1))return a(-2);for(var s=t.byteLength,e=2;e<s;){var o=t.getUint16(e,!1);if(e+=2,65505===o){var p=t.getUint32(e+=2,!1);if(1165519206!==p)return a(-1);var c=18761===t.getUint16(e+=6,!1);e+=t.getUint32(e+4,c);var l=t.getUint16(e,c);e+=2;for(var u=0;u<l;u++)if(274===t.getUint16(e+12*u,c))return a(t.getUint16(e+12*u+8,c))}else{if(65280!==(65280&o))break;e+=t.getUint16(e,!1)}}return a(-1)},t.readAsArrayBuffer(n.slice(0,65536))},t.getRotation=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=0;switch(n){case 3:a=180;break;case 6:a=90;break;case 8:a=270}return a},t.removeImage=function(n){var a=[],s=t.props.files,e=void 0===s?[]:s;e.forEach(function(t,s){n!==s&&a.push(t)}),t.props.onChange&&t.props.onChange(a,"remove",n)},t.addImage=function(n){var a=t.props.files,s=void 0===a?[]:a,e=s.concat(n);t.props.onChange&&t.props.onChange(e,"add")},t.onImageClick=function(n){t.props.onImageClick&&t.props.onImageClick(n,t.props.files)},t.onFileChange=function(){var n=t.fileSelectorInput;if(n&&n.files&&n.files.length){var a=n.files[0],s=new FileReader;s.onload=function(s){var e=s.target.result;if(!e)return void b["default"].fail("\u56fe\u7247\u83b7\u53d6\u5931\u8d25");var o=1;t.getOrientation(a,function(s){s>0&&(o=s),t.addImage({url:e,orientation:o,file:a}),n.value=""})},s.readAsDataURL(a)}},t}return(0,i["default"])(a,n),a.prototype.render=function(){var n=this,a=this.props,t=a.prefixCls,s=a.style,e=a.className,o=a.files,p=void 0===o?[]:o,c=a.selectable,l=a.onAddImageClick,u=[],i=(0,d["default"])(""+t,e);p.forEach(function(a,s){var e={backgroundImage:"url("+a.url+")",transform:"rotate("+n.getRotation(a.orientation)+"deg)"};u.push(f["default"].createElement(j,{key:"item-"+s},f["default"].createElement("div",{key:s,className:t+"-item"},f["default"].createElement("div",{className:t+"-item-remove",role:"button","aria-label":"Click and Remove this image",onClick:function(){n.removeImage(s)}}),f["default"].createElement("div",{className:t+"-item-content",role:"button","aria-label":"Image can be clicked",onClick:function(){n.onImageClick(s)},style:e}))))});var r=f["default"].createElement(j,{key:"select"},f["default"].createElement(w["default"],{activeClassName:t+"-upload-btn-active"},f["default"].createElement("div",{className:t+"-item "+t+"-upload-btn",onClick:l,role:"button","aria-label":"Choose and add image"},f["default"].createElement("input",{ref:function(a){n.fileSelectorInput=a},type:"file",accept:"image/jpg,image/jpeg,image/png,image/gif",onChange:function(){n.onFileChange()}})))),k=c?u.concat([r]):u,m=k.length;if(0!==m&&m%4!==0){for(var h=4-m%4,v=[],b=0;b<h;b++)v.push(f["default"].createElement(j,{key:"blank-"+b}));k=k.concat(v)}for(var C=[],x=0;x<k.length/4;x++){var O=k.slice(4*x,4*x+4);C.push(O)}var _=C.map(function(n,a){return f["default"].createElement(y["default"],{key:"flex-"+a},n)});return f["default"].createElement("div",{className:i,style:s},f["default"].createElement("div",{className:t+"-list",role:"group"},f["default"].createElement(g["default"],{size:"md"},_)))},a}(f["default"].Component);a["default"]=x,x.defaultProps={prefixCls:"am-image-picker",files:[],onChange:e,onImageClick:e,onAddImageClick:e,selectable:!0},n.exports=a["default"]},387:function(n,a,t){"use strict";t(6),t(42),t(69),t(170),t(814)},526:function(n,a,t){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6","en-US":"Simple Image Picker"},filename:"components/image-picker/demo/basic.md",id:"components-image-picker-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):a(n,t))}var p=t(1),c=(t(1),t(387),t(386)),l=n(c),u=[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}],i=function(n){function a(){var t,o,p;s(this,a);for(var c=arguments.length,l=Array(c),i=0;i<c;i++)l[i]=arguments[i];return t=o=e(this,n.call.apply(n,[this].concat(l))),o.state={files:u},o.onChange=function(n,a,t){console.log(n,a,t),o.setState({files:n})},p=t,e(o,p)}return o(a,n),a.prototype.render=function(){var n=this.state.files;return p.createElement("div",null,p.createElement(l["default"],{files:n,onChange:this.onChange,onImageClick:function(n,a){return console.log(n,a)},selectable:n.length<5}))},a}(p.Component);return p.createElement(i,null)}}},527:function(n,a,t){n.exports={content:[],meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5","en-US":"Cutom how to choose file"},filename:"components/image-picker/demo/custom.md",id:"components-image-picker-demo-custom"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onAddImageClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onTabChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onAddImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onAddImageClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'
}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):a(n,t))}var p=t(1),c=(t(1),t(387),t(386)),l=n(c),u=[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}],i=function(n){function a(){var t,o,p;s(this,a);for(var c=arguments.length,l=Array(c),i=0;i<c;i++)l[i]=arguments[i];return t=o=e(this,n.call.apply(n,[this].concat(l))),o.state={files:u},o.onChange=function(n,a,t){console.log(n,a,t),o.setState({files:n})},o.onAddImageClick=function(n){n.preventDefault(),o.setState({files:o.state.files.concat({url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"3"})})},o.onTabChange=function(n){console.log(n)},p=t,e(o,p)}return o(a,n),a.prototype.render=function(){var n=this.state.files;return p.createElement("div",null,p.createElement(l["default"],{files:n,onChange:this.onChange,onImageClick:function(n,a){return console.log(n,a)},selectable:n.length<5,onAddImageClick:this.onAddImageClick}))},a}(p.Component);return p.createElement(i,null)}}},718:function(n,a,t){n.exports={basic:t(526),custom:t(527)}},814:function(n,a){}});