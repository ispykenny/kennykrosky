!function(n){var o={};function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["H1","H2","H3","H4","H5","P","LI","A"],s=function(t,e){var n='<span class="sleeve-text">';e.split(" ").forEach(function(t,e){n+='<span class="sleeve-text__item"><span>'+t+"&nbsp;</span></span>"}),n+=" </span>",t.innerHTML=n};e.default=function(t){document.querySelectorAll(t).forEach(function(t,e){for(var n=t.children,o=0;o<n.length;o++){var i=n[o].nodeName;r.includes(i)&&s(n[o],n[o].innerText)}})}},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var b=function(){for(var t=window.document,e=s(t);e;)e=s(t=e.ownerDocument);return t}(),n=[],w=null,E=null;t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t._setupCrossOriginUpdater=function(){return w=w||function(t,e){E=t&&e?I(t,e):{top:0,bottom:0,left:0,right:0,width:0,height:0},n.forEach(function(t){t._checkForIntersections()})}},t._resetCrossOriginUpdater=function(){E=w=null},t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},t.prototype._monitorIntersections=function(e){var t=e.defaultView;if(t&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,o=null,i=null;if(this.POLL_INTERVAL?o=t.setInterval(n,this.POLL_INTERVAL):(a(t,"resize",n,!0),a(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(i=new t.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var t=e.defaultView;t&&(o&&t.clearInterval(o),c(t,"resize",n,!0)),c(e,"scroll",n,!0),i&&i.disconnect()}),e!=(this.root&&this.root.ownerDocument||b)){var r=s(e);r&&this._monitorIntersections(r.ownerDocument)}}},t.prototype._unmonitorIntersections=function(o){var t=this._monitoringDocuments.indexOf(o);if(-1!=t){var i=this.root&&this.root.ownerDocument||b;if(!this._observationTargets.some(function(t){var e=t.element.ownerDocument;if(e==o)return!0;for(;e&&e!=i;){var n=s(e);if((e=n&&n.ownerDocument)==o)return!0}return!1})){var e=this._monitoringUnsubscribes[t];if(this._monitoringDocuments.splice(t,1),this._monitoringUnsubscribes.splice(t,1),e(),o!=i){var n=s(o);n&&this._unmonitorIntersections(n.ownerDocument)}}}},t.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;for(var e=this._monitoringUnsubscribes.length=0;e<t.length;e++)t[e]()},t.prototype._checkForIntersections=function(){if(this.root||!w||E){var a=this._rootIsInDom(),c=a?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var e=t.element,n=T(e),o=this._rootContainsTarget(e),i=t.entry,r=a&&o&&this._computeTargetAndRootIntersection(e,n,c),s=t.entry=new u({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:w&&!this.root?null:c,intersectionRect:r});i?a&&o?this._hasCrossedThreshold(i,s)&&this._queuedEntries.push(s):i&&i.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},t.prototype._computeTargetAndRootIntersection=function(t,e,n){if("none"!=window.getComputedStyle(t).display){for(var o,i,r,s,a,c,u,l,d=e,h=L(t),f=!1;!f&&h;){var m=null,g=1==h.nodeType?window.getComputedStyle(h):{};if("none"==g.display)return null;if(h==this.root||9==h.nodeType)if(f=!0,h==this.root||h==b)w&&!this.root?!E||0==E.width&&0==E.height?d=m=h=null:m=E:m=n;else{var p=L(h),v=p&&T(p),_=p&&this._computeTargetAndRootIntersection(p,v,n);v&&_?(h=p,m=I(v,_)):d=h=null}else{var y=h.ownerDocument;h!=y.body&&h!=y.documentElement&&"visible"!=g.overflow&&(m=T(h))}if(m&&(o=m,i=d,void 0,r=Math.max(o.top,i.top),s=Math.min(o.bottom,i.bottom),a=Math.max(o.left,i.left),c=Math.min(o.right,i.right),l=s-r,d=0<=(u=c-a)&&0<=l&&{top:r,bottom:s,left:a,right:c,width:u,height:l}||null),!d)break;h=h&&L(h)}return d}},t.prototype._getRootRect=function(){var t;if(this.root)t=T(this.root);else{var e=b.documentElement,n=b.body;t={top:0,left:0,right:e.clientWidth||n.clientWidth,width:e.clientWidth||n.clientWidth,bottom:e.clientHeight||n.clientHeight,height:e.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),e={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||e(b,this.root)},t.prototype._rootContainsTarget=function(t){return e(this.root||b,t)&&(!this.root||this.root.ownerDocument==t.ownerDocument)},t.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},t.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=u}function s(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function u(t){this.time=t.time,this.target=t.target,this.rootBounds=r(t.rootBounds),this.boundingClientRect=r(t.boundingClientRect),this.intersectionRect=r(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n=n||setTimeout(function(){t(),n=null},e)}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function T(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function r(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function I(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function e(t,e){for(var n=e;n;){if(n==t)return!0;n=L(n)}return!1}function L(t){var e=t.parentNode;return 9==t.nodeType&&t!=b?s(t):e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},function(t,e,n){"use strict";var o=n(3),i=(d(n(4)),d(n(7))),r=d(n(8)),s=n(9),a=d(n(10)),c=d(n(11)),u=d(n(12)),l=n(13);function d(t){return t&&t.__esModule?t:{default:t}}var h=document.getElementsByTagName("body")[0];window.addEventListener("load",function(){h.classList.add("loaded"),h.classList.contains("page-template-home")||h.classList.add("set"),(0,o.LoadHeroBackground)(),(0,o.setHomeHeroHeight)(),(0,s.workNavIndicator)(),(0,a.default)(),(0,c.default)(),document.querySelector(".instagram-feed")&&((0,u.default)(),(0,l.setInitalClasses)())}),window.addEventListener("resize",(0,i.default)(function(){(0,o.setHomeHeroHeight)(),(0,s.workNavIndicator)()},250)),document.querySelector(".menu-trigger").addEventListener("click",r.default),document.querySelectorAll(".pe__nav li").forEach(function(t){return t.addEventListener("click",function(t){return(0,l.containerToggle)(t)})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHomeHeroHeight=e.LoadHeroBackground=void 0;var o,i=n(0),r=(o=i)&&o.__esModule?o:{default:o};var s=document.getElementsByTagName("body")[0];e.LoadHeroBackground=function(){var t=function(){var t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},e=document.body.style;for(var n in t)if(null!=e[n])return t[n]}();s.classList.contains("page-template-home")&&(document.querySelector(".sleeves__item:last-of-type").addEventListener(t,function(){s.classList.add("set")}),(0,r.default)(".hdr-home .hdr-content__inner"))},e.setHomeHeroHeight=function(){if(s.classList.contains("page-template-home")){var t=document.querySelector(".hdr-home"),e=t.querySelector(".hdr-content").offsetHeight+"px";t.style.minHeight=e,t.querySelector(".inner").style.minHeight=e}}},function(t,e,n){"use strict";var o=n(5),i=n(6),r=document.querySelectorAll("img"),s=document.querySelectorAll(".section-bg");r.length&&(0,i.getImageRatio)(r),window.onload=function(){if(r){var t=document.querySelectorAll("img");(0,i.initDomImages)(t)}s.length&&(0,o.setBackgroundImages)()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1);var o={root:null,rootMargin:"0px",threshold:.3};e.setBackgroundImages=function(){var t=document.querySelectorAll(".section-bg__el"),e=new IntersectionObserver(function(t){t.forEach(function(t){if(0<t.intersectionRatio){var e=new Image;e.src=t.target.getAttribute("data-bg"),e.onload=function(){t.target.style.backgroundImage="url("+e.src+")",t.target.closest(".section-bg").classList.add("active"),t.target.setAttribute("data-bg","")}}})},o);t.forEach(function(t){e.observe(t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1);function r(t,e,n,o){t.setAttribute("src","");var i=document.createElement("div"),r=t.parentElement;i.setAttribute("class","image-el"),i.setAttribute("style","position: relative; width: auto; height: 0px;"),i.innerHTML="<img class=\"lazy-image\" src='' data-src='"+n+"' alt='"+o+"'>",i.style.paddingBottom=e.height/e.width*100+"%",r.innerHTML="",r.appendChild(i),document.querySelectorAll(".lazy-image").forEach(function(t){t.setAttribute("style","position: absolute; top: 0; left: 0; width: 100%; height: 100%;")})}var o={root:null,rootMargin:"0px",threshold:.04};e.getImageRatio=function(t){t.forEach(function(e){var n=e.getAttribute("src"),o=e.getAttribute("alt");if(e.offsetHeight<=0)var i=setInterval(function(){if(0<e.offsetHeight){var t={height:e.offsetHeight,width:e.offsetWidth};r(e,t,n,o),clearInterval(i)}});else{var t={height:e.offsetHeight,width:e.offsetWidth};r(e,t,n,o)}})},e.initDomImages=function(t){var e=new IntersectionObserver(function(t){t.forEach(function(t){if(0<t.intersectionRatio){var e=new Image;e.src=t.target.getAttribute("data-src"),e.onload=function(){t.target.setAttribute("src",e.src),t.target.classList.add("loaded")}}})},o);t.forEach(function(t){e.observe(t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(o,i,r){var s=void 0;return function(){var t=this,e=arguments,n=r&&!s;clearTimeout(s),s=setTimeout(function(){s=null,r||o.apply(t,e)},i),n&&o.apply(t,e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=!1,i=document.getElementsByTagName("body")[0];e.default=function(){o?(i.classList.remove("nav-showing-li"),i.classList.remove("nav-showing")):(i.classList.add("nav-showing"),setTimeout(function(){return i.classList.add("nav-showing-li")})),o=!o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.workNavIndicator=function(){if(document.querySelector(".indicator")){var n=document.querySelector(".indicator"),o=document.querySelectorAll(".work-nav li");n.style.width=o[0].offsetWidth+"px",n.style.transform="translateX("+o[0].offsetLeft+"px)";o.forEach(function(t){t.addEventListener("click",function(t){return function(t){i(t.currentTarget.getAttribute("data-id")),o.forEach(function(t){return t.classList.remove("active")}),t.currentTarget.classList.add("active");var e=t.currentTarget;n.style.width=e.offsetWidth+"px",n.style.transform="translateX("+e.offsetLeft+"px)"}(t)})});var i=function(t){var e=document.querySelectorAll(".work-containers__item");e.forEach(function(t){return t.classList.remove("active")}),e[t].classList.add("active")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){var t=document.getElementsByTagName("body")[0];if(t.classList.contains("single-post")||t.classList.contains("single-products")){var e=!1,n=document.querySelector(".single-blog-hero__content");document.getElementsByTagName("body")[0].classList.add("init-blog");document.querySelector(".single-blog-hero__an:last-of-type");setTimeout(function(){t.classList.add("show-content")},200);requestAnimationFrame(function t(){e&&(n.style.transform="translateY("+window.pageYOffset/35+"%)",e=!1),requestAnimationFrame(t)}),window.addEventListener("scroll",function(){e=!0})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(0),r=(o=i)&&o.__esModule?o:{default:o};var s=document.getElementsByTagName("body")[0],a=!1;e.default=function(){if(s.classList.contains("page-template-about")){var e=document.querySelector(".circle");requestAnimationFrame(function t(){a&&(e.style.transform="translateY("+window.pageYOffset/4+"%)",a=!1),requestAnimationFrame(t)}),window.addEventListener("scroll",function(){a=!0}),(0,r.default)(".me-section__item-inner"),setTimeout(function(){return s.classList.add("init-about")},500)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){fetch("https://www.instagram.com/ispykenny/?__a=1").then(function(t){return t.json()}).then(function(t){var e=t.graphql.user.edge_owner_to_timeline_media,n=document.querySelector(".instagram-feed"),o="";e.edges.map(function(t){o+='\n      <a class="instagram-feed__item" href=https://www.instagram.com/p/'+t.node.shortcode+' target="_blank">\n        <div class="instagram-feed__item-image">\n          <img class="loaded" src="'+t.node.thumbnail_src+'"/>\n        </div>\n      </a>\n      '}),n.innerHTML=o})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=document.querySelectorAll(".pe__containers-item");e.containerToggle=function(t){var e=t.currentTarget.getAttribute("data-id");document.querySelectorAll(".pe__nav li").forEach(function(t){return t.classList.remove("active")}),t.currentTarget.classList.add("active"),o[e].classList.contains("active")||(o.forEach(function(t){t.classList.remove("active")}),o[e].classList.add("active"))},e.setInitalClasses=function(){document.getElementsByTagName("body")[0].classList.contains("page-template-work")&&(o[0].classList.remove("active"),o[1].classList.add("active"),document.querySelectorAll(".pe__nav li")[0].classList.remove("active"),document.querySelectorAll(".pe__nav li")[1].classList.add("active"))}}]);