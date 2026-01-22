const main=document.querySelector("main");
const button=document.querySelector("button");

button.addEventListener("click",()=>{
  let x=Math.floor(Math.random()*100);
  let y=Math.floor(Math.random()*100);
  let c1=Math.floor(Math.random()*256);
  let c2=Math.floor(Math.random()*256);
  let c3=Math.floor(Math.random()*256);
  let r=Math.floor(Math.random()*360);

  let div=document.createElement("div");
  div.style.height="100px";
  div.style.width="100px";
  // div.style.backgroundColor="royalblue";
  div.style.position="absolute";
  div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
  div.style.rotate=r+"deg";

  div.style.top=x+"%";
  div.style.left=y+"%";
  

  main.appendChild(div);
})