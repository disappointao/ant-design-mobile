webpackJsonp([73],{3:function(n,t,a){"use strict";a(7),a(6);var s=Math.floor(window.devicePixelRatio||1);s>=2&&document.querySelector("html").classList.add("pixel-ratio-"+s)},6:function(n,t){},7:function(n,t){},22:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},33:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(1),i=e(r),f=a(2),k=s(f),d=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.style,l=t.onClick,c=(0,k["default"])((n={},o(n,""+a,!0),o(n,e,!!e),o(n,a+"-ws"+s,!0),n));return i.createElement("div",{className:c,style:p,onClick:l})},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},34:function(n,t,a){"use strict";a(3),a(36)},36:function(n,t){},53:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}function r(n){return"string"==typeof n}function i(n){return r(n.type)&&j(n.props.children)?g.cloneElement(n,{},n.props.children.split("").join(" ")):r(n)?(j(n)&&(n=n.split("").join(" ")),g.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},k=function(){function n(n,t){var a=[],s=!0,e=!1,p=void 0;try{for(var o,l=n[Symbol.iterator]();!(s=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);s=!0);}catch(c){e=!0,p=c}finally{try{!s&&l["return"]&&l["return"]()}finally{if(e)throw p}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=a(1),g=e(d),y=a(2),b=s(y),m=a(43),h=s(m),v=a(22),w=s(v),O=/^[\u4e00-\u9fa5]{2}$/,j=O.test.bind(O),P=function(n){function t(){l(this,t);for(var a=arguments.length,s=Array(a),e=0;e<a;e++)s[e]=arguments[e];var p=c(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return u(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=k(t,2),s=a[0],e=s.children,p=s.className,l=s.prefixCls,c=s.type,u=s.size,r=s.ghost,d=s.inline,y=s.disabled,m=s.htmlType,v=s.icon,O=s.loading,j=a[1],P=(0,b["default"])((n={},o(n,p,p),o(n,l,!0),o(n,l+"-primary","primary"===c),o(n,l+"-ghost",r),o(n,l+"-warning","warning"===c),o(n,l+"-small","small"===u&&d),o(n,l+"-loading",O),o(n,l+"-inline",d),o(n,l+"-disabled",y),n)),E=O?"loading":v,x=g.Children.map(e,i);return g.createElement("button",f({},j,{type:m||"button",className:P,disabled:y,onClick:this.onClick}),E?g.createElement(h["default"],{type:E}):null,x)},t}(g.Component);t["default"]=P,P.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},56:function(n,t,a){"use strict";a(3),a(61),a(59)},57:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(1),i=e(r),f=a(2),k=s(f),d=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.children,l=t.style,c=(0,k["default"])((n={},o(n,""+a,!0),o(n,e,!!e),o(n,a+"-wb"+s,!0),n));return i.createElement("div",{className:c,style:l},p)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},58:function(n,t,a){"use strict";a(3),a(60)},59:function(n,t){},60:function(n,t){},869:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(58),a(57)),p=s(e),o=(a(56),a(53)),l=s(o),c=(a(34),a(33)),u=s(c),r=a(1),i=s(r),f=a(4);s(f);n.exports={content:[["p",["code","<WingBlank size={8}>...</WingBlank>"]]],meta:{order:0,title:"\u57fa\u672c",filename:"components/wing-blank/demo/basic.web.md",id:"components-wing-blank-demo-basic.web"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n\n<span class="token keyword" >let</span> WingBlankExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e24\u7ffc\u7559\u767d8px<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #2DB7F5\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >16</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e24\u7ffc\u7559\u767d16px<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #2DB7F5\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >32</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e24\u7ffc\u7559\u767d32px<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlankExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createClass({displayName:"WingBlankExample",render:function(){return i["default"].createElement("div",{className:"button-container"},i["default"].createElement(u["default"],null),i["default"].createElement(p["default"],null,i["default"].createElement(l["default"],null,"\u4e24\u7ffc\u7559\u767d8px")),i["default"].createElement(u["default"],null),i["default"].createElement("div",{style:{borderTop:"1px solid #2DB7F5"}}),i["default"].createElement(u["default"],null),i["default"].createElement(p["default"],{size:16},i["default"].createElement(l["default"],{type:"primary"},"\u4e24\u7ffc\u7559\u767d16px")),i["default"].createElement(u["default"],null),i["default"].createElement("div",{style:{borderTop:"1px solid #2DB7F5"}}),i["default"].createElement(u["default"],null),i["default"].createElement(p["default"],{size:32},i["default"].createElement(l["default"],null,"\u4e24\u7ffc\u7559\u767d32px")),i["default"].createElement(u["default"],null))}});return i["default"].createElement(n,null)}}}});