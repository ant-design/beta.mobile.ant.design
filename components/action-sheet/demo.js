webpackJsonp([46,159],{495:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/action-sheet/demo/basic.md",id:"components-action-sheet-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ActionSheet<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// fix touch to scroll background page on iOS</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/307</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/163</span>\n<span class="token keyword">const</span> isIPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">\'\\\\biPhone\\\\b|\\\\biPod\\\\b\'</span><span class="token punctuation">,</span> <span class="token string">\'i\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> wrapProps<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>isIPhone<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  wrapProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    onTouchStart<span class="token punctuation">:</span> e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      clicked<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n      clicked1<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n      clicked2<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'OpHiXAcYzmPQHcdlLFrc\'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u53d1\u9001\u7ed9\u670b\u53cb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'wvEzCMiDZjthhAOcwTOu\'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u65b0\u6d6a\u5fae\u535a\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'cTTayShKtEIdQVEMuiWt\'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u751f\u6d3b\u5708\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'umnHwvEgSyQtXlZjNJTt\'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5fae\u4fe1\u597d\u53cb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'SxpunpETIwdxNjcJamwB\'</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'QQ\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>obj <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`https://gw.alipayobjects.com/zos/rmsportal/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> obj<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  showActionSheet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> BUTTONS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Operation1\'</span><span class="token punctuation">,</span> <span class="token string">\'Operation2\'</span><span class="token punctuation">,</span> <span class="token string">\'Operation2\'</span><span class="token punctuation">,</span> <span class="token string">\'Delete\'</span><span class="token punctuation">,</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">,</span>\n      cancelButtonIndex<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      destructiveButtonIndex<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'title\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'I am description, description, description\'</span><span class="token punctuation">,</span>\n      maskClosable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'logId\'</span><span class="token punctuation">,</span>\n      wrapProps<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  showShareActionSheet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showShareActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'title\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'I am description, description, description\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked1<span class="token punctuation">:</span> buttonIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token punctuation">:</span> <span class="token string">\'cancel\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment" spellcheck="true">// also support Promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'closed after 1000ms\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  showShareActionSheetMulpitleLine <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showShareActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'I am description, description, description\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked2<span class="token punctuation">:</span> buttonIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> data<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token punctuation">:</span> <span class="token string">\'cancel\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showActionSheet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>showActionSheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showShareActionSheet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>showShareActionSheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showShareActionSheetMulpitleLine<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>showShareActionSheetMulpitleLine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},678:function(n,s,a){n.exports={basic:a(495)}}});