(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);a(74);var r=a(0),i=a.n(r),n=a(147),s=a(159),l=a.n(s),o=a(154),d=a(156),c=function(e){var t=e.title,a=e.excerpt,r=e.imageSrc,s=e.slug,l=e.date,o={backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center center"};return i.a.createElement(n.Link,{style:o,to:s,className:"w-100 h-100 dib feature-ride no-underline flex flex-column justify-end"},i.a.createElement("div",{className:"pa5 feature-ride__info"},i.a.createElement("h1",{className:"tc f1 mb3 near-white lh-title"},t),i.a.createElement("p",{className:"f4 tc mv0 mt4 near-white lh-copy"},a),i.a.createElement("p",{className:"i tc mt4 mb0 near-white"},l)))};a.d(t,"query",function(){return u});t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges[0],r=t.allMarkdownRemark.edges.slice(1),s=a.node.frontmatter.cover_image.childImageSharp.sizes.src,u=function(e,t){return e.split(" ").splice(0,t).join(" ")+"..."};return i.a.createElement(o.a,null,i.a.createElement(d.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("div",{className:"cf ph0 ph5-l"},i.a.createElement("div",{className:"fl w-100 w-50-l pa3-l feature-ride-container"},i.a.createElement(c,{slug:a.node.fields.slug,imageSrc:s,title:a.node.frontmatter.title,excerpt:u(a.node.frontmatter.excerpt,30),date:a.node.frontmatter.date})),i.a.createElement("div",{className:"fl w-100 flex flex-wrap w-50-l cf pa3 pa0-l"},r.map(function(e){var t=e.node;return i.a.createElement("div",{key:t.id,className:"fl w-100 w-50-ns pa3"},i.a.createElement("div",null,i.a.createElement(n.Link,{to:t.fields.slug},i.a.createElement(l.a,{sizes:t.frontmatter.cover_image.childImageSharp.sizes,backgroundColor:"#d7d7d7",className:"dim black"})),i.a.createElement("h3",{className:"near-black lh-title mb2"},i.a.createElement(n.Link,{to:t.fields.slug,className:"link dim black"},t.frontmatter.title)),i.a.createElement("p",{className:"gray lh-copy mt0"},u(t.frontmatter.excerpt,30))))}))))};var u="4149007894"},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(146),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(148),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},148:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},149:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(52),o=a(2),d=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";var r=a(147),i=a(4),n=a.n(i),s=a(0),l=a.n(s),o=function(e){var t=e.siteTitle;return l.a.createElement("div",{className:"near-black pv4 ph2 ph5-l flex justify-between items-center flex-none"},l.a.createElement("h3",{className:"ph3"},l.a.createElement(r.Link,{to:"/",className:"near-black no-underline ttu"},t)),l.a.createElement("nav",{className:"ph3"},l.a.createElement(r.Link,{to:"/about",className:"near-black no-underline"},"About")))};o.propTypes={siteTitle:n.a.string},o.defaultProps={siteTitle:""},t.a=o},154:function(e,t,a){"use strict";var r=a(155),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(147),d=a(150),c=function(e){var t=e.children;return n.a.createElement(o.StaticQuery,{query:"1519212112",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex flex-column w-100 vh-100 lh-body"},n.a.createElement(d.a,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{className:"mw9 center w-100"},t)))},data:r})};c.propTypes={children:l.a.node.isRequired},t.a=c},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Goneriding"}}}}},156:function(e,t,a){"use strict";var r=a(157),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(160),d=a.n(o),c=a(147);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,l=e.title;return n.a.createElement(c.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var f="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Goneriding",description:"Goneriding",author:"@gatsbyjs"}}}}},159:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(51)),l=r(a(152)),o=r(a(153)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),k={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(m){var L=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(y,(0,o.default)({src:L.base64},k)),L.tracedSVG&&d.default.createElement(y,(0,o.default)({src:L.tracedSVG},k)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,src:L.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},L))}}))}if(h){var N=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},N.base64&&d.default.createElement(y,(0,o.default)({src:N.base64},k)),N.tracedSVG&&d.default.createElement(y,(0,o.default)({src:N.tracedSVG},k)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(y,{alt:a,title:t,width:N.width,height:N.height,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:N.width,height:N.height},N))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-35ff7e8f2b8b883eaed9.js.map