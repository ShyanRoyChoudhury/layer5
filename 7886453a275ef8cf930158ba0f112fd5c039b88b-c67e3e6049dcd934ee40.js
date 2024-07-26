(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[3128],{80905:function(n,e,t){var i=t(29720).w_;n.exports.P=function(n){return i({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"}}]})(n)}},75192:function(n,e,t){var i=t(29720).w_;n.exports.E=function(n){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(n)}},31992:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(67294),o=t(95986),r=t(63689);var a=t(67268).default.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"sc-zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var c=()=>{var n,e;const{0:t,1:c}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const n=window.location.pathname,e=o.k.findIndex((e=>e.link===n));c(e)}),[]),i.createElement(a,null,t>0?i.createElement(r.default,{secondary:!0,url:null===(n=o.k[t-1])||void 0===n?void 0:n.link},"← Previous"):null,t<o.k.length-1?i.createElement(r.default,{primary:!0,url:null===(e=o.k[t+1])||void 0===e?void 0:e.link},"Next →"):null)}},95986:function(n,e,t){"use strict";t.d(e,{k:function(){return i}});const i=[{id:0,link:"/community/handbook/contributor-journey",text:"About"},{id:1,link:"/community/handbook/community",text:"Guidelines"},{id:2,link:"/community/handbook/community-roles",text:"Roles"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/recognition",text:"Recognition"},{id:5,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:6,link:"/community/handbook/projects",text:"Projects"},{id:7,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:8,link:"/community/handbook/writing-program",text:"Writing Program"},{id:9,link:"/community/handbook/designer",text:"UX Contributors"},{id:10,link:"/community/handbook/learn-layer5",text:"Learning"},{id:11,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:12,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:13,link:"/community/handbook/security-vulnerabilities",text:"Security Vulnerabilities"},{id:14,link:"/community/handbook/github-process",text:"GitHub Process"},{id:15,link:"/community/handbook/faq",text:"FAQs"}]},90075:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});var i=t(67294),o=t(80905),r=t(71082),a=t(80360),c=t(75192);var m=t(67268).default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  margin-bottom : 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n   @media screen and (min-width: 768px) and (max-height: 1145px) {\n        height : calc(100vh - 10rem);\n        overflow-y : auto \n\n  }\n  @media screen and (min-width: 1280px) and (max-width: 1350px) {\n        margin-left:0.2rem;\n  }\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color: ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(n=>n.theme.text),(n=>n.theme.secondaryColor),(n=>n.theme.menuColor),(n=>n.theme.secondaryColor)),l=t(95986);var d=()=>{const{0:n,1:e}=(0,i.useState)(!1);return i.createElement(m,null,i.createElement("div",{className:"go-back"},i.createElement(r.Link,{to:"/community/handbook"},i.createElement(o.P,null),i.createElement("h4",null,"Table of Contents")),i.createElement("div",{className:"toc-toggle-btn"},n?i.createElement(a.Q,{className:"toc-menu-icon",onClick:function(){e(!n)}}):i.createElement(c.E,{className:"toc-menu-icon",onClick:function(){e(!n)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},l.k.map((n=>i.createElement("li",{key:n.id},i.createElement(r.Link,{to:n.link,key:n.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},n.text)))))))}},17875:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(67294),o=t(23631),r=t(71082);const a=n=>{let{canonical:e,description:t,image:a,schemaMarkup:c,title:m,children:l}=n;const{pathname:d}=(0,o.useLocation)(),{title:s,description:p,image:g,siteUrl:h,twitterUsername:u}=(0,r.useStaticQuery)("4047814605").site.siteMetadata,b={title:m||s,description:t||p,image:`${h}${a||g}`,url:`${h}${d.replace(".html","")||""}`.replace(/\/$/,""),twitterUsername:u};return e||(e=b.url),i.createElement(i.Fragment,null,i.createElement("title",null,b.title),i.createElement("meta",{name:"description",property:"og:description",content:b.description}),i.createElement("meta",{name:"og:description",content:b.description}),i.createElement("meta",{name:"image",property:"og:image",content:b.image}),i.createElement("meta",{name:"og:image",content:b.image}),i.createElement("meta",{name:"og:title",content:b.title}),i.createElement("meta",{name:"og:url",content:b.url}),i.createElement("meta",{name:"url",property:"og:url",content:b.url}),i.createElement("meta",{name:"og:type",content:"website"}),i.createElement("meta",{name:"author",content:"Layer5, Inc."}),i.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.createElement("meta",{name:"twitter:title",content:b.title}),i.createElement("meta",{name:"twitter:url",content:b.url}),i.createElement("meta",{name:"twitter:description",content:b.description}),i.createElement("meta",{name:"twitter:image",content:b.image}),i.createElement("meta",{name:"twitter:creator",content:b.twitterUsername}),i.createElement("meta",{charSet:"utf-8"}),i.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:"data:image/webp;base64,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"}),i.createElement("link",{rel:"canonical",href:e}),c&&i.createElement("script",{type:"application/ld+json"},JSON.stringify(c)),l)};a.defaultProps={title:null,lang:"en",meta:[],description:"",image:null};var c=a},72606:function(n,e,t){"use strict";t.d(e,{U:function(){return i}});const i=t(67268).default.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"sc-l1w5w5-0"})(["\n\n    .content > a:first-of-type > h2:first-of-type {\n      padding-top: 1rem;\n    }\n\n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      }\n      ol > li {\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      }\n      ul > li > span {\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      }\n      ol > li > span {\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .page-section{\n      h2{\n        padding-top: 7rem;\n        margin-top: -7rem;\n      }\n      h3{\n        padding-top: 7rem;\n        margin-top: -7rem;\n      }\n      margin-top: -36rem;\n      margin-left: 20rem;\n      display: flex;\n\n      @media screen and (min-width: 768px) and (max-height: 1145px) {\n       margin-top : -62vh ;\n\n\n  }\n      @media screen and (min-width: 1280px) and (max-width: 1350px) {\n        margin-left:16rem;\n      }\n    }\n    .conduct-section{\n      @media screen and (min-width: 751px) {\n        margin-top:-43rem;\n      }\n            @media screen and (min-width: 768px) and (max-height: 1145px) {\n       margin-top : -66vh ! important;\n\n    }\n\n  }\n\n    }\n    .page-section .heading-top{\n      @media screen and (min-width: 751px) {\n        padding-top:1rem;\n      }\n    }\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .page-header-section {\n      height: 10rem;\n      text-align: center;\n      background: rgb(71,126,150);\n      background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n      h1 {\n          line-height: 10rem;\n          color: white;\n      }\n    }\n\n    .community-home-subtitle {\n      text-align: center;\n      padding-top: 3rem;\n      padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n\n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        filter: invert(",");\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .inline {\n        display: inline;\n        vertical-align: bottom;\n      }\n      .smp-action{\n        filter: invert(",");\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n      padding: 1rem 0;\n      padding-bottom: 4rem;\n      display: flex;\n      flex-wrap : wrap;\n      align-items : center;\n      justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n      background-color: white;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n    rect {\n      fill:  ',";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);  \n    }\n    path {\n      stroke: ",';\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    svg {\n      color: "red";\n    }\n    input[type=checkbox]:checked + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    .project-org-list{\n      a{\n      margin-right .3rem;\n      }\n      img{\n        height: auto;\n        width: 1.6rem;\n        vertical-align: middle;\n      }\n    }\n\n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    @media only screen and (max-width: 750px){\n      .content > a:first-of-type > h2:first-of-type {\n        padding-top: 7rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      \n        .table-container {\n          table {\n            width: 100%;\n            margin-left: 0;\n          }\n          overflow-x: scroll;\n        }\n    \n        .table-container::-webkit-scrollbar { \n          display: none;\n        }\n      }\n      \n      .codes{\n        width:100%\n        margin-top:-2rem;\n      }\n    }\n\n    @media only screen and (max-width: 475px){\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n    }\n\n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n    }\n\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n    }\n\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      // width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: center;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n      h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n\n  .intra-page{\n    position: sticky;\n    top: 10rem;\n    right:0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    align-items:left;\n    justify-content:space-around;\n    display: flex;\n    flex-direction: column;\n    overflow:hidden;\n    .active{\n      font-weight:5000;\n      color: ',";\n    }\n    ul{\n      list-style: none;\n      top: 3rem;\n    }\n    li{\n      padding-bottom:0.5rem;\n      padding-top:0.5rem;\n    }\n    @media only screen and (max-width: 900px){\n      width: 0;\n      opacity:0;\n    height:0;\n      transition:none;\n      visibility:hidden;\n    }\n  }\n\n  .learn{\n    width: 10rem;\n  }\n\n\n.writing_program{\nwidth: 90%;\n@media only screen and (max-width: 900px){\n  width: 100%;\n}\n.list{\n  padding: 1.875rem 0px;\n  table, tr, td{\n    border:none;\n   }\n  .text{\n    p{\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n  }\n  .listed{\n      text-align: left;\n      .table{\n          .icon{\n              height: 2.5rem;\n              width: 2.5rem;\n              vertical-align: top;\n          }\n          .skill{\n              color: ",";\n              font-size: 16px;\n              padding: 0 0 1.25rem 1.8rem;\n              transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n              h4{\n                  font-weight: 600;\n              }\n          }\n      }\n  }\n}\n.content_list{\n  position: relative;\n  width: 100%;\n  margin-top: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n.content_type { \n  display: flex;\n  flex-direction: column;\n  background: ",";\n  box-shadow: 0px 0px "," ",";\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  &:hover{\n      box-shadow: 0px 0px 5px ",";\n  }\n  padding: 12% 6% 12% 6%;\n  height: 220px;\n  border-radius: 4%;\n  margin-bottom: 30px;\n  text-align: center;\n  h5{\n      margin-bottom: auto; \n      margin-top: 0.5rem;\n      font-weight: 700;\n      color: ","\n  }\n  p{\n      font-weight: 300;\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n  img{\n      height: 60px ; \n      width: auto ;\n  }\n}\n.process {\n  margin: 10px auto;\n  border-left: solid 2px ",";\n  padding: 0px 20px 0px 20px;\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n} \n.process .item {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.7;\n  position: relative;\n}\n.item::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  display: block;\n  border: 3px solid ",";\n  border-radius: 50%;\n  background-color: ",";\n  top: 25px;\n  left: -32px;\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n}\n/* repository overview  */\ndiv.accessRequired {\n  font-size: small;\n  line-height: .9rem;\n  font-style: italic;\n}\n"],(n=>n.theme.text),(n=>n.theme.menuColor),(n=>n.theme.text),(n=>n.theme.text),(n=>n.theme.tertiaryColor),(n=>n.theme.secondaryLightColor),(n=>n.theme.primaryLightColorTwo),(n=>n.theme.secondaryLightColor),(n=>n.theme.meshInterfaceLogoFilter),(n=>n.theme.meshInterfaceLogoFilter),(n=>n.theme.primaryLightColor),(n=>n.theme.secondaryLightColorTwo),(n=>n.theme.grey313131ToGreenC9FCF6),(n=>n.theme.green00D3A9ToGreen00B39F),(n=>n.theme.keppelColor),(n=>n.theme.primaryLightColorTwo),(n=>n.theme.secondaryLightColor),(n=>n.theme.secondaryLightColor),(n=>n.theme.secondaryColor),(n=>n.theme.tertiaryColor),(n=>n.theme.tertiaryColor),(n=>n.theme.grey212121ToWhite),(n=>n.theme.projectShadowsize),(n=>n.theme.green00D3A9ToGreyE6E6E6),(n=>n.theme.primaryColor),(n=>n.theme.secondaryColor),(n=>n.theme.text),(n=>n.theme.tertiaryColor),(n=>n.theme.tertiaryColor),(n=>n.theme.secondaryColor))}}]);
//# sourceMappingURL=7886453a275ef8cf930158ba0f112fd5c039b88b-c67e3e6049dcd934ee40.js.map