const form=document.getElementById('survey-form'),fill=document.getElementById('fill'),c=document.getElementById('comments'),count=document.getElementById('count');
function progress(){
  const need=[...form.querySelectorAll('[required]')];
  const done=need.filter(e=>e.value.trim()&&e.checkValidity()).length;
  fill.style.width=(done/need.length*100)+'%';
}
form.addEventListener('input',progress);
c.addEventListener('input',()=>{count.textContent=c.value.length+' / 300'});
progress();
