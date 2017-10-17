webpackJsonp([54,159],{656:function(e,t){e.exports={content:["article",{},["h2","Install dva-cli"],["p","Install dva-cli with npm, and make sure the version is larger then ",["code","0.7.0"],"."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> dva-cli -g\n$ dva -v\n0.7.0'},["code","$ npm install dva-cli -g\n$ dva -v\n0.7.0"]],["h2","Create New App"],["p","After installed dva-cli, you can have access to the ",["code","dva"]," command in terminal (",["a",{title:null,href:"http://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found"},"can't access?"],"). Now, create a new application with ",["code","dva new"],"."],["pre",{lang:"bash",highlighted:"$ dva new dva-quickstart"},["code","$ dva new dva-quickstart"]],["p","This creates ",["code","dva-quickstart"]," directory, that contains the project directories and files, and provides development server, build script, mock service, proxy server and so on."],["p","Then ",["code","cd"]," the ",["code","dva-quickstart"]," directory, and start the development server."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> dva-quickstart\n$ <span class="token function">npm</span> start'},["code","$ cd dva-quickstart\n$ npm start"]],["p","After a few seconds, you will see the following output:"],["pre",{lang:"bash",highlighted:'Compiled successfully<span class="token operator">!</span>\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use <span class="token function">npm</span> run build.'},["code","Compiled successfully!\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use npm run build."]],["p","Open ",["a",{title:null,href:"http://localhost:8000"},"http://localhost:8000"]," in your browser, you will see dva welcome page."],["h2","Integrate antd-mobile"],["p",["a",{title:null,href:"/docs/react/introduce#Getting-Started"},"See here for details"]],["p","Note: ",["strong",["code",".babelrc"]," file is invalid and the configuration is transferred to the",["code",".roadhogrc"]," file, ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#extrababelplugins"},"see here for details"]]],["h2","Next:"],["ul",["li",["p","Define Router"]],["li",["p","Write UI Components"]],["li",["p","Define Model"]]],["p","See ",["a",{title:null,href:"https://github.com/dvajs/dva/tree/master/examples"},"dva examples"]],["h2","Build"],["p","Now that we've written our application and verified that it works in development, it's time to get it ready to deploy to our users. To do so, run the following command:"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","The ",["code","build"]," command packages up all of the assets that make up your application \u2014\u2014 JavaScript, templates, CSS, images, and more. Then you can find these files in the ",["code","dist /"]," directory."],["h2","What's Next"],["p","We have completed a simple application, but you may still have lots of questions, such as:"],["ul",["li",["p","How to dealing with async logic"]],["li",["p","How to load initial data elegantly"]],["li",["p","How to handle onError globally and locally"]],["li",["p","How to load Routes and Models on demand"]],["li",["p","How to implement HMR"]],["li",["p","How to mock data"]],["li",["p","and so on..."]]],["p","You can:"],["ul",["li",["p","Visit ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva official website"],"."]],["li",["p","Be familiar with the ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/Concepts.md"},"8 Conpects"],", and understand how they are connected together"]],["li",["p","Know all ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/API.md"},"dva APIs"]]],["li",["p","Checkout ",["a",{title:null,href:"https://github.com/dvajs/dva-knowledgemap"},"dva knowledgemap"],", including all the basic knowledge with ES6, React, dva"]],["li",["p","Checkout ",["a",{title:null,href:"https://github.com/dvajs/dva/issues?q=is%3Aissue+is%3Aclosed+label%3Afaq"},"more FAQ"]]],["li",["p","If your project is created with ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," , checkout how to ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#\u914d\u7f6e"},"Configure it"]]]]],meta:{order:2,title:"Real project with Dva",filename:"docs/react/practical-projects.en-US.md"},description:["section",["p",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," is a React and redux based, lightweight and elm-style framework, which supports side effects, hot module replacement, dynamic on demand, react-native, SSR. And it has been widely used in production environment."],["p","This article will guide you to create a simple application from zero using dva and antd."],["p","Include the following:"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-dva-cli",title:"Install dva-cli"},"Install dva-cli"]],["li",["a",{className:"bisheng-toc-h2",href:"#Create-New-App",title:"Create New App"},"Create New App"]],["li",["a",{className:"bisheng-toc-h2",href:"#Integrate-antd-mobile",title:"Integrate antd-mobile"},"Integrate antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#Next:",title:"Next:"},"Next:"]],["li",["a",{className:"bisheng-toc-h2",href:"#Build",title:"Build"},"Build"]],["li",["a",{className:"bisheng-toc-h2",href:"#What's-Next",title:"What's Next"},"What's Next"]]]}}});