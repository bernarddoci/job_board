(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,a){e.exports=a(80)},63:function(e,t,a){},65:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(63),a(38)),i=a.n(c),s=a(26),u=a(46),m=(a(65),a(53)),d=a(114),p=a(113),E=a(51),f=a.n(E),h=a(50),v=a.n(h),b=a(106);function g(e){var t=e.job,a=e.onClick;return r.a.createElement(b.a,{className:"job",onClick:a},r.a.createElement("div",null,r.a.createElement(m.a,{variant:"h5"},t.title),r.a.createElement(m.a,{variant:"h6"},t.compoany),r.a.createElement(m.a,{variant:"h6"},t.location)),r.a.createElement("div",null,r.a.createElement(m.a,null,t.created_at.split(" ").slice(0,4).join(" "))))}var j=a(112),k=a(111),y=a(109),w=a(110),C=a(108),S=a(107),x=r.a.forwardRef((function(e,t){return r.a.createElement(S.a,Object.assign({direction:"up",ref:t},e))}));function O(e){var t=e.job,a=e.open,n=e.handleClose;return t.title?r.a.createElement("div",null,r.a.createElement(j.a,{open:a,TransitionComponent:x,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(C.a,{id:"alert-dialog-slide-title"},t.title," - ",t.company,r.a.createElement("img",{className:"detail-logo",alt:t.title,src:t.company_logo})),r.a.createElement(y.a,null,r.a.createElement(w.a,{id:"alert-dialog-slide-description",dangerouslySetInnerHTML:{__html:t.description}})),r.a.createElement(k.a,null,r.a.createElement(p.a,{onClick:n,color:"primary"},"Close"),r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.a,{color:"primary"},"Apply"))))):r.a.createElement("div",null)}function B(e){var t=e.jobs,a=r.a.useState(0),n=Object(s.a)(a,2),l=n[0],o=n[1],c=t.length,i=Math.ceil(c/10),u=t.slice(10*l,10*l+10),E=r.a.useState(!1),h=Object(s.a)(E,2),b=h[0],j=h[1],k=r.a.useState({}),y=Object(s.a)(k,2),w=y[0],C=y[1];return r.a.createElement("div",{className:"jobs"},r.a.createElement(O,{open:b,job:w,handleClose:function(){j(!1)}}),r.a.createElement(m.a,{variant:"h4",component:"h1"},"Remote Software Jobs"),r.a.createElement(m.a,{variant:"h6",component:"h2"},"Found ",c," Jobs"),u.map((function(e,t){return r.a.createElement(g,{job:e,key:t,onClick:function(){j(!0),C(e)}})})),r.a.createElement("div",null,"Page ",l+1," of ",i),r.a.createElement(d.a,{variant:"progress",steps:i,position:"static",activeStep:l,nextButton:r.a.createElement(p.a,{size:"small",onClick:function(){o((function(e){return e+1}))},disabled:l===i-1},"Next",r.a.createElement(v.a,null)),backButton:r.a.createElement(p.a,{size:"small",onClick:function(){o((function(e){return e-1}))},disabled:0===l},r.a.createElement(f.a,null),"Back")}))}var N=a(52),_=a.n(N);function J(){return(J=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()("http://localhost:8080/jobs");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=r.a.useState([]),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){!function(e){J.apply(this,arguments)}(n)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(B,{jobs:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.d20d246d.chunk.js.map