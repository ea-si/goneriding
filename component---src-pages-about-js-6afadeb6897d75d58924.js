(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(145),o=n(149),c=n(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"About"}),r.a.createElement("p",null,"Welcome about page"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(144),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(146),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,n){"use strict";var a=n(145),r=n(4),i=n.n(r),o=n(0),c=n.n(o),u=function(e){var t=e.siteTitle;return c.a.createElement("div",{className:"near-black pa4 flex justify-between items-center h4 flex-none"},c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(a.Link,{to:"/",className:"near-black no-underline ttu"},t))),c.a.createElement("nav",null,c.a.createElement(a.Link,{to:"/about",className:"near-black no-underline"},"About")))};u.propTypes={siteTitle:i.a.string},u.defaultProps={siteTitle:""},t.a=u},149:function(e,t,n){"use strict";var a=n(150),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(145),s=n(148),l=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"1519212112",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex w-100"},i.a.createElement("div",{className:"flex flex-column w-100 overflow-auto vh-100 lh-body"},i.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),t)))},data:a})};l.propTypes={children:c.a.node.isRequired},t.a=l},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Goneriding"}}}}},151:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(155),s=n.n(u),l=n(145);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Goneriding",description:"Goneriding",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-6afadeb6897d75d58924.js.map