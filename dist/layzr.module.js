var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},knot=function(){function t(t,e){return o[t]=o[t]||[],o[t].push(e),this}function e(e,n){return n._once=!0,t(e,n),this}function n(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?o[t].splice(o[t].indexOf(e),1):delete o[t],this}function r(t){for(var e=this,r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];var s=o[t]&&o[t].slice();return s&&s.forEach(function(r){r._once&&n(t,r),r.apply(e,i)}),this}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.create(null);return _extends({},i,{on:t,once:e,off:n,emit:r})},layzr=function(){function t(){return window.scrollY||window.pageYOffset}function e(){l=t(),n()}function n(){f||(window.requestAnimationFrame(function(){return s()}),f=!0)}function r(t){return t.getBoundingClientRect().top+l}function i(t){var e=l,n=e+h,i=r(t),o=i+t.offsetHeight,c=v.threshold/100*h;return o>=e-c&&i<=n+c}function o(t){if(g.emit("src:before",t),m&&t.hasAttribute(v.srcset))t.setAttribute("srcset",t.getAttribute(v.srcset));else{var e=w>1&&t.getAttribute(v.retina);t.setAttribute("src",e||t.getAttribute(v.normal))}g.emit("src:after",t),[v.normal,v.retina,v.srcset].forEach(function(e){return t.removeAttribute(e)}),a()}function c(t){var n=t?"addEventListener":"removeEventListener";return["scroll","resize"].forEach(function(t){return window[n](t,e)}),this}function s(){return h=window.innerHeight,d.forEach(function(t){return i(t)&&o(t)}),f=!1,this}function a(){return d=Array.prototype.slice.call(document.querySelectorAll("["+v.normal+"]")),this}var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=t(),f=void 0,d=void 0,h=void 0,v={normal:u.normal||"data-normal",retina:u.retina||"data-retina",srcset:u.srcset||"data-srcset",threshold:u.threshold||0},m=document.body.classList.contains("srcset")||"srcset"in document.createElement("img"),w=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI,g=knot({handlers:c,check:s,update:a});return g};export default layzr;
