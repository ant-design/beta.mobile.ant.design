webpackJsonp([49,160],{658:function(e,n){e.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," (Web project) / ",["a",{title:null,href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"],"(React Native project) is one of best React application development tool, we are going to use ",["code","antd-mobile"]," within it\uff1b"],["h2","Install and Initialization"],["p","We need to install the appropriate tools first, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"]," too."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g yarn\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app  <span class="token comment" spellcheck="true"># web project</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-native-app  <span class="token comment" spellcheck="true"># react-native project</span>'},["code","$ npm install -g yarn\n$ npm install -g create-react-app  # web project\n$ npm install -g create-react-native-app  # react-native project"]],["p","Then we create a new project named antm-demo."],["pre",{lang:"bash",highlighted:'$ create-react-app antm-demo  <span class="token comment" spellcheck="true"># web project</span>\n$ create-react-native-app antm-demo  <span class="token comment" spellcheck="true"># react-native project</span>'},["code","$ create-react-app antm-demo  # web project\n$ create-react-native-app antm-demo  # react-native project"]],["p","The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it."],["p","Then we go inside antm-demo and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antm-demo\n$ yarn start'},["code","$ cd antm-demo\n$ yarn start"]],["ul",["li",["p",["code","Web project"],": Open browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],', it renders a header saying "Welcome to React" on the page.']],["li",["p",["code","React Native project"],": Run ",["code","npm run ios"]," in terminal, it should be ok if you can see the page content in simulator."]]],["h2","Import antd-mobile"],["p","First we install antd-mobile and ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," from yarn or npm."],["pre",{lang:"bash",highlighted:"$ yarn add antd-mobile\n$ yarn add babel-plugin-import --dev"},["code","$ yarn add antd-mobile\n$ yarn add babel-plugin-import --dev"]],["h3","Web project"],["blockquote",["p","The source code of this sample can be found at ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app"},"antd-mobile-sample/create-react-app"]]],["ol",["li",["p","generate the customized configration boilerplate"],["pre",{lang:"bash",highlighted:'yarn run <span class="token function">eject</span>'},["code","yarn run eject"]]],["li",["p","install devDependencies"],["pre",{lang:"bash",highlighted:'yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 <span class="token function">less</span> less-loader postcss-pxtorem@^3.3.1'},["code","yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem@^3.3.1"]]],["li",["p","Modify ",["code","config/webpack.config.dev.js"]]]],["pre",{lang:"diff",highlighted:'<span class="token coord">--- a/config/webpack.config.dev.js</span>\n<span class="token coord">+++ b/config/webpack.config.dev.js</span>\n<span class="token coord">@@ -1,6 +1,7 @@</span>\n \'use strict\';\n\n const autoprefixer = require(\'autoprefixer\');\n<span class="token inserted">+const pxtorem = require(\'postcss-pxtorem\');</span>\n const path = require(\'path\');\n const webpack = require(\'webpack\');\n const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n@@ -88,7 +89,7 @@ module.exports = {\n     // for React Native Web.\n     extensions: [\'.web.js\', \'.js\', \'.json\', \'.web.jsx\', \'.jsx\'],\n     alias: {\n<span class="token deleted">-</span>\n<span class="token inserted">+</span>\n       // Support React Native Web\n       // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/\n       \'react-native\': \'react-native-web\',\n@@ -118,7 +119,7 @@ module.exports = {\n           {\n             options: {\n               formatter: eslintFormatter,\n<span class="token deleted">-</span>\n<span class="token inserted">+</span>\n             },\n             loader: require.resolve(\'eslint-loader\'),\n           },\n@@ -144,6 +145,8 @@ module.exports = {\n           /\\.gif$/,\n           /\\.jpe?g$/,\n           /\\.png$/,\n<span class="token inserted">+          /\\.less$/,</span>\n<span class="token inserted">+          /\\.svg$/,</span>\n         ],\n         loader: require.resolve(\'file-loader\'),\n         options: {\n@@ -167,13 +170,48 @@ module.exports = {\n         include: paths.appSrc,\n         loader: require.resolve(\'babel-loader\'),\n         options: {\n<span class="token deleted">-</span>\n<span class="token inserted">+          plugins: [</span>\n<span class="token inserted">+            [\'import\', { libraryName: \'antd-mobile\', style: true }],</span>\n<span class="token inserted">+          ],</span>\n           // This is a feature of `babel-loader` for webpack (not Babel itself).\n           // It enables caching results in ./node_modules/.cache/babel-loader/\n           // directory for faster rebuilds.\n           cacheDirectory: true,\n         },\n       },\n<span class="token inserted">+      {</span>\n<span class="token inserted">+        test: /\\.(svg)$/i,</span>\n<span class="token inserted">+        loader: \'svg-sprite-loader\',</span>\n<span class="token inserted">+        include: [</span>\n<span class="token inserted">+          require.resolve(\'antd-mobile\').replace(/warn\\.js$/, \'\'),  // 1. svg files of antd-mobile</span>\n<span class="token inserted">+          // path.resolve(__dirname, \'src/my-project-svg-foler\'),  // folder of svg files in your project</span>\n<span class="token inserted">+        ]</span>\n<span class="token inserted">+      },</span>\n<span class="token inserted">+      {</span>\n<span class="token inserted">+        test: /\\.less$/,</span>\n<span class="token inserted">+        use: [</span>\n<span class="token inserted">+          require.resolve(\'style-loader\'),</span>\n<span class="token inserted">+          require.resolve(\'css-loader\'),</span>\n<span class="token inserted">+          {</span>\n<span class="token inserted">+            loader: require.resolve(\'postcss-loader\'),</span>\n<span class="token inserted">+            options: {</span>\n<span class="token inserted">+              ident: \'postcss\', // https://webpack.js.org/guides/migrating/#complex-options</span>\n<span class="token inserted">+              plugins: () => [</span>\n<span class="token inserted">+                autoprefixer({</span>\n<span class="token inserted">+                  browsers: [\'last 2 versions\', \'Firefox ESR\', \'> 1%\', \'ie >= 8\', \'iOS >= 8\', \'Android >= 4\'],</span>\n<span class="token inserted">+                }),</span>\n<span class="token inserted">+                pxtorem({ rootValue: 100, propWhiteList: [] })</span>\n<span class="token inserted">+              ],</span>\n<span class="token inserted">+            },</span>\n<span class="token inserted">+          },</span>\n<span class="token inserted">+          {</span>\n<span class="token inserted">+            loader: require.resolve(\'less-loader\'),</span>\n<span class="token inserted">+            options: {</span>\n<span class="token inserted">+              modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+            },</span>\n<span class="token inserted">+          },</span>\n<span class="token inserted">+        ],</span>\n<span class="token inserted">+      },</span>\n       // "postcss" loader applies autoprefixer to our CSS.\n       // "css" loader resolves paths in CSS and adds assets as dependencies.\n       // "style" loader turns CSS into JS modules that inject &lt;style> tags.'},["code","--- a/config/webpack.config.dev.js\n+++ b/config/webpack.config.dev.js\n@@ -1,6 +1,7 @@\n 'use strict';\n\n const autoprefixer = require('autoprefixer');\n+const pxtorem = require('postcss-pxtorem');\n const path = require('path');\n const webpack = require('webpack');\n const HtmlWebpackPlugin = require('html-webpack-plugin');\n@@ -88,7 +89,7 @@ module.exports = {\n     // for React Native Web.\n     extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],\n     alias: {\n-\n+\n       // Support React Native Web\n       // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/\n       'react-native': 'react-native-web',\n@@ -118,7 +119,7 @@ module.exports = {\n           {\n             options: {\n               formatter: eslintFormatter,\n-\n+\n             },\n             loader: require.resolve('eslint-loader'),\n           },\n@@ -144,6 +145,8 @@ module.exports = {\n           /\\.gif$/,\n           /\\.jpe?g$/,\n           /\\.png$/,\n+          /\\.less$/,\n+          /\\.svg$/,\n         ],\n         loader: require.resolve('file-loader'),\n         options: {\n@@ -167,13 +170,48 @@ module.exports = {\n         include: paths.appSrc,\n         loader: require.resolve('babel-loader'),\n         options: {\n-\n+          plugins: [\n+            ['import', { libraryName: 'antd-mobile', style: true }],\n+          ],\n           // This is a feature of `babel-loader` for webpack (not Babel itself).\n           // It enables caching results in ./node_modules/.cache/babel-loader/\n           // directory for faster rebuilds.\n           cacheDirectory: true,\n         },\n       },\n+      {\n+        test: /\\.(svg)$/i,\n+        loader: 'svg-sprite-loader',\n+        include: [\n+          require.resolve('antd-mobile').replace(/warn\\.js$/, ''),  // 1. svg files of antd-mobile\n+          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project\n+        ]\n+      },\n+      {\n+        test: /\\.less$/,\n+        use: [\n+          require.resolve('style-loader'),\n+          require.resolve('css-loader'),\n+          {\n+            loader: require.resolve('postcss-loader'),\n+            options: {\n+              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n+              plugins: () => [\n+                autoprefixer({\n+                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],\n+                }),\n+                pxtorem({ rootValue: 100, propWhiteList: [] })\n+              ],\n+            },\n+          },\n+          {\n+            loader: require.resolve('less-loader'),\n+            options: {\n+              modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+            },\n+          },\n+        ],\n+      },\n       // \"postcss\" loader applies autoprefixer to our CSS.\n       // \"css\" loader resolves paths in CSS and adds assets as dependencies.\n       // \"style\" loader turns CSS into JS modules that inject <style> tags."]],["blockquote",["p","Notice:  we only modified webpack.config.dev.js now, if you wish this config working on production environment, you need to update webpack.config.prod.js as well."]],["ol",["li",["p","Entry html page Required settings:"],["ul",["li",["p","Use HD program settings, see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"},"antd-mobile-0.8-\u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]," for details."]],["li",["p","Use ",["a",{title:null,href:"https://github.com/ftlabs/fastclick"},"FastClick"],", ref ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/576"},"#576"]]],["li",["p","Use Promise fallback support (some Android phones do not support Promise), as follows:"],["pre",{lang:"js",highlighted:'<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>Promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">writeln</span><span class="token punctuation">(</span><span class="token string">\'&lt;script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"\'</span><span class="token operator">+</span><span class="token string">\'>\'</span><span class="token operator">+</span><span class="token string">\'&lt;\'</span><span class="token operator">+</span><span class="token string">\'/\'</span><span class="token operator">+</span><span class="token string">\'script>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","if(!window.Promise) {\n  document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n}"]]]]]],["h3","React Native project"],["blockquote",["p","The source code of this sample can be found at ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app"},"antd-mobile-sample/create-react-native-app"]]],["ol",["li",["p","Modify the ",["code",".babelrc"]," config, then restart the service."]]],["pre",{lang:"diff",highlighted:'<span class="token coord">--- a/.babelrc</span>\n<span class="token coord">+++ b/.babelrc</span>\n<span class="token coord">@@ -1,5 +1,6 @@</span>\n {\n   "presets": ["babel-preset-expo"],\n<span class="token inserted">+  "plugins": [["import", { "libraryName": "antd-mobile" }]],</span>\n   "env": {\n     "development": {\n       "plugins": ["transform-react-jsx-source"]'},["code",'--- a/.babelrc\n+++ b/.babelrc\n@@ -1,5 +1,6 @@\n {\n   "presets": ["babel-preset-expo"],\n+  "plugins": [["import", { "libraryName": "antd-mobile" }]],\n   "env": {\n     "development": {\n       "plugins": ["transform-react-jsx-source"]']],["ol",["li",["p","Modify the ",["code","App.js"]," file, import ",["code","Button"]," component from antd-mobile."]]],["pre",{lang:"diff",highlighted:'<span class="token coord">--- a/App.js</span>\n<span class="token coord">+++ b/App.js</span>\n<span class="token coord">@@ -1,5 +1,7 @@</span>\n import React from \'react\';\n import { StyleSheet, Text, View } from \'react-native\';\n<span class="token inserted">+import { Button } from \'antd-mobile\';</span>\n<span class="token inserted">+</span>\n\n export default class App extends React.Component {\n   render() {\n@@ -8,6 +10,7 @@ export default class App extends React.Component {\n         &lt;Text>Open up App.js to start working on your app!&lt;/Text>\n         &lt;Text>Changes you make will automatically reload.&lt;/Text>\n         &lt;Text>Shake your phone to open the developer menu.&lt;/Text>\n<span class="token inserted">+        &lt;Button>antd-mobile button&lt;/Button></span>\n       &lt;/View>\n     );\n   }'},["code","--- a/App.js\n+++ b/App.js\n@@ -1,5 +1,7 @@\n import React from 'react';\n import { StyleSheet, Text, View } from 'react-native';\n+import { Button } from 'antd-mobile';\n+\n\n export default class App extends React.Component {\n   render() {\n@@ -8,6 +10,7 @@ export default class App extends React.Component {\n         <Text>Open up App.js to start working on your app!</Text>\n         <Text>Changes you make will automatically reload.</Text>\n         <Text>Shake your phone to open the developer menu.</Text>\n+        <Button>antd-mobile button</Button>\n       </View>\n     );\n   }"]],["h2","Customize Theme"],["h3","Web project"],["p","  Please see: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui"},"antd-mobile-sample/web-custom-ui"]," / ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro"},"antd-mobile-sample/web-custom-ui-pro"]],["h3","React Native project"],["ol",["li",["p","Create ",["code","theme.js"]," file in the project root, overwrite the theme variables that you want to change, eg:"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  brand_primary<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  color_link<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  border_color_base<span class="token punctuation">:</span> <span class="token string">\'green\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = {\n  brand_primary: 'red',\n  color_link: 'red',\n  border_color_base: 'green',\n};"]]],["li",["p","Create ",["code","scripts/custom-rn-theme.js"]," file in the project root, copy the contents of ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/blob/master/rn-custom-ui/scripts/custom-rn-theme.js"},"rn-custom-ui/scripts/custom-rn-theme.js"]," to ",["code","scripts/custom-rn-theme.js"],"."]],["li",["p","Modify the ",["code","start"]," script in ",["code","package.json"]," like this:"],["pre",{lang:"json",highlighted:'<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  ...\n  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"node scripts/custom-rn-theme &amp;&amp; react-native-scripts start"</span><span class="token punctuation">,</span>\n  ...\n<span class="token punctuation">}</span>\n\nThen restart the service.\n\n> Note<span class="token operator">:</span> if you want to overwrite some styles for a single component<span class="token punctuation">,</span> please see <span class="token punctuation">[</span>ant-design-mobile/issues/<span class="token number">1174</span><span class="token punctuation">]</span>(https<span class="token operator">:</span>//github.com/ant-design/ant-design-mobile/issues/<span class="token number">1174</span>#issuecomment<span class="token number">-295256831</span><span class="token punctuation">)</span> (currently support <span class="token number">1</span>.x verion<span class="token punctuation">)</span>'},["code",'"scripts": {\n  ...\n  "start": "node scripts/custom-rn-theme && react-native-scripts start",\n  ...\n}\n\nThen restart the service.\n\n> Note: if you want to overwrite some styles for a single component, please see [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831) (currently support 1.x verion)']]]]],meta:{order:3,title:"Use in create-react(-native)-app",filename:"docs/react/use-with-create-react-app.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd-mobile",title:"Import antd-mobile"},"Import antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customize-Theme",title:"Customize Theme"},"Customize Theme"]]]}}});