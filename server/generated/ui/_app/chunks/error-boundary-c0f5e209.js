var Le=Object.defineProperty;var ie=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var ce=(n,t,e)=>t in n?Le(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,te=(n,t)=>{for(var e in t||(t={}))Oe.call(t,e)&&ce(n,e,t[e]);if(ie)for(var e of ie(t))je.call(t,e)&&ce(n,e,t[e]);return n};import{r as Ie,a as Ne,n as Y}from"./route-for-api-1a83ff73.js";import{S as T,i as H,s as P,I as R,e as $,c as I,a as N,d as g,b as E,X as ue,g as V,J as z,K as U,L as G,q as B,o as S,O as W,k as q,w as K,m as L,x as J,M as w,y as Q,Y as De,Z as Be,_ as Se,B as X,l as j,$ as Ae,N as se,n as x,p as ee,H as Fe,t as C,h as M,j as Z,a0 as Ce,a1 as Me,a2 as Te,a3 as He,a4 as Pe,E as A,a5 as fe,F as re,a6 as _e}from"./index-9f955617.js";import{p as Re}from"./stores-dc10aa65.js";import{F as ze,f as de,a as me}from"./index.es-d36a04e6.js";import{f as he,c as Ue,a as Ge,q as Ke}from"./index-4ce16dea.js";import{D as Je,F as Qe,L as Xe}from"./navigation-header-90b486cf.js";import{n as pe}from"./notifications-9be462b8.js";import{p as Ye}from"./persist-store-510d175e.js";import{E as Ze}from"./error-657185df.js";import{w as ve}from"./index-fef70e44.js";const jt=async(n,t=fetch)=>{if(!n.runtimeEnvironment.isCloud)return await Ie(Ne("cluster"),{request:t})},At=async(n=fetch)=>{const t=await Ie(Ne("user"),{request:n});return{name:t==null?void 0:t.Name,email:t==null?void 0:t.Email,picture:t==null?void 0:t.Picture}},ge=n=>{const t=n==null?void 0:n.indexOf("?");return t>-1?n.slice(0,t):n},We=(n,t,e=!1)=>{const r=ge(n).split("/"),s=ge(t).split("/");if(e&&r.length!==s.length)return!1;for(let o=0;o<r.length;o++){const i=r[o],a=s[o];if(i!==a)return!1}return!0};function xe(n){let t,e;const r=n[4].default,s=R(r,n,n[3],null);return{c(){t=$("a"),s&&s.c(),this.h()},l(o){t=I(o,"A",{href:!0,class:!0});var i=N(t);s&&s.l(i),i.forEach(g),this.h()},h(){E(t,"href",n[0]),E(t,"class","relative svelte-1hldide"),ue(t,"active",n[1])},m(o,i){V(o,t,i),s&&s.m(t,null),e=!0},p(o,[i]){s&&s.p&&(!e||i&8)&&z(s,r,o,o[3],e?G(r,o[3],i,null):U(o[3]),null),(!e||i&1)&&E(t,"href",o[0]),i&2&&ue(t,"active",o[1])},i(o){e||(B(s,o),e=!0)},o(o){S(s,o),e=!1},d(o){o&&g(t),s&&s.d(o)}}}function et(n,t,e){let r,s;W(n,Re,l=>e(2,s=l));let{$$slots:o={},$$scope:i}=t,{href:a}=t;return n.$$set=l=>{"href"in l&&e(0,a=l.href),"$$scope"in l&&e(3,i=l.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&e(1,r=We(a,s.url.pathname))},[a,r,s,i,o]}class Ft extends T{constructor(t){super(),H(this,t,et,xe,P,{href:0})}}const tt=n=>({}),be=n=>({}),rt=n=>({}),ke=n=>({});function ye(n){let t,e,r,s,o,i,a,l,c,m,f,u,_;const d=n[4].action,b=R(d,n,n[3],ke),h=n[4].links,k=R(h,n,n[3],be);return l=new Qe({}),m=new Xe({props:{user:n[0]}}),{c(){t=$("section"),e=$("div"),r=$("div"),b&&b.c(),s=q(),o=$("div"),k&&k.c(),i=q(),a=$("div"),K(l.$$.fragment),c=q(),K(m.$$.fragment),this.h()},l(p){t=I(p,"SECTION",{class:!0});var y=N(t);e=I(y,"DIV",{class:!0});var v=N(e);r=I(v,"DIV",{class:!0});var D=N(r);b&&b.l(D),D.forEach(g),s=L(v),o=I(v,"DIV",{class:!0});var O=N(o);k&&k.l(O),O.forEach(g),i=L(v),a=I(v,"DIV",{class:!0});var F=N(a);J(l.$$.fragment,F),c=L(F),J(m.$$.fragment,F),F.forEach(g),v.forEach(g),y.forEach(g),this.h()},h(){E(r,"class","w-5/6 md:w-2/3 lg:w-1/2 action"),E(o,"class","mt-4 inline-block links"),E(a,"class","absolute left-0 bottom-24"),E(e,"class","relative h-full"),E(t,"class","hamburger-menu svelte-11vmru5")},m(p,y){V(p,t,y),w(t,e),w(e,r),b&&b.m(r,null),w(e,s),w(e,o),k&&k.m(o,null),w(e,i),w(e,a),Q(l,a,null),w(a,c),Q(m,a,null),_=!0},p(p,y){b&&b.p&&(!_||y&8)&&z(b,d,p,p[3],_?G(d,p[3],y,rt):U(p[3]),ke),k&&k.p&&(!_||y&8)&&z(k,h,p,p[3],_?G(h,p[3],y,tt):U(p[3]),be);const v={};y&1&&(v.user=p[0]),m.$set(v)},i(p){_||(B(b,p),B(k,p),B(l.$$.fragment,p),B(m.$$.fragment,p),De(()=>{u&&u.end(1),f=Be(t,he,{x:-50,duration:250}),f.start()}),_=!0)},o(p){S(b,p),S(k,p),S(l.$$.fragment,p),S(m.$$.fragment,p),f&&f.invalidate(),u=Se(t,he,{x:-50,duration:250,delay:100}),_=!1},d(p){p&&g(t),b&&b.d(p),k&&k.d(p),X(l),X(m),p&&u&&u.end()}}}function st(n){let t,e,r,s,o,i,a,l,c,m,f,u,_,d,b,h,k,p;s=new ze({props:{class:"cursor-pointer",icon:n[2]?de:me,color:"white"}}),_=new Je({});let y=n[2]&&ye(n);return{c(){t=$("header"),e=$("div"),r=$("div"),K(s.$$.fragment),o=q(),i=$("div"),a=$("a"),l=$("img"),m=q(),f=$("div"),u=$("div"),K(_.$$.fragment),d=q(),y&&y.c(),b=j(),this.h()},l(v){t=I(v,"HEADER",{class:!0});var D=N(t);e=I(D,"DIV",{class:!0});var O=N(e);r=I(O,"DIV",{"data-test":!0});var F=N(r);J(s.$$.fragment,F),F.forEach(g),O.forEach(g),o=L(D),i=I(D,"DIV",{class:!0});var ne=N(i);a=I(ne,"A",{href:!0,class:!0});var le=N(a);l=I(le,"IMG",{src:!0,alt:!0,class:!0}),le.forEach(g),ne.forEach(g),m=L(D),f=I(D,"DIV",{class:!0});var oe=N(f);u=I(oe,"DIV",{class:!0});var ae=N(u);J(_.$$.fragment,ae),ae.forEach(g),oe.forEach(g),D.forEach(g),d=L(v),y&&y.l(v),b=j(),this.h()},h(){E(r,"data-test","hamburger-icon"),E(e,"class","flex gap-4 col-span-4 justify-start"),Ae(l.src,c="/logo.svg")||E(l,"src",c),E(l,"alt","Temporal Logo"),E(l,"class","max-h-10 svelte-11vmru5"),E(a,"href",n[1]),E(a,"class","block"),E(i,"class","flex gap-4 col-span-4 justify-center"),E(u,"class","text-right"),E(f,"class","flex gap-4 col-span-4 justify-end items-center"),E(t,"class","hamburger-header svelte-11vmru5")},m(v,D){V(v,t,D),w(t,e),w(e,r),Q(s,r,null),w(t,o),w(t,i),w(i,a),w(a,l),w(t,m),w(t,f),w(f,u),Q(_,u,null),V(v,d,D),y&&y.m(v,D),V(v,b,D),h=!0,k||(p=se(r,"click",n[5]),k=!0)},p(v,[D]){const O={};D&4&&(O.icon=v[2]?de:me),s.$set(O),(!h||D&2)&&E(a,"href",v[1]),v[2]?y?(y.p(v,D),D&4&&B(y,1)):(y=ye(v),y.c(),B(y,1),y.m(b.parentNode,b)):y&&(x(),S(y,1,1,()=>{y=null}),ee())},i(v){h||(B(s.$$.fragment,v),B(_.$$.fragment,v),B(y),h=!0)},o(v){S(s.$$.fragment,v),S(_.$$.fragment,v),S(y),h=!1},d(v){v&&g(t),X(s),X(_),v&&g(d),y&&y.d(v),v&&g(b),k=!1,p()}}}function nt(n,t,e){let r,{$$slots:s={},$$scope:o}=t,{user:i}=t,{href:a}=t;const l=()=>e(2,r=!r);return n.$$set=c=>{"user"in c&&e(0,i=c.user),"href"in c&&e(1,a=c.href),"$$scope"in c&&e(3,o=c.$$scope)},e(2,r=!1),[i,a,r,o,s,l]}class Ct extends T{constructor(t){super(),H(this,t,nt,st,P,{user:0,href:1})}}function lt(n,{from:t,to:e},r={}){const s=getComputedStyle(n),o=s.transform==="none"?"":s.transform,[i,a]=s.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*i/e.width-(e.left+i),c=t.top+t.height*a/e.height-(e.top+a),{delay:m=0,duration:f=_=>Math.sqrt(_)*120,easing:u=Ue}=r;return{delay:m,duration:Fe(f)?f(Math.sqrt(l*l+c*c)):f,easing:u,css:(_,d)=>{const b=d*l,h=d*c,k=_+d*t.width/e.width,p=_+d*t.height/e.height;return`transform: ${o} translate(${b}px, ${h}px) scale(${k}, ${p});`}}}function Ee(n,t,e){const r=n.slice();return r[4]=t[e],r}function we(n,t){let e,r,s=t[4].message+"",o,i,a,l,c,m,f=A,u,_,d;function b(){return t[3](t[4])}return{key:n,first:null,c(){e=$("article"),r=$("p"),o=C(s),i=q(),this.h()},l(h){e=I(h,"ARTICLE",{class:!0});var k=N(e);r=I(k,"P",{});var p=N(r);o=M(p,s),p.forEach(g),i=L(k),k.forEach(g),this.h()},h(){E(e,"class",a="px-8 py-6 mb-4 opacity-90 shadow-lg "+t[4].type+" svelte-2zx94o"),this.first=e},m(h,k){V(h,e,k),w(e,r),w(r,o),w(e,i),u=!0,_||(d=se(e,"click",b),_=!0)},p(h,k){t=h,(!u||k&1)&&s!==(s=t[4].message+"")&&Z(o,s),(!u||k&1&&a!==(a="px-8 py-6 mb-4 opacity-90 shadow-lg "+t[4].type+" svelte-2zx94o"))&&E(e,"class",a)},r(){m=e.getBoundingClientRect()},f(){Ce(e),f(),Me(e,m)},a(){f(),f=Te(e,m,lt,{})},i(h){u||(De(()=>{c&&c.end(1),l=Be(e,t[2],{key:t[4].id}),l.start()}),u=!0)},o(h){l&&l.invalidate(),c=Se(e,t[1],{key:t[4].id}),u=!1},d(h){h&&g(e),h&&c&&c.end(),_=!1,d()}}}function ot(n){let t,e=[],r=new Map,s,o=n[0];const i=a=>a[4].id;for(let a=0;a<o.length;a+=1){let l=Ee(n,o,a),c=i(l);r.set(c,e[a]=we(c,l))}return{c(){t=$("section");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=I(a,"SECTION",{class:!0});var l=N(t);for(let c=0;c<e.length;c+=1)e[c].l(l);l.forEach(g),this.h()},h(){E(t,"class","flex flex-col justify-center absolute w-1/3 top-20 right-4 z-40")},m(a,l){V(a,t,l);for(let c=0;c<e.length;c+=1)e[c].m(t,null);s=!0},p(a,[l]){if(l&1){o=a[0],x();for(let c=0;c<e.length;c+=1)e[c].r();e=He(e,l,i,1,a,o,r,t,Pe,we,null,Ee);for(let c=0;c<e.length;c+=1)e[c].a();ee()}},i(a){if(!s){for(let l=0;l<o.length;l+=1)B(e[l]);s=!0}},o(a){for(let l=0;l<e.length;l+=1)S(e[l]);s=!1},d(a){a&&g(t);for(let l=0;l<e.length;l+=1)e[l].d()}}}function at(n,t,e){let r;W(n,pe,a=>e(0,r=a));const[s,o]=Ge({duration:a=>Math.sqrt(a*100),fallback(a){const l=getComputedStyle(a),c=l.transform==="none"?"":l.transform;return{duration:600,easing:Ke,css:m=>`transform: ${c} scale(${m}); opacity: ${m}`}}});return[r,s,o,a=>pe.dismiss(a.id)]}class Mt extends T{constructor(t){super(),H(this,t,at,ot,P,{})}}const Ve=Ye("closedBannerId",null),it=n=>{Ve.set(n)},ct=(n,t)=>{if(!n||!t)return!1;const[e,r,s]=n.split(".").map(Number),[o,i,a]=t.split(".").map(Number);return e!==o?e>o:r!==i?r>i:s>a};function $e(n){let t,e,r,s,o,i,a,l,c,m;return{c(){t=$("section"),e=$("a"),r=C(n[3]),o=q(),i=$("button"),a=C("\u2715"),this.h()},l(f){t=I(f,"SECTION",{class:!0});var u=N(t);e=I(u,"A",{href:!0,target:!0});var _=N(e);r=M(_,n[3]),_.forEach(g),o=L(u),i=I(u,"BUTTON",{class:!0});var d=N(i);a=M(d,"\u2715"),d.forEach(g),u.forEach(g),this.h()},h(){var f,u,_;E(e,"href",s="https://github.com/temporalio/temporal/releases/tag/v"+((_=(u=(f=n[0])==null?void 0:f.versionInfo)==null?void 0:u.current)==null?void 0:_.version)),E(e,"target","_blank"),E(i,"class","absolute top-0 right-0 mr-5 text-black-600"),E(t,"class",l=fe(`block leading-10 text-center ${n[1]}`)+" svelte-1xgik0j")},m(f,u){V(f,t,u),w(t,e),w(e,r),w(t,o),w(t,i),w(i,a),c||(m=se(i,"click",n[12]),c=!0)},p(f,u){var _,d,b;u&8&&Z(r,f[3]),u&1&&s!==(s="https://github.com/temporalio/temporal/releases/tag/v"+((b=(d=(_=f[0])==null?void 0:_.versionInfo)==null?void 0:d.current)==null?void 0:b.version))&&E(e,"href",s),u&2&&l!==(l=fe(`block leading-10 text-center ${f[1]}`)+" svelte-1xgik0j")&&E(t,"class",l)},d(f){f&&g(t),c=!1,m()}}}function ut(n){let t,e=n[4]&&$e(n);return{c(){e&&e.c(),t=j()},l(r){e&&e.l(r),t=j()},m(r,s){e&&e.m(r,s),V(r,t,s)},p(r,[s]){r[4]?e?e.p(r,s):(e=$e(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:A,o:A,d(r){e&&e.d(r),r&&g(t)}}}function ft(n,t,e){let r,s,o,i,a,l,c;W(n,Ve,k=>e(11,c=k));var m,f,u,_;let{cluster:d}=t;const b={High:"high",Medium:"medium",Low:"low"},h=()=>it(s.version);return n.$$set=k=>{"cluster"in k&&e(0,d=k.cluster)},n.$$.update=()=>{n.$$.dirty&33&&e(10,r=e(5,m=d==null?void 0:d.versionInfo)===null||m===void 0?void 0:m.recommended),n.$$.dirty&65&&e(2,s=e(6,f=d==null?void 0:d.versionInfo)===null||f===void 0?void 0:f.current),n.$$.dirty&385&&e(9,o=e(8,_=e(7,u=d==null?void 0:d.versionInfo)===null||u===void 0?void 0:u.alerts)===null||_===void 0?void 0:_[0]),n.$$.dirty&512&&e(1,i=o?b[o.severity]:b.Low),n.$$.dirty&3076&&e(4,a=(s==null?void 0:s.version)&&s.version!=c&&ct(r==null?void 0:r.version,s.version)),n.$$.dirty&1538&&e(3,l=i==b.Low?`\u{1F4E5} v${r==null?void 0:r.version} version is available`:`\u{1F4E5} ${o==null?void 0:o.message}`)},[d,i,s,l,a,m,f,u,_,o,r,c,h]}class Tt extends T{constructor(t){super(),H(this,t,ft,ut,P,{cluster:0})}}function _t(n){let t;const e=n[8].default,r=R(e,n,n[7],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,o){r&&r.m(s,o),t=!0},p(s,o){r&&r.p&&(!t||o&128)&&z(r,e,s,s[7],t?G(e,s[7],o,null):U(s[7]),null)},i(s){t||(B(r,s),t=!0)},o(s){S(r,s),t=!1},d(s){r&&r.d(s)}}}function dt(n){let t,e;return t=new Ze({props:{error:n[2]}}),t.$on("clearError",n[3]),{c(){K(t.$$.fragment)},l(r){J(t.$$.fragment,r)},m(r,s){Q(t,r,s),e=!0},p(r,s){const o={};s&4&&(o.error=r[2]),t.$set(o)},i(r){e||(B(t.$$.fragment,r),e=!0)},o(r){S(t.$$.fragment,r),e=!1},d(r){X(t,r)}}}function mt(n){let t,e,r,s;const o=[dt,_t],i=[];function a(l,c){return l[1]&&l[2]?0:1}return t=a(n),e=i[t]=o[t](n),{c(){e.c(),r=j()},l(l){e.l(l),r=j()},m(l,c){i[t].m(l,c),V(l,r,c),s=!0},p(l,[c]){let m=t;t=a(l),t===m?i[t].p(l,c):(x(),S(i[m],1,1,()=>{i[m]=null}),ee(),e=i[t],e?e.p(l,c):(e=i[t]=o[t](l),e.c()),B(e,1),e.m(r.parentNode,r))},i(l){s||(B(e),s=!0)},o(l){S(e),s=!1},d(l){i[t].d(l),l&&g(r)}}}function ht(n,t,e){let r,s,o=A,i=()=>(o(),o=re(u,h=>e(6,s=h)),u),a,l=A,c=()=>(l(),l=re(d,h=>e(2,a=h)),d);W(n,Y,h=>e(5,r=h)),n.$$.on_destroy.push(()=>o()),n.$$.on_destroy.push(()=>l());let{$$slots:m={},$$scope:f}=t,{error:u=null}=t;i();let{onError:_=null}=t,d;function b(){_e(u,s=null,s),e(4,_=null),c(e(1,d=null)),_e(Y,r=null,r)}return n.$$set=h=>{"error"in h&&i(e(0,u=h.error)),"onError"in h&&e(4,_=h.onError),"$$scope"in h&&e(7,f=h.$$scope)},n.$$.update=()=>{n.$$.dirty&115&&(u&&s&&c(e(1,d=u)),Y&&r&&c(e(1,d=Y)),_&&d&&_(d))},[u,d,a,b,_,r,s,f,m]}class pt extends T{constructor(t){super(),H(this,t,ht,mt,P,{error:0,onError:4})}}function vt(n){let t;const e=n[5].default,r=R(e,n,n[4],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,o){r&&r.m(s,o),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&z(r,e,s,s[4],t?G(e,s[4],o,null):U(s[4]),null)},i(s){t||(B(r,s),t=!0)},o(s){S(r,s),t=!1},d(s){r&&r.d(s)}}}function gt(n){let t,e,r=n[1].message+"",s,o,i,a,l=(n[2]?n[1].stack:"")+"",c,m;return{c(){t=$("div"),e=$("b"),s=C(r),o=q(),i=$("pre"),a=C(`
      `),c=C(l),m=C(`
    `),this.h()},l(f){t=I(f,"DIV",{class:!0});var u=N(t);e=I(u,"B",{});var _=N(e);s=M(_,r),_.forEach(g),o=L(u),i=I(u,"PRE",{class:!0});var d=N(i);a=M(d,`
      `),c=M(d,l),m=M(d,`
    `),d.forEach(g),u.forEach(g),this.h()},h(){E(i,"class","trace svelte-urrl06"),E(t,"class","error svelte-urrl06")},m(f,u){V(f,t,u),w(t,e),w(e,s),w(t,o),w(t,i),w(i,a),w(i,c),w(i,m)},p(f,u){u&2&&r!==(r=f[1].message+"")&&Z(s,r),u&2&&l!==(l=(f[2]?f[1].stack:"")+"")&&Z(c,l)},i:A,o:A,d(f){f&&g(t)}}}function bt(n){let t,e,r,s;const o=[gt,vt],i=[];function a(l,c){return l[1]?0:1}return t=a(n),e=i[t]=o[t](n),{c(){e.c(),r=j()},l(l){e.l(l),r=j()},m(l,c){i[t].m(l,c),V(l,r,c),s=!0},p(l,[c]){let m=t;t=a(l),t===m?i[t].p(l,c):(x(),S(i[m],1,1,()=>{i[m]=null}),ee(),e=i[t],e?e.p(l,c):(e=i[t]=o[t](l),e.c()),B(e,1),e.m(r.parentNode,r))},i(l){s||(B(e),s=!0)},o(l){S(e),s=!1},d(l){i[t].d(l),l&&g(r)}}}function kt(n,t,e){let r,s=A,o=()=>(s(),s=re(l,u=>e(1,r=u)),l);n.$$.on_destroy.push(()=>s());let{$$slots:i={},$$scope:a}=t,{error:l=null}=t;o();let{onError:c=null}=t,f=(typeof process!="undefined"&&process.env&&"production")!=="production";return n.$$set=u=>{"error"in u&&o(e(0,l=u.error)),"onError"in u&&e(3,c=u.onError),"$$scope"in u&&e(4,a=u.$$scope)},n.$$.update=()=>{n.$$.dirty&10&&r&&c&&c(r)},[l,r,f,c,a,i]}class yt extends T{constructor(t){super(),H(this,t,kt,bt,P,{error:0,onError:3})}}const Et=["c","l","h","m","p","a","i","o","d"];function qe(n){if(n.$$render){let e=n.$$render;return n.$$render=(r,s,o,i)=>{const a=ve(void 0);try{return e(r,te({error:a},s),o,i)}catch(l){return a.set(l),e(r,te({error:a},s),o,{})}},n}function t(e,r){return function(...o){try{return e(...o)}catch(i){r(i)}}}return class extends n{constructor(r){const s=ve(void 0);r.props.$$slots.default=r.props.$$slots.default.map(o=>(...i)=>{let l=t(o,s.set)(...i);if(l)for(let c of Et)l[c]&&(l[c]=t(l[c],s.set));return l}),super(r),this.$$set({error:s})}}}qe(yt);const Pt=qe(pt);export{Tt as B,Pt as E,Ct as H,Ft as N,jt as a,Mt as b,At as f};