(window.webpackJsonp=window.webpackJsonp||[]).push([[17,37],{473:function(e,t,a){a.r(t);var n=a(0),r=a.n(n),l=a(498),o=a(142),c=a(502),s=a(497);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{seo:{title:"Page Not Found | Scarinci Hollenbeck",metaDescription:"Sorry, it looks this like this page no longer exists on scarincihollenbeck.com",canonicalLink:"/"}}),r.a.createElement(s.a,{title:"404: Resource Not Found",subtitle:"Sorry, the page you are looking for cannot be found.",image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg",height:"auto"}),r.a.createElement(l.a,null,r.a.createElement("p",{className:"lead"},"It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 offset-md-3"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"col-sm-12 col-md-8 mt-5 offset-md-2 off-white"},r.a.createElement("h4",{className:"proxima-bold p-3 pb-0 mb-0 text-center"},"Or try visiting one of these pages on our site to narrow your search."),r.a.createElement("ul",{className:"ml-6"},r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/attorneys"),className:"u-hover h5"},"Attorneys"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/practices"),className:"u-hover h5"},"Practices"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/locations"),className:"u-hover h5"},"Locations"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-news"),className:"u-hover h5"},"Firm News"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-events"),className:"u-hover h5"},"Firm Events"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-insights"),className:"u-hover h5"},"Firm Insights")))))))))}},482:function(e,t,a){a.r(t),function(e){var n=a(61),r=a.n(n),l=a(82),o=a.n(l),c=a(57),s=a.n(c),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),y=a(39),g=a.n(y),v=a(0),E=a.n(v),N=a(502),w=(a(522),a(497)),k=a(511),S=a(518),x=a(473),C=a(735),F=a(736),P=a(737),T=a(139);function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=function(t){h()(i,t);var a,n,l,c=(a=i,function(){var e,t=g()(a);if(R()){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function i(e){var t;return s()(this,i),(t=c.call(this,e)).state={currentTitle:"",currentDescription:"",currentId:"",seo:{},show:!1,message:!1,form:{resume:{},coverLetter:{},writingSample:{},contact:[],email:"",phone:"",firstName:"",lastName:"",title:"",spinner:!1,error:!1}},t.formSubmit=t.formSubmit.bind(p()(t)),t.changeForm=t.changeForm.bind(p()(t)),t.fileUpload=t.fileUpload.bind(p()(t)),t.toggleModal=t.toggleModal.bind(p()(t)),t}return m()(i,[{key:"componentDidMount",value:(l=o()(r.a.mark((function t(){var a,n,l,o,c,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.match,n=a.params.career,t.prev=2,t.next=5,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/individual-career/career/").concat(n),{headers:T.e});case 5:return l=t.sent,t.next=8,l.json();case 8:o=t.sent,c=o.title,s=o.positionDescription,i=o.seo,this.setState({currentId:n,currentTitle:c,currentDescription:s,seo:i}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),this.setState({error:!0});case 16:case"end":return t.stop()}}),t,this,[[2,13]])}))),function(){return l.apply(this,arguments)})},{key:"changeForm",value:function(e){var t=this.state.form,a=e.target,n=a.name,r=a.value,l=t;l[n]=r,this.setState({form:l})}},{key:"fileUpload",value:function(e){var t=this,a=this.state.form,n=e.target,r=n.files,l=n.name,o=r[0],c=o.name.split(".").pop();if("odt"===c||"doc"===c||"docx"===c||"pdf"===c||"dotx"===c){var s=o.name,i=o.type,m=a,u=new FileReader;u.onload=function(e){m[l]={filename:s,content:e.target.result.split("base64,")[1],encoding:"base64",contentType:i},t.setState({form:m})},u.readAsDataURL(o)}else alert("Please upload either a Word Document or a PDF, thank you")}},{key:"formSubmit",value:(n=o()(r.a.mark((function t(){var a,n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.state.form,n={method:"post",body:JSON.stringify(a),headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=4,e("".concat("https://forms.scarincihollenbeck.com","/shlaw/site/career/form"),{headers:n});case 4:l=t.sent,200===l.json().status&&this.setState({message:!0});case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"toggleModal",value:function(){this.setState((function(e){return{show:!e.show}}))}},{key:"render",value:function(){var e=this.state,t=e.currentTitle,a=e.currentDescription,n=e.message,r=e.form,l=e.seo,o=e.show,c=e.error,s=r.firstName,i=r.lastName,m=r.email,u=r.phone;return c?E.a.createElement(x.default,null):E.a.createElement("div",{id:"single-career"},E.a.createElement(N.a,{seo:l}),E.a.createElement(w.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/blogheader.jpg",title:t,subtitle:" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."}),E.a.createElement(k.a,{body:E.a.createElement("div",null,E.a.createElement(C.a,{currentTitle:t}),E.a.createElement(F.a,{currentTitle:t,currentDescription:a,message:n,formSubmit:this.formSubmit,formChange:this.formChange,lastName:i,firstName:s,email:m,phone:u,fileUpload:this.fileUpload}),E.a.createElement(S.a,null)),sidebar:E.a.createElement(P.a,{show:o,toggleModal:this.toggleModal})}))}}]),i}(v.Component);t.default=L}.call(this,a(140))},497:function(e,t,a){var n=a(500),r=a.n(n),l=a(0),o=a.n(l),c=a(3),s=a.n(c),i=a(501),m=a(139);function u(){var e=r()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return u=function(){return e},e}function p(){var e=r()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return p=function(){return e},e}var d=function(e){var t=e.title,a=e.subtitle,n=e.image,r=e.height,l=i.a.div(p(),n,r),c=i.a.div(u());return o.a.createElement(l,{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(c,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},o.a.createElement("div",{className:"p-3"},o.a.createElement("span",{id:"red-block"}),o.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),o.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(m.b)(a)}))))))};d.propTypes={image:s.a.string,title:s.a.string,subtitle:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),height:s.a.string},d.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=d},498:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},502:function(e,t,a){var n=a(0),r=a.n(n),l=a(499),o=a(3),c=a.n(o);function s(e){var t=e.seo;return r.a.createElement(l.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "'.concat(t.title,'",\n          "description": "').concat(t.metaDescription,'",\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}s.propTypes={seo:c.a.objectOf(c.a.string)},s.defaultProps={seo:{}},t.a=s},503:function(e,t,a){(function(e){var n=a(61),r=a.n(n),l=a(82),o=a.n(l),c=a(57),s=a.n(c),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),y=a(39),g=a.n(y),v=a(0),E=a.n(v),N=a(139);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(t){h()(c,t);var a,n,l=(a=c,function(){var e,t=g()(a);if(w()){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function c(e){var t;return s()(this,c),(t=l.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(p()(t)),t.onSubmit=t.onSubmit.bind(p()(t)),t}return m()(c,[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=this.state.t;r[n]=a,this.setState({t:r})}},{key:"onSubmit",value:function(){var e,t,a,n,r,l,o=this.state.t;window.location=(t=(e=o).keyword,a=e.practice,n=e.attorney,r=e.category,l="".concat(void 0!==t?t:""," ").concat(void 0!==a?a:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(l.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:(n=o()(r.a.mark((function t(){var a,n,l,o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://api.scarincihollenbeck.com","/cached/search-options"),{headers:N.e});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,l=n.attorneys,o=n.categories,c=n.practices,this.setState({attorneys:l,categories:o,practices:c});case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.attorneys,n=t.categories,r=t.practices,l=(t.searchTerm,t.t);return E.a.createElement("div",{className:"w-100"},E.a.createElement("form",{onChange:this.onChange},E.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},E.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:l.keyword,placeholder:"Keyword...",className:"form-control p-2"}),E.a.createElement("span",{className:"sr-only"},"Search Site")),E.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},E.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by practice"},l.practice||"Filter by practice"),r.map((function(e){return E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),E.a.createElement("span",{className:"sr-only"},"Filter by Practice")),E.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},E.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by attorney"},l.attorney||"Filter by attorney"),a.map((function(e){return E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),E.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),E.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},E.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by category"},l.category||"Filter by category"),n.map((function(e){return"Uncategorized"!==e.title?E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title):""}))),E.a.createElement("span",{className:"sr-only"},"Filtery by Category")),E.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),E.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}]),c}(v.Component);t.a=k}).call(this,a(140))},511:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},t),r.a.createElement("div",{className:"col-sm-12 col-md-4"},a)))}},512:function(e,t,a){a.d(t,"a",(function(){return n}));var n=[{key:"business",label:"Business Law",name:"Business Law",property:"column_1"},{key:"firmnews",label:"Firm News",name:"Firm News",property:"column_1"},{key:"publiclaw",label:"Government & Public Law",name:"Government & Public Law",property:"column_1"},{key:"technology",label:"Technology",name:"Technology",property:"column_1"},{key:"tax",label:"Tax",name:"Tax",property:"column_1"},{key:"firmevents",label:"Firm Events",name:"Firm Events",property:"column_1"},{key:"cannabis",label:"Cannabis Law",name:"Cannabis Law",property:"column_1"},{key:"commercialRealEstate",label:"Commercial Real Estate",name:"Commercial Real Estate",property:"column_two"},{key:"covid19Alert",label:"Covid-19 Alert",name:"Covid-19 Alert",property:"column_two"},{key:"cyberSecurityDataPrivacy",label:"Cyber Security & Data Privacy",name:"Cyber Security & Data Privacy",property:"column_two"},{key:"entertainmentSports",label:"Entertainment & Sports",name:"Entertainment & Sports",property:"column_two"},{key:"environmentalLaw",label:"Environmental Law",name:"Environmental Law",property:"column_two"},{key:"intellectualProperty",label:"Intellectual Property",name:"Intellectual Property",property:"column_two"},{key:"laboremployment",label:"Labor Employment",name:"Labor Employment",property:"column_two"},{key:"litigation",label:"Litigation",name:"Litigation",property:"column_two"}]},518:function(e,t,a){(function(e){var n=a(61),r=a.n(n),l=a(82),o=a.n(l),c=a(57),s=a.n(c),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),y=a(39),g=a.n(y),v=a(0),E=a.n(v);function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(t){h()(c,t);var a,n,l=(a=c,function(){var e,t=g()(a);if(N()){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function c(e){var t;return s()(this,c),(t=l.call(this,e)).state={firstName:"",lastName:"",email:"",phone:"",subject:"",message:"",successMessage:!1,disabled:!1},t.onFormChange=t.onFormChange.bind(p()(t)),t.onFormSubmit=t.onFormSubmit.bind(p()(t)),t}return m()(c,[{key:"onFormChange",value:function(e){var t=e.target,a=t.name,n=t.value;"firstName"===a&&this.setState({firstName:n}),"lastName"===a&&this.setState({lastName:n}),"email"===a&&this.setState({email:n}),"phone"===a&&this.setState({phone:n}),"subject"===a&&this.setState({subject:n}),"message"===a&&this.setState({message:n})}},{key:"onFormSubmit",value:(n=o()(r.a.mark((function t(a){var n,l,o,c,s,i,m,u,p,d,h,f;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=this.state,l=n.firstName,o=n.lastName,c=n.email,s=n.phone,i=n.subject,m=n.message,u=document.querySelector("h1.text-white.proxima-bold").innerText,p=window.location.href,d={firstName:l,lastName:o,email:c,phone:s,subject:i,message:m,pageTitle:u,siteUrl:p},h={method:"post",body:JSON.stringify(d),headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=8,e("".concat("https://forms.scarincihollenbeck.com","/shlaw/site/contact/form"),h);case 8:return f=t.sent,t.next=11,f.status;case 11:200===t.sent&&this.setState({successMessage:!0,disabled:!0});case 13:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.phone,l=e.subject,o=e.message,c=e.successMessage,s=e.disabled;return E.a.createElement("form",{className:"mt--1 mb-3",onSubmit:this.onFormSubmit,method:"post"},E.a.createElement("div",{className:"form-row"},E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"firstName",className:"sr-only"},"First name"),E.a.createElement("input",{type:"text",className:"form-control",name:"firstName",onChange:this.onFormChange,id:"firstName",placeholder:"First name",value:t,required:!0})),E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"lastName",className:"sr-only"},"Last name"),E.a.createElement("input",{type:"text",className:"form-control",name:"lastName",onChange:this.onFormChange,id:"lastName",placeholder:"Last name",value:a,required:!0})),E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email"),E.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:this.onFormChange,id:"email",placeholder:"Email",value:n,required:!0})),E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"phone",className:"sr-only"},"Phone"),E.a.createElement("input",{type:"tel",className:"form-control",name:"phone",onChange:this.onFormChange,id:"phone",placeholder:"Phone",value:r,required:!0})),E.a.createElement("div",{className:"col-sm-12 mb-3"},E.a.createElement("label",{htmlFor:"subject",className:"sr-only"},"Subject"),E.a.createElement("input",{type:"text",className:"form-control",name:"subject",onChange:this.onFormChange,id:"subject",placeholder:"Subject",value:l,required:!0})),E.a.createElement("div",{className:"col-sm-12 mb-3"},E.a.createElement("label",{htmlFor:"message",className:"sr-only"},"message"),E.a.createElement("textarea",{rows:"6",className:"form-control",name:"message",onChange:this.onFormChange,id:"message",placeholder:"Message",value:o,required:!0}))),E.a.createElement("div",{className:"col-sm-12"},E.a.createElement("p",{className:"small-excerpt ml--1"},"The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form."),E.a.createElement("label",{htmlFor:"disclaimer",className:"mt-3 disclaimer"},E.a.createElement("input",{type:"checkbox",className:"form-control",id:"disclaimer",name:"disclaimer",required:!0}),E.a.createElement("span",{className:"text-muted"},"* I have read the disclaimer"))),E.a.createElement("input",{type:"submit",className:"ml-2 w-25 mt-2 btn btn-danger",disabled:s,value:"Submit"}),c?E.a.createElement("p",{className:"text-success m-2 proxima-bold"},"Thank you for your inquiry one of our representative will reach out to you shortly!"):"")}}]),c}(v.Component);t.a=w}).call(this,a(140))},522:function(e,t,a){var n=a(57),r=a.n(n),l=a(58),o=a.n(l),c=a(59),s=a.n(c),i=a(60),m=a.n(i),u=a(39),p=a.n(u),d=a(0),h=a.n(d),f=a(473);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=function(e){s()(n,e);var t,a=(t=n,function(){var e,a=p()(t);if(b()){var n=p()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return m()(this,e)});function n(e){var t;return r()(this,n),(t=a.call(this,e)).state={error:null,errorInfo:null},t}return o()(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state.error,t=this.props.children;return e?h.a.createElement(f.default,null):t}}]),n}(d.Component);t.a=y},529:function(e,t,a){var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=a(544);function s(e){var t=e.show,a=e.toggleModal;return r.a.createElement("div",{className:"w-100 mt-4"},r.a.createElement("div",{className:"sidebar-title"},"Get the latest from our attorneys!"),r.a.createElement("div",{className:"off-white mh-375"},r.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png",alt:"Subscribe Scarinci Hollenbeck attorneys",className:"mx-auto d-block py-4 w-50"}),r.a.createElement("p",{className:"proxima-bold text-center px-3"},"Please fill out our short form to get the latest articles from the Scarinci Hollenbeck attorneys weekly on the cutting-edge legal topics."),r.a.createElement("button",{type:"button",onClick:function(){return a()},className:"mx-auto p-2 d-block btn-danger w-50 text-center border-r-5 mb-3","data-toggle":"modal","data-target":"#subscriptionModal"},"Subscribe Now!"),r.a.createElement("div",{className:t?"modal fade show":"modal fade",id:"subscriptionModal",tabIndex:"-1",role:"dialog","aria-labelledby":"subscriptionModalLabel","aria-hidden":"true"},r.a.createElement(c.a,null))))}s.propTypes={show:o.a.bool,toggleModal:o.a.func},s.defaultProps={show:!1,toggleModal:function(){}},t.a=s},544:function(e,t,a){(function(e){var n=a(61),r=a.n(n),l=a(82),o=a.n(l),c=a(517),s=a.n(c),i=a(57),m=a.n(i),u=a(58),p=a.n(u),d=a(83),h=a.n(d),f=a(59),b=a.n(f),y=a(60),g=a.n(y),v=a(39),E=a.n(v),N=a(0),w=a.n(N),k=a(3),S=a.n(k),x=a(512);function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(e){var t=e.property,a=e.name,n=e.onChange;return w.a.createElement("input",{type:"checkbox",property:t,name:a,onChange:n})},P=function(t){b()(c,t);var a,n,l=(a=c,function(){var e,t=E()(a);if(C()){var n=E()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g()(this,e)});function c(e){var t;return m()(this,c),(t=l.call(this,e)).state={email:"",firstName:"",lastName:"",categories:[],message:!1,disabled:!1},t.handleChange=t.handleChange.bind(h()(t)),t.handleSubmit=t.handleSubmit.bind(h()(t)),t.handleCategoryChange=t.handleCategoryChange.bind(h()(t)),t.hideSubscription=t.hideSubscription.bind(h()(t)),t}return p()(c,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;"firstName"===a&&this.setState({firstName:n}),"lastName"===a&&this.setState({lastName:n}),"email"===a&&this.setState({email:n})}},{key:"handleCategoryChange",value:function(e){var t=this.state.categories,a=e.target.name,n=e.target.getAttribute("property"),r=e.target.checked;!0===r&&this.setState({categories:[].concat(s()(t),[{property:n,value:a}])}),!1===r&&this.setState({categories:t.filter((function(e){return e.value!==a}))})}},{key:"handleSubmit",value:(n=o()(r.a.mark((function t(a){var n,l,o,c,s,i,m,u,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=this.state,l=n.firstName,o=n.lastName,c=n.email,s=n.categories,i=s.map((function(e){return e.value})),m={firstName:l,lastName:o,email:c,categoryValues:i,siteUrl:window.location.href},u={method:"post",body:JSON.stringify(m),headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=7,e("".concat("https://forms.scarincihollenbeck.com","/shlaw/site/subscription/form"),u);case 7:return p=t.sent,t.next=10,p.status;case 10:200===t.sent&&this.setState({message:!0,disabled:!0});case 12:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"hideSubscription",value:function(){var e=document.getElementById("subscriptionModal");e.classList.remove("show"),e.setAttribute("style","display:none"),document.querySelector(".modal-backdrop").setAttribute("style","display:none")}},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.message,r=t.lastName,l=t.firstName,o=t.disabled;return w.a.createElement("div",{className:"modal-dialog sub-form",id:"subscription-form",role:"document"},w.a.createElement("div",{className:"modal-content"},w.a.createElement("div",{className:"modal-header sidebar-title d-flex flex-row"},w.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png",alt:"Scarinci hollenbeck diamond",className:"w-15"}),w.a.createElement("h5",{id:"subscriptionModalLabel",className:"mt-2"},"Sign up to get the latest from the Scarinci Hollenbeck attorneys!")),w.a.createElement("div",{className:"modal-body"},w.a.createElement("button",{type:"button",onClick:function(){return e.hideSubscription()},className:"btn proxima-bold float-right mb-2 mt-0 btn-secondary","data-dismiss":"modal"},"Close"),w.a.createElement("form",{onSubmit:this.handleSubmit,method:"post",className:"mt-3"},w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"firstName",className:"sr-only"}," Email:"),w.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:l,onChange:this.handleChange,className:"form-control","aria-describedby":"firstName",placeholder:"Enter first name"})),w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"lastName",className:"sr-only"}," last Name:"),w.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:r,onChange:this.handleChange,className:"form-control","aria-describedby":"lastName",placeholder:"Enter last name"})),w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"email",className:"sr-only"}," Email:"),w.a.createElement("input",{id:"email",name:"email",type:"text",value:a,onChange:this.handleChange,className:"form-control","aria-describedby":"email",placeholder:"Enter email",required:!0})),w.a.createElement("div",{className:"form-group mb-0"},w.a.createElement("p",{className:"small-excerpt"},"Please select a category(s) below:")),w.a.createElement("ul",{className:"no-dots two-column"},x.a.map((function(t){return w.a.createElement("li",{key:t.key},w.a.createElement("label",{htmlFor:t.name},w.a.createElement(F,{id:t.name,className:"d-block",name:t.name,property:t.property,onChange:e.handleCategoryChange})," ",t.name))}))),w.a.createElement("div",{className:"modal-footer"},n&&w.a.createElement("p",{className:"text-success proxima-bold mx-auto"},"Thank you for subscribing!"),w.a.createElement("button",{type:"button",onClick:function(){return e.hideSubscription()},className:"btn btn-secondary proxima-bold","data-dismiss":"modal"},"Close"),w.a.createElement("input",{type:"submit",className:"btn btn-danger",disabled:o,value:"Submit"}))))))}}]),c}(N.Component);F.propTypes={property:S.a.string,name:S.a.string,onChange:S.a.func},F.defaultProps={property:"",name:"",onChange:function(){}},P.propTypes={hideSubscription:S.a.func},P.defaultProps={hideSubscription:function(){}},t.a=P}).call(this,a(140))},735:function(e,t,a){var n=a(0),r=a.n(n),l=a(104),o=a(505),c=a(3),s=a.n(c);function i(e){var t=e.currentTitle;return r.a.createElement("h6",null,r.a.createElement("span",null,r.a.createElement("a",{href:"".concat(window.location.origin),className:"red-title proxima-bold"},"HOME")),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(l.a,{icon:o.faCaretRight,className:"red-title"})),r.a.createElement("span",null,r.a.createElement("a",{href:"".concat(window.location.origin,"/careers"),className:"red-title proxima-bold"},"CAREERS")),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(l.a,{icon:o.faCaretRight,className:"red-title"})),r.a.createElement("span",null,r.a.createElement("a",{href:"".concat(window.location.href),className:"red-title proxima-bold text-uppercase"},t)))}i.propTypes={currentTitle:s.a.string},i.defaultProps={currentTitle:""},t.a=i},736:function(e,t,a){var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=a(139);function s(e){var t=e.currentTitle,a=e.currentDescription,n=e.firstName,l=e.lastName,o=e.email,s=e.changeForm,i=e.phone,m=e.fileUpload,u=e.formSubmit,p=e.message;return r.a.createElement("div",null,r.a.createElement("div",{className:"p-2 mt-3 bg-light-gray w-100"},r.a.createElement("h4",{className:"mt-1 mb-0 w-75"},t)),r.a.createElement("div",{className:"w-100",dangerouslySetInnerHTML:Object(c.b)(a)}),r.a.createElement("div",{className:"w-100 border"},p?r.a.createElement("p",{className:"text-success mx-3 mt-3"},"Great, thank you for applying! One of our representatives will be in contact shortly."):"",r.a.createElement("form",{method:"post",className:"mt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("p",{className:"text-muted"},"Please fill out the form below to apply for this position.")),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"firstName",className:"w-100"},r.a.createElement("input",{type:"text",id:"firstName",name:"firstName",className:"form-control","aria-describedby":"firstName",value:n||"First name",placeholder:"First name",onChange:s}),r.a.createElement("span",{className:"sr-only"},"First Name"))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"lastName",className:"w-100"},r.a.createElement("input",{type:"text",id:"lastName",name:"lastName",className:"form-control","aria-describedby":"lastName",value:l||"Last name",placeholder:"Last name",onChange:s}),r.a.createElement("span",{className:"sr-only"},"Last Name")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"email",className:"w-100"},r.a.createElement("input",{type:"email",id:"email",name:"email",className:"form-control","aria-describedby":"email",value:o||"Email",placeholder:"Email",onChange:s}),r.a.createElement("span",{className:"sr-only"},"Email"))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"phone",className:"w-100"},r.a.createElement("input",{type:"tel",id:"phone",name:"phone",className:"form-control","aria-describedby":"phone",value:i||"Phone",placeholder:"Phone",onChange:s}),r.a.createElement("span",{className:"sr-only"},"Phone")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"resume",className:"w-100"},"Resume:",r.a.createElement("input",{type:"file",id:"resume",name:"resume",className:"form-control","aria-describedby":"resume",onChange:m}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"coverLetter",className:"w-100"},"Cover Letter:",r.a.createElement("input",{type:"file",id:"coverLetter",name:"coverLetter",className:"form-control","aria-describedby":"coverLetter",onChange:m})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("label",{htmlFor:"writingSample",className:"w-100 mt-2"},"Writing Samples/Additional Information:",r.a.createElement("input",{type:"file",id:"writingSample",name:"writingSample",className:"form-control","aria-describedby":"writingSample",onChange:m})))))),r.a.createElement("button",{type:"button",className:"btn ml-3 w-25 btn-danger my-4",onClick:function(){return u()},onKeyPress:function(){return u()}},"Apply Now!")))}s.propTypes={currentTitle:o.a.string,currentDescription:o.a.string,firstName:o.a.string,lastName:o.a.string,email:o.a.string,changeForm:o.a.func,phone:o.a.string,fileUpload:o.a.func,formSubmit:o.a.func,message:o.a.bool},s.defaultProps={currentTitle:"",currentDescription:"",firstName:"",lastName:"",email:"",phone:"",message:!1,changeForm:function(){},fileUpload:function(){},formSubmit:function(){}},t.a=s},737:function(e,t,a){var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=a(503),s=a(529);function i(e){var t=e.show,a=e.toggleModal;return r.a.createElement("div",{className:"hide-print"},r.a.createElement(c.a,null),r.a.createElement(s.a,{show:t,toggleModal:a}))}i.propTypes={show:o.a.bool,toggleModal:o.a.func},i.defaultProps={show:!1,toggleModal:function(){}},t.a=i}}]);