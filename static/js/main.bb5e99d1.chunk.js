(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(10),i=n.n(a),r=n(2),s=n(8),c=n(3),o=n(4),m=n(6),l=n(5),u=n(1),h=n.n(u),d=(n(15),n(16),n(0)),f=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={transform:0},t.handleButtons=function(e){var n=t.props,a=n.images,i=n.step,r=n.frameSize,s=n.itemWidth,c=n.infinite,o=(a.length-r)*s;t.setState((function(t){var n="prev"===e?Math.min(t.transform+s*i,0):Math.max(t.transform-s*i,-o);return 0===n&&"prev"===e&&c?{transform:-o}:n===-o&&"next"===e&&c?{transform:0}:{transform:n}}))},t.handlePrevButton=function(){t.handleButtons("prev")},t.handleNextButton=function(){t.handleButtons("next")},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,a=t.itemWidth,i=t.animationDuration,r=t.infinite,s=this.state.transform,c=a*n,o=(e.length-n)*a;return Object(d.jsxs)("div",{className:"Carousel",style:{width:"".concat(c,"px")},children:[Object(d.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(s,"px)"),transition:"".concat(i,"ms"),gap:"1px"},children:e.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:t,alt:"emjoji-".concat(e+1),width:a,height:a})},t)}))}),Object(d.jsxs)("div",{className:"Carousel__buttons",children:[Object(d.jsx)("button",{type:"button",className:"Carousel__button",onClick:this.handlePrevButton,disabled:0===s&&!r,children:"<"}),Object(d.jsx)("button",{"data-cy":"next",type:"button",className:"Carousel__button",onClick:this.handleNextButton,disabled:s===-o&&!r,children:">"})]})]})}}]),n}(u.Component),p=(n(9),function(t){var e=t.labelText,n=t.id,a=t.name,i=t.value,r=t.min,s=t.max,c=t.step,o=t.onChange;return Object(d.jsxs)("label",{htmlFor:n,children:[e,Object(d.jsx)("input",{className:"Input",id:n,type:"number",name:a,value:i,min:r,max:s,step:c,onChange:o})]})}),j=(n(18),function(t){var e=t.itemWidth,n=t.handleChange,a=t.frameSize,i=t.step,r=t.animationDuration,s=t.images,c=t.infinite,o=t.handleInfinite;return Object(d.jsxs)("form",{className:"Form",children:[Object(d.jsx)(p,{labelText:"Item width:",id:"itemId",name:"itemWidth",value:e,min:"100",max:"200",step:"5",onChange:n}),Object(d.jsx)(p,{labelText:"Frame size:",id:"frameId",name:"frameSize",value:a,min:"1",max:"".concat(s.length),step:"1",onChange:n}),Object(d.jsx)(p,{labelText:"Step:",id:"stepId",name:"step",value:i,min:"1",max:"".concat(s.length-a),step:"1",onChange:n}),Object(d.jsx)(p,{labelText:"Animation duration:",id:"animationId",name:"animationDuration",value:r,min:"100",max:"5000",step:"100",onChange:n}),Object(d.jsxs)("label",{children:["Infinite:",Object(d.jsx)("input",{className:"Form--checkbox",type:"checkbox",name:"infinite",checked:c,onChange:o})]})]})}),b=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.handleChange=function(e){t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(r.a)({},e.target.name,Number(e.target.value)))}))},t.handleInfinite=function(){t.setState((function(t){return{infinite:!t.infinite}}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,a=t.frameSize,i=t.itemWidth,r=t.animationDuration,s=t.infinite;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(d.jsx)(f,{images:e,step:n,frameSize:a,itemWidth:i,animationDuration:r,infinite:s}),Object(d.jsx)(j,{itemWidth:i,frameSize:a,step:n,animationDuration:r,images:e,infinite:s,handleChange:this.handleChange,handleInfinite:this.handleInfinite})]})}}]),n}(h.a.Component);i.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))},9:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.bb5e99d1.chunk.js.map