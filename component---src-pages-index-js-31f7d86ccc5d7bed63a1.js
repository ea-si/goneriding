(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);a(75);var r=a(0),i=a.n(r),n=a(152),s=a(168),l=a.n(s),o=a(165),c=a(160),d=function(e){var t=e.title,a=e.excerpt,r=e.imageSrc,s=e.slug,l=e.date,o={backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center center"};return i.a.createElement(n.Link,{style:o,to:s,className:"link black br0 br3-l overflow-hidden w-100 h-100 dib feature-ride no-underline flex dim flex-column justify-end"},i.a.createElement("div",{className:"pv5 ph5 ph5-l mw7 center feature-ride__info"},i.a.createElement("h1",{className:"tc f1-l f2 mb3 near-white lh-title serif"},t),i.a.createElement("p",{className:"f4 tc mv0 mt4 near-white lh-copy"},a),i.a.createElement("p",{className:"i tc mt4 mb0 near-white o-30"},l)))};a.d(t,"query",function(){return u});t.default=function(e){var t=e.data,a=t.featurePost.edges[0],r=a.node.frontmatter.cover_image.childImageSharp.sizes.src,s=t.allPosts.edges.slice(0,7),u=function(e,t){return e.split(" ").splice(0,t).join(" ")+"..."};return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("div",{className:"mw9 center w-100 mb4 flex-grow-1"},i.a.createElement("div",{className:"cf ph0 ph3-l"},i.a.createElement("div",{className:"fl w-100 w-50-l pa3-l feature-ride-container"},i.a.createElement(d,{slug:a.node.fields.slug,imageSrc:r,title:a.node.frontmatter.title,excerpt:u(a.node.frontmatter.excerpt,24),date:a.node.frontmatter.date})),i.a.createElement("div",{className:"fl w-100 flex flex-wrap w-50-l pa3 pa0-l"},s.map(function(e){var t=e.node;return i.a.createElement("div",{key:t.id,className:"fl w-100 w-50-ns pa3"},i.a.createElement("div",null,i.a.createElement(n.Link,{to:t.fields.slug,className:"link black db"},i.a.createElement(l.a,{fluid:t.frontmatter.cover_image.childImageSharp.fluid,backgroundColor:"#d7d7d7",className:"dim black br3"})),i.a.createElement("h3",{className:"near-black lh-title mb2"},i.a.createElement(n.Link,{to:t.fields.slug,className:"link dim black serif"},t.frontmatter.title)),i.a.createElement("p",{className:"silver i f6 mb3 mt0 lh-solid"},t.frontmatter.date),i.a.createElement("p",{className:"fw3 gray lh-copy mt0"},u(t.frontmatter.excerpt,40))))}),i.a.createElement("div",{className:"pa3 w-100"},i.a.createElement(n.Link,{className:"link dim db br2 mb0 ph3 pv3 tc b center white bg-black ttu",to:"/rides"},"View all rides"))))))};var u="3891640186"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(149),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(153),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){var r;e.exports=(r=a(155))&&r.default||r},155:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),l=a(52),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var r=a(152),i=a(4),n=a.n(i),s=a(0),l=a.n(s),o=function(e){var t=e.siteTitle;return l.a.createElement("div",{className:"c-header near-black pv4 ph2 ph3-l flex justify-between items-center flex-none"},l.a.createElement("h2",{className:"ph3 lh-solid fw9 dim f3-l f4 serif c-header__logo"},l.a.createElement(r.Link,{to:"/",className:"near-black no-underline ttc link"},t)),l.a.createElement("nav",{className:"ph3"},l.a.createElement(r.Link,{to:"/rides",className:"san-serif fw3 near-black link dim mr4"},"Rides"),l.a.createElement(r.Link,{to:"/about",className:"san-serif fw3 near-black link dim"},"About")))};o.propTypes={siteTitle:n.a.string},o.defaultProps={siteTitle:""},t.a=o},157:function(e,t,a){"use strict";var r=a(7),i=a.n(r),n=a(0),s=a.n(n),l=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"bg-near-white gray pv2 ph2"},s.a.createElement("div",{className:"pa3"},s.a.createElement("p",{className:"lh-title tc lh-copy"},"Built with"," ",s.a.createElement("a",{className:"link dim black",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"),","," ",s.a.createElement("a",{className:"link dim black",href:"http://tachyons.io"},"Tachyons")," ","&"," ",s.a.createElement("a",{className:"link dim black",href:"https://www.gatsbyjs.org"},"Gatsby")," • ","A Project by"," ",s.a.createElement("a",{className:"link dim black",href:"https://twitter.com/p0pmaker"},"Jacky Lee"))))},t}(n.Component);t.a=l},160:function(e,t,a){"use strict";var r=a(161),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(174),c=a.n(o),d=a(152);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,l=e.title,o=e.image;return n.a.createElement(d.StaticQuery,{query:f,render:function(e){var r=t||e.DefaultSEO.siteMetadata.description,d=o||e.DefaultImage.edges[0].node.publicURL;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.DefaultSEO.siteMetadata.title,meta:[{name:"description",content:r},{name:"og:image",content:d},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:d},{name:"twitter:creator",content:e.DefaultSEO.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var f="4091074332"},161:function(e){e.exports={data:{DefaultSEO:{siteMetadata:{title:"goneriding",description:"Goneriding",author:"@gatsbyjs",image:"src/images/metaImage.png"}},DefaultImage:{edges:[{node:{publicURL:"/goneriding/static/metaImage-d6cc48f04386e7fa4c2eb1542e10c5a2.png"}}]}}}},165:function(e,t,a){"use strict";var r=a(166),i=a(0),n=a.n(i),s=a(4),l=a.n(s),o=a(152),c=a(157),d=a(156),u=function(e){var t=e.children;return n.a.createElement(o.StaticQuery,{query:"1519212112",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"vh-100 flex flex-column"},n.a.createElement(d.a,{siteTitle:e.site.siteMetadata.title}),t,n.a.createElement(c.a,null)))},data:r})};u.propTypes={children:l.a.node.isRequired},t.a=u},166:function(e){e.exports={data:{site:{siteMetadata:{title:"goneriding"}}}}},168:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(51)),l=r(a(175)),o=r(a(176)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,w=e.Tag,v="boolean"==typeof b?"lightgray":b,E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),k={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(m){var N=m;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&c.default.createElement(y,(0,o.default)({src:N.base64},k)),N.tracedSVG&&c.default.createElement(y,(0,o.default)({src:N.tracedSVG},k)),v&&c.default.createElement(w,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),c.default.createElement(y,{alt:a,title:t,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},N))}}))}if(h){var L=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},n);return"inherit"===n.display&&delete R.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(y,(0,o.default)({src:L.base64},k)),L.tracedSVG&&c.default.createElement(y,(0,o.default)({src:L.tracedSVG},k)),v&&c.default.createElement(w,{title:t,style:{backgroundColor:v,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-31f7d86ccc5d7bed63a1.js.map