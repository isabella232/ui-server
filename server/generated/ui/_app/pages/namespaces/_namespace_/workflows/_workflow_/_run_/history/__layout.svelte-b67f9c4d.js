import{S as ke,i as ye,s as Ie,e as _,t as D,k as I,w as F,c as $,a as h,h as O,d as c,m as C,x as L,b as E,g as P,Q as l,y as R,a2 as Ce,aQ as Se,q as W,o as x,B as j,l as he,I as Te,v as Ae,aK as Ne,f as ve,L as De,M as Oe,N as Ve,O as Pe,aR as He,aS as We,aT as xe,aU as Fe}from"../../../../../../../chunks/vendor-65a13680.js";import{a as Le}from"../../../../../../../chunks/events-service-514a5eb8.js";import{f as Re,d as z}from"../../../../../../../chunks/route-for-c9edcdb4.js";import{i as je}from"../../../../../../../chunks/index-13ed84a3.js";import{T as Je,a as ee}from"../../../../../../../chunks/toggle-buttons-697d7d3a.js";import{C as we}from"../../../../../../../chunks/code-block-42e1c65a.js";import{p as Me}from"../../../../../../../chunks/stores-5dcfac01.js";import{f as qe}from"../../../../../../../chunks/format-date-46453f38.js";import{L as Be}from"../../../../../../../chunks/link-c28f589f.js";import"../../../../../../../chunks/route-for-api-c8a2395c.js";import"../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../chunks/notifications-866bf5f8.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../chunks/data-converter-config-66bb0804.js";import"../../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../../chunks/get-event-categorization-90555be0.js";import"../../../../../../../chunks/simplify-attributes-a375d023.js";const Ge=["WorkflowExecutionFailed","WorkflowExecutionCompleted","WorkflowExecutionContinuedAsNew","WorkflowExecutionTimedOut","WorkflowExecutionCanceled","WorkflowExecutionTerminated"],Qe=a=>{for(const e of Ge)if(a.eventType===e)return!0;return!1},Ke=a=>{for(const e of a)if(Qe(e))return e},Ue=a=>je(a)?a.attributes.result===null?null:a.attributes.result.payloads:a.attributes,ze=a=>{var n,u;let e,t;const s=a==null?void 0:a.find(m=>!!m.workflowExecutionStartedEventAttributes),i=Ke(a);return s&&(e=JSON.stringify((u=(n=s==null?void 0:s.workflowExecutionStartedEventAttributes)==null?void 0:n.input)==null?void 0:u.payloads)),i&&(t=JSON.stringify(Ue(i))),{input:e,result:t}};function Ee(a,e,t){const s=a.slice();return s[6]=e[t].id,s[7]=Ne(e[t],["id"]),s}function Xe(a){let e,t,s,i,n,u=[],m=new Map,v,o,r,p,k=a[0];const S=f=>f[6];for(let f=0;f<k.length;f+=1){let d=Ee(a,k,f),b=S(d);m.set(b,u[f]=be(b,d))}return r=new Be({props:{href:a[1],$$slots:{default:[Ye]},$$scope:{ctx:a}}}),{c(){e=_("section"),t=_("h3"),s=D("Pending Activities"),i=I(),n=_("section");for(let f=0;f<u.length;f+=1)u[f].c();v=I(),o=_("div"),F(r.$$.fragment),this.h()},l(f){e=$(f,"SECTION",{class:!0});var d=h(e);t=$(d,"H3",{class:!0});var b=h(t);s=O(b,"Pending Activities"),b.forEach(c),i=C(d),n=$(d,"SECTION",{class:!0});var T=h(n);for(let w=0;w<u.length;w+=1)u[w].l(T);T.forEach(c),v=C(d),o=$(d,"DIV",{class:!0});var N=h(o);L(r.$$.fragment,N),N.forEach(c),d.forEach(c),this.h()},h(){E(t,"class","text-lg font-medium mb-4"),E(n,"class","w-full table-auto space-x-4"),E(o,"class","text-right"),E(e,"class","border-2 border-gray-300 rounded-lg p-4")},m(f,d){P(f,e,d),l(e,t),l(t,s),l(e,i),l(e,n);for(let b=0;b<u.length;b+=1)u[b].m(n,null);l(e,v),l(e,o),R(r,o,null),p=!0},p(f,d){d&3&&(k=f[0],u=Ce(u,d,S,1,f,k,m,n,Se,be,null,Ee));const b={};d&1024&&(b.$$scope={dirty:d,ctx:f}),r.$set(b)},i(f){p||(W(r.$$.fragment,f),p=!0)},o(f){x(r.$$.fragment,f),p=!1},d(f){f&&c(e);for(let d=0;d<u.length;d+=1)u[d].d();j(r)}}}function be(a,e){let t,s,i=e[7].activityId+"",n,u,m,v,o,r,p,k,S,f=e[7].activityType+"",d,b,T,N,w,g,y,A,H,M=e[7].lastFailure+"",B,G,Q,J,K,te,se,U,le=qe(e[7].lastHeartbeatTime)+"",oe,ae;return{key:a,first:null,c(){t=_("a"),s=_("div"),n=D(i),u=I(),m=_("div"),v=_("div"),o=_("h4"),r=D("Activity Name"),p=I(),k=_("p"),S=_("span"),d=D(f),b=I(),T=_("div"),N=_("div"),w=_("h3"),g=D("Last Failure"),y=I(),A=_("pre"),H=_("code"),B=D(M),G=I(),Q=_("div"),J=_("div"),K=_("h4"),te=D("Last Heartbeat Time"),se=I(),U=_("p"),oe=D(le),ae=I(),this.h()},l(q){t=$(q,"A",{class:!0,href:!0});var V=h(t);s=$(V,"DIV",{class:!0});var ne=h(s);n=O(ne,i),ne.forEach(c),u=C(V),m=$(V,"DIV",{class:!0});var re=h(m);v=$(re,"DIV",{class:!0});var X=h(v);o=$(X,"H4",{});var ie=h(o);r=O(ie,"Activity Name"),ie.forEach(c),p=C(X),k=$(X,"P",{});var fe=h(k);S=$(fe,"SPAN",{class:!0});var ce=h(S);d=O(ce,f),ce.forEach(c),fe.forEach(c),X.forEach(c),re.forEach(c),b=C(V),T=$(V,"DIV",{class:!0});var ue=h(T);N=$(ue,"DIV",{class:!0});var Y=h(N);w=$(Y,"H3",{});var me=h(w);g=O(me,"Last Failure"),me.forEach(c),y=C(Y),A=$(Y,"PRE",{style:!0,class:!0});var de=h(A);H=$(de,"CODE",{class:!0});var pe=h(H);B=O(pe,M),pe.forEach(c),de.forEach(c),Y.forEach(c),ue.forEach(c),G=C(V),Q=$(V,"DIV",{class:!0});var ge=h(Q);J=$(ge,"DIV",{class:!0});var Z=h(J);K=$(Z,"H4",{});var _e=h(K);te=O(_e,"Last Heartbeat Time"),_e.forEach(c),se=C(Z),U=$(Z,"P",{});var $e=h(U);oe=O($e,le),$e.forEach(c),Z.forEach(c),ge.forEach(c),ae=C(V),V.forEach(c),this.h()},h(){E(s,"class","text-left font-normal text-gray-500 w-40"),E(S,"class","bg-gray-300 text-gray-700 px-2"),E(v,"class","flex gap-2"),E(m,"class","w-full"),E(H,"class","language-json"),ve(A,"padding","0 1em"),ve(A,"margin","0"),E(A,"class","rounded-lg"),E(N,"class","flex gap-2"),E(T,"class","w-full"),E(J,"class","flex gap-2"),E(Q,"class","w-full"),E(t,"class","flex content-between w-full border-b-2 border-gray-300 p-2 last-of-type:border-b-0 hover:bg-gray-50"),E(t,"href",e[1]),this.first=t},m(q,V){P(q,t,V),l(t,s),l(s,n),l(t,u),l(t,m),l(m,v),l(v,o),l(o,r),l(v,p),l(v,k),l(k,S),l(S,d),l(t,b),l(t,T),l(T,N),l(N,w),l(w,g),l(N,y),l(N,A),l(A,H),l(H,B),l(t,G),l(t,Q),l(Q,J),l(J,K),l(K,te),l(J,se),l(J,U),l(U,oe),l(t,ae)},p(q,V){e=q},d(q){q&&c(t)}}}function Ye(a){let e;return{c(){e=D("Show all")},l(t){e=O(t,"Show all")},m(t,s){P(t,e,s)},d(t){t&&c(e)}}}function Ze(a){let e,t,s=a[0].length&&Xe(a);return{c(){s&&s.c(),e=he()},l(i){s&&s.l(i),e=he()},m(i,n){s&&s.m(i,n),P(i,e,n),t=!0},p(i,[n]){i[0].length&&s.p(i,n)},i(i){t||(W(s),t=!0)},o(i){x(s),t=!1},d(i){s&&s.d(i),i&&c(e)}}}function et(a,e,t){let s;Te(a,Me,o=>t(2,s=o));const{pendingActivities:i}=s.stuff.workflow,{namespace:n,workflow:u,run:m}=s.params,v=Re({namespace:n,workflow:u,run:m});return Ae(()=>{window.Prism.highlightAll()}),[i,v]}class tt extends ke{constructor(e){super();ye(this,e,et,Ze,Ie,{})}}function st(a){let e;return{c(){e=D("Summary")},l(t){e=O(t,"Summary")},m(t,s){P(t,e,s)},d(t){t&&c(e)}}}function ot(a){let e;return{c(){e=D("Full")},l(t){e=O(t,"Full")},m(t,s){P(t,e,s)},d(t){t&&c(e)}}}function at(a){let e;return{c(){e=D("Compact")},l(t){e=O(t,"Compact")},m(t,s){P(t,e,s)},d(t){t&&c(e)}}}function lt(a){let e;return{c(){e=D("JSON")},l(t){e=O(t,"JSON")},m(t,s){P(t,e,s)},d(t){t&&c(e)}}}function nt(a){let e,t,s,i,n,u,m,v;return e=new ee({props:{icon:He,base:z(a[2]("summary")),href:z(a[2]("summary")),$$slots:{default:[st]},$$scope:{ctx:a}}}),s=new ee({props:{icon:We,href:z(a[2]("full")),$$slots:{default:[ot]},$$scope:{ctx:a}}}),n=new ee({props:{icon:xe,href:z(a[2]("compact")),$$slots:{default:[at]},$$scope:{ctx:a}}}),m=new ee({props:{icon:Fe,href:z(a[2]("json")),$$slots:{default:[lt]},$$scope:{ctx:a}}}),{c(){F(e.$$.fragment),t=I(),F(s.$$.fragment),i=I(),F(n.$$.fragment),u=I(),F(m.$$.fragment)},l(o){L(e.$$.fragment,o),t=C(o),L(s.$$.fragment,o),i=C(o),L(n.$$.fragment,o),u=C(o),L(m.$$.fragment,o)},m(o,r){R(e,o,r),P(o,t,r),R(s,o,r),P(o,i,r),R(n,o,r),P(o,u,r),R(m,o,r),v=!0},p(o,r){const p={};r&128&&(p.$$scope={dirty:r,ctx:o}),e.$set(p);const k={};r&128&&(k.$$scope={dirty:r,ctx:o}),s.$set(k);const S={};r&128&&(S.$$scope={dirty:r,ctx:o}),n.$set(S);const f={};r&128&&(f.$$scope={dirty:r,ctx:o}),m.$set(f)},i(o){v||(W(e.$$.fragment,o),W(s.$$.fragment,o),W(n.$$.fragment,o),W(m.$$.fragment,o),v=!0)},o(o){x(e.$$.fragment,o),x(s.$$.fragment,o),x(n.$$.fragment,o),x(m.$$.fragment,o),v=!1},d(o){j(e,o),o&&c(t),j(s,o),o&&c(i),j(n,o),o&&c(u),j(m,o)}}}function rt(a){let e,t,s,i,n,u,m,v,o,r,p,k,S,f,d,b,T;s=new we({props:{heading:"Input",content:a[0],framed:!0}}),n=new we({props:{heading:"Result",content:a[1],framed:!0}}),m=new tt({}),d=new Je({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}});const N=a[6].default,w=De(N,a,a[7],null);return{c(){e=_("section"),t=_("div"),F(s.$$.fragment),i=I(),F(n.$$.fragment),u=I(),F(m.$$.fragment),v=I(),o=_("section"),r=_("nav"),p=_("h3"),k=D("Recent Events"),S=I(),f=_("div"),F(d.$$.fragment),b=I(),w&&w.c(),this.h()},l(g){e=$(g,"SECTION",{class:!0});var y=h(e);t=$(y,"DIV",{class:!0});var A=h(t);L(s.$$.fragment,A),i=C(A),L(n.$$.fragment,A),A.forEach(c),u=C(y),L(m.$$.fragment,y),v=C(y),o=$(y,"SECTION",{id:!0});var H=h(o);r=$(H,"NAV",{class:!0});var M=h(r);p=$(M,"H3",{class:!0});var B=h(p);k=O(B,"Recent Events"),B.forEach(c),S=C(M),f=$(M,"DIV",{id:!0,class:!0});var G=h(f);L(d.$$.fragment,G),G.forEach(c),M.forEach(c),b=C(H),w&&w.l(H),H.forEach(c),y.forEach(c),this.h()},h(){E(t,"class","flex gap-4"),E(p,"class","text-lg font-medium"),E(f,"id","event-view-toggle"),E(f,"class","flex gap-4"),E(r,"class","flex gap-4 justify-between items-end pb-4"),E(o,"id","event-history"),E(e,"class","flex flex-col gap-4")},m(g,y){P(g,e,y),l(e,t),R(s,t,null),l(t,i),R(n,t,null),l(e,u),R(m,e,null),l(e,v),l(e,o),l(o,r),l(r,p),l(p,k),l(r,S),l(r,f),R(d,f,null),l(o,b),w&&w.m(o,null),T=!0},p(g,[y]){const A={};y&128&&(A.$$scope={dirty:y,ctx:g}),d.$set(A),w&&w.p&&(!T||y&128)&&Oe(w,N,g,g[7],T?Pe(N,g[7],y,null):Ve(g[7]),null)},i(g){T||(W(s.$$.fragment,g),W(n.$$.fragment,g),W(m.$$.fragment,g),W(d.$$.fragment,g),W(w,g),T=!0)},o(g){x(s.$$.fragment,g),x(n.$$.fragment,g),x(m.$$.fragment,g),x(d.$$.fragment,g),x(w,g),T=!1},d(g){g&&c(e),j(s),j(n),j(m),j(d),w&&w.d(g)}}}const St=async function({params:a,stuff:e,fetch:t}){const{workflow:s}=e,{namespace:i}=a,n={namespace:i,workflowId:s.id,runId:s.runId},{events:u,eventGroups:m}=await Le(n,t);return{props:{namespace:i,workflow:s,events:u,eventGroups:m},stuff:{events:u,eventGroups:m}}};function it(a,e,t){let{$$slots:s={},$$scope:i}=e,{namespace:n}=e,{workflow:u}=e,{events:m}=e;const{input:v,result:o}=ze(m),r=(p,k)=>({namespace:n,workflow:u.id,run:u.runId,view:p,eventId:k});return a.$$set=p=>{"namespace"in p&&t(3,n=p.namespace),"workflow"in p&&t(4,u=p.workflow),"events"in p&&t(5,m=p.events),"$$scope"in p&&t(7,i=p.$$scope)},[v,o,r,n,u,m,s,i]}class Tt extends ke{constructor(e){super();ye(this,e,it,rt,Ie,{namespace:3,workflow:4,events:5})}}export{Tt as default,St as load};