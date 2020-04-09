(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{452:function(e,t,n){n.r(t),function(e,a){var r=n(0),l=n.n(r),i=n(470),c=n(471),o=n(457),s=n(454),m=n(472),u=n(494),d=n(473),p=n(497);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(N,t);var n,r,f,k,w=(n=N,function(){var e,t=E(n);if(v()){var a=E(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return y(this,e)});function N(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,N),(t=w.call(this,e)).state={userInput:"",select:[],locations:[],designations:[],practices:[],attorneys:[],seo:{},spinner:!1},t.letterClick=t.letterClick.bind(g(t)),t.handleChange=t.handleChange.bind(g(t)),t.onSelect=t.onSelect.bind(g(t)),t.onMobileSelect=t.onMobileSelect.bind(g(t)),t.removeVisibilityClass=t.removeVisibilityClass.bind(g(t)),t.clearQuery=t.clearQuery.bind(g(t)),t.clearAll=t.clearAll.bind(g(t)),t}return r=N,(f=[{key:"componentDidMount",value:function(){var t=this;this.setState({spinner:!0}),e("".concat(a.env.API_URL,"/wp-json/attorney-search/attorneys/")).then((function(e){return e.json()})).then((function(e){t.setState({attorneys:e,spinner:!1})})),e("".concat(a.env.CACHED_URL,"/cached/attorney-filters")).then((function(e){return e.json()})).then((function(e){var n=e.locations,a=e.designations,r=e.practices;t.setState({locations:n,designations:a,practices:r})})),e("".concat(a.env.API_URL,"/wp-json/attorney-search/meta")).then((function(e){return e.json()})).then((function(e){return t.setState({seo:e})}))}},{key:"onSelect",value:function(e,t){var n=this.state.select,a=t,r=e.target.name,l={selected:a,key:r},i=n.filter((function(e){return e.key!==r})).concat(l);if(this.setState({select:i}),"location"===r||"designation"===r){var c=document.querySelector(".dropdown.show");c.classList.contains("show")&&(c.classList.remove("show"),c.classList.add("hide"))}"practices"===r&&document.querySelector(".megamenu-container").classList.add("super-hide")}},{key:"onMobileSelect",value:function(e){var t=this.state.select,n=e.target.value,a=e.target.name,r={selected:n,key:a},l=t.filter((function(e){return e.key!==a})).concat(r);this.setState({select:l})}},{key:"removeVisibilityClass",value:function(){document.querySelector(".megamenu-container").classList.remove("super-hide")}},{key:"letterClick",value:function(e){var t=this.state.select,n=e.target.innerHTML,a={selected:n,key:"letter"},r=t.filter((function(e){return"letter"!==e.key})).concat(a);this.setState({select:r})}},{key:"handleChange",value:function(e){var t=this.state.select,n=e.target.value.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})),a={selected:n,key:"query"},r=t.concat(a);this.setState({userInput:n,select:r})}},{key:"clearQuery",value:function(e){var t=this.state.select.filter((function(t){return t.key!==e}));this.setState({select:t,userInput:""})}},{key:"clearAll",value:function(){this.setState({select:[],userInput:""})}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.practices,a=e.designations,r=e.attorneys,f=e.select,b=e.userInput,h=e.seo,y=e.spinner,g=Object(s.e)(n,"title");return l.a.createElement("div",{id:"attorney-archive"},l.a.createElement(i.a,{seo:h}),l.a.createElement(c.a,{title:"Attorneys",image:m.a,subtitle:"Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs.",height:"330px"}),l.a.createElement(o.a,null,l.a.createElement("div",{className:"mb-5"},l.a.createElement(u.a,{practices:g,alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],locations:t,designation:a,userInput:b,handleChange:this.handleChange,onSelect:this.onSelect,letterClick:this.letterClick,clearAll:this.clearAll,onMobileSelect:this.onMobileSelect,removeVisibilityClass:this.removeVisibilityClass}),l.a.createElement("div",{className:"w-100 border mt-sm-6 mt-md-0"},l.a.createElement(d.a,{select:f,clearQuery:this.clearQuery,userInput:b}),!y&&l.a.createElement(p.a,{attorneys:r,userInput:b,select:f})))))}}])&&b(r.prototype,f),k&&b(r,k),N}(r.Component);t.default=k}.call(this,n(129),n(75))},454:function(e,t,n){n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},l=function(e){return e.toLowerCase().replace(/\s/g,"-")},i=function(e){return{__html:e}},c=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},o=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n}},457:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},470:function(e,t,n){var a=n(0),r=n.n(a),l=n(456),i=n(4),c=n.n(i),o=function(e){var t=e.seo;return r.a.createElement(l.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))};o.propTypes={seo:c.a.objectOf(c.a.string)},o.defaultProps={seo:{}},t.a=o},471:function(e,t,n){var a=n(0),r=n.n(a),l=n(4),i=n.n(l),c=n(455),o=n(454);function s(){var e=u(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n  "]);return s=function(){return e},e}function m(){var e=u(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return m=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=function(e){var t=e.title,n=e.subtitle,a=e.image,l=e.height,i=c.a.div(m(),a,l),u=c.a.div(s());return r.a.createElement(i,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u,{className:"col-sm-12 col-md-7 offset-md-3 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(o.b)(n)}))))))};d.propTypes={image:i.a.string,title:i.a.string,subtitle:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),height:i.a.string},d.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=d},472:function(e,t,n){t.a=n.p+"617c28d09b2c960cea95a81bdb4ccea7.jpg"},473:function(e,t,n){var a=n(0),r=n.n(a),l=n(4),i=n.n(l),c=function(e){var t=e.select,n=e.userInput,a=e.clearQuery,l=t.filter((function(e){return"query"!==e.key}));return r.a.createElement("ul",{className:"no-dots list-inline my-2 mx-0"},n.length>0?r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("button",{type:"button",className:"btn btn-link red-title",id:n,onClick:function(){return a("query")},"data-toggle":"tooltip","data-placement":"top",title:"Click on link to remove filter"},n)):"",l.map((function(e){return r.a.createElement("li",{className:" list-inline-item",key:e.key},r.a.createElement("button",{type:"button",className:"btn btn-link red-title",id:e.selected,onClick:function(){return a(e.key)},"data-toggle":"tooltip","data-placement":"top","data-html":"true",title:"Click on link to remove filter"},e.selected))})))};c.propTypes={select:i.a.arrayOf(i.a.object),userInput:i.a.string,clearQuery:i.a.func},c.defaultProps={select:[],userInput:"",clearQuery:function(){}},t.a=c},494:function(e,t,n){var a=n(0),r=n.n(a),l=n(4),i=n.n(l),c=function(e){var t=e.userInput,n=e.handleChange;return r.a.createElement("form",{className:"form-inline filter w-40"},r.a.createElement("label",{htmlFor:"searchForAttorney",className:"w-100"},r.a.createElement("input",{type:"text",id:"searchForAttorney",className:"w-100",value:t,placeholder:"Search by keyword...",onChange:n}),r.a.createElement("span",{className:"sr-only"},"Search For Attorney")))};c.propTypes={userInput:i.a.string,handleChange:i.a.func},c.defaultProps={userInput:"",handleChange:function(){}};var o=c,s=function(e){var t=e.alphabet,n=e.letterClick;return r.a.createElement("div",{className:"col-sm-12 col-md-10 mt-2"},r.a.createElement("ul",{className:"list-inline ml-4 "},t.map((function(e){return r.a.createElement("li",{onClick:n,onKeyDown:n,key:e,role:"presentation",className:"text-bg text-white proxima-bold list-inline-item cursor-pointer"},r.a.createElement("h4",null,e))}))))};s.propTypes={alphabet:i.a.arrayOf(i.a.string),letterClick:i.a.func},s.defaultProps={alphabet:[],letterClick:function(){}};var m=s,u=n(95),d=n(458),p=n(454),f=function(e){var t=e.title,n=e.onSelect,a=e.pChildren;return r.a.createElement("span",null,r.a.createElement("p",{className:"practice-title"},r.a.createElement("button",{onClick:function(e){return n(e,t)},name:"practices",type:"button",className:"proxima-bold practice-link btn btn-link"},t)),r.a.createElement("div",{className:"practice-children"},a.map((function(e){return r.a.createElement("button",{key:Object(p.a)(e.ID.toString()),type:"button",name:"practices",onClick:function(t){return n(t,e.title)},className:"dropdown-item btn btn-link"},e.title)}))))},b=function(e){var t=e.practices,n=e.onSelect,a=e.removeVisibilityClass,l=t.filter((function(e){return 28345===e.id||29587===e.id||28276===e.id?e:""})),i=t.filter((function(e){return 29624===e.id||28271===e.id||29588===e.id?e:""})),c=t.filter((function(e){return 28270===e.id})),o=t.filter((function(e){return 28273===e.id||28274===e.id?e:""}));return r.a.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 megamenu filter"},r.a.createElement("span",{id:"megamneu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onFocus:a,onMouseOver:a,className:"dropdown-toggle btn btn-light my-1"},"Filter by practice",r.a.createElement(u.a,{icon:d.faCaretDown,className:"ml-5 mt-1"})),r.a.createElement("div",{"aria-labelledby":"megamneu",className:"dropdown-menu border-0 p-0 m-0 megamenu-container shadow-sm"},r.a.createElement("div",{className:"container mt--1"},r.a.createElement("div",{className:"row rounded-0 m-0"},r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},l.map((function(e){return r.a.createElement(f,{key:Object(p.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},i.map((function(e){return r.a.createElement(f,{key:Object(p.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},c.map((function(e){return r.a.createElement(f,{key:Object(p.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},o.map((function(e){return r.a.createElement(f,{key:Object(p.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})})))))))};b.propTypes={practices:i.a.arrayOf(i.a.object),onSelect:i.a.func,removeVisibilityClass:i.a.func},b.defaultProps={practices:[],onSelect:function(){},removeVisibilityClass:function(){}},f.propTypes={title:i.a.string,onSelect:i.a.func,pChildren:i.a.arrayOf(i.a.object)},f.defaultProps={title:"",onSelect:function(){},pChildren:[]};var h=b,y=function(e){var t=e.designation,n=e.onSelect;return r.a.createElement("li",{className:"dropdown w3_megamenu-fw nav-item list-inline-item filter"},r.a.createElement("span",{"data-toggle":"dropdown",id:"titleDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by title",r.a.createElement(u.a,{icon:d.faCaretDown,className:"ml-5 mt-1"})),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"titleDropDown"},t.map((function(e){return r.a.createElement("button",{type:"button",name:"designation",className:"dropdown-item btn btn-link",key:e.title,onClick:function(t){return n(t,e.title)}},e.title)}))))};y.propTypes={designation:i.a.arrayOf(i.a.object),onSelect:i.a.func},y.defaultProps={designation:[],onSelect:function(){}};var g=y,v=function(e){var t=e.locations,n=e.onSelect;return r.a.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 filter"},r.a.createElement("span",{"data-toggle":"dropdown",id:"locationDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by location",r.a.createElement(u.a,{icon:d.faCaretDown,className:"ml-5 mt-1"})),r.a.createElement("div",{className:"dropdown-menu w-100","aria-labelledby":"locationDropDown"},t.map((function(e){return r.a.createElement("button",{type:"button",name:"location",className:"dropdown-item btn btn-link",key:e.id,onClick:function(t){return n(t,e.title)}},e.title)}))))};v.propTypes={locations:i.a.arrayOf(i.a.object),onSelect:i.a.func},v.defaultProps={locations:[],onSelect:function(){}};var E=v,k=function(e){var t=e.content,n=e.onMobileSelect,a=e.title,l=e.name;return r.a.createElement("div",{className:"my-2"},r.a.createElement("select",{name:l,onChange:n,className:"mobile-select"},r.a.createElement("option",{value:""},a),t.map((function(e){return r.a.createElement("option",{key:e.ID,value:e.title,name:"practices",className:"mobile-option"},e.title)}))))};k.propTypes={title:i.a.string,name:i.a.string,content:i.a.arrayOf(i.a.object),onMobileSelect:i.a.func},k.defaultProps={title:"",name:"",content:[],onMobileSelect:function(){}};var w=k,N=function(e){var t=e.practices,n=e.alphabet,a=e.locations,l=e.designation,i=e.userInput,c=e.handleChange,s=e.onSelect,u=e.letterClick,d=e.clearAll,p=e.onMobileSelect,f=e.removeVisibilityClass;return r.a.createElement("span",null,window.innerWidth>992?r.a.createElement("nav",{className:"navbar navbar-expand-lg bckground-gray border p-2"},r.a.createElement(o,{userInput:i,handleChange:c}),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav nav-fill w-100"},r.a.createElement(h,{practices:t,onSelect:s,removeVisibilityClass:f}),r.a.createElement(E,{locations:a,onSelect:s}),r.a.createElement(g,{designation:l,onSelect:s})))):r.a.createElement("div",{className:"bckground-gray p-2"},r.a.createElement(o,{userInput:i,handleChange:c}),r.a.createElement(w,{title:"Filter by practice",name:"practices",content:t,onMobileSelect:p}),r.a.createElement(w,{title:"Filter by location",name:"location",content:location,onMobileSelect:p}),r.a.createElement(w,{title:"Filter by title",name:"designation",content:l,onMobileSelect:p})),r.a.createElement("div",{className:"drkbckground-gray border h-57"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement(m,{alphabet:n,letterClick:u}),r.a.createElement("div",{className:"col-sm-12 col-md-2"},r.a.createElement("button",{type:"button",className:"btn btn-danger float-right mx-3",onClick:function(){return d()}},"Clear All")))))};N.propTypes={practices:i.a.arrayOf(i.a.object),alphabet:i.a.arrayOf(i.a.string),locations:i.a.arrayOf(i.a.object),designation:i.a.arrayOf(i.a.object),userInput:i.a.string,handleChange:i.a.func,onSelect:i.a.func,letterClick:i.a.func,clearAll:i.a.func,onMobileSelect:i.a.func,removeVisibilityClass:i.a.func},N.defaultProps={practices:[],alphabet:[],locations:[],designation:[],userInput:"",handleChange:function(){},onSelect:function(){},letterClick:function(){},clearAll:function(){},onMobileSelect:function(){},removeVisibilityClass:function(){}};t.a=N},497:function(e,t,n){var a=n(0),r=n.n(a),l=n(4),i=n.n(l),c=n(455),o=n(95),s=n(461),m=n(462);function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    height: ",";\n    overflow: hidden;\n    border: .9px solid #e9e9e9;\n    width: 100%;\n  "]);return u=function(){return e},e}var d=function(e){var t=e.link,n=e.image,a=e.name,l=e.title,i=e.number,d=e.email,p=e.height,f=e.width,b=c.a.div(u(),p);return r.a.createElement(b,{className:"d-flex flex-row attorney-card"},r.a.createElement("a",{href:t},r.a.createElement("img",{rel:"preload",src:n,alt:a,className:"mr-1",style:{width:f}})),r.a.createElement("div",{className:"mt-3 ml-3"},r.a.createElement("a",{href:t},r.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},r.a.createElement("strong",null,a)),r.a.createElement("p",{className:"mb-1 small-excerpt"},r.a.createElement("strong",null,l))),r.a.createElement("div",{className:"small-excerpt"},r.a.createElement(o.a,{icon:s.faPhone})," ",i,r.a.createElement("br",null),r.a.createElement(o.a,{icon:m.faEnvelope})," ",d)))};d.propTypes={image:i.a.string,name:i.a.string,title:i.a.string,number:i.a.string,email:i.a.string,link:i.a.string,height:i.a.string,width:i.a.string},d.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""};var p=d,f=n(454),b=function(e){var t=e.attorneys,n=e.userInput,a=e.select,l=Object(f.c)(a,"practices"),i=Object(f.c)(a,"letter"),c=Object(f.c)(a,"designation"),o=Object(f.c)(a,"location"),s=t.filter((function(e){return l.length>0?e.practices_array.indexOf(l[0])>-1:e})).filter((function(e){return o.length>0?e.location.indexOf(o[0])>=0:e})).filter((function(e){return c.length>0?e.designation.indexOf(c[0])>=0:e})).filter((function(e){return i.length>0?e.last_name.charAt(0).toLowerCase()===i[0].toLowerCase():e})).filter((function(e){var t=e.practices.replace(/&amp;/g,"&");return n?e.title.indexOf(n)>=0||t.indexOf(n.trim())>=0?e:void 0:e}));return r.a.createElement("div",{className:"row"},s.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"81px"}))})),s.length<1&&r.a.createElement("h3",{className:"text-center red-title d-block mx-auto my-4"},"Sorry, no attorneys found according to this query."))};b.propTypes={attorneys:i.a.arrayOf(i.a.object),select:i.a.arrayOf(i.a.object),userInput:i.a.string},b.defaultProps={attorneys:[],select:[],userInput:""};var h=b,y=function(e){var t=e.attorneys,n=t.filter((function(e){return"Managing Partner"===e.designation})),a=t.filter((function(e){return"Partner"===e.designation})),l=t.filter((function(e){return"Counsel"===e.designation})),i=t.filter((function(e){return e.designation.indexOf("Of Counsel")>-1})),c=t.filter((function(e){return"Senior Associate"===e.designation})),o=t.filter((function(e){return"Associate"===e.designation}));return r.a.createElement("div",{className:"row result-container"},r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Managing Partners")),n.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Partners")),a.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Counsel")),l.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Of Counsel & Of Counsel Emeritus")),i.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Senior Associates")),c.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})),r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},"Associates")),o.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(p,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})))};y.propTypes={attorneys:i.a.arrayOf(i.a.object)},y.defaultProps={attorneys:[]};var g=y,v=function(e){var t=e.attorneys,n=e.select,a=e.userInput;return r.a.createElement("div",{className:"container mt-2"},n.length>0?r.a.createElement(h,{select:n,attorneys:t,userInput:a}):r.a.createElement(g,{attorneys:t}))};v.propTypes={attorneys:i.a.arrayOf(i.a.object),select:i.a.arrayOf(i.a.object),userInput:i.a.string},v.defaultProps={attorneys:[],select:[],userInput:""};t.a=v}}]);