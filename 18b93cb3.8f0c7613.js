(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(408),o=a(403),s=a(404),i=a(406),c=a(455),m=a(456);t.default=function(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e,a=[m[0],c.version],n=m.filter((function(e){return e!==m[0]})).map((function(e){return[e,e+".0"]})),u="https://github.com/"+t.organizationName+"/"+t.projectName;return r.a.createElement(l.a,{permalink:"/versions",description:"MikroORM Versions page listing all documented site versions"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("h1",null,"MikroORM documentation versions"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),r.a.createElement("p",null,"Here you can find the latest documentation."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,a[0]),r.a.createElement("td",null,r.a.createElement(s.a,{to:Object(i.a)("/docs/installation")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u+"/releases/tag/v"+a[1]},"Release Notes")))))),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.a.createElement("p",null,"Here you can find the documentation for unreleased version."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"master"),r.a.createElement("td",null,r.a.createElement(s.a,{to:Object(i.a)("/docs/next/installation")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u},"Source Code")))))),n.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past Versions"),r.a.createElement("p",null,"Here you can find documentation for previous versions of MikroORM."),r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e[0]},r.a.createElement("th",null,e[0]),r.a.createElement("td",null,r.a.createElement(s.a,{to:Object(i.a)("/docs/"+e[0]+"/installation")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u+"/releases/tag/v"+e[1]},"Release Notes")))})))))))}},409:function(e,t,a){"use strict";var n=a(1),r=a(9),l=a(0),o=a.n(l),s=a(405),i=a.n(s),c=a(404),m=a(403),u=a(406),d=a(121),p=a.n(d);function g(e){var t=e.to,a=e.href,l=e.label,s=Object(r.a)(e,["to","href","label"]),i=Object(u.a)(t);return o.a.createElement(c.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},s),l)}var f=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,s=void 0===l?[]:l,c=n.logo,d=void 0===c?{}:c,h=Object(u.a)(d.src);return a?o.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},s&&s.length>0&&o.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:100,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:130,height:30,title:"Sponsor B4nan"})):e.html?o.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(g,e))}))):null)}))),(d||r)&&o.a.createElement("div",{className:"text--center"},d&&d.src&&o.a.createElement("div",{className:"margin-bottom--sm"},d.href?o.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:p.a.footerLogoLink},o.a.createElement(f,{alt:d.alt,url:h})):o.a.createElement(f,{alt:d.alt,url:h})),r,"Icons made by ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}},455:function(e){e.exports=JSON.parse('{"name":"mikro-orm","version":"3.6.15","description":"TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns. Supports MongoDB, MySQL, PostgreSQL and SQLite databases as well as usage with vanilla JavaScript.","main":"dist/index.js","typings":"dist/index.d.ts","repository":{"type":"git","url":"git+ssh://git@github.com/mikro-orm/mikro-orm.git"},"keywords":["orm","mongo","mongodb","mysql","mariadb","postgresql","sqlite","sqlite3","ts","typescript","js","javascript","entity","ddd","mikro-orm","unit-of-work","data-mapper","identity-map"],"author":"Martin Ad\xe1mek","license":"MIT","bugs":{"url":"https://github.com/mikro-orm/mikro-orm/issues"},"homepage":"https://mikro-orm.io","scripts":{"build":"rimraf dist && tsc","pretest":"node tests/pre-test","test":"node --expose-gc ./node_modules/.bin/jest --runInBand --logHeapUsage","posttest":"node tests/post-test","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s -r 1","coverage":"rimraf temp tests/generated-entities && yarn test --coverage","coveralls":"cat ./coverage/lcov.info | coveralls","run-rs":"run-rs -v 4.2.3 -l ubuntu1804","run-rs-in-background":"yarn run-rs > /dev/null 2>&1 &","lint":"tslint -p ."},"bin":{"mikro-orm":"./dist/cli.js"},"jest":{"testTimeout":15000,"preset":"ts-jest","collectCoverage":false,"collectCoverageFrom":["lib/**/*.ts"],"coveragePathIgnorePatterns":["lib/cli.ts"]},"commitlint":{"extends":["@commitlint/config-conventional"]},"husky":{"hooks":{"pre-commit":"lint-staged","commit-msg":"commitlint -E HUSKY_GIT_PARAMS"}},"lint-staged":{"*.ts":["tslint --fix","git add"]},"renovate":{"extends":["config:base"],"pinVersions":false},"engines":{"node":">= 8.9.0"},"dependencies":{"acorn-loose":"^7.0.0","acorn-walk":"^7.1.1","chalk":"^3.0.0","cli-highlight":"^2.1.4","cli-table3":"^0.5.1","clone":"^2.1.2","fast-deep-equal":"^3.1.1","fs-extra":"^8.1.0","globby":"^10.0.0","knex":"^0.20.13","reflect-metadata":"^0.1.13","ts-morph":"^4.3.3","umzug":"^2.2.0","uuid":"^8.0.0","yargonaut":"^1.1.4","yargs":"^15.1.0"},"peerDependencies":{"mariadb":"^2.1.0","mongodb":"^3.3.4","mysql2":"^2.0.0","pg":"^7.10.0","sqlite3":"^4.0.0"},"peerDependenciesMeta":{"mariadb":{"optional":true},"mongodb":{"optional":true},"mysql2":{"optional":true},"pg":{"optional":true},"sqlite3":{"optional":true}},"devDependencies":{"@commitlint/cli":"^8.3.5","@commitlint/config-conventional":"^8.3.4","@types/clone":"^0.1.30","@types/fs-extra":"^8.1.0","@types/jest":"^25.1.4","@types/mongodb":"^3.5.2","@types/mysql2":"types/mysql2","@types/node":"^13.9.0","@types/pg":"^7.14.1","@types/umzug":"^2.2.3","@types/uuid":"^7.0.0","@types/webpack-env":"^1.15.1","conditional-type-checks":"^1.0.5","conventional-changelog-angular":"^5.0.6","conventional-changelog-cli":"^2.0.31","coveralls":"^3.0.9","husky":"^4.2.3","jest":"^24.9.0","lint-staged":"^10.0.8","mariadb":"^2.3.1","mongodb":"3.5.8","mysql2":"^2.1.0","pg":"^7.18.2","rimraf":"^3.0.2","run-rs":"^0.6.2","semantic-release":"^17.0.4","sqlite3":"^4.1.1","ts-jest":"^25.2.1","ts-node":"^8.6.2","tslint":"^6.0.0","tslint-eslint-rules":"^5.4.0","tslint-lines-between-class-members":"^1.3.6","typescript":"3.6.5"}}')},456:function(e){e.exports=JSON.parse('["3.6","3.5","3.4","3.3","2.7"]')}}]);