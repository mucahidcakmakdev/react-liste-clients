(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(1),c=n(0),r=n.n(c),i=n(4),o=n.n(i),u=function(e){var t=e.details,n=e.onDelete;return r.a.createElement("li",{className:"list-group-item"},t.nom," ",r.a.createElement("button",{className:"btn btn-light",onClick:function(){return n(t.id)}},"X"))},s=function(e){var t=e.onClientAdd,n=Object(c.useState)(""),a=Object(l.a)(n,2),i=a[0],o=a[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),i.length){var n=(new Date).getTime();t({id:n,nom:i}),o("")}}},r.a.createElement("div",{className:"row g-3 align-items-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("input",{className:"form-control",value:i,onChange:function(e){o(e.currentTarget.value)},type:"text",placeholder:"Ajouter un client"})),r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{className:"btn btn-primary"},"Confirmer"))))},m=(n(11),n(12),function(){var e=Object(c.useState)([{id:1,nom:"Sophie Durand"},{id:2,nom:"Robert Descartes"}]),t=Object(l.a)(e,2),n=t[0],i=t[1],o=function(e){var t=Object(a.a)(n),l=t.findIndex(function(t){return t.id===e});t.splice(l,1),i(t)};return r.a.createElement("div",{className:"card p-5"},r.a.createElement("h1",null,"Liste des clients"),r.a.createElement("ul",{className:"list-group",style:{display:n.length?"block":"none"}},n.map(function(e){return r.a.createElement(u,{key:e.id,details:e,onDelete:o})})),r.a.createElement("i",{style:{display:n.length?"none":"block"}},"Pas de client"),r.a.createElement("br",null),r.a.createElement(s,{onClientAdd:function(e){var t=Object(a.a)(n);t.push(e),i(t)}}))}),d=document.getElementById("root");o.a.render(r.a.createElement(m,null),d)},5:function(e,t,n){e.exports=n(13)}},[[5,1,2]]]);
//# sourceMappingURL=main.66b35c0b.chunk.js.map