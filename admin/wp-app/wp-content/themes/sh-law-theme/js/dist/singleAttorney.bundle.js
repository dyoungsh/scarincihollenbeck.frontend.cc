!function(e){function t(t){for(var l,i,c=t[0],o=t[1],u=t[2],d=0,f=[];d<c.length;d++)i=c[d],n[i]&&f.push(n[i][0]),n[i]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(s&&s(t);f.length;)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(l=!1)}l&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},n={21:0},r=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/wp-content/themes/sh-law-theme/includes/assets/images/";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=o;r.push([373,0]),a()}({373:function(e,t,a){a(16),e.exports=a(592)},4:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});t.createMarkup=function(e){return{__html:e}},t.getDirectionsFromLocation=function(e){var t=[{title:"lyndhurst",address:"1100 Valley Brook Ave. Lyndhurst, NJ 07071"},{title:"red bank",address:"331 Newman Springs Road Red Bank, NJ 07701"},{title:"new york",address:"3 Park Ave. New York, NY 10016"},{title:"washington dc",address:"Suite 250 1000 Potomac St., N.W. Washington D.C. 20007"},{title:"san francisco",address:"315 Montgomery St. San Francisco, CA 94104"}];navigator.geolocation.getCurrentPosition((function(a){var l=a.coords,n=l.latitude,r=l.longitude,i=e.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase(),c="https://www.google.com/maps/dir/"+n+"+"+r+"/"+t.filter((function(e){return e.title===i}))[0].address;window.open(c,"_blank")}),(function(e){console.warn("ERROR("+e.code+"):"+e.message)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},t.splitUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=e.split("/"),l=a.filter((function(e){return""!==e}));return null!==t&&(l=l.filter((function(e){return""!==e&&e!==t}))),l},t.splitUrlPreview=function(e,t){var a=e.substring(e.indexOf(t)+1);return a=a.substring(0,a.indexOf("&"))},t.sortByKey=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),e},t.sortByDateKey=function(e,t){return void 0!==e&&e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})),e},t.addRandomKey=function(e){return e.concat("-").concat(Math.floor(1e4*Math.random()+1))},t.urlify=function(e){return e.toLowerCase().replace(/\s/g,"-")},t.locationUrl=function(e){return e.toLowerCase().replace(/\s/g,"-").replace(/[.]/gm,"")},t.makeTitle=function(e){return e.indexOf("-")>-1?e.replace(/-|\s/g," ").toUpperCase():e.indexOf("+")>-1?e.replace(/\+/g," ").toUpperCase():e.toUpperCase()},t.unLink=function(e){return e.replace(/-|\s/g," ").replace(/\+/g," ")},t.filterByKey=function(e,t){for(var a=[],l=0;l<e.length;l+=1)e[l].key&&e[l].key===t&&a.push(e[l].selected);return a},t.sumbitSearchForm=function(e){var t=e.s,a=e.practice,l=e.attorney,n=e.category,r=((t||"")+" "+(a&&"Filter by practice"!==a?a:"")+" "+(l&&"Filter by attorney"!==l?l:"")+" "+(n&&"Filter by category"!==n?n:"")).trim().replace(/[^\w\s]/gi,"");return"https://scarincihollenbeck.com/?s="+r.toLowerCase().replace(/\s/g,"+")}},592:function(e,t,a){var l=i(a(0)),n=i(a(14)),r=i(a(597));function i(e){return e&&e.__esModule?e:{default:e}}n.default.render(l.default.createElement(r.default,null),document.getElementById("single-attorney"))},597:function(e,t,a){(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=v(n),i=a(133),c=v(a(626)),o=v(a(628)),u=v(a(630)),s=v(a(632)),d=v(a(634)),f=v(a(636)),m=v(a(638)),b=v(a(640)),p=v(a(657)),g=v(a(659)),h=a(4);function v(e){return e&&e.__esModule?e:{default:e}}function E(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}a(661);var y=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={bio:[],loading:!1,currentTab:"biography",matterTab:"",readMore:!1},t.fetchPostData=t.fetchPostData.bind(t),t.tabClick=t.tabClick.bind(t),t.matterClick=t.matterClick.bind(t),t.toggleReadMore=t.toggleReadMore.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),l(a,[{key:"componentDidMount",value:function(){var e=window.location.href;e.indexOf("?preview_id")>-1&&(e=e.substring(0,"?preview_id"));if(e.indexOf("single-attorney-index")>-1&&(e="https://scarincihollenbeck.com/attorney/john-m-scagnelli"),e.indexOf("p=")>-1){var t=(0,h.splitUrlPreview)(e,"p=");t=t.replace("=",""),this.fetchPostData("https://scarincihollenbeck.com/wp-json/preview/attorney/"+t)}else{var a=(0,h.splitUrl)(e,"attorneys");this.fetchPostData("https://scarincihollenbeck.com/wp-json/individual-attorney/attorney/"+a[a.length-1])}}},{key:"fetchPostData",value:function(t){var a=this;this.setState({loading:!0}),e(t).then((function(e){return e.json()})).then((function(e){var t="";void 0!==e.representativeMatters[0]&&(t=e.representativeMatters[0].title);a.setState({matterTab:t,bio:e},(function(){return a.setState({loading:!1})}))}))}},{key:"tabClick",value:function(e){var t=e;this.setState({currentTab:t})}},{key:"matterClick",value:function(e){var t=e;this.setState({matterTab:t})}},{key:"toggleReadMore",value:function(){this.setState((function(e){return{readMore:!e.readMore}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.bio,l=t.loading,n=t.currentTab,v=t.matterTab,y=t.readMore,T=a.fullName,k=a.designation,N=a.profileImage,w=a.phoneNumber,M=a.email,C=a.biography,_=a.fax,x=a.clients,P=a.socialMediaLinks,O=a.representativeMatters,S=a.representativeClients,j=a.relatedPractices,R=a.additionalInforamtion,I=a.education,A=a.barAdmissions,L=a.eventPosts,K=a.newsPosts,D=a.blogPosts,B=a.awards,H=a.presentations,U=a.publications,F=a.media,J=a.videos,V=a.tabs,z=a.chair,W=a.pdf,Y=a.vizibility,Z=void 0;void 0!==R&&(Z=[{title:"Education",content:I},{title:"Bar Admissions",content:A}].concat(E(R)));var q=[];void 0!==K&&void 0!==L&&(q=[].concat(E(K),E(L)));var G=(0,h.sortByDateKey)(D,"date"),Q=void 0,X=void 0;if(void 0!==V){var $=V.headers,ee=V.body;Q=$.filter((function(e){return"number"!=typeof e})),X=ee.filter((function(e){return""!==e[1]}))}return r.default.createElement("span",{className:"d-block h-100"},void 0!==a?r.default.createElement("span",null,r.default.createElement("div",{className:"jumbotron jumbotron-fluid city-background"},r.default.createElement("div",{className:"container animated fadeInUp fast mt--1 max-width-container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-12 col-md-4 mb-3 mr-4 mh-325"},r.default.createElement("img",{src:N,alt:T,className:"img-fluid white-transparent-border"})),r.default.createElement("div",{className:"col-sm-12 col-md-7 bg-black "},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-12 mt-3"},r.default.createElement("span",{id:"red-block"}),r.default.createElement("h1",{className:"text-white"},T?T+" ":"",void 0!==z&&z.length>0?r.default.createElement("span",{className:" h5 text-white"},"-"," "+k):""),r.default.createElement("span",{id:"white-border"})),void 0!==z&&z.length>0?r.default.createElement("div",{className:"col-sm-12 my-3"},z.map((function(e){return r.default.createElement("span",{key:e.title,className:"text-white h5"},r.default.createElement("strong",null,"Chair: "),r.default.createElement("a",{href:e.link,className:"text-white chair-link h5"},e.title," ","Practice"),r.default.createElement("br",null))}))):r.default.createElement("div",{className:"col-sm-12 mt-3"},r.default.createElement("h4",{className:"text-white"},k)),r.default.createElement("div",{className:"col-sm-12 col-md-6"},r.default.createElement("ul",{className:"text-white no-dots mt-2 ml-0"},w?r.default.createElement("li",{className:"mb-1"},r.default.createElement("h5",null,r.default.createElement("i",{className:"fas fa-phone text-white"},r.default.createElement("span",{className:"proxima-regular ft-18"},"  "+w)))):"",_?r.default.createElement("li",{className:"mb-1"},r.default.createElement("h5",null,r.default.createElement("i",{className:"fas fa-fax text-white"},r.default.createElement("span",{className:"proxima-regular ft-18"},"  "+_)))):"",M?r.default.createElement("li",{className:"mb-1"},r.default.createElement("h5",null,r.default.createElement("i",{className:"fas fa-envelope"},r.default.createElement("a",{href:"mailto:"+M,className:"text-white proxima-regular mail-link ft-18"}," "+M)))):"")),r.default.createElement("div",{className:"col-sm-12 col-md-6"},P?r.default.createElement("span",null,r.default.createElement("ul",{className:"ml-0 mt-2"},P.map((function(e){return r.default.createElement("li",{key:e.channel,className:"mb-0 lh-1"},r.default.createElement("h5",null,r.default.createElement("i",{className:"fab text-white fa-"+e.channel.toLowerCase()},r.default.createElement("a",{href:e.url,className:"text-white mail-link proxima-regular ft-18 position-relative icon"},r.default.createElement("strong",null,"  Connect on "+e.channel)))))})),W?r.default.createElement("li",{className:"mb-0 lh-1"},r.default.createElement("h5",null,r.default.createElement("i",{className:"fas fa-file-alt text-white"},r.default.createElement("a",{href:W,className:"text-white mail-link proxima-regular ft-18 position-relative icon"}," Download Biography")))):"",Y?r.default.createElement("li",{className:"mb-0 lh-1"},r.default.createElement("h5",null,r.default.createElement("i",{className:"fas fa-address-book text-white"},r.default.createElement("a",{href:Y,className:"text-white mail-link proxima-regular ft-18 position-relative icon"}," Download Contact")))):"")):""))))))),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-12"},r.default.createElement("div",{className:"line-header",id:"nav-tab",role:"tablist"},r.default.createElement(c.default,{currentTab:n,tabTitle:"biography",tabClick:this.tabClick,title:"Biography"}),O?r.default.createElement(c.default,{currentTab:n,tabTitle:"representative-matters",tabClick:this.tabClick,title:"Representative Matters"}):"",S?r.default.createElement(c.default,{currentTab:n,tabTitle:"representative-clients",tabClick:this.tabClick,title:"Representative Clients"}):"",H?r.default.createElement(c.default,{currentTab:n,tabTitle:"presentations",tabClick:this.tabClick,title:"Presentations"}):"",U?r.default.createElement(c.default,{currentTab:n,tabTitle:"publications",tabClick:this.tabClick,title:"Publications"}):"",F?r.default.createElement(c.default,{currentTab:n,tabTitle:"media",tabClick:this.tabClick,title:"Media"}):"",D?r.default.createElement(c.default,{currentTab:n,tabTitle:"blogs",tabClick:this.tabClick,title:"Articles"}):"",q.length>0&&void 0!==q?r.default.createElement(c.default,{currentTab:n,tabTitle:"newsevents",tabClick:this.tabClick,title:"News & Events"}):"",J?r.default.createElement(c.default,{currentTab:n,tabTitle:"videos",tabClick:this.tabClick,title:"Videos"}):"",V?Q.map((function(t){return r.default.createElement(c.default,{key:t,currentTab:n,tabTitle:(0,h.urlify)(t),tabClick:e.tabClick,title:t})})):"")),r.default.createElement("div",{className:"col-sm-12 col-md-9 mt-5"},r.default.createElement("div",{className:"tab-content"},C?r.default.createElement(o.default,{currentTab:n,tabTitle:"biography",title:"Biography",content:C,readMore:y,toggleReadMore:this.toggleReadMore}):"",O?r.default.createElement(u.default,{currentTab:n,matterClick:this.matterClick,matterTab:v,tabTitle:"representative-matters",title:"Representative Matters",content:O}):"",S?r.default.createElement(u.default,{currentTab:n,matterTab:v,tabTitle:"representative-clients",title:"Representative Clients",content:S}):"",H?r.default.createElement(s.default,{currentTab:n,tabTitle:"presentations",title:"Presentations",content:H}):"",U?r.default.createElement(s.default,{currentTab:n,tabTitle:"publications",title:"Publications",content:U}):"",F?r.default.createElement(s.default,{currentTab:n,tabTitle:"media",title:"Media",content:F}):"",D?r.default.createElement(d.default,{currentTab:n,tabTitle:"blogs",title:"Articles",content:G}):"",q.length>0&&void 0!==q?r.default.createElement(d.default,{currentTab:n,tabTitle:"newsevents",title:"News & Events",content:q}):"",J?r.default.createElement(f.default,{title:"Videos",content:J,currentTab:n,tabTitle:"videos"}):"",V?X.map((function(e){return r.default.createElement(m.default,{key:(0,h.addRandomKey)(e[1]),title:e[1],content:e[2],currentTab:n,tabTitle:(0,h.urlify)(e[1])})})):""),x&&x.length>0?r.default.createElement(b.default,{content:x,title:"Clients"}):"",B&&B.length>0?r.default.createElement(b.default,{content:B,title:"Awards"}):"",q.length>0?r.default.createElement(p.default,{title:"News & Events",content:q}):"",D?r.default.createElement(p.default,{title:"Recent Articles",content:G}):""),r.default.createElement("div",{className:"col-sm-12 col-md-3 mt-5"},r.default.createElement(g.default,{title:"Related Practices",content:j,collapsed:"collapse show"}),r.default.createElement("br",null),r.default.createElement(g.default,{title:"Additional Information",content:Z,collapsed:"collapse hide"}))))):r.default.createElement(i.PulseLoader,{color:"#D02422",loading:l}))}}]),a}(n.Component);t.default=y}).call(this,a(10))},626:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(0)),n=r(a(3));function r(e){return e&&e.__esModule?e:{default:e}}a(627);var i=function(e){var t=e.currentTab,a=e.tabTitle,n=e.tabClick,r=e.title;return l.default.createElement("h3",{className:t===a?"active":"",id:"nav-home-tab","data-toggle":"tab",onClick:function(){return n(a)},href:"#"+a,role:"tab","aria-controls":"nav-home","aria-selected":!0,"aria-hidden":!0},r)};i.propTypes={currentTab:n.default.string,tabTitle:n.default.string,tabClick:n.default.func,title:n.default.string},i.defaultType={currentTab:"",tabTitle:"",tabClick:function(){},title:""},t.default=i},627:function(e,t,a){},628:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(629);var c=function(e){var t=e.currentTab,a=e.tabTitle,n=e.content,i=e.title,c=e.toggleReadMore,o=e.readMore,u=n.split(/<p[^>]*>/).filter((function(e){return""!==e})),s=u[0].replace("</p>",""),d=u[1],f=u.slice(2,u.length).join("<p>");return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-bio-tab"},l.default.createElement("h4",{className:"bg-light-gray"},i),l.default.createElement("p",{className:"bio",dangerouslySetInnerHTML:(0,r.createMarkup)(s),id:"nav-bio-tab"}),l.default.createElement("p",{className:"bio",dangerouslySetInnerHTML:(0,r.createMarkup)(d)}),l.default.createElement("div",{id:"content",className:"collapse mt-4 ml-1"},l.default.createElement("div",{className:"bio",dangerouslySetInnerHTML:(0,r.createMarkup)(f)})),l.default.createElement("a",{href:"#content",type:"collapse",className:"red-title proxima-bold","data-toggle":"collapse","data-target":"#content",onClick:function(){return c()}},o?l.default.createElement("u",null,"Read Less >>"):l.default.createElement("u",null,"Read More >>")))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,content:n.default.string,title:n.default.string,toggleReadMore:n.default.func,readMore:n.default.bool},c.defaultProps={currentTab:"",tabTitle:"",content:"",title:"",toggleReadMore:function(){},readMore:!1},t.default=c},629:function(e,t,a){},630:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(631);var c=function(e){var t=e.currentTab,a=e.content,n=e.title,i=e.tabTitle;return l.default.createElement("div",{className:t===i?"tab-pane active":"tab-pane",id:i,role:"tabpanel","aria-labelledby":"nav-matter-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),a.map((function(e,t){return l.default.createElement("span",{key:(0,r.addRandomKey)(e.title),className:"mb-4 d-block",id:"nav-matter-tab"},e.title?l.default.createElement("a",{href:"#"+(0,r.urlify)(e.title),className:"sidebar-title","data-toggle":"collapse"},e.title,l.default.createElement("i",{className:"text-white fas float-right mt-1"})):"",l.default.createElement("div",{id:""+(0,r.urlify)(e.title),className:0===t?"collapse show":"collapse"},l.default.createElement("div",{className:"off-white matters px-2 py-3",dangerouslySetInnerHTML:(0,r.createMarkup)(e.content)})))})))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,content:n.default.arrayOf(n.default.object),title:n.default.string},c.defaultProps={currentTab:"",tabTitle:"",content:[],title:""},t.default=c},631:function(e,t,a){},632:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(633);var c=function(e){var t=e.title,a=e.currentTab,n=e.tabTitle,i=e.content;return l.default.createElement("div",{className:a===n?"tab-pane active":"tab-pane",id:n,role:"tabpanel","aria-labelledby":"nav-"+n+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},t),l.default.createElement("div",{className:"article-container",id:"nav-"+n+"-tab"},l.default.createElement("table",{className:"table mb-5"},l.default.createElement("thead",{className:"thead-dark"},l.default.createElement("tr",null,i.header.map((function(e){return l.default.createElement("th",{key:e.c,className:"text-uppercase"},e.c)})))),l.default.createElement("tbody",null,i.body.map((function(e){return l.default.createElement("tr",{key:(0,r.addRandomKey)(e[0].c)},l.default.createElement("td",{dangerouslySetInnerHTML:(0,r.createMarkup)(e[0].c)}),l.default.createElement("td",{dangerouslySetInnerHTML:(0,r.createMarkup)(e[1].c)}),e[2]?l.default.createElement("td",null,e[2].c):l.default.createElement("td",null))}))))))};c.propTypes={title:n.default.string,currentTab:n.default.string,tabTitle:n.default.string,content:n.default.object},c.defaultProps={title:"",currentTab:"",tabTitle:"",content:{}},t.default=c},633:function(e,t,a){},634:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(635);var c=function(e){var t=e.title,a=e.link,n=e.img;return l.default.createElement("div",{className:"col-sm-12 col-md-4 my-2 article-card"},l.default.createElement("a",{href:a},l.default.createElement("img",{src:n||"https://scarincihollenbeck.com/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png",className:"img-thumbnail mt-3",alt:t}),l.default.createElement("h5",{className:"my-3 small-excerpt text-center mt-2"},t)))},o=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,i=e.content;return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-"+a+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),l.default.createElement("div",{id:"nav-"+a+"-tab",className:"article-container container"},l.default.createElement("div",{className:"row"},i.map((function(e){return l.default.createElement(c,{key:(0,r.addRandomKey)(e.title),link:e.link,title:e.title,img:e.featuredImg})})))))};c.propTypes={title:n.default.string,link:n.default.string,img:n.default.oneOfType([n.default.string,n.default.any])},c.defaultProps={title:"",link:"",img:""},o.propTypes={currentTab:n.default.string,tabTitle:n.default.string,title:n.default.string,content:n.default.arrayOf(n.default.object)},o.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]},t.default=o},635:function(e,t,a){},636:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(637);var c=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,i=e.content;return console.log(i),l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-"+a+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),l.default.createElement("div",{className:"article-container container",id:"nav-"+a+"-tab"},l.default.createElement("div",{className:"row"},i.map((function(e){return l.default.createElement("div",{key:(0,r.addRandomKey)(e.title),className:"col-sm-12"},l.default.createElement("div",{dangerouslySetInnerHTML:(0,r.createMarkup)(e.embed_video),className:"w-100"}),l.default.createElement("h5",{className:"mt-2 mb-4"},e.title+" ","-",l.default.createElement("span",{className:"red-title"}," "+e.date)))})))))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,title:n.default.string,content:n.default.arrayOf(n.default.object)},c.defaultProps={currentTab:"",tabTitle:"",title:"",content:[]},t.default=c},637:function(e,t,a){},638:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(639);var c=function(e){var t=e.currentTab,a=e.tabTitle,n=e.title,i=e.content;return l.default.createElement("div",{className:t===a?"tab-pane active":"tab-pane",id:a,role:"tabpanel","aria-labelledby":"nav-"+a+"-tab"},l.default.createElement("h4",{className:"bg-light-gray"},n),l.default.createElement("div",{className:"container article-container"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{id:"nav-"+a+"-tab",dangerouslySetInnerHTML:(0,r.createMarkup)(i)}))))};c.propTypes={currentTab:n.default.string,tabTitle:n.default.string,title:n.default.string,content:n.default.string},c.defaultProps={currentTab:"",tabTitle:"",title:"",content:""},t.default=c},639:function(e,t,a){},640:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=i(a(35));function i(e){return e&&e.__esModule?e:{default:e}}a(656);var c=function(e){var t=e.onClick;return l.default.createElement("i",{className:"fas fa-angle-double-right featured-slider-arrow right",onKeyPress:t,role:"button",tabIndex:"0",onClick:t})},o=function(e){var t=e.onClick;return l.default.createElement("i",{className:"fas fa-angle-double-left featured-slider-arrow left",onKeyPress:t,role:"button",tabIndex:"0",onClick:t})},u=function(e){var t=e.content,a=e.title,n={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!0,nextArrow:l.default.createElement(c,null),prevArrow:l.default.createElement(o,null),className:"fs-container",responsive:[{breakpoint:1690,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}}]};return l.default.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},l.default.createElement("h4",{className:"bg-light-gray"},"Awards"===a?l.default.createElement("span",null,a," ","-"," ",l.default.createElement("a",{href:"/awards/",className:"small-excerpt position-relative award-link"},"Award Methodology")):a),t.length>3?l.default.createElement(r.default,n,t.map((function(e){return l.default.createElement("a",{href:e.link,key:e.title,className:"mx-3"},l.default.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))}))):l.default.createElement("div",{className:"d-flex flex-row"},t.map((function(e){return l.default.createElement("a",{href:e.link,key:e.title,className:"mx-3"},l.default.createElement("img",{src:e.featuredImg,width:"230",alt:e.title,className:"img-fluid"}))}))))};c.propTypes={onClick:n.default.func},c.defaultProps={onClick:function(){}},o.propTypes={onClick:n.default.func},o.defaultProps={onClick:function(){}},u.propTypes={content:n.default.arrayOf(n.default.object),title:n.default.string},u.defaultProps={content:[],title:""},t.default=u},656:function(e,t,a){},657:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=c(a(0)),n=c(a(3)),r=c(a(35)),i=a(4);function c(e){return e&&e.__esModule?e:{default:e}}a(658);var o=function(e){var t=e.onClick;return l.default.createElement("i",{className:"fas fa-angle-double-right featured-slider-arrow right",onKeyPress:t,role:"button",tabIndex:"0",onClick:t})},u=function(e){var t=e.onClick;return l.default.createElement("i",{className:"fas fa-angle-double-left featured-slider-arrow left",onKeyPress:t,role:"button",tabIndex:"0",onClick:t})},s=function(e){var t=e.title,a=e.content.filter((function(e,t){return t<8})),n="https://scarincihollenbeck.com/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png",c={centerMode:!0,infinite:!0,slidesToShow:3,dots:!0,adaptiveHeight:!0,nextArrow:l.default.createElement(o,null),prevArrow:l.default.createElement(u,null),className:"fs-container",responsive:[{breakpoint:1690,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!0}}]};return l.default.createElement("div",{className:"mt-4 w-100 d-block attorney-news-slider"},l.default.createElement("h4",{className:"bg-light-gray"},t),a.length>3?l.default.createElement(r.default,c,a.map((function(e){return l.default.createElement("div",{key:(0,i.addRandomKey)(e.title),className:"article-card"},l.default.createElement("a",{href:e.link},l.default.createElement("img",{src:e.featuredImg?e.featuredImg:n,alt:e.title,width:"230",className:"img-thumbnail mx-auto d-block mt-3"}),l.default.createElement("h5",{className:"my-3 text-center small-excerpt"},e.title)))}))):l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row"},a.map((function(e){return l.default.createElement("div",{key:(0,i.addRandomKey)(e.title),className:"col-sm-12 col-md-4 article-card"},l.default.createElement("a",{href:e.link},l.default.createElement("img",{src:e.featuredImg?e.featuredImg:n,alt:e.title,width:"230",className:"img-thumbnail mt-3"}),l.default.createElement("h5",{className:"my-3 small-excerpt"},e.title)))})))))};o.propTypes={onClick:n.default.func},o.defaultProps={onClick:function(){}},u.propTypes={onClick:n.default.func},u.defaultProps={onClick:function(){}},s.propTypes={title:n.default.string,content:n.default.arrayOf(n.default.object)},s.defaultProps={title:"",content:[]},t.default=s},658:function(e,t,a){},659:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0)),n=i(a(3)),r=a(4);function i(e){return e&&e.__esModule?e:{default:e}}a(660);var c=function(e){var t=e.title,a=e.content,n=e.collapsed;return l.default.createElement("div",null,l.default.createElement("a",{href:"#"+(0,r.urlify)(t),className:"sidebar-title "+(0,r.urlify)(t),"data-toggle":"collapse"},t,l.default.createElement("i",{className:"text-white fas float-right mt-1"})),l.default.createElement("div",{id:""+(0,r.urlify)(t),className:n},l.default.createElement("div",{className:"off-white"},l.default.createElement("ul",{className:"pl-0 pb-1 pr-1 pt-3 no-dots sidebar-content"},a.map((function(e){return l.default.createElement("li",{key:""+(0,r.addRandomKey)("sbc"),className:"mb-3"},e.link?l.default.createElement("a",{href:e.link,className:"link-style small-excerpt"},e.title):l.default.createElement("strong",null,e.title),e.content?l.default.createElement("div",{dangerouslySetInnerHTML:(0,r.createMarkup)(e.content)}):"")}))))))};c.propTypes={title:n.default.string,content:n.default.arrayOf(n.default.object),collapsed:n.default.string},c.defaultProps={title:"",content:[],collapsed:""},t.default=c},660:function(e,t,a){},661:function(e,t,a){}});