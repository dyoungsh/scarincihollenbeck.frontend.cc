(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{476:function(e,t,a){a.r(t),function(e){var n=a(61),r=a.n(n),o=a(82),i=a.n(o),l=a(57),c=a.n(l),s=a(58),m=a.n(s),p=a(83),u=a.n(p),d=a(59),f=a.n(d),y=a(60),g=a.n(y),v=a(39),E=a.n(v),b=a(0),h=a.n(b),w=a(504),N=a(498),k=a(497),T=a(872),O=a(717),x=a(139);function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var S=function(t){f()(l,t);var a,n,o=(a=l,function(){var e,t=E()(a);if(F()){var n=E()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g()(this,e)});function l(e){var t;return c()(this,l),(t=o.call(this,e)).state={sort:"title",positions:[],seo:{},keyword:"",location:"",type:"",loading:!0},t.filterTerm=t.filterTerm.bind(u()(t)),t.selectOption=t.selectOption.bind(u()(t)),t.clearFilter=t.clearFilter.bind(u()(t)),t}return m()(l,[{key:"componentDidMount",value:(n=i()(r.a.mark((function t(){var a,n,o,i,l,c=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/career-portal/careers"),{headers:x.e});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,o=n.seo,i=n.careers,l=i,this.setState({positions:l,seo:o},(function(){c.setState({loading:!1})}));case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"filterTerm",value:function(e){var t=e.target.value;this.setState({keyword:t})}},{key:"selectOption",value:function(e){var t=e.target,a=t.name,n=t.value;"location"===a?this.setState({location:n}):"type"===a&&this.setState({type:n})}},{key:"clearFilter",value:function(){this.setState({keyword:"",location:"",type:""})}},{key:"render",value:function(){var e=this.state,t=e.positions,a=e.sort,n=e.keyword,r=e.type,o=e.location,i=e.seo,l=e.loading,c=this.props.match.params.career;return h.a.createElement("div",null,h.a.createElement(w.a,{seo:i}),h.a.createElement(k.a,{image:"https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg",title:"Careers & Available Positions",subtitle:" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."}),h.a.createElement(N.a,null,h.a.createElement(T.a,{sort:a,positions:t,keyword:n,type:r,career:c,location:o,loading:l,selectOption:this.selectOption,filterTerm:this.filterTerm,clearFilter:this.clearFilter}),h.a.createElement(O.a,{content:"EE content will og here"})))}}]),l}(b.Component);t.default=S}.call(this,a(140))},497:function(e,t,a){var n=a(500),r=a.n(n),o=a(0),i=a.n(o),l=a(3),c=a.n(l),s=a(501),m=a(139);function p(){var e=r()(["\n    background-color: rgba(0,0,0,.5);\n    border-radius: 4px;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    overflow: visible;\n    border: 1px solid black;\n  "]);return p=function(){return e},e}function u(){var e=r()(["\n    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(",") no-repeat 50%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n    clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);\n   ","\n  "]);return u=function(){return e},e}var d=function(e){var t=e.title,a=e.subtitle,n=e.image,r=e.height,o=s.a.div(u(),n,r),l=s.a.div(p());return i.a.createElement(o,{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(l,{className:"col-sm-12 col-md-7 offset-md-2 text-white"},i.a.createElement("div",{className:"p-3"},i.a.createElement("span",{id:"red-block"}),i.a.createElement("h1",{className:"text-white proxima-bold border-bottom"},t),i.a.createElement("h2",{className:"proxima-regular mt-3 mb-5 h2-italic",dangerouslySetInnerHTML:Object(m.b)(a)}))))))};d.propTypes={image:c.a.string,title:c.a.string,subtitle:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),height:c.a.string},d.defaultProps={image:"",title:"",subtitle:"",height:""},t.a=d},498:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},t)))}},504:function(e,t,a){var n=a(0),r=a.n(n),o=a(499),i=a(3),l=a.n(i);function c(e){var t=e.seo;return r.a.createElement(o.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}c.propTypes={seo:l.a.objectOf(l.a.string)},c.defaultProps={seo:{}},t.a=c},717:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,"EQUAL EMPLOYMENT OPPORTUNITY")),r.a.createElement("div",{className:"container article-container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 ft-12"},r.a.createElement("p",null,"Scarinci Hollenbeck is an equal opportunity employer. It is Scarinci Hollenbeck’s policy to consider all applicants for employment solely on the basis of their qualifications for the job without regard to race, color, creed, sex, sexual orientation, gender identity or expression, marital status, age, religion, ancestry, national origin, citizenship, disability, atypical hereditary cellular or blood trait, arrest record, liability for service in the armed forces of the United States or unfavorable military discharge."),r.a.createElement("p",null,"In addition, the Firm attempts to comply with all applicable state and local laws and regulations governing nondiscrimination in employment and employment-related decision making. This policy applies to decisions regarding employment, placement, promotion, termination, layoff, recall, transfer, leave of absence, compensation and training."),r.a.createElement("p",null,"The Firm is committed to making reasonable accommodations upon request to ensure applicants with disabilities can be accepted for employment consistent with their full capabilities."),r.a.createElement("p",{className:"proxima-bold"},"TO READ ABOUT SCARINCI HOLLENBECK’S COMMITMENT TO DIVERSITY,"," ",r.a.createElement("a",{href:"".concat(window.location.origin,"/diversity"),className:"red-title proxima-bold"},r.a.createElement("u",null,"CLICK HERE.")))))))}},872:function(e,t,a){var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(139);function c(e){var t=e.locations,a=e.positionType,n=e.keyword,o=e.filterTerm,i=e.location,l=e.type,c=e.selectOption,s=e.clearFilter,m=function(e){return e.filter((function(t,a){return e.indexOf(t)===a}))},p=m(t),u=m(a);return r.a.createElement("div",{className:"bckground-gray border"},r.a.createElement("div",{className:"pt-3 pr-3 pl-3 mb-0 row"},r.a.createElement("div",{className:"col-sm-12 col-md-4 filter"},r.a.createElement("label",{htmlFor:"keyword",className:"w-100"},r.a.createElement("input",{type:"text",id:"keyword",placeholder:"Keyword",onChange:o,value:n,className:"w-100"}),r.a.createElement("span",{className:"sr-only"},"Keyword"))),r.a.createElement("div",{className:"col-sm-12 col-md-3 filter"},r.a.createElement("form",{className:"d-block"},r.a.createElement("label",{htmlFor:"locForm",className:"w-100"},r.a.createElement("select",{name:"location",id:"locForm",value:i,onChange:c,className:"p-25 w-100"},r.a.createElement("option",{name:"location",value:"location"},"Locations"),p.map((function(e){return r.a.createElement("option",{name:"location",key:e,value:e},e)}))),r.a.createElement("span",{className:"sr-only"},"Location")))),r.a.createElement("div",{className:"col-sm-12 col-md-3 filter"},r.a.createElement("form",{className:"d-block"},r.a.createElement("label",{htmlFor:"typeForm",className:"w-100"},r.a.createElement("span",{className:"sr-only"},"Position Type"),r.a.createElement("select",{name:"type",id:"typeForm",value:l,onChange:c,className:"p-25 w-100"},r.a.createElement("option",{name:"type",value:"Position Type"},"Position Type"),u.map((function(e){return r.a.createElement("option",{name:"type",key:e,value:e},e)})))))),r.a.createElement("div",{className:"col-sm-12 col-md-2 filter"},r.a.createElement("button",{type:"button",className:"m-1 btn btn-danger float-right",onClick:function(){return s()}},"Clear Filters"))))}c.propTypes={locations:i.a.arrayOf(i.a.string),positionType:i.a.arrayOf(i.a.string),keyword:i.a.string,location:i.a.string,type:i.a.string,filterTerm:i.a.func,selectOption:i.a.func,clearFilter:i.a.func},c.defaultProps={locations:[],positionType:[],keyword:"",location:"",type:"",filterTerm:function(){},selectOption:function(){},clearFilter:function(){}};var s=c,m=a(15);function p(e){var t=e.positions,a=e.loading;return console.log(a),console.log(t),r.a.createElement("div",{className:"w-100 border mt-0"},r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"row"},!0===a&&r.a.createElement("div",{className:"w-100 my-5"},r.a.createElement("h3",{className:"text-center red-title"},"Loading open career positions...")),!1===a&&t.length<1&&r.a.createElement("div",{className:"w-100 my-5"},r.a.createElement("h3",{className:"text-center red-title"},"Sorry, no career position available...")),!1===a&&t.map((function(e){return r.a.createElement("div",{key:e.title,className:"col-sm-12 col-md-4 mt-3 mb-2"},r.a.createElement(m.b,{to:"/career/".concat(Object(l.j)(e.title))},r.a.createElement("div",{className:"card d-flex flex-row"},r.a.createElement("div",{id:"bg-red-block"}),r.a.createElement("div",{className:"my-2"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"my-0"},r.a.createElement("strong",null,"Location: "),e.positionLocation),r.a.createElement("p",{className:"my-0"},r.a.createElement("strong",null,"Type: "),e.positionType),r.a.createElement("p",{className:"my-0"},r.a.createElement("strong",null,"Start: "),e.startDate)))))})))))}p.propTypes={positions:i.a.arrayOf(i.a.object),loading:i.a.bool},p.defaultProps={positions:[],loading:!0};var u=p;function d(e){var t=e.positions,a=e.keyword,n=e.filterTerm,o=e.location,i=e.type,c=e.selectOption,m=e.career,p=e.clearFilter,d=e.loading,f=Object(l.i)(t,"title"),y=t.map((function(e){return e.positionLocation})),g=t.map((function(e){return e.positionType})),v=f.filter((function(e){return a?e.title.indexOf(a)>=0||e.positionDescription.indexOf(a.trim())>=0||e.positionLocation.indexOf(a)>=0||e.positionType.indexOf(a)>=0?e:void 0:e})).filter((function(e){return o?e.positionLocation.indexOf(o)>=0:e})).filter((function(e){return i?e.positionType.indexOf(i)>=0:e}));return r.a.createElement("div",{className:"mb-5",id:"career-section"},r.a.createElement(s,{locations:y,positionType:g,keyword:a,location:o,type:i,selectOption:c,filterTerm:n,clearFilter:p}),r.a.createElement(u,{positions:v,loading:d,career:m}))}d.propTypes={keyword:i.a.string,location:i.a.string,type:i.a.string,career:i.a.string,positions:i.a.arrayOf(i.a.object),filterTerm:i.a.func,selectOption:i.a.func,clearFilter:i.a.func,loading:i.a.bool},d.defaultProps={keyword:"",location:"",type:"",career:"",positions:[],loading:!0,filterTerm:function(){},selectOption:function(){},clearFilter:function(){}};t.a=d}}]);