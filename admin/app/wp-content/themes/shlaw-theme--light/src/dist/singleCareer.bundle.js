!function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],m=0,f=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={5:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/wp-content/themes/shlaw-theme--light/src/dist/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([781,0]),n()}({2:function(e,t,n){n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"i",(function(){return f}));var r=function(e){return{__html:e}};function a(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))}var o=function(e){return e.toLowerCase().replace(/\s/g,"-")},c=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ").toUpperCase()};function i(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]<n[t]?1:e[t]>n[t]?-1:0})),e}var l={Accept:"application/json","Content-Type":"application/json"},u=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"589 8th Avenue, New York, NY, 10018"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(n){var r=n.coords,a=r.latitude,o=r.longitude,c=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),i=t.filter((function(e){return e.title===c}))[0].address,l="https://www.google.com/maps/dir/".concat(a,"+").concat(o,"/").concat(i);window.open(l,"_blank")}),(function(e){console.warn("ERROR(".concat(e.code,"):").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})};function s(){return window.print(),!1}function m(e){var t=new Date(e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDay(),", ").concat(t.getFullYear())}function f(e,t){return void 0!==e&&e.sort((function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})),e}},50:function(e,t,n){n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r),o=n(32),c=n(11),i=n(10),l=n(4),u=n(2);function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(",") no-repeat 50%;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n  ","\n"]);return s=function(){return e},e}var m=o.a.div(s(),(function(e){return e.image}),(function(e){return e.height}));function f(e){var t=e.title,n=e.subtitle,r=e.image,o=e.height;return a.a.createElement(m,{image:r,height:o,className:"jumbotron jumbotron-fluid d-print-none"},a.a.createElement(c.a,null,a.a.createElement(i.a,null,a.a.createElement(l.a,{sm:12,md:{span:7,offset:2},className:"bg-black-background text-white"},a.a.createElement("div",{className:"p-3"},a.a.createElement("span",{id:"red-block"}),a.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),a.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(u.b)(n)}))))))}},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o(){return a.a.createElement("div",{className:"w-100 mt-4"},a.a.createElement("div",{className:"sidebar-title"},"Get the latest from our attorneys!"),a.a.createElement("div",{className:"off-white mh-375"},a.a.createElement("img",{src:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png",alt:"Subscribe Scarinci Hollenbeck attorneys",className:"mx-auto d-block py-4 w-50"}),a.a.createElement("p",{className:"proxima-bold text-center px-3"},"Please fill out our short form to get the latest articles from the Scarinci Hollenbeck attorneys weekly on the cutting-edge legal topics.")))}},781:function(e,t,n){n.r(t);var r=n(0),a=n.n(r),o=n(28),c=n.n(o),i=n(50),l=n(94),u=n(12),s=n(147);function m(e){var t=e.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{className:"red-title proxima-bold h6",href:"/"},"HOME"),a.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},a.a.createElement(u.a,{icon:s.faCaretRight,className:"red-title icon-w8px-h20px"})),a.a.createElement("a",{className:"red-title proxima-bold",href:"/careers"},"CAREERS"),a.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},a.a.createElement(u.a,{icon:s.faCaretRight,className:"red-title icon-w8px-h20px"})),a.a.createElement("a",{className:"red-title proxima-bold text-uppercase",href:"/"},t))}var f=n(2);function p(e){var t=e.title,n=e.position;e.contact;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"p-2 mt-3 bg-light-gray w-100"},a.a.createElement("h4",{className:"mt-1 mb-0 w-75"},t)),a.a.createElement("div",{className:"w-100",dangerouslySetInnerHTML:Object(f.b)(n)}),a.a.createElement("small",null,"Career form only found on production version of site..."))}var d=n(95),h=n(71);function b(){return a.a.createElement("div",{className:"hide-print"},a.a.createElement(d.a,null),a.a.createElement(h.a,null))}n(111),n(117);function y(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(){var e=g(Object(r.useState)([]),2),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e,t=window.location.search;t.indexOf("preview_id=")>-1&&(e=t.split("preview_id=").pop().split("&")[0]),t.indexOf("p=")>-1&&(e=t.split("p=").pop().split("&")[0]),function(){var t,r=(t=regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("".concat("http://localhost:8400","/wp-json/preview-career/career/").concat(e),{headers:f.e}).then((function(e){return e.json()}))]);case 2:r=t.sent,a=g(r,1),o=a[0],n(o);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(e){y(o,r,a,c,i,"next",e)}function i(e){y(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}()()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg",title:t.title,subtitle:" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."}),a.a.createElement(l.a,{body:a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{title:t.title}),a.a.createElement(p,{title:t.title,position:t.positionDescription,contact:t.contact})),sidebar:a.a.createElement(b,null)}))}n(118),n(54),n(55),n(56),n(57),n(58),n(59),n(69);c.a.render(a.a.createElement(E,null),document.getElementById("single-career"))},94:function(e,t,n){n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(11),c=n(10),i=n(4);function l(e){var t=e.body,n=e.sidebar;return a.a.createElement(o.a,null,a.a.createElement(c.a,null,a.a.createElement(i.a,{sm:12,md:8},t),a.a.createElement(i.a,{sm:12,md:4},n)))}},95:function(e,t,n){n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r),o=n(3),c=n(33),i=n(2);function l(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){var e=u(Object(r.useState)([]),2),t=e[0],n=e[1],s=u(Object(r.useState)([]),2),m=s[0],f=s[1],p=u(Object(r.useState)([]),2),d=p[0],h=p[1];return Object(r.useEffect)((function(){(function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r,a,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("".concat("http://localhost:8400","/wp-json/attorney-search/attorneys"),{headers:i.e}).then((function(e){return e.json()})),fetch("".concat("http://localhost:8400","/wp-json/attorney-search/practices"),{headers:i.e}).then((function(e){return e.json()})),fetch("".concat("http://localhost:8400","/wp-json/wp/v2/categories?per_page=100"),{headers:i.e}).then((function(e){return e.json()}))]);case 2:t=e.sent,r=u(t,3),a=r[0],o=r[1],c=r[2],n(a),h(c),f(o);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){l(o,r,a,c,i,"next",e)}function i(e){l(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}})()()}),[]),a.a.createElement("div",{className:"w-100"},a.a.createElement(o.a,null,a.a.createElement(o.a.Group,{controlId:"textSearch"},a.a.createElement(o.a.Label,null,a.a.createElement("span",{className:"sr-only"},"Search Site")),a.a.createElement(o.a.Control,{type:"text",placeholder:"Keyword.."})),a.a.createElement(o.a.Group,{controlId:"practices.ControlSelect1"},a.a.createElement(o.a.Control,{as:"select"},a.a.createElement("option",null,"Filter by practice"),m.length>0&&m.map((function(e){return a.a.createElement("option",{key:Object(i.a)(e.title)},e.title)})))),a.a.createElement(o.a.Group,{controlId:"attorneys.ControlSelect1"},a.a.createElement(o.a.Control,{as:"select"},a.a.createElement("option",null,"Filter by attorney"),t.length>0&&t.map((function(e){return a.a.createElement("option",{key:Object(i.a)(e.title)},e.title)})))),a.a.createElement(o.a.Group,{controlId:"category.SelectCategory"},a.a.createElement(o.a.Control,{as:"select"},a.a.createElement("option",null,"Filter by category"),d.length>0&&d.map((function(e){return"Uncategorized"!==e.name&&a.a.createElement("option",{key:Object(i.a)(e.name)},e.name)})))),a.a.createElement(c.a,{type:"submit",variant:"secondary",className:"proxima-bold px-5 my-2 mr-2"},"Clear"),a.a.createElement(c.a,{type:"submit",variant:"danger",className:"my-2 px-5"},"Search")))}}});