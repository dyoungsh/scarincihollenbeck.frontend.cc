(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{477:function(e,t,a){a.r(t),function(e){var n=a(0),r=a.n(n),c=a(497),o=a(486),l=a(498),i=a(830),s=a(831);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(v,t);var a,n,u,b,h=(a=v,function(){var e,t=g(a);if(y()){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=h.call(this,e)).state={term:"",results:[],news:[],events:[],insight:[],trending:[],pageNums:[],currentPage:"",breadCrumb:[],categorySlug:"",loading:!1},t.getPosts=t.getPosts.bind(d(t)),t}return n=v,(u=[{key:"componentDidMount",value:function(){var e,t,a,n=this,r=this.props.location.search;r.indexOf("/page/")>-1?(t=r.split("/page/").pop().replace("/",""),a=[e=r.split("?=").pop().split("/page/")[0],t]):a=[e=r.split("?=").pop(),t=1],this.setState({breadCrumb:a,categorySlug:e,currentPage:t},(function(){n.getPosts("".concat("https://admin.legalmarketinghouse.com","/wp-json/search/query/").concat(e,"/").concat(t))}))}},{key:"getPosts",value:function(t){var a=this;e(t).then((function(e){return e.json()})).then((function(e){var t=e.pages,n=e.results,r=e.posts;a.setState({results:n,trending:r,loading:!0});for(var c=[],o=1;o<=t;o+=1)c.push(o);a.setState({pageNums:c})})).then((function(){e("".concat("http://142.93.73.211:8200","/cached/latest-articles")).then((function(e){return e.json()})).then((function(e){var t=e.firmNews,n=e.firmInsights,r=e.firmEvents;a.setState({news:t,events:r,insight:n})}))}))}},{key:"render",value:function(){var e=this.state,t=e.results,a=e.news,n=e.events,u=e.insight,m=e.trending,f=e.pageNums,p=e.breadCrumb,d=e.categorySlug,y=e.currentPage,g=e.loading,b=y>2?y-1:1,h=y<f.length?parseInt(y,10)+1:f.length,v=window.location.href.split("/").filter((function(e){return""!==e})),E="number"==typeof v[v.length-1]?v[v.length-1]:1,w={title:"You searched for ".concat(d," | Scarinci Hollenbeck")};return r.a.createElement("div",null,r.a.createElement(o.a,{seo:w}),r.a.createElement(c.a,{header:r.a.createElement(l.a,{breadCrumb:p,categorySlug:d}),body:r.a.createElement(s.a,{results:t,categorySlug:d,next:h,prev:b,pageNums:f,news:a,events:n,insight:u,active:E,loading:g}),sidebar:r.a.createElement(i.a,{trending:m})}))}}])&&m(n.prototype,u),b&&m(n,b),v}(n.Component);t.default=b}.call(this,a(130))},480:function(e,t,a){a.d(t,"h",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"i",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return m}));var n=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},c=function(e){return e.toLowerCase().replace(/\s/g,"-")},o=function(e){return{__html:e}},l=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})),e},i=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(a){var n=a.coords,r=n.latitude,c=n.longitude,o=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),l=t.filter((function(e){return e.title===o}))[0].address,i="https://www.google.com/maps/dir/".concat(r,"+").concat(c,"/").concat(l);window.open(i,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var a=[],n=0;n<e.length;n+=1)e[n].key&&e[n].key===t&&a.push(e[n].selected);return a},m=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},485:function(e,t,a){(function(e){var n=a(0),r=a.n(n),c=a(480);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(y,t);var a,n,o,p,d=(a=y,function(){var e,t=f(a);if(m()){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=d.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(u(t)),t.onSubmit=t.onSubmit.bind(u(t)),t}return n=y,(o=[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=this.state.t;r[n]=a,this.setState({t:r})}},{key:"onSubmit",value:function(){var e,t,a,n,r,c,o=this.state.t;window.location=(t=(e=o).keyword,a=e.practice,n=e.attorney,r=e.category,c="".concat(void 0!==t?t:""," ").concat(void 0!==a?a:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(c.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:function(){var t=this;e("".concat("http://142.93.73.211:8200","/cached/search-options")).then((function(e){return e.json()})).then((function(e){var a=e.attorneys,n=e.categories,r=e.practices;t.setState({attorneys:a,categories:n,practices:r})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.attorneys,n=t.categories,o=t.practices,l=t.searchTerm,i=t.t;return r.a.createElement("div",{className:"w-100"},r.a.createElement("form",{onChange:this.onChange},r.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},r.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:l||"",placeholder:"Keyword...",className:"form-control p-2"}),r.a.createElement("span",{className:"sr-only"},"Search Site")),r.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},r.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},r.a.createElement("option",{defaultValue:"Filter by practice"},i.practice||"Filter by practice"),o.map((function(e){return r.a.createElement("option",{value:e.title||"",key:Object(c.a)(e.title)},e.title)}))),r.a.createElement("span",{className:"sr-only"},"Filter by Practice")),r.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},r.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},r.a.createElement("option",{defaultValue:"Filter by attorney"},i.attorney||"Filter by attorney"),a.map((function(e){return r.a.createElement("option",{value:e.title||"",key:Object(c.a)(e.title)},e.title)}))),r.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),r.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},r.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},r.a.createElement("option",{defaultValue:"Filter by category"},i.category||"Filter by category"),n.map((function(e){return"Uncategorized"!==e.title?r.a.createElement("option",{value:e.title||"",key:Object(c.a)(e.title)},e.title):""}))),r.a.createElement("span",{className:"sr-only"},"Filtery by Category")),r.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),r.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}])&&l(n.prototype,o),p&&l(n,p),y}(n.Component);t.a=p}).call(this,a(130))},486:function(e,t,a){var n=a(0),r=a.n(n),c=a(482),o=a(3),l=a.n(o);function i(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}i.propTypes={seo:l.a.objectOf(l.a.string)},i.defaultProps={seo:{}},t.a=i},490:function(e,t,a){var n=a(0),r=a.n(n),c=a(15),o=a(3),l=a.n(o),i=a(483),s=a(480);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 545px;\n  overflow:hidden;\n  overflow-y: auto;\n"]);return m=function(){return e},e}var f=i.a.div(m());function p(e){var t=e.split(" "),a=t[0][0]+t[t.length-1];return Object(s.i)(a.toLowerCase())}function d(e){var t=e.title,a=e.content;return r.a.createElement("div",{className:"w-100 mt-4"},r.a.createElement("div",{className:"sidebar-title"},t),r.a.createElement(f,{className:"off-white"},a.length>0?a.map((function(e){return r.a.createElement("div",{key:e.ID||Object(s.a)(e.title),className:"p-2"},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),(e.hasOwnProperty("author")||"Scarinci Hollenbeck"===e.author)&&r.a.createElement(r.a.Fragment,null,"string"==typeof e.author&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Author: "),r.a.createElement(c.b,{to:"/author/".concat(p(e.author))},e.author)),"object"===u(e.author)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Author: "),r.a.createElement(c.b,{to:"/author/".concat(p(e.author[0].name))},e.author[0].name))),e.hasOwnProperty("pubDate")&&r.a.createElement("p",{className:"my-0"},e.pubDate.substring(0,17)),e.hasOwnProperty("source")&&r.a.createElement("div",{className:"mt-0",dangerouslySetInnerHTML:Object(s.b)(e.source)}))})):r.a.createElement("div",{className:"mx-5 p-5"},r.a.createElement("p",null,"Articles loading..."))))}d.propTypes={content:l.a.arrayOf(l.a.object),title:l.a.string},d.defaultProps={content:[],title:""},t.a=d},497:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.header,a=e.body,n=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-18"},t),r.a.createElement("div",{className:"col-sm-12 col-md-8"},a),r.a.createElement("div",{className:"col-sm-12 col-md-4"},n)))}},498:function(e,t,a){var n=a(0),r=a.n(n),c=a(94),o=a(488),l=a(3),i=a.n(l);function s(e){var t=e.breadCrumb,a=e.categorySlug;return r.a.createElement("h6",null,r.a.createElement("span",null,r.a.createElement("a",{href:"".concat(window.location.origin),className:"red-title proxima-bold"},"HOME")),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(c.a,{icon:o.faCaretRight,className:"red-title"})),t.map((function(e,n){return n<t.length-1?r.a.createElement("span",{key:e},r.a.createElement("span",{className:"red-title proxima-bold text-uppercase"},e===a?r.a.createElement("u",null,a):"".concat(a)),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(c.a,{icon:o.faCaretRight,className:"red-title"}))):r.a.createElement("span",{key:e},r.a.createElement("span",{className:"red-title proxima-bold"},e===a?r.a.createElement("u",null,e):"".concat(e)))})))}s.propTypes={breadCrumb:i.a.arrayOf(i.a.oneOfType([i.a.string,i.a.number])),categorySlug:i.a.string},s.defaultProps={breadCrumb:[],categorySlug:""},t.a=s},499:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=a(131),i=a(480);function s(e){var t=e.title,a=e.articles,n=Object(i.h)(a,"date");return r.a.createElement("div",null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 pt-4"},r.a.createElement(l.a,{sliderType:"LargeArticle",slides:n})))))}s.propTypes={title:o.a.string,articles:o.a.arrayOf(o.a.object)},s.defaultProps={title:"",articles:[]},t.a=s},502:function(e,t,a){var n=a(0),r=a.n(n),c=a(15);t.a=function(){return r.a.createElement("div",{className:"w-100 mt-5"},r.a.createElement("div",{className:"sidebar-title"},"Firm Resources"),r.a.createElement("div",{className:"off-white"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content-page"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/category/firm-news",className:"proxima-bold"},"Firm News")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/category/law-firm-insights",className:"proxima-bold"},"Firm Insights")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/category/firm-events",className:"proxima-bold"},"Firm Events")))))}},830:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=a(490),i=a(485),s=a(502);function u(e){var t=e.trending;return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement(s.a,null),r.a.createElement(l.a,{title:"Trending Stories",content:t}))}u.propTypes={trending:o.a.arrayOf(o.a.object)},u.defaultProps={trending:[]},t.a=u},831:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=a(94),i=a(488),s=a(509),u=a(499);function m(e){var t=e.results,a=e.pageNums,n=e.categorySlug,c=e.news,o=e.insight,m=e.events,f=e.prev,p=e.next,d=e.active,y=e.loading;return console.log("loading"),console.log(y),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},!0===y?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-12 col-md-6"},t.map((function(e,t){return t<5?r.a.createElement("div",{className:"p-2",key:e.id},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"mt-0 mb-3 text-muted small-excerpt"},e.description))):""}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},t.map((function(e,t){return t>5?r.a.createElement("div",{className:"p-2",key:e.id},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"mt-0 mb-3 text-muted small-excerpt"},e.description))):""})))):r.a.createElement("div",{className:"col-sm-12 my-5"},r.a.createElement("h3",{className:"text-center red-title"},"Loading results...")),0===t.length&&!0===y&&r.a.createElement("div",{className:"col-sm-12 my-5"},r.a.createElement("h3",{className:"text-center red-title"}," Sorry, no results found for that query."))),r.a.createElement("div",{className:"w-100 mt-0 ml--1"},void 0!==t&&a.length>1?r.a.createElement("nav",{"aria-label":"pagination"},r.a.createElement("ul",{className:"d-flex flex-wrap no-dots lead"},r.a.createElement("li",{className:"mr-2"},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(f,"/"),tabIndex:"-1","aria-label":"previous link"},r.a.createElement(l.a,{icon:s.faCaretLeft}))),a.map((function(e){return d===e?r.a.createElement("li",{className:d===e?"active mr-2":"mr-2",key:"page-".concat(e)},r.a.createElement("a",{className:"text-dark mt-2",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(e,"/")},e)):""})),r.a.createElement("li",{className:"mx-1"},"..."),a.map((function(e){return a.length-1===e?r.a.createElement("li",{className:d===e?"active mr-2":"mr-2",key:"page-".concat(e)},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(e,"/")},e)):""})),r.a.createElement("li",{className:"ml-1"},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(p,"/"),"aria-label":"next link"},r.a.createElement(l.a,{icon:i.faCaretRight}))))):""),r.a.createElement("div",{className:"w-100 d-block"},r.a.createElement(u.a,{title:"Firm News",articles:c}),r.a.createElement(u.a,{title:"Firm Events",articles:m}),r.a.createElement(u.a,{title:"Firm Insights",articles:o})))}m.propTypes={results:o.a.arrayOf(o.a.object),pageNums:o.a.arrayOf(o.a.number),categorySlug:o.a.string,news:o.a.arrayOf(o.a.object),insight:o.a.arrayOf(o.a.object),events:o.a.arrayOf(o.a.object),prev:o.a.number,next:o.a.number,active:o.a.number},m.defaultProps={results:[],pageNums:[],categorySlug:"",news:[],insight:[],events:[],prev:0,next:0,active:1},t.a=m}}]);