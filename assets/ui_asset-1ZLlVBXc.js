const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DQpLtAJc.js","assets/utilities-B1GvWzLx.js"])))=>i.map(i=>d[i]);
import{_ as y}from"./preload-helper-DatU6rzX.js";import{s as b,e as c}from"./utilities-B1GvWzLx.js";const g=document.getElementById("navbarContainer"),v=new URL("/Luminara/",document.baseURI).href,h=new URL("navbar.html",v).href;fetch(h).then(e=>e.text()).then(e=>{g.innerHTML=e,[...g.querySelectorAll(".nav-link, .mobile-nav-link"),...document.querySelectorAll(".bread-link"),...document.querySelectorAll(".logo-link")].forEach(a=>{a.dataset.path&&(a.href=v+a.dataset.path)}),y(()=>import("./main-DQpLtAJc.js"),__vite__mapDeps([0,1])).then(a=>a.initPage?.())}).catch(e=>console.error(e));async function L(e){const s="/Luminara/";return`
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-primary mb-2">Skin Borders</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        ${(await(await fetch(s+e.skin_borders)).json()).skin_borders.map(i=>`
      <div class="flex flex-col items-center gap-2 group">
        <img 
          src="${b(s+i.src)}" 
          alt="${c(i.name)}" 
          class="w-[96px] h-[96px] object-contain rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200" />
        <span class="text-text text-sm text-center">${c(i.name)}</span>
      </div>
    `).join("")}
      </div>
    </div>
  `}const w=Object.freeze(Object.defineProperty({__proto__:null,renderUI:L},Symbol.toStringTag,{value:"Module"}));async function T(e){const s="/Luminara/",d=await(await fetch(s+e.emblems)).json(),i=`
    <div class="flex flex-col gap-8">
      <h2 class="text-2xl font-bold text-text mb-4">Emblems</h2>

      <!-- Emblem Grid -->
      <div id="emblemGrid" class="flex justify-evenly gap-4 flex-wrap">
        ${d.emblems.map((n,m)=>`
      <div class="flex flex-col items-center gap-1 emblem-item cursor-pointer">
        <img 
          src="${b(s+n.file)}" 
          alt="${c(n.name)}" 
          class="w-[64px] h-[64px] object-contain rounded-full border-2 transition-all duration-200 
                 ${m===0?"border-primary scale-105":"border-transparent"} 
                 hover:border-primary hover:scale-105" />
        <span class="text-text text-xs text-center">${c(n.name)}</span>
      </div>
    `).join("")}
      </div>

      <hr class="border-t border-text my-4" />

      <!-- Talents Section -->
      <div id="talentDetails" class="mb-4">
        <h3 class="text-xl font-semibold text-text mb-4">Emblem Talents</h3>
        <div class="flex flex-wrap gap-8">
          <div id="coreTalents" class="flex flex-wrap gap-4"></div>
          <div id="standardTalents" class="flex flex-wrap gap-4"></div>
        </div>
      </div>
    </div>
  `;return requestAnimationFrame(()=>{const n=document.getElementById("emblemGrid"),m=document.getElementById("coreTalents"),t=document.getElementById("standardTalents"),l=p=>{m.innerHTML='<h4 class="w-full text-lg mb-2 text-text">Core</h4>'+(p.core||[]).map(o=>`
          <div class="flex flex-col items-center gap-1">
            <img src="${b(s+o.file)}" alt="${c(o.name)}" class="w-[48px] h-[48px] object-contain rounded-full" />
            <span class="text-xs text-text">${c(o.name)}</span>
          </div>`).join(""),t.innerHTML='<h4 class="w-full text-lg mb-2 text-text">Standard</h4>'+(p.standard||[]).map(o=>`
          <div class="flex flex-col items-center gap-1">
            <img src="${b(s+o.file)}" alt="${c(o.name)}" class="w-[48px] h-[48px] object-contain rounded-full" />
            <span class="text-xs text-text">${c(o.name)}</span>
          </div>`).join("")};let r=0;l(d.emblems[r]),n.querySelectorAll(".emblem-item").forEach((p,o)=>{p.addEventListener("click",()=>{if(r===o)return;const u=n.querySelectorAll("img")[r];u.classList.remove("border-primary","scale-105"),u.classList.add("border-transparent");const f=p.querySelector("img");f.classList.add("border-primary","scale-105"),f.classList.remove("border-transparent"),r=o,l(d.emblems[r])})})}),i}const $=Object.freeze(Object.defineProperty({__proto__:null,renderUI:T},Symbol.toStringTag,{value:"Module"}));document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("asset-list"),s=document.getElementById("assets-panel");try{const x=await(await fetch("/Luminara/data/ui_assets.json")).json(),i=[{key:"skin_borders",label:"Skin Borders",module:w},{key:"emblems",label:"Emblems",module:$}];e.innerHTML=i.map((t,l)=>`
        <button 
          data-category="${t.key}" 
          class="asset-btn w-full text-left px-3 py-2 rounded-md text-text transition hover:bg-primary/10 hover:text-primary
                 ${l===0?"bg-primary/20 font-semibold border-l-2 border-primary":""}"
        >
          ${t.label}
        </button>
      `).join("");const n=e.querySelectorAll(".asset-btn"),m=async t=>{const l=i.find(r=>r.key===t);if(l){s.innerHTML=`<p class="text-text animate-pulse">Loading ${t}...</p>`;try{const r=await l.module.renderUI(x);s.innerHTML=r}catch(r){console.error(r),s.innerHTML=`<p class="text-red-500">Failed to load ${t} preview.</p>`}}};n.forEach(t=>{t.addEventListener("click",async()=>{n.forEach(l=>{l.classList.remove("bg-primary/20","font-semibold","border-l-2","border-primary"),l.classList.add("hover:bg-primary/10")}),t.classList.add("bg-primary/20","font-semibold","border-l-2","border-primary"),t.classList.remove("hover:bg-primary/10"),await m(t.dataset.category)})}),n[0].click()}catch(a){console.error("UI Asset Preview Error:",a),e.innerHTML='<p class="text-red-500">Error loading asset list.</p>'}});
