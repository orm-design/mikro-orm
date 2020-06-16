(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{338:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),l=a.n(n),o=a(405),i=a.n(o),s=a(408),c=a(404),m=a(403),u=a(406),g=a(339),h=a.n(g),d=[{title:l.a.createElement(l.a.Fragment,null,"Implicit Transactions"),imageUrl:"img/lock-icon.svg",description:l.a.createElement(l.a.Fragment,null,"MikroORM allows handling transactions automatically. When you call ",l.a.createElement("code",null,"em.flush()"),", all computed changes are wrapped inside a database transaction.")},{title:l.a.createElement(l.a.Fragment,null,"DRY Entities"),imageUrl:"img/hairdryer.svg",description:l.a.createElement(l.a.Fragment,null,"Uses source code analysis so you do not have to repeat yourself when defining entities. Simply define correct TypeScript types and you are good to go!")},{title:l.a.createElement(l.a.Fragment,null,"Supports both SQL and NoSQL"),imageUrl:"img/creative-idea.svg",description:l.a.createElement(l.a.Fragment,null,"Supports MongoDB, MySQL, MariaDB, PostgreSQL and SQLite databases, and more can be supported via custom drivers right now.")}];function p(e){var t=e.imageUrl,a=e.title,r=e.description,n=Object(u.a)(t);return l.a.createElement("div",{className:i()("col col--4",h.a.feature)},n&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:n,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,r))}t.default=function(){var e=Object(m.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(s.a,{title:t.title+": "+t.tagline,description:"TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns."},l.a.createElement("header",{className:i()("hero hero--primary",h.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"/img/hp-example.svg",style:{float:"right"},alt:"Example of MikroORM in action"}),l.a.createElement("h1",{className:"hero__subtitle"},"TypeScript\xa0ORM for Node.js based on Data\xa0Mapper, Unit\xa0of\xa0Work and Identity\xa0Map patterns."),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(c.a,{className:i()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/installation")},"Documentation"),l.a.createElement(c.a,{className:i()("button button--outline button--secondary button--lg",h.a.getStarted),to:"https://github.com/mikro-orm/mikro-orm"},"Source code"),l.a.createElement("span",{className:"github-button"},l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true&size=large",frameBorder:0,scrolling:0,width:160,height:30,title:"GitHub Stars"}),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor&size=large",frameBorder:0,scrolling:0,width:180,height:30,title:"Sponsor B4nan"}))))),l.a.createElement("main",null,d&&d.length&&l.a.createElement("section",{className:h.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},d.map((function(e,t){return l.a.createElement(p,Object(r.a)({key:t},e))})))))))}},409:function(e,t,a){"use strict";var r=a(1),n=a(9),l=a(0),o=a.n(l),i=a(405),s=a.n(i),c=a(404),m=a(403),u=a(406),g=a(121),h=a.n(g);function d(e){var t=e.to,a=e.href,l=e.label,i=Object(n.a)(e,["to","href","label"]),s=Object(u.a)(t);return o.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:s},i),l)}var p=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,l=r.links,i=void 0===l?[]:l,c=r.logo,g=void 0===c?{}:c,f=Object(u.a)(g.src);return a?o.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},i&&i.length>0&&o.a.createElement("div",{className:"row footer__links"},i.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:100,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:130,height:30,title:"Sponsor B4nan"})):e.html?o.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(d,e))}))):null)}))),(g||n)&&o.a.createElement("div",{className:"text--center"},g&&g.src&&o.a.createElement("div",{className:"margin-bottom--sm"},g.href?o.a.createElement("a",{href:g.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},o.a.createElement(p,{alt:g.alt,url:f})):o.a.createElement(p,{alt:g.alt,url:f})),n,"Icons made by ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);