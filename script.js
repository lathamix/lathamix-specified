const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));

const audio=document.getElementById('audio');
const play=document.getElementById('play');
const progress=document.getElementById('progress');
const time=document.getElementById('time');
const bar=document.querySelector('.bar');
const durationLabel=document.getElementById('duration-label');
const fmt=s=>{s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
play?.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();play.textContent='❚❚';}catch(e){} }else{audio.pause();play.textContent='▶';}});
audio?.addEventListener('loadedmetadata',()=>{durationLabel.textContent=fmt(audio.duration);});
audio?.addEventListener('timeupdate',()=>{const pct=audio.duration?audio.currentTime/audio.duration*100:0;progress.style.width=pct+'%';time.textContent=fmt(audio.currentTime);});
audio?.addEventListener('ended',()=>{play.textContent='▶';progress.style.width='0%';time.textContent='0:00';});
bar?.addEventListener('click',e=>{if(!audio.duration)return;const r=bar.getBoundingClientRect();audio.currentTime=((e.clientX-r.left)/r.width)*audio.duration;});

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
