webpackJsonp([46,159],{482:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/action-sheet/demo/basic.md",id:"components-action-sheet-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ActionSheet<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// fix touch to scroll background page on iOS</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/307</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/163</span>\n<span class="token keyword">const</span> isIPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">\'\\\\biPhone\\\\b|\\\\biPod\\\\b\'</span><span class="token punctuation">,</span> <span class="token string">\'i\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> wrapProps<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>isIPhone<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  wrapProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    onTouchStart<span class="token punctuation">:</span> e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> customIcon <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> iconList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png\'</span><span class="token punctuation">,</span> <span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u53d1\u9001\u7ed9\u670b\u53cb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png\'</span><span class="token punctuation">,</span> <span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u65b0\u6d6a\u5fae\u535a\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png\'</span><span class="token punctuation">,</span> <span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u751f\u6d3b\u5708\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png\'</span><span class="token punctuation">,</span> <span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5fae\u4fe1\u597d\u53cb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png\'</span><span class="token punctuation">,</span> <span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'QQ\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/VgOeEwrQxpfxxoxDhhRu.svg\'</span><span class="token punctuation">,</span> <span class="token string">\'icon\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5237\u65b0\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/QcRdiavUOhCmQjvQHVqt.svg\'</span><span class="token punctuation">,</span> <span class="token string">\'icon\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u94fe\u63a5\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token function">customIcon</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/cVeaIFCKBHUjLROxfysg.svg\'</span><span class="token punctuation">,</span> <span class="token string">\'icon\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u6295\u8bc9\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      clicked<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n      clicked1<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n      clicked2<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showActionSheet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> BUTTONS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Operation1\'</span><span class="token punctuation">,</span> <span class="token string">\'Operation2\'</span><span class="token punctuation">,</span> <span class="token string">\'Operation2\'</span><span class="token punctuation">,</span> <span class="token string">\'Delete\'</span><span class="token punctuation">,</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">,</span>\n      cancelButtonIndex<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      destructiveButtonIndex<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'title\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'I am description, description, description\'</span><span class="token punctuation">,</span>\n      maskClosable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'logId\'</span><span class="token punctuation">,</span>\n      wrapProps<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showShareActionSheet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> icons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>iconList<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    icons<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showShareActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> icons<span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'title\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'I am description, description, description\'</span><span class="token punctuation">,</span>\n      className<span class="token punctuation">:</span> <span class="token string">\'my-action-sheet\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked1<span class="token punctuation">:</span> buttonIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> icons<span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token punctuation">:</span> <span class="token string">\'cancel\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment" spellcheck="true">// also support Promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'closed after 1000ms\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showShareActionSheetMulpitleLine <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> icons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">...</span>iconList<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>iconList<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iconList<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iconList<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showShareActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> icons<span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'title\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'I am description, description, description\'</span><span class="token punctuation">,</span>\n      className<span class="token punctuation">:</span> <span class="token string">\'my-action-sheet\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked2<span class="token punctuation">:</span> buttonIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> icons<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token punctuation">:</span> <span class="token string">\'cancel\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>actionSheetContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'7.5px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showActionSheet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>showActionSheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'7.5px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showShareActionSheet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>showShareActionSheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'7.5px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showShareActionSheetMulpitleLine<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>showShareActionSheetMulpitleLine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".actionSheetContainer {\n  margin: 0 15px;\n}\n\n.my-action-sheet .am-action-sheet-share-list-item-icon .img {\n  width: 36px;\n}\n.my-action-sheet .am-action-sheet-share-list-item-icon .icon {\n  width: 22px;\n  height: 22px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.actionSheetContainer</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.my-action-sheet</span> <span class="token class">.am-action-sheet-share-list-item-icon</span> <span class="token class">.img</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">36</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-action-sheet</span> <span class="token class">.am-action-sheet-share-list-item-icon</span> <span class="token class">.icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">22</span>px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">22</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},662:function(n,s,a){n.exports={basic:a(482)}}});