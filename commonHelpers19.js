import"./assets/styles-b793132a.js";console.log("=============Task-5===================");const l=["Джаз","Блюз","Рок-н-рол","Реггі","Реп"];function c(n){for(let o=0;o<=n.length-1;o++)console.log(`${o+1} - ${n[o]}`)}c(l);console.log("=============Task-6===================");const r={name:"John",age:20,hobby:"tenis",premium:!0},a=function(n){n.mood="happy",n.hobby="skydiving",n.premium=!1;const o=Object.keys(n);for(const s of o)console.log(s,n[s]);return n};console.log(a(r));console.log("=============Task-7===================");const u={Mango:100,Poly:160,Ajax:1470},i=function(n){let o=0;const s=Object.values(n);for(const t of s)o+=t;return o};console.log(i(u));console.log("=============Task-10===================");const e=[1,1,1,2,3,4,7,7,6,6,5,4,23,22,22,111,1,5],f=function(n){const o=[];for(const s of n)o.includes(s)||o.push(s);return o};console.log(f(e));function g(n){const o=[];for(const s of n)o[s]=s;return Object.values(o)}console.log(g(e));
//# sourceMappingURL=commonHelpers19.js.map
