import{S as q,i as B,s as D,I as N,e as k,k as P,w as V,c as p,a as v,m as j,x as G,d as b,b as g,g as S,M as d,y as H,T,H as J,E as C,J as K,K as L,L as O,q as y,o as A,B as R,G as U,ak as z,C as E,V as I,t as F,h as Q,R as M,j as W}from"./index-4d40a842.js";import{I as X}from"./index-12dad8b6.js";function Y(s){let e,t,c;return{c(){e=k("span"),t=F(s[0]),this.h()},l(a){e=p(a,"SPAN",{class:!0});var n=v(e);t=Q(n,s[0]),n.forEach(b),this.h()},h(){g(e,"class",c=s[6].class),M(e,"select-all",!s[7].default)},m(a,n){S(a,e,n),d(e,t)},p(a,n){n&1&&W(t,a[0]),n&64&&c!==(c=a[6].class)&&g(e,"class",c),n&192&&M(e,"select-all",!a[7].default)},d(a){a&&b(e)}}}function Z(s){let e,t,c,a,n,f,m,h;const _=s[9].default,r=N(_,s,s[8],null),i=r||Y(s);return a=new X({props:{name:s[4]?"checkMark":"copy",stroke:s[2],class:`${s[1]?"visible":"invisible group-hover:visible"} h-4`}}),{c(){e=k("div"),i&&i.c(),t=P(),c=k("button"),V(a.$$.fragment),this.h()},l(l){e=p(l,"DIV",{class:!0});var o=v(e);i&&i.l(o),t=j(o),c=p(o,"BUTTON",{});var u=v(c);G(a.$$.fragment,u),u.forEach(b),o.forEach(b),this.h()},h(){g(e,"class",n="group flex items-center gap-2 "+s[6]["container-class"])},m(l,o){S(l,e,o),i&&i.m(e,null),d(e,t),d(e,c),H(a,c,null),f=!0,m||(h=[T(c,"click",s[5]),T(e,"click",function(){J(s[3]?s[5]:C)&&(s[3]?s[5]:C).apply(this,arguments)})],m=!0)},p(l,[o]){s=l,r?r.p&&(!f||o&256)&&K(r,_,s,s[8],f?O(_,s[8],o,null):L(s[8]),null):i&&i.p&&(!f||o&193)&&i.p(s,f?o:-1);const u={};o&16&&(u.name=s[4]?"checkMark":"copy"),o&4&&(u.stroke=s[2]),o&2&&(u.class=`${s[1]?"visible":"invisible group-hover:visible"} h-4`),a.$set(u),(!f||o&64&&n!==(n="group flex items-center gap-2 "+s[6]["container-class"]))&&g(e,"class",n)},i(l){f||(y(i,l),y(a.$$.fragment,l),f=!0)},o(l){A(i,l),A(a.$$.fragment,l),f=!1},d(l){l&&b(e),i&&i.d(l),R(a),m=!1,U(h)}}}function w(s,e,t){let{$$slots:c={},$$scope:a}=e;const n=z(c);let{content:f}=e,{visible:m=!1}=e,{color:h="black"}=e,{clickAllToCopy:_=!1}=e,r=!1;const i=l=>{l.preventDefault(),l.stopPropagation(),navigator.clipboard.writeText(f).then(()=>{t(4,r=!r),setTimeout(()=>t(4,r=!1),500)}).catch(o=>console.error(o))};return s.$$set=l=>{t(6,e=E(E({},e),I(l))),"content"in l&&t(0,f=l.content),"visible"in l&&t(1,m=l.visible),"color"in l&&t(2,h=l.color),"clickAllToCopy"in l&&t(3,_=l.clickAllToCopy),"$$scope"in l&&t(8,a=l.$$scope)},e=I(e),[f,m,h,_,r,i,e,n,a,c]}class ee extends q{constructor(e){super(),B(this,e,w,Z,D,{content:0,visible:1,color:2,clickAllToCopy:3})}}export{ee as C};