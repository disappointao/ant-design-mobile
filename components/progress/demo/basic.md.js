webpackJsonp([42],{3:function(n,t,a){"use strict";a(7),a(6);var e=Math.floor(window.devicePixelRatio||1);e>=2&&document.querySelector("html").classList.add("pixel-ratio-"+e)},6:function(n,t){},7:function(n,t){},22:function(n,t){"use strict";function a(n,t){var a={},e={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?a[s]=n[s]:e[s]=n[s]}),[a,e]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},33:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=s(l),f=a(2),k=e(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,o=t.style,r=t.onClick,c=(0,k["default"])((n={},p(n,""+a,!0),p(n,s,!!s),p(n,a+"-ws"+e,!0),n));return i.createElement("div",{className:c,style:o,onClick:r})},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},34:function(n,t,a){"use strict";a(3),a(36)},36:function(n,t){},53:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function l(n){return"string"==typeof n}function i(n){return l(n.type)&&j(n.props.children)?y.cloneElement(n,{},n.props.children.split("").join(" ")):l(n)?(j(n)&&(n=n.split("").join(" ")),y.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},k=function(){function n(n,t){var a=[],e=!0,s=!1,o=void 0;try{for(var p,r=n[Symbol.iterator]();!(e=(p=r.next()).done)&&(a.push(p.value),!t||a.length!==t);e=!0);}catch(c){s=!0,o=c}finally{try{!e&&r["return"]&&r["return"]()}finally{if(s)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=a(1),y=s(d),b=a(2),g=e(b),m=a(43),h=e(m),w=a(22),v=e(w),O=/^[\u4e00-\u9fa5]{2}$/,j=O.test.bind(O),P=function(n){function t(){r(this,t);for(var a=arguments.length,e=Array(a),s=0;s<a;s++)e[s]=arguments[s];var o=c(this,n.call.apply(n,[this].concat(e)));return o.onClick=function(){o.props.onClick(o)},o}return u(t,n),t.prototype.render=function(){var n,t=(0,v["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=k(t,2),e=a[0],s=e.children,o=e.className,r=e.prefixCls,c=e.type,u=e.size,l=e.ghost,d=e.inline,b=e.disabled,m=e.htmlType,w=e.icon,O=e.loading,j=a[1],P=(0,g["default"])((n={},p(n,o,o),p(n,r,!0),p(n,r+"-primary","primary"===c),p(n,r+"-ghost",l),p(n,r+"-warning","warning"===c),p(n,r+"-small","small"===u&&d),p(n,r+"-loading",O),p(n,r+"-inline",d),p(n,r+"-disabled",b),n)),x=O?"loading":w,C=y.Children.map(s,i);return y.createElement("button",f({},j,{type:m||"button",className:P,disabled:b,onClick:this.onClick}),x?y.createElement(h["default"],{type:x}):null,C)},t}(y.Component);t["default"]=P,P.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},56:function(n,t,a){"use strict";a(3),a(61),a(59)},57:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=s(l),f=a(2),k=e(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,o=t.children,r=t.style,c=(0,k["default"])((n={},p(n,""+a,!0),p(n,s,!!s),p(n,a+"-wb"+e,!0),n));return i.createElement("div",{className:c,style:r},o)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},58:function(n,t,a){"use strict";a(3),a(60)},59:function(n,t){},60:function(n,t){},75:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=s(l),f=a(2),k=e(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,e=t.wrap,s=t.justify,o=t.align,r=t.alignContent,c=t.className,u=t.children,l=t.prefixCls,f=t.style,d=t.onClick,y=(0,k["default"])((n={},p(n,l,!0),p(n,l+"-dir-row","row"===a),p(n,l+"-dir-row-reverse","row-reverse"===a),p(n,l+"-dir-column","column"===a),p(n,l+"-dir-column-reverse","column-reverse"===a),p(n,l+"-nowrap","nowrap"===e),p(n,l+"-wrap","wrap"===e),p(n,l+"-wrap-reverse","wrap-reverse"===e),p(n,l+"-justify-start","start"===s),p(n,l+"-justify-end","end"===s),p(n,l+"-justify-center","center"===s),p(n,l+"-justify-between","between"===s),p(n,l+"-justify-around","around"===s),p(n,l+"-align-top","top"===o||"start"===o),p(n,l+"-align-middle","middle"===o||"center"===o),p(n,l+"-align-bottom","bottom"===o||"end"===o),p(n,l+"-align-baseline","baseline"===o),p(n,l+"-align-stretch","stretch"===o),p(n,l+"-align-content-start","start"===r),p(n,l+"-align-content-end","end"===r),p(n,l+"-align-content-center","center"===r),p(n,l+"-align-content-between","between"===r),p(n,l+"-align-content-around","around"===r),p(n,l+"-align-content-stretch","stretch"===r),p(n,c,c),n));return i.createElement("div",{className:y,style:f,onClick:d},u)},t}(i.Component);t["default"]=d,d.propTypes={direction:l.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:l.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:l.PropTypes.oneOf(["start","end","center","between","around"]),align:l.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:l.PropTypes.oneOf(["start","end","center","between","around","stretch"])},d.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},76:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=s(l),f=a(2),k=e(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,e=t.className,s=t.prefixCls,o=t.style,r=t.onClick,c=(0,k["default"])((n={},p(n,s+"-item",!0),p(n,e,e),n));return i.createElement("div",{className:c,style:o,onClick:r},a)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},77:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(75),o=e(s),p=a(76),r=e(p);o["default"].Item=r["default"],t["default"]=o["default"],n.exports=t["default"]},89:function(n,t,a){"use strict";a(3),a(90)},90:function(n,t){},810:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=(a(58),a(57)),o=e(s),p=(a(89),a(77)),r=e(p),c=(a(56),a(53)),u=e(c),l=(a(34),a(33)),i=e(l),f=(a(903),a(902)),k=e(f),d=a(1),y=e(d),b=a(4);e(b);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Progress<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Flex<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyProgress <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      percent<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >increase</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >+</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >></span> <span class="token number" >100</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >100</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >decline</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >-</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >===</span> <span class="token number" >100</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fixed<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>increase<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >+</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>decline<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >-</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyProgress</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=y["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:0}},increase:function(){var n=this.state.percent+10;n>100&&(n=100),this.setState({percent:n,status:status})},decline:function(){var n=this.state.percent-10;n<0&&(n=0),this.setState({percent:n,status:status})},render:function(){return y["default"].createElement("div",{className:"progress-container"},100===this.state.percent?null:y["default"].createElement(k["default"],{percent:this.state.percent,position:"fixed"}),y["default"].createElement(k["default"],{percent:this.state.percent,position:"normal"}),y["default"].createElement(i["default"],{size:20}),y["default"].createElement(o["default"],{size:20},y["default"].createElement(r["default"],null,y["default"].createElement(r["default"].Item,null,y["default"].createElement(u["default"],{onClick:this.increase}," + ")),y["default"].createElement(r["default"].Item,null,y["default"].createElement(u["default"],{onClick:this.decline}," - ")))),y["default"].createElement(i["default"],{size:20}))}});return y["default"].createElement(n,null)}}},902:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=s(l),f=a(2),k=e(f),d=function(n){function t(a){r(this,t);var e=c(this,n.call(this,a));return e.state={},e}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.percent,s=t.position,o={width:e+"%",height:0},r=(0,k["default"])((n={},p(n,a+"-outer",!0),p(n,a+"-fixed-outer","fixed"===s),n));return i.createElement("div",{className:r},i.createElement("div",{className:a+"-bar",style:o}))},t}(i.Component);t["default"]=d,d.propTypes={prefixCls:l.PropTypes.string,position:l.PropTypes.oneOf(["fixed","normal"]),percent:l.PropTypes.number},d.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed"},n.exports=t["default"]},903:function(n,t,a){"use strict";a(3),a(1295)},1295:function(n,t){}});