(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{459:function(e,t,n){n.r(t),function(e){var a=n(0),r=n.n(a),o=n(486),i=n(484),c=n(481),l=n(840),s=n(692);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(h,t);var n,a,m,g,v=(n=h,function(){var e,t=b(n);if(y()){var a=b(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return f(this,e)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=v.call(this,e)).state={sort:"title",positions:[],seo:{},keyword:"",location:"",type:""},t.filterTerm=t.filterTerm.bind(d(t)),t.selectOption=t.selectOption.bind(d(t)),t.clearFilter=t.clearFilter.bind(d(t)),t}return a=h,(m=[{key:"componentDidMount",value:function(){var t=this;e("".concat("https://admin.legalmarketinghouse.com","/wp-json/career-portal/careers"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var n=e.careers,a=e.seo;t.setState({positions:n,seo:a})}))}},{key:"filterTerm",value:function(e){var t=e.target.value;this.setState({keyword:t})}},{key:"selectOption",value:function(e){var t=e.target,n=t.name,a=t.value;"location"===n?this.setState({location:a}):"type"===n&&this.setState({type:a})}},{key:"clearFilter",value:function(){this.setState({keyword:"",location:"",type:""})}},{key:"render",value:function(){var e=this.state,t=e.positions,n=e.sort,a=e.keyword,m=e.type,u=e.location,p=e.seo,f=this.props.match.params.career;return r.a.createElement("div",null,r.a.createElement(o.a,{seo:p}),r.a.createElement(c.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg",title:"Careers & Available Positions",subtitle:" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."}),r.a.createElement(i.a,null,r.a.createElement(l.a,{sort:n,positions:t,keyword:a,type:m,career:f,location:u,selectOption:this.selectOption,filterTerm:this.filterTerm,clearFilter:this.clearFilter}),r.a.createElement(s.a,{content:"EE content will og here"})))}}])&&u(a.prototype,m),g&&u(a,g),h}(a.Component);t.default=g}.call(this,n(130))},480:function(e,t,n){n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return u}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},i=function(e){return{__html:e}},c=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,o=a.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),c=t.filter((function(e){return e.title===i}))[0].address,l="https://www.google.com/maps/dir/".concat(r,"+").concat(o,"/").concat(c);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},m=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n},u=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},481:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(483),l=n(480);function s(){var e=u(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return s=function(){return e},e}function m(){var e=u(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return m=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=function(e){var t=e.title,n=e.subtitle,a=e.image,o=e.height,i=c.a.div(m(),a,o),u=c.a.div(s());return r.a.createElement(i,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(l.b)(n)}))))))};p.propTypes={image:i.a.string,title:i.a.string,subtitle:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),height:i.a.string},p.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=p},484:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},486:function(e,t,n){var a=n(0),r=n.n(a),o=n(482),i=n(3),c=n.n(i);function l(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}l.propTypes={seo:c.a.objectOf(c.a.string)},l.defaultProps={seo:{}},t.a=l},692:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"EQUAL EMPLOYMENT OPPORTUNITY")),r.a.createElement("div",{className:"container article-container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 ft-12"},r.a.createElement("p",null,"Scarinci Hollenbeck is an equal opportunity employer. It is Scarinci Hollenbeck’s policy to consider all applicants for employment solely on the basis of their qualifications for the job without regard to race, color, creed, sex, sexual orientation, gender identity or expression, marital status, age, religion, ancestry, national origin, citizenship, disability, atypical hereditary cellular or blood trait, arrest record, liability for service in the armed forces of the United States or unfavorable military discharge."),r.a.createElement("p",null,"In addition, the Firm attempts to comply with all applicable state and local laws and regulations governing nondiscrimination in employment and employment-related decision making. This policy applies to decisions regarding employment, placement, promotion, termination, layoff, recall, transfer, leave of absence, compensation and training."),r.a.createElement("p",null,"The Firm is committed to making reasonable accommodations upon request to ensure applicants with disabilities can be accepted for employment consistent with their full capabilities."),r.a.createElement("p",{className:"proxima-bold"},"TO READ ABOUT SCARINCI HOLLENBECK’S COMMITMENT TO DIVERSITY,"," ",r.a.createElement("a",{href:"".concat(window.location.host,"/diversity"),className:"red-title proxima-bold"},r.a.createElement("u",null,"CLICK HERE.")))))))}},840:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(480);function l(e){var t=e.locations,n=e.positionType,a=e.keyword,o=e.filterTerm,i=e.location,c=e.type,l=e.selectOption,s=e.clearFilter,m=function(e){return e.filter((function(t,n){return e.indexOf(t)===n}))},u=m(t),p=m(n);return r.a.createElement("div",{className:"bckground-gray border"},r.a.createElement("div",{className:"pt-3 pr-3 pl-3 mb-0 row"},r.a.createElement("div",{className:"col-sm-12 col-md-4 filter"},r.a.createElement("label",{htmlFor:"keyword",className:"w-100"},r.a.createElement("input",{type:"text",id:"keyword",placeholder:"Keyword",onChange:o,value:a,className:"w-100"}),r.a.createElement("span",{className:"sr-only"},"Keyword"))),r.a.createElement("div",{className:"col-sm-12 col-md-3 filter"},r.a.createElement("form",{className:"d-block"},r.a.createElement("label",{htmlFor:"locForm",className:"w-100"},r.a.createElement("select",{name:"location",id:"locForm",value:i,onChange:l,className:"p-25 w-100"},r.a.createElement("option",{name:"location",value:"location"},"Locations"),u.map((function(e){return r.a.createElement("option",{name:"location",key:e,value:e},e)}))),r.a.createElement("span",{className:"sr-only"},"Location")))),r.a.createElement("div",{className:"col-sm-12 col-md-3 filter"},r.a.createElement("form",{className:"d-block"},r.a.createElement("label",{htmlFor:"typeForm",className:"w-100"},r.a.createElement("span",{className:"sr-only"},"Position Type"),r.a.createElement("select",{name:"type",id:"typeForm",value:c,onChange:l,className:"p-25 w-100"},r.a.createElement("option",{name:"type",value:"Position Type"},"Position Type"),p.map((function(e){return r.a.createElement("option",{name:"type",key:e,value:e},e)})))))),r.a.createElement("div",{className:"col-sm-12 col-md-2 filter"},r.a.createElement("button",{type:"button",className:"m-1 btn btn-danger float-right",onClick:function(){return s()}},"Clear Filters"))))}l.propTypes={locations:i.a.arrayOf(i.a.string),positionType:i.a.arrayOf(i.a.string),keyword:i.a.string,location:i.a.string,type:i.a.string,filterTerm:i.a.func,selectOption:i.a.func,clearFilter:i.a.func},l.defaultProps={locations:[],positionType:[],keyword:"",location:"",type:"",filterTerm:function(){},selectOption:function(){},clearFilter:function(){}};var s=l,m=n(15);function u(e){var t=e.positions;return r.a.createElement("div",{className:"w-100 border mt-0"},r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.title,className:"col-sm-12 col-md-4 mt-3 mb-2"},r.a.createElement(m.b,{to:"/career/".concat(Object(c.i)(e.title))},r.a.createElement("div",{className:"card d-flex flex-row"},r.a.createElement("div",{id:"bg-red-block"}),r.a.createElement("div",{className:"my-2"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"my-0"},r.a.createElement("strong",null,"Location: "),e.positionLocation),r.a.createElement("p",{className:"my-0"},r.a.createElement("strong",null,"Type: "),e.positionType),r.a.createElement("p",{className:"my-0"},r.a.createElement("strong",null,"Start: "),e.startDate)))))})))))}u.propTypes={positions:i.a.arrayOf(i.a.object)},u.defaultProps={positions:[]};var p=u;function f(e){var t=e.positions,n=e.keyword,a=e.filterTerm,o=e.location,i=e.type,l=e.selectOption,m=e.career,u=e.clearFilter,f=Object(c.h)(t,"title"),d=t.map((function(e){return e.positionLocation})),y=t.map((function(e){return e.positionType})),b=f.filter((function(e){return n?e.title.indexOf(n)>=0||e.positionDescription.indexOf(n.trim())>=0||e.positionLocation.indexOf(n)>=0||e.positionType.indexOf(n)>=0?e:void 0:e})).filter((function(e){return o?e.positionLocation.indexOf(o)>=0:e})).filter((function(e){return i?e.positionType.indexOf(i)>=0:e}));return r.a.createElement("div",{className:"mb-5",id:"career-section"},r.a.createElement(s,{locations:d,positionType:y,keyword:n,location:o,type:i,selectOption:l,filterTerm:a,clearFilter:u}),r.a.createElement(p,{positions:b,career:m}))}f.propTypes={keyword:i.a.string,location:i.a.string,type:i.a.string,career:i.a.string,positions:i.a.arrayOf(i.a.object),filterTerm:i.a.func,selectOption:i.a.func,clearFilter:i.a.func},f.defaultProps={keyword:"",location:"",type:"",career:"",positions:[],filterTerm:function(){},selectOption:function(){},clearFilter:function(){}};t.a=f}}]);