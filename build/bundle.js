!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r){for(var t=document.querySelectorAll(".card"),n=Array.from(t),o=document.querySelectorAll(".icon"),c=(Array.from(o),document.querySelector(".card_container")),a=document.querySelectorAll(".player_form"),u=[],l=[],i=[],f=c.children.length;f>=0;f--)c.appendChild(c.children[Math.random()*f|0]);var d=function(){var e=event.currentTarget,r=Array.from(e.children);r.forEach((function(e){return e.classList.toggle("hidden")})),e.classList.toggle("activeCard");var n=r[0].getAttribute("alt");u.push(n);l.push(r),i.push(e),function(){if(1===u.length&&i.forEach((function(e){return e.classList.add("unableCard")})),2===u.length){var e=l.flat(),r=function(){u.length=0,i.length=0,l.length=0};if(u[0]===u[1]){i.forEach((function(e){return e.classList.add("unableCardPermanent")})),r();var n=document.querySelector(".active_player"),o=n.children[1].innerHTML;newScore=parseFloat(o)+1,n.children[1].innerHTML=newScore}else t.forEach((function(e){return e.classList.add("unableCard")})),setTimeout((function(){e.forEach((function(e){return e.classList.toggle("hidden")})),i.forEach((function(e){return e.classList.toggle("activeCard")})),r(),e.length=0,t.forEach((function(e){return e.classList.remove("unableCard")}))}),500),a.forEach((function(e){return e.classList.toggle("active_player")}))}}()};n.forEach((function(e){return e.addEventListener("click",d)}))}]);