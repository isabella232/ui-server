import{r as _e,a as $e,b as pe}from"./route-for-api-2b57c9da.js";import{S as Q,i as W,s as X,l as P,g as T,n as ue,o as m,p as me,q as i,d as u,O as le,w as D,x as I,y,B as A,e as k,k as F,c as w,a as E,m as N,b as _,M as p,E as B,t as de,h as ge,I as j,Y as he,J,K,L as Y}from"./index-733079a8.js";import{F as x,b as Z,c as ee,d as ve}from"./index.es-b93730d8.js";import{d as be,l as ke}from"./data-converter-config-8b44b398.js";import{T as te}from"./tooltip-e0caa48f.js";const z={};function we(){return null}const ae=/tmprl\.cloud$/,Ue=async({url:a},e=fetch)=>{var s,l,n,o;const r=await _e($e("settings"),{request:e}),t=we();return{auth:{enabled:!!((s=r==null?void 0:r.Auth)!=null&&s.Enabled),options:(l=r==null?void 0:r.Auth)==null?void 0:l.Options},baseUrl:((o=(n=z==null?void 0:z.env)==null?void 0:n.VITE_API)!=null?o:pe)?window.location.origin:"",defaultNamespace:(r==null?void 0:r.DefaultNamespace)||"default",showTemporalSystemNamespace:r==null?void 0:r.ShowTemporalSystemNamespace,runtimeEnvironment:{get isCloud(){return ae.test(a.hostname)},get isLocal(){return ae.test(a.hostname)},envOverride:Boolean(t)}}};function oe(a){let e,r,t,s;const l=[Ie,De,Ee],n=[];function o(f,g){return f[1]==="notRequested"?0:f[1]==="error"?1:f[1]==="success"?2:-1}return~(e=o(a))&&(r=n[e]=l[e](a)),{c(){r&&r.c(),t=P()},l(f){r&&r.l(f),t=P()},m(f,g){~e&&n[e].m(f,g),T(f,t,g),s=!0},p(f,g){let $=e;e=o(f),e===$?~e&&n[e].p(f,g):(r&&(ue(),m(n[$],1,1,()=>{n[$]=null}),me()),~e?(r=n[e],r?r.p(f,g):(r=n[e]=l[e](f),r.c()),i(r,1),r.m(t.parentNode,t)):r=null)},i(f){s||(i(r),s=!0)},o(f){m(r),s=!1},d(f){~e&&n[e].d(f),f&&u(t)}}}function Ee(a){let e,r;return e=new te({props:{left:!0,text:"Data converter succesfully converted content",$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){y(e,t,s),r=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function De(a){let e,r;return e=new te({props:{left:!0,text:"Data converter couldn't connect to the remote converter",$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){y(e,t,s),r=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ie(a){let e,r;return e=new te({props:{left:!0,text:"Data converter is configured",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){y(e,t,s),r=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ye(a){let e,r,t,s,l;return r=new x({props:{icon:Z,scale:1,class:"text-blue-200 block w-full h-full"}}),s=new x({props:{icon:ee,scale:1,class:"text-blue-200 block w-full h-full"}}),{c(){e=k("div"),D(r.$$.fragment),t=F(),D(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var o=E(e);I(r.$$.fragment,o),t=N(o),I(s.$$.fragment,o),o.forEach(u),this.h()},h(){_(e,"class","flex")},m(n,o){T(n,e,o),y(r,e,null),p(e,t),y(s,e,null),l=!0},p:B,i(n){l||(i(r.$$.fragment,n),i(s.$$.fragment,n),l=!0)},o(n){m(r.$$.fragment,n),m(s.$$.fragment,n),l=!1},d(n){n&&u(e),A(r),A(s)}}}function Ae(a){let e,r,t,s,l;return r=new x({props:{icon:Z,scale:1,class:"text-red-400 block w-full h-full"}}),s=new x({props:{icon:ee,scale:1,class:"text-red-400 block w-full h-full"}}),{c(){e=k("div"),D(r.$$.fragment),t=F(),D(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var o=E(e);I(r.$$.fragment,o),t=N(o),I(s.$$.fragment,o),o.forEach(u),this.h()},h(){_(e,"class","flex")},m(n,o){T(n,e,o),y(r,e,null),p(e,t),y(s,e,null),l=!0},p:B,i(n){l||(i(r.$$.fragment,n),i(s.$$.fragment,n),l=!0)},o(n){m(r.$$.fragment,n),m(s.$$.fragment,n),l=!1},d(n){n&&u(e),A(r),A(s)}}}function Ve(a){let e,r,t,s,l;return r=new x({props:{icon:Z,scale:1,class:"text-blue-200 block w-full h-full"}}),s=new x({props:{icon:ee,scale:1,class:"text-blue-200 block w-full h-full"}}),{c(){e=k("div"),D(r.$$.fragment),t=F(),D(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var o=E(e);I(r.$$.fragment,o),t=N(o),I(s.$$.fragment,o),o.forEach(u),this.h()},h(){_(e,"class","flex")},m(n,o){T(n,e,o),y(r,e,null),p(e,t),y(s,e,null),l=!0},p:B,i(n){l||(i(r.$$.fragment,n),i(s.$$.fragment,n),l=!0)},o(n){m(r.$$.fragment,n),m(s.$$.fragment,n),l=!1},d(n){n&&u(e),A(r),A(s)}}}function Fe(a){let e,r,t=a[0]&&oe(a);return{c(){t&&t.c(),e=P()},l(s){t&&t.l(s),e=P()},m(s,l){t&&t.m(s,l),T(s,e,l),r=!0},p(s,[l]){s[0]?t?(t.p(s,l),l&1&&i(t,1)):(t=oe(s),t.c(),i(t,1),t.m(e.parentNode,e)):t&&(ue(),m(t,1,1,()=>{t=null}),me())},i(s){r||(i(t),r=!0)},o(s){m(t),r=!1},d(s){t&&t.d(s),s&&u(e)}}}function Ne(a,e,r){let t,s;return le(a,be,l=>r(0,t=l)),le(a,ke,l=>r(1,s=l)),[t,s]}class Se extends Q{constructor(e){super(),W(this,e,Ne,Fe,X,{})}}function Ce(a){let e,r,t,s,l,n;return s=new x({props:{class:"",icon:ve,color:"#e9d5ff",scale:.5}}),{c(){e=k("a"),r=k("div"),t=k("div"),D(s.$$.fragment),l=de(`
    Give Feedback`),this.h()},l(o){e=w(o,"A",{href:!0,target:!0});var f=E(e);r=w(f,"DIV",{class:!0});var g=E(r);t=w(g,"DIV",{class:!0});var $=E(t);I(s.$$.fragment,$),$.forEach(u),l=ge(g,`
    Give Feedback`),g.forEach(u),f.forEach(u),this.h()},h(){_(t,"class","feedback-icon svelte-l3ypvb"),_(r,"class","feedback-button svelte-l3ypvb"),_(e,"href","https://github.com/temporalio/ui/issues/new/choose"),_(e,"target","_blank")},m(o,f){T(o,e,f),p(e,r),p(r,t),y(s,t,null),p(r,l),n=!0},p:B,i(o){n||(i(s.$$.fragment,o),n=!0)},o(o){m(s.$$.fragment,o),n=!1},d(o){o&&u(e),A(s)}}}class xe extends Q{constructor(e){super(),W(this,e,null,Ce,X,{})}}const Te=a=>({}),ce=a=>({}),qe=a=>({}),fe=a=>({}),Le=a=>({}),ie=a=>({});function Oe(a){let e,r,t,s,l,n,o,f,g,$,q,S,G,C,H,V;const M=a[2].logo,h=j(M,a,a[1],ie),R=a[2].links,v=j(R,a,a[1],fe);S=new Se({}),C=new xe({});const U=a[2].user,b=j(U,a,a[1],ce);return{c(){e=k("header"),r=k("div"),t=k("a"),s=k("img"),n=F(),h&&h.c(),o=F(),f=k("div"),v&&v.c(),g=F(),$=k("div"),q=k("div"),D(S.$$.fragment),G=F(),D(C.$$.fragment),H=F(),b&&b.c(),this.h()},l(c){e=w(c,"HEADER",{class:!0});var d=E(e);r=w(d,"DIV",{class:!0});var O=E(r);t=w(O,"A",{href:!0,class:!0});var re=E(t);s=w(re,"IMG",{src:!0,alt:!0,class:!0}),re.forEach(u),n=N(O),h&&h.l(O),O.forEach(u),o=N(d),f=w(d,"DIV",{class:!0});var se=E(f);v&&v.l(se),se.forEach(u),g=N(d),$=w(d,"DIV",{class:!0});var L=E($);q=w(L,"DIV",{class:!0});var ne=E(q);I(S.$$.fragment,ne),ne.forEach(u),G=N(L),I(C.$$.fragment,L),H=N(L),b&&b.l(L),L.forEach(u),d.forEach(u),this.h()},h(){he(s.src,l="/logo.svg")||_(s,"src",l),_(s,"alt","Temporal Logo"),_(s,"class","max-h-10"),_(t,"href",a[0]),_(t,"class","block"),_(r,"class","flex items-center gap-4 col-span-3"),_(f,"class","flex gap-4 col-span-4"),_(q,"class","text-right"),_($,"class","flex justify-end gap-4 col-span-5 col-end-13 items-center"),_(e,"class","navigation-header svelte-1frdd75")},m(c,d){T(c,e,d),p(e,r),p(r,t),p(t,s),p(r,n),h&&h.m(r,null),p(e,o),p(e,f),v&&v.m(f,null),p(e,g),p(e,$),p($,q),y(S,q,null),p($,G),y(C,$,null),p($,H),b&&b.m($,null),V=!0},p(c,[d]){(!V||d&1)&&_(t,"href",c[0]),h&&h.p&&(!V||d&2)&&J(h,M,c,c[1],V?Y(M,c[1],d,Le):K(c[1]),ie),v&&v.p&&(!V||d&2)&&J(v,R,c,c[1],V?Y(R,c[1],d,qe):K(c[1]),fe),b&&b.p&&(!V||d&2)&&J(b,U,c,c[1],V?Y(U,c[1],d,Te):K(c[1]),ce)},i(c){V||(i(h,c),i(v,c),i(S.$$.fragment,c),i(C.$$.fragment,c),i(b,c),V=!0)},o(c){m(h,c),m(v,c),m(S.$$.fragment,c),m(C.$$.fragment,c),m(b,c),V=!1},d(c){c&&u(e),h&&h.d(c),v&&v.d(c),A(S),A(C),b&&b.d(c)}}}function Pe(a,e,r){let{$$slots:t={},$$scope:s}=e,{href:l}=e;return a.$$set=n=>{"href"in n&&r(0,l=n.href),"$$scope"in n&&r(1,s=n.$$scope)},[l,s,t]}class je extends Q{constructor(e){super(),W(this,e,Pe,Oe,X,{href:0})}}export{Se as D,xe as F,je as N,Ue as f};
