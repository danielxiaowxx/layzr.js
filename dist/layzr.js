!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Layzr=e()}(this,function(){"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e=function(){function e(t,e){return c[t]=c[t]||[],c[t].push(e),this}function n(t,n){return n._once=!0,e(t,n),this}function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?c[t].splice(c[t].indexOf(e),1):delete c[t],this}function i(t){for(var e=this,n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=c[t]&&c[t].slice();return s&&s.forEach(function(n){n._once&&r(t,n),n.apply(e,i)}),this}var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object.create(null);return t({},o,{on:e,once:n,off:r,emit:i})};return function(){function t(){return window.scrollY||window.pageYOffset}function n(){l=t(),r()}function r(){d||(window.requestAnimationFrame(function(){return u()}),d=!0)}function i(t){return t.getBoundingClientRect().top+l}function o(t){var e=l,n=e+v,r=i(t),o=r+t.offsetHeight,c=m.threshold/100*v;return o>=e-c&&r<=n+c}function c(t){if(g.emit("src:before",t),p&&t.hasAttribute(m.srcset))t.setAttribute("srcset",t.getAttribute(m.srcset));else{var e=w>1&&t.getAttribute(m.retina);t.setAttribute("src",e||t.getAttribute(m.normal))}g.emit("src:after",t),[m.normal,m.retina,m.srcset].forEach(function(e){return t.removeAttribute(e)}),a()}function s(t){var e=t?"addEventListener":"removeEventListener";return["scroll","resize"].forEach(function(t){return window[e](t,n)}),this}function u(){return v=window.innerHeight,h.forEach(function(t){return o(t)&&c(t)}),d=!1,this}function a(){return h=Array.prototype.slice.call(document.querySelectorAll("["+m.normal+"]")),this}var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=t(),d=void 0,h=void 0,v=void 0,m={normal:f.normal||"data-normal",retina:f.retina||"data-retina",srcset:f.srcset||"data-srcset",threshold:f.threshold||0},p=document.body.classList.contains("srcset")||"srcset"in document.createElement("img"),w=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI,g=e({handlers:s,check:u,update:a});return g}});
