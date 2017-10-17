webpackJsonp([48,159],{659:function(e,t){e.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," (Web project) / ",["a",{title:null,href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"],"(React Native project) is one of best React application development tool, we are going to use ",["code","antd-mobile"]," within it\uff1b"],["h2","Install and Initialization"],["p","We need to install the appropriate tools first, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"]," too."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g yarn\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app  <span class="token comment" spellcheck="true"># web project</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-native-app  <span class="token comment" spellcheck="true"># react-native project</span>'},["code","$ npm install -g yarn\n$ npm install -g create-react-app  # web project\n$ npm install -g create-react-native-app  # react-native project"]],["p","Then we create a new project named antm-demo."],["pre",{lang:"bash",highlighted:'$ create-react-app antm-demo  <span class="token comment" spellcheck="true"># web project</span>\n$ create-react-native-app antm-demo  <span class="token comment" spellcheck="true"># react-native project</span>'},["code","$ create-react-app antm-demo  # web project\n$ create-react-native-app antm-demo  # react-native project"]],["p","The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it."],["p","Then we go inside antm-demo and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antm-demo\n$ yarn start'},["code","$ cd antm-demo\n$ yarn start"]],["ul",["li",["p",["code","Web project"],": Open browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],', it renders a header saying "Welcome to React" on the page.']],["li",["p",["code","React Native project"],": Run ",["code","npm run ios"]," in terminal, it should be ok if you can see the page content in simulator."]]],["h2","Integrate antd-mobile"],["ul",["li",["p",["strong","Basic run\uff1a"]],["p","Settings entry html page\uff08",["code","web only"],"\uff09\uff0csee ",["a",{title:null,href:"/docs/react/introduce#Web-usage"},"Entry html page settings"]],["blockquote",["p","Note\uff1ayou need to run ",["code","yarn run eject"]," before customzing configurations for, more ref  ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/1.x/create-react-app"},"antd-mobile-samples/create-react-app"]]]],["li",["p",["strong","Use modularized antd-mobile\uff1a"]],["ol",["li",["p","Import ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," and modify the ",["code","scripts"]," field in package.json."]]]]],["pre",{lang:"bash",highlighted:"$ yarn add react-app-rewired --dev"},["code","$ yarn add react-app-rewired --dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom",\n}']],["ol",["li",["p","Then create a ",["code","config-overrides.js"]," at root directory of your project for futher overriding."]]],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["ol",["li",["p","Use babel-plugin-import, ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," is a babel plugin for importing components on demand\uff08",["a",{title:null,href:"https://ant.design/docs/react/getting-started#Import-on-Demand"},"How does it work?"],"\uff09\uff0cWe are now trying to install it and modify config-overrides.js."]]],["pre",{lang:"bash",highlighted:"yarn add babel-plugin-import --dev"},["code","yarn add babel-plugin-import --dev"]],["pre",{lang:"diff",highlighted:"<span class=\"token inserted\">+ const { injectBabelPlugin } = require('react-app-rewired');</span>\n  module.exports = function override(config, env) {\n<span class=\"token inserted\">+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);</span>\n    return config;\n  };"},["code","+ const { injectBabelPlugin } = require('react-app-rewired');\n  module.exports = function override(config, env) {\n+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);\n    return config;\n  };"]],["ol",["li",["p","change importation like below:"]]],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import Button from 'antd/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>"},["code","- import Button from 'antd/lib/button';\n+ import { Button } from 'antd';"]],["h2","Complete example"],["ul",["li",["p","Web project ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app"},"antd-mobile-sample/create-react-app"]]],["li",["p","React-Native project ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app"},"antd-mobile-sample/create-react-native-app"]],["ul",["li",["blockquote",["p","Note: a method of rewriting part of a single component can be found (1.x): ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831"},"ant-design-mobile/issues/1174"],"\uff0c(2.x): ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pull/1629"},"ant-design-mobile/pull/1629"]]]]]]]],meta:{order:3,title:"Use in create-react(-native)-app",filename:"docs/react/use-with-create-react-app.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Integrate-antd-mobile",title:"Integrate antd-mobile"},"Integrate antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#Complete-example",title:"Complete example"},"Complete example"]]]}}});