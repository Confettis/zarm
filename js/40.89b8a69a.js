(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{403:function(n,t,e){"use strict";var s=e(239),a=e.n(s),r=e(240),i=e.n(r),o=e(404),m=e.n(o),l=e(3),c=e.n(l),p=e(4),u=e.n(p),h=e(6),g=e.n(h),d=e(2),z=e.n(d),b=e(5),v=e.n(b),f=e(0),y=e.n(f),w=e(42),N=e.n(w),k=e(405),E=e.n(k),S=e(406),G=e.n(S),C=(e(407),function(n){function t(n){u()(this,t);var e=z()(this,(t.__proto__||c()(t)).call(this,n));return e.nodeList=[],e.components=new m.a,e}return v()(t,n),g()(t,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){N.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,t=!1,e=void 0;try{for(var s,r=a()(this.components);!(n=(s=r.next()).done);n=!0){var o=s.value,m=i()(o,2),l=m[0],c=m[1],p=document.getElementById(l);this.nodeList.push(p),p instanceof HTMLElement&&N.a.render(c,p)}}catch(n){t=!0,e=n}finally{try{!n&&r.return&&r.return()}finally{if(t)throw e}}}},{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,e=n.className;if("string"==typeof t){this.components.clear();var s=new E.a.Renderer;s.table=function(n,t){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+t+"</tbody></table></div>"};var a=E()(t,{renderer:s,highlight:function(n){return G.a.highlightAuto(n).value}});return y.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:a}})}return y.a.createElement("span",null)}}]),t}(y.a.Component));t.a=C},501:function(n,t){n.exports='# Zarm UI\n  [![Build Status](https://www.travis-ci.org/ZhonganTechENG/zarm.svg?branch=master)](https://www.travis-ci.org/ZhonganTechENG/zarm)\n  [![Coverage Status](https://img.shields.io/coveralls/ZhonganTechENG/zarm/master.svg)](https://coveralls.io/github/ZhonganTechENG/zarm?branch=master) \n  [![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)\n  [![NPM downloads](http://img.shields.io/npm/dm/zarm.svg)](https://npmjs.org/package/zarm) \n  ![JS gzip size](http://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.js?compression=gzip&label=gzip%20size:%20JS)\n  ![CSS gzip size](http://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.css?compression=gzip&label=gzip%20size:%20CSS)\n\n  众安科技移动端UI组件库，基于React、React-Native。\n\n## Install 安装\n\n\n使用npm安装：\n```bash\nnpm install zarm --save\n```\n\n或者通过cdn引入umd模块：\n```html\n<link rel="stylesheet" href="https://unpkg.com/zarm@latest/dist/zarm.min.css">\n<script type="text/javascript" src="https://unpkg.com/zarm@latest/dist/zarm.min.js"><\/script>\n```\n\n## Usage 使用\n\n#### 全组件引入\n\n```js\nimport { Button, Cell } from \'zarm\';\nimport \'zarm/dist/zarm.min.css\';\n```\n\n#### 按需加载\n\n* 方法一（推荐）\n\n> 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动加载Sass文件\n\n```js\n  // .babelrc or babel-loader option\n  {\n    "plugins": [\n      [\'import\', {\n        libraryName: \'zarm\',\n        style: true,\n      }],\n    ]\n  }\n```\n```js\nimport { Button, Cell } from \'zarm\';\n```\n\n* 方法二：\n\n```js\nimport Button from \'zarm/lib/Button\';\nimport \'zarm/lib/Button/style\';\n```\n\n#### 定制主题\n\n通过覆盖Sass变量定义达到定制主题的效果\n\n```css\n@import "~zarm/lib/style/index.scss";  // 引入官方提供的Sass基础样式文件\n@import "your-theme-file.scss";  // 用于覆盖上面定义的变量\n@import "~zarm/lib/style/components.scss";  // 引入官方提供的组件样式文件\n```\n\n`your-theme-file.scss` 示例如下：\n\n```css\n$theme-primary: #108ee9;\n```\n变量名可参考 [default.scss](https://github.com/ZhonganTechENG/zarm/blob/master/components/style/themes/default.scss)\n\n> 注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。\n\n## Changelog 更新日志\n[CHANGELOG.md](https://github.com/ZhonganTechENG/zarm/blob/master/CHANGELOG.md)\n\n## License\nMIT\n'},724:function(n,t,e){"use strict";e.r(t);var s=e(3),a=e.n(s),r=e(4),i=e.n(r),o=e(2),m=e.n(o),l=e(5),c=e.n(l),p=function(n){function t(){var n,s,r,o;i()(this,t);for(var l=arguments.length,c=Array(l),p=0;p<l;p++)c[p]=arguments[p];return s=r=m()(this,(n=t.__proto__||a()(t)).call.apply(n,[this].concat(c))),r.document=function(){return{document:e(501),className:"quick-start-page"}},o=s,m()(r,o)}return c()(t,n),t}(e(403).a);t.default=p}}]);