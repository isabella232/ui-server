import{S as w,i as h,s as y,a9 as v,w as f,k as I,l as g,x as u,m as C,y as $,g as k,ac as j,q as c,o as p,B as _,d as b,N as S,E as l}from"../../../../../../../../chunks/index-a913e400.js";import{p as q}from"../../../../../../../../chunks/stores-34c141af.js";import{C as E}from"../../../../../../../../chunks/code-block-94f312a9.js";import{L}from"../../../../../../../../chunks/loading-39ca46d9.js";import{f as N}from"../../../../../../../../chunks/events-service-4ceb5e60.js";import{m as d}from"../../../../../../../../chunks/route-for-0fcfcb54.js";import{P}from"../../../../../../../../chunks/page-title-2fee4cfa.js";import"../../../../../../../../chunks/index-08d0f893.js";import"../../../../../../../../chunks/copy-to-clipboard-0fa4459b.js";import"../../../../../../../../chunks/index-de429506.js";import"../../../../../../../../chunks/route-for-api-6f1dc889.js";import"../../../../../../../../chunks/notifications-ed5cd8a8.js";import"../../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../../chunks/is-function-b969a126.js";import"../../../../../../../../chunks/get-api-origin-7e36d6d7.js";import"../../../../../../../../chunks/index-9bd1f67e.js";import"../../../../../../../../chunks/is-http-c467dd4a.js";import"../../../../../../../../chunks/persist-store-1373753b.js";import"../../../../../../../../chunks/data-converter-config-7122577a.js";import"../../../../../../../../chunks/atob-009c70e1.js";import"../../../../../../../../chunks/format-date-ecf4453c.js";import"../../../../../../../../chunks/to-duration-6d22e6d2.js";import"../../../../../../../../chunks/is-419a79e8.js";import"../../../../../../../../chunks/index-d27505fa.js";import"../../../../../../../../chunks/has-b7e06397.js";import"../../../../../../../../chunks/get-event-categorization-754b07cc.js";import"../../../../../../../../chunks/simplify-attributes-018c5a8d.js";function R(n){return{c:l,l,m:l,p:l,i:l,o:l,d:l}}function W(n){let e,r;return e=new E({props:{content:n[2],"data-cy":"event-history-json"}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,i){$(e,t,i),r=!0},p:l,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function x(n){let e,r;return e=new L({}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,i){$(e,t,i),r=!0},p:l,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function B(n){let e,r,t,i;e=new P({props:{title:`Workflow History | ${n[1]}`,url:n[0].url.href}});let a={ctx:n,current:null,token:null,hasCatch:!1,pending:x,then:W,catch:R,value:2,blocks:[,,,]};return v(n[2],a),{c(){f(e.$$.fragment),r=I(),t=g(),a.block.c()},l(o){u(e.$$.fragment,o),r=C(o),t=g(),a.block.l(o)},m(o,s){$(e,o,s),k(o,r,s),k(o,t,s),a.block.m(o,a.anchor=s),a.mount=()=>t.parentNode,a.anchor=t,i=!0},p(o,[s]){n=o;const m={};s&1&&(m.url=n[0].url.href),e.$set(m),j(a,n,s)},i(o){i||(c(e.$$.fragment,o),c(a.block),i=!0)},o(o){p(e.$$.fragment,o);for(let s=0;s<3;s+=1){const m=a.blocks[s];p(m)}i=!1},d(o){_(e,o),o&&b(r),o&&b(t),a.block.d(o),a.token=null,a=null}}}function F(n,e,r){let t;S(n,q,m=>r(0,t=m));const{namespace:i,workflow:a,run:o}=t.params,s=N({namespace:d(i),workflowId:d(a),runId:d(o),sort:"ascending"});return[t,a,s]}class H extends w{constructor(e){super(),h(this,e,F,B,y,{})}}function J(n){let e,r;return e=new H({}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,i){$(e,t,i),r=!0},p:l,i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}class ut extends w{constructor(e){super(),h(this,e,null,J,y,{})}}export{ut as default};