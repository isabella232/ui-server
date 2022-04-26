var g=Object.defineProperty;var I=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(t,r,s)=>r in t?g(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,i=(t,r)=>{for(var s in r||(r={}))v.call(r,s)&&p(t,s,r[s]);if(I)for(var s of I(r))y.call(r,s)&&p(t,s,r[s]);return t};import{w as A}from"./index-4543480f.js";import{n as f}from"./notifications-8c7f2caf.js";import{i as m}from"./is-network-error-ac7c8caf.js";import{c as L,t as R}from"./route-for-cefdc941.js";const O=!0,S=A(null),q=t=>{if(C(t)&&O){window.location.assign(L());return}if(x(t)){f.add("error",`${t.statusCode} ${t.statusText}`);return}if(m(t))throw f.add("error",`${t.statusCode} ${t.statusText}`),S.set(t),t;typeof t=="string"&&f.add("error",t),t instanceof Error&&f.add("error",t.message)},C=t=>m(t)?t.statusCode===401:!1,x=t=>m(t)?t.statusCode===403:!1,F=t=>typeof t=="function",H=t=>t.message!==void 0&&typeof t.message=="string",b=async(t,r={},s=10)=>{const{params:n={},request:a=fetch,token:o,shouldRetry:E=!1,notifyOnError:k=!0,onError:l,retryInterval:T=5e3}=r;let{options:c}=r;const $=o?{next_page_token:o}:{},_=new URLSearchParams(i(i({},n),$)),P=R(t,_);try{c=N(c);const e=await a(P,c),u=await e.json(),{status:h,statusText:V}=e;if(!e.ok)if(l&&F(l))l({status:h,statusText:V,body:u});else throw{statusCode:e.status,statusText:e.statusText,response:e};return u}catch(e){if(k){if(q(e),E&&s>0)return new Promise(u=>{setTimeout(()=>{u(b(t,r,s-1))},T)})}else throw e}},N=t=>{const r=i({credentials:"include"},t);return r.headers=U(t==null?void 0:t.headers),r},U=t=>{t||(t={});const r="_csrf=",s="X-CSRF-TOKEN";try{let a=document.cookie.split(";").find(o=>o.includes(r));a&&!t[s]&&(a=a.trim().slice(r.length),t[s]=a)}catch(n){console.error(n)}return t};let w="";w.endsWith("/")&&(w=w.slice(0,-1));const K=t=>t.split("/").map(r=>encodeURIComponent(r)).join("/"),D=t=>(t.startsWith("/")&&(t=t.slice(1)),`${w}/api/v1/${K(t)}`);function X(t,r){const s=Object.keys(r!=null?r:{}).reduce((a,o)=>(a[o]=encodeURIComponent(r[o]),a),{namespace:"",workflowId:"",runId:"",queue:""}),n={cluster:"/cluster",settings:"/settings",user:"/me",namespaces:"/namespaces","task-queue":`/namespaces/${s==null?void 0:s.namespace}/task-queues/${s==null?void 0:s.queue}`,workflows:`/namespaces/${s==null?void 0:s.namespace}/workflows`,"workflows.archived":`/namespaces/${s==null?void 0:s.namespace}/workflows/archived`,workflow:`/namespaces/${s==null?void 0:s.namespace}/workflows/${s==null?void 0:s.workflowId}/runs/${s==null?void 0:s.runId}`,"workflow.terminate":`/namespaces/${s==null?void 0:s.namespace}/workflows/${s==null?void 0:s.workflowId}/runs/${s==null?void 0:s.runId}/terminate`,events:`/namespaces/${s==null?void 0:s.namespace}/workflows/${s==null?void 0:s.workflowId}/runs/${s==null?void 0:s.runId}/events`,"events.reverse":`/namespaces/${s==null?void 0:s.namespace}/workflows/${s==null?void 0:s.workflowId}/runs/${s==null?void 0:s.runId}/events/reverse`,query:`/namespaces/${s==null?void 0:s.namespace}/workflows/${s==null?void 0:s.workflowId}/runs/${s==null?void 0:s.runId}/query`};return D(n[t])}export{X as a,O as b,H as c,q as h,F as i,S as n,b as r};
