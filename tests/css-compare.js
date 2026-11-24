/* Compare two Custom CSS versions on a live page, in the browser console:
   window.__obT = { shaOld: '<commit>', shaNew: '<commit>' }; then paste this file and run: await __obT.run()
   Compiles squarespace/custom-css.css at both commits with LESS 1.7.5 (like Squarespace's editor), swaps each in
   for the site's own Custom CSS, and lists every element whose computed style differs (0 = looks the same). */
window.__obT = window.__obT || {};
Object.assign(__obT, {
 link: [...document.querySelectorAll('link[rel=stylesheet]')].find(l=>/custom-css/.test(l.href)),
 async load(){ if(window.__cssNew) return;
   const raw=sha=>fetch(`https://raw.githubusercontent.com/OppositeThings/ob-site/${sha}/squarespace/custom-css.css`).then(r=>r.text());
   const [a,b]=await Promise.all([raw(__obT.shaOld),raw(__obT.shaNew)]);
   if(!window.less) await new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/less.js/1.7.5/less.min.js';s.onload=res;s.onerror=rej;window.less={env:'production',logLevel:0};document.head.appendChild(s)});
   const comp=src=>new Promise((res,rej)=>new less.Parser().parse(src,(e,tree)=>e?rej(e):res(tree.toCSS())));
   window.__cssOld=await comp(a); window.__cssNew=await comp(b);},
 use(which){ let st=document.getElementById('obTestCSS');
   if(!st){st=document.createElement('style');st.id='obTestCSS';this.link.after(st);}
   if(which==='live'){this.link.disabled=false;st.textContent='';}
   else{this.link.disabled=true;st.textContent= which==='old'?__cssOld:__cssNew;} },
 snap(){ const skip=['SCRIPT','STYLE','LINK','META','NOSCRIPT','IFRAME'];
   const els=[document.documentElement,...document.querySelectorAll('body *')].filter(e=>!skip.includes(e.tagName)&&e.id!=='obTestCSS'&&!e.closest('svg, #obConfWarn'));
   const out=new Map();
   els.forEach(e=>{let all='';for(const ps of ['','::before','::after']){const cs=getComputedStyle(e,ps||null); if(ps&&cs.content==='none')continue; const o=[];for(let k=0;k<cs.length;k++){const p=cs[k]; if(p.startsWith('--'))continue; o.push(p+':'+cs.getPropertyValue(p));} all+=ps+'{'+o.join(';')+'}';} out.set(e,all);});
   return out; },
 diff(a,b){const d=[];for(const [e,s] of a){const t=b.get(e); if(t===undefined)continue; if(t!==s){const pa=s.split(';'),pb=t.split(';');const ch=[];for(let i=0;i<Math.max(pa.length,pb.length);i++)if(pa[i]!==pb[i])ch.push((pa[i]||'')+' => '+(pb[i]||'').split(':').slice(1).join(':'));const cn=typeof e.className==='string'?e.className:'';d.push((e.id?'#'+e.id+' ':'')+e.tagName+'.'+cn.slice(0,50)+' :: '+ch.slice(0,4).join(' | '));}}return d;},
 wait:ms=>new Promise(r=>setTimeout(r,ms)),
 async run(){ await this.load(); const W=this.wait;
   this.use('live'); await W(600); const l1=this.snap(); await W(400); const l2=this.snap();
   this.use('old'); await W(800); const o=this.snap();
   this.use('new'); await W(800); const n=this.snap(); await W(400); const n2=this.snap();
   this.use('old'); await W(800); const o2=this.snap();
   this.use('live');
   const noise=this.diff(l1,l2), lo=this.diff(l2,o), on=this.diff(o,n), on2=this.diff(o2,n2);
   return {w:innerWidth,url:location.pathname,els:l1.size,noise:noise.length,noiseS:noise.slice(0,3),liveVsOld:lo.length,liveVsOldS:lo.slice(0,6),oldVsNew:on.length,oldVsNew2:on2.length,oldVsNewS:on.slice(0,12),oldVsNew2S:on2.slice(0,6)}; }
});
