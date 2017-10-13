webpackJsonp([136,159],{526:function(t,e){t.exports={content:["section",["p","Used to select a date or time."],["h3","Rules"],["ul",["li",["p","A maximum of five independent rollers are shown, each of which represents a different value."]]]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",filename:"components/date-picker/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","mode"],["td","mode value, can be a ",["code","date"]," or ",["code","time"]," or ",["code","datetime"]," or ",["code","year"]," or ",["code","month"]],["td","String"],["td",["code","date"]]],["tr",["td","value"],["td","the currently selected value"],["td","Date"],["td","-"]],["tr",["td","minDate"],["td","minimum date"],["td","Date"],["td","-"]],["tr",["td","maxDate"],["td","maximum date"],["td","Date"],["td","-"]],["tr",["td","use12Hours (",["code","WEB only"],")"],["td","12 hours display mode"],["td","Boolean"],["td","false"]],["tr",["td","minuteStep"],["td","The amount of time, in minutes, between each minute item."],["td","Number"],["td","1"]],["tr",["td","locale"],["td","international, can override the configuration of the global ",["code","[LocaleProvider](https://mobile.ant.design/components/locale-provider)"]],["td","Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText}"],["td","-"]],["tr",["td","disabled"],["td","whether is disabled"],["td","Boolean"],["td","false"]],["tr",["td","onChange"],["td","change handler"],["td","(date: Object): void"],["td","-"]],["tr",["td","onValueChange"],["td","fire when picker col change"],["td","(vals: any, index: number) => void"],["td","-"]],["tr",["td","format"],["td","format the selected value"],["td",["code","(value: Date) => date string"]," / ",["code","format string"],"(corresponding mode under the format are: ",["code","YYYY-MM-DD"]," or ",["code","HH:mm"]," or ",["code","YYYY-MM-DD HH:mm"],")"],["td","-"]],["tr",["td","title"],["td","title"],["td","string/React.ReactElement"],["td","-"]],["tr",["td","extra"],["td","the display text"],["td","String"],["td",["code","\u8bf7\u9009\u62e9"]]],["tr",["td","disabled"],["td","set disabled"],["td","Boolean"],["td","false"]],["tr",["td","prefixCls (",["code","WEB only"],")"],["td","prefix class"],["td","string"],["td",["code","am-picker"]]],["tr",["td","className (",["code","WEB only"],")"],["td","className"],["td","string"],["td","-"]]]],["p","Tip\uff1a We suggest DatePicker's children to be ",["code","List.Item"],", if not, you need to be a custom component which accept and handle ",["code","onClick"]," / ",["code","extra"]," / ",["code","chidlren"]," props, see ",["a",{title:null,href:"https://mobile.ant.design/components/date-picker"},"demo"]]]}}});