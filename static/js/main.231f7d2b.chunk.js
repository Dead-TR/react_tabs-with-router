(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(14),s=a.n(r),c=a(6),l=a(1),o=(a(21),function(e){var t=e.tabs,a=Object(l.e)(),i=t.find((function(e){return e.id===a.id}));return n.a.createElement("div",{className:"tab-content"},i.content)}),m=[{id:"tab-1",title:"Tab 1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam aliquam non! A distinctio quam enim asperiores odio. Laudantium, beatae necessitatibus. Commodi aperiam tenetur voluptatem!"},{id:"tab-2",title:"Tab 2",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quidem necessitatibus sint, omnis nam rem."},{id:"tab-3",title:"Tab 3",content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fugit, officia, quis consequuntur repellat provident, nisi reprehenderit aliquam vel blanditiis deleniti nobis eveniet quod pariatur sequi repudiandae? Eligendi molestias possimus est in tempore repellat earum atque blanditiis nisi!"}],u=function(){return n.a.createElement("div",{className:"tab"},m.map((function(e){return n.a.createElement(c.b,{to:"/tabs/".concat(e.id),exact:!0,key:e.id,className:"tab-item",activeClassName:"tab__active"},e.title)})),n.a.createElement(l.a,{path:"/tabs/:id",render:function(){return n.a.createElement(o,{tabs:m})}}))},d=function(){return n.a.createElement("h2",null,"Home Page")},b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Tabs with router"),n.a.createElement("div",{className:"general"},n.a.createElement(c.b,{to:"/",exact:!0,className:"general-item",activeClassName:"general__active"},"Home"),n.a.createElement(c.b,{to:"/tabs/",exact:!0,className:"general-item",activeClassName:"general__active"},"Tabs")),n.a.createElement(l.a,{exact:!0,path:"/",component:d}),n.a.createElement(l.a,{exact:!0,path:"/tabs/:id?",component:u}))};s.a.render(n.a.createElement(c.a,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.231f7d2b.chunk.js.map