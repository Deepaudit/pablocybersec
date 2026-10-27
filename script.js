(function(){
"use strict";
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
/* terminal: texto inserido via textContent, sem innerHTML com dados externos */
var T=document.getElementById("term"),L=[["$ whoami","c"],["pablo eliezer · CEO da PabloCyberSec","o"],["$ cat funcoes.txt","c"],["pentester · ethical hacking · red team","o"],["$ cat foco.txt","c"],["web · apis · active directory · aws","o"]];
function line(t,k){var d=document.createElement("div");d.className=k;d.textContent=t;return d}
function run(){var i=0,j=0,cur=document.createElement("span");cur.className="cur";var row;
function step(){if(i>=L.length){T.appendChild(cur);return}
if(!row||j===0){row=line("",L[i][1]);T.appendChild(row)}
row.textContent=L[i][0].slice(0,++j);row.appendChild(cur);
if(j>=L[i][0].length){i++;j=0;setTimeout(step,L[i-1][1]==="c"?350:600)}else setTimeout(step,L[i][1]==="c"?55:18)}
step()}
if(rm){L.forEach(function(l){T.appendChild(line(l[0],l[1]))})}else run();
/* rede de partículas reagindo ao mouse */
var cv=document.getElementById("net"),cx=cv.getContext("2d"),W,H,P=[],m={x:-999,y:-999};
function size(){var r=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*r;cv.height=H*r;cx.setTransform(r,0,0,r,0,0);
var n=Math.min(110,Math.floor(W*H/14000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){m.x=e.clientX;m.y=e.clientY;cur.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"});
function draw(){cx.clearRect(0,0,W,H);
for(var i=0;i<P.length;i++){var a=P[i];
if(!rm){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
var dx=a.x-m.x,dy=a.y-m.y,d=Math.hypot(dx,dy);if(d<140&&d>0){a.x+=dx/d*1.6;a.y+=dy/d*1.6}}
cx.fillStyle="rgba(255,30,45,.8)";cx.fillRect(a.x-1,a.y-1,2,2);
for(var k=i+1;k<P.length;k++){var b=P[k],e=Math.hypot(a.x-b.x,a.y-b.y);
if(e<120){cx.strokeStyle="rgba(255,30,45,"+(.22*(1-e/120))+")";cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
var q=Math.hypot(a.x-m.x,a.y-m.y);if(q<170){cx.strokeStyle="rgba(255,255,255,"+(.35*(1-q/170))+")";cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(m.x,m.y);cx.stroke()}}
if(!rm)requestAnimationFrame(draw)}
draw();
/* progresso de rolagem */
var pg=document.getElementById("pg");
addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+"%"},{passive:true});
/* contadores */
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;io.unobserve(en.target);var el=en.target,n=+el.dataset.n,t0=performance.now();
function f(t){var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}
rm?el.textContent=n:requestAnimationFrame(f)})},{threshold:.6});
document.querySelectorAll("[data-n]").forEach(function(e){io.observe(e)});
/* inclinação 3D nos cards e botões magnéticos */
if(!rm){document.querySelectorAll(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(700px) rotateY("+x*10+"deg) rotateX("+(-y*10)+"deg) translateZ(6px)"});c.addEventListener("pointerleave",function(){c.style.transform=""})});
document.querySelectorAll(".btn").forEach(function(b){b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+(e.clientX-r.left-r.width/2)*.2+"px,"+(e.clientY-r.top-r.height/2)*.3+"px)"});b.addEventListener("pointerleave",function(){b.style.transform=""})})}
/* cursor e spotlight dos cards */
var cur=document.getElementById("cur");
document.querySelectorAll("a,.chip,.card").forEach(function(el){el.addEventListener("pointerenter",function(){cur.classList.add("h")});el.addEventListener("pointerleave",function(){cur.classList.remove("h")})});
document.querySelectorAll(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--x",(e.clientX-r.left)+"px");c.style.setProperty("--y",(e.clientY-r.top)+"px")})});
})();
