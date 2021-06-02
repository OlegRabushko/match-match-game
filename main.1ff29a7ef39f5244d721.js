(()=>{"use strict";var e={309:(e,t,n)=>{n.r(t)},95:(e,t,n)=>{n.r(t)},336:(e,t,n)=>{n.r(t)},802:(e,t,n)=>{n.r(t)},660:(e,t,n)=>{n.r(t)},148:(e,t,n)=>{n.r(t)},373:(e,t,n)=>{n.r(t)},366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.aboutPage=void 0;const a=n(271);n(309);const r=a.createElement("div","about__game__container"),o=a.createElement("div","about__game__inner",r);a.createElement("div","top-text",o);const s=a.createElement("div","steps__container",o);a.createElement("div","step__1",s,"Register new player in game"),a.createElement("div","step__1__img",s),a.createElement("div","step__2",s,"Configure your game settings"),a.createElement("div","step__2__img",s),a.createElement("div","step__3",s,"Start you new game! Remember card positions and match it before One minute!"),a.createElement("div","step__3__img",s),t.aboutPage=()=>r},186:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.scorePage=void 0;const a=n(935),r=n(955),o=n(271);n(95);const s=a.header.querySelector(".score__reference"),c=o.createElement("div","score"),i=o.createElement("div","score__container",c),l=o.createElement("div","score__info",i);t.scorePage=()=>c,s.onclick=()=>{r.getFullNoteForCreateElements(l)}},209:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.imgArray=void 0,t.imgArray=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"]},229:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stopGame=t.gamePage=void 0;const a=n(651),r=n(209),o=n(702),s=n(366),c=n(271);n(336);const i=7e3;let l=!0,d=[],m=8,u=0,_=0,p=!1;const v=c.createElement("div"),g=c.createElement("div","timer__container",v),b=c.createElement("div","timer",g,"00:00"),E=c.createElement("div","cards__field",v),f=c.createElement("div","start__stop__container",v),h=c.createElement("button","start__btn",f,"Start"),y=c.createElement("button","stop__btn",f,"Stop"),k=c.createElement("div","win__window",v),w=c.createElement("div","win__container",k);c.createElement("div","win__text-info",w,"WIN!");const L=c.createElement("div","win__time-info",w,"Time : 00:00"),S=c.createElement("button","win__btn",w,"Close"),M=c.createElement("div","fail__window",v),$=c.createElement("div","fail__container",M);c.createElement("div","fail__text-info",$,"FAIL!"),c.createElement("div","fail__img",$);const T=c.createElement("button","fail__btn",$,"Close"),x=(e,t,n)=>{E.style.gridTemplateColumns="1fr ".repeat(e),E.style.gridTemplateRows="1fr ".repeat(t),E.style.width=`${n}px`};t.gamePage=()=>v;const P=e=>{const t=r.imgArray.filter(((e,t)=>t<(()=>{const e=Number(localStorage.getItem("field"));switch(e){case 8:m=8,x(4,4,800);break;case 12:m=12,x(6,4,1200);break;case 18:m=18,x(6,6,850)}return e})()));E.innerHTML="",t.concat(t).sort((()=>Math.random()-.5)).forEach(((t,n)=>{const r=c.createElement("div","card__grid-container",E),o=c.createElement("div","card__container",r);c.createElement("div","card",o).innerHTML=`\n        <div class="card__front" style="content:url(https://raw.githubusercontent.com/OlegRabushko/images-for-match-match-game/master/images/${localStorage.getItem("pictures")}/${t}.png)"></div>\n        <div class="card__back"></div>\n      `;const s=E.querySelectorAll(".card__front");e&&(setTimeout((()=>{o.classList.add("pointerEnable")}),i),o.onclick=()=>{var e,r,c;l&&(e=o,r=t,c=s[n],d.push({element:e,div:c,count:r}),e.classList.toggle("flipped"),e.classList.remove("pointerEnable"),2===d.length&&(d[0].count===d[1].count?(l=!0,u++,m--,d.forEach((e=>{e.div.style.backgroundColor="rgb(49, 212, 136)",e.element.classList.remove("pointerEnable")}))):(_++,d.forEach((e=>{e.div.style.backgroundColor="crimson",e.element.classList.remove("pointerEnable"),l=!1,setTimeout((()=>{e.element.classList.add("pointerEnable"),e.element.classList.remove("flipped"),e.div.style.backgroundColor="rgb(211, 247, 235)",l=!0}),1e3)}))),d=[],0===m&&setTimeout((()=>{a.soundWin(),k.classList.add("show"),L.innerHTML=`Time: ${b.innerHTML}`}),1e3)))})}))};t.stopGame=()=>{p=!0,y.classList.remove("show"),m=8,u=0,_=0,d=[],P(!1),setTimeout((()=>{h.classList.remove("pointerDisable"),b.innerHTML="00:00"}),1e3)};h.onclick=()=>{a.soundClick(),p=!1,h.classList.add("pointerDisable"),y.classList.add("show"),P(!0),setTimeout((()=>{let e=0;const t=setInterval((()=>{!0===p&&clearInterval(t),e<59?(0===m&&clearInterval(t),e++,b.innerHTML=e<10?`00:0${e}`:`00:${e}`):0!==m&&(a.soundFail(),M.classList.add("show"),clearInterval(t))}),1e3)}),i),(()=>{const e=E.querySelectorAll(".card__container");setTimeout((()=>{e.forEach((e=>{e.classList.add("flipped")}))}),0),setTimeout((()=>{e.forEach((e=>{e.classList.remove("flipped")}))}),i)})()},y.onclick=()=>{a.soundClick(),t.stopGame()},S.onclick=()=>{a.soundClick(),k.classList.remove("show"),c.container.innerHTML="",c.container.append(s.aboutPage()),o.addStickyNote((()=>{const e=(100*(2*u-_)-(()=>{const e=b.innerHTML.split(":").pop();return 10*Number(e)})())*(u/2);return e>=0?e:0})()),t.stopGame()},T.onclick=()=>{a.soundClick(),M.classList.remove("show"),t.stopGame()}},935:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.footerBlock=t.headerBlock=t.avatarImg=t.scoreRef=t.matchRef=t.header=void 0;const a=n(651),r=n(271);n(802),t.header=r.createElement("header","header");const o=r.createElement("div","",t.header);t.matchRef=r.createElement("a","match__ref",o,null,"#game"),r.createElement("button","match__btn",t.matchRef,"match");const s=r.createElement("div","refs__block",t.header),c=r.createElement("a","",s,null,"#about"),i=r.createElement("div","about__game__ref",c);r.createElement("div","ico",i),r.createElement("div","text",i,"About Game"),t.scoreRef=r.createElement("a","score__reference",s,null,"#score");const l=r.createElement("div","score__ref",t.scoreRef);r.createElement("div","ico",l),r.createElement("div","text",l,"Best Score");const d=r.createElement("a","",s,null,"#setting"),m=r.createElement("div","settings__game__ref",d);r.createElement("div","ico",m),r.createElement("div","text",m,"Game Settings");const u=r.createElement("div","register__block",t.header),_=r.createElement("button","header__button",u,"register new player");t.avatarImg=r.createElement("div","avatar",u);const p=r.createElement("footer","footer"),v=r.createElement("div","footer__container",p);r.createElement("a","github",v,"Rabushko Oleg","https://github.com/OlegRabushko");const g=r.createElement("div","rss",v);r.createElement("span","rss-year",g,"'21"),t.headerBlock=()=>t.header,t.footerBlock=()=>p,_.onclick=()=>{a.soundClick(),r.modal.classList.add("show")}},955:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.getFullNoteForCreateElements=t.IndexDbStore=void 0;const a=window.indexedDB.open("olegrabushko-JSFE2021Q1",1);a.onupgradeneeded=e=>{n=e.target.result,n.createObjectStore("gamer",{autoIncrement:!0})},a.onsuccess=e=>{n=e.target.result},a.onerror=e=>{const{errorCode:t}=e.target;console.log(`error${t}`)},t.IndexDbStore=()=>n.transaction(["gamer"],"readwrite").objectStore("gamer"),t.getFullNoteForCreateElements=e=>{const n=[];t.IndexDbStore().openCursor().onsuccess=t=>{const a=t.target.result;if(e.innerHTML="",a)n.push({gamer:[a.value.name,a.value.img||"../../assets/avatar.svg",a.value.score,a.value.email]}),a.continue();else{let t=0;(e=>{const t=[],n=e.reduce(((e,t)=>(e[t.gamer[0]]=`${t.gamer[1]}||${t.gamer[2]}||${t.gamer[3]}`,e)),{});return Object.entries(n).forEach((e=>{t.push(`${e[0]}||${e[1]}`)})),t.map((e=>e.split("||"))).sort(((e,t)=>Number(e[2])-Number(t[2]))).reverse()})(n).forEach((n=>{t<10&&(t++,e.innerHTML+=`\n          <div class="gamer-info__container">\n            <div class="gamer-number">${t}.</div>\n            <div class="gamer-info">\n              <div class="gamer-img" style="content:\n              url(${n[1]})"></div>\n              <div class="gamer__text-info">\n                <div class="gamer-name">${n[0]}</div>\n                <div class="gamer-email">${n[3]}</div>\n              </div>\n            </div>\n            <div class="gamer-score">Score: <div class="score-number">${n[2]}</div></div>\n          </div>\n          `)}))}}}},702:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addStickyNote=t.openModalWindow=void 0;const a=n(651),r=n(271),o=n(955),s=n(366),c=n(935);n(660);const i=r.createElement("div","modal__container",r.modal);r.createElement("div","modal__top-text",i,"Register new Player");const l=r.createElement("div","form__block",i),d=r.createElement("form","form",l);r.createElement("div","input__label",d,"First Name");const m=r.createElement("input","name__input",d,null,null,"text");m.classList.add("inputs"),m.maxLength=30;const u=r.createElement("span","check__point",d,"iiii");r.createElement("div","input__label",d,"Last Name");const _=r.createElement("input","last-name__input",d,null,null,"text");_.classList.add("inputs"),_.maxLength=30;const p=r.createElement("span","check__point",d,"iiii");r.createElement("div","input__label",d,"Email");const v=r.createElement("input","email__input",d,null,null,"email");v.classList.add("inputs"),v.maxLength=30;const g=r.createElement("span","check__point",d,"iiii"),b=r.createElement("input","avatar__plus",l,null,null,"file"),E=r.createElement("div","avatar__inner",l),f=r.createElement("div","modal__btns",i),h=r.createElement("button","add__user__btn",f,"add user"),y=r.createElement("div","skin",f),k=r.createElement("button","cancel__btn",f,"cancel"),w=r.createElement("div","error__info",i);t.openModalWindow=()=>r.modal;const L=/^(?!\d+$)[^~!@#$%*()_—+=| :;"'`<>,.?/^]{1,30}$/i,S=/^(([^()~<>[\]\\.,;:\s@"]+(\.[^<>~()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;let M=[!1,!1,!1],$="";const T=()=>{m.value="",_.value="",v.value="",u.style.background="transparent",p.style.background="transparent",g.style.background="transparent"},x=(e,t,n,a,r)=>{n.test(e.value)?(t.style.background="linear-gradient(rgb(71, 255, 178), rgb(55, 211, 138))",w.innerHTML="",M[r]=!0):(t.style.background="linear-gradient(rgb(255, 80, 103), rgb(216, 16, 59))",w.innerHTML=a,M[r]=!1),""===e.value&&(t.style.background="transparent",w.innerHTML="",M[r]=!1),"truetruetrue"===M.join("")?y.style.display="none":y.style.display="block"};m.addEventListener("input",(()=>{x(m,u,L,'Incorrect Last Name. Must not be empty,must not contain only of numbers, must not contain symbols: <b style="color: #640818">[~! @ # $% * () _ - + = | :; "\'<>,.? / ^]</b> ',0)})),_.addEventListener("input",(()=>{x(_,p,L,'Incorrect Last Name. Must not be empty,must not contain only of numbers, must not contain symbols: <b style="color: #640818">[~! @ # $% * () _ - + = | :; "\'<>,.? / ^]</b> ',1)})),v.addEventListener("input",(()=>{x(v,g,S,'Incorrect Email. Should be like a <b style="color: #640818">simple123@example.com</b>',2)})),t.addStickyNote=e=>{var t;const n=null===(t=localStorage.getItem("gamer"))||void 0===t?void 0:t.split("||");if(!n)return;const a={name:`${n[0]} ${n[1]}`,score:e,email:n[2],img:n[3]};o.IndexDbStore().add(a)},h.onclick=()=>{var e;a.soundAddUserClick(),e=`${m.value}||${_.value}||${v.value}||${$}`,localStorage.setItem("gamer",`${e}`),(()=>{var e;const t=null===(e=localStorage.getItem("gamer"))||void 0===e?void 0:e.split("||");t&&(""!==t[3]?c.avatarImg.style.content=`url(${t[3]})`:c.avatarImg.style.content="")})(),T(),y.classList.add("show"),c.matchRef.classList.add("show"),c.avatarImg.classList.add("show"),r.modal.classList.remove("show"),r.container.innerHTML="",r.container.append(s.aboutPage()),M=[!1,!1,!1]},k.onclick=()=>{a.soundClick(),r.modal.classList.remove("show"),T()},b.addEventListener("change",(()=>{const e=b.files[0],t=new FileReader;t.onload=()=>{const e=new Image;e.src=t.result,$="",$=e.src,E.innerHTML="",E.style.content=`url(${e.src})`},t.readAsDataURL(e)}))},831:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.settingsPage=void 0;const a=n(651),r=n(271);n(148);const o=r.createElement("div","setting"),s=r.createElement("div","setting__container",o);r.createElement("div","setting__info",s,"Settings");const c=r.createElement("div","settings__block",s),i=r.createElement("div","cards__setting",c,"Game cards"),l=r.createElement("div","cards__setting__container",i),d=r.createElement("div","cards__setting__one",l,"4x4"),m=r.createElement("div","cards__setting__two",l,"6x4"),u=r.createElement("div","cards__setting__two",l,"6x6"),_=r.createElement("div","pictures__setting",c,"Picture set"),p=r.createElement("div","pictures__setting__container",_),v=r.createElement("div","pictures__setting__one",p,"Animals"),g=r.createElement("div","pictures__setting__two",p,"Fantasy");t.settingsPage=()=>(d.classList.add("backlight"),g.classList.add("backlight"),o);const b=(e,t)=>{a.soundClick(),e.classList.add("backlight"),t.forEach((e=>{e.classList.remove("backlight")}))},E=e=>{localStorage.setItem("field",e)},f=e=>{localStorage.setItem("pictures",e)};d.onclick=()=>{E("8"),b(d,[m,u])},m.onclick=()=>{E("12"),b(m,[d,u])},u.onclick=()=>{E("18"),b(u,[d,m])},v.onclick=()=>{f("animals"),b(v,[g])},g.onclick=()=>{f("fantasy"),b(g,[v])}},271:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modal=t.container=t.createElement=void 0,t.createElement=(e,t,n,a,r,o)=>{const s=document.createElement(e);return t&&s.classList.add(t),a&&(s.innerHTML=a),r&&(s.href=r),o&&(s.type=o),n&&(null==n||n.append(s)),s},t.container=t.createElement("div","container"),t.modal=t.createElement("div","modal-window")},651:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.soundFail=t.soundWin=t.soundAddUserClick=t.soundClick=void 0;const r=a(n(7)),o=a(n(856)),s=a(n(744)),c=a(n(605)),i=new Audio(r.default),l=new Audio(o.default),d=new Audio(c.default),m=new Audio(s.default);t.soundClick=()=>{i.play()},t.soundAddUserClick=()=>{l.play()},t.soundWin=()=>{d.play()},t.soundFail=()=>{m.play()}},856:(e,t,n)=>{e.exports=n.p+"assets/ed7d55e07f75bf940ebb.mp3"},7:(e,t,n)=>{e.exports=n.p+"assets/9f776e97fb460a2dada1.mp3"},744:(e,t,n)=>{e.exports=n.p+"assets/3d608555bb854fd609cc.mp3"},605:(e,t,n)=>{e.exports=n.p+"assets/7d2c81783f98d3243d8f.mp3"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=n(651),t=n(271),a=n(702),r=n(229),o=n(831),s=n(186),c=n(935),i=n(366);n(373),localStorage.setItem("field","8"),localStorage.setItem("pictures","fantasy");const l=[{name:"about",component:i.aboutPage()},{name:"score",component:s.scorePage()},{name:"setting",component:o.settingsPage()},{name:"game",component:r.gamePage()}];window.onload=()=>{document.body.prepend(c.headerBlock()),t.container.append(i.aboutPage()),document.body.append(t.container),document.body.append(c.footerBlock()),document.body.append(a.openModalWindow())},window.onpopstate=()=>{const n=window.location.hash.slice(1),a=l.find((e=>e.name===n));t.container.innerHTML="",t.container.append((a||l[0]).component),r.stopGame(),e.soundClick()}})()})();