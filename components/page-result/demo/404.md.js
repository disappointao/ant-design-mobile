webpackJsonp([88],{3:function(n,t,e){"use strict";e(7),e(6);var a=Math.floor(window.devicePixelRatio||1);a>=2&&document.querySelector("html").classList.add("pixel-ratio-"+a)},6:function(n,t){},7:function(n,t){},22:function(n,t){"use strict";function e(n,t){var e={},a={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?e[s]=n[s]:a[s]=n[s]}),[e,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},53:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function c(n){return"string"==typeof n}function u(n){return c(n.type)&&P(n.props.children)?b.cloneElement(n,{},n.props.children.split("").join(" ")):c(n)?(P(n)&&(n=n.split("").join(" ")),b.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},d=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,p=n[Symbol.iterator]();!(a=(r=p.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{!a&&p["return"]&&p["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=e(1),b=s(y),m=e(2),k=a(m),g=e(43),h=a(g),v=e(22),w=a(v),O=/^[\u4e00-\u9fa5]{2}$/,P=O.test.bind(O),j=function(n){function t(){p(this,t);for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var o=l(this,n.call.apply(n,[this].concat(a)));return o.onClick=function(){o.props.onClick(o)},o}return i(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),e=d(t,2),a=e[0],s=a.children,o=a.className,p=a.prefixCls,l=a.type,i=a.size,c=a.ghost,y=a.inline,m=a.disabled,g=a.htmlType,v=a.icon,O=a.loading,P=e[1],j=(0,k["default"])((n={},r(n,o,o),r(n,p,!0),r(n,p+"-primary","primary"===l),r(n,p+"-ghost",c),r(n,p+"-warning","warning"===l),r(n,p+"-small","small"===i&&y),r(n,p+"-loading",O),r(n,p+"-inline",y),r(n,p+"-disabled",m),n)),x=O?"loading":v,T=b.Children.map(s,u);return b.createElement("button",f({},P,{type:g||"button",className:j,disabled:m,onClick:this.onClick}),x?b.createElement(h["default"],{type:x}):null,T)},t}(b.Component);t["default"]=j,j.propTypes={prefixCls:y.PropTypes.string,type:y.PropTypes.string,size:y.PropTypes.oneOf(["large","small"]),htmlType:y.PropTypes.oneOf(["submit","button","reset"]),ghost:y.PropTypes.bool,inline:y.PropTypes.bool,disabled:y.PropTypes.bool,loading:y.PropTypes.bool,icon:y.PropTypes.bool,onClick:y.PropTypes.func},j.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},56:function(n,t,e){"use strict";e(3),e(61),e(59)},59:function(n,t){},229:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function c(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),f=s(u),d=e(53),y=a(d),b=e(2),m=a(b),k=function(n){function t(){return p(this,t),l(this,n.apply(this,arguments))}return i(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.imgUrl,s=t.title,o=t.message,p=t.buttonTxt,l=t.buttonClick,i=t.buttonType,c=t.buttonGhost,u=t.className,d=(0,m["default"])((n={},r(n,""+e,!0),r(n,u,u),n));return f.createElement("div",{className:d},f.createElement("div",{className:e+"-pic",style:{backgroundImage:"url("+a+")"}}),""!==s?f.createElement("div",{className:e+"-title"},s):null,""!==o?f.createElement("div",{className:e+"-message"},o):null,""!==p?f.createElement("div",{className:e+"-button"},f.createElement(y["default"],{type:i,ghost:c,onClick:l},p)):null)},t}(f.Component);t["default"]=k,k.defaultProps={prefixCls:"am-page-result",imgUrl:"",title:"",message:"",buttonTxt:"",buttonType:"default",buttonGhost:!1,buttonClick:c},n.exports=t["default"]},230:function(n,t,e){"use strict";e(3),e(56),e(243)},243:function(n,t){},797:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(230),e(229)),o=a(s),r=e(1),p=a(r),l=e(4);a(l);n.exports={content:[],meta:{order:2,title:404,filename:"components/page-result/demo/404.md",id:"components-page-result-demo-404"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> PageResult <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> PageResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResult</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/awwrfcIKXAKwGyx.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7cfb\u7edf\u7e41\u5fd9<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonTxt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return p["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/awwrfcIKXAKwGyx.png",title:"\u7cfb\u7edf\u7e41\u5fd9",buttonTxt:"\u91cd\u65b0\u52a0\u8f7d",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return p["default"].createElement(n,null)}}}});