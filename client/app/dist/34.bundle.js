(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{457:function(e,t,n){n.r(t),function(e){var a=n(0),r=n.n(a),o=n(480),c=n(837),i=n(684),l=n(685),s=n(838);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(b,t);var n,a,m,p,w=(n=b,function(){var e,t=E(n);if(y()){var a=E(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return h(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=w.call(this,e)).state={searchTerm:"",posts:[],locations:[],seo:{},corePractices:[]},t.onChange=t.onChange.bind(g(t)),t.onCategorySelection=t.onCategorySelection.bind(g(t)),t}return a=b,(m=[{key:"componentDidMount",value:function(){var t=this;console.log("process.env.REACT_APP_ADMIN_SITE"),console.log("https://admin.legalmarketinghouse.com"),e("".concat("https://admin.legalmarketinghouse.com","/wp-json/front-page/meta"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){t.setState({seo:e})})).then((function(){e("".concat("https://admin.legalmarketinghouse.com","/wp-json/front-page/news"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(n){e("".concat("https://admin.legalmarketinghouse.com","/wp-json/front-page/events"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var a=e,r=[].concat(u(n),u(a));t.setState({posts:r})}))}))})).then((function(){e("".concat("http://142.93.73.211:8200","/cached/office-locations"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){t.setState({locations:e.offices})}))})).then((function(){e("".concat("http://142.93.73.211:8200","/cached/core-practices"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{name:e.title,link:e.slug}}));t.setState({corePractices:n})}))}))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({searchTerm:t})}},{key:"onCategorySelection",value:function(e){window.location=e.target.value}},{key:"render",value:function(){var e=this.state,t=e.posts,n=e.locations,a=e.seo,m=e.corePractices,u=e.searchTerm,p=e.end,d=Object(o.h)(n,"id"),f=Object(o.h)(t,"date");return r.a.createElement("div",{id:"front-page"},r.a.createElement(l.a,{seo:a}),r.a.createElement(s.a,{searchTerm:u,onChange:this.onChange}),r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{corePractices:m,onCategorySelection:this.onCategorySelection}),r.a.createElement(i.a,{sortedPosts:f,sortedLocations:d,end:p})))}}])&&d(a.prototype,m),p&&d(a,p),b}(a.Component);t.default=w}.call(this,n(130))},480:function(e,t,n){n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return u}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},c=function(e){return{__html:e}},i=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,o=a.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===c}))[0].address,l="https://www.google.com/maps/dir/".concat(r,"+").concat(o,"/").concat(i);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},m=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n},u=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},684:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(131);function l(e){var t=e.sortedPosts,n=e.sortedLocations;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 mt-5 px-0"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"News & Events"))),r.a.createElement("div",{className:"col-sm-12 px-0 pt-5"},t.length>0&&r.a.createElement(i.a,{sliderType:"LargeArticle",slides:t})),r.a.createElement("div",{className:"col-sm-12 mt-5 px-0"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"OUR OFFICES"))),r.a.createElement("div",{className:"col-sm-12 px-0 pt-5"},r.a.createElement("div",{className:"location-carousel-container"},n.length>0&&r.a.createElement(i.a,{sliderType:"Location",slides:n}))))}l.propTypes={sortedPosts:c.a.arrayOf(c.a.object),sortedLocations:c.a.arrayOf(c.a.object)},l.defaultProps={sortedPosts:[],sortedLocations:[]},t.a=l},685:function(e,t,n){var a=n(0),r=n.n(a),o=n(482),c=n(3),i=n.n(c);function l(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:window.location.href}),r.a.createElement("meta",{property:"og:locale",content:"en_US"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:t.title}),r.a.createElement("meta",{property:"og:description",content:t.metaDescription}),r.a.createElement("meta",{property:"og:url",content:window.location.href}),r.a.createElement("meta",{property:"og:site_name",content:"Scarinci Hollenbeck"}),r.a.createElement("meta",{property:"og:image",content:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png"}),r.a.createElement("meta",{property:"og:image:secure_url",content:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png"}),r.a.createElement("meta",{property:"og:image:width",content:"750"}),r.a.createElement("meta",{property:"og:image:height",content:"350"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:description",content:t.metaDescription}),r.a.createElement("meta",{name:"twitter:title",content:t.title}),r.a.createElement("meta",{name:"twitter:site",content:"@S_H_Law"}),r.a.createElement("meta",{name:"twitter:image",content:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png"}),r.a.createElement("meta",{name:"twitter:creator",content:"@S_H_Law"}),r.a.createElement("meta",{name:"msvalidate.01",content:"D568BE2730F6C27E33061E84F8DE58B1"}),r.a.createElement("meta",{name:"google-site-verification",content:"googlee1788c62f584220b"}),r.a.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "http://schema.org",\n        "@type": "WebSite",\n        "name": "Scarinci Hollenbeck",\n        "url": '.concat(window.location.href,',\n        sameAs": [\n          "https://www.facebook.com/ScarinciHollenbeck/",\n           "https://twitter.com/s_h_law",\n           "https://www.linkedin.com/company/scarinci-hollenbeck-llc"\n        ],\n           "potentialAction": {\n             "@type": "SearchAction",\n             "target": "').concat(window.location.href,'/s?={search_term}",\n             "query-input": "required name=search_term"\n           }\n\n      }\n      \n      ')))}l.propTypes={seo:i.a.objectOf(i.a.string)},l.defaultProps={seo:{}},t.a=l},837:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=function(){return r.a.createElement("div",null,r.a.createElement("h5",{className:"red-title"},"Firm Overview"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-muted"},"With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, San Francisco, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them."),r.a.createElement("a",{href:"/firm-overview",className:"red-title proxima-bold"},r.a.createElement("u",null,"Read More >>")))};function l(e){var t=e.corePractices;return r.a.createElement("div",null,r.a.createElement("h5",{className:"red-title"},"Core Practices"),r.a.createElement("hr",null),r.a.createElement("ul",{className:"ml-4"},t.map((function(e){return r.a.createElement("li",{key:e.name,className:"blue-title"},r.a.createElement("a",{href:e.link,className:"blue-title proxima-bold"},e.name))}))),r.a.createElement("a",{href:"/practices",className:"red-title proxima-bold"},r.a.createElement("u",null,"All Practices >>")))}l.propTypes={corePractices:c.a.arrayOf(c.a.object)},l.defaultProps={corePractices:[]};var s=l;function m(e){var t=e.onCategorySelection;return r.a.createElement("div",null,r.a.createElement("h5",{className:"red-title"},"Firm Insights"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-muted"},"Firm Insights is Scarinci Hollenbeck's library of articles written by our attorneys. It is our way of providing you with the most critical legal updates that could impact your business."),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"category"},r.a.createElement("p",{className:"text-muted"},"Know what you're looking for? Select a category below:"),r.a.createElement("select",{id:"category",className:"home-select w-100 p-2",onChange:t},r.a.createElement("option",null,"Select Category"),r.a.createElement("option",{value:"/category/law-firm-insights/business-law/"},"Business Law"),r.a.createElement("option",{value:"/category/law-firm-insights/cannabis-law/"},"Cannabis Law"),r.a.createElement("option",{value:"/category/law-firm-insights/commercial-real-estate/"},"Commercial Real Estate"),r.a.createElement("option",{value:"/category/law-firm-insights/entertainment-and-media/"},"Entertainment and Media"),r.a.createElement("option",{value:"/category/law-firm-insights/environmental-land-use/"},"Environmental and Land Use"),r.a.createElement("option",{value:"/category/law-firm-insights/intellectual-property/"},"Intellectual Property"),r.a.createElement("option",{value:"/category/law-firm-insights/labor-employment/"},"Labor and Employment"),r.a.createElement("option",{value:"/category/law-firm-insights/litigation/"},"Litigation"),r.a.createElement("option",{value:"/category/law-firm-insights/public-law/"},"Public Law"),r.a.createElement("option",{value:"/category/law-firm-insights/tax/"},"Tax"),r.a.createElement("option",{value:"/category/law-firm-insights/technology/"},"Technology")))),r.a.createElement("p",{className:"my-3 small-excerpt mb-0"},"Not sure? Feel free to browse here."),r.a.createElement("a",{href:"/category/law-firm-insights/",className:"red-title proxima-bold"},r.a.createElement("u",null,"Firm Insights >>")))}m.propTypes={onCategorySelection:c.a.func},m.defaultProps={onCategorySelection:function(){}};var u=m;function p(e){var t=e.onCategorySelection,n=e.corePractices;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 px-0"},r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"ABOUT OUR FIRM"))),r.a.createElement("div",{className:"col-sm-12 col-md-4 mt-5 border-right"},r.a.createElement(i,null)),r.a.createElement("div",{className:"col-sm-12 col-md-4 mt-5 border-right"},r.a.createElement(s,{corePractices:n})),r.a.createElement("div",{className:"col-sm-12 col-md-4 mt-5"},r.a.createElement(u,{onCategorySelection:t})))}p.propTypes={onCategorySelection:c.a.func,corePractices:c.a.arrayOf(c.a.object)},p.defaultProps={onCategorySelection:function(){},corePractices:[]};t.a=p},838:function(e,t,n){var a=n(0),r=n.n(a),o=n(483),c=n(3),i=n.n(c),l=n(15),s=n(94),m=n(488),u=function(){return r.a.createElement("div",{className:"col-sm-12 col-md-6 border-right"},r.a.createElement("h1",{className:"text-white mx-5 mt-5 display-32 text--shadow animated fadeInUp fast"},"Scarinci Hollenbeck Covid-19 Crisis Management Group"),r.a.createElement("p",{className:"lead text-white text--shadow mx-5 animated fadeInUp slow"},"Scarinci Hollenbeck is 100% operational and ready to assist clients without any business disruption."),r.a.createElement("div",{className:"container ml-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 mb-3"},r.a.createElement(l.b,{to:"/firm-news/client-alert/client-alert-covid-19/",className:"btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn"},"Client Message",r.a.createElement(s.a,{icon:m.faCaretRight,className:"text-white ml-2"}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement(l.b,{to:"/covid-19-crisis-management-unit/",className:"btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn"},"Resource Center",r.a.createElement(s.a,{icon:m.faCaretRight,className:"text-white ml-2"}))))))},p=function(e){var t=e.searchTerm,n=e.onChange;return r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("img",{rel:"preconnect",src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png",alt:"scarinci hollenbeck diamond",className:"mt-3 p-2 animated fadeInUp slow mx-auto d-block"}),r.a.createElement("h2",{className:"text-white text-center display-32 text--shadow animated fadeInUp slow"},"How can we help?"),r.a.createElement("form",{className:"animated fadeInUp slow mx-3 mt-5 mb-5",onChange:n},r.a.createElement("span",{className:"screen-reader-text"},"Search for:"),r.a.createElement("input",{name:"s",type:"search","aria-labelledby":"searchbutton",placeholder:"What are you searching for..",defaultValue:t,className:"form-control mw-100 p-2 mx-auto d-block"}),r.a.createElement("button",{type:"button",onClick:function(e){return function(e){e.preventDefault();window.location="/s?=".concat(t.toLowerCase().replace(/\s/g,"+"))}(e)},id:"searchbutton",className:"btn btn-danger mt-3 mx-auto d-block btn-lg animated fadeInUp slow fnt-btn"},"Search",r.a.createElement("i",{className:"fa fa-angle-double-right text-white ml-2 animated fadeInUp slow"}))))};p.propTypes={searchTerm:i.a.string,onChange:i.a.func},p.defaultProps={searchTerm:"",onChange:function(){}};var d=p;function f(){var e=g(["\n  background-color: rgba(0,0,0, .50);\n  border-radius: 4px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);\n"]);return f=function(){return e},e}function h(){var e=g(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n"]);return h=function(){return e},e}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y=o.a.div(h(),"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/corona-virus-background-compressor.png"),E=o.a.div(f()),w=function(e){var t=e.onChange,n=e.searchTerm;return r.a.createElement(y,{className:"jumbotron jumbotron-fluid"},r.a.createElement(E,{className:"container animated fadeInUp fast mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement(u,null),r.a.createElement(d,{onChange:t,searchTerm:n}))))};w.propTypes={onChange:i.a.func,searchTerm:i.a.string},w.defaultProps={onChange:function(){},searchTerm:""};t.a=w}}]);