(()=>{"use strict";var n={301:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),s=e(667),c=e.n(s),l=new URL(e(38),e.b),d=new URL(e(66),e.b),p=new URL(e(273),e.b),f=a()(o());f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var h=c()(l),u=c()(d),m=c()(p);f.push([n.id,"@font-face {\r\n  font-family: 'GenshinFont';\r\n  src: url("+h+') format(\'ttf\'),\r\n}\r\n\r\n:root {\r\n  --nice-red:#fd6d6d;\r\n  --nice-yellow:rgb(250, 250, 85);\r\n  --yes:rgba(104, 201, 104);\r\n  --no: rgba(237, 94, 104);\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\nhtml, body {\r\n  max-width: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.genshin {\r\n  font-family: "GenshinFont";\r\n  font-size: 3rem;\r\n  font-weight: 1000;\r\n  letter-spacing: 0.9rem;\r\n  transform: scale(1, 0.8);\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.header {\r\n  background: url('+u+');\r\n  background-size: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.shading {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: white;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.nav {\r\n  box-sizing: border-box;\r\n  width: 100vw;\r\n  height: 80px;\r\n  margin-top: 5px;\r\n  display: grid;\r\n  grid-template-columns: 250px 1fr 250px;\r\n  align-items: center;\r\n  justify-items: center;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.nav svg {\r\n  color: white;\r\n  height: 60px;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav .logo-name {\r\n  font-family: "GenshinFont";\r\n}\r\n\r\n.nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 75px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav li {\r\n  border-bottom: 2px transparent solid;\r\n}\r\n\r\n.nav li:hover {\r\n  color: var(--nice-red);\r\n  border-bottom: 2px rgb(250, 250, 85) solid;\r\n  cursor: pointer;\r\n}\r\n\r\n.banner {\r\n  display: grid;\r\n  justify-items: center;\r\n  gap: 50px;\r\n  margin-top: 100px;\r\n}\r\n\r\n.banner svg {\r\n  height: 200px;\r\n}\r\n\r\n.banner button {\r\n  border: 5px solid white;\r\n  padding: 10px 25px;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.banner button:hover {\r\n  border: 5px solid var(--nice-yellow);\r\n  color: var(--nice-red);\r\n  cursor: pointer;\r\n}\r\n\r\n.intro {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.intro .photo {\r\n  background: url('+m+');\r\n  background-size: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.intro .paragraph {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 60px;\r\n  background-color: rgba(117, 96, 96, 0.95);\r\n  color: white;\r\n}\r\n\r\n.intro h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.intro p {\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n  font-family: "Roboto Mono", monospace;\r\n  line-height: 1.7rem;\r\n}\r\n\r\n.schedule {\r\n  background-size: 100%;\r\n  height: 350px;\r\n  padding-top: 50px;\r\n  display: flex;\r\n  gap: 100px;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  width: 300px;\r\n}\r\n\r\n.card h1 {\r\n  padding: 8px 0;\r\n  border-top: 5px solid black;\r\n  border-bottom: 5px solid black;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.card ul,\r\n.card p {\r\n  font-weight: 400;\r\n  font-family: "Roboto Mono", monospace;\r\n  margin: 0;\r\n}\r\n\r\n.card ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: grid;\r\n  gap: 30px;\r\n}\r\n\r\n.card p {\r\n  line-height: 2.5rem;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n  color: white;\r\n  height: 75px;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  justify-items: center;\r\n  align-items: center;\r\n  font-weight: 500;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer a {\r\n  color: white;\r\n}\r\n\r\n.footer a:hover {\r\n  color: var(--nice-red);\r\n}\r\n\r\n.footer .center {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}',""]);const g=f},24:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}',""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var f=e(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(h);else{var u=o(h,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},273:(n,r,e)=>{n.exports=e.p+"af936757322823db7c27.jpg"},66:(n,r,e)=>{n.exports=e.p+"3dc745692ec5d5d9eae5.jpg"},38:(n,r,e)=>{n.exports=e.p+"54a8212866e6ec1b1003.ttf"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),p=e(589),f=e.n(p),h=e(24),u={};u.styleTagTransform=f(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=d(),r()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals;var m=e(301),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,document.querySelector(".content")})()})();