webpackJsonp([70,158],{623:function(t,e){t.exports={content:["section",["p","\u7528\u4e8e\u8ba9\u7528\u6237\u5728\u4e0d\u540c\u7684\u89c6\u56fe\u4e2d\u8fdb\u884c\u5207\u6362\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u6807\u7b7e\u6570\u91cf\uff0c\u4e00\u822c 2-4 \u4e2a\uff1b\u5176\u4e2d\uff0c\u6807\u7b7e\u4e2d\u7684\u6587\u6848\u9700\u8981\u7cbe\u7b80\uff0c\u4e00\u822c 2-4 \u4e2a\u5b57\u3002"]],["li",["p","\u5728 iOS \u7aef\u7684\u6b21\u7ea7\u9875\u9762\u4e2d\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u5de6\u53f3\u6ed1\u52a8\u6765\u5207\u6362 Tab\uff0c\u8fd9\u4e2a\u548c iOS \u7684\u5de6\u6ed1\u8fd4\u56de\u5b58\u5728\u51b2\u7a81\uff0ceg\uff1a\u8be6\u60c5\u9875\u4e2d Tabs\u3002"]]]],meta:{category:"Components",type:"Navigation",title:"Tabs",subtitle:"\u6807\u7b7e\u9875",filename:"components/tabs/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["h3","Tabs"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","activeKey"],["td","\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key"],["td","String"],["td","\u65e0"]],["tr",["td","defaultActiveKey"],["td","\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 key\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e activeKey"],["td","String"],["td","\u7b2c\u4e00\u4e2a\u9762\u677f"]],["tr",["td","onChange"],["td","\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"],["td","(key: string): void"],["td","\u65e0"]],["tr",["td","onTabClick"],["td","tab \u88ab\u70b9\u51fb\u7684\u56de\u8c03"],["td","(key: string): void"],["td","\u65e0"]],["tr",["td","animated"],["td","\u662f\u5426\u52a8\u753b"],["td","boolean"],["td",["code","true"]]],["tr",["td","swipeable"],["td","\u662f\u5426\u53ef\u4ee5\u6ed1\u52a8 tab \u5185\u5bb9\u8fdb\u884c\u5207\u6362"],["td","boolean"],["td",["code","true"]]],["tr",["td","tabBarPosition"],["td","tab \u4f4d\u7f6e top/bottom"],["td","string"],["td",["code","top"]]],["tr",["td","underlineColor(",["code","react-native only"],")"],["td","\u7ebf\u6761\u989c\u8272"],["td","string"],["td",["code","#ddd"]]],["tr",["td","activeUnderlineColor(",["code","react-native only"],")"],["td","\u9009\u4e2d\u7ebf\u6761\u989c\u8272"],["td","string"],["td",["code","#108ee9"]]],["tr",["td","textColor(",["code","react-native only"],")"],["td","\u6587\u5b57\u989c\u8272"],["td","string"],["td",["code","#000"]]],["tr",["td","activeTextColor(",["code","react-native only"],")"],["td","\u9009\u4e2d\u6587\u5b57\u989c\u8272"],["td","string"],["td",["code","#108ee9"]]],["tr",["td","barStyle(",["code","react-native only"],")"],["td","tabs bar  \u6837\u5f0f"],["td","object"],["td",["code","{}"]]],["tr",["td","destroyInactiveTabPane (",["code","web only"],")"],["td","\u662f\u5426\u9500\u6bc1\u6389\u4e0d\u6d3b\u52a8\u7684 tabPane (\u4f18\u5316\u4f7f\u7528)"],["td","boolean"],["td","false"]],["tr",["td","hammerOptions(",["code","Web Only"],")"],["td","\u5f00\u542f",["code","swipeable"],"\u7684\u65f6\u5019\u53ef\u4ee5\u5bf9 ",["a",{title:null,href:"http://hammerjs.github.io/"},"hammerjs"]," \u7684 ",["a",{title:null,href:"http://hammerjs.github.io/recognizer-pan/"},"pan"]," \u548c ",["a",{title:null,href:"http://hammerjs.github.io/recognizer-swipe/"},"swipe"]," \u4e24\u79cd\u624b\u52bf\u8fdb\u884c\u53c2\u6570\u914d\u7f6e"],["td","object"],["td","{}"]],["tr",["td","prefixCls(",["code","web only"],")"],["td","className \u524d\u7f00"],["td","string"],["td",["code","am-tabs"]]],["tr",["td","className(",["code","web only"],")"],["td","\u989d\u5916\u7684 className"],["td","string"],["td","\u65e0"]],["tr",["td","pageSize(",["code","web only"],")"],["td","\u53ef\u89c6\u533a\u663e\u793a\u7684 tab \u6570\u91cf\uff0c\u53ef\u4ee5\u770b\u505a\u4e00\u9875"],["td","number"],["td","5"]],["tr",["td","speed(",["code","web only"],")"],["td","\u591a\u9875\u6a21\u5f0f\u4e0b\uff0cTabBar \u6ed1\u52a8\u7684\u901f\u5ea6"],["td","Number: 1 ~ 10"],["td","8"]],["tr",["td","tabBarhammerOptions(",["code","web only"],")"],["td","\u540chammerOptions\uff0c\u5bf9 TabBar \u7684\u6ed1\u52a8\u624b\u52bf\u8fdb\u884c\u914d\u7f6e"],["td","Obejct"],["td","{}"]]]],["h3","Tabs.TabPane"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","key"],["td","\u5bf9\u5e94 activeKey"],["td","String"],["td","\u65e0"]],["tr",["td","tab"],["td","\u9009\u9879\u5361\u5934\u663e\u793a\u6587\u5b57"],["td","React.Element or String"],["td","\u65e0"]]]]]}}});