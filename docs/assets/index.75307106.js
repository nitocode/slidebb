import{u as J,r as m,o as P,a as x,c as T,b as e,t as f,n as g,d as fe,e as S,f as A,g as se,w as R,v as E,h as B,i as O,p as le,j as re,k as ge,l as be,m as ye,q as V,s as U,x as ue,y as we,z as xe,A as $e,B as Te,T as Ce,C as Le,D as Se,E as _e}from"./vendor.8c516fe7.js";const Re=function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=u(r);fetch(r.href,s)}};Re();var ce="/assets/afc-logo.6d5ae614.png";const ke={class:"text-center mx-4"},Ee=e("img",{class:"afc-logo mb-8 mx-auto",src:ce,alt:"A french couple Logo"},null,-1),He=["innerHTML"],Me={class:"divider w-1/2 max-w-full mx-auto"},Be={setup(t){const b=J(),u=m(!1),d=()=>{b.push({name:"form"})},r=()=>{b.push({name:"reveal"})};return P(()=>{setTimeout(()=>{u.value=!0},100)}),(s,v)=>(x(),T("div",ke,[Ee,e("h1",{class:g(["text-3xl sm:text-4xl lg:text-6xl dancing-script mb-10 opacity-0 transform transition duration-1000 font-bold",[{"opacity-100 ":u.value},u.value?"translate-y-0":"translate-y-3.5"]])},f(s.$t("home.title")),3),e("p",{class:g(["text-md lg:text-lg mb-2 opacity-0 transform transition duration-1000 delay-500",[{"opacity-100":u.value},u.value?"translate-y-0":"translate-y-3.5"]]),innerHTML:s.$t("home.guess")},null,10,He),e("p",{class:g(["text-md lg:text-lg opacity-0 transform transition duration-1000 delay-1000",[{"opacity-100":u.value},u.value?"translate-y-0":"translate-y-3.5"]])},f(s.$t("home.challenge")),3),e("button",{class:g(["mt-10 btn btn-primary rounded-full opacity-0 transform transition duration-1000 delay-2000 block mx-auto",[{"opacity-100":u.value},u.value?"translate-y-0":"translate-y-3.5"]]),onClick:v[0]||(v[0]=h=>d())},f(s.$t("home.cta")),3),e("div",Me,f(s.$t("home.or")),1),e("button",{class:g(["mt-4 btn btn-primary rounded-full opacity-0 transform transition duration-1000 delay-2000 block mx-auto",[{"opacity-100":u.value},u.value?"translate-y-0":"translate-y-3.5"]]),onClick:v[1]||(v[1]=h=>r())},f(s.$t("home.discover")),3)]))}};var G=(t,b)=>{for(const[u,d]of b)t[u]=d;return t};const Ne={class:"side-content-title side-content-title-ghost side-content-title-left"},Ge={class:"side-content-title-left-text"},De=["innerHTML"],Ie=["innerHTML"],Fe={class:"side-content-title side-content-title-left"},Pe=["innerHTML"],Ae=["innerHTML"],Oe={class:"side-content-title side-content-title-right"},Ve=["innerHTML"],Ue=["innerHTML"],We=["innerHTML"],qe=["innerHTML"],ze=["innerHTML"],je={props:{duration:Number,sideTitleLeft:String,sideSubtitleLeft:String,sideTextButtonLeft:String,sideTitleRight:String,sideSubtitleRight:String,sideTextButtonRight:String,forwardColor:String,reverseColor:String,breakPoint:Number,smoothMainContentTransition:Boolean},setup(t,{expose:b}){const u=t;P(()=>{window.addEventListener("resize",C)}),fe(()=>{window.removeEventListener("resize",C)});const d=m(!1),r=m(!1),s=m(!1),v=m(!1),h=()=>{r.value=!0,d.value=!d.value,setTimeout(()=>{r.value=!1},u.duration/2)},L=w=>{v.value=w},C=()=>{window.innerWidth<=u.breakPoint&&!s.value?s.value=!0:window.innerWidth>u.breakPoint&&s.value&&(s.value=!1)};return C(),b({switchSide:h,setCompleted:L}),(w,o)=>(x(),T("div",{class:g(["slidebb-container",[d.value?"slidebb-forward":"slidebb-reverse",{"slidebb-active":r.value},{"slidebb-container-responsive":s.value},{"slidebb-container-completed":v.value}]])},[e("div",{class:"side-content",style:S({transition:`left ${t.duration}ms ease-in-out, top ${t.duration}ms ease-in-out, transform ${t.duration}ms ease-in-out, background ${t.duration}ms ease-in-out, width ${t.duration}ms ease-in-out, height ${t.duration}ms ease-in-out`,backgroundColor:d.value?t.forwardColor:t.reverseColor})},[e("div",{class:"side-content-relative",style:S({transition:`opacity ${t.duration/2}ms ease-in-out`,transitionDelay:`${t.duration}ms`})},[e("div",Ne,[e("div",Ge,[e("h2",{innerHTML:t.sideTitleLeft},null,8,De),e("p",{innerHTML:t.sideSubtitleLeft},null,8,Ie)])]),e("div",Fe,[e("div",{class:"side-content-title-left-text",style:S({transition:`transform ${t.duration}ms ease-in-out, opacity ${t.duration/2.5}ms ease-in-out`})},[e("h2",{innerHTML:t.sideTitleLeft},null,8,Pe),e("p",{innerHTML:t.sideSubtitleLeft},null,8,Ae)],4)]),e("div",Oe,[e("div",{class:"side-content-title-right-text",style:S({transition:`transform ${t.duration}ms ease-in-out, opacity ${t.duration/2.5}ms ease-in-out`})},[e("h2",{innerHTML:t.sideTitleRight},null,8,Ve),e("p",{innerHTML:t.sideSubtitleRight},null,8,Ue)],4)]),e("button",{class:"side-content-text-button",onClick:o[0]||(o[0]=I=>h()),style:S({transition:`opacity ${t.duration/2}ms ease-in-out`})},[e("span",{innerHTML:t.sideTextButtonLeft,class:"side-content-text-button-ghost"},null,8,We),e("span",{class:"side-content-text-button-left",style:S({transition:`transform ${t.duration/2}ms ease-in-out, opacity ${t.duration/2}ms ease-in-out`,transitionDelay:`${d.value?0:t.duration/2}ms`}),innerHTML:t.sideTextButtonLeft},null,12,qe),e("span",{class:"side-content-text-button-right",style:S({transition:`transform ${t.duration/2}ms ease-in-out, opacity ${t.duration/2}ms ease-in-out`,transitionDelay:`${d.value?t.duration/2:0}ms`}),innerHTML:t.sideTextButtonRight},null,12,ze)],4),A(w.$slots,"sideRawContentForward",{},void 0,!0),A(w.$slots,"sideRawContentReverse",{},void 0,!0)],4)],4),e("div",{class:"main-content",style:S({transition:`left ${t.duration}ms ease-in-out, top ${t.duration}ms ease-in-out, transform ${t.duration}ms ease-in-out`})},[e("div",{class:g({"hidden-content":d.value}),style:S({transition:`opacity ${t.smoothMainContentTransition?t.duration/2:0}ms ease-in-out`,transitionDelay:`${t.duration/2}ms`})},[A(w.$slots,"mainRawContentReverse",{},void 0,!0)],6),e("div",{class:g({"hidden-content":!d.value}),style:S({transition:`opacity ${t.smoothMainContentTransition?t.duration/2:0}ms ease-in-out`,transitionDelay:`${t.duration/2}ms`})},[A(w.$slots,"mainRawContentForward",{},void 0,!0)],6)],4)],2))}};var Ye=G(je,[["__scopeId","data-v-f69716f8"]]);const Xe={class:"flex flex-col"},Je={class:"form-control"},Ke={class:"label"},Ze={class:"label-text"},Qe=["placeholder"],et={class:"form-control"},tt={class:"label"},nt={class:"label-text"},ot={class:"input-group input-group-md"},it={class:"form-control"},at={class:"label"},st={class:"label-text"},lt={class:"input-group input-group-md"},rt={class:"form-control"},ut={class:"label"},ct={class:"label-text"},dt={class:"mt-2 text-center text-xs"},de={props:{isGirlForm:Boolean,firstLetter:String},emits:["completed"],setup(t,{emit:b}){const u=t,{t:d}=se(),r=m(""),s=m(40),v=m(12),h=m(3),L=m(!1),C=m(""),w=a=>{let c="",p="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";for(let k=0;k<a;k++)c+=p.charAt(Math.floor(Math.random()*p.length));return c},o=a=>a.json?a.json():a,I=a=>a.status>=200&&a.status<300?a:o(a).then(c=>{throw c}),N=()=>{let a={babyName:r.value,height:Number(s.value),weight:Number(h.value),date:Number(v.value),isGirlForm:u.isGirlForm};try{if(!L.value){if(L.value=!0,setTimeout(()=>{L.value=!1},2e3),isNaN(a.height)||isNaN(a.weight)||isNaN(a.date)||a.height<35||a.weight<2||a.date<1||a.height>65||a.weight>5||a.date>31)throw new Error(d("form.error"));if(!new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,"g").test(a.babyName)||a.babyName.length<2||a.babyName.length>30)throw new Error(d("form.error"));a.code=w(8),console.log("voluntary uncaught error request done, just in case the server is in an OVH building :trollface:"),fetch("https://strapi-g6om.onrender.com/predictions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(I).then(o),b("completed",a)}}catch(c){console.error(c),C.value=c,setTimeout(()=>{C.value=""},3e3)}};return(a,c)=>(x(),T("div",Xe,[e("div",Je,[e("label",Ke,[e("span",Ze,f(a.$t("form.name")),1)]),R(e("input",{type:"text",placeholder:t.firstLetter?`${t.firstLetter}...`:"",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered"]),"onUpdate:modelValue":c[0]||(c[0]=p=>r.value=p)},null,10,Qe),[[E,r.value]])]),e("div",et,[e("label",tt,[e("span",nt,f(a.$t("form.height")),1)]),e("label",ot,[R(e("input",{id:"height",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered input-md w-full"]),type:"number","onUpdate:modelValue":c[1]||(c[1]=p=>s.value=p)},null,2),[[E,s.value]]),e("span",null,f(a.$t("form.heightUnit")),1)]),R(e("input",{type:"range",min:"35",max:"65","onUpdate:modelValue":c[2]||(c[2]=p=>s.value=p),class:"range range-info mt-2"},null,512),[[E,s.value]])]),e("div",it,[e("label",at,[e("span",st,f(a.$t("form.weight")),1)]),e("label",lt,[R(e("input",{id:"weight",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered input-md w-full"]),type:"number","onUpdate:modelValue":c[3]||(c[3]=p=>h.value=p)},null,2),[[E,h.value]]),e("span",null,f(a.$t("form.weightUnit")),1)]),R(e("input",{type:"range",min:"2",max:"5",step:"0.1","onUpdate:modelValue":c[4]||(c[4]=p=>h.value=p),class:"range range-info mt-2"},null,512),[[E,h.value]])]),e("div",rt,[e("label",ut,[e("span",ct,f(a.$t("form.birthDate")),1)]),R(e("input",{id:"day",class:g([t.isGirlForm?"input-secondary":"input-info","input input-sm input-bordered input-md w-full"]),type:"number","onUpdate:modelValue":c[5]||(c[5]=p=>v.value=p)},null,2),[[E,v.value]]),R(e("input",{type:"range",min:"1",max:"31","onUpdate:modelValue":c[6]||(c[6]=p=>v.value=p),class:"range range-info mt-2"},null,512),[[E,v.value]])]),e("button",{onClick:c[7]||(c[7]=p=>N()),class:g([t.isGirlForm?"btn-secondary":"btn-info","btn btn-outline rounded-full mt-6"])},f(a.$t("form.submit")),3),e("p",dt,f(C.value),1)]))}};const mt={setup(t){const b=J(),u=m(null),d=m(1e3),r=m(!1),s=m(!1);function v(h){u.value.setCompleted(!0),r.value=!0,setTimeout(()=>{s.value=!0,document.querySelector(".main-container").addEventListener("transitionend",()=>{b.push({name:"reveal",params:{isGirlForm:h.isGirlForm,code:h.code}})})},d.value*2)}return(h,L)=>(x(),T("div",{class:g(["main-container w-full transition-all",[{"transform  scale-up":s.value},{"form-completed":r.value}]]),style:S({transitionDuration:`${d.value}ms`})},[B(Ye,{class:"slidebb-component",ref:(C,w)=>{w.slideRef=C,u.value=C},duration:d.value,breakPoint:768,smoothMainContentTransition:!0,sideTitleLeft:h.$t("form.slidebb.sideTitleLeft"),sideSubtitleLeft:h.$t("form.slidebb.sideSubtitleLeft"),sideTextButtonLeft:h.$t("form.slidebb.sideTextButtonLeft"),sideTitleRight:h.$t("form.slidebb.sideTitleRight"),sideSubtitleRight:h.$t("form.slidebb.sideSubtitleRight"),sideTextButtonRight:h.$t("form.slidebb.sideTextButtonRight"),forwardColor:"#78ade0",reverseColor:"#dc8ec2"},{mainRawContentForward:O(()=>[B(de,{isGirlForm:!1,firstLetter:"L",onCompleted:v})]),mainRawContentReverse:O(()=>[B(de,{isGirlForm:!0,firstLetter:"T",onCompleted:v})]),_:1},8,["duration","sideTitleLeft","sideSubtitleLeft","sideTextButtonLeft","sideTitleRight","sideSubtitleRight","sideTextButtonRight"])],6))}};var vt=G(mt,[["__scopeId","data-v-046b0c64"]]),ht="/assets/instagram.5fb01313.svg",pt="/assets/twitter.8c953fc8.svg";const me=t=>(le("data-v-270b31a4"),t=t(),re(),t),ft={class:"circle-container"},gt=["innerHTML"],bt=me(()=>e("div",{class:"pulse-1"},null,-1)),yt=me(()=>e("div",{class:"pulse-2"},null,-1)),wt={props:{text:String},setup(t){return(b,u)=>(x(),T("div",ft,[e("div",{class:"circle-content",innerHTML:t.text},null,8,gt),bt,yt]))}};var xt=G(wt,[["__scopeId","data-v-270b31a4"]]);const D=t=>(le("data-v-3cc86240"),t=t(),re(),t),$t=D(()=>e("canvas",{class:"absolute w-full h-full z-10",id:"confetti"},null,-1)),Tt={class:"absolute w-full h-full z-0",id:"line"},Ct=["innerHTML"],Lt={key:1,class:"text-4xl lg:text-6xl"},St={key:2,class:"text-4xl lg:text-6xl"},_t={key:0},Rt=D(()=>e("br",null,null,-1)),kt={key:1},Et=D(()=>e("br",null,null,-1)),Ht=D(()=>e("img",{class:"afc-logo mb-8",src:ce,alt:"A french couple Logo"},null,-1)),Mt={class:"mb-4 text-lg lg:text-4xl font-bold"},Bt=["innerHTML"],Nt=["innerHTML"],Gt={key:2,class:"text-lg lg-text-4xl"},Dt={class:"mt-8 mb-2 text-lg lg:text-4xl font-bold"},It=D(()=>e("div",{class:"my-4 flex flex-row justify-center items-center"},[e("a",{class:"instagram-link",href:"https://www.instagram.com/a_french_couple/",target:"_blank"},[e("img",{src:ht,alt:"instagram logo"})]),e("a",{class:"twitter-link ml-6 mr-4",href:"https://twitter.com/afrenchcouple",target:"_blank"},[e("img",{src:pt,alt:"twitter logo"})])],-1)),Ft={class:"text-md lg-text-xl italic"},Pt={setup(t,{expose:b}){const{t:u}=se(),d=ge(),r=m(!0),s=[{colorName:"pink",colorHex:"#dc8ec2",colorsGroup:["#78ade0","#2d6ead"]},{colorName:"blue",colorHex:"#78ade0",colorsGroup:["#dc8ec2","#c24097"]},{colorName:"purple",colorHex:"#c91abe"},{colorName:"purple",colorHex:"#c91abe"}],v=s.filter(n=>{const l=r.value?"pink":"blue";return n.colorName===l})[0],h=m(null),L=m(!1),C=m(10),w=m(""),o=m(0),I=[{confettiColors:null},{confettiColors:null},{confettiColors:["#dc8ec2"]},{confettiColors:["#dc8ec2","#78ade0"]},{confettiColors:["#dc8ec2"]},{confettiColors:["#78ade0"]},{confettiColors:["#dc8ec2","#78ade0"]},{confettiColors:["#78ade0"]},{confettiColors:["#dc8ec2","#78ade0"]},{confettiColors:null},{confettiColors:null}],N=m(""),a=m(10),c=m(0),p=m(null),k=3*1e3;let K=Date.now()+k;const W=6*1e3;let Z=Date.now()+W;const _=m({x:0,y:0}),H=m({x:0,y:0}),q=n=>{setTimeout(()=>{o.value++,o.value>6&&(N.value=u("reveal.pulse.tap"))},n)},z=()=>{o.value===0?(o.value=1,q(6e3)):o.value>0&&o.value<=7?ee():o.value>7&&a.value>0&&ee(a.value)},M=(n,l)=>Math.random()*(l-n)+n,Q=()=>{const l=document.querySelector(".pulse-container").getBoundingClientRect();let i=l.x+l.width/2,y=l.y+l.height/2;const $=K-Date.now(),Y=Math.max(200,500*($/k));p.value({particleCount:1,startVelocity:0,ticks:Y,origin:{x:(i+M(-(l.width/2),l.width/2))/window.innerWidth,y:(y+M(-(l.height/2),l.height/2))/window.innerHeight},colors:[s[Math.round(M(0,3))].colorHex],gravity:M(.4,.6),scalar:M(.4,1),drift:M(-.4,.4)}),$>0&&requestAnimationFrame(Q)},ee=n=>{const i=document.querySelector(".pulse-container").getBoundingClientRect();let y=i.x+i.width/2,$=i.y+i.height/2;p.value({particleCount:50,startVelocity:30,spread:n!=null?60:360,angle:n!=null?360*n/10+90:0,origin:{x:y/window.innerWidth,y:$/window.innerHeight},colors:["#dc8ec2","#78ade0"]}),o.value===3||o.value===6?c.value>0?(c.value=0,o.value++,q(2e3)):c.value++:o.value===8&&(a.value--,a.value===0&&(o.value++,K=Date.now()+k,Q(),setTimeout(()=>{o.value++,ve()},k)))},te=n=>{o.value>=11&&p.value({particleCount:50,startVelocity:30,spread:360,angle:0,origin:{x:n.x/window.innerWidth,y:n.y/window.innerHeight},colors:v.colorsGroup})},ne=(n,l)=>{const i=document.getElementById("line");if(i.getContext){const y=i.getContext("2d");y.canvas.width=window.innerWidth,y.canvas.height=window.innerHeight,ae(y,[n,l],[n,l],"white",C.value)}L.value=!0,document.getElementById("confetti").addEventListener("touchmove",F(n,l)),document.getElementById("confetti").addEventListener("mousemove",F(n,l))},F=(n,l)=>i=>{const y=i.changedTouches?i.changedTouches[0].clientX:i.x,$=i.changedTouches?i.changedTouches[0].clientY:i.y;if(h.value.getContext){const Y=-(n/window.innerWidth-y/window.innerWidth),he=l/window.innerHeight-$/window.innerHeight,pe=Math.hypot(Y,he),X=h.value.getContext("2d");X.canvas.width=window.innerWidth,X.canvas.height=window.innerHeight,ae(X,[n,l],[y,$],"white",C.value-pe*C.value)}},oe=()=>{L.value=!1,document.getElementById("confetti").removeEventListener("pointermove",F),document.getElementById("confetti").removeEventListener("touchmove",F)},ve=()=>{const l=document.querySelector(".pulse-container").getBoundingClientRect();let i=l.x+l.width/2,y=l.y+l.height/2;setTimeout(()=>{p.value({particleCount:300,startVelocity:40,spread:360,angle:0,origin:{x:i/window.innerWidth,y:y/window.innerHeight},colors:v.colorsGroup}),Z=Date.now()+W,setTimeout(()=>{ie(),setTimeout(()=>{o.value++},W+500)},500)},200)},ie=()=>{p.value({particleCount:2,angle:60,spread:55,origin:{x:0},colors:v.colorsGroup}),p.value({particleCount:2,angle:120,spread:55,origin:{x:1},colors:v.colorsGroup}),Date.now()<Z&&requestAnimationFrame(ie)},j=()=>{const n=-(H.value.x-_.value.x),l=H.value.y-_.value.y,i=Math.atan2(l,n)*180/Math.PI,y=Math.hypot(n,l);console.log("angle:",i),console.log("distance:",y);const $=y*100;console.log("power",$),p.value({particleCount:1+y*100,startVelocity:$,spread:55,angle:i,origin:{x:_.value.x,y:_.value.y},colors:o.value>=10?[v.colorHex]:I[o.value].confettiColors}),$>15&&o.value===0?z():$>15&&(o.value===3||o.value===6)&&(c.value>0?(c.value=0,o.value++,q(2e3)):c.value++)},ae=(n,l,i,y="black",$=1)=>{y&&(n.strokeStyle=y),$&&(n.lineWidth=$),n.beginPath(),n.lineCap="round",n.shadowBlur=20,n.shadowColor="black",n.moveTo(...l),n.lineTo(...i),n.stroke()};return P(()=>{w.value=d.params.code||"",h.value=document.getElementById("line"),N.value=u("reveal.pulse.heartbeat");const n=document.getElementById("confetti");p.value=be(n,{resize:!0,useWorker:!0}),n.addEventListener("touchstart",i=>{console.log("Touch down event",i),_.value.x=i.changedTouches[0].clientX/window.innerWidth,_.value.y=i.changedTouches[0].clientY/window.innerHeight,ne(i.changedTouches[0].clientX,i.changedTouches[0].clientY),i.preventDefault()}),n.addEventListener("touchend",i=>{console.log("Touch up event",i),H.value.x=i.changedTouches[0].clientX/window.innerWidth,H.value.y=i.changedTouches[0].clientY/window.innerHeight,j(),oe(),i.preventDefault()}),n.addEventListener("mousedown",i=>{console.log("Mouse down event",i),_.value.x=i.x/window.innerWidth,_.value.y=i.y/window.innerHeight,ne(i.x,i.y)}),n.addEventListener("mouseup",i=>{console.log("Mouse up event",i),H.value.x=i.x/window.innerWidth,H.value.y=i.y/window.innerHeight,j(),oe()}),document.querySelector(".instruction-text").addEventListener("transitionend",()=>{(o.value===2||o.value===5)&&o.value++});const l=()=>{h.value.width=window.innerWidth,h.value.height=window.innerHeight};window.addEventListener("resize",l,!1)}),b({nextStepPulse:z,fire:j,pageClick:te}),(n,l)=>(x(),T("div",{class:g(["reveal-container relative h-full w-full flex justify-center items-center overflow-hidden",`reveal-container-${o.value}`]),onClick:l[1]||(l[1]=i=>te(i))},[$t,R(e("canvas",Tt,null,512),[[ye,L.value&&o.value<11]]),e("div",{class:g(["pulse-container relative",[{"pulse-container-aside":o.value>0&&o.value<8},{"pulse-container-girl":V(d).params.isGirlForm!=null&&V(d).params.isGirlForm==="true"},{"pulse-container-boy":V(d).params.isGirlForm!=null&&V(d).params.isGirlForm==="false"},{"pulse-container-charging":o.value===9},{"pulse-container-expanding":o.value>=10},o.value>=10||L.value?"z-0":"z-10"]])},[B(xt,{onClick:l[0]||(l[0]=i=>z()),text:N.value},null,8,["text"])],2),e("p",{class:g(["instruction-text dancing-script w-11/12 absolute top-1/2 left-1/2 opacity-0 transition-all ease-in-out z-0 text-2xl sm:text-4xl lg:text-6xl text-center",[{"opacity-100":o.value===1||o.value===4||o.value===7}]])},[o.value<3?(x(),T("span",{key:0,innerHTML:n.$t("reveal.instruction")},null,8,Ct)):U("",!0),o.value>=3&&o.value<6?(x(),T("span",Lt,f(n.$t("reveal.questionGirl")),1)):U("",!0),o.value>=6&&o.value<9?(x(),T("span",St,f(n.$t("reveal.questionBoy")),1)):U("",!0)],2),e("p",{class:g(["final-text dancing-script font-bold w-11/12 absolute top-1/2 left-1/2 opacity-0 transition-all delay-200 text-2xl sm:text-4xl lg:text-6xl text-center",{"opacity-100 text-xl lg:text-6xl":o.value>=10}])},[r.value?(x(),T("span",_t,[ue(f(n.$t("reveal.babyGirl")),1),Rt,e("span",{class:g(["text-xl lg:text-3xl font-normal transition duration-1000 delay-200 opacity-0",{"opacity-100":o.value<11}])},f(n.$t("reveal.babyGirlSubtitle")),3)])):(x(),T("span",kt,[ue(f(n.$t("reveal.babyBoy")),1),Et,e("span",{class:g(["text-xl lg:text-3xl font-normal transition duration-1000 delay-200 opacity-0",{"opacity-100":o.value<11}])},f(n.$t("reveal.babyBoySubtitle")),3)]))],2),e("div",{class:g(["thanks-container opacity-0 w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all text-center flex flex-col justify-center items-center",o.value>=11?"opacity-100 z-10":"z-0"])},[Ht,e("h1",Mt,f(n.$t("reveal.thanks.title")),1),w.value?(x(),T("p",{key:0,class:"mb-2 text-md lg-text-3xl",innerHTML:n.$t("reveal.thanks.giveCode")},null,8,Bt)):(x(),T("p",{key:1,class:"mb-2 text-md lg-text-3xl",innerHTML:n.$t("reveal.thanks.noCode")},null,8,Nt)),w.value?(x(),T("p",Gt,f(n.$t("reveal.thanks.myCode"))+" "+f(w.value?w.value:"N0CET54F"),1)):U("",!0),e("h2",Dt,f(n.$t("reveal.thanks.support")),1),It,e("p",Ft,f(n.$t("reveal.thanks.share")),1)],2)],2))}};var At=G(Pt,[["__scopeId","data-v-3cc86240"]]);const Ot=we({history:xe(),routes:[{name:"home",path:"/",component:Be},{name:"form",path:"/form",component:vt},{name:"reveal",path:"/reveal",component:At}]}),Vt={en:{home:{title:"We're having a baby!!!",guess:`Guess our future baby's gender, name, size and weight to discover at least the gender.<br><span class="italic text-sm lg:text-md">Expected birth date: March 12th 2022</span>`,challenge:"The closest person to the right answer may win a cool prize!",cta:"START GUESSING!",discover:"DISCOVER THE GENDER",or:"or"},form:{slidebb:{sideTitleLeft:"It's a girl",sideSubtitleLeft:"Oh you think it's gonna be a girl?",sideTextButtonLeft:"CHANGE FOR A BOY!",sideTitleRight:"It's a boy",sideSubtitleRight:"Oh you think it's gonna be a boy?",sideTextButtonRight:"CHANGE FOR A GIRL!"},error:"Invalid form",name:"Baby's name",height:"Height",heightUnit:"cm",weight:"Weight",weightUnit:"kg",birthDate:"Birth date",submit:"SEND"},reveal:{pulse:{heartbeat:"Baby's heartbeat",tap:"Tap to reveal<br>the gender"},instruction:"Drag and drop on the screen to discover our baby's&nbsp;gender...",questionBoy:"or a boy?",questionGirl:"Is it a girl...",babyGirl:"We're having a baby girl!!!",babyGirlSubtitle:"A beautiful blue smurfette",babyBoy:"We're having a baby boy!!!",babyBoySubtitle:"a Pink Floyd newcomer?",thanks:{title:"Thank you for participating!",noCode:"Hope you enjoy this little experience. You will be able to have your own one soon!",giveCode:`If you're a friend, co-worker or a family member, give us the code you just had<br class="hidden lg:block">&nbsp;so we can <span data-tip="This will NOT be saved on a database" class="tooltip tooltip-primary tooltip-bottom underline">identify</span> your prediction.`,myCode:"My code:",support:"Support us!",share:'"Share, like, follow, and see you tomorrow!"'}}},fr:{home:{title:"On va avoir un b\xE9b\xE9 !!!",guess:'Devine le genre, le pr\xE9nom, la taille et le poids de notre futur enfant pour d\xE9couvrir au moins son genre.<br><span class="italic text-sm lg:text-md">date pr\xE9vue du terme: 12 Mars 2022</span>',challenge:"La personne la plus proche de la bonne r\xE9ponse remportera peut \xEAtre un cadeau !",cta:"JE VEUX DEVINER !",discover:"D\xC9COUVRIR LE GENRE",or:"ou"},form:{slidebb:{sideTitleLeft:"C'est une fille",sideSubtitleLeft:"Tu penses que ce sera une fille ?",sideTextButtonLeft:"CHANGER POUR UN GAR\xC7ON",sideTitleRight:"C'est un gar\xE7on",sideSubtitleRight:"Tu penses que ce sera un gar\xE7on ?",sideTextButtonRight:"CHANGER POUR UNE FILLE"},error:"Formulaire invalide",name:"Pr\xE9nom du b\xE9b\xE9",height:"Taille",heightUnit:"cm",weight:"Poids",weightUnit:"kg",birthDate:"Jour de naissance",submit:"VALIDER"},reveal:{pulse:{heartbeat:"Baby's heartbeat",tap:"Touche pour<br>d\xE9couvrir le genre"},instruction:"Tire sur l'\xE9cran pour d\xE9couvrir le genre de notre b\xE9b\xE9...",questionBoy:"ou un gar\xE7on ?",questionGirl:"Est-ce une fille...",babyGirl:"On va avoir une petite fille !!!",babyGirlSubtitle:"Une belle schtroumpfette bleue",babyBoy:"On va avoir un petit gar\xE7on !!!",babyBoySubtitle:"un nouveau Pink Floyd ?",thanks:{title:"Merci d'avoir particip\xE9 !",noCode:"J'esp\xE8re que tu as aim\xE9 cette petite exp\xE9rience. Tu pourras avoir ta propre version bient\xF4t !",giveCode:`Si tu es un.e ami.e, coll\xE8gue ou membre de la famille, donne-nous ton code<br class="hidden lg:block">&nbsp;pour que l'on puisse <span data-tip="\xC7a ne sera PAS enregistr\xE9 dans une base de donn\xE9es" class="tooltip tooltip-primary tooltip-bottom underline">identifier</span> ta pr\xE9diction.`,myCode:"Mon code:",support:"Suis-nous sur les r\xE9seaux !",share:'"Share, like, follow, and see you tomorrow!"'}}}},Ut=$e({locale:navigator.language.indexOf("fr")!==-1?"fr":"en",fallbackLocale:"en",messages:Vt});const Wt={class:"h-screen w-screen flex justify-center items-center overflow-hidden"},qt={setup(t){const b=J();return P(()=>{let u=localStorage.getItem("path");u&&(localStorage.removeItem("path"),b.push(u))}),(u,d)=>{const r=Te("router-view");return x(),T("div",Wt,[B(r,null,{default:O(({Component:s})=>[B(Ce,{name:"fade",mode:"out-in"},{default:O(()=>[(x(),Le(Se(s)))]),_:2},1024)]),_:1})])}}};var zt=G(qt,[["__scopeId","data-v-f1801fc0"]]);const jt=_e(zt).use(Ot).use(Ut);jt.mount("#app");
