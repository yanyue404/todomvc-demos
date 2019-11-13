(this["webpackJsonpreact-app-test"]=this["webpackJsonpreact-app-test"]||[]).push([[0],{22:function(e,t,n){e.exports=n(48)},28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(19),l=n.n(c),r=n(9),i=n.n(r),u=n(20),s=n(8),d=(n(28),n(29),n(3)),m=n(4),p=n(6),f=n(5),h=n(2),E=n(7),b=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={mode:"onShow"},n.deleteItem=n.deleteItem.bind(Object(h.a)(n)),n.completeItem=n.completeItem.bind(Object(h.a)(n)),n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"changeInputMode",value:function(e,t){this.props.changeValMode(e,t)}},{key:"deleteItem",value:function(e){this.props.deleteOneById(e)}},{key:"completeItem",value:function(e){this.props.completeOneById(e)}},{key:"showResulData",value:function(e,t){return"active"===t?e.filter((function(e){return!1===e.isCompleted})):"completed"===t?e.filter((function(e){return!0===e.isCompleted})):e}},{key:"render",value:function(){var e=this;console.log("render");var t=this.props,n=t.data,a=t.type,c=(this.state.mode,this.showResulData(n,a));return o.a.createElement("ul",{className:"todo-list"},c.map((function(t){return o.a.createElement("li",{className:!0===t.isCompleted?"completed":"",key:t.id},"onShow"==t.mode?o.a.createElement("div",{class:"view"},o.a.createElement("input",{onClick:e.completeItem.bind(e,t.id),className:"toggle",type:"checkbox",checked:t.isCompleted?"checked":""}),o.a.createElement("label",{onDoubleClick:function(){return e.changeInputMode(t.id,t.mode)}},t.name),o.a.createElement("button",{className:"destroy",onClick:e.deleteItem.bind(e,t.id)})):"","onEdit"==t.mode?o.a.createElement("input",{className:"edit",style:{display:"block"},value:t.name,onChange:function(n){return e.props.editItemById(t.id,n.target.value)},onBlur:function(){return e.props.fnishEdit(t.id)}}):"")})))}}]),t}(o.a.Component),v=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).onSetFilterType=function(e){n.setState({type:e},(function(){n.props.TodoFilter(e)}))},n.state={type:"all"},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.type,n=this.props.data,a=0;return n.forEach((function(e){return!1===e.isCompleted?a+=1:""})),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,a)," item left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{className:"all"===t?"selected":"",onClick:function(){return e.onSetFilterType("all")}},"All")),o.a.createElement("li",null,o.a.createElement("a",{className:"active"===t?"selected":"",onClick:function(){return e.onSetFilterType("active")}},"Active")),o.a.createElement("li",null,o.a.createElement("a",{className:"completed"===t?"selected":"",onClick:function(){return e.onSetFilterType("completed")}},"Completed"))),o.a.createElement("button",{className:"clear-completed",onClick:function(){return e.props.clearComplete()}},"Clear completed"))}}]),t}(o.a.Component),y=n(21),C=n.n(y);var g=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),r=Object(s.a)(l,2),d=r[0],m=r[1],p=Object(a.useState)("all"),f=Object(s.a)(p,2),h=f[0],E=f[1];return Object(a.useEffect)(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("https://xiaoyueyue.org/todomvc-demos/static/data.json");case 2:(t=e.sent).data.forEach((function(e){e.mode="onShow"})),c(t.data);case 5:case"end":return e.stop()}}),e)}))),[]),o.a.createElement("div",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),d){var t={name:d,isCompleted:!1,id:n[n.length-1].id+1};c(n.concat(t)),m("")}}(e)}},o.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:d,onChange:function(e){return m(e.target.value)}})),o.a.createElement("section",{className:"main"},o.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onClick:function(){n.forEach((function(e,t){return!1===e.isCompleted?e.isCompleted=!0:""})),c(n.filter((function(e){return e})))}}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement(b,{type:h,data:n,deleteOneById:function(e){var t=n.findIndex((function(t){return t.id===e}));n.splice(t,1),c(n.filter((function(t){return t.id!=e})))},completeOneById:function(e){n.forEach((function(t,n){return t.id===e?t.isCompleted=!t.isCompleted:""})),c(n.filter((function(e){return e})))},changeValMode:function(e,t){console.log(e,t),n.forEach((function(t,n){return t.id===e?t.mode="onEdit":""})),c(n.filter((function(e){return e}))),console.log(n)},editItemById:function(e,t){console.log("edit",t),n.forEach((function(n,a){return n.id===e?n.name=t:""})),c(n.filter((function(e){return e}))),console.log(n)},fnishEdit:function(e){console.log("\u7f16\u8f91\u7ed3\u675f\u8bbe\u7f6e",e),n.forEach((function(t,n){return t.id===e?t.mode="onShow":""})),c(n.filter((function(e){return e})))}}))),o.a.createElement(v,{data:n,TodoFilter:function(e){E(e)},clearComplete:function(){c(n.filter((function(e){return!1===e.isCompleted})))}}))};n(47);l.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.67425ced.chunk.js.map