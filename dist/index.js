!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.React);for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(this,(e=>(()=>{"use strict";var t={12:t=>{t.exports=e}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};a.r(n),a.d(n,{default:()=>i});var o=a(12),l=a.n(o);const i=function(e){var t=e.value,r=e.placeholder,a=e.className,n=e.style,i=e.handleChange,c=e.changeFromParent,s=e.disabled,u=e.prefix,f=void 0===u?"":u,p=e.suffix,d=void 0===p?"":p,v=(0,o.useState)(f+t.toString().replace(".",",")+d),g=v[0],h=v[1],m=(0,o.useState)("."),x=m[0],y=m[1],b=navigator.language||"en-US",S=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=new Intl.NumberFormat(b).format(1.1);y(e.includes(",")?",":".")}),[b]),(0,o.useEffect)((function(){var e=t.toString().replace(".",x);h(f+e+d)}),[c]),l().createElement("input",{ref:S,type:"text",value:g,onChange:function(e){var t=e.target.value;t.startsWith(f)||(t=f+t),t.endsWith(d)||(t+=d);var r=t.slice(f.length,t.length-d.length);if((","===x?/^[0-9]*,?[0-9]*$/:/^[0-9]*\.?[0-9]*$/).test(r)&&!r.match(new RegExp("[".concat(x,"]{2,}")))){h(t);var a=r.replace(x,".");""!==a&&isNaN(a)||i(""===a?0:parseFloat(a))}},onPaste:function(e){var t,r;e.preventDefault();var a=e.clipboardData.getData("Text"),n=S.current;if(n){var o=null!==(t=n.selectionStart)&&void 0!==t?t:0,l=null!==(r=n.selectionEnd)&&void 0!==r?r:0,c=","===x?/^[0-9]*,?[0-9]*$/:/^[0-9]*\.?[0-9]*$/;if(c.test(a)&&!a.match(new RegExp("[".concat(x,"]{2,}")))){var s=g.slice(0,o)+a+g.slice(l);if(c.test(s)&&!s.match(new RegExp("[".concat(x,"]{2,}")))){h(s);var u=s.replace(x,".");""!==u&&isNaN(parseFloat(u))||i(""===u?null:parseFloat(u)),setTimeout((function(){n.setSelectionRange(o+a.length,o+a.length)}),0)}}}},placeholder:r||"",className:a||"",style:n,disabled:!0===s})};return n})()));