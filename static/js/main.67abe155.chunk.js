(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){e.exports=n(277)},122:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(16),o=n.n(l),c=(n(122),n(18)),i=n(116),u=n(17),d=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],l=n[1];return{todos:r,addTodo:function(e){var t=[{id:Date.now().toString(16)+(Math.floor(1e4)*Math.random()).toString(16),title:e.title,priority:e.priority,deadline:e.deadline,state:"incomplete",created_at:Date.now()}].concat(Object(i.a)(r));l(t)},deleteTodo:function(e){var t=r.filter(function(t){return t.id!==e});l(t)},changeTodoState:function(e){var t=r.map(function(t){return t.id===e?Object(c.a)({},t,{state:"complete"===t.state?"incomplete":"complete"}):t});l(t)},filterTodos:function(e){return r.filter(function(t){return e.every(function(e){var n=Object(u.a)(e,2),a=n[0];return n[1][t[a]]})})}}},m=n(43),s=function(e){var t=Object(a.useState)(function(){return Object.fromEntries(Object.entries(e).map(function(e){var t=Object(u.a)(e,2),n=t[0];return t[1],[n,!0]}))}),n=Object(u.a)(t,2),r=n[0],l=n[1];return{filter:r,handleFilter:function(e){return l(function(t){return Object(c.a)({},t,Object(m.a)({},e,!t[e]))})}}},f=n(97),b=n.n(f),h=function(e){return r.a.createElement(b.a,{required:!0,autoFocus:!0,label:e.label,placeholder:e.placeholder,fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(t){return e.onChange(t)},value:e.value})},p=n(100),E=n.n(p),g=n(99),y=n.n(g),v=n(44),j=n.n(v),w=n(63),O=n.n(w),T=n(62),k=n.n(T),x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{component:"fieldset"},r.a.createElement(k.a,{component:"legend"},e.legend),r.a.createElement(y.a,{"aria-label":e.legend,name:e.legend,value:e.value,onChange:function(t){return e.onChange(t)},row:!0},e.labels.map(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement(j.a,{key:n,value:n,control:r.a.createElement(E.a,{color:"primary"}),label:a,labelPlacement:"end"})}))))},C=n(28),S=n.n(C),F=n(101),I=n.n(F),D=function(e){var t=Object(a.useState)(e.formInitial),n=Object(u.a)(t,2),l=n[0],o=n[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(l),o(Object(c.a)({},l,{title:""}))}},r.a.createElement(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(h,{label:e.label,placeholder:e.placeholder,onChange:function(e){return o(Object(c.a)({},l,{title:e.target.value}))},value:l.title})),r.a.createElement(S.a,{item:!0,xs:12,md:6},r.a.createElement(x,{legend:"\u671f\u9650",labels:Object.entries(e.deadlineLabels),value:l.deadline,onChange:function(e){return o(Object(c.a)({},l,{deadline:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:12,md:6},r.a.createElement(x,{legend:"\u512a\u5148\u5ea6",labels:Object.entries(e.priorityLabels),value:l.priority,onChange:function(e){return o(Object(c.a)({},l,{priority:e.target.value}))}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(I.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit"},"add"))))},L=n(64),W=n.n(L),K=n(45),M=n.n(K),P=n(107),A=n.n(P),B=n(108),J=n.n(B),R=n(42),_=n.n(R),q=n(109),H=n.n(q),Y=n(106),$=n.n(Y),z=n(102),G=n.n(z),N=n(103),Q=n.n(N),U=n(104),V=n.n(U),X=n(105),Z=n.n(X),ee=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{divider:!0,button:!0,onClick:e.onRowClick},r.a.createElement(Q.a,null,e.leftIcon),r.a.createElement(V.a,{inset:!0,primary:e.primaryText,secondary:e.secondaryText}),r.a.createElement(Z.a,null,e.secondaryAction)))},te=function(e){var t=new Date(e),n=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2),l=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2),c=("0"+t.getSeconds()).slice(-2);return"".concat(n,"/").concat(a,"/").concat(r," ").concat(l,":").concat(o,":").concat(c)},ne=function(e){var t=function(e){return"complete"===e.state},n=function(e){return t(e)?r.a.createElement($.a,null):"high"===e.priority?r.a.createElement(A.a,{color:"secondary"}):r.a.createElement(J.a,null)},a={color:"gray",textDecoration:"line-through"};return r.a.createElement(W.a,null,r.a.createElement(M.a,null),e.todos.map(function(l){return r.a.createElement(ee,{key:l.id,onRowClick:function(){return e.changeTodoState(l.id)},leftIcon:n(l),primaryText:r.a.createElement("span",{style:t(l)?a:{}},l.title),secondaryText:te(l.created_at),secondaryAction:t(l)&&r.a.createElement(_.a,{onClick:function(){return e.deleteTodo(l.id)}},r.a.createElement(H.a,null))})}))},ae=n(115),re=n.n(ae),le=n(110),oe=n.n(le),ce=function(e){return r.a.createElement(r.a.Fragment,null,e.labels.map(function(t){var n=Object(u.a)(t,2),a=n[0],l=n[1];return r.a.createElement(j.a,{key:a,control:r.a.createElement(oe.a,{color:"primary",checked:e.filter[a],onChange:function(){return e.onChange(a)},value:l}),label:e.labelText(a,l)})}))};ce.defaultProps={labelText:function(e,t){return t}};var ie=ce,ue=n(111),de=n.n(ue),me=n(112),se=n.n(me),fe=n(114),be=n.n(fe),he=n(113),pe=n.n(he),Ee=function(e){return r.a.createElement(de.a,null,r.a.createElement(se.a,{expandIcon:r.a.createElement(pe.a,null)},e.title),r.a.createElement(be.a,null,e.children))},ge=re()()(function(e){var t=function(t,n){return"".concat(n,"(").concat(e.todos.filter(function(n){return e.todoKeys.some(function(e){return n[e]===t})}).length,")")},n=r.a.createElement("div",null,e.todoKeys.map(function(n,a){return r.a.createElement("span",{key:n},r.a.createElement(ie,{labels:Object.entries(e.labels[a]),labelText:t,filter:e.filters[a],onChange:function(t){return e.handleFileters[a](t)}}),a!==e.todoKeys.length-1&&r.a.createElement(M.a,null))}));return"xs"!==e.width?n:r.a.createElement(Ee,{title:"\u7d5e\u308a\u8fbc\u307f"},n)}),ye=function(){var e={incomplete:"\u672a\u5b8c\u4e86",complete:"\u5b8c\u4e86\u6e08\u307f"},t={today:"\u4eca\u65e5\u4e2d",tomorrow:"\u660e\u65e5\u307e\u3067",week:"\u4e00\u9031\u9593",other:"\u672a\u5b9a"},n={high:"\u9ad8\u3044",medium:"\u666e\u901a",low:"\u4f4e\u3044"},a=d([]),l=a.todos,o=a.addTodo,c=a.deleteTodo,i=a.changeTodoState,u=a.filterTodos,m=s(e),f=m.filter,b=m.handleFilter,h=s(t),p=h.filter,E=h.handleFilter,g=s(n),y=g.filter,v=g.handleFilter;return r.a.createElement("div",null,r.a.createElement(D,{onSubmit:o,label:"\u30bf\u30b9\u30af\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044",placeholder:"\uff08\u4f8b\uff09Wantedly\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u8ab2\u984c",formInitial:{title:"",priority:"medium",deadline:"today"},deadlineLabels:t,priorityLabels:n}),r.a.createElement(ge,{todos:l,labels:[e,t,n],todoKeys:["state","deadline","priority"],filters:[f,p,y],handleFileters:[b,E,v]}),r.a.createElement(ne,{todos:u([["state",f],["deadline",p],["priority",y]]),deleteTodo:c,changeTodoState:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[117,1,2]]]);
//# sourceMappingURL=main.67abe155.chunk.js.map