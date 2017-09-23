webpackJsonp([137,141],{542:function(e,t){e.exports={content:["section",["p","\u4ece\u5e95\u90e8\u5f39\u51fa\u7684\u6a21\u6001\u6846\uff0c\u63d0\u4f9b\u548c\u5f53\u524d\u573a\u666f\u76f8\u5173\u7684 2 \u4e2a\u4ee5\u4e0a\u7684\u64cd\u4f5c\u52a8\u4f5c\uff0c\u4e5f\u652f\u6301\u63d0\u4f9b\u6807\u9898\u548c\u63cf\u8ff0\u3002\u5185\u7f6e\u56fa\u5b9a\u7684\u5c55\u793a\u6837\u5f0f\u3001\u4e0d\u652f\u6301\u7279\u522b\u7075\u6d3b\u7684\u4fee\u6539\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u63d0\u4f9b\u6e05\u6670\u7684\u9000\u51fa\u6309\u94ae\u3002"]],["li",["p","\u53ef\u9ad8\u4eae\u7834\u574f\u6027\u64cd\u4f5c\uff0ce.g. \u5c06\u300e\u5220\u9664\u300f\u5904\u7406\u6210\u7ea2\u8272\u6587\u672c\u3002"]],["li",["p","\u4e0d\u8981\u653e\u7f6e\u8fc7\u591a\u5185\u5bb9\uff0c\u907f\u514d\u9762\u677f\u7eb5\u5411\u6eda\u52a8\u3002"]]]],meta:{category:"Components",type:"Feedback",title:"ActionSheet",subtitle:"\u52a8\u4f5c\u9762\u677f",filename:"components/action-sheet/index.zh-CN.md"},api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["h4","static showActionSheetWithOptions(options: Object, callback: Function)"],["p","\u663e\u793a action sheet\uff0c",["code","options"],"\u5bf9\u8c61\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff1a"],["ul",["li",["p","options (array of strings) - \u6309\u94ae\u6807\u9898\u5217\u8868 (required)"]],["li",["p","cancelButtonIndex (int) - \u6309\u94ae\u5217\u8868\u4e2d\u53d6\u6d88\u6309\u94ae\u7684\u7d22\u5f15\u4f4d\u7f6e"]],["li",["p","destructiveButtonIndex (int) - \u6309\u94ae\u5217\u8868\u4e2d\u7834\u574f\u6027\u6309\u94ae\uff08\u4e00\u822c\u4e3a\u5220\u9664\uff09\u7684\u7d22\u5f15\u4f4d\u7f6e"]],["li",["p","title (string) - \u9876\u90e8\u6807\u9898"]],["li",["p","message (string/React.element) - \u9876\u90e8\u6807\u9898\u4e0b\u7684\u7b80\u8981\u6d88\u606f"]],["li",["p","maskClosable (bool)(",["code","web only"],") - \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed\uff0c\u9ed8\u8ba4\u5141\u8bb8"]]],["p",["code","callback"],"\u51fd\u6570\u652f\u6301\u8fd4\u56de Promise (",["code","web only"],")"],["h4","static showShareActionSheetWithOptions(options: Object, callback: Function) ",["code","WEB only"]],["p","\u663e\u793a\u5206\u4eab action sheet\uff0c",["code","options"],"\u5bf9\u8c61\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff1a"],["ul",["li",["p","options (array of ",["code","{icon:React.node, iconName:string, title:string}"],") - \u5206\u4eab\u6309\u94ae\u5217\u8868 (required)"],["ul",["li",["p","\u6ce8\u610f\uff1a",["code","iconName"],"\u4e3a ",["a",{title:null,href:"https://mobile.ant.design/components/icon"},"Icon \u7ec4\u4ef6"],"\u91cc\u7684\u67d0\u4e2a type \u503c\uff0c\u5b83\u4f1a\u8986\u76d6",["code","icon"],"\u5c5e\u6027\u8bbe\u7f6e (",["code","icon"],"\u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5185\u5bb9\uff0c\u652f\u6301\u4efb\u610f\u5408\u6cd5\u7684 React Element)"]],["li",["p","\u53ef\u4ee5\u662f\u4e8c\u7ef4\u6570\u7ec4\uff0c\u80fd\u663e\u793a\u591a\u884c\u6309\u94ae\uff0c\u4f8b\u5982",["code","[[{icon,title},{icon,title}], [{icon,title},{icon,title}]]"],"\u8868\u793a\u4e24\u884c\u4e24\u5217\u3002\u5f53\u4e3a\u4e8c\u7ef4\u6570\u7ec4\u65f6",["code","callback"],"\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4e3a",["code","\u5217"],"\u5e8f\u5217\u3001\u7b2c\u4e8c\u4e2a\u4e3a",["code","\u884c"],"\u5e8f\u5217\u3002"]]]],["li",["p","cancelButtonText (string)(",["code","web only"],") - \u53d6\u6d88\u6309\u94ae\u6587\u6848\uff0c\u9ed8\u8ba4\u4e3a",["code","\u53d6\u6d88"]]],["li",["p","title (string) - \u9876\u90e8\u6807\u9898"]],["li",["p","message (string/React.element) - \u9876\u90e8\u6807\u9898\u4e0b\u7684\u7b80\u8981\u6d88\u606f"]],["li",["p","maskClosable (bool)(",["code","web only"],") - \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed\uff0c\u9ed8\u8ba4\u5141\u8bb8"]]],["p",["code","callback"],"\u51fd\u6570\u652f\u6301\u8fd4\u56de Promise (",["code","web only"],")"],["h4","static showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)"],["p",["code","React-Native only, react-native@version >= 0.39"]],["p","\u663e\u793a\u5206\u4eab action sheet\uff0c",["code","options"],"\u5bf9\u8c61\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff1a"],["ul",["li",["p",["strong","options:"]],["ul",["li",["p","message(",["code","string"],"): \u9876\u90e8\u6807\u9898\u4e0b\u7684\u7b80\u8981\u6d88\u606f"]],["li",["p","title(",["code","string"],"): \u9876\u90e8\u6807\u9898"]],["li",["p","url(",["code","string"],"): \u5206\u4eab\u7684 url ",["code","iOS only"]]],["li",["p","excludedActivityTypes(",["code","array"],"): \u6307\u5b9a\u5728actionsheet\u4e2d\u4e0d\u663e\u793a\u7684\u6d3b\u52a8 ",["code","iOS only"]]]]],["li",["p",["strong","Callback"],": (",["code","iOS only"],", see ",["a",{title:null,href:"https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80"},"react-native/share"],")"],["ul",["li",["p","failureCallback(error): \u5206\u4eab\u5931\u8d25\u8c03\u7528\uff1b"]],["li",["p","successCallback(completed, method)\uff1a\u5206\u4eab\u6210\u529f\u8c03\u7528;"]]]]],["h4","static close() - (web, android only) programmatically close."]]}}});