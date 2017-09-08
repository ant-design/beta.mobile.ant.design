webpackJsonp([53,155],{654:function(n,s){n.exports={content:["article",["p",["code","antd-mobile"]," \u662f ",["a",{title:null,href:"http://ant.design"},"Ant Design"]," \u7684\u79fb\u52a8\u89c4\u8303\u7684 React \u5b9e\u73b0\uff0c\u670d\u52a1\u4e8e\u8682\u8681\u53ca\u53e3\u7891\u65e0\u7ebf\u4e1a\u52a1\u3002"],["div",{"class":"pic-plus"},["img",{width:"160",src:"https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pic-plus {\n  margin: 40px 0;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 40px;\n}\n"],["h2","\u7279\u6027\u548c\u4f18\u52bf"],["ul",["li",["p","UI \u6837\u5f0f\u9ad8\u5ea6\u53ef\u914d\u7f6e\uff0c\u62d3\u5c55\u6027\u66f4\u5f3a\uff0c\u8f7b\u677e\u9002\u5e94\u5404\u7c7b\u4ea7\u54c1\u98ce\u683c"]],["li",["p","\u57fa\u4e8e React Native \u7684 iOS / Android / Web \u591a\u5e73\u53f0\u652f\u6301\uff0c\u7ec4\u4ef6\u4e30\u5bcc\u3001\u80fd\u5168\u9762\u8986\u76d6\u5404\u7c7b\u573a\u666f"]],["li",["p",'\u63d0\u4f9b "\u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d" / "Web \u9875\u9762\u9ad8\u6e05\u663e\u793a" / "SVG Icon" \u7b49\u4f18\u5316\u65b9\u6848\uff0c\u4e00\u4f53\u5f0f\u5f00\u53d1']],["li",["p","\u4f7f\u7528 TypeScript \u5f00\u53d1\uff0c\u63d0\u4f9b\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\uff0c\u652f\u6301\u7c7b\u578b\u53ca\u5c5e\u6027\u667a\u80fd\u63d0\u793a\uff0c\u65b9\u4fbf\u4e1a\u52a1\u5f00\u53d1"]],["li",["p","\u5168\u9762\u517c\u5bb9 react / preact\uff1b"]]],["h2","\u9002\u7528\u573a\u666f"],["ul",["li",["p","\u9002\u5408\u4e8e\u4e2d\u5927\u578b\u4ea7\u54c1\u5e94\u7528"]],["li",["p","\u9002\u5408\u4e8e\u57fa\u4e8e react / preact / react-native \u7684\u591a\u7ec8\u7aef\u5e94\u7528"]],["li",["p","\u9002\u5408\u4e0d\u540c UI \u98ce\u683c\u7684\u9ad8\u5ea6\u5b9a\u5236\u9700\u6c42\u7684\u5e94\u7528"]]],["h2","\u5feb\u901f\u4e0a\u624b"],["blockquote",["p","\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u63a8\u8350\u5148\u5b66\u4e60 ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," \u548c ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"],"\u3002\u6211\u4eec\u4f7f\u7528\u4e86 ",["code","babel"],"\uff0c\u8bd5\u8bd5\u7528 ",["a",{title:null,href:"http://babeljs.io/blog/2015/06/07/react-on-es6-plus"},"ES2015"]," \u7684\u5199\u6cd5\u6765\u63d0\u5347\u7f16\u7801\u7684\u6109\u60a6\u611f\u3002"],["p","\u786e\u8ba4 ",["a",{title:null,href:"https://nodejs.org/en/"},"Node.js"]," \u5df2\u7ecf\u5347\u7ea7\u5230 v4.x \u6216\u4ee5\u4e0a\u3002"]],["h3","1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee"],["p","\u53ef\u4ee5\u662f\u5df2\u6709\u9879\u76ee\uff0c\u6216\u8005\u662f\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," / create-react(-native)-app \u65b0\u521b\u5efa\u7684\u7a7a\u9879\u76ee\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4ece ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web"},"\u5b98\u65b9\u793a\u4f8b"]," \u811a\u624b\u67b6\u91cc\u62f7\u8d1d\u5e76\u4fee\u6539"],["blockquote",["p","\u53c2\u8003\u66f4\u591a",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples"},"\u5b98\u65b9\u793a\u4f8b\u96c6"],"\n\u6216\u8005\u4f60\u53ef\u4ee5\u5229\u7528 React \u751f\u6001\u5708\u4e2d\u7684 ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"\u5404\u79cd\u811a\u624b\u67b6"]]],["h3","2. \u5b89\u88c5"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd-mobile --save'},["code","$ npm install antd-mobile --save"]],["h3","3. \u4f7f\u7528"],["h3","Web \u4f7f\u7528\u65b9\u5f0f"],["p","\u5165\u53e3\u9875\u9762 (html \u6216 \u6a21\u677f) \u76f8\u5173\u8bbe\u7f6e\uff1a"],["blockquote",["p","\u5f15\u5165 ",["a",{title:null,href:"https://github.com/ftlabs/fastclick"},"FastClick"]," \u5e76\u4e14\u8bbe\u7f6e html ",["code","meta"]," (\u66f4\u591a\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/576"},"#576"],")"],["p","\u5f15\u5165 Promise \u7684 fallback \u652f\u6301 (\u90e8\u5206\u5b89\u5353\u624b\u673a\u4e0d\u652f\u6301 Promise)"]],["pre",{lang:"html",highlighted:'<span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token comment" spellcheck="true">&lt;!-- set `maximum-scale` for some compatibility issues --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1, maximum-scale<span class="token punctuation">=</span>1, minimum-scale<span class="token punctuation">=</span>1, user-scalable<span class="token punctuation">=</span>no<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n    if (\'addEventListener\' in document) {\n      document.addEventListener(\'DOMContentLoaded\', function() {\n        FastClick.attach(document.body);\n      }, false);\n    }\n    if(!window.Promise) {\n      document.writeln(\'&lt;script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"\'+\'>\'+\'&lt;\'+\'/\'+\'script>\');\n    }\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>'},["code","<!DOCTYPE html>\n<html>\n<head>\n  <!-- set `maximum-scale` for some compatibility issues -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no\" />\n  <script src=\"https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js\"></script>\n  <script>\n    if ('addEventListener' in document) {\n      document.addEventListener('DOMContentLoaded', function() {\n        FastClick.attach(document.body);\n      }, false);\n    }\n    if(!window.Promise) {\n      document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n    }\n  </script>\n</head>\n<body></body>\n</html>"]],["p","\u7ec4\u4ef6\u4f7f\u7528\u5b9e\u4f8b\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"]],["p","\u5f15\u5165\u6837\u5f0f\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'antd-mobile/dist/antd-mobile.css\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// or \'antd-mobile/dist/antd-mobile.less\'</span>'},["code","import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'"]],["h4","\u6309\u9700\u52a0\u8f7d"],["p","\u4e0b\u9762\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u53ea\u52a0\u8f7d\u7528\u5230\u7684\u7ec4\u4ef6\u3002"],["ul",["li",["p","\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"\uff08\u63a8\u8350\uff09\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6\n  ]\n}']],["p"," \u7136\u540e\u53ea\u9700\u4ece antd-mobile \u5f15\u5165\u6a21\u5757\u5373\u53ef\uff0c\u65e0\u9700\u5355\u72ec\u5f15\u5165\u6837\u5f0f\u3002\u7b49\u540c\u4e8e\u4e0b\u9762\u624b\u52a8\u5f15\u5165\u7684\u65b9\u5f0f\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>'},["code","// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS\nimport { DatePicker } from 'antd-mobile';"]]],["li",["p","\u624b\u52a8\u5f15\u5165"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/date-picker\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// \u52a0\u8f7d JS</span>\n<span class="token keyword">import</span> <span class="token string">\'antd-mobile/lib/date-picker/style/css\'</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// \u52a0\u8f7d CSS</span>\n<span class="token comment" spellcheck="true">// import \'antd-mobile/lib/date-picker/style\';         // \u52a0\u8f7d LESS</span>'},["code","import DatePicker from 'antd-mobile/lib/date-picker';  // \u52a0\u8f7d JS\nimport 'antd-mobile/lib/date-picker/style/css';        // \u52a0\u8f7d CSS\n// import 'antd-mobile/lib/date-picker/style';         // \u52a0\u8f7d LESS"]]]],["h4","\u66f4\u591a\u589e\u5f3a (\u975e\u5fc5\u987b):"],["blockquote",["p","\u5f15\u5165\u300e\u9ad8\u6e05\u65b9\u6848\u300f\u8bbe\u7f6e\uff1a\u5177\u4f53\u65b9\u6cd5\u89c1 wiki \u91cc ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"},"antd-mobile-0.8-\u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]],["p","\u5982\u4f55\u81ea\u5b9a\u4e49\u4e3b\u9898\uff1f",["a",{title:null,href:"https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.zh-CN.md"},"\u89c1\u6b64\u6587\u6863"],"\uff0c\n\u57fa\u4e8e antd-mobile \u7684\u81ea\u5b9a\u4e49 UI \u5e93\uff1a",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui"},"web-custom-ui"]," / ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro"},"web-custom-ui-pro"]]],["h3","React-Native \u4f7f\u7528\u65b9\u5f0f"],["blockquote",["p","\u6ce8\uff1a",["code","Menu"],"/",["code","NavBar"]," \u7ec4\u4ef6\u6682\u65e0 React Native \u7248\u672c"]],["p","\u7ec4\u4ef6\u4f7f\u7528\u5b9e\u4f8b\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">HelloWorldApp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nAppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token string">\'HelloWorldApp\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> HelloWorldApp<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Button } from 'antd-mobile';\n\nclass HelloWorldApp extends Component {\n  render() {\n    return <Button>Start</Button>;\n  }\n}\n\nAppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);"]],["h4","\u6309\u9700\u52a0\u8f7d"],["p","\u4e0b\u9762\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u53ea\u52a0\u8f7d\u7528\u5230\u7684\u7ec4\u4ef6\u3002"],["ul",["li",["p","\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"\uff08\u63a8\u8350\uff09\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// \u4e0e Web \u5e73\u53f0\u7684\u533a\u522b\u662f\u4e0d\u9700\u8981\u8bbe\u7f6e style</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { libraryName: "antd-mobile" }] // \u4e0e Web \u5e73\u53f0\u7684\u533a\u522b\u662f\u4e0d\u9700\u8981\u8bbe\u7f6e style\n  ]\n}']],["p"," \u7136\u540e\u53ea\u9700\u4ece antd-mobile \u5f15\u5165\u6a21\u5757\u5373\u53ef\uff0c\u65e0\u9700\u5355\u72ec\u5f15\u5165\u6837\u5f0f\u3002\u7b49\u540c\u4e8e\u4e0b\u9762\u624b\u52a8\u5f15\u5165\u7684\u65b9\u5f0f\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>'},["code","import { DatePicker } from 'antd-mobile';"]]],["li",["p","\u624b\u52a8\u5f15\u5165"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/date-picker\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// \u52a0\u8f7d JS</span>'},["code","import DatePicker from 'antd-mobile/lib/date-picker';  // \u52a0\u8f7d JS"]]]],["h4","\u66f4\u591a\u589e\u5f3a (\u975e\u5fc5\u987b):"],["blockquote",["p",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui"},"\u81ea\u5b9a\u4e49\u4e3b\u9898"]]],["h2","\u7248\u672c"],["ul",["li",["p","\u7a33\u5b9a\u7248\uff1a",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","\u5f00\u53d1\u7248\uff1a",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"https://cnpmjs.org/badge/v/antd-mobile.svg?&tag=next&subject=npm",alt:"npm package"}]]]]],["h2","\u4f53\u79ef"],["ul",["li",["p","\u6309\u9700\u52a0\u8f7d\uff1a\u53ea\u9700\u5f15\u5165\u4e1a\u52a1\u4e2d\u9700\u8981\u7684\u7ec4\u4ef6\u5373\u53ef\uff0c\u672a import \u8fdb\u6765\u7684\u7ec4\u4ef6\u4e0d\u4f1a\u6253\u5305\u8fdb\u6765\u3002"]],["li",["p","`./dist/antd-mobile.min.js`\u7684\u6587\u4ef6",["a",{href:"https://ant-design.github.io/ant-design-analysis/",target:"_blank"},"\u5927\u5c0f\u53ca\u4f9d\u8d56\u5206\u6790"]]]],["h2","\u6d4f\u89c8\u5668\u652f\u6301"],["ul",["li",["p",["code","iOS"]]],["li",["p",["code","Android 4.0+"]]]],["h2","\u94fe\u63a5"],["ul",["li",["p",["a",{title:null,href:"https://mobile.ant.design/"},"\u9996\u9875"]]],["li",["p",["a",{title:null,href:"http://github.com/ant-design/ant-design-mobile/blob/master/development.zh-CN.md"},"\u5f00\u53d1\u8005\u6587\u6863"]]],["li",["p",["a",{title:null,href:"http://github.com/react-component"},"React \u6a21\u5757"]]]],["h2","\u8c01\u5728\u4f7f\u7528"],["ul",["li",["p",["a",{title:null,href:"http://www.antgroup.com/"},"\u8682\u8681\u91d1\u670d"]]],["li",["p",["a",{title:null,href:"http://www.alibaba.com/"},"\u963f\u91cc\u5df4\u5df4"]]],["li",["p",["a",{title:null,href:"http://www.koubei.com/"},"\u53e3\u7891"]]]],["h2","\u5982\u4f55\u8d21\u732e"],["p","\u5728\u4efb\u4f55\u5f62\u5f0f\u7684\u53c2\u4e0e\u524d\uff0c\u8bf7\u5148\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md"},"\u8d21\u732e\u8005\u6587\u6863"],"\u3002\u6709\u4efb\u4f55\u5efa\u8bae\u6216\u610f\u89c1\u60a8\u53ef\u4ee5 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pulls"},"Pull Request"],"\uff0c\u7ed9\u6211\u4eec ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/new"},"\u62a5\u544a Bug"],"\u3002"],["blockquote",["p","\u5f3a\u70c8\u63a8\u8350\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"},"\u300a\u63d0\u95ee\u7684\u667a\u6167\u300b"],"\u3001",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"\u300a\u5982\u4f55\u5411\u5f00\u6e90\u793e\u533a\u63d0\u95ee\u9898\u300b"]," \u548c ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"},"\u300a\u5982\u4f55\u6709\u6548\u5730\u62a5\u544a Bug\u300b"],"\uff0c\u66f4\u597d\u7684\u95ee\u9898\u66f4\u5bb9\u6613\u83b7\u5f97\u5e2e\u52a9\u3002"]],["h2","\u793e\u533a\u4e92\u52a9"],["p","\u5982\u679c\u60a8\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u78b0\u5230\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u51e0\u4e2a\u9014\u5f84\u5bfb\u6c42\u5e2e\u52a9\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u9f13\u52b1\u8d44\u6df1\u7528\u6237\u901a\u8fc7\u4e0b\u9762\u7684\u9014\u5f84\u7ed9\u65b0\u4eba\u63d0\u4f9b\u5e2e\u52a9\u3002"],["p","\u901a\u8fc7 Stack Overflow \u6216\u8005 Segment Fault \u63d0\u95ee\u65f6\uff0c\u5efa\u8bae\u52a0\u4e0a ",["code","antd"],"/",["code","antd-mobile"]," \u6807\u7b7e\u3002"],["ol",["li",["p",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"Stack Overflow"],"\uff08\u63a8\u8350\uff09"]],["li",["p",["a",{title:null,href:"https://segmentfault.com/t/antd"},"Segment Fault"]]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"},["img",{title:null,src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/ant-design/ant-design"}]]]]]],meta:{order:0,english:"Ant Design Mobile of React",filename:"docs/react/introduce.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7279\u6027\u548c\u4f18\u52bf",title:"\u7279\u6027\u548c\u4f18\u52bf"},"\u7279\u6027\u548c\u4f18\u52bf"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u9002\u7528\u573a\u666f",title:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5feb\u901f\u4e0a\u624b",title:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7248\u672c",title:"\u7248\u672c"},"\u7248\u672c"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f53\u79ef",title:"\u4f53\u79ef"},"\u4f53\u79ef"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6d4f\u89c8\u5668\u652f\u6301",title:"\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u94fe\u63a5",title:"\u94fe\u63a5"},"\u94fe\u63a5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8c01\u5728\u4f7f\u7528",title:"\u8c01\u5728\u4f7f\u7528"},"\u8c01\u5728\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5982\u4f55\u8d21\u732e",title:"\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793e\u533a\u4e92\u52a9",title:"\u793e\u533a\u4e92\u52a9"},"\u793e\u533a\u4e92\u52a9"]]]}}});