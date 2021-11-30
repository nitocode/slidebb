import{u as J,r as m,o as P,a as x,c as T,b as e,t as f,n as g,d as fe,e as S,f as A,g as se,w as k,v as H,h as B,i as W,p as le,j as re,k as ge,l as be,m as ye,q as O,s as U,x as ue,y as we,z as xe,A as $e,B as Te,T as Le,C as Ce,D as Se,E as _e}from"./vendor.8c516fe7.js";const ke=function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function c(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(l){if(l.ep)return;l.ep=!0;const r=c(l);fetch(l.href,r)}};ke();var ce="/assets/afc-logo.6d5ae614.png";const Re={class:"text-center mx-4"},He=e("img",{class:"afc-logo mb-8 mx-auto",src:ce,alt:"A french couple Logo"},null,-1),Me=["innerHTML"],Ee={setup(t){const y=J(),c=m(!1),d=()=>{y.push({name:"form"})};return P(()=>{setTimeout(()=>{c.value=!0},100)}),(l,r)=>(x(),T("div",Re,[He,e("h1",{class:g(["text-3xl sm:text-4xl lg:text-6xl dancing-script mb-10 opacity-0 transform transition duration-1000 font-bold",[{"opacity-100 ":c.value},c.value?"translate-y-0":"translate-y-3.5"]])},f(l.$t("home.title")),3),e("p",{class:g(["text-md lg:text-lg mb-2 opacity-0 transform transition duration-1000 delay-500",[{"opacity-100":c.value},c.value?"translate-y-0":"translate-y-3.5"]]),innerHTML:l.$t("home.guess")},null,10,Me),e("p",{class:g(["text-md lg:text-lg opacity-0 transform transition duration-1000 delay-1000",[{"opacity-100":c.value},c.value?"translate-y-0":"translate-y-3.5"]])},f(l.$t("home.challenge")),3),e("button",{class:g(["mt-10 btn btn-primary rounded-full opacity-0 transform transition duration-1000 delay-2000",[{"opacity-100":c.value},c.value?"translate-y-0":"translate-y-3.5"]]),onClick:r[0]||(r[0]=p=>d())},f(l.$t("home.cta")),3)]))}};var G=(t,y)=>{for(const[c,d]of y)t[c]=d;return t};const Be={class:"side-content-title side-content-title-ghost side-content-title-left"},Ne={class:"side-content-title-left-text"},Ge=["innerHTML"],Fe=["innerHTML"],Ie={class:"side-content-title side-content-title-left"},De=["innerHTML"],Pe=["innerHTML"],Ae={class:"side-content-title side-content-title-right"},We=["innerHTML"],Oe=["innerHTML"],Ue=["innerHTML"],Ve=["innerHTML"],qe=["innerHTML"],ze={props:{duration:Number,sideTitleLeft:String,sideSubtitleLeft:String,sideTextButtonLeft:String,sideTitleRight:String,sideSubtitleRight:String,sideTextButtonRight:String,forwardColor:String,reverseColor:String,breakPoint:Number,smoothMainContentTransition:Boolean},setup(t,{expose:y}){const c=t;P(()=>{window.addEventListener("resize",L)}),fe(()=>{window.removeEventListener("resize",L)});const d=m(!1),l=m(!1),r=m(!1),p=m(!1),h=()=>{l.value=!0,d.value=!d.value,setTimeout(()=>{l.value=!1},c.duration/2)},C=w=>{p.value=w},L=()=>{window.innerWidth<=c.breakPoint&&!r.value?r.value=!0:window.innerWidth>c.breakPoint&&r.value&&(r.value=!1)};return L(),y({switchSide:h,setCompleted:C}),(w,o)=>(x(),T("div",{class:g(["slidebb-container",[d.value?"slidebb-forward":"slidebb-reverse",{"slidebb-active":l.value},{"slidebb-container-responsive":r.value},{"slidebb-container-completed":p.value}]])},[e("div",{class:"side-content",style:S({transition:`left ${t.duration}ms ease-in-out, top ${t.duration}ms ease-in-out, transform ${t.duration}ms ease-in-out, background ${t.duration}ms ease-in-out, width ${t.duration}ms ease-in-out, height ${t.duration}ms ease-in-out`,backgroundColor:d.value?t.forwardColor:t.reverseColor})},[e("div",{class:"side-content-relative",style:S({transition:`opacity ${t.duration/2}ms ease-in-out`,transitionDelay:`${t.duration}ms`})},[e("div",Be,[e("div",Ne,[e("h2",{innerHTML:t.sideTitleLeft},null,8,Ge),e("p",{innerHTML:t.sideSubtitleLeft},null,8,Fe)])]),e("div",Ie,[e("div",{class:"side-content-title-left-text",style:S({transition:`transform ${t.duration}ms ease-in-out, opacity ${t.duration/2.5}ms ease-in-out`})},[e("h2",{innerHTML:t.sideTitleLeft},null,8,De),e("p",{innerHTML:t.sideSubtitleLeft},null,8,Pe)],4)]),e("div",Ae,[e("div",{class:"side-content-title-right-text",style:S({transition:`transform ${t.duration}ms ease-in-out, opacity ${t.duration/2.5}ms ease-in-out`})},[e("h2",{innerHTML:t.sideTitleRight},null,8,We),e("p",{innerHTML:t.sideSubtitleRight},null,8,Oe)],4)]),e("button",{class:"side-content-text-button",onClick:o[0]||(o[0]=I=>h()),style:S({transition:`opacity ${t.duration/2}ms ease-in-out`})},[e("span",{innerHTML:t.sideTextButtonLeft,class:"side-content-text-button-ghost"},null,8,Ue),e("span",{class:"side-content-text-button-left",style:S({transition:`transform ${t.duration/2}ms ease-in-out, opacity ${t.duration/2}ms ease-in-out`,transitionDelay:`${d.value?0:t.duration/2}ms`}),innerHTML:t.sideTextButtonLeft},null,12,Ve),e("span",{class:"side-content-text-button-right",style:S({transition:`transform ${t.duration/2}ms ease-in-out, opacity ${t.duration/2}ms ease-in-out`,transitionDelay:`${d.value?t.duration/2:0}ms`}),innerHTML:t.sideTextButtonRight},null,12,qe)],4),A(w.$slots,"sideRawContentForward",{},void 0,!0),A(w.$slots,"sideRawContentReverse",{},void 0,!0)],4)],4),e("div",{class:"main-content",style:S({transition:`left ${t.duration}ms ease-in-out, top ${t.duration}ms ease-in-out, transform ${t.duration}ms ease-in-out`})},[e("div",{class:g({"hidden-content":d.value}),style:S({transition:`opacity ${t.smoothMainContentTransition?t.duration/2:0}ms ease-in-out`,transitionDelay:`${t.duration/2}ms`})},[A(w.$slots,"mainRawContentReverse",{},void 0,!0)],6),e("div",{class:g({"hidden-content":!d.value}),style:S({transition:`opacity ${t.smoothMainContentTransition?t.duration/2:0}ms ease-in-out`,transitionDelay:`${t.duration/2}ms`})},[A(w.$slots,"mainRawContentForward",{},void 0,!0)],6)],4)],2))}};var je=G(ze,[["__scopeId","data-v-f69716f8"]]);const Ye={class:"flex flex-col"},Xe={class:"form-control"},Je={class:"label"},Ke={class:"label-text"},Ze=["placeholder"],Qe={class:"form-control"},et={class:"label"},tt={class:"label-text"},nt={class:"input-group input-group-md"},ot={class:"form-control"},it={class:"label"},at={class:"label-text"},st={class:"input-group input-group-md"},lt={class:"form-control"},rt={class:"label"},ut={class:"label-text"},ct={class:"mt-2 text-center text-xs"},de={props:{isGirlForm:Boolean,firstLetter:String},emits:["completed"],setup(t,{emit:y}){const c=t,{t:d}=se(),l=m(""),r=m(40),p=m(12),h=m(3),C=m(!1),L=m(""),w=a=>{let u="",v="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";for(let R=0;R<a;R++)u+=v.charAt(Math.floor(Math.random()*v.length));return u},o=a=>a.json?a.json():a,I=a=>a.status>=200&&a.status<300?a:o(a).then(u=>{throw u}),N=()=>{let a={babyName:l.value,height:Number(r.value),weight:Number(h.value),date:Number(p.value),isGirlForm:c.isGirlForm};try{if(!C.value){if(C.value=!0,setTimeout(()=>{C.value=!1},2e3),isNaN(a.height)||isNaN(a.weight)||isNaN(a.date)||a.height<35||a.weight<2||a.date<1||a.height>65||a.weight>5||a.date>31)throw new Error(d("form.error"));if(!new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,"g").test(a.babyName)||a.babyName.length<2||a.babyName.length>30)throw new Error(d("form.error"));a.code=w(8),console.log("voluntary uncaught error request done, just in case the server is in an OVH building :trollface:"),fetch("https://strapi-g6om.onrender.com/predictions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(I).then(o),y("completed",a)}}catch(u){console.error(u),L.value=u,setTimeout(()=>{L.value=""},3e3)}};return(a,u)=>(x(),T("div",Ye,[e("div",Xe,[e("label",Je,[e("span",Ke,f(a.$t("form.name")),1)]),k(e("input",{type:"text",placeholder:t.firstLetter?`${t.firstLetter}...`:"",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered"]),"onUpdate:modelValue":u[0]||(u[0]=v=>l.value=v)},null,10,Ze),[[H,l.value]])]),e("div",Qe,[e("label",et,[e("span",tt,f(a.$t("form.height")),1)]),e("label",nt,[k(e("input",{id:"height",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered input-md w-full"]),type:"number","onUpdate:modelValue":u[1]||(u[1]=v=>r.value=v)},null,2),[[H,r.value]]),e("span",null,f(a.$t("form.heightUnit")),1)]),k(e("input",{type:"range",min:"35",max:"65","onUpdate:modelValue":u[2]||(u[2]=v=>r.value=v),class:"range range-info mt-2"},null,512),[[H,r.value]])]),e("div",ot,[e("label",it,[e("span",at,f(a.$t("form.weight")),1)]),e("label",st,[k(e("input",{id:"weight",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered input-md w-full"]),type:"number","onUpdate:modelValue":u[3]||(u[3]=v=>h.value=v)},null,2),[[H,h.value]]),e("span",null,f(a.$t("form.weightUnit")),1)]),k(e("input",{type:"range",min:"2",max:"5",step:"0.1","onUpdate:modelValue":u[4]||(u[4]=v=>h.value=v),class:"range range-info mt-2"},null,512),[[H,h.value]])]),e("div",lt,[e("label",rt,[e("span",ut,f(a.$t("form.birthDate")),1)]),k(e("input",{id:"day",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered input-md w-full"]),type:"number","onUpdate:modelValue":u[5]||(u[5]=v=>p.value=v)},null,2),[[H,p.value]]),k(e("input",{type:"range",min:"1",max:"31","onUpdate:modelValue":u[6]||(u[6]=v=>p.value=v),class:"range range-info mt-2"},null,512),[[H,p.value]])]),e("button",{onClick:u[7]||(u[7]=v=>N()),class:g([t.isGirlForm?"btn-secondary":"btn-info","btn btn-outline rounded-full mt-6"])},f(a.$t("form.submit")),3),e("p",ct,f(L.value),1)]))}};const dt={setup(t){const y=J(),c=m(null),d=m(1e3),l=m(!1),r=m(!1);function p(h){c.value.setCompleted(!0),l.value=!0,setTimeout(()=>{r.value=!0,document.querySelector(".main-container").addEventListener("transitionend",()=>{y.push({name:"reveal",params:{isGirlForm:h.isGirlForm,code:h.code}})})},d.value*2)}return(h,C)=>(x(),T("div",{class:g(["main-container w-full transition-all",[{"transform  scale-up":r.value},{"form-completed":l.value}]]),style:S({transitionDuration:`${d.value}ms`})},[B(je,{class:"slidebb-component",ref:(L,w)=>{w.slideRef=L,c.value=L},duration:d.value,breakPoint:768,smoothMainContentTransition:!0,sideTitleLeft:h.$t("form.slidebb.sideTitleLeft"),sideSubtitleLeft:h.$t("form.slidebb.sideSubtitleLeft"),sideTextButtonLeft:h.$t("form.slidebb.sideTextButtonLeft"),sideTitleRight:h.$t("form.slidebb.sideTitleRight"),sideSubtitleRight:h.$t("form.slidebb.sideSubtitleRight"),sideTextButtonRight:h.$t("form.slidebb.sideTextButtonRight"),forwardColor:"#78ade0",reverseColor:"#dc8ec2"},{mainRawContentForward:W(()=>[B(de,{isGirlForm:!1,firstLetter:"L",onCompleted:p})]),mainRawContentReverse:W(()=>[B(de,{isGirlForm:!0,firstLetter:"T",onCompleted:p})]),_:1},8,["duration","sideTitleLeft","sideSubtitleLeft","sideTextButtonLeft","sideTitleRight","sideSubtitleRight","sideTextButtonRight"])],6))}};var mt=G(dt,[["__scopeId","data-v-046b0c64"]]),vt="/assets/instagram.5fb01313.svg",ht="/assets/twitter.8c953fc8.svg";const me=t=>(le("data-v-270b31a4"),t=t(),re(),t),pt={class:"circle-container"},ft=["innerHTML"],gt=me(()=>e("div",{class:"pulse-1"},null,-1)),bt=me(()=>e("div",{class:"pulse-2"},null,-1)),yt={props:{text:String},setup(t){return(y,c)=>(x(),T("div",pt,[e("div",{class:"circle-content",innerHTML:t.text},null,8,ft),gt,bt]))}};var wt=G(yt,[["__scopeId","data-v-270b31a4"]]);const F=t=>(le("data-v-3cc86240"),t=t(),re(),t),xt=F(()=>e("canvas",{class:"absolute w-full h-full z-10",id:"confetti"},null,-1)),$t={class:"absolute w-full h-full z-0",id:"line"},Tt=["innerHTML"],Lt={key:1,class:"text-4xl lg:text-6xl"},Ct={key:2,class:"text-4xl lg:text-6xl"},St={key:0},_t=F(()=>e("br",null,null,-1)),kt={key:1},Rt=F(()=>e("br",null,null,-1)),Ht=F(()=>e("img",{class:"afc-logo mb-8",src:ce,alt:"A french couple Logo"},null,-1)),Mt={class:"mb-4 text-lg lg:text-4xl font-bold"},Et=["innerHTML"],Bt=["innerHTML"],Nt={key:2,class:"text-lg lg-text-4xl"},Gt={class:"mt-8 mb-2 text-lg lg:text-4xl font-bold"},Ft=F(()=>e("div",{class:"my-4 flex flex-row justify-center items-center"},[e("a",{class:"instagram-link",href:"https://www.instagram.com/a_french_couple/",target:"_blank"},[e("img",{src:vt,alt:"instagram logo"})]),e("a",{class:"twitter-link ml-6 mr-4",href:"https://twitter.com/afrenchcouple",target:"_blank"},[e("img",{src:ht,alt:"twitter logo"})])],-1)),It={class:"text-md lg-text-xl italic"},Dt={setup(t,{expose:y}){const{t:c}=se(),d=ge(),l=m(!0),r=[{colorName:"pink",colorHex:"#dc8ec2",colorsGroup:["#78ade0","#2d6ead"]},{colorName:"blue",colorHex:"#78ade0",colorsGroup:["#dc8ec2","#c24097"]},{colorName:"purple",colorHex:"#c91abe"},{colorName:"purple",colorHex:"#c91abe"}],p=r.filter(n=>{const s=l.value?"pink":"blue";return n.colorName===s})[0],h=m(null),C=m(!1),L=m(10),w=m(""),o=m(0),I=[{confettiColors:null},{confettiColors:null},{confettiColors:["#dc8ec2"]},{confettiColors:["#dc8ec2","#78ade0"]},{confettiColors:["#dc8ec2"]},{confettiColors:["#78ade0"]},{confettiColors:["#dc8ec2","#78ade0"]},{confettiColors:["#78ade0"]},{confettiColors:["#dc8ec2","#78ade0"]},{confettiColors:null},{confettiColors:null}],N=m(""),a=m(10),u=m(0),v=m(null),R=3*1e3;let K=Date.now()+R;const V=6*1e3;let Z=Date.now()+V;const _=m({x:0,y:0}),M=m({x:0,y:0}),q=n=>{setTimeout(()=>{o.value++,o.value>6&&(N.value=c("reveal.pulse.tap"))},n)},z=()=>{o.value===0?(o.value=1,q(6e3)):o.value>0&&o.value<=7?ee():o.value>7&&a.value>0&&ee(a.value)},E=(n,s)=>Math.random()*(s-n)+n,Q=()=>{const s=document.querySelector(".pulse-container").getBoundingClientRect();let i=s.x+s.width/2,b=s.y+s.height/2;const $=K-Date.now(),Y=Math.max(200,500*($/R));v.value({particleCount:1,startVelocity:0,ticks:Y,origin:{x:(i+E(-(s.width/2),s.width/2))/window.innerWidth,y:(b+E(-(s.height/2),s.height/2))/window.innerHeight},colors:[r[Math.round(E(0,3))].colorHex],gravity:E(.4,.6),scalar:E(.4,1),drift:E(-.4,.4)}),$>0&&requestAnimationFrame(Q)},ee=n=>{const i=document.querySelector(".pulse-container").getBoundingClientRect();let b=i.x+i.width/2,$=i.y+i.height/2;v.value({particleCount:50,startVelocity:30,spread:n!=null?60:360,angle:n!=null?360*n/10+90:0,origin:{x:b/window.innerWidth,y:$/window.innerHeight},colors:["#dc8ec2","#78ade0"]}),o.value===3||o.value===6?u.value>0?(u.value=0,o.value++,q(2e3)):u.value++:o.value===8&&(a.value--,a.value===0&&(o.value++,K=Date.now()+R,Q(),setTimeout(()=>{o.value++,ve()},R)))},te=n=>{o.value>=11&&v.value({particleCount:50,startVelocity:30,spread:360,angle:0,origin:{x:n.x/window.innerWidth,y:n.y/window.innerHeight},colors:p.colorsGroup})},ne=(n,s)=>{const i=document.getElementById("line");if(i.getContext){const b=i.getContext("2d");b.canvas.width=window.innerWidth,b.canvas.height=window.innerHeight,ae(b,[n,s],[n,s],"white",L.value)}C.value=!0,document.getElementById("confetti").addEventListener("touchmove",D(n,s)),document.getElementById("confetti").addEventListener("mousemove",D(n,s))},D=(n,s)=>i=>{const b=i.changedTouches?i.changedTouches[0].clientX:i.x,$=i.changedTouches?i.changedTouches[0].clientY:i.y;if(h.value.getContext){const Y=-(n/window.innerWidth-b/window.innerWidth),he=s/window.innerHeight-$/window.innerHeight,pe=Math.hypot(Y,he),X=h.value.getContext("2d");X.canvas.width=window.innerWidth,X.canvas.height=window.innerHeight,ae(X,[n,s],[b,$],"white",L.value-pe*L.value)}},oe=()=>{C.value=!1,document.getElementById("confetti").removeEventListener("pointermove",D),document.getElementById("confetti").removeEventListener("touchmove",D)},ve=()=>{const s=document.querySelector(".pulse-container").getBoundingClientRect();let i=s.x+s.width/2,b=s.y+s.height/2;setTimeout(()=>{v.value({particleCount:300,startVelocity:40,spread:360,angle:0,origin:{x:i/window.innerWidth,y:b/window.innerHeight},colors:p.colorsGroup}),Z=Date.now()+V,setTimeout(()=>{ie(),setTimeout(()=>{o.value++},V+500)},500)},200)},ie=()=>{v.value({particleCount:2,angle:60,spread:55,origin:{x:0},colors:p.colorsGroup}),v.value({particleCount:2,angle:120,spread:55,origin:{x:1},colors:p.colorsGroup}),Date.now()<Z&&requestAnimationFrame(ie)},j=()=>{const n=-(M.value.x-_.value.x),s=M.value.y-_.value.y,i=Math.atan2(s,n)*180/Math.PI,b=Math.hypot(n,s);console.log("angle:",i),console.log("distance:",b);const $=b*100;console.log("power",$),v.value({particleCount:1+b*100,startVelocity:$,spread:55,angle:i,origin:{x:_.value.x,y:_.value.y},colors:o.value>=10?[p.colorHex]:I[o.value].confettiColors}),$>15&&o.value===0?z():$>15&&(o.value===3||o.value===6)&&(u.value>0?(u.value=0,o.value++,q(2e3)):u.value++)},ae=(n,s,i,b="black",$=1)=>{b&&(n.strokeStyle=b),$&&(n.lineWidth=$),n.beginPath(),n.lineCap="round",n.shadowBlur=20,n.shadowColor="black",n.moveTo(...s),n.lineTo(...i),n.stroke()};return P(()=>{w.value=d.params.code||"",h.value=document.getElementById("line"),N.value=c("reveal.pulse.heartbeat");const n=document.getElementById("confetti");v.value=be(n,{resize:!0,useWorker:!0}),n.addEventListener("touchstart",i=>{console.log("Touch down event",i),_.value.x=i.changedTouches[0].clientX/window.innerWidth,_.value.y=i.changedTouches[0].clientY/window.innerHeight,ne(i.changedTouches[0].clientX,i.changedTouches[0].clientY),i.preventDefault()}),n.addEventListener("touchend",i=>{console.log("Touch up event",i),M.value.x=i.changedTouches[0].clientX/window.innerWidth,M.value.y=i.changedTouches[0].clientY/window.innerHeight,j(),oe(),i.preventDefault()}),n.addEventListener("mousedown",i=>{console.log("Mouse down event",i),_.value.x=i.x/window.innerWidth,_.value.y=i.y/window.innerHeight,ne(i.x,i.y)}),n.addEventListener("mouseup",i=>{console.log("Mouse up event",i),M.value.x=i.x/window.innerWidth,M.value.y=i.y/window.innerHeight,j(),oe()}),document.querySelector(".instruction-text").addEventListener("transitionend",()=>{(o.value===2||o.value===5)&&o.value++});const s=()=>{h.value.width=window.innerWidth,h.value.height=window.innerHeight};window.addEventListener("resize",s,!1)}),y({nextStepPulse:z,fire:j,pageClick:te}),(n,s)=>(x(),T("div",{class:g(["reveal-container relative h-full w-full flex justify-center items-center overflow-hidden",`reveal-container-${o.value}`]),onClick:s[1]||(s[1]=i=>te(i))},[xt,k(e("canvas",$t,null,512),[[ye,C.value&&o.value<11]]),e("div",{class:g(["pulse-container relative",[{"pulse-container-aside":o.value>0&&o.value<8},{"pulse-container-girl":O(d).params.isGirlForm!=null&&O(d).params.isGirlForm==="true"},{"pulse-container-boy":O(d).params.isGirlForm!=null&&O(d).params.isGirlForm==="false"},{"pulse-container-charging":o.value===9},{"pulse-container-expanding":o.value>=10},o.value>=10||C.value?"z-0":"z-10"]])},[B(wt,{onClick:s[0]||(s[0]=i=>z()),text:N.value},null,8,["text"])],2),e("p",{class:g(["instruction-text dancing-script w-11/12 absolute top-1/2 left-1/2 opacity-0 transition-all ease-in-out z-0 text-2xl sm:text-4xl lg:text-6xl text-center",[{"opacity-100":o.value===1||o.value===4||o.value===7}]])},[o.value<3?(x(),T("span",{key:0,innerHTML:n.$t("reveal.instruction")},null,8,Tt)):U("",!0),o.value>=3&&o.value<6?(x(),T("span",Lt,f(n.$t("reveal.questionGirl")),1)):U("",!0),o.value>=6&&o.value<9?(x(),T("span",Ct,f(n.$t("reveal.questionBoy")),1)):U("",!0)],2),e("p",{class:g(["final-text dancing-script font-bold w-11/12 absolute top-1/2 left-1/2 opacity-0 transition-all delay-200 text-2xl sm:text-4xl lg:text-6xl text-center",{"opacity-100 text-xl lg:text-6xl":o.value>=10}])},[l.value?(x(),T("span",St,[ue(f(n.$t("reveal.babyGirl")),1),_t,e("span",{class:g(["text-xl lg:text-3xl font-normal transition duration-1000 delay-200 opacity-0",{"opacity-100":o.value<11}])},f(n.$t("reveal.babyGirlSubtitle")),3)])):(x(),T("span",kt,[ue(f(n.$t("reveal.babyBoy")),1),Rt,e("span",{class:g(["text-xl lg:text-3xl font-normal transition duration-1000 delay-200 opacity-0",{"opacity-100":o.value<11}])},f(n.$t("reveal.babyBoySubtitle")),3)]))],2),e("div",{class:g(["thanks-container opacity-0 w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all text-center flex flex-col justify-center items-center",o.value>=11?"opacity-100 z-10":"z-0"])},[Ht,e("h1",Mt,f(n.$t("reveal.thanks.title")),1),w.value?(x(),T("p",{key:0,class:"mb-2 text-md lg-text-3xl",innerHTML:n.$t("reveal.thanks.giveCode")},null,8,Et)):(x(),T("p",{key:1,class:"mb-2 text-md lg-text-3xl",innerHTML:n.$t("reveal.thanks.noCode")},null,8,Bt)),w.value?(x(),T("p",Nt,f(n.$t("reveal.thanks.myCode"))+" "+f(w.value?w.value:"N0CET54F"),1)):U("",!0),e("h2",Gt,f(n.$t("reveal.thanks.support")),1),Ft,e("p",It,f(n.$t("reveal.thanks.share")),1)],2)],2))}};var Pt=G(Dt,[["__scopeId","data-v-3cc86240"]]);const At=we({history:xe(),routes:[{name:"home",path:"/",component:Ee},{name:"form",path:"/form",component:mt},{name:"reveal",path:"/reveal",component:Pt}]}),Wt={en:{home:{title:"We're having a baby!!!",guess:`Guess our future baby's gender, name, size and weight to discover at least the gender.<br><span class="italic text-sm lg:text-md">Expected birth date: March 12th 2022</span>`,challenge:"The closest person to the right answer may win a cool prize!",cta:"START GUESSING!"},form:{slidebb:{sideTitleLeft:"It's a girl",sideSubtitleLeft:"Oh you think it's gonna be a girl?",sideTextButtonLeft:"CHANGE FOR A BOY!",sideTitleRight:"It's a boy",sideSubtitleRight:"Oh you think it's gonna be a boy?",sideTextButtonRight:"CHANGE FOR A GIRL!"},error:"Invalid form",name:"Baby's name",height:"Height",heightUnit:"cm",weight:"Weight",weightUnit:"kg",birthDate:"Birth date",submit:"SEND"},reveal:{pulse:{heartbeat:"Baby's heartbeat",tap:"Tap to reveal<br>the gender"},instruction:"Drag and drop on the screen to discover our baby's&nbsp;gender...",questionBoy:"or a boy?",questionGirl:"Is it a girl...",babyGirl:"We're having a baby girl!!!",babyGirlSubtitle:"A beautiful blue smurfette",babyBoy:"We're having a baby boy!!!",babyBoySubtitle:"a Pink Floyd newcomer?",thanks:{title:"Thank you for participating!",noCode:"Hope you enjoy this little experience. You will be able to have your own one soon!",giveCode:`If you're a friend, co-worker or a family member, give us the code you just had<br class="hidden lg:block">&nbsp;so we can <span data-tip="This will NOT be saved on a database" class="tooltip tooltip-primary tooltip-bottom underline">identify</span> your prediction.`,myCode:"My code:",support:"Support us!",share:'"Share, like, follow, and see you tomorrow!"'}}},fr:{home:{title:"On va avoir un b\xE9b\xE9 !!!",guess:'Devine le genre, le pr\xE9nom, la taille et le poids de notre futur enfant pour d\xE9couvrir au moins son genre.<br><span class="italic text-sm lg:text-md">date pr\xE9vue du terme: 12 Mars 2022</span>',challenge:"La personne la plus proche de la bonne r\xE9ponse remportera peut \xEAtre un cadeau !",cta:"JE VEUX DEVINER !"},form:{slidebb:{sideTitleLeft:"C'est une fille",sideSubtitleLeft:"Tu penses que ce sera une fille ?",sideTextButtonLeft:"CHANGER POUR UN GAR\xC7ON",sideTitleRight:"C'est un gar\xE7on",sideSubtitleRight:"Tu penses que ce sera un gar\xE7on ?",sideTextButtonRight:"CHANGER POUR UNE FILLE"},error:"Formulaire invalide",name:"Pr\xE9nom du b\xE9b\xE9",height:"Taille",heightUnit:"cm",weight:"Poids",weightUnit:"kg",birthDate:"Jour de naissance",submit:"VALIDER"},reveal:{pulse:{heartbeat:"Baby's heartbeat",tap:"Touche pour<br>d\xE9couvrir le genre"},instruction:"Tire sur l'\xE9cran pour d\xE9couvrir le genre de notre b\xE9b\xE9...",questionBoy:"ou un gar\xE7on ?",questionGirl:"Est-ce une fille...",babyGirl:"On va avoir une petite fille !!!",babyGirlSubtitle:"Une belle schtroumpfette bleue",babyBoy:"On va avoir un petit gar\xE7on !!!",babyBoySubtitle:"un nouveau Pink Floyd ?",thanks:{title:"Merci d'avoir particip\xE9 !",noCode:"J'esp\xE8re que tu as aim\xE9 cette petite exp\xE9rience. Tu pourras avoir ta propre version bient\xF4t !",giveCode:`Si tu es un.e ami.e, coll\xE8gue ou membre de la famille, donne-nous ton code<br class="hidden lg:block">&nbsp;pour que l'on puisse <span data-tip="\xC7a ne sera PAS enregistr\xE9 dans une base de donn\xE9es" class="tooltip tooltip-primary tooltip-bottom underline">identifier</span> ta pr\xE9diction.`,myCode:"Mon code:",support:"Suis-nous sur les r\xE9seaux !",share:'"Share, like, follow, and see you tomorrow!"'}}}},Ot=$e({locale:navigator.language.indexOf("fr")!==-1?"fr":"en",fallbackLocale:"en",messages:Wt});const Ut={class:"h-screen w-screen flex justify-center items-center overflow-hidden"},Vt={setup(t){const y=J();return P(()=>{let c=localStorage.getItem("path");c&&(localStorage.removeItem("path"),y.push(c))}),(c,d)=>{const l=Te("router-view");return x(),T("div",Ut,[B(l,null,{default:W(({Component:r})=>[B(Le,{name:"fade",mode:"out-in"},{default:W(()=>[(x(),Ce(Se(r)))]),_:2},1024)]),_:1})])}}};var qt=G(Vt,[["__scopeId","data-v-f1801fc0"]]);const zt=_e(qt).use(At).use(Ot);zt.mount("#app");
