"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7918],{72146:function(e,t,a){a.r(t),a.d(t,{default:function(){return De}});var n=a(67294),r=a(86010),l=a(1944),i=a(87524),c=a(35281),s=a(87462),o=a(95999),d=a(39960);function m(e){var t=e.permalink,a=e.title,l=e.subLabel,i=e.isNext;return n.createElement(d.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function u(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(m,(0,s.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(m,(0,s.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var v=a(52263),p=a(80143),h=a(60373),f=a(74477);var b={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=b[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){var t,a=e.className,l=e.versionMetadata,i=(0,v.Z)().siteConfig.title,s=(0,p.gA)({failfast:!0}).pluginId,o=(0,h.J)(s).savePreferredVersionName,d=(0,p.Jo)(s),m=d.latestDocSuggestion,u=d.latestVersionSuggestion,f=null!=m?m:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:u.label,to:f.path,onClick:function(){return o(u.name)}})))}function N(e){var t=e.className,a=(0,f.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function Z(e){var t=e.className,a=(0,f.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function T(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(_,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var y=a(63366),C="iconEdit_eYIM",x=["className"];function H(e){var t=e.className,a=(0,y.Z)(e,x);return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(C,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function A(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(H,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var U="tag_zVej",w="tagRegular_sFm0",I="tagWithCount_h2kH";function M(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(d.Z,{href:t,className:(0,r.Z)(U,l?I:w)},a,l&&n.createElement("span",null,l))}var B="tags_jXut",O="tag_QGVx";function V(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(B,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:O},n.createElement(M,{label:t,permalink:a}))}))))}var S="lastUpdated_vbeJ";function P(e){return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V,e)))}function D(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(A,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",S)},(a||l)&&n.createElement(T,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function R(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||l||s);return d||m?n.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(P,{tags:o}),m&&n.createElement(D,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var z=a(86668),j=["parentIndex"];function F(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,y.Z)(e,j);a>=0?t[a].children.push(r):n.push(r)})),n}function q(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=q({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function W(e){var t=e.getBoundingClientRect();return t.top===t.bottom?W(e.parentNode):t}function G(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return W(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(W(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function J(){var e=(0,n.useRef)(0),t=(0,z.L)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){var t=(0,n.useRef)(void 0),a=J();(0,n.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=G(c,{anchorTopOffset:a.current}),o=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,a])}function Q(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(Q,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}var X=n.memo(Q),K=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function $(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,o=void 0===c?void 0:c,d=e.minHeadingLevel,m=e.maxHeadingLevel,u=(0,y.Z)(e,K),v=(0,z.L)(),p=null!=d?d:v.tableOfContents.minHeadingLevel,h=null!=m?m:v.tableOfContents.maxHeadingLevel,f=function(e){var t=e.toc,a=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,n.useMemo)((function(){return q({toc:F(t),minHeadingLevel:a,maxHeadingLevel:r})}),[t,a,r])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return Y((0,n.useMemo)((function(){if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:h}}),[i,o,p,h])),n.createElement(X,(0,s.Z)({toc:f,className:r,linkClassName:i},u))}var ee="tableOfContents_bqdL",te=["className"];function ae(e){var t=e.className,a=(0,y.Z)(e,te);return n.createElement("div",{className:(0,r.Z)(ee,"thin-scrollbar",t)},n.createElement($,(0,s.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var ne=a(86043),re="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E",ie=["collapsed"];function ce(e){var t=e.collapsed,a=(0,y.Z)(e,ie);return n.createElement("button",(0,s.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",re,!t&&le,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var se="tocCollapsible_ETCw",oe="tocCollapsibleContent_vkbj",de="tocCollapsibleExpanded_sAul";function me(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,ne.u)({initialState:!0}),s=c.collapsed,o=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(se,!s&&de,a)},n.createElement(ce,{collapsed:s,onClick:o}),n.createElement(ne.z,{lazy:!0,className:oe,collapsed:s},n.createElement($,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var ue="anchorWithStickyNavbar_LWe7",ve="anchorWithHideOnScrollNavbar_WYt5",pe=["as","id"];function he(e){var t=e.as,a=e.id,l=(0,y.Z)(e,pe),i=(0,z.L)().navbar.hideOnScroll;return"h1"!==t&&a?n.createElement(t,(0,s.Z)({},l,{className:(0,r.Z)("anchor",i?ve:ue),id:a}),l.children,n.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,(0,s.Z)({},l,{id:void 0}))}var fe=a(53438),be=a(48596),ge=a(44996);function Ee(e){return n.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var Le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Ne(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(d.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Ze(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return n.createElement("li",(0,s.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ke(){var e=(0,ge.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",Le.breadcrumbsItemLink),href:e},n.createElement(Ee,{className:Le.breadcrumbHomeIcon})))}function _e(){var e=(0,fe.s1)(),t=(0,be.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,Le.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ke,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(Ze,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(Ne,{href:t.href,isLast:r},t.label))})))):null}var Te=a(3905),ye=a(35742),Ce=["mdxType","originalType"];var xe=a(13066);var He=a(34673);function Ae(e){return n.createElement(he,e)}var Ue="containsTaskList_mC6p";var we="img_ev3q";var Ie={head:function(e){var t=n.Children.map(e.children,(function(e){return n.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var a=e.props,r=(a.mdxType,a.originalType,(0,y.Z)(a,Ce));return n.createElement(e.props.originalType,r)}return e}(e):e}));return n.createElement(ye.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(xe.Z,e)},a:function(e){return n.createElement(d.Z,e)},pre:function(e){var t;return n.createElement(xe.Z,(0,n.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return n.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(He.Z,(0,s.Z)({},e,{summary:a}),r)},ul:function(e){return n.createElement("ul",(0,s.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Ue))}));var t},img:function(e){return n.createElement("img",(0,s.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,we))}));var t},h1:function(e){return n.createElement(Ae,(0,s.Z)({as:"h1"},e))},h2:function(e){return n.createElement(Ae,(0,s.Z)({as:"h2"},e))},h3:function(e){return n.createElement(Ae,(0,s.Z)({as:"h3"},e))},h4:function(e){return n.createElement(Ae,(0,s.Z)({as:"h4"},e))},h5:function(e){return n.createElement(Ae,(0,s.Z)({as:"h5"},e))},h6:function(e){return n.createElement(Ae,(0,s.Z)({as:"h6"},e))}};function Me(e){var t=e.children;return n.createElement(Te.Zo,{components:Ie},t)}var Be="docItemContainer_Adtb",Oe="docItemCol_GujU",Ve="tocMobile_aoJ5";function Se(e){var t,a=e.content,r=a.metadata,i=a.frontMatter,c=a.assets,s=i.keywords,o=r.description,d=r.title,m=null!=(t=c.image)?t:i.image;return n.createElement(l.d,{title:d,description:o,keywords:s,image:m})}function Pe(e){var t=e.content,a=t.metadata,l=t.frontMatter,s=l.hide_title,o=l.hide_table_of_contents,d=l.toc_min_heading_level,m=l.toc_max_heading_level,v=a.title,p=!s&&void 0===t.contentTitle,h=(0,i.i)(),f=!o&&t.toc&&t.toc.length>0,b=f&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!o&&Oe)},n.createElement(N,null),n.createElement("div",{className:Be},n.createElement("article",null,n.createElement(_e,null),n.createElement(Z,null),f&&n.createElement(me,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:(0,r.Z)(c.k.docs.docTocMobile,Ve)}),n.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(he,{as:"h1"},v)),n.createElement(Me,null,n.createElement(t,null))),n.createElement(R,e)),n.createElement(u,{previous:a.previous,next:a.next}))),b&&n.createElement("div",{className:"col col--3"},n.createElement(ae,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:c.k.docs.docTocDesktop})))}function De(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(l.FG,{className:t},n.createElement(Se,e),n.createElement(Pe,e))}},74477:function(e,t,a){a.d(t,{E:function(){return c},q:function(){return i}});var n=a(67294),r=a(69688),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);