import{S as L,i as O,s as Q,e as d,t as p,k as w,l as I,c as E,a as v,g as b,d as c,n as A,b as a,f as N,J as s,h as z,Q as J}from"./vendor-07bbbbe5.js";import{i as B}from"./is-network-error-ac7c8caf.js";function D(m){let e,l,u,f,o,h,C,n,i,S,T,_,g,j,y,x;return{c(){e=d("section"),l=d("h1"),u=p(m[0]),f=w(),o=d("p"),h=p("Uh oh. There's an error."),C=w(),n=d("p"),i=d("a"),S=p("Try a refresh"),T=p(`
    or
    `),_=d("a"),g=p("jump on our Slack Channel"),j=p("."),y=w(),x=I(),this.h()},l(t){e=E(t,"SECTION",{"aria-roledescription":!0,class:!0});var r=v(e);l=E(r,"H1",{class:!0});var P=v(l);u=b(P,m[0]),P.forEach(c),f=A(r),o=E(r,"P",{class:!0});var U=v(o);h=b(U,"Uh oh. There's an error."),U.forEach(c),C=A(r),n=E(r,"P",{class:!0});var k=v(n);i=E(k,"A",{href:!0,target:!0,class:!0});var q=v(i);S=b(q,"Try a refresh"),q.forEach(c),T=b(k,`
    or
    `),_=E(k,"A",{href:!0,class:!0});var H=v(_);g=b(H,"jump on our Slack Channel"),H.forEach(c),j=b(k,"."),k.forEach(c),r.forEach(c),y=A(t),x=I(),this.h()},h(){a(l,"class","text-[12rem] font-semibold "),a(o,"class","-mt-6 mb-5 text-lg"),a(i,"href",m[2]),a(i,"target","_self"),a(i,"class","underline-offset-2 underline"),a(_,"href","https://temporal.io/slack"),a(_,"class","underline-offset-2 underline"),a(n,"class","text-lg"),a(e,"aria-roledescription","error"),a(e,"class","text-center align-middle mt-32")},m(t,r){N(t,e,r),s(e,l),s(l,u),s(e,f),s(e,o),s(o,h),s(e,C),s(e,n),s(n,i),s(i,S),s(n,T),s(n,_),s(_,g),s(n,j),N(t,y,r),N(t,x,r)},p(t,[r]){r&1&&z(u,t[0]),r&4&&a(i,"href",t[2])},i:J,o:J,d(t){t&&c(e),t&&c(y),t&&c(x)}}}function F(m,e,l){let u,{error:f=null}=e,{status:o=500}=e;return B(f)&&(o=f.statusCode),m.$$set=h=>{"error"in h&&l(1,f=h.error),"status"in h&&l(0,o=h.status)},l(2,u=window.location.href),[o,f,u]}class M extends L{constructor(e){super();O(this,e,F,D,Q,{error:1,status:0})}}export{M as E};
