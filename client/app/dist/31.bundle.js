(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{488:function(e,t,a){a.r(t),function(e){var n=a(61),r=a.n(n),c=a(517),l=a.n(c),o=a(82),s=a.n(o),i=a(57),m=a.n(i),u=a(58),p=a.n(u),y=a(59),h=a.n(y),f=a(60),d=a.n(f),b=a(39),g=a.n(b),v=a(0),E=a.n(v),N=a(511),w=a(502),k=a(503),C=a(748),S=a(506),x=a(139);function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=function(t){h()(o,t);var a,n,c=(a=o,function(){var e,t=g()(a);if(F()){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d()(this,e)});function o(e){var t;return m()(this,o),(t=c.call(this,e)).state={posts:[]},t}return p()(o,[{key:"componentDidMount",value:(n=s()(r.a.mark((function t(){var a,n,c,o,s,i,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/category/posts/law-firm-insights"),{headers:x.e});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c=n.main,o=n.latest,s=n.archives,i=s.filter((function(e,t){return t<=1&&e})),m=[].concat(l()(c),l()(o),l()(i)),this.setState({posts:m});case 10:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.posts;return E.a.createElement("div",{id:"subscribe"},E.a.createElement(w.a,{seo:{title:"Subscribe To Firm Mailing List | Scarinci Hollenbeck",metaDescription:"Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements.",canonical:"/subscribe"}}),E.a.createElement(N.a,{body:E.a.createElement(C.a,null),sidebar:E.a.createElement("div",null,E.a.createElement(k.a,null),E.a.createElement(S.a,{title:"Latest From Firm Insights",content:e}))}))}}]),o}(v.Component);t.default=P}.call(this,a(140))},502:function(e,t,a){var n=a(0),r=a.n(n),c=a(499),l=a(3),o=a.n(l);function s(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": "'.concat(t.title,'",\n          "description": "').concat(t.metaDescription,'",\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))}s.propTypes={seo:o.a.objectOf(o.a.string)},s.defaultProps={seo:{}},t.a=s},503:function(e,t,a){(function(e){var n=a(61),r=a.n(n),c=a(82),l=a.n(c),o=a(57),s=a.n(o),i=a(58),m=a.n(i),u=a(83),p=a.n(u),y=a(59),h=a.n(y),f=a(60),d=a.n(f),b=a(39),g=a.n(b),v=a(0),E=a.n(v),N=a(139);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(t){h()(o,t);var a,n,c=(a=o,function(){var e,t=g()(a);if(w()){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d()(this,e)});function o(e){var t;return s()(this,o),(t=c.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(p()(t)),t.onSubmit=t.onSubmit.bind(p()(t)),t}return m()(o,[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=this.state.t;r[n]=a,this.setState({t:r})}},{key:"onSubmit",value:function(){var e,t,a,n,r,c,l=this.state.t;window.location=(t=(e=l).keyword,a=e.practice,n=e.attorney,r=e.category,c="".concat(void 0!==t?t:""," ").concat(void 0!==a?a:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(c.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:(n=l()(r.a.mark((function t(){var a,n,c,l,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://api.scarincihollenbeck.com","/cached/search-options"),{headers:N.e});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c=n.attorneys,l=n.categories,o=n.practices,this.setState({attorneys:c,categories:l,practices:o});case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.attorneys,n=t.categories,r=t.practices,c=(t.searchTerm,t.t);return E.a.createElement("div",{className:"w-100"},E.a.createElement("form",{onChange:this.onChange},E.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},E.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:c.keyword,placeholder:"Keyword...",className:"form-control p-2"}),E.a.createElement("span",{className:"sr-only"},"Search Site")),E.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},E.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by practice"},c.practice||"Filter by practice"),r.map((function(e){return E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),E.a.createElement("span",{className:"sr-only"},"Filter by Practice")),E.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},E.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by attorney"},c.attorney||"Filter by attorney"),a.map((function(e){return E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),E.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),E.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},E.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},E.a.createElement("option",{defaultValue:"Filter by category"},c.category||"Filter by category"),n.map((function(e){return"Uncategorized"!==e.title?E.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title):""}))),E.a.createElement("span",{className:"sr-only"},"Filtery by Category")),E.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),E.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}]),o}(v.Component);t.a=k}).call(this,a(140))},506:function(e,t,a){var n=a(198),r=a.n(n),c=a(500),l=a.n(c),o=a(0),s=a.n(o),i=a(15),m=a(3),u=a.n(m),p=a(501),y=a(139);function h(){var e=l()(["\n  height: 470px;\n  overflow:hidden;\n  overflow-y: auto;\n"]);return h=function(){return e},e}var f=p.a.div(h());function d(e){var t=e.split(" "),a=t[0][0]+t[t.length-1];return Object(y.j)(a.toLowerCase())}function b(e){var t=e.title,a=e.content;return s.a.createElement("div",{className:"w-100 mt-4"},s.a.createElement("div",{className:"sidebar-title"},t),s.a.createElement(f,{className:"off-white"},a.length>0?a.map((function(e){return s.a.createElement("div",{key:e.ID||Object(y.a)(e.title),className:"p-2"},s.a.createElement("a",{href:e.link,className:"top-article"},s.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),(e.hasOwnProperty("author")||"Scarinci Hollenbeck"===e.author)&&s.a.createElement(s.a.Fragment,null,"string"==typeof e.author&&s.a.createElement(s.a.Fragment,null,s.a.createElement("strong",null,"Author: "),s.a.createElement(i.b,{to:"/author/".concat(d(e.author))},e.author)),"object"===r()(e.author)&&s.a.createElement(s.a.Fragment,null,s.a.createElement("strong",null,"Author: "),s.a.createElement(i.b,{to:"/author/".concat(d(e.author[0].name))},e.author[0].name))),e.hasOwnProperty("pubDate")&&s.a.createElement("p",{className:"my-0"},e.pubDate.substring(0,17)),e.hasOwnProperty("source")&&s.a.createElement("div",{className:"mt-0",dangerouslySetInnerHTML:Object(y.b)(e.source)}))})):s.a.createElement("div",{className:"mx-5 p-5"},s.a.createElement("p",null,"Articles loading..."))))}b.propTypes={content:u.a.arrayOf(u.a.object),title:u.a.string},b.defaultProps={content:[],title:""},t.a=b},511:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},t),r.a.createElement("div",{className:"col-sm-12 col-md-4"},a)))}},512:function(e,t,a){a.d(t,"a",(function(){return n}));var n=[{key:"business",label:"Business Law",name:"Business Law",property:"column_1"},{key:"firmnews",label:"Firm News",name:"Firm News",property:"column_1"},{key:"publiclaw",label:"Government & Public Law",name:"Government & Public Law",property:"column_1"},{key:"technology",label:"Technology",name:"Technology",property:"column_1"},{key:"tax",label:"Tax",name:"Tax",property:"column_1"},{key:"firmevents",label:"Firm Events",name:"Firm Events",property:"column_1"},{key:"cannabis",label:"Cannabis Law",name:"Cannabis Law",property:"column_1"},{key:"commercialRealEstate",label:"Commercial Real Estate",name:"Commercial Real Estate",property:"column_two"},{key:"covid19Alert",label:"Covid-19 Alert",name:"Covid-19 Alert",property:"column_two"},{key:"cyberSecurityDataPrivacy",label:"Cyber Security & Data Privacy",name:"Cyber Security & Data Privacy",property:"column_two"},{key:"entertainmentSports",label:"Entertainment & Sports",name:"Entertainment & Sports",property:"column_two"},{key:"environmentalLaw",label:"Environmental Law",name:"Environmental Law",property:"column_two"},{key:"intellectualProperty",label:"Intellectual Property",name:"Intellectual Property",property:"column_two"},{key:"laboremployment",label:"Labor Employment",name:"Labor Employment",property:"column_two"},{key:"litigation",label:"Litigation",name:"Litigation",property:"column_two"}]},748:function(e,t,a){(function(e){var n=a(61),r=a.n(n),c=a(82),l=a.n(c),o=a(517),s=a.n(o),i=a(57),m=a.n(i),u=a(58),p=a.n(u),y=a(83),h=a.n(y),f=a(59),d=a.n(f),b=a(60),g=a.n(b),v=a(39),E=a.n(v),N=a(0),w=a.n(N),k=a(3),C=a.n(k),S=a(512);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(e){var t=e.property,a=e.name,n=e.onChange;return w.a.createElement("input",{type:"checkbox",property:t,name:a,onChange:n})},P=function(t){d()(o,t);var a,n,c=(a=o,function(){var e,t=E()(a);if(x()){var n=E()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g()(this,e)});function o(e){var t;return m()(this,o),(t=c.call(this,e)).state={email:"",firstName:"",lastName:"",categories:[],message:!1},t.handleChange=t.handleChange.bind(h()(t)),t.handleSubmit=t.handleSubmit.bind(h()(t)),t.handleCategoryChange=t.handleCategoryChange.bind(h()(t)),t}return p()(o,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;"firstName"===a&&this.setState({firstName:n}),"lastName"===a&&this.setState({lastName:n}),"email"===a&&this.setState({email:n})}},{key:"handleCategoryChange",value:function(e){var t=this.state.categories,a=e.target.name,n=e.target.getAttribute("property"),r=e.target.checked;!0===r&&this.setState({categories:[].concat(s()(t),[{property:n,value:a}])}),!1===r&&this.setState({categories:t.filter((function(e){return e.value!==a}))})}},{key:"handleSubmit",value:(n=l()(r.a.mark((function t(a){var n,c,l,o,s,i,m,u,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=this.state,c=n.firstName,l=n.lastName,o=n.email,s=n.categories,i=s.map((function(e){return e.value})),m={firstName:c,lastName:l,email:o,categoryValues:i,siteUrl:window.location.href},u={method:"post",body:JSON.stringify(m),headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=7,e("".concat("https://forms.scarincihollenbeck.com","/shlaw/site/subscription/form"),u);case 7:return p=t.sent,t.next=10,p.json();case 10:200===t.sent.status&&this.setState({message:!0});case 13:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.message,r=t.lastName,c=t.firstName;return w.a.createElement("div",null,w.a.createElement("div",{className:"w-100"},w.a.createElement("h1",null,"Scarinci Hollenbeck Mailing List"),w.a.createElement("h2",{className:"text-dark my-4 font-normal red-title ft-17"},"As the legal world continues to evolve, it is important to stay aware of its various and regular updates."),w.a.createElement("p",{className:"h4"},"Be the the first to know when: "),w.a.createElement("ul",{className:"h4 my-4"},w.a.createElement("li",{className:"mb-4"},"When our",w.a.createElement("strong",null," attorney's blog posts")),w.a.createElement("li",{className:"mb-4"},"Various"," ",w.a.createElement("strong",null,"legal updates")," ","that may pertain to your business"),w.a.createElement("li",{className:"mb-4"},"Any annoucements and press releases from the attorneys at the firm")),w.a.createElement("h4",{className:"red-title mb-4"},"Sign up Today!")),w.a.createElement("div",{className:"w-100 border"},w.a.createElement("form",{onSubmit:this.handleSubmit,method:"post",className:"p-3"},w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"firstName",className:"sr-only"}," Email:"),w.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:c,onChange:this.handleChange,className:"form-control","aria-describedby":"firstName",placeholder:"Enter first name"})),w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"lastName",className:"sr-only"}," last Name:"),w.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:r,onChange:this.handleChange,className:"form-control","aria-describedby":"lastName",placeholder:"Enter last name"})),w.a.createElement("div",{className:"form-group"},w.a.createElement("label",{htmlFor:"email",className:"sr-only"}," Email:"),w.a.createElement("input",{id:"email",name:"email",type:"text",value:a,onChange:this.handleChange,className:"form-control","aria-describedby":"email",placeholder:"Enter email",required:!0})),w.a.createElement("div",{className:"form-group mb-0"},w.a.createElement("p",{className:"small-excerpt"},"Please select a category(s) below:")),w.a.createElement("ul",{className:"no-dots two-column mt-2"},S.a.map((function(t){return w.a.createElement("li",{key:t.key},w.a.createElement("label",{htmlFor:t.name},w.a.createElement(F,{id:t.name,className:"d-block",name:t.name,property:t.property,onChange:e.handleCategoryChange})," ",t.name))}))),w.a.createElement("div",null,n&&w.a.createElement("p",{className:"text-success"},"Thank you for subscribing!"),w.a.createElement("input",{type:"submit",className:"btn btn-danger",value:"Submit"})))))}}]),o}(N.Component);F.propTypes={property:C.a.string,name:C.a.string,onChange:C.a.func},F.defaultProps={property:"",name:"",onChange:function(){}},t.a=P}).call(this,a(140))}}]);