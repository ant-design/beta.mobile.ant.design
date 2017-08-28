webpackJsonp([44,158],{521:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/calendar/demo/basic.md",id:"components-calendar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Calendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/calendar/locale/en_US\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/calendar/locale/zh_CN\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> extra <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'2017/07/15\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> info<span class="token punctuation">:</span> <span class="token string">\'Disable\'</span><span class="token punctuation">,</span> disable<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nextra<span class="token punctuation">[</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token punctuation">:</span> <span class="token string">\'Disable\'</span><span class="token punctuation">,</span> disable<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nextra<span class="token punctuation">[</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token punctuation">:</span> <span class="token string">\'Disable\'</span><span class="token punctuation">,</span> disable<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nextra<span class="token punctuation">[</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token punctuation">:</span> <span class="token string">\'Disable\'</span><span class="token punctuation">,</span> disable<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nextra<span class="token punctuation">[</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token punctuation">:</span> <span class="token string">\'Disable\'</span><span class="token punctuation">,</span> disable<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nObject<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>extra<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> info <span class="token operator">=</span> extra<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token operator">+</span>date<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>extra<span class="token punctuation">[</span><span class="token operator">+</span>date<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    extra<span class="token punctuation">[</span><span class="token operator">+</span>date<span class="token punctuation">]</span> <span class="token operator">=</span> info<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  originbodyScrollY <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflowY<span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      en<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      show<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      config<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">renderBtn</span><span class="token punctuation">(</span>zh<span class="token punctuation">,</span> en<span class="token punctuation">,</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    config<span class="token punctuation">.</span>locale <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>en <span class="token operator">?</span> enUS <span class="token punctuation">:</span> zhCN<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflowY <span class="token operator">=</span> <span class="token string">\'hidden\'</span><span class="token punctuation">;</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            show<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            config<span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>en <span class="token operator">?</span> en <span class="token punctuation">:</span> zh<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  changeLanguage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      en<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>en<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onSelectHasDisableDate <span class="token operator">=</span> <span class="token punctuation">(</span>dates<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">\'onSelectHasDisableDate\'</span><span class="token punctuation">,</span> dates<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onConfirm <span class="token operator">=</span> <span class="token punctuation">(</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflowY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>originbodyScrollY<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      show<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      startTime<span class="token punctuation">,</span>\n      endTime<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onCancel <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflowY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>originbodyScrollY<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      show<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      startTime<span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n      endTime<span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  getDateExtra <span class="token operator">=</span> date <span class="token operator">=</span><span class="token operator">></span> extra<span class="token punctuation">[</span><span class="token operator">+</span>date<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>calendar-list<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>en <span class="token operator">?</span> <span class="token string">\'Chinese\'</span> <span class="token punctuation">:</span> <span class="token string">\'\u4e2d\u6587\'</span><span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>en<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeLanguage<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u9009\u62e9\u65e5\u671f\u533a\u95f4\'</span><span class="token punctuation">,</span> <span class="token string">\'Select Date Range\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u9009\u62e9\u65e5\u671f\u65f6\u95f4\u533a\u95f4\'</span><span class="token punctuation">,</span> <span class="token string">\'Select DateTime Range\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> pickTime<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u9009\u62e9\u65e5\u671f\'</span><span class="token punctuation">,</span> <span class="token string">\'Select Date\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'one\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u9009\u62e9\u65e5\u671f\u65f6\u95f4\'</span><span class="token punctuation">,</span> <span class="token string">\'Select DateTime\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'one\'</span><span class="token punctuation">,</span> pickTime<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u9009\u62e9\u65e5\u671f\u533a\u95f4(\u5feb\u6377)\'</span><span class="token punctuation">,</span> <span class="token string">\'Select Date Range (Shortcut)\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> showShortcut<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u9009\u62e9\u65e5\u671f\u65f6\u95f4\u533a\u95f4(\u5feb\u6377)\'</span><span class="token punctuation">,</span> <span class="token string">\'Select DateTime Range (Shortcut)\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> pickTime<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> showShortcut<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u4e0d\u4f7f\u7528ZScroller(\u65e0\u6cd5\u5411\u524d\u6eda\u52a8)\'</span><span class="token punctuation">,</span> <span class="token string">\'no use zscorller\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> infinite<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderBtn</span><span class="token punctuation">(</span><span class="token string">\'\u6c34\u5e73\u8fdb\u5165\'</span><span class="token punctuation">,</span> <span class="token string">\'horizontal enter\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> enterDirection<span class="token punctuation">:</span> <span class="token string">\'horizontal\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>startTime <span class="token operator">&amp;&amp;</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>Time1<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>startTime<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n          <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>endTime <span class="token operator">&amp;&amp;</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>Time2<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>endTime<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Calendar\n          <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>config<span class="token punctuation">}</span>\n          visible<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show<span class="token punctuation">}</span>\n          onCancel<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onCancel<span class="token punctuation">}</span>\n          onConfirm<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onConfirm<span class="token punctuation">}</span>\n          onSelectHasDisableDate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelectHasDisableDate<span class="token punctuation">}</span>\n          getDateExtra<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getDateExtra<span class="token punctuation">}</span>\n          minDate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">5184000000</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          maxDate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">31536000000</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'
}],style:".calendar-list .right {\n    float: right;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.calendar-list</span> <span class="token class">.right</span> </span><span class="token punctuation">{</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},708:function(n,s,a){n.exports={basic:a(521)}}});