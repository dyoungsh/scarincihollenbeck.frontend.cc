(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{491:function(e,t,a){a.r(t),function(e){var n=a(61),r=a.n(n),c=a(82),l=a.n(c),s=a(57),o=a.n(s),i=a(58),m=a.n(i),u=a(59),p=a.n(u),d=a(60),f=a.n(d),h=a(39),b=a.n(h),y=a(0),E=a.n(y),g=a(515),v=a(503),N=a(516),w=a(872),x=a(752),k=a(139);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(t){p()(s,t);var a,n,c=(a=s,function(){var e,t=b()(a);if(S()){var n=b()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f()(this,e)});function s(e){var t;return o()(this,s),(t=c.call(this,e)).state={results:[],news:[],events:[],insight:[],bio:[],practices:[],pageNums:[],currentPage:"",breadCrumb:[],categorySlug:"",seo:{},loading:!1},t}return m()(s,[{key:"componentDidMount",value:(n=l()(r.a.mark((function t(){var a,n,c,s,o,i=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=this.props.match.params,n=a.author,c=a.pageNum,s=1,o=[n,1],void 0!==c&&(s=c,o[1]=c),this.setState({breadCrumb:o,categorySlug:n,currentPage:s,loading:!0},l()(r.a.mark((function t(){var a,c,l,o,m,u,p,d,f,h,b,y,E,g,v,N,w;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/author/posts/").concat(n,"/").concat(s),{headers:k.e});case 2:return a=t.sent,t.next=5,e("".concat("https://admin.scarincihollenbeck.com","/wp-json/author/bio/").concat(n),{headers:k.e});case 5:return c=t.sent,t.next=8,e("".concat("https://api.scarincihollenbeck.com","/cached/latest-articles"),{headers:k.e});case 8:return l=t.sent,t.next=11,a.json();case 11:return o=t.sent,t.next=14,c.json();case 14:return m=t.sent,t.next=17,l.json();case 17:for(u=t.sent,p=o.pages,d=o.results,f=o.seo,h=m.bio,b=m.practices,y=u.firmNews,E=u.firmInsights,g=u.firmEvents,v=[h],N=[],w=1;w<=p;w+=1)N.push(w);i.setState({results:d,seo:f,pageNums:N,bio:v,practices:b,news:y,events:g,insight:E,loading:!1});case 25:case"end":return t.stop()}}),t)}))));case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.results,a=e.news,n=e.events,r=e.insight,c=e.pageNums,l=e.breadCrumb,s=e.categorySlug,o=e.currentPage,i=e.bio,m=e.practices,u=e.seo,p=e.loading,d=o>2?o-1:1,f=o<c.length?parseInt(o,10)+1:c.length,h=window.location.href.split("/").filter((function(e){return""!==e})),b="number"==typeof h[h.length-1]?h[h.length-1]:1;return E.a.createElement("div",null,E.a.createElement(v.a,{seo:u}),E.a.createElement(g.a,{header:E.a.createElement(N.a,{breadCrumb:l,categorySlug:s}),body:E.a.createElement(x.a,{results:t,categorySlug:s,next:f,prev:d,pageNums:c,news:a,events:n,insight:r,active:b,loading:p}),sidebar:E.a.createElement(w.a,{bio:i,practices:m})}))}}]),s}(y.Component);t.default=C}.call(this,a(140))},502:function(e,t,a){(function(e){var n=a(61),r=a.n(n),c=a(82),l=a.n(c),s=a(57),o=a.n(s),i=a(58),m=a.n(i),u=a(83),p=a.n(u),d=a(59),f=a.n(d),h=a(60),b=a.n(h),y=a(39),E=a.n(y),g=a(0),v=a.n(g),N=a(139);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=function(t){f()(s,t);var a,n,c=(a=s,function(){var e,t=E()(a);if(w()){var n=E()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function s(e){var t;return o()(this,s),(t=c.call(this,e)).state={searchTerm:"",attorneys:[],practices:[],categories:[],t:{keyword:"",attorney:"",practice:"",category:""}},t.onChange=t.onChange.bind(p()(t)),t.onSubmit=t.onSubmit.bind(p()(t)),t}return m()(s,[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=this.state.t;r[n]=a,this.setState({t:r})}},{key:"onSubmit",value:function(){var e,t,a,n,r,c,l=this.state.t;window.location=(t=(e=l).keyword,a=e.practice,n=e.attorney,r=e.category,c="".concat(void 0!==t?t:""," ").concat(void 0!==a?a:""," ").concat(void 0!==n?n:""," ").concat(void 0!==r?r:"").trim().replace(/[^\w\s]/gi,""),"/s?=".concat(c.toLowerCase().replace(/\s/g,"+")))}},{key:"componentDidMount",value:(n=l()(r.a.mark((function t(){var a,n,c,l,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat("https://api.scarincihollenbeck.com","/cached/search-options"),{headers:N.e});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c=n.attorneys,l=n.categories,s=n.practices,this.setState({attorneys:c,categories:l,practices:s});case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state,a=t.attorneys,n=t.categories,r=t.practices,c=(t.searchTerm,t.t);return v.a.createElement("div",{className:"w-100"},v.a.createElement("form",{onChange:this.onChange},v.a.createElement("label",{htmlFor:"searchSite",className:"w-100"},v.a.createElement("input",{name:"keyword",type:"search",id:"searchSite",value:c.keyword,placeholder:"Keyword...",className:"form-control p-2"}),v.a.createElement("span",{className:"sr-only"},"Search Site")),v.a.createElement("label",{htmlFor:"searchPractice",className:"d-block w-100"},v.a.createElement("select",{name:"practice",id:"searchPractice",className:"form-control p-2"},v.a.createElement("option",{defaultValue:"Filter by practice"},c.practice||"Filter by practice"),r.map((function(e){return v.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),v.a.createElement("span",{className:"sr-only"},"Filter by Practice")),v.a.createElement("label",{htmlFor:"searchAttorney",className:"d-block w-100"},v.a.createElement("select",{name:"attorney",id:"searchAttorney",className:"form-control p-2"},v.a.createElement("option",{defaultValue:"Filter by attorney"},c.attorney||"Filter by attorney"),a.map((function(e){return v.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title)}))),v.a.createElement("span",{className:"sr-only"},"Filtery by Attorney")),v.a.createElement("label",{htmlFor:"searchCategory",className:"d-block w-100"},v.a.createElement("select",{name:"category",id:"searchCategory",className:"form-control p-2"},v.a.createElement("option",{defaultValue:"Filter by category"},c.category||"Filter by category"),n.map((function(e){return"Uncategorized"!==e.title?v.a.createElement("option",{value:e.title||"",key:Object(N.a)(e.title)},e.title):""}))),v.a.createElement("span",{className:"sr-only"},"Filtery by Category")),v.a.createElement("button",{type:"button",className:"btn btn-secondary proxima-bold px-5 my-2 mr-2"},"Clear"),v.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-danger my-2 px-5"},"Search")))}}]),s}(g.Component);t.a=x}).call(this,a(140))},503:function(e,t,a){var n=a(0),r=a.n(n),c=a(498),l=a(3),s=a.n(l);function o(e){var t=e.seo;return r.a.createElement(c.Helmet,null,r.a.createElement("title",null,t.title),r.a.createElement("meta",{name:"description",content:t.metaDescription}),r.a.createElement("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),r.a.createElement("link",{rel:"canonical",href:"".concat(window.location.origin,"/").concat(t.canonicalLink)}))}o.propTypes={seo:s.a.objectOf(s.a.string)},o.defaultProps={seo:{}},t.a=o},515:function(e,t,a){var n=a(0),r=a.n(n);t.a=function(e){var t=e.header,a=e.body,n=e.sidebar;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-18"},t),r.a.createElement("div",{className:"col-sm-12 col-md-8"},a),r.a.createElement("div",{className:"col-sm-12 col-md-4"},n)))}},516:function(e,t,a){var n=a(0),r=a.n(n),c=a(104),l=a(504),s=a(3),o=a.n(s);function i(e){var t=e.breadCrumb,a=e.categorySlug;return r.a.createElement("h6",null,r.a.createElement("span",null,r.a.createElement("a",{href:"".concat(window.location.origin),className:"red-title proxima-bold"},"HOME")),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(c.a,{icon:l.faCaretRight,className:"red-title"})),t.map((function(e,n){return n<t.length-1?r.a.createElement("span",{key:e},r.a.createElement("span",{className:"red-title proxima-bold text-uppercase"},e===a?r.a.createElement("u",null,a):"".concat(a)),r.a.createElement("strong",{className:"text-black mt-2 mx-2 proxima-bold"},r.a.createElement(c.a,{icon:l.faCaretRight,className:"red-title"}))):r.a.createElement("span",{key:e},r.a.createElement("span",{className:"red-title proxima-bold"},e===a?r.a.createElement("u",null,e):"".concat(e)))})))}i.propTypes={breadCrumb:o.a.arrayOf(o.a.oneOfType([o.a.string,o.a.number])),categorySlug:o.a.string},i.defaultProps={breadCrumb:[],categorySlug:""},t.a=i},517:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),l=a.n(c),s=a(141),o=a(139);function i(e){var t=e.title,a=e.articles,n=Object(o.i)(a,"date");return r.a.createElement("div",null,r.a.createElement("div",{className:"line-header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 pt-4"},r.a.createElement(s.a,{sliderType:"LargeArticle",slides:n})))))}i.propTypes={title:l.a.string,articles:l.a.arrayOf(l.a.object)},i.defaultProps={title:"",articles:[]},t.a=i},752:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),l=a.n(c),s=a(104),o=a(504),i=a(528),m=a(517);function u(e){var t=e.results,a=e.pageNums,n=e.categorySlug,c=e.news,l=e.insight,u=e.events,p=e.prev,d=e.next,f=e.active,h=e.loading;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},!1===h?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-12 col-md-6"},t.map((function(e,t){return t<5?r.a.createElement("div",{className:"p-2",key:e.id},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"mt-0 mb-3 text-muted small-excerpt"},e.description))):""}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},t.map((function(e,t){return t>5?r.a.createElement("div",{className:"p-2",key:e.id},r.a.createElement("a",{href:e.link,className:"top-article"},r.a.createElement("h5",{className:"mb-0"},e.title),r.a.createElement("p",{className:"mt-0 mb-3 text-muted small-excerpt"},e.description))):""})))):r.a.createElement("div",{className:"col-sm-12 my-5"},r.a.createElement("h3",{className:"text-center red-title"},"Loading results..."))),r.a.createElement("div",{className:"w-100 mt-0 ml--1"},void 0!==t&&a.length>1?r.a.createElement("nav",{"aria-label":"pagination"},r.a.createElement("ul",{className:"d-flex flex-wrap no-dots lead"},r.a.createElement("li",{className:"mr-2"},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/archives/").concat(n,"/page/").concat(p,"/"),tabIndex:"-1","aria-label":"previous link"},r.a.createElement(s.a,{icon:i.faCaretLeft}))),a.map((function(e){return f===e?r.a.createElement("li",{className:f===e?"active mr-2":"mr-2",key:"page-".concat(e)},r.a.createElement("a",{className:"text-dark mt-2",href:"".concat(window.location.origin,"/author/").concat(n,"/page/").concat(e,"/")},e)):""})),r.a.createElement("li",{className:"mx-1"},"..."),a.map((function(e){return a.length-1===e?r.a.createElement("li",{className:f===e?"active mr-2":"mr-2",key:"page-".concat(e)},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/author/").concat(n,"/page/").concat(e,"/")},e)):""})),r.a.createElement("li",{className:"ml-1"},r.a.createElement("a",{className:"text-dark",href:"".concat(window.location.origin,"/author/").concat(n,"/page/").concat(d,"/"),"aria-label":"next link"},r.a.createElement(s.a,{icon:o.faCaretRight}))))):""),r.a.createElement("div",{className:"w-100 d-block"},r.a.createElement(m.a,{title:"Firm News",articles:c}),r.a.createElement(m.a,{title:"Firm Events",articles:u}),r.a.createElement(m.a,{title:"Firm Insights",articles:l})))}u.propTypes={results:l.a.arrayOf(l.a.object),pageNums:l.a.arrayOf(l.a.number),categorySlug:l.a.string,news:l.a.arrayOf(l.a.object),insight:l.a.arrayOf(l.a.object),events:l.a.arrayOf(l.a.object),prev:l.a.number,next:l.a.number,active:l.a.number,loading:l.a.bool},u.defaultProps={results:[],pageNums:[],categorySlug:"",news:[],insight:[],events:[],prev:0,next:0,active:1,loading:!1},t.a=u},872:function(e,t,a){var n=a(0),r=a.n(n),c=a(3),l=a.n(c),s=a(502),o=a(104),i=a(508),m=a(509),u=a(139);function p(e){var t=e.bio;return r.a.createElement("div",{className:"w-100 mt-5"},r.a.createElement("div",{className:"sidebar-title"},"About"," ",t.map((function(e){return e.name}))),r.a.createElement("div",{className:"off-white"},t.map((function(e){return r.a.createElement("span",{className:"py-2 mx-3 d-block",key:e.name},r.a.createElement("img",{src:e.image,alt:e.name,className:"img-thumbnail"}),r.a.createElement("p",{className:"mt-1 mb-0"},r.a.createElement(o.a,{icon:i.faPhone})," ",r.a.createElement("a",{href:"mailto:".concat(e.email),className:"proxima-bold text-dark"},e.email)),r.a.createElement("p",{className:"my-0"},r.a.createElement(o.a,{icon:m.faEnvelope})," ",e.phone),r.a.createElement("div",{dangerouslySetInnerHTML:Object(u.b)(e.bioContent),className:"mt-2"}),r.a.createElement("a",{href:e.link,className:"red-title proxima-bold mt-2"},"Full Bio >>"))}))))}p.propTypes={bio:l.a.arrayOf(l.a.object)},p.defaultProps={bio:[]};var d=p;function f(e){var t=e.bio,a=e.practices;return r.a.createElement("div",{className:"w-100 mt-5"},r.a.createElement("div",{className:"sidebar-title"},t.map((function(e){return e.name}))," ","Services"),r.a.createElement("div",{className:"off-white p-3"},r.a.createElement("ul",{className:"pl-0 pt-2 pb-1 pr-1 sidebar-content-page"},a&&a.map((function(e){return r.a.createElement("li",{key:e.title},r.a.createElement("a",{href:e.link,className:"proxima-bold"},e.title))})))))}f.propTypes={practices:l.a.arrayOf(l.a.object),bio:l.a.arrayOf(l.a.object)},f.defaultProps={practices:[],bio:[]};var h=f;function b(e){var t=e.bio,a=e.practices;return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(d,{bio:t}),r.a.createElement(h,{practices:a,bio:t}))}b.propTypes={practices:l.a.arrayOf(l.a.object),bio:l.a.arrayOf(l.a.object)},b.defaultProps={bio:[],practices:[]};t.a=b}}]);