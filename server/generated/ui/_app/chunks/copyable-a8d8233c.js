import{S as D,i as F,s as I,I as P,e as v,k as j,w as G,c as d,a as k,m as H,x as J,d as g,b,g as B,M as p,y as K,N as C,H as L,E as T,J as M,K as O,L as U,q as z,o as A,B as V,G as X,ad as Q,C as E,a8 as y,t as R,h as W,X as N,j as Y}from"./index-733079a8.js";import{F as Z,e as S,g as q}from"./index.es-b93730d8.js";function w(e){let s,t,c;return{c(){s=v("span"),t=R(e[0]),this.h()},l(a){s=d(a,"SPAN",{class:!0});var n=k(s);t=W(n,e[0]),n.forEach(g),this.h()},h(){b(s,"class",c=e[7].class),N(s,"select-all",!e[8].default)},m(a,n){B(a,s,n),p(s,t)},p(a,n){n&1&&Y(t,a[0]),n&128&&c!==(c=a[7].class)&&b(s,"class",c),n&384&&N(s,"select-all",!a[8].default)},d(a){a&&g(s)}}}function x(e){let s,t,c,a,n,f,m,h;const _=e[10].default,r=P(_,e,e[9],null),o=r||w(e);return a=new Z({props:{icon:e[5]?S:q,color:e[2],class:e[1]?"visible":"invisible group-hover:visible",size:e[4]}}),{c(){s=v("div"),o&&o.c(),t=j(),c=v("button"),G(a.$$.fragment),this.h()},l(i){s=d(i,"DIV",{class:!0});var l=k(s);o&&o.l(l),t=H(l),c=d(l,"BUTTON",{});var u=k(c);J(a.$$.fragment,u),u.forEach(g),l.forEach(g),this.h()},h(){b(s,"class",n="flex gap-2 items-center group "+e[7]["container-class"])},m(i,l){B(i,s,l),o&&o.m(s,null),p(s,t),p(s,c),K(a,c,null),f=!0,m||(h=[C(c,"click",e[6]),C(s,"click",function(){L(e[3]?e[6]:T)&&(e[3]?e[6]:T).apply(this,arguments)})],m=!0)},p(i,[l]){e=i,r?r.p&&(!f||l&512)&&M(r,_,e,e[9],f?U(_,e[9],l,null):O(e[9]),null):o&&o.p&&(!f||l&385)&&o.p(e,f?l:-1);const u={};l&32&&(u.icon=e[5]?S:q),l&4&&(u.color=e[2]),l&2&&(u.class=e[1]?"visible":"invisible group-hover:visible"),l&16&&(u.size=e[4]),a.$set(u),(!f||l&128&&n!==(n="flex gap-2 items-center group "+e[7]["container-class"]))&&b(s,"class",n)},i(i){f||(z(o,i),z(a.$$.fragment,i),f=!0)},o(i){A(o,i),A(a.$$.fragment,i),f=!1},d(i){i&&g(s),o&&o.d(i),V(a),m=!1,X(h)}}}function $(e,s,t){let{$$slots:c={},$$scope:a}=s;const n=Q(c);let{content:f}=s,{visible:m=!1}=s,{color:h="black"}=s,{clickAllToCopy:_=!1}=s,{size:r="1x"}=s,o=!1;const i=l=>{l.preventDefault(),l.stopPropagation(),navigator.clipboard.writeText(f).then(()=>{t(5,o=!o),setTimeout(()=>t(5,o=!1),500)}).catch(u=>console.error(u))};return e.$$set=l=>{t(7,s=E(E({},s),y(l))),"content"in l&&t(0,f=l.content),"visible"in l&&t(1,m=l.visible),"color"in l&&t(2,h=l.color),"clickAllToCopy"in l&&t(3,_=l.clickAllToCopy),"size"in l&&t(4,r=l.size),"$$scope"in l&&t(9,a=l.$$scope)},s=y(s),[f,m,h,_,r,o,i,s,n,a,c]}class ls extends D{constructor(s){super(),F(this,s,$,x,I,{content:0,visible:1,color:2,clickAllToCopy:3,size:4})}}export{ls as C};