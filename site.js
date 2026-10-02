document.documentElement.classList.add('js');
addEventListener('scroll',function(){var n=document.getElementById('nav');if(n)n.classList.toggle('solid',scrollY>40)},{passive:true});
var m=document.getElementById('mnav');
if(m){document.getElementById('burger').onclick=function(){m.classList.add('open')};
document.getElementById('mclose').onclick=function(){m.classList.remove('open')};
m.querySelectorAll('a').forEach(function(a){a.onclick=function(){m.classList.remove('open')}});}
function revealAll(){document.querySelectorAll('.rev').forEach(function(el){el.classList.add('in')})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rev').forEach(function(el){io.observe(el)});setTimeout(revealAll,2500)}else revealAll();
setTimeout(revealAll,2500);
/* BEFORE/AFTER scroll reveal (no WebGL — fails safe at 50/50) */
var moments=[].slice.call(document.querySelectorAll('.moment'));
if(moments.length&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 var st=moments.map(function(sec){return{el:sec,ba:sec.querySelector('.ba'),pos:50,tgt:50}});
 (function loop(){var vh=innerHeight;
  st.forEach(function(s){var r=s.el.getBoundingClientRect(),h=r.height-vh;if(h<=0)return;
   var p=Math.min(1,Math.max(0,-r.top/h));
   s.tgt=6+88*p;s.pos+=(s.tgt-s.pos)*.12;
   s.ba.style.setProperty('--pos',s.pos.toFixed(2)+'%');
   s.ba.style.setProperty('--z',(1-.04*p).toFixed(4));
  });requestAnimationFrame(loop);})();
}
