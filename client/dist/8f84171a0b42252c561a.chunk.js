(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{885:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(0)),n=l(a(3));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.content,a=e.members,n=e.currentTab,l=e.tabClick;return console.log(a),r.default.createElement("div",{className:"line-header",id:"nav-tab",role:"tablist"},t.length>0?r.default.createElement("h3",{className:n===t[0].title?"active":"",id:"nav-home-tab","data-toggle":"tab",onClick:function(){return l(t[0].title)},onKeyPress:function(){return l(t[0].title)},href:"#"+t[0].title,role:"tab","aria-controls":"nav-home","aria-selected":"true"},t[0].title):"",t.map((function(e,t){return t>0?r.default.createElement("h3",{key:e.title,className:n===e.title?"active":"","data-toggle":"tab",href:"#"+e.title,role:"tab",onClick:function(){return l(e.title)},onKeyPress:function(){return l(e.title)},"aria-controls":"nav-home","aria-selected":"true"},e.title):""})),Object.keys(a).length>0?r.default.createElement("h3",{id:"nav-home-tab",className:"members"===n?"active":"","data-toggle":"tab",href:"#members",role:"tab",onClick:function(){return l("members")},onKeyPress:function(){return l("members")},"aria-controls":"nav-home","aria-selected":"true"},"Members"):"")};o.propTypes={content:n.default.arrayOf(n.default.object),members:n.default.objectOf(n.default.array),currentTab:n.default.string,tabClick:n.default.func},o.defaultProps={content:[],members:{},currentTab:"",tabClick:function(){}},t.default=o}}]);