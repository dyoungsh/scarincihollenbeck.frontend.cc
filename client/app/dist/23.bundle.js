(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{458:function(e,t,n){n.r(t),function(e){var a=n(0),r=n.n(a),o=n(486),i=n(481),c=n(484),l=n(480),s=n(834),u=n(691),m=n(839);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(k,t);var n,a,p,v,E=(n=k,function(){var e,t=h(n);if(g()){var a=h(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return y(this,e)});function k(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),(t=E.call(this,e)).state={userInput:"",select:[],locations:[],designations:[],practices:[],attorneys:[],seo:{},spinner:!1},t.letterClick=t.letterClick.bind(b(t)),t.handleChange=t.handleChange.bind(b(t)),t.onSelect=t.onSelect.bind(b(t)),t.onMobileSelect=t.onMobileSelect.bind(b(t)),t.removeVisibilityClass=t.removeVisibilityClass.bind(b(t)),t.clearQuery=t.clearQuery.bind(b(t)),t.clearAll=t.clearAll.bind(b(t)),t}return a=k,(p=[{key:"componentDidMount",value:function(){var t=this;this.setState({spinner:!0}),e("".concat("https://admin.legalmarketinghouse.com","/wp-json/attorney-search/attorneys/"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){t.setState({attorneys:e,spinner:!1})})),e("".concat("http://142.93.73.211:8200","/cached/attorney-filters"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var n=e.locations,a=e.designations,r=e.practices;t.setState({locations:n,designations:a,practices:r})})),e("".concat("https://admin.legalmarketinghouse.com","/wp-json/attorney-search/meta"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){return t.setState({seo:e})}))}},{key:"onSelect",value:function(e,t){var n=this.state.select,a=t,r=e.target.name,o={selected:a,key:r},i=n.filter((function(e){return e.key!==r})).concat(o);if(this.setState({select:i}),"location"===r||"designation"===r){var c=document.querySelector(".dropdown.show");c.classList.contains("show")&&(c.classList.remove("show"),c.classList.add("hide"))}"practices"===r&&document.querySelector(".megamenu-container").classList.add("super-hide")}},{key:"onMobileSelect",value:function(e){var t=this.state.select,n=e.target.value,a=e.target.name,r={selected:n,key:a},o=t.filter((function(e){return e.key!==a})).concat(r);this.setState({select:o})}},{key:"removeVisibilityClass",value:function(){document.querySelector(".megamenu-container").classList.remove("super-hide")}},{key:"letterClick",value:function(e){var t=this.state.select,n=e.target.innerHTML,a={selected:n,key:"letter"},r=t.filter((function(e){return"letter"!==e.key})).concat(a);this.setState({select:r})}},{key:"handleChange",value:function(e){var t=this.state.select,n=e.target.value.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})),a={selected:n,key:"query"},r=t.concat(a);this.setState({userInput:n,select:r})}},{key:"clearQuery",value:function(e){var t=this.state.select.filter((function(t){return t.key!==e}));this.setState({select:t,userInput:""})}},{key:"clearAll",value:function(){this.setState({select:[],userInput:""})}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.practices,a=e.designations,p=e.attorneys,f=e.select,d=e.userInput,y=e.seo,b=(e.spinner,Object(l.h)(n,"title"));return r.a.createElement("div",{id:"attorney-archive"},r.a.createElement(o.a,{seo:y}),r.a.createElement(i.a,{title:"Attorneys",image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/attorney-archive-header.jpg",subtitle:"Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs.",height:"330px"}),r.a.createElement(c.a,null,r.a.createElement("div",{className:"mb-5"},r.a.createElement(s.a,{practices:b,alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],locations:t,designation:a,userInput:d,handleChange:this.handleChange,onSelect:this.onSelect,letterClick:this.letterClick,clearAll:this.clearAll,onMobileSelect:this.onMobileSelect,removeVisibilityClass:this.removeVisibilityClass}),r.a.createElement("div",{className:"w-100 border mt-sm-6 mt-md-0"},r.a.createElement(u.a,{select:f,clearQuery:this.clearQuery,userInput:d}),p.length>0&&r.a.createElement(m.a,{attorneys:p,userInput:d,select:f})))))}}])&&f(a.prototype,p),v&&f(a,v),k}(a.Component);t.default=v}.call(this,n(130))},480:function(e,t,n){n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return m}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},i=function(e){return{__html:e}},c=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,o=a.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),c=t.filter((function(e){return e.title===i}))[0].address,l="https://www.google.com/maps/dir/".concat(r,"+").concat(o,"/").concat(c);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n},m=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},481:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(483),l=n(480);function s(){var e=m(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return s=function(){return e},e}function u(){var e=m(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=function(e){var t=e.title,n=e.subtitle,a=e.image,o=e.height,i=c.a.div(u(),a,o),m=c.a.div(s());return r.a.createElement(i,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(l.b)(n)}))))))};p.propTypes={image:i.a.string,title:i.a.string,subtitle:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),height:i.a.string},p.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=p},484:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},486:function(e,t,n){var a=n(0),r=n.n(a),o=n(482),i=n(3),c=n.n(i);function l(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}l.propTypes={seo:c.a.objectOf(c.a.string)},l.defaultProps={seo:{}},t.a=l},489:function(e,t,n){var a=n(0),r=n.n(a),o=n(15),i=n(94),c=n(492),l=n(493),s=n(3),u=n.n(s);function m(e){var t=e.link,n=e.image,a=e.name,s=e.title,u=e.number,m=e.email,p=e.height,f=e.width;return r.a.createElement("div",{className:"d-flex flex-row attorney-card",height:p},r.a.createElement(o.b,{to:t},r.a.createElement("img",{rel:"preload",src:n,alt:a,className:"mr-1",style:{width:f}})),r.a.createElement("div",{className:"mt-3 ml-3"},r.a.createElement(o.b,{to:t},r.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},r.a.createElement("strong",null,a)),r.a.createElement("p",{className:"mb-1 small-excerpt"},r.a.createElement("strong",null,s))),r.a.createElement("div",{className:"small-excerpt"},r.a.createElement(i.a,{icon:c.faPhone})," ",u,r.a.createElement("br",null),r.a.createElement(i.a,{icon:l.faEnvelope})," ",m)))}m.propTypes={image:u.a.string,name:u.a.string,title:u.a.string,number:u.a.string,email:u.a.string,link:u.a.string,height:u.a.string,width:u.a.string},m.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},t.a=m},691:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o);function c(e){var t=e.select,n=e.userInput,a=e.clearQuery,o=t.filter((function(e){return"query"!==e.key}));return r.a.createElement("ul",{className:"no-dots list-inline my-2 mx-0"},n.length>0?r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("button",{type:"button",className:"btn btn-link red-title",id:n,onClick:function(){return a("query")},"data-toggle":"tooltip","data-placement":"top",title:"Click on link to remove filter"},n)):"",o.map((function(e){return r.a.createElement("li",{className:" list-inline-item",key:e.key},r.a.createElement("button",{type:"button",className:"btn btn-link red-title",id:e.selected,onClick:function(){return a(e.key)},"data-toggle":"tooltip","data-placement":"top","data-html":"true",title:"Click on link to remove filter"},e.selected))})))}c.propTypes={select:i.a.arrayOf(i.a.object),userInput:i.a.string,clearQuery:i.a.func},c.defaultProps={select:[],userInput:"",clearQuery:function(){}},t.a=c},834:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o);function c(e){var t=e.userInput,n=e.handleChange;return r.a.createElement("form",{className:"form-inline filter w-40"},r.a.createElement("label",{htmlFor:"searchForAttorney",className:"w-100"},r.a.createElement("input",{type:"text",id:"searchForAttorney",className:"w-100",value:t,placeholder:"Search by keyword...",onChange:n}),r.a.createElement("span",{className:"sr-only"},"Search For Attorney")))}c.propTypes={userInput:i.a.string,handleChange:i.a.func},c.defaultProps={userInput:"",handleChange:function(){}};var l=c;function s(e){var t=e.alphabet,n=e.letterClick;return r.a.createElement("div",{className:"col-sm-12 col-md-10 mt-2"},r.a.createElement("ul",{className:"list-inline ml-4 "},t.map((function(e){return r.a.createElement("li",{onClick:n,onKeyDown:n,key:e,role:"presentation",className:"text-bg text-white proxima-bold list-inline-item cursor-pointer"},r.a.createElement("h4",null,e))}))))}s.propTypes={alphabet:i.a.arrayOf(i.a.string),letterClick:i.a.func},s.defaultProps={alphabet:[],letterClick:function(){}};var u=s,m=n(94),p=n(519),f=n(480);function d(e){var t=e.title,n=e.onSelect,a=e.pChildren;return r.a.createElement("span",null,r.a.createElement("p",{className:"practice-title"},r.a.createElement("button",{onClick:function(e){return n(e,t)},name:"practices",type:"button",className:"proxima-bold practice-link btn btn-link"},t)),r.a.createElement("div",{className:"practice-children"},a.map((function(e){return r.a.createElement("button",{key:Object(f.a)(e.ID.toString()),type:"button",name:"practices",onClick:function(t){return n(t,e.title)},className:"dropdown-item btn btn-link"},e.title)}))))}function y(e){var t=e.practices,n=e.onSelect,a=e.removeVisibilityClass,o=t.filter((function(e){return 28345===e.id||29587===e.id||28276===e.id?e:""})),i=t.filter((function(e){return 29624===e.id||28271===e.id||29588===e.id?e:""})),c=t.filter((function(e){return 28270===e.id})),l=t.filter((function(e){return 28273===e.id||28274===e.id?e:""}));return r.a.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 megamenu filter"},r.a.createElement("span",{id:"megamneu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onFocus:a,onMouseOver:a,className:"dropdown-toggle btn btn-light my-1"},"Filter by practice",r.a.createElement(m.a,{icon:p.faCaretDown,className:"ml-5 mt-1"})),r.a.createElement("div",{"aria-labelledby":"megamneu",className:"dropdown-menu border-0 p-0 m-0 megamenu-container shadow-sm"},r.a.createElement("div",{className:"container mt--1"},r.a.createElement("div",{className:"row rounded-0 m-0"},r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},o.map((function(e){return r.a.createElement(d,{key:Object(f.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},i.map((function(e){return r.a.createElement(d,{key:Object(f.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},c.map((function(e){return r.a.createElement(d,{key:Object(f.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})}))),r.a.createElement("div",{className:"col-sm-12 col-md-3 mt-md-3"},l.map((function(e){return r.a.createElement(d,{key:Object(f.a)(e.id.toString()),title:e.title,onSelect:n,pChildren:e.children})})))))))}y.propTypes={practices:i.a.arrayOf(i.a.object),onSelect:i.a.func,removeVisibilityClass:i.a.func},y.defaultProps={practices:[],onSelect:function(){},removeVisibilityClass:function(){}},d.propTypes={title:i.a.string,onSelect:i.a.func,pChildren:i.a.arrayOf(i.a.object)},d.defaultProps={title:"",onSelect:function(){},pChildren:[]};var b=y;function g(e){var t=e.designation,n=e.onSelect;return r.a.createElement("li",{className:"dropdown w3_megamenu-fw nav-item list-inline-item filter"},r.a.createElement("span",{"data-toggle":"dropdown",id:"titleDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by title",r.a.createElement(m.a,{icon:p.faCaretDown,className:"ml-5 mt-1"})),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"titleDropDown"},t.map((function(e){return r.a.createElement("button",{type:"button",name:"designation",className:"dropdown-item btn btn-link",key:e.title,onClick:function(t){return n(t,e.title)}},e.title)}))))}g.propTypes={designation:i.a.arrayOf(i.a.object),onSelect:i.a.func},g.defaultProps={designation:[],onSelect:function(){}};var h=g;function v(e){var t=e.locations,n=e.onSelect;return r.a.createElement("li",{className:"dropdown nav-item list-inline-item mr-4 filter"},r.a.createElement("span",{"data-toggle":"dropdown",id:"locationDropDown",className:"dropdown-toggle btn btn-light my-1"},"Filter by location",r.a.createElement(m.a,{icon:p.faCaretDown,className:"ml-5 mt-1"})),r.a.createElement("div",{className:"dropdown-menu w-100","aria-labelledby":"locationDropDown"},t.map((function(e){return r.a.createElement("button",{type:"button",name:"location",className:"dropdown-item btn btn-link",key:e.id,onClick:function(t){return n(t,e.title)}},e.title)}))))}v.propTypes={locations:i.a.arrayOf(i.a.object),onSelect:i.a.func},v.defaultProps={locations:[],onSelect:function(){}};var E=v;function k(e){var t=e.content,n=e.onMobileSelect,a=e.title,o=e.name;return r.a.createElement("div",{className:"my-2"},r.a.createElement("select",{name:o,onChange:n,className:"mobile-select"},r.a.createElement("option",{value:""},a),t.map((function(e){return r.a.createElement("option",{key:e.ID,value:e.title,name:"practices",className:"mobile-option"},e.title)}))))}k.propTypes={title:i.a.string,name:i.a.string,content:i.a.arrayOf(i.a.object),onMobileSelect:i.a.func},k.defaultProps={title:"",name:"",content:[],onMobileSelect:function(){}};var w=k;function C(e){var t=e.practices,n=e.alphabet,a=e.locations,o=e.designation,i=e.userInput,c=e.handleChange,s=e.onSelect,m=e.letterClick,p=e.clearAll,f=e.onMobileSelect,d=e.removeVisibilityClass;return r.a.createElement("span",null,window.innerWidth>992?r.a.createElement("nav",{className:"navbar navbar-expand-lg bckground-gray border p-2"},r.a.createElement(l,{userInput:i,handleChange:c}),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav nav-fill w-100"},r.a.createElement(b,{practices:t,onSelect:s,removeVisibilityClass:d}),r.a.createElement(E,{locations:a,onSelect:s}),r.a.createElement(h,{designation:o,onSelect:s})))):r.a.createElement("div",{className:"bckground-gray p-2"},r.a.createElement(l,{userInput:i,handleChange:c}),r.a.createElement(w,{title:"Filter by practice",name:"practices",content:t,onMobileSelect:f}),r.a.createElement(w,{title:"Filter by location",name:"location",content:a,onMobileSelect:f}),r.a.createElement(w,{title:"Filter by title",name:"designation",content:o,onMobileSelect:f})),r.a.createElement("div",{className:"drkbckground-gray border h-57"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement(u,{alphabet:n,letterClick:m}),r.a.createElement("div",{className:"col-sm-12 col-md-2"},r.a.createElement("button",{type:"button",className:"btn btn-danger float-right mx-3",onClick:function(){return p()}},"Clear All")))))}C.propTypes={practices:i.a.arrayOf(i.a.object),alphabet:i.a.arrayOf(i.a.string),locations:i.a.arrayOf(i.a.object),designation:i.a.arrayOf(i.a.object),userInput:i.a.string,handleChange:i.a.func,onSelect:i.a.func,letterClick:i.a.func,clearAll:i.a.func,onMobileSelect:i.a.func,removeVisibilityClass:i.a.func},C.defaultProps={practices:[],alphabet:[],locations:[],designation:[],userInput:"",handleChange:function(){},onSelect:function(){},letterClick:function(){},clearAll:function(){},onMobileSelect:function(){},removeVisibilityClass:function(){}};t.a=C},839:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(489),l=n(480);function s(e){var t=e.attorneys,n=e.userInput,a=e.select,o=Object(l.c)(a,"practices"),i=Object(l.c)(a,"letter"),s=Object(l.c)(a,"designation"),u=Object(l.c)(a,"location"),m=t.filter((function(e){return o.length>0?e.practices_array.indexOf(o[0])>-1:e})).filter((function(e){return u.length>0?e.location.indexOf(u[0])>=0:e})).filter((function(e){return s.length>0?e.designation.indexOf(s[0])>=0:e})).filter((function(e){return i.length>0?e.last_name.charAt(0).toLowerCase()===i[0].toLowerCase():e})).filter((function(e){var t=e.practices.replace(/&amp;/g,"&");return n?e.title.indexOf(n)>=0||t.indexOf(n.trim())>=0?e:void 0:e}));return r.a.createElement("div",{className:"row"},m.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(c.a,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"81px"}))})),m.length<1&&r.a.createElement("h3",{className:"text-center red-title d-block mx-auto my-4"},"Sorry, no attorneys found according to this query."))}s.propTypes={attorneys:i.a.arrayOf(i.a.object),select:i.a.arrayOf(i.a.object),userInput:i.a.string},s.defaultProps={attorneys:[],select:[],userInput:""};var u=s;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 my-4"},r.a.createElement("h3",{className:"red-title text-uppercase border-bottom mb-0"},e)),t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4 mb-2"},r.a.createElement(c.a,{link:e.link,image:e.better_featured_image,name:e.title,title:e.designation,number:e.phone,email:e.email,width:"80px",height:"112px"}))})))}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,a,o,i=(t=c,function(){var e,n=g(t);if(b()){var a=g(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return y(this,e)});function c(){return p(this,c),i.apply(this,arguments)}return n=c,(a=[{key:"render",value:function(){var e=this.props.attorneys,t=e.filter((function(e){return"Managing Partner"===e.designation})),n=e.filter((function(e){return"Partner"===e.designation})),a=e.filter((function(e){return"Counsel"===e.designation})),o=e.filter((function(e){return e.designation.indexOf("Of Counsel")>-1})),i=e.filter((function(e){return"Senior Associate"===e.designation})),c=e.filter((function(e){return"Associate"===e.designation}));return r.a.createElement("div",null,h("Managing Partner",t),h("Partners",n),h("Counsel",a),h("Of Counsel & Counsel Emeritus",o),h("Senior Associates",i),h("Associates",c))}}])&&f(n.prototype,a),o&&f(n,o),c}(a.PureComponent);v.propTypes={attorneys:i.a.arrayOf(i.a.object)},v.defaultProps={attorneys:[]};var E=v;function k(e){var t=e.attorneys,n=e.select,a=e.userInput;return r.a.createElement("div",{className:"container mt-2"},n.length>0?r.a.createElement(u,{select:n,attorneys:t,userInput:a}):r.a.createElement(E,{attorneys:t}))}k.propTypes={attorneys:i.a.arrayOf(i.a.object),select:i.a.arrayOf(i.a.object),userInput:i.a.string},k.defaultProps={attorneys:[],select:[],userInput:""};t.a=k}}]);