(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{486:function(e,t,a){a.r(t),function(e){var n=a(61),r=a.n(n),o=a(82),c=a.n(o),s=a(57),l=a.n(s),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),g=a(39),y=a.n(g),v=a(0),E=a.n(v),N=a(503),w=a(497),k=a(512),x=a(878),S=a(749),C=a(139),P=a(498);function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(t){h()(s,t);var a,n,o=(a=s,function(){var e,t=y()(a);if(j()){var n=y()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function s(e){var t;return l()(this,s),(t=o.call(this,e)).state={title:"",content:"",date:"",posts:[],show:!1,triggerModal:!0,covidPage:!1,seo:{}},t.printScreen=t.printScreen.bind(p()(t)),t.toggleModal=t.toggleModal.bind(p()(t)),t.hideSubscription=t.hideSubscription.bind(p()(t)),t}return m()(s,[{key:"componentDidMount",value:(n=c()(r.a.mark((function t(){var a,n,o,c,s,l,i,m,u,p,d,h,f,b=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.location,n=a.pathname,t.next=4,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/single-page/page").concat(n));case 4:return o=t.sent,t.next=7,o.json();case 7:if(c=t.sent,s=c.content,l=c.title,i=c.seo,m="covid-19-crisis-management-unit",this.setState({title:l,content:s,seo:i}),!(n.indexOf(m)>-1||n.indexOf("government-education-covid-19-response-team")>-1)){t.next=20;break}return t.next=15,e("".concat("https://feed.scarincihollenbeck.com","/covid-19-news"),{headers:C.f});case 15:return u=t.sent,t.next=18,u.json();case 18:p=t.sent,this.setState({covidPage:!0},(function(){b.setState({posts:p})}));case 20:if(!(n.indexOf(m)<-1)){t.next=29;break}return t.next=23,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone"),{headers:C.f});case 23:return d=t.sent,t.next=26,d.json();case 26:h=t.sent,f=h.posts,this.setState({posts:f});case 29:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"printScreen",value:function(){return window.print(),!1}},{key:"toggleModal",value:function(){this.setState((function(e){return{show:!e.show}}))}},{key:"hideSubscription",value:function(){this.setState({triggerModal:!1},(function(){var e=document.getElementById("subscriptionModal");e.classList.remove("show"),e.setAttribute("style","display:none"),document.querySelector(".modal-backdrop").setAttribute("style","display:none")}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.content,n=e.posts,r=e.show,o=e.seo,c=e.covidPage,s=a.match(/<h2(.*?)>(.*?)<\/h2>/g),l=null!==s?s[0].replace(/<[^>]*>?/gm,""):"",i=a.replace(l,"");return E.a.createElement("div",{id:"page"},E.a.createElement(N.a,{seo:o}),E.a.createElement(w.a,{title:t,subtitle:l,imageWebp:P.f,imageJPG:P.e,height:"auto"}),E.a.createElement(k.a,{body:E.a.createElement(S.a,{content:i,covidPage:c}),sidebar:E.a.createElement(x.a,{posts:n,hideSubscription:this.hideSubscription,show:r,toggleModal:this.toggleModal,covidPage:c})}))}}]),s}(v.Component);t.default=F}.call(this,a(140))},497:function(e,t,a){var n=a(501),r=a.n(n),o=a(0),c=a.n(o),s=a(3),l=a.n(s),i=a(502),m=a(139);function u(){var e=r()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return u=function(){return e},e}function p(){var e=r()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return p=function(){return e},e}var d=function(e){var t=e.title,a=e.subtitle,n=e.imageWebp,r=e.imageJPG,o=e.height,s="";s=n,Object(m.b)()&&(s=r);var l=i.a.div(p(),s,o),d=i.a.div(u());return c.a.createElement(l,{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(d,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},c.a.createElement("div",{className:"p-3"},c.a.createElement("span",{id:"red-block"}),c.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),c.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(m.c)(a)}))))))};d.propTypes={imageWebp:l.a.string,imageJPG:l.a.string,image:l.a.string,title:l.a.string,subtitle:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),height:l.a.string},d.defaultProps={imageWebp:"",imageJPG:"",title:"",subtitle:"",height:""},t.a=d},498:function(e,t,a){a.d(t,"g",(function(){return n})),a.d(t,"h",(function(){return r})),a.d(t,"i",(function(){return o})),a.d(t,"j",(function(){return c})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return m})),a.d(t,"k",(function(){return u})),a.d(t,"l",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return h}));var n="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg",r="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-Webp.webp",o="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/corona-virus-background-compressor.png",c="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/corona-virus-background-compressor-webp.webp",s="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg",l="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-Webp.webp",i="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg",m="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-Webp.webp",u="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg",p="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-Webp.webp",d="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/attorney-archive-header-webp.webp",h="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/attorney-archive-header-jpg.jpg"},503:function(e,t,a){var n=a(0),r=a.n(n),o=a(500),c=a(3),s=a.n(c);function l(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "'.concat(t.title,'",\n          "description": "').concat(t.metaDescription,'",\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}l.propTypes={seo:s.a.objectOf(s.a.string)},l.defaultProps={seo:{}},t.a=l},504:function(e,t,a){(function(e){var n=a(61),r=a.n(n),o=a(82),c=a.n(o),s=a(57),l=a.n(s),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),g=a(39),y=a.n(g),v=a(0),E=a.n(v),N=a(139);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(t){h()(s,t);var a,n,o=(a=s,function(){var e,t=y()(a);if(w()){var n=y()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function s(e){var t;return l()(this,s),(t=o.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(p()(t)),t.onSubmit=t.onSubmit.bind(p()(t)),t}return m()(s,[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=this.state.t;r[n]=a,this.setState({t:r})}},{key:"onSubmit",value:function(){var e,t,a,n,r,o,c=this.state.t;window.location=(t=(e=c).keyword,a=e.practice,n=e.attorney,r=e.category,o="".concat(void 0!==t?t:""," ").concat(void 0!==a?a:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(o.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:(n=c()(r.a.mark((function t(){var a,n,o,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://api.scarincihollenbeck.com","/cached/search-options"),{headers:N.f});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,o=n.attorneys,c=n.categories,s=n.practices,this.setState({attorneys:o,categories:c,practices:s});case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.attorneys,n=t.categories,r=t.practices,o=(t.searchTerm,t.t);return E.a.createElement("div",{className:"w-100"},E.a.createElement("form",{onChange:this.onChange},E.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},E.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:o.keyword,placeholder:"Keyword...",className:"form-control p-2"}),E.a.createElement("span",{className:"sr-only"},"Search Site")),E.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},E.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by practice"},o.practice||"Filter by practice"),r.map((function(e){return E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),E.a.createElement("span",{className:"sr-only"},"Filter by Practice")),E.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},E.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by attorney"},o.attorney||"Filter by attorney"),a.map((function(e){return E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),E.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),E.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},E.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by category"},o.category||"Filter by category"),n.map((function(e){return"Uncategorized"!==e.title?E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title):""}))),E.a.createElement("span",{className:"sr-only"},"Filtery by Category")),E.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),E.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}]),s}(v.Component);t.a=k}).call(this,a(140))},507:function(e,t,a){var n=a(198),r=a.n(n),o=a(501),c=a.n(o),s=a(0),l=a.n(s),i=a(15),m=a(3),u=a.n(m),p=a(502),d=a(139);function h(){var e=c()(["\n  height: 470px;\n  overflow:hidden;\n  overflow-y: auto;\n"]);return h=function(){return e},e}var f=p.a.div(h());function b(e){var t=e.split(" "),a=t[0][0]+t[t.length-1];return Object(d.k)(a.toLowerCase())}function g(e){var t=e.title,a=e.content;return l.a.createElement("div",{className:"w-100 mt-4"},l.a.createElement("div",{className:"sidebar-title"},t),l.a.createElement(f,{className:"off-white"},a.length>0?a.map((function(e){return l.a.createElement("div",{key:e.ID||Object(d.a)(e.title),className:"p-2"},l.a.createElement("a",{href:e.link,className:"top-article"},l.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),(e.hasOwnProperty("author")||"Scarinci Hollenbeck"===e.author)&&l.a.createElement(l.a.Fragment,null,"string"==typeof e.author&&l.a.createElement(l.a.Fragment,null,l.a.createElement("strong",null,"Author: "),l.a.createElement(i.b,{to:"/author/".concat(b(e.author))},e.author)),"object"===r()(e.author)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("strong",null,"Author: "),l.a.createElement(i.b,{to:"/author/".concat(b(e.author[0].name))},e.author[0].name))),e.hasOwnProperty("pubDate")&&l.a.createElement("p",{className:"my-0"},e.pubDate.substring(0,17)),e.hasOwnProperty("source")&&l.a.createElement("div",{className:"mt-0",dangerouslySetInnerHTML:Object(d.c)(e.source)}))})):l.a.createElement("div",{className:"mx-5 p-5"},l.a.createElement("p",null,"Articles loading..."))))}g.propTypes={content:u.a.arrayOf(u.a.object),title:u.a.string},g.defaultProps={content:[],title:""},t.a=g},512:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},t),r.a.createElement("div",{className:"col-sm-12 col-md-4"},a)))}},513:function(e,t,a){a.d(t,"a",(function(){return n}));var n=[{key:"business",label:"Business Law",name:"Business Law",property:"column_1"},{key:"firmnews",label:"Firm News",name:"Firm News",property:"column_1"},{key:"publiclaw",label:"Government & Public Law",name:"Government & Public Law",property:"column_1"},{key:"technology",label:"Technology",name:"Technology",property:"column_1"},{key:"tax",label:"Tax",name:"Tax",property:"column_1"},{key:"firmevents",label:"Firm Events",name:"Firm Events",property:"column_1"},{key:"cannabis",label:"Cannabis Law",name:"Cannabis Law",property:"column_1"},{key:"commercialRealEstate",label:"Commercial Real Estate",name:"Commercial Real Estate",property:"column_two"},{key:"covid19Alert",label:"Covid-19 Alert",name:"Covid-19 Alert",property:"column_two"},{key:"cyberSecurityDataPrivacy",label:"Cyber Security & Data Privacy",name:"Cyber Security & Data Privacy",property:"column_two"},{key:"entertainmentSports",label:"Entertainment & Sports",name:"Entertainment & Sports",property:"column_two"},{key:"environmentalLaw",label:"Environmental Law",name:"Environmental Law",property:"column_two"},{key:"intellectualProperty",label:"Intellectual Property",name:"Intellectual Property",property:"column_two"},{key:"laboremployment",label:"Labor Employment",name:"Labor Employment",property:"column_two"},{key:"litigation",label:"Litigation",name:"Litigation",property:"column_two"}]},519:function(e,t,a){(function(e){var n=a(61),r=a.n(n),o=a(82),c=a.n(o),s=a(57),l=a.n(s),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),g=a(39),y=a.n(g),v=a(0),E=a.n(v);function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(t){h()(s,t);var a,n,o=(a=s,function(){var e,t=y()(a);if(N()){var n=y()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function s(e){var t;return l()(this,s),(t=o.call(this,e)).state={firstName:"",lastName:"",email:"",phone:"",subject:"",message:"",successMessage:!1,disabled:!1},t.onFormChange=t.onFormChange.bind(p()(t)),t.onFormSubmit=t.onFormSubmit.bind(p()(t)),t}return m()(s,[{key:"onFormChange",value:function(e){var t=e.target,a=t.name,n=t.value;"firstName"===a&&this.setState({firstName:n}),"lastName"===a&&this.setState({lastName:n}),"email"===a&&this.setState({email:n}),"phone"===a&&this.setState({phone:n}),"subject"===a&&this.setState({subject:n}),"message"===a&&this.setState({message:n})}},{key:"onFormSubmit",value:(n=c()(r.a.mark((function t(a){var n,o,c,s,l,i,m,u,p,d,h,f;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=this.state,o=n.firstName,c=n.lastName,s=n.email,l=n.phone,i=n.subject,m=n.message,u=document.querySelector("h1.text-white.proxima-bold").innerText,p=window.location.href,d={firstName:o,lastName:c,email:s,phone:l,subject:i,message:m,pageTitle:u,siteUrl:p},h={method:"post",body:JSON.stringify(d),headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=8,e("".concat("https://forms.scarincihollenbeck.com","/shlaw/site/contact/form"),h);case 8:return f=t.sent,t.next=11,f.status;case 11:200===t.sent&&this.setState({successMessage:!0,disabled:!0});case 13:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.phone,o=e.subject,c=e.message,s=e.successMessage,l=e.disabled;return E.a.createElement("form",{className:"mt--1 mb-3",onSubmit:this.onFormSubmit,method:"post"},E.a.createElement("div",{className:"form-row"},E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"firstName",className:"sr-only"},"First name"),E.a.createElement("input",{type:"text",className:"form-control",name:"firstName",onChange:this.onFormChange,id:"firstName",placeholder:"First name",value:t,required:!0})),E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"lastName",className:"sr-only"},"Last name"),E.a.createElement("input",{type:"text",className:"form-control",name:"lastName",onChange:this.onFormChange,id:"lastName",placeholder:"Last name",value:a,required:!0})),E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email"),E.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:this.onFormChange,id:"email",placeholder:"Email",value:n,required:!0})),E.a.createElement("div",{className:"col-md-6 mb-3"},E.a.createElement("label",{htmlFor:"phone",className:"sr-only"},"Phone"),E.a.createElement("input",{type:"tel",className:"form-control",name:"phone",onChange:this.onFormChange,id:"phone",placeholder:"Phone",value:r,required:!0})),E.a.createElement("div",{className:"col-sm-12 mb-3"},E.a.createElement("label",{htmlFor:"subject",className:"sr-only"},"Subject"),E.a.createElement("input",{type:"text",className:"form-control",name:"subject",onChange:this.onFormChange,id:"subject",placeholder:"Subject",value:o,required:!0})),E.a.createElement("div",{className:"col-sm-12 mb-3"},E.a.createElement("label",{htmlFor:"message",className:"sr-only"},"message"),E.a.createElement("textarea",{rows:"6",className:"form-control",name:"message",onChange:this.onFormChange,id:"message",placeholder:"Message",value:c,required:!0}))),E.a.createElement("div",{className:"col-sm-12"},E.a.createElement("p",{className:"small-excerpt ml--1"},"The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form."),E.a.createElement("label",{htmlFor:"disclaimer",className:"mt-3 disclaimer"},E.a.createElement("input",{type:"checkbox",className:"form-control",id:"disclaimer",name:"disclaimer",required:!0}),E.a.createElement("span",{className:"text-muted"},"* I have read the disclaimer"))),E.a.createElement("input",{type:"submit",className:"ml-2 w-25 mt-2 btn btn-danger",disabled:l,value:"Submit"}),s?E.a.createElement("p",{className:"text-success m-2 proxima-bold"},"Thank you for your inquiry one of our representative will reach out to you shortly!"):"")}}]),s}(v.Component);t.a=w}).call(this,a(140))},748:function(e,t,a){(function(e){var n=a(61),r=a.n(n),o=a(82),c=a.n(o),s=a(518),l=a.n(s),i=a(57),m=a.n(i),u=a(58),p=a.n(u),d=a(83),h=a.n(d),f=a(59),b=a.n(f),g=a(60),y=a.n(g),v=a(39),E=a.n(v),N=a(0),w=a.n(N),k=a(3),x=a.n(k),S=a(513);function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=function(e){var t=e.property,a=e.name,n=e.onChange;return w.a.createElement("input",{type:"checkbox",property:t,name:a,onChange:n})},j=function(t){b()(s,t);var a,n,o=(a=s,function(){var e,t=E()(a);if(C()){var n=E()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y()(this,e)});function s(e){var t;return m()(this,s),(t=o.call(this,e)).state={email:"",firstName:"",lastName:"",categories:[],message:!1,disabled:!1},t.handleChange=t.handleChange.bind(h()(t)),t.handleSubmit=t.handleSubmit.bind(h()(t)),t.handleCategoryChange=t.handleCategoryChange.bind(h()(t)),t}return p()(s,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;"firstName"===a&&this.setState({firstName:n}),"lastName"===a&&this.setState({lastName:n}),"email"===a&&this.setState({email:n})}},{key:"handleCategoryChange",value:function(e){var t=this.state.categories,a=e.target.name,n=e.target.getAttribute("property"),r=e.target.checked;!0===r&&this.setState({categories:[].concat(l()(t),[{property:n,value:a}])}),!1===r&&this.setState({categories:t.filter((function(e){return e.value!==a}))})}},{key:"handleSubmit",value:(n=c()(r.a.mark((function t(a){var n,o,c,s,l,i,m,u,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=this.state,o=n.firstName,c=n.lastName,s=n.email,l=n.categories,i=l.map((function(e){return e.value})),m={firstName:o,lastName:c,email:s,categoryValues:i,siteUrl:window.location.href},u={method:"post",body:JSON.stringify(m),headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=7,e("".concat("https://forms.scarincihollenbeck.com","/shlaw/site/subscription/form"),u);case 7:return p=t.sent,t.next=10,p.status;case 10:200===t.sent&&this.setState({message:!0,disabled:!0});case 12:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.message,r=t.lastName,o=t.firstName,c=t.disabled,s=this.props.hideSubscription;return w.a.createElement("div",{className:"modal-dialog sub-form",id:"subscription-form",role:"document"},w.a.createElement("div",{className:"modal-content"},w.a.createElement("div",{className:"modal-header sidebar-title d-flex flex-row"},w.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png",alt:"Scarinci hollenbeck diamond",className:"w-15"}),w.a.createElement("h5",{id:"subscriptionModalLabel",className:"mt-2"},"Sign up to get the latest from the Scarinci Hollenbeck attorneys!")),w.a.createElement("div",{className:"modal-body"},w.a.createElement("form",{onSubmit:this.handleSubmit,method:"post",className:"mt-3"},w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"firstName",className:"sr-only"}," Email:"),w.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:o,onChange:this.handleChange,className:"form-control","aria-describedby":"firstName",placeholder:"Enter first name"})),w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"lastName",className:"sr-only"}," last Name:"),w.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:r,onChange:this.handleChange,className:"form-control","aria-describedby":"lastName",placeholder:"Enter last name"})),w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"email",className:"sr-only"}," Email:"),w.a.createElement("input",{id:"email",name:"email",type:"text",value:a,onChange:this.handleChange,className:"form-control","aria-describedby":"email",placeholder:"Enter email",required:!0})),w.a.createElement("div",{className:"form-group mb-0"},w.a.createElement("p",{className:"small-excerpt"},"Please select a category(s) below:")),w.a.createElement("ul",{className:"no-dots two-column"},S.a.map((function(t){return w.a.createElement("li",{key:t.key},w.a.createElement("label",{htmlFor:t.name},w.a.createElement(P,{id:t.name,className:"d-block",name:t.name,property:t.property,onChange:e.handleCategoryChange})," ",t.name))}))),w.a.createElement("div",{className:"modal-footer"},n&&w.a.createElement("p",{className:"text-success proxima-bold mx-auto"},"Thank you for subscribing!"),w.a.createElement("button",{type:"button",onClick:function(){return s()},className:"btn btn-secondary proxima-bold","data-dismiss":"modal"},"Close"),w.a.createElement("input",{type:"submit",className:"btn btn-danger",disabled:c,value:"Submit"}))))))}}]),s}(N.Component);P.propTypes={property:x.a.string,name:x.a.string,onChange:x.a.func},P.defaultProps={property:"",name:"",onChange:function(){}},j.propTypes={hideSubscription:x.a.func},j.defaultProps={hideSubscription:function(){}},t.a=j}).call(this,a(140))},749:function(e,t,a){var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=a(139),l=a(519),i=a(750);function m(e){var t=e.content,a=e.covidPage;return console.log(a),r.a.createElement("div",null,r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:Object(s.c)(t)}),a&&r.a.createElement(i.a,null),r.a.createElement("div",{className:"mt-5 w-100"},r.a.createElement("h4",{className:"bg-light-gray"},"Contact A Firm Reprepresentative"),r.a.createElement(l.a,null)))}m.propTypes={content:c.a.string,covidPage:c.a.bool},m.defaultProps={content:"",covidPage:!1},t.a=m},750:function(e,t,a){(function(e){var n=a(562),r=a.n(n),o=a(61),c=a.n(o),s=a(82),l=a.n(s),i=a(57),m=a.n(i),u=a(58),p=a.n(u),d=a(59),h=a.n(d),f=a(60),b=a.n(f),g=a(39),y=a.n(g),v=a(0),E=a.n(v);function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(t){h()(s,t);var a,n,o=(a=s,function(){var e,t=y()(a);if(N()){var n=y()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function s(e){var t;return m()(this,s),(t=o.call(this,e)).state={posts:[],articleTitle:""},t}return p()(s,[{key:"componentDidMount",value:(n=l()(c.a.mark((function t(){var a,n,r,o,s,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="government-education-covid-19-response-team",!((n=window.location.pathname).indexOf("covid-19-crisis-management-unit")>-1)){t.next=11;break}return t.next=6,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/wp/v2/posts?categories=20250per_page=100"));case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,this.setState({posts:o,articleTitle:"COVID-19 Articles"});case 11:if(!(n.indexOf(a)>-1)){t.next=19;break}return t.next=14,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/wp/v2/posts?categories=22896&per_page=100"));case 14:return s=t.sent,t.next=17,s.json();case 17:l=t.sent,this.setState({posts:l,articleTitle:"Education COVID-19 Articles"});case 19:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.articleTitle;return E.a.createElement(E.a.Fragment,null,E.a.createElement("h3",null,E.a.createElement("strong",{style:{"font-size":"1.8rem"}},a)),E.a.createElement("hr",null),E.a.createElement("div",{className:"container"},E.a.createElement("div",{className:"row mh-75"},t.length>0&&t.map((function(e){return E.a.createElement("div",r()({className:"",key:e.id},"className","col-sm-12 col-md-12 col-lg-6 my-3"),E.a.createElement("div",{className:"card",id:"covid-post"},E.a.createElement("img",{style:{flexShrink:0,width:"100%"},src:e.fimg_url,alt:e.title.rendered}),E.a.createElement("div",{className:"card-body text-center mt-2"},E.a.createElement("h5",{className:"card-title"},e.title.rendered),E.a.createElement("a",{href:e.link,style:{color:"white"},className:"btn btn-danger mx-auto d-block w-50 mb-2"},"Full Article >>"))))})))))}}]),s}(v.Component);t.a=w}).call(this,a(140))},878:function(e,t,a){var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=a(504),l=a(507),i=a(748);function m(e){var t=e.toggleModal,a=e.hideSubscription,n=e.show;return r.a.createElement("div",{className:"w-100 mt-4"},r.a.createElement("div",{className:"sidebar-title"},"Get the latest from our attorneys!"),r.a.createElement("div",{className:"off-white mh-375"},r.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png",alt:"Subscribe Scarinci Hollenbeck attorneys",className:"mx-auto d-block py-4 w-50"}),r.a.createElement("p",{className:"proxima-bold text-center px-3"},"Please fill out our short form to get the latest articles from the Scarinci Hollenbeck attorneys weekly on the cutting-edge legal topics."),r.a.createElement("button",{type:"button",onClick:function(){return t()},className:"mx-auto p-2 d-block btn-danger w-50 text-center border-r-5 mb-3","data-toggle":"modal","data-target":"#subscriptionModal"},"Subscribe Now!"),r.a.createElement("div",{className:n?"modal fade show":"modal fade",id:"subscriptionModal",tabIndex:"-1",role:"dialog","aria-labelledby":"subscriptionModalLabel","aria-hidden":"true"},r.a.createElement(i.a,{hideSubscription:a}))))}m.propTypes={toggleModal:c.a.func,hideSubscription:c.a.func,show:c.a.bool},m.defaultProps={toggleModal:function(){},hideSubscription:function(){},show:!1};var u=m;function p(e){var t=e.posts,a=e.hideSubscription,n=e.show,o=e.toggleModal,c=e.covidPage;return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(l.a,{title:c?"Current Covid-19 News":"Trending Stories",content:t}),r.a.createElement(u,{toggleModal:o,hideSubscription:a,show:n}))}p.propTypes={posts:c.a.arrayOf(c.a.object),hideSubscription:c.a.func,show:c.a.bool,covidPage:c.a.bool,toggleModal:c.a.func},p.defaultProps={posts:[],hideSubscription:function(){},toggleModal:function(){},show:!1,covidPage:!1};t.a=p}}]);