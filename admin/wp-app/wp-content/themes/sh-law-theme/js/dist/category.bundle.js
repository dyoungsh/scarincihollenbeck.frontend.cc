!function(e){function t(t){for(var l,c,i=t[0],s=t[1],o=t[2],u=0,f=[];u<i.length;u++)c=i[u],r[c]&&f.push(r[c][0]),r[c]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(m&&m(t);f.length;)f.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(l=!1)}l&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},r={7:0},n=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(a,l,function(t){return e[t]}.bind(null,l));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/wp-content/themes/sh-law-theme/includes/assets/images/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var m=s;n.push([732,0]),a()}({200:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"46030ee63ff23381bed7683e81dc99c2.png"},4:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});t.createMarkup=function(e){return{__html:e}},t.getDirectionsFromLocation=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(a){var l=a.coords,r=l.latitude,n=l.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i="https://www.google.com/maps/dir/"+r+"+"+n+"/"+t.filter((function(e){return e.title===c}))[0].address;window.open(i,"_blank")}),(function(e){console.warn("ERROR("+e.code+"):"+e.message)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},t.splitUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=e.split("/"),l=a.filter((function(e){return""!==e}));return null!==t&&(l=l.filter((function(e){return""!==e&&e!==t}))),l},t.splitUrlPreview=function(e,t){var a=e.substring(e.indexOf(t)+1);return a=a.substring(0,a.indexOf("&"))},t.sortByKey=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),e},t.sortByDateKey=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})),e},t.addRandomKey=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},t.urlify=function(e){return e.toLowerCase().replace(/\s/g,"-")},t.locationUrl=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},t.makeTitle=function(e){return e.indexOf("-")>-1?e.replace(/-|\s/g," ").toUpperCase():e.indexOf("+")>-1?e.replace(/\+/g," ").toUpperCase():e.toUpperCase()},t.unLink=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ")},t.filterByKey=function(e,t){for(var a=[],l=0;l<e.length;l+=1)e[l].key&&e[l].key===t&&a.push(e[l].selected);return a},t.sumbitSearchForm=function(e){var t=e.s,a=e.practice,l=e.attorney,r=e.category,n=((t||"")+" "+(a&&"Filter by practice"!==a?a:"")+" "+(l&&"Filter by attorney"!==l?l:"")+" "+(r&&"Filter by category"!==r?r:"")).trim().replace(/[^\w\s]/gi,"");return"https://scarincihollenbeck.com/?s="+n.toLowerCase().replace(/\s/g,"+")}},41:function(e,t,a){e.exports=a.p+"88a9c0b8e7ff2ed7ecff91cfdaa0b816.png"},732:function(e,t,a){a(16),e.exports=a(733)},733:function(e,t,a){var l=c(a(0)),r=c(a(14)),n=c(a(734));function c(e){return e&&e.__esModule?e:{default:e}}r.default.render(l.default.createElement(n.default,null),document.getElementById("category"))},734:function(e,t,a){(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),r=a(0),n=m(r),c=m(a(35)),i=m(a(735)),s=a(4),o=m(a(25));function m(e){return e&&e.__esModule?e:{default:e}}a(200);var u=function(e){var t=e.onClick;return n.default.createElement("i",{className:"fas fa-angle-double-right post-scroll post-scroll-right",role:"button",tabIndex:0,onKeyDown:t,onClick:t})},f=function(e){var t=e.onClick;return n.default.createElement("i",{className:"fas fa-angle-double-left post-scroll post-scroll-left",role:"button",tabIndex:0,onKeyDown:t,onClick:t})},d=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={archives:[],authors:[],latest:[],main:[],practices:[],breadCrumb:[],categorySlug:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),l(a,[{key:"componentDidMount",value:function(){var t=this,a=window.location.href,l="business-law";if("http://localhost:9000/category-index.html"!==a){var r=a.split("/").filter((function(e){return""!==e}));l=r[r.length-1];var n=r.splice(r.indexOf("category")+1,a.length);this.setState({breadCrumb:n}),this.setState({categorySlug:l})}else this.setState({categorySlug:l}),this.setState({breadCrumb:[l]});e("https://scarincihollenbeck.com/wp-json/category/posts/"+l).then((function(e){return e.json()})).then((function(e){var a=e.archives,l=e.authors,r=e.latest,n=e.main,c=e.practices,i=(0,s.sortByKey)(l,"lastName");t.setState({archives:a,authors:i,latest:r,main:n,practices:c})}))}},{key:"render",value:function(){var e=this.state,t=e.archives,a=e.authors,l=e.latest,r=e.main,m=e.practices,d=e.breadCrumb,p=e.categorySlug,b={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!0,nextArrow:n.default.createElement(u,null),prevArrow:n.default.createElement(f,null)},h=d.map((function(e){return e}));return n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-sm-12 mt-0 mb-4"},n.default.createElement("h6",null,n.default.createElement("span",null,n.default.createElement("a",{href:""+window.location.origin,className:"red-title proxima-bold"},"HOME"),n.default.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},n.default.createElement("i",{className:"fas fa-caret-right"}))),"firm-events"===p||"firm-news"===p||h.indexOf("law-firm-insights")>-1?"":n.default.createElement("span",null,n.default.createElement("a",{href:window.location.origin+"/category/law-firm-insights",className:"red-title proxima-bold"},"LAW FIRM INSIGHTS"),n.default.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},n.default.createElement("i",{className:"fas fa-caret-right"}))),d.map((function(e,t){return t<d.length-1?n.default.createElement("span",{key:e},n.default.createElement("span",null,n.default.createElement("a",{href:window.location.origin+"/category/"+e,className:"red-title proxima-bold"},e===p?n.default.createElement("u",null,(0,s.makeTitle)(e)):""+(0,s.makeTitle)(e))),n.default.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},n.default.createElement("i",{className:"fas fa-caret-right"}))):n.default.createElement("span",{key:e},n.default.createElement("a",{href:window.location.origin+"/category/"+e,className:"red-title proxima-bold"},e===p?n.default.createElement("u",null,(0,s.makeTitle)(e)):""+(0,s.makeTitle)(e)))})))),n.default.createElement("div",{className:"col-lg-8 col-sm-12 border-right"},n.default.createElement("article",null,r.map((function(e){return n.default.createElement("div",{className:"main",key:e.title},n.default.createElement("a",{href:e.link},n.default.createElement("img",{src:e.image?e.image:o.default,className:"img-fluid",alt:e.title})),n.default.createElement("p",{className:"mt-5 mb-4"},n.default.createElement("a",{href:e.category.link,className:"text-muted ft-01 text-uppercase"},e.category.name)),n.default.createElement("h1",{className:"mb-4 mt-3 display-4"},n.default.createElement("a",{href:e.link},e.title)),n.default.createElement("p",{className:"text-muted mt-4 mb-4 mr-4"},e.excerpt),n.default.createElement("hr",null),n.default.createElement("p",{className:"mt-4 mb-4 ft-13"},n.default.createElement("span",{className:"text-black"},"BY "),e.author.map((function(t,a){return a<e.author.length-1?n.default.createElement("a",{key:t.name,href:t.link,className:"text-black text-uppercase"},n.default.createElement("u",null,t.name+",")," "):n.default.createElement("a",{key:t.name,href:t.link,className:"text-black text-uppercase"},n.default.createElement("u",null,t.name))}))))})))),n.default.createElement("div",{className:"col-lg-4 col-sm-12 border-right"},n.default.createElement("ul",{className:"no-dots mx-3 mt-0"},l.map((function(e){return n.default.createElement("li",{key:e.title,className:"w-100 mb-5"},n.default.createElement("a",{href:e.link},n.default.createElement("img",{src:e.image?e.image:o.default,className:"img-fluid",alt:e.title}),n.default.createElement("h5",{className:"mt-3 mb-1"},e.title),n.default.createElement("p",{className:"text-muted small-excerpt"},e.excerpt)))})))),n.default.createElement("div",{className:"col-sm-12 mt-5"},n.default.createElement("div",{className:"line-header"},n.default.createElement("h3",null,"MOST RECENT")),n.default.createElement(c.default,b,t.map((function(e){return n.default.createElement("div",{key:e.title,className:"px-3 pt-5 pb-2"},n.default.createElement("a",{href:e.link},n.default.createElement("img",{src:e.image?e.image:o.default,className:"img-fluid",alt:e.title}),n.default.createElement("h5",{className:"mt-3 mb-1"},e.title),n.default.createElement("p",{className:"text-muted small-excerpt"},e.excerpt)))})))),n.default.createElement("div",{className:"col-sm-12 mt-5"},n.default.createElement("div",{className:"line-header"},n.default.createElement("h3",null,"DISCOVER"))),"firm-events"!==p&&"firm-news"!==p?n.default.createElement("div",{className:"col-sm-12 col-md-3 mt-5 border-right"},n.default.createElement("h5",{className:"red-title"},"More from our attorneys"),n.default.createElement("hr",null),n.default.createElement("ul",{className:"ml-0 mh-75"},a.map((function(e){return n.default.createElement("li",{key:e.name,className:"blue-title ml-3"},n.default.createElement("a",{href:e.link,className:"blue-title proxima-bold mb-0"},e.name))})))):"","firm-events"===p||"firm-news"===p||0===m.length?n.default.createElement("div",{className:"col-sm-12 col-md-3 mt-5 border-right"},n.default.createElement("h5",{className:"red-title"},"Scarinci Hollenbeck Core Practices"),n.default.createElement("hr",null),n.default.createElement("ul",{className:"ml-0"},n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/commercial-real-estate/",className:"blue-title proxima-bold mb-0"},"Commercial Real Estate")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/corporate-transactions-business/",className:"blue-title proxima-bold mb-0"},"Corporate Transactions & Business")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/environmental-and-land-use/",className:"blue-title proxima-bold mb-0"},"Environmental & Land Use")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/intellectual-property/",className:"blue-title proxima-bold mb-0"},"Intellectual Property")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/labor-employment/",className:"blue-title proxima-bold mb-0"},"Labor & Employment")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/litigation/",className:"blue-title proxima-bold mb-0"},"Litigation")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/tax-trusts-estates/",className:"blue-title proxima-bold mb-0"},"Tax, Trust & Estates")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/practices/public-law/",className:"blue-title proxima-bold mb-0"},"Government & Law")))):"","firm-events"!==p&&"firm-news"!==p&&m.length>0?n.default.createElement("div",{className:"col-sm-12 col-md-4 mt-5 border-right"},n.default.createElement("h5",{className:"red-title"},"More about our areas of law"),n.default.createElement("hr",null),n.default.createElement("ul",{className:"ml-0"},m.map((function(e){return n.default.createElement("li",{key:e.name,className:"blue-title ml-3"},n.default.createElement("a",{href:e.link,className:"blue-title proxima-bold mb-0"},e.name))})))):"","firm-news"===p||"firm-events"===p?n.default.createElement("div",{className:"col-sm-12 col-md-4 mt-5 border-right"},n.default.createElement("h5",{className:"red-title"},"Firm Insight's Categories"),n.default.createElement("hr",null),n.default.createElement("ul",{className:"ml-0"},n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/business-law/",className:"blue-title proxima-bold mb-0"},"Business Law")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/cannabis-law/",className:"blue-title proxima-bold mb-0"},"Cannabis Law")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/commercial-real-estate/",className:"blue-title proxima-bold mb-0"},"Commercial Real Estate")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/law-firm-insights/entertainment-and-media/",className:"blue-title proxima-bold mb-0"},"Entertainment and Media")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/law-firm-insights/environmental-land-use/",className:"blue-title proxima-bold mb-0"},"Environmental and Land Use")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/intellectual-property/",className:"blue-title proxima-bold mb-0"},"Intellectual Property")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/labor-employment/",className:"blue-title proxima-bold mb-0"},"Labor and Employment")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/litigation/",className:"blue-title proxima-bold mb-0"},"Litigation")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/public-law/",className:"blue-title proxima-bold mb-0"},"Public Law")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/tax/",className:"blue-title proxima-bold mb-0"},"Tax")),n.default.createElement("li",{className:"blue-title ml-3"},n.default.createElement("a",{href:"https://scarincihollenbeck.com/category/law-firm-insights/technology/",className:"blue-title proxima-bold mb-0"},"Technology")))):"",n.default.createElement("div",{className:"col-sm-12 col-md-5 mt-5"},n.default.createElement("h5",{className:"red-title"},"Join our mailing list!"),n.default.createElement("hr",null),n.default.createElement("div",{className:"ModalForm-main"},n.default.createElement("p",{className:"text-center text-muted small-excerpt"},"Enter your email and select a category(s) below."),n.default.createElement(i.default,null))),m.map((function(e){return n.default.createElement("div",{className:"col-sm-12 mt-5",key:e.id},n.default.createElement("div",{className:"line-header"},n.default.createElement("h3",{className:"text-uppercase"},e.name)),n.default.createElement(c.default,b,e.posts.map((function(e){return n.default.createElement("div",{key:e.title,className:"px-3 pt-5 pb-2"},n.default.createElement("a",{href:e.link},n.default.createElement("img",{src:e.image?e.image:o.default,className:"img-fluid",alt:e.title}),n.default.createElement("h5",{className:"mt-3 mb-1"},e.title),n.default.createElement("p",{className:"text-muted small-excerpt"},e.excerpt)))}))))})),n.default.createElement("div",{className:"col-sm-12 border-top mt-5"},n.default.createElement("p",{className:"text-center lead mt-4"},n.default.createElement("small",null,n.default.createElement("em",null,"Looking for something specific, feel free to search our archives."))),n.default.createElement("p",{className:"text-center"},n.default.createElement("a",{href:window.location.origin+"/archive/"+p,className:"red-title"},n.default.createElement("u",null,"Site Archives >>"))))))}}]),a}(r.Component);t.default=d}).call(this,a(10))},735:function(e,t,a){(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),r=a(0),n=i(r),c=i(a(3));i(a(41));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}a(200);var o=[{key:"business",label:"Business Law",name:"Business Law",property:"column_1"},{key:"firmnews",label:"Firm News",name:"Firm News",property:"column_1"},{key:"publiclaw",label:"Public Law",name:"Public Law",property:"column_1"},{key:"technology",label:"Technology",name:"Technology",property:"column_1"},{key:"tax",label:"Tax",name:"Tax",property:"column_1"},{key:"firmevents",label:"Firm Events",name:"Firm Events",property:"column_1"},{key:"cannabis",label:"Cannabis Law",name:"Cannabis Law",property:"column_1"},{key:"commercialRealEstate",label:"Commercial Real Estate",name:"Commercial Real Estate",property:"column_two"},{key:"covid19alerts",label:"COVID-19 Alerts",name:"COVID-19 Alerts",property:"column_two"},{key:"entertainmentSports",label:"Entertainment & Sports",name:"Entertainment & Sports",property:"column_two"},{key:"environmentalLandUse",label:"Environmental & Land Use",name:"Environmental & Land Use",property:"column_two"},{key:"intellectualProperty",label:"Intellectual Property",name:"Intellectual Property",property:"column_two"},{key:"laboremployment",label:"Labor Employment",name:"Labor Employment",property:"column_two"},{key:"litigation",label:"Litigation",name:"Litigation",property:"column_two"}],m=function(e){var t=e.property,a=e.name,l=e.onChange;return n.default.createElement("input",{type:"checkbox",property:t,name:a,onChange:l})},u=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={email:"",firstName:"",lastName:"",categories:[],message:!1},t.handleChange=t.handleChange.bind(t),t.handleSubmit=t.handleSubmit.bind(t),t.handleCategoryChange=t.handleCategoryChange.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),l(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,l=t.value;"firstName"===a&&this.setState({firstName:l}),"lastName"===a&&this.setState({lastName:l}),"email"===a&&this.setState({email:l})}},{key:"handleCategoryChange",value:function(e){var t=this.state.categories,a=e.target.name,l=e.target.getAttribute("property"),r=e.target.checked;!0===r&&this.setState({categories:[].concat(s(t),[{property:l,value:a}])}),!1===r&&this.setState({categories:t.filter((function(e){return e.value!==a}))})}},{key:"handleSubmit",value:function(t){var a=this;t.preventDefault();var l=this.state,r={firstName:l.firstName,lastName:l.lastName,email:l.email,categoryValues:l.categories.map((function(e){return e.value})),siteUrl:window.location.href};e("https://mail.hollenbeckscarinci.com/shlaw/site/subscription/form",{method:"post",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&a.setState({message:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.email,l=t.message,r=t.lastName,c=t.firstName;return n.default.createElement("div",{className:"w-100"},l?n.default.createElement("p",{className:"text-success"},"Thank you for subscribing!"):"",n.default.createElement("form",{onSubmit:this.handleSubmit,method:"post",className:"mt-3"},n.default.createElement("div",{className:"form-group"},n.default.createElement("label",{htmlFor:"firstName",className:"sr-only"}," Email:"),n.default.createElement("input",{id:"firstName",name:"firstName",type:"text",value:c,onChange:this.handleChange,className:"form-control","aria-describedby":"firstName",placeholder:"Enter first name"})),n.default.createElement("div",{className:"form-group"},n.default.createElement("label",{htmlFor:"lastName",className:"sr-only"}," last Name:"),n.default.createElement("input",{id:"lastName",name:"lastName",type:"text",value:r,onChange:this.handleChange,className:"form-control","aria-describedby":"lastName",placeholder:"Enter last name"})),n.default.createElement("div",{className:"form-group"},n.default.createElement("label",{htmlFor:"email",className:"sr-only"}," Email:"),n.default.createElement("input",{id:"email",name:"email",type:"text",value:a,onChange:this.handleChange,className:"form-control","aria-describedby":"email",placeholder:"Enter email",required:!0})),n.default.createElement("div",{className:"form-group mb-0"},n.default.createElement("p",{className:"small-excerpt"},"Please select a category(s) below:")),n.default.createElement("ul",{className:"no-dots two-column"},o.map((function(t){return n.default.createElement("li",{key:t.key,className:"mb--1"},n.default.createElement("label",{htmlFor:t.name},n.default.createElement(m,{id:t.name,className:"d-block",name:t.name,property:t.property,onChange:e.handleCategoryChange})," ",t.name))}))),n.default.createElement("div",{className:"modal-footer"},n.default.createElement("input",{type:"submit",className:"btn btn-danger",value:"Submit"}))))}}]),a}(r.Component);m.propTypes={property:c.default.string,name:c.default.string,onChange:c.default.func},m.defaultProps={property:"",name:"",onChange:function(){}},u.propTypes={hideSubscription:c.default.func},u.defaultProps={hideSubscription:function(){}},t.default=u}).call(this,a(10))}});