(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(7),r=n.n(a),o=n(14),j=n(11),i=n(31),l=n.n(i),s=n(2);var u=function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("h1",{children:[Object(s.jsx)(l.a,{}),"Keeper"]})})};var b=function(){var e=(new Date).getFullYear();return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Copyright \u24d2 Satyam | ",e]})})},O=n(33),d=n.n(O);var f=function(e){return Object(s.jsxs)("div",{className:"note",children:[Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("p",{children:e.content}),Object(s.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(s.jsx)(d.a,{})})]})},h=n(8),x=n(30),p=n(34),v=n.n(p),m=n(66),g=n(67);var k=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)({title:"",content:""}),i=Object(j.a)(o,2),l=i[0],u=i[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},n,c))}))}return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{autocomplete:"off",className:"create-note",children:[a?Object(s.jsx)("input",{autocomplete:"false",name:"title",onChange:b,value:l.title,placeholder:"Title"}):null,Object(s.jsx)("textarea",{autocomplete:"false",onClick:function(){r(!0)},name:"content",onChange:b,value:l.content,placeholder:"Take a note...",rows:a?3:1}),Object(s.jsx)(g.a,{in:!!a,children:Object(s.jsx)(m.a,{onClick:function(t){e.onAdd(l),u({title:"",content:""}),t.preventDefault()},children:Object(s.jsx)(v.a,{})})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];function r(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(k,{onAdd:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return Object(s.jsx)(f,{id:t,title:e.title,content:e.content,onDelete:r},t)})),Object(s.jsx)(b,{})]})};r.a.render(Object(s.jsx)(C,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.9d377941.chunk.js.map