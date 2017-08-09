webpackJsonp([39,144],{6:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(19)},19:function(n,a){},21:function(n,a,s){"use strict";s(6),s(23)},23:function(n,a){},564:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"en-US":"Notice Bar","zh-CN":"\u901a\u544a\u680f"},filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">marqueeProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> loop<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.15rem\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Remove the <span class="token keyword">default</span> icon<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xxs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Customized icon<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(16),s(27)),e=n(t),o=(s(676),s(675)),p=n(o),c=(s(21),s(30)),l=n(c),i=function(){return a.createElement("div",null,a.createElement(l["default"],{size:"lg"}),a.createElement(p["default"],{marqueeProps:{loop:!0,style:{padding:"0 0.15rem"}}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),a.createElement(l["default"],{size:"lg"}),a.createElement(p["default"],{mode:"link",onClick:function(){return alert("1")}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),a.createElement(l["default"],{size:"lg"}),a.createElement(p["default"],{mode:"closable",icon:null},"Remove the default icon."),a.createElement(l["default"],{size:"lg"}),a.createElement(p["default"],{mode:"closable",icon:a.createElement(e["default"],{type:"check-circle-o",size:"xxs"})},"Customized icon."))};return a.createElement(i,null)}}},674:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(2),o=t(e),p="/Users/hua/inner/ant-design-mobile/components/notice-bar/Marquee.tsx",c=s(1),l=t(c),i=s(22),u=t(i),r=s(9),k=t(r),d=(0,u["default"])({displayName:"Marquee",getDefaultProps:function(){return{text:"",loop:!1,leading:500,trailing:800,fps:40,className:""}},getInitialState:function(){return{animatedWidth:0,overflowWidth:0}},componentDidMount:function(){this._measureText(),this._startAnimation()},componentDidUpdate:function(){this._measureText(),this._marqueeTimer||this._startAnimation()},componentWillUnmount:function(){clearTimeout(this._marqueeTimer)},render:function(){var n=this.props,a=n.prefixCls,s=n.className,t=n.text,e=(0,o["default"])({position:"relative",right:this.state.animatedWidth,whiteSpace:"nowrap",display:"inline-block"},this.props.style);return l["default"].createElement("div",{className:a+"-marquee-wrap "+s,style:{overflow:"hidden"},role:"marquee",__source:{fileName:p,lineNumber:42}},l["default"].createElement("div",{ref:"text",className:a+"-marquee",style:e,__source:{fileName:p,lineNumber:43}},t," "))},_startAnimation:function(){var n=this;clearTimeout(this._marqueeTimer);var a=1/this.props.fps*1e3,s=0===this.state.animatedWidth,t=s?this.props.leading:a,e=function o(){var s=n.state.overflowWidth,t=n.state.animatedWidth+1,e=t>s;if(e){if(!n.props.loop)return;t=0}e&&n.props.trailing?n._marqueeTimer=setTimeout(function(){n.setState({animatedWidth:t}),n._marqueeTimer=setTimeout(o,a)},n.props.trailing):(n.setState({animatedWidth:t}),n._marqueeTimer=setTimeout(o,a))};0!==this.state.overflowWidth&&(this._marqueeTimer=setTimeout(e,t))},_measureText:function(){var n=k["default"].findDOMNode(this),a=k["default"].findDOMNode(this.refs.text);if(n&&a){var s=n.offsetWidth,t=a.offsetWidth,e=t-s;e!==this.state.overflowWidth&&this.setState({overflowWidth:e})}}});a["default"]=d,n.exports=a["default"]},675:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),o=t(e),p=s(7),c=t(p),l=s(3),i=t(l),u=s(5),r=t(u),k=s(4),d=t(k),m="/Users/hua/inner/ant-design-mobile/components/notice-bar/index.tsx",f=s(1),g=t(f),h=s(8),v=t(h),N=s(27),b=t(N),_=s(674),y=t(_),x=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},w=function(n){function a(s){(0,i["default"])(this,a);var t=(0,r["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.mode,s=n.onClick;s&&s(),"closable"===a&&t.setState({show:!1})},t.state={show:!0},t}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.mode,t=a.icon,e=a.onClick,p=a.children,l=a.className,i=a.prefixCls,u=a.marqueeProps,r=x(a,["mode","icon","onClick","children","className","prefixCls","marqueeProps"]),k={},d=null;"closable"===s?d=g["default"].createElement("div",{className:i+"-operation",onClick:this.onClick,role:"button","aria-label":"close",__source:{fileName:m,lineNumber:37}},g["default"].createElement(b["default"],{type:"cross",size:"md",__source:{fileName:m,lineNumber:38}})):("link"===s&&(d=g["default"].createElement("div",{className:i+"-operation",role:"button","aria-label":"go to detail",__source:{fileName:m,lineNumber:43}},g["default"].createElement(b["default"],{type:"right",size:"md",__source:{fileName:m,lineNumber:44}}))),k.onClick=e);var f=(0,v["default"])((n={},(0,c["default"])(n,i,!0),(0,c["default"])(n,l,!!l),n)),h=(0,o["default"])({loop:!1,leading:500,trailing:800,fps:40,style:{}},u);return this.state.show?g["default"].createElement("div",(0,o["default"])({className:f},r,k,{role:"alert",__source:{fileName:m,lineNumber:54}}),t?g["default"].createElement("div",{className:i+"-icon","aria-hidden":"true",__source:{fileName:m,lineNumber:55}}," ",t," "):null,g["default"].createElement("div",{className:i+"-content",__source:{fileName:m,lineNumber:56}},g["default"].createElement(y["default"],(0,o["default"])({prefixCls:i,text:p},h,{__source:{fileName:m,lineNumber:57}}))),d):null},a}(g["default"].Component);a["default"]=w,w.defaultProps={prefixCls:"am-notice-bar",mode:"",icon:g["default"].createElement(b["default"],{type:s(966),size:"xxs",__source:{fileName:m,lineNumber:66}}),onClick:function(){}},n.exports=a["default"]},676:function(n,a,s){"use strict";s(6),s(16),s(819)},733:function(n,a,s){n.exports={basic:s(564)}},819:function(n,a){},966:function(n,a,s){var t=s(20),e='<symbol viewBox="0 0 38 33" id="trips" ><title>trips</title><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.005-.042-.005H3.562c-.734 0-.903-.203-.903-.928V10.085c0-.49.058-.8.66-.8h5.782c.693 0 1.758-.28 6.4-3.628.828-.597 1.637-1.197 2.336-1.723V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.486-1.1 1.085V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.066-.42-.192-.625-.192-.612 0-1.108.488-1.108 1.09 0 .404.22.764.55.952 2.128 1.19 3.565 3.442 3.565 6.025 0 2.627-1.486 4.913-3.677 6.087-.318.19-.53.54-.53.934 0 .602.496 1.09 1.107 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><g><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .433.26.78.627.977 4.043 2.323 6.762 6.636 6.762 11.578 0 4.938-2.716 9.248-6.755 11.572-.354.19-.66.55-.66.993 0 .6.494 1.084 1.102 1.084.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></g></symbol>';n.exports=t.add(e,"trips")}});