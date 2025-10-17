import{e,s as b}from"./utilities-B1GvWzLx.js";async function P(t,s){try{let r=function(h){return h?e(g+h):""},n=function(){const h=g+(a.avatars?.default||"assets/ui/default_avatar.png"),$=window.location.pathname.endsWith("audio.html"),j=`${g}audio.html?hero=${encodeURIComponent(t)}&skin=${encodeURIComponent(s)}`,y=a.audio_type||"standard",S={standard:"bg-gray-700 text-white",variant:"bg-blue-400 text-white",unique:"bg-amber-500 text-white"},_=e(y.charAt(0).toUpperCase()+y.slice(1));return`
      <div class="flex items-center justify-between mb-6 gap-12">
        <div class="flex items-center gap-4 w-full sm:w-auto">
          <img src="${e(h)}" alt="${e(l.name)}" class="w-20 h-20 rounded-full object-cover flex-shrink-0"/>
          <div class="flex flex-col">
            <div class="flex items-end gap-2 flex-wrap">
              <h3 class="text-xl font-bold text-text whitespace-nowrap">${e(l.name)}</h3>
              <span class="px-2 py-[2px] text-xs font-semibold rounded-full shadow-md ${S[y]||"bg-gray-600 text-white"} whitespace-nowrap">
                ${_}
              </span>
            </div>
            <p class="text-sm text-text-dull">${e(a.name)}</p>
          </div>
        </div>
        ${$?"":`<a href="${j}" class="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/80 transition self-start sm:self-auto whitespace-nowrap">Browse All Heroes →</a>`}
      </div>`},i=function(){return E.length?E.map(h=>`
        <div class="audio-item flex items-center gap-4 mb-4 transition w-full min-w-0 p-4">
          <button class="custom-play-btn w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg text-white hover:scale-105 transition-all shrink-0">
            <i class="fa-solid fa-play"></i>
          </button>
          <div class="flex flex-col w-full min-w-0">
            <p class="text-text font-bold truncate">${e(h.name)||"Unnamed Audio"}</p>
            <p class="text-text-dull text-sm truncate">${e(h.subtitle)||"..."}</p>
            <p class="text-text-dull text-xs italic truncate">${e(h.translation)||"..."}</p>
            <audio class="w-full max-w-full" src="${r(h.file)}" preload="none"></audio>
          </div>
        </div>
      `).join(""):'<p class="text-text-dull italic">No background audios found.</p>'},c=function(h,$,j){const y=Object.keys(h);if(!y.length)return`<p class="text-text-dull italic">No ${e($.toLowerCase())} found.</p>`;const S=y.map((w,D)=>`
        <button class="lang-tab hover:bg-primary px-3 py-1 rounded ${D===0?"bg-primary text-white":"bg-bg text-text"}" data-lang="${e(w)}" data-section="${e(j)}">
          ${e(w.replace("_"," ").charAt(0).toUpperCase()+w.slice(1))}
        </button>
      `).join(""),_=y.map((w,D)=>{const I=h[w],A=D===0?"":"hidden";return I.length?`<div id="${e(j)}-${e(w)}" class="lang-section ${A}">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${I.map(k=>`
              <div class="audio-item flex items-center gap-4 mb-4 transition w-full min-w-0">
                <button class="custom-play-btn w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg text-white hover:scale-105 transition-all shrink-0">
                  <i class="fa-solid fa-play"></i>
                </button>
                <div class="flex flex-col w-full min-w-0">
                  <p class="text-text font-bold truncate">${e(k.name)||"Unnamed Audio"}</p>
                  <p class="text-text-dull text-sm truncate">${e(k.subtitle)||"..."}</p>
                  <p class="text-text-dull text-xs italic truncate">${e(k.translation)||"..."}</p>
                  <audio class="w-full max-w-full" src="${r(k.file)}" preload="none"></audio>
                </div>
              </div>
            `).join("")}
          </div>
        </div>`:`<div id="${e(j)}-${e(w)}" class="lang-section ${A}">
            <p class="text-text-dull italic">No ${e(w)} audios found.</p>
          </div>`}).join("");return`
        <div class="languageTabs sticky top-0 bg-background z-10 py-4 flex gap-2 overflow-x-auto mb-3 text-text-dull border-b-2 border-dotted">${S}</div>
        <div class="languageSections">${_}</div>
      `};const g="/Luminara/",u=await fetch(`${g}data/heroes_index.json`),{heroes:p}=await u.json(),d=p.find(h=>h.name.toLowerCase()===t.toLowerCase());if(!d)return`<p class="text-red-400">Hero "${e(t)}" not found.</p>`;const l=await(await fetch(`${g}data/heroes/${d.details_file}`)).json(),m=Object.keys(l.skins).find(h=>h.toLowerCase()===s.toLowerCase());if(!m)return`<p class="text-red-400">Skin "${e(s)}" not found for "${e(t)}".</p>`;const a=l.skins[m],f=a.audio;async function x(h){if(!h)return null;try{const $=await fetch(g+h);return $.ok?await $.json():null}catch{return null}}const v=await x(f.hero_selection?.background),M=await x(f.hero_selection?.dialog),U=await x(f.in_game_dialog),G=await x(f.main_interface_dialog),E=v?.hero_selection?.background||[],O=M?.hero_selection?.dialog||{},z=U?.in_game_dialog||{},J=G?.main_interface_dialog||{};return`
      ${n()}
      <section class="space-y-8" id="audioContent">
        <div id="heroSelection" class="max-w-full overflow-hidden">
          <h2 class="text-2xl font-bold text-primary mb-4">Hero Selection</h2>
          <div id="heroSelectionBackground">
            <h3 class="text-lg font-semibold text-text mb-4">Background</h3>
            ${i()}
          </div>
          <div id="heroSelectionDialog" class="space-y-2">
            ${a.audio_type==="variant"?`<h3 class="text-lg font-semibold text-text mb-4">Dialog</h3>
                 <p class="text-text-dull italic">Hero Selection Dialog: Same as Standard</p>`:`<h3 class="text-lg font-semibold text-text mb-4">Dialog</h3>
                 <div class="max-h-[300px] overflow-y-auto scrollbar-thin-alt scrollbar-thumb-primary scrollbar-track-background px-4">
                   ${c(O,"Hero Selection Dialog","heroSelDialog")}
                 </div>`}
          </div>
        </div>
        <div class="w-full h-[2px] bg-primary mt-6"></div>
        <div id="inGameDialog">
          <h2 class="text-2xl font-bold text-primary mb-4">In-Game Dialog</h2>
          ${a.audio_type==="variant"?'<p class="text-text-dull italic">In-Game Dialog: Same as Standard</p>':`<div class="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin-alt scrollbar-thumb-primary scrollbar-track-background px-4">
                   ${c(z,"In Game Dialog","inGameDialog")}
                 </div>`}
        </div>
        <div class="w-full h-[2px] bg-primary mt-6"></div>
        <div id="mainInterfaceDialog">
          <h2 class="text-2xl font-bold text-primary mb-4">Main Interface Dialog</h2>
          ${a.audio_type==="variant"?'<p class="text-text-dull italic">Main Interface Dialog: Same as Standard</p>':`<div class="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin-alt scrollbar-thumb-primary scrollbar-track-background px-4">
                   ${c(J,"Main Interface Dialog","mainInterfaceDialog")}
                 </div>`}
        </div>
      </section>
    `}catch(r){return console.error("Audio preview error:",r),'<p class="text-red-400">Failed to load audio preview.</p>'}}async function H(t=3){const s="/Luminara/",r=await fetch(`${s}data/heroes_index.json`),{heroes:n}=await r.json(),c=n.slice(-t).reverse().map(async u=>{const d=await(await fetch(`${s}data/heroes/${e(u.details_file)}`)).json(),o=e(d.name||u.name),l=Object.entries(d.skins).map(([m,a])=>({name:e(a.name||m),image:b(s+(a.splash_art?.default||"")),link:b(s+(a.splash_art?.default||""))}));return{id:u.id,name:o,skins:l}});return`
    <div class="flex flex-col gap-6 w-full">

      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-text">Latest Splash Arts</h2>
        <a href="splashart.html"
           class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-md hover:bg-primary/80 transition-all duration-200">
          Browse Splash Arts
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
      </div>

      <!-- Hero List -->
      ${(await Promise.all(c)).map(u=>`
        <div class="mt-8">
          <h3 class="text-xl font-bold text-text mb-6">${u.name}</h3>
          <div class="flex flex-wrap justify-center gap-6">
            ${u.skins.map(p=>`
              <div class="flex flex-col items-center gap-2 group">
                <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="block">
                 <div class="relative w-[320px] h-[180px] rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]">
                    <img src="${p.image}"
                        alt="${p.name}"
                        class="w-full h-full object-cover object-center"
                        loading="lazy"/>

                    <!-- Softer, lower gradient (only bottom dark) -->
                   <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>

                  </div>

                </a>
                <span class="text-text text-sm text-center truncate w-[320px]">${p.name}</span>
              </div>
              `).join("")}
          </div>
          <div class="w-full h-[2px] bg-text-dull/40 mt-6"></div>
        </div>
      `).join("")}
    </div>
  `}async function F(t,s){const r=document.getElementById(t),n=document.getElementById(s);if(!r)return;const i="/Luminara/",c=await fetch(`${i}data/heroes_index.json`),{heroes:g}=await c.json(),u=g.map(async o=>{const m=await(await fetch(`${i}data/heroes/${e(o.details_file)}`)).json(),a=e(m.name||o.name),f=Object.entries(m.skins).map(([x,v])=>({name:e(v.name||x),image:b(i+(v.splash_art?.default||"")),link:b(i+(v.splash_art?.default||""))}));return{id:o.id,name:a,skins:f}}),p=await Promise.all(u),d=o=>{r.innerHTML=o.map(a=>`
        <div class="mt-8">
          <h3 class="text-xl font-bold text-text mb-8">${a.name}</h3>
          <div class="flex flex-wrap justify-center gap-4">
            ${a.skins.map(f=>`
              <div class="flex flex-col items-center gap-2">
                <a href="${f.link}" target="_blank" rel="noopener noreferrer">
                  <div class="relative w-[280px] h-[155px] rounded overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]">
                    <img data-src="${f.image}"
                         alt="${f.name}"
                         class="w-full h-full object-cover object-center transition-opacity duration-700 opacity-0"
                         loading="lazy"/>
                    <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                  </div>
                </a>
                <span class="text-text text-sm text-center">${f.name}</span>
              </div>
            `).join("")}
          </div>
          <div class="w-full h-[2px] bg-text-dull/40 mt-6"></div>
        </div>
      `).join("");const l=r.querySelectorAll("img[data-src]"),m=new IntersectionObserver((a,f)=>{a.forEach(x=>{if(!x.isIntersecting)return;const v=x.target;v.src=v.dataset.src,v.onload=()=>v.classList.remove("opacity-0"),f.unobserve(v)})},{rootMargin:"200px",threshold:.05});l.forEach(a=>m.observe(a))};d(p),n&&n.addEventListener("input",o=>{const l=o.target.value.toLowerCase(),m=p.filter(a=>a.name.toLowerCase().includes(l));d(m)})}async function q(t=3){const s="/Luminara/",r=await fetch(`${s}data/heroes_index.json`),{heroes:n}=await r.json(),c=n.slice(-t).reverse().map(async u=>{const d=await(await fetch(`${s}data/heroes/${u.details_file}`)).json();return{id:u.id,name:d.name||u.name,skins:Object.entries(d.skins).map(([o,l])=>({name:l.name||o,image:b(s+(l.portraits?.default||""))}))}}),g=await Promise.all(c);return`
      <div class="flex flex-col gap-6 w-full">

        <!-- Browse button -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-text">Latest Hero Portraits</h2>
          <a href="${s}portrait.html" 
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-md hover:bg-primary/80 transition-all duration-200">
            Browse Portraits
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>

        <!-- Heroes list -->
        ${g.map(u=>`
          <div class="mt-8">
            <h3 class="text-xl font-bold text-text mb-6">${e(u.name)}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-5">
              ${u.skins.map(p=>{const d=p.image;return`
                <div class="flex flex-col items-center gap-2 group">
                  <a href="${d}" target="_blank" rel="noopener noreferrer" class="block">
                    <div class="relative w-[128px] h-[220px] rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]">
                      <img src="${d}" 
                          alt="${e(p.name)}" 
                          class="w-full h-full object-cover object-center" 
                          loading="lazy"/>
                      <!-- subtle bottom-only gradient (small darkening) -->
                      <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                    </div>
                  </a>
                  <span class="text-text text-sm text-center truncate w-[128px]">${e(p.name)}</span>
                </div>
                `}).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `}async function N(t,s){const r=document.getElementById(t),n=document.getElementById(s);if(!r)return;const i="/Luminara/",c=await fetch(`${i}data/heroes_index.json`),{heroes:g}=await c.json(),u=g.map(async o=>{const m=await(await fetch(`${i}data/heroes/${o.details_file}`)).json();return{id:o.id,name:m.name||o.name,skins:Object.values(m.skins).map(a=>({name:a.name||"Skin",image:b(i+(a.portraits?.default||""))}))}}),p=await Promise.all(u);function d(o){r.innerHTML=o.map(m=>`
        <div>
          <h3 class="text-xl font-bold text-text mb-8">${e(m.name)}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-5">
            ${m.skins.map(a=>{const f=a.image;return`
              <div class="flex flex-col items-center gap-2 group">
                <a href="${f}" target="_blank" rel="noopener noreferrer">
                  <div class="relative w-[128px] h-[220px] rounded overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]">
                    <img data-src="${f}" 
                         alt="${e(a.name)}" 
                         class="w-full h-full object-cover object-center transition-opacity duration-700 opacity-0" 
                         loading="lazy"/>
                    <!-- subtle bottom-only gradient -->
                 <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                  </div>
                </a>
                <span class="text-text text-sm text-center">${e(a.name)}</span>
              </div>
              `}).join("")}
          </div>
        </div>
      `).join("");const l=r.querySelectorAll("img[data-src]");if(l.length>0){const m=new IntersectionObserver((a,f)=>{a.forEach(x=>{if(x.isIntersecting){const v=x.target;v.src=v.dataset.src,v.style.opacity="1",f.unobserve(v)}})},{rootMargin:"200px"});l.forEach(a=>m.observe(a))}}d(p),n&&n.addEventListener("input",o=>{const l=p.filter(m=>m.name.toLowerCase().includes(o.target.value.toLowerCase()));d(l)})}async function R(){try{const t="/Luminara/",r=await(await fetch(`${t}data/ui_assets.json`)).json(),i=await(await fetch(t+r.skin_borders)).json(),g=await(await fetch(t+r.emblems)).json(),u=i.skin_borders.map(o=>`
        <div class="flex flex-col items-center gap-2 group">
          <img 
            src="${b(t+o.src)}" 
            alt="${e(o.name)}" 
            class="w-[96px] h-[96px] object-contain rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200" />
          <span class="text-text text-sm text-center">${e(o.name)}</span>
        </div>
      `).join(""),p=g.emblems.map((o,l)=>`
        <div class="flex flex-col items-center gap-1 emblem-item cursor-pointer ${l===0?"active":""}">
          <img 
            src="${b(t+o.file)}" 
            alt="${e(o.name)}" 
            class="w-[56px] h-[56px] object-contain rounded-full shadow-sm transition-all duration-200 ${l===0?"border-2 border-primary":""}" />
          <span class="text-text text-xs text-center">${e(o.name)}</span>
        </div>
      `).join(""),d=`
      <div class="flex flex-col gap-8">

        <!-- Browse All UI Assets button -->
        <div class="flex justify-end">
            <a href="${t}ui_asset.html" 
                class="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/80 transition whitespace-nowrap">
                Browse All UI Assets →
            </a>
        </div>


        <!-- Skin Borders -->
        <div id="skin-borders">
          <h2 class="text-2xl font-bold text-primary mb-4">Skin Borders</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            ${u}
          </div>
        </div>

        <hr class="border-t border-text my-4" />

        <!-- Emblems -->
        <div id="emblems">
          <h2 class="text-2xl font-bold text-primary mb-4">Emblems</h2>
          <div id="emblemGrid" class="flex gap-4 flex-wrap">
            ${p}
          </div>
        </div>

        <!-- Talents -->
        <div id="talentDetails" class="mb-4">
          <div class="flex flex-row gap-12">
            <div class="flex flex-col gap-2">
              <h4 class="text-lg font-semibold text-text">Core</h4>
              <div id="coreTalents" class="flex flex-row gap-4 flex-wrap"></div>
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-lg font-semibold text-text">Standard</h4>
              <div id="standardTalents" class="flex flex-row gap-4 flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    `;return requestAnimationFrame(()=>{const o=document.getElementById("emblemGrid"),l=document.getElementById("coreTalents"),m=document.getElementById("standardTalents");if(!o||!l||!m)return;const a=f=>{l.innerHTML=f.core.map(x=>`
            <div class="flex flex-col items-center gap-1">
              <img src="${b(t+x.file)}" alt="${e(x.name)}" class="w-[48px] h-[48px] object-contain rounded-full" />
              <span class="text-xs text-text">${e(x.name)}</span>
            </div>
          `).join(""),m.innerHTML=f.standard.map(x=>`
            <div class="flex flex-col items-center gap-1">
              <img src="${b(t+x.file)}" alt="${e(x.name)}" class="w-[48px] h-[48px] object-contain rounded-full" />
              <span class="text-xs text-text">${e(x.name)}</span>
            </div>
          `).join("")};a(g.emblems[0]),o.querySelectorAll(".emblem-item").forEach((f,x)=>{f.addEventListener("click",()=>{o.querySelectorAll(".emblem-item img").forEach(v=>v.classList.remove("border-2","border-primary")),o.querySelectorAll(".emblem-item")[x].querySelector("img").classList.add("border-2","border-primary"),a(g.emblems[x])})})}),d}catch(t){return console.error("UI Preview Error:",t),'<p class="text-red-500">Failed to load UI preview.</p>'}}const B=document.getElementById("preview-content"),L=document.querySelectorAll("#category-list button"),C={audio:{data:P,link:"audio.html"},splashart:{data:H,link:"splashart.html"},portrait:{data:q,link:"portrait.html"},ui:{data:R,link:"ui_asset.html"}};async function T(t){if(!B)return;let s="";t==="portrait"?s=await q(3):t==="splashart"?s=await H(3):t==="audio"?s=await P("miya","moonlight_archer"):t==="ui"?s=await R():s=`
      <ul class="space-y-2 text-text text-left">
        ${C[t].data.slice(0,3).map(n=>`<li>• ${e(n.hero)}: ${e(n.sample||"")}</li>`).join("")}
      </ul>
      <div class="mt-4">
        <a href="${b(C[t].link)}"
           class="text-primary font-semibold hover:underline">
          See full ${e(t)}
        </a>
      </div>
    `,B.innerHTML=s,t==="audio"&&(K(),W())}function K(){document.querySelectorAll(".custom-play-btn").forEach(s=>{const r=s.closest(".audio-item");if(!r)return;const n=r.querySelector("audio"),i=s.querySelector("i");!n||!i||s.addEventListener("click",()=>{document.querySelectorAll(".audio-item audio").forEach(c=>{c!==n&&c.pause()}),document.querySelectorAll(".custom-play-btn i").forEach(c=>{c.classList.remove("fa-pause"),c.classList.add("fa-play")}),n.paused?(n.play(),i.classList.remove("fa-play"),i.classList.add("fa-pause")):(n.pause(),i.classList.remove("fa-pause"),i.classList.add("fa-play")),n.onended=()=>{i.classList.remove("fa-pause"),i.classList.add("fa-play")}})})}function W(){document.querySelectorAll(".languageTabs").forEach(s=>{const r=s.querySelectorAll(".lang-tab"),i=(s.closest(".dialogSection")||s.parentNode).querySelectorAll(".lang-section");r.forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.lang,u=c.dataset.section;r.forEach(d=>{d.classList.remove("bg-primary","text-white"),d.classList.add("bg-bg","text-text")}),c.classList.add("bg-primary","text-white"),i.forEach(d=>d.classList.add("hidden"));const p=document.getElementById(`${u}-${g}`);p&&p.classList.remove("hidden")})})})}(async()=>{if(L.length>0){L.forEach(i=>{i.classList.remove("bg-primary/20","font-semibold")});const n=document.querySelector('[data-category="audio"]');n&&n.classList.add("bg-primary/20","font-semibold","border-l-2","border-primary"),await T("audio"),L.forEach(i=>{i.addEventListener("click",async()=>{const c=i.dataset.category;L.forEach(g=>{g.classList.remove("bg-primary/20","font-semibold","border-l-2","border-primary"),g.classList.add("hover:bg-primary/10")}),i.classList.add("bg-primary/20","font-semibold","border-l-2","border-primary"),i.classList.remove("hover:bg-primary/10"),await T(c)})})}const t=document.getElementById("portraitsContainer"),s=document.getElementById("heroSearch");t&&s&&N("portraitsContainer","heroSearch"),document.getElementById("splashartsContainer")&&F("splashartsContainer","heroSearch")})();export{P as a,W as b,K as s};
