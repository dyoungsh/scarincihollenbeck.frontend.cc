(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{461:function(e,t,a){a.r(t),function(e){var n=a(0),r=a.n(n),c=a(480),o=a(481),i=a(494),s=a(693),l=a(694),u=a(841);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(E,t);var a,n,m,y,v=(a=E,function(){var e,t=b(a);if(h()){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function E(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),(t=v.call(this,e)).state={currentOffice:"Lyndhurst",currentOfficeMap:"",currentOfficeAttorneys:[],currentOfficePractice:[],offices:[],posts:[],seo:{}},t.getLocationDirections=t.getLocationDirections.bind(g(t)),t}return n=E,(m=[{key:"componentDidMount",value:function(){var t=this;e("".concat("http://142.93.73.211:8200","/cached/office-locations"),{headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Accept-Encoding":"gzip"}}).then((function(e){return e.json()})).then((function(e){var a=e.offices,n=e.seo;t.setState({offices:a,seo:n})})).then((function(){var e=t.state.currentOffice;t.fetchOfficeData(e);var a=t.props.match.params.location;if(void 0!==a){var n=a.replace("-"," ");t.setState({currentOffice:n},(function(){return t.fetchOfficeData(a)}))}}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;if("desiredState"===e.location.state){var a=e.match.params.location,n=a.replace("-"," ");this.setState({currentOffice:n},(function(){return t.fetchOfficeData(a)}))}}},{key:"getLocationDirections",value:function(e){return Object(c.d)(e)}},{key:"fetchOfficeData",value:function(t){var a=this,n="".concat("https://admin.legalmarketinghouse.com","/wp-json/individual-location/office/").concat(t);e(n).then((function(e){return e.json()})).then((function(e){var t=e.mapLink,n=e.attorneys,r=e.practices,c=e.seo;a.setState({currentOfficeMap:t,currentOfficeAttorneys:n,currentOfficePractice:r,seo:c})})),e("".concat("https://admin.legalmarketinghouse.com","/wp-json/individual-location/posts/").concat(t)).then((function(e){return e.json()})).then((function(e){return a.setState({posts:e})}))}},{key:"render",value:function(){var e=this.state,t=e.offices,a=e.posts,n=e.currentOfficeMap,c=e.currentOfficeAttorneys,m=e.currentOfficePractice,f=e.currentOffice,p=e.seo;return r.a.createElement("div",null,r.a.createElement(s.a,{seo:p}),r.a.createElement(o.a,{title:"Office Locations",subtitle:"To best serve our clients, Scarinci Hollenbeck has ".concat(t.length.toString()," offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ."),image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg"}),r.a.createElement(i.a,{body:r.a.createElement(l.a,{attorneys:c,practices:m,map:n,title:f}),sidebar:r.a.createElement(u.a,{title:f,posts:a,offices:t,getLocationDirections:this.getLocationDirections,setNewLocation:this.setNewLocation})}))}}])&&f(n.prototype,m),y&&f(n,y),E}(n.Component);t.default=y}.call(this,a(130))},480:function(e,t,a){a.d(t,"h",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"i",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return m}));var n=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},c=function(e){return e.toLowerCase().replace(/\s/g,"-")},o=function(e){return{__html:e}},i=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})),e},s=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(a){var n=a.coords,r=n.latitude,c=n.longitude,o=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===o}))[0].address,s="https://www.google.com/maps/dir/".concat(r,"+").concat(c,"/").concat(i);window.open(s,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},l=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var a=[],n=0;n<e.length;n+=1)e[n].key&&e[n].key===t&&a.push(e[n].selected);return a},m=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()}},481:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(483),s=a(480);function l(){var e=m(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return l=function(){return e},e}function u(){var e=m(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=function(e){var t=e.title,a=e.subtitle,n=e.image,c=e.height,o=i.a.div(u(),n,c),m=i.a.div(l());return r.a.createElement(o,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(s.b)(a)}))))))};f.propTypes={image:o.a.string,title:o.a.string,subtitle:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),height:o.a.string},f.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=f},489:function(e,t,a){var n=a(0),r=a.n(n),c=a(15),o=a(94),i=a(492),s=a(493),l=a(3),u=a.n(l);function m(e){var t=e.link,a=e.image,n=e.name,l=e.title,u=e.number,m=e.email,f=e.height,p=e.width;return r.a.createElement("div",{className:"d-flex flex-row attorney-card",height:f},r.a.createElement(c.b,{to:t},r.a.createElement("img",{rel:"preload",src:a,alt:n,className:"mr-1",style:{width:p}})),r.a.createElement("div",{className:"mt-3 ml-3"},r.a.createElement(c.b,{to:t},r.a.createElement("p",{className:"text-uppercase red-title small-excerpt"},r.a.createElement("strong",null,n)),r.a.createElement("p",{className:"mb-1 small-excerpt"},r.a.createElement("strong",null,l))),r.a.createElement("div",{className:"small-excerpt"},r.a.createElement(o.a,{icon:i.faPhone})," ",u,r.a.createElement("br",null),r.a.createElement(o.a,{icon:s.faEnvelope})," ",m)))}m.propTypes={image:u.a.string,name:u.a.string,title:u.a.string,number:u.a.string,email:u.a.string,link:u.a.string,height:u.a.string,width:u.a.string},m.defaultProps={image:"",name:"",title:"",number:"",email:"",link:"",height:"",width:""},t.a=m},494:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.body,a=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},t),r.a.createElement("div",{className:"col-sm-12 col-md-4"},a)))}},693:function(e,t,a){var n=a(0),r=a.n(n),c=a(482),o=a(3),i=a.n(o);function s(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n        "@context": "https://schema.org",\n        "@type": "LegalService",\n        "name": '.concat(t.title,',\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": ').concat(t.streetAddress,',\n          "addressLocality": ').concat(t.addressLocality,',\n          "addressRegion": ').concat(t.addressRegion,',\n          "postalCode": ').concat(t.postalCode,'\n        },\n        "image": ').concat(t.image,',\n        "email": "info@sh-law.com",\n        "telePhone": ').concat(t.telephone,',\n        "url": ').concat(window.location.origin,"/").concat(t.canonicalLink,',\n        "paymentAccepted": [ "check", "credit card", "invoice" ],\n        "openingHours": "Mo,Tu,We,Th,Fr 08:00-06:00",\n        "openingHoursSpecification": [ {\n          "@type": "OpeningHoursSpecification",\n          "dayOfWeek": [\n            "Monday",\n            "Tuesday",\n            "Wednesday",\n            "Thursday",\n            "Friday"\n          ],\n          "opens": "08:00",\n          "closes": "06:00"\n        } ],\n        "geo": {\n          "@type": "GeoCoordinates",\n          "latitude": ').concat(t.latitude,',\n          "longitude": ').concat(t.longitude,'\n        },\n        "priceRange":"$$$$$"\n\n      }\n \n  ')))}s.propTypes={seo:i.a.objectOf(i.a.string)},s.defaultProps={seo:{}},t.a=s},694:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(489),s=a(480);function l(e){var t=e.attorneys,a=e.practices,n=e.map,c=e.title,o=Object(s.h)(t,"lastName");return r.a.createElement("div",{id:"location-body"},r.a.createElement("h4",{className:"bg-light-gray text-capitalize"},c," ","Office"),r.a.createElement("div",{className:"w-100"},r.a.createElement("iframe",{rel:"preconnect",title:"".concat(c," office"),src:n,className:"w-100 h-300",frameBorder:"0",allowFullScreen:!0})),r.a.createElement("h4",{className:"bg-light-gray text-capitalize mt-5"},c," ","Attorneys"),r.a.createElement("div",{className:"container limit-location-container"},r.a.createElement("div",{className:"row"},o.map((function(e){return r.a.createElement("div",{key:e.ID,className:"col-sm-12 col-md-6 mb-2"},r.a.createElement(i.a,{link:"/attorneys/".concat((t=e.link,t.split("/attorneys/").pop())),image:e.image,name:e.name,title:e.designation,number:e.contact,email:e.email,height:"112px",width:"81px"}));var t})))),r.a.createElement("h4",{className:"bg-light-gray mt-5"},"Services We Offer"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("ul",{className:"blue-title"},a.map((function(e,t){return a.length/2>t?r.a.createElement("li",{key:e.ID},r.a.createElement("a",{href:e.slug,className:"proxima-bold blue-title"},r.a.createElement("u",null,e.title))):""})))),r.a.createElement("div",{className:"col-sm-12  col-md-6"},r.a.createElement("ul",{className:"blue-title"},a.map((function(e,t){return a.length/2<=t?r.a.createElement("li",{key:e.ID},r.a.createElement("a",{href:e.slug,className:"proxima-bold blue-title"},r.a.createElement("u",null,e.title))):""})))))))}l.propTypes={attorneys:o.a.arrayOf(o.a.object),practices:o.a.arrayOf(o.a.object),map:o.a.string,title:o.a.string},l.defaultProps={attorneys:[],practices:[],map:"",title:""},t.a=l},841:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(480),s=a(15),l=a(94),u=a(492),m=a(536),f=a(521),p=a(520);function d(e){var t=e.getLocationDirections,a=e.title,n=e.phone,c=e.fax,o=e.shortName,d=e.address,g=e.currentOffice;return r.a.createElement("div",{className:"mb-2"},r.a.createElement(s.b,{to:{pathname:"/location/".concat(Object(i.e)(a)),state:"desiredState"},className:"sidebar-title"},a,Object(i.e)(a)===g.replace(" ","-")?r.a.createElement(l.a,{icon:p.faMinus,className:"text-white location-toggle-icon"}):r.a.createElement(l.a,{icon:f.faPlus,className:"text-white location-toggle-icon"})),r.a.createElement("div",{id:"".concat(Object(i.e)(a)),className:Object(i.e)(a)===g.replace(" ","-")?"collapse show":"collapse"},r.a.createElement("div",{className:"off-white p-3"},r.a.createElement("ul",{className:"no-dots ml-0"},d.map((function(e){return r.a.createElement("li",{key:e,className:"mb--10"},e)}))),r.a.createElement("p",{className:"mb-0"},r.a.createElement(l.a,{icon:u.faPhone}),r.a.createElement("span",{className:"proxima-regular"},"  ".concat(n))),r.a.createElement("p",{className:"mb-2"},r.a.createElement(l.a,{icon:m.faFax}),r.a.createElement("span",{className:"proxima-regular"},"  ".concat(c))),r.a.createElement("button",{type:"button",className:"red-title proxima-bold btn bg-transparent ml--10",onClick:function(){return t(o)}},"Directions to"," ",a))))}d.propTypes={getLocationDirections:o.a.func,title:o.a.string,phone:o.a.string,fax:o.a.string,shortName:o.a.string,address:o.a.arrayOf(o.a.string),currentOffice:o.a.string},d.defaultProps={getLocationDirections:function(){},title:"",phone:"",fax:"",shortName:"",address:[],currentOffice:""};var g=d;function h(e){var t=e.posts,a=e.title;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("div",{className:"sidebar-title text-capitalize"},"Latest from"," ",a),r.a.createElement("div",{className:"off-white"},t.length>0?t.map((function(e){return r.a.createElement("div",{className:"p-2 pt-3",key:Object(i.a)(e.title)},r.a.createElement("a",{href:e.link},r.a.createElement("p",{className:"proxima-bold mb-0"},e.title)),r.a.createElement("span",{className:"mt-0 mb-3 z-99"},e.author.map((function(t,a){return r.a.createElement("a",{href:t.link,key:Object(i.a)(t.name)},r.a.createElement("span",{className:"article-link small-excerpt"},t.name),a<e.author.length-1?" | ":"")}))))})):r.a.createElement("h5",{className:"p-3 d-block mx-auto text-center"},"Sorry, no recent articles for this office")))}h.propTypes={posts:o.a.arrayOf(o.a.object),title:o.a.string},h.defaultProps={posts:[],title:""};var b=h;function y(e){var t=e.offices,a=e.getLocationDirections,n=e.posts,c=e.title,o=e.setNewLocation,s=Object(i.h)(t,"title");return r.a.createElement("div",{id:"location-sidebar"},s.map((function(e){return r.a.createElement(g,{key:Object(i.a)(e.title),setNewLocation:o,getLocationDirections:a,currentOffice:c,title:e.title,phone:e.phone,fax:e.fax,shortName:e.shortName,address:e.address})})),r.a.createElement(b,{title:c,posts:n}))}y.propTypes={offices:o.a.arrayOf(o.a.object),getLocationDirections:o.a.func,setNewLocation:o.a.func,posts:o.a.arrayOf(o.a.object),title:o.a.string},y.defaultProps={offices:[],posts:[],title:"",getLocationDirections:function(){},setNewLocation:function(){}};t.a=y}}]);