(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},118:function(e){e.exports=[{id:1,title:"Chickpea Salad",url:"/assets/image/chickpea.png"},{id:2,title:"Potato R\xf6stis",url:"/assets/image/rostis.png"},{id:3,title:"Tabbouleh",url:"/assets/image/tabbouleh.png",details:{1:""}}]},122:function(e,t,a){e.exports=a(266)},129:function(e,t,a){},16:function(e){e.exports=[{id:1,title:"Bendable chopping board",url:"./table-images/table_1.png"},{id:2,title:"Knife, Peeler",url:"./table-images/table_2.png"},{id:3,title:"Grater with container",url:"./table-images/table_3.png"},{id:4,title:"Small serving bowls",url:"./table-images/table_4.png"},{id:5,title:"Large serving bowl, Set of measutring cups",url:"./table-images/table_5.png"},{id:6,title:"Soup, Ladle, Turner, Spoon",url:"./table-images/table_6.png"},{id:7,title:"Olive oil, kitchen towel, hand gel, salt & pepper ",url:"./table-images/table_7.png"},{id:8,title:"Pack of blasters",url:"./table-images/table_8.png"}]},266:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),o=a.n(i),l=(a(127),a(129),a(268)),s=a(270),c=a(269),u=a(11),d=a(12),m=a(14),p=a(13),h=a(15),b=a(4),g=a(16),v=function(e){return g.map(function(t,a){return r.a.createElement(b.a,{onClick:function(){return e.setCurrentStep(e.visitToStep||t.id)},value:t.id,className:(n=t.id,i=e.currentStep,n>=i?"active-class info":n<i?"completed-class info":void 0),disabled:t.id>e.currentStep,key:a},t.id);var n,i})},f=function(e){return r.a.createElement("div",{className:"next-container"},r.a.createElement(b.a,{className:"next-button primary",onClick:function(){return e.handleNextClick(e.currentStep)},disabled:e.currentStep>=g.length},"Next"))},E=function(e){return r.a.createElement("div",{className:"previous-container"},r.a.createElement(b.a,{className:"previous-button primary",onClick:function(){return e.handlePreviousClick(e.currentStep)},disabled:e.currentStep<=1},"Previous"))},x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).setCurrentStep=function(e){a.setState({visitToStep:e,appear:!a.state.appear,fadeIn:a.state.fadeIn})},a.handleNextClick=function(e){var t=e<g.length?e+1:e=g.length;a.setState({currentStep:t,visitToStep:void 0})},a.handlePreviousClick=function(e){var t=e>1?e-1:e=1;a.setState({currentStep:t,visitToStep:void 0})},a.state={currentStep:1,fadeIn:!0,appear:!1,visitToStep:void 0},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=g.filter(function(t){return t.id===(e.state.visitToStep||e.state.currentStep)});return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Table setup"),r.a.createElement(v,{setCurrentStep:this.setCurrentStep,currentStep:this.state.currentStep,visitToStep:this.visitToStep}),r.a.createElement("div",{className:"middle"},r.a.createElement(E,{currentStep:this.state.currentStep,handlePreviousClick:this.handlePreviousClick}),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{className:"picture",src:t[0].url,alt:t[0].title})),r.a.createElement(f,{handleNextClick:this.handleNextClick,currentStep:this.state.currentStep})),r.a.createElement("h1",null,t[0].title))}}]),t}(n.Component),S=a(7),w=a(35),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(S.a)(Object(S.a)(a))),a.previous=a.previous.bind(Object(S.a)(Object(S.a)(a))),a.goToIndex=a.goToIndex.bind(Object(S.a)(Object(S.a)(a))),a.onExiting=a.onExiting.bind(Object(S.a)(Object(S.a)(a))),a.onExited=a.onExited.bind(Object(S.a)(Object(S.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===w.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?w.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=w.map(function(t){return r.a.createElement(b.h,{className:"custom-tag",tag:"div",key:t.id,onExiting:e.onExiting,onExited:e.onExited},r.a.createElement(b.e,{className:"text-white",captionText:t.caption,captionHeader:t.altText}))});return r.a.createElement("div",null,r.a.createElement("style",null,".custom-tag {\n                max-width: 100%;\n                height: 500px;\n                background: green;\n              }"),r.a.createElement(b.d,{activeIndex:t,next:this.next,previous:this.previous},r.a.createElement(b.g,{items:w,activeIndex:t,onClickHandler:this.goToIndex}),a,r.a.createElement(b.f,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(b.f,{direction:"next",directionText:"Next",onClickHandler:this.next})))}}]),t}(n.Component),y=a(118),j=a(267),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={recipeSelected:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=y.filter(function(e){return e.id});return!0===this.state.recipeSelected?r.a.createElement(k,null):r.a.createElement("div",null,r.a.createElement(b.j,null,r.a.createElement(b.i,{sm:"4"},r.a.createElement(b.b,{top:!0,width:"100%",src:t[0].url}),r.a.createElement("button",{onClick:function(){return e.setState({recipeSelected:!0})}},t[0].title)),r.a.createElement(b.i,{sm:"4"},r.a.createElement(b.b,{top:!0,width:"100%",src:t[1].url})),r.a.createElement(j.a,{to:"recipe"},t[1].title),r.a.createElement(b.i,{sm:"4"},r.a.createElement(b.b,{top:!0,width:"100%",src:t[2].url})),r.a.createElement(b.c,{href:"#"},t[2].title)))}}]),t}(n.Component),T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Cleaning up page!"))},O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={mainStep:0},a.setStepTo1=function(){return a.setState({mainStep:1})},a.setStepTo2=function(){return a.setState({mainStep:2})},a.setStepTo3=function(){return a.setState({mainStep:3})},a.currentComponent=function(e){switch(a.state.mainStep){case 1:return r.a.createElement(x,null);case 2:return r.a.createElement(N,null);case 3:return r.a.createElement(T,null);default:return r.a.createElement("h1",null," We are ready to get started ... Say something ")}},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Cook and Eat Ritual!"),this.currentComponent(this.state.mainStep),r.a.createElement(b.a,{onClick:this.setStepTo1,className:1===this.state.mainStep?"active-class":null}," ","Table setup startingn..."," "),r.a.createElement(b.a,{onClick:this.setStepTo2,className:2===this.state.mainStep?"active-class":null}," ","Recipe preparation startingn..."," "),r.a.createElement(b.a,{onClick:this.setStepTo3,className:3===this.state.mainStep?"active-class":null},"Cleaning up startingn..."))}}]),t}(n.Component),C=a(36),I=a(49),P=a(67),W=(a(116),Object(C.c)({mapPropsToValues:function(e){return{userName:e.userName||"",password:e.password||"",handleLogin:e.handleLogin}},validationSchema:I.object().shape({userName:I.string().min(2,"your user name should be longer").required("required."),password:I.string().min(3,"your password should be longer").required("required.")}),handleSubmit:function(e,t){var a=e.handleLogin,n=e.userName,r=e.password,i=t.setSubmitting,o=t.resetForm,l=t.setErrors;setTimeout(function(){P.some(function(e){var t=e.user,a=e.password;return t===n&&a===r})?(a(),o()):l({errorMessage:"please enter a valid user name or password!"}),i(!1)},1e3)}})(function(e){return r.a.createElement("div",{className:"formWrapper"},r.a.createElement(C.b,null,r.a.createElement("div",null,e.touched.userName&&e.errors.userName&&r.a.createElement("div",{className:"input-feedback"},e.errors.userName)||e.errors.errorMessage&&r.a.createElement("div",{className:"input-feedback"},e.errors.errorMessage),r.a.createElement(C.a,{type:"text",name:"userName",placeholder:"User Name",onBlur:e.handleBlur,className:e.touched.userName&&e.errors.userName?"text-input error":"text-input"})),r.a.createElement("div",null,e.touched.password&&e.errors.password&&r.a.createElement("div",{className:"input-feedback"},e.errors.password),r.a.createElement(C.a,{type:"password",name:"password",placeholder:"password",onBlur:e.handleBlur,className:e.touched.password&&e.errors.password?"text-input error":"text-input"})),r.a.createElement("button",{type:"button",className:"outline",onClick:e.handleReset,disabled:!e.dirty},"Reset"),r.a.createElement("button",{type:"submit",disabled:e.isSubmitting},"submit")))})),L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},a.handleLogin=function(){a.setState({isLoggedIn:!0})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.isLoggedIn?r.a.createElement(O,null):r.a.createElement("div",{className:"App"},r.a.createElement(W,{handleLogin:this.handleLogin}))}}]),t}(n.Component),_=function(){return r.a.createElement("div",null,"404 - ",r.a.createElement(j.a,{to:"/"}," go to home "))},A=function(){return r.a.createElement("header",{className:"bg-color-header"},r.a.createElement("h1",null,"Header goes here!"))},B=function(){return r.a.createElement("footer",{className:"bg-color-footer"},r.a.createElement("h1",null,"Footer goes here!"))},Q=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(s.a,null,r.a.createElement(c.a,{path:"/",component:L,exact:!0}),r.a.createElement(c.a,{path:"/dashboard",component:L}),r.a.createElement(c.a,{component:_})),r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e){e.exports=[{altText:" Step 1: Peel and finely slice the red onion. Add to bowl. ",caption:"Question 1: Peel and finely slice the red onion. Add to bowl. What is your favourite memory of the place you were born?"},{altText:"Step 2: Peel and grate an onion into the same bowl.",caption:"Question 2: What was your favourite meal ever, and why?"},{altText:"Step 3: Squeeze the mixture in your hands to remove as much moisture as possible, placing the dry mixture in the blue plastic grater bowl. Switch on the griddle with caution.",caption:"Question 3: What was the best thing that happened to you in the last week?"},{altText:"Step 4: Return the dry mixture to the metal mixing bowl, then mix in 2 tablespoons of flour and 1 egg. Season with salt, pepper or herbs",caption:"Question 4: What are you are looking forward to next week?"},{altText:"Step 5: (Add 2 tbsp oil to the hot griddle and divide the mixture into equal portions.)",caption:"Question 5: What are your strengths now, and is there one strength or skill you'd like to develop in the next year?"},{altText:"Step 6: (Place one portion of grated potato on the hot griddle, and press down gently using the back of a spatula. Fry the rostis for 3-4 minutes on both sides. However, please don't use metal cutlery, it scratches the griddle.",caption:"Question 6: In the next month, how will you use your strengths and start learning a new skill?"},{altText:"Step 7: Slice an avocado in half, take out the seed, and cut the 2 halves into slices. Then turn over the rostis and cook the other side for about 10 mins. After 5 mins you can turn off the head and put on the lid. While we wait, please can one pair clean the table while the rest of us wash and dry the kit to go back in the box for next time. Thanks!",caption:"Question 7: In the next 2 weeks, would you like any help or encouragement using your strengths to develop new skills?"},{altText:"Final Step: When everything is cleaned up and back in the box, you're ready to enjoy your meal / ride your bike etc).",caption:"Thanks for leading the table assigned to you!"}]},67:function(e){e.exports=[{user:"raj",password:"test"},{user:"hasanein",password:"test"},{user:"elias",password:"test"}]}},[[122,2,1]]]);
//# sourceMappingURL=main.c81a84ff.chunk.js.map