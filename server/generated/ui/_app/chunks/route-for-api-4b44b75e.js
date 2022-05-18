var S=Object.defineProperty;var _=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var $=(o,n,c)=>n in o?S(o,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[n]=c,l=(o,n)=>{for(var c in n||(n={}))q.call(n,c)&&$(o,c,n[c]);if(_)for(var c of _(n))x.call(n,c)&&$(o,c,n[c]);return o};import{w as C}from"./index-1910a742.js";import{n as E}from"./notifications-0d3ffac1.js";import{i as k}from"./is-network-error-ac7c8caf.js";import{c as g,t as F}from"./route-for-9a2d1abe.js";const P=!0,N=C(null),U=o=>{if(K(o)&&P){window.location.assign(g());return}if(b(o)&&P){window.location.assign(g());return}if(k(o))throw E.add("error",`${o.statusCode} ${o.statusText}`),N.set(o),o;typeof o=="string"&&E.add("error",o),o instanceof Error&&E.add("error",o.message)},K=o=>k(o)?o.statusCode===401:!1,b=o=>k(o)?o.statusCode===403:!1,D=o=>typeof o=="function",Y=o=>o.message!==void 0&&typeof o.message=="string",M=async(o,n={},c=10)=>{var T;const{params:u={},request:f=fetch,token:w,shouldRetry:h=!1,notifyOnError:V=!0,onError:d,retryInterval:v=5e3}=n;let{options:I}=n;const A=w?{next_page_token:w}:{},L=new URLSearchParams(l(l({},u),A)),R=F(o,L);try{I=j(I);const s=await f(R,I),i=await s.json(),{status:y,statusText:O}=s;if(!s.ok)if(d&&D(d))d({status:y,statusText:O,body:i});else throw{statusCode:s.status,statusText:s.statusText,response:s,message:(T=i==null?void 0:i.message)!=null?T:s.statusText};return i}catch(s){if(V){if(U(s),h&&c>0)return new Promise(i=>{setTimeout(()=>{i(M(o,n,c-1))},v)})}else throw s}},j=o=>{const n=l({credentials:"include"},o);return n.headers=B(o==null?void 0:o.headers),n},B=o=>{o||(o={});const n="_csrf=",c="X-CSRF-TOKEN";try{let f=document.cookie.split(";").find(w=>w.includes(n));f&&!o[c]&&(f=f.trim().slice(n.length),o[c]=f)}catch(u){console.error(u)}return o};let t="";t.endsWith("/")&&(t=t.slice(0,-1));const W=o=>(o.startsWith("/")&&(o=o.slice(1)),`${t}/api/v1/${o}`),z=o=>Object.keys(o!=null?o:{}).reduce((n,c)=>(n[c]=encodeURIComponent(encodeURIComponent(o[c])),n),{namespace:"",workflowId:"",runId:"",queue:""});function Z(o,n,c=!0){c&&(n=z(n));const u={cluster:"/cluster",settings:"/settings",user:"/me",namespaces:"/namespaces","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}`,"workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/terminate`,"events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events/reverse`,query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/query`};return W(u[o])}export{Z as a,P as b,Y as c,U as h,D as i,N as n,M as r};
