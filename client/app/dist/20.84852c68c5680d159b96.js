(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{473:function(e,t,n){n.r(t),function(e,a){var r=n(0),o=n.n(r),c=n(479),i=n(481),l=n(477),s=(n(557),n(558));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(v,t);var n,r,u,g,y=(n=v,function(){var e,t=b(n);if(h()){var a=b(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return d(this,e)});function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=y.call(this,e)).state={searchTerm:""},t.onChange=t.onChange.bind(p(t)),t.onSubmit=t.onSubmit.bind(p(t)),t}return r=v,(u=[{key:"onChange",value:function(e){var t=e.target.value;this.setState({searchTerm:t})}},{key:"onSubmit",value:function(){var t=this.state.searchTerm;e("".concat(a.env.API_URL,"/wp-json/search/post"),{method:"post",body:t}).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this.state.searchTerm;return o.a.createElement("div",null,o.a.createElement(i.a,{seo:{title:"Page Not Found | Scarinci Hollenbeck",metaDescription:"Sorry, it looks this like this page no longer exists on scarincihollenbeck.com",canonicalLink:"/"}}),o.a.createElement(l.a,{title:"404: Resource Not Found",subtitle:"Sorry, the page you are looking for cannot be found.",image:s.a,height:"auto"}),o.a.createElement(c.a,null,o.a.createElement("p",{className:"lead"},"It's possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for."),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-6 offset-md-3"},o.a.createElement("form",{role:"search",className:"mt-4 d-block",method:"GET",action:window.location.origin},o.a.createElement("span",{className:"screen-reader-text"},"Search for:"),o.a.createElement("input",{name:"s",type:"search",placeholder:"Try another search...",value:e,"aria-labelledby":"searchbutton",className:"form-control",onChange:this.onChange}),o.a.createElement("button",{type:"submit",id:"searchbutton",className:"btn btn-danger px-5 d-block mx-auto mt-4"},"Submit"))),o.a.createElement("div",{className:"col-sm-12 col-md-8 mt-5 offset-md-2 off-white"},o.a.createElement("h4",{className:"proxima-bold p-3 pb-0 mb-0 text-center"},"Or try visiting one of these pages on our site to narrow your search."),o.a.createElement("ul",{className:"ml-6"},o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("a",{href:"".concat(window.location.origin,"/attorneys")},o.a.createElement("h5",{className:"u-hover"},"Attorneys")))),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("a",{href:"".concat(window.location.origin,"/practices")},o.a.createElement("h5",{className:"u-hover"},"Practices")))),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("a",{href:"".concat(window.location.origin,"/locations")},o.a.createElement("h5",{className:"u-hover"},"Locations")))),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-news")},o.a.createElement("h5",{className:"u-hover"},"Firm News")))),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-events")},o.a.createElement("h5",{className:"u-hover"},"Firm Events")))),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("a",{href:"".concat(window.location.origin,"/category/firm-insights")},o.a.createElement("h5",{className:"u-hover"},"Firm Insights"))))))))))}}])&&m(r.prototype,u),g&&m(r,g),v}(r.Component);t.default=g}.call(this,n(129),n(75))},476:function(e,t,n){n.d(t,"g",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u}));var a=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e},r=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},o=function(e){return e.toLowerCase().replace(/\s/g,"-")},c=function(e){return{__html:e}},i=function(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e},l=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var a=n.coords,r=a.latitude,o=a.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===c}))[0].address,l="https://www.google.com/maps/dir/".concat(r,"+").concat(o,"/").concat(i);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},s=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},u=function(e,t){for(var n=[],a=0;a<e.length;a+=1)e[a].key&&e[a].key===t&&n.push(e[a].selected);return n}},477:function(e,t,n){var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(478),l=n(476);function s(){var e=m(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return s=function(){return e},e}function u(){var e=m(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=function(e){var t=e.title,n=e.subtitle,a=e.image,o=e.height,c=i.a.div(u(),a,o),m=i.a.div(s());return r.a.createElement(c,{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,{className:"col-sm-12 col-md-7 offset-md-3 text-white"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{id:"red-block"}),r.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),r.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(l.b)(n)}))))))};f.propTypes={image:c.a.string,title:c.a.string,subtitle:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),height:c.a.string},f.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=f},479:function(e,t,n){var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},481:function(e,t,n){var a=n(0),r=n.n(a),o=n(480),c=n(3),i=n.n(c),l=function(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}),r.a.createElement("script",{type:"application/ld+json"},' {\n          "@context": "http://schema.org",\n          "@type": "WebPage",\n          "name": '.concat(t.title,',\n          "description": {').concat(t.metaDescription,',\n          "publisher": {\n              "@type": "LegalServices",\n              "name": "Scarinci Hollenbeck"\n          }')))};l.propTypes={seo:i.a.objectOf(i.a.string)},l.defaultProps={seo:{}},t.a=l},557:function(e,t,n){},558:function(e,t,n){t.a=n.p+"b93905db39e10dcb89f881cf7efd7f69.jpg"}}]);