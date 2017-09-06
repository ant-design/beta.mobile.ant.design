webpackJsonp([112,158],{554:function(t,e){t.exports={content:["section",["p","\u7528\u4f5c\u663e\u793a\u7cfb\u7edf\u7684\u91cd\u8981\u4fe1\u606f\uff0c\u5e76\u8bf7\u6c42\u7528\u6237\u8fdb\u884c\u64cd\u4f5c\u53cd\u9988\uff0ceg\uff1a\u5220\u9664\u67d0\u4e2a\u91cd\u8981\u5185\u5bb9\u65f6\uff0c\u5f39\u51fa Modal \u8fdb\u884c\u4e8c\u6b21\u786e\u8ba4\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u5c3d\u53ef\u80fd\u5c11\u7528\u3002Modal \u4f1a\u6253\u65ad\u7528\u6237\u64cd\u4f5c\uff0c\u53ea\u7528\u5728\u91cd\u8981\u7684\u65f6\u5019\u3002"]],["li",["p","\u6807\u9898\u5e94\u8be5\u7b80\u660e\uff0c\u4e0d\u80fd\u8d85\u8fc7 1 \u884c\uff1b\u63cf\u8ff0\u5185\u5bb9\u5e94\u8be5\u7b80\u660e\u3001\u5b8c\u6574\uff0c\u4e00\u822c\u4e0d\u591a\u4e8e 2 \u884c\u3002"]],["li",["p","\u64cd\u4f5c\u6309\u94ae\u6700\u591a\u5230 3 \u4e2a\uff08\u7ad6\u6392\uff09\uff0c\u4e00\u822c\u4e3a 1-2 \u4e2a\uff08\u6a2a\u6392\uff09\uff1b3 \u4e2a\u4ee5\u4e0a\u5efa\u8bae\u4f7f\u7528\u7ec4\u4ef6 ActionSheet \u6765\u5b8c\u6210\u3002"]],["li",["p","\u4e00\u822c\u5c06\u7528\u6237\u6700\u53ef\u80fd\u70b9\u51fb\u7684\u6309\u94ae\uff0c\u653e\u5728\u53f3\u4fa7\u3002\u53e6\u5916\uff0c\u53d6\u6d88\u6309\u94ae\u5e94\u5f53\u59cb\u7ec8\u653e\u5728\u5de6\u4fa7\u3002"]]]],meta:{category:"Components",type:"Feedback",title:"Modal",subtitle:"\u5bf9\u8bdd\u6846",filename:"components/modal/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["h3","Modal"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","prefixCls (web only)"],["td","\u6837\u5f0f\u7c7b\u540d\u524d\u7f00"],["td","String"],["td",["code","am-modal"]]],["tr",["td","visible"],["td","\u5bf9\u8bdd\u6846\u662f\u5426\u53ef\u89c1"],["td","Boolean"],["td","false"]],["tr",["td","onClose"],["td","\u70b9\u51fb x \u6216 mask \u56de\u8c03"],["td","(): void"],["td","\u65e0"]],["tr",["td","title (only transparent)"],["td","\u6807\u9898"],["td","React.Element"],["td","\u65e0"]],["tr",["td","closable"],["td","\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"],["td","Boolean"],["td",["code","false"]]],["tr",["td","maskClosable (only transparent)"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed"],["td","Boolean"],["td","true"]],["tr",["td","footer  (only not transparent)"],["td","\u5e95\u90e8\u5185\u5bb9"],["td","Array ",["span","{text, onPress}"]],["td","[]"]],["tr",["td","transparent"],["td","\u662f\u5426\u5f39\u7a97\u6a21\u5f0f"],["td","Boolean"],["td","false"]],["tr",["td","animationType (",["code","rn only"],")"],["td","\u53ef\u9009: 'slide-down/up'(transparent \u6a21\u5f0f\u4e0b) / 'fade' / 'slide'(\u4ec5\u975e tranparent)"],["td","String"],["td","fade"]],["tr",["td","style (",["code","web only"],")"],["td","\u6837\u5f0f"],["td","Object"],["td","\u900f\u660e\u6a21\u5f0f\u4e0b: {width: '286px', height: 'cross'}, ",["br"],"\u975e\u900f\u660e\u6a21\u5f0f:  {width: '100%', height: '100%'} (web)"]],["tr",["td","platform (",["code","web only"],")"],["td","\u8bbe\u5b9a\u7ec4\u4ef6\u7684\u5e73\u53f0\u7279\u6709\u6837\u5f0f, \u53ef\u9009\u503c\u4e3a ",["code","android"],", ",["code","ios"],"\uff0c \u9ed8\u8ba4\u4e3a ",["code","ios"]],["td","String"],["td",["code","'ios'"]]]]],["h3","Modal.alert(title, message, actions?)"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u6807\u9898"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","message"],["td","\u63d0\u793a\u4fe1\u606f"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","actions"],["td","\u6309\u94ae\u7ec4, ",["span","{text, onPress, style}"]],["td","Array"],["td","\u65e0"]]]],["p",["code","Modal.alert(title, message, actions?).close()"]," \u53ef\u4ee5\u5728\u5916\u90e8\u5173\u95ed Alert"],["h3","Modal.prompt(title, message, callbackOrActions, type?, defaultValue?)"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u6807\u9898"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","message"],["td","\u63d0\u793a\u4fe1\u606f"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","callbackOrActions"],["td","\u6309\u94ae\u7ec4 ",["span","{text, onPress}"]," \u6216\u56de\u8c03\u51fd\u6570"],["td","Array or Function"],["td","\u65e0"]],["tr",["td","type"],["td","prompt \u7684\u6837\u5f0f"],["td","String (",["code","default"],", ",["code","secure-text"],", ",["code","login-password"],")"],["td",["code","default"]]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u503c(input \u4e3a password \u7c7b\u578b\u4e0d\u652f\u6301)"],["td","String"],["td","-"]],["tr",["td","placeholders"],["td",["span","'', ''"]],["td","String[]"],["td","-"]]]],["p","Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?).close()` \u53ef\u4ee5\u5728\u5916\u90e8\u5173\u95ed prompt"],["h3","Modal.operation(actions?)"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","actions"],["td","\u6309\u94ae\u7ec4, ",["span","{text, onPress, style}"]],["td","Array"],["td","\u65e0"]]]],["p","Modal.operation(actions?).close()` \u53ef\u4ee5\u5728\u5916\u90e8\u5173\u95ed operation"]]}}});