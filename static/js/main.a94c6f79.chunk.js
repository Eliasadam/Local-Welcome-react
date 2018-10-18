(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{id:1,title:"Bendable chopping board",url:"./table-images/table_1.png"},{id:2,title:"Knife, Peeler",url:"./table-images/table_2.png"},{id:3,title:"Grater with container",url:"./table-images/table_3.png"},{id:4,title:"Small serving bowls",url:"./table-images/table_4.png"},{id:5,title:"Large serving bowl, Set of measutring cups",url:"./table-images/table_5.png"},{id:6,title:"Soup, Ladle, Turner, Spoon",url:"./table-images/table_6.png"},{id:7,title:"Olive oil, kitchen towel, hand gel, salt & pepper ",url:"./table-images/table_7.png"},{id:8,title:"Pack of blasters",url:"./table-images/table_8.png"}]},113:function(e,t,a){},119:function(e,t,a){e.exports=a(263)},126:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),s=a.n(l),i=(a(124),a(126),a(265)),o=a(267),c=a(266),u=a(24),m=a(25),p=a(27),d=a(26),h=a(28),g=a(9),b=a(10),v=function(e){return b.map(function(t,a){return r.a.createElement(g.a,{onClick:function(){return e.setCurrentStep(e.visitToStep||t.id)},value:t.id,className:(n=t.id,l=e.currentStep,n>=l?"active-class info":n<l?"completed-class info":void 0),disabled:t.id>e.currentStep,key:a},t.id);var n,l})},f=function(e){return r.a.createElement("div",{className:"next-container"},r.a.createElement(g.a,{className:"next-button primary",onClick:function(){return e.handleNextClick(e.currentStep)},disabled:e.currentStep>=b.length},"Next"))},E=function(e){return r.a.createElement("div",{className:"previous-container"},r.a.createElement(g.a,{className:"previous-button primary",onClick:function(){return e.handlePreviousClick(e.currentStep)},disabled:e.currentStep<=1},"Previous"))},S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setCurrentStep=function(e){a.setState({visitToStep:e,appear:!a.state.appear,fadeIn:a.state.fadeIn})},a.handleNextClick=function(e){var t=e<b.length?e+1:e=b.length;a.setState({currentStep:t,visitToStep:void 0})},a.handlePreviousClick=function(e){var t=e>1?e-1:e=1;a.setState({currentStep:t,visitToStep:void 0})},a.state={currentStep:1,fadeIn:!0,appear:!1,visitToStep:void 0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=b.filter(function(t){return t.id===(e.state.visitToStep||e.state.currentStep)});return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Table setup"),r.a.createElement(v,{setCurrentStep:this.setCurrentStep,currentStep:this.state.currentStep,visitToStep:this.visitToStep}),r.a.createElement("div",{className:"middle"},r.a.createElement(E,{currentStep:this.state.currentStep,handlePreviousClick:this.handlePreviousClick}),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{className:"picture",src:t[0].url,alt:t[0].title})),r.a.createElement(f,{handleNextClick:this.handleNextClick,currentStep:this.state.currentStep})),r.a.createElement("h1",null,t[0].title))}}]),t}(n.Component),w=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Recipe preparation page!"))},N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Cleaning up page!"))},k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={mainStep:0},a.setStepTo1=function(){return a.setState({mainStep:1})},a.setStepTo2=function(){return a.setState({mainStep:2})},a.setStepTo3=function(){return a.setState({mainStep:3})},a.currentComponent=function(e){switch(a.state.mainStep){case 1:return r.a.createElement(S,null);case 2:return r.a.createElement(w,null);case 3:return r.a.createElement(N,null);default:return r.a.createElement("h1",null," We are ready to get started ... Say something ")}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Cook and Eat Ritual!"),this.currentComponent(this.state.mainStep),r.a.createElement(g.a,{onClick:this.setStepTo1,className:1===this.state.mainStep?"active-class":null}," ","Table setup startingn..."," "),r.a.createElement(g.a,{onClick:this.setStepTo2,className:2===this.state.mainStep?"active-class":null}," ","Recipe preparation startingn..."," "),r.a.createElement(g.a,{onClick:this.setStepTo3,className:3===this.state.mainStep?"active-class":null},"Cleaning up startingn..."))}}]),t}(n.Component),C=a(34),y=a(47),T=a(65),j=(a(113),Object(C.c)({mapPropsToValues:function(e){return{userName:e.userName||"",password:e.password||"",handleLogin:e.handleLogin}},validationSchema:y.object().shape({userName:y.string().min(2,"your user name should be longer").required("required."),password:y.string().min(3,"your password should be longer").required("required.")}),handleSubmit:function(e,t){var a=e.handleLogin,n=e.userName,r=e.password,l=t.setSubmitting,s=t.resetForm,i=t.setErrors;setTimeout(function(){T.some(function(e){var t=e.user,a=e.password;return t===n&&a===r})?(a(),s()):i({errorMessage:"please enter a valid user name or password!"}),l(!1)},1e3)}})(function(e){return r.a.createElement("div",{className:"formWrapper"},r.a.createElement(C.b,null,r.a.createElement("div",null,e.touched.userName&&e.errors.userName&&r.a.createElement("div",{className:"input-feedback"},e.errors.userName)||e.errors.errorMessage&&r.a.createElement("div",{className:"input-feedback"},e.errors.errorMessage),r.a.createElement(C.a,{type:"text",name:"userName",placeholder:"User Name",onBlur:e.handleBlur,className:e.errors.userName&&e.touched.userName?"text-input error":"text-input"})),r.a.createElement("div",null,e.touched.password&&e.errors.password&&r.a.createElement("div",{className:"input-feedback"},e.errors.password),r.a.createElement(C.a,{type:"password",name:"password",placeholder:"password",onBlur:e.handleBlur,className:e.errors.password&&e.touched.password?"text-input error":"text-input"})),r.a.createElement("button",{type:"button",className:"outline",onClick:e.handleReset,disabled:!e.dirty},"Reset"),r.a.createElement("button",{type:"submit",disabled:e.isSubmitting},"submit")))})),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},a.handleLogin=function(){a.setState({isLoggedIn:!0})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.isLoggedIn?r.a.createElement(k,null):r.a.createElement("div",{className:"App"},r.a.createElement(j,{handleLogin:this.handleLogin}))}}]),t}(n.Component),x=a(264),L=function(){return r.a.createElement("div",null,"404 - ",r.a.createElement(x.a,{to:"/"}," go to home "))},P=function(){return r.a.createElement("header",{className:"bg-color-header"},r.a.createElement("h1",null,"Header goes here!"))},W=function(){return r.a.createElement("footer",{className:"bg-color-footer"},r.a.createElement("h1",null,"Footer goes here!"))},_=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(o.a,null,r.a.createElement(c.a,{path:"/",component:O,exact:!0}),r.a.createElement(c.a,{path:"/dashboard",component:O}),r.a.createElement(c.a,{component:L})),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e){e.exports=[{user:"raj",password:"test"},{user:"hasanein",password:"test"},{user:"elias",password:"test"}]}},[[119,2,1]]]);
//# sourceMappingURL=main.a94c6f79.chunk.js.map