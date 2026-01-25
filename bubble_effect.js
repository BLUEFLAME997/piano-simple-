const main=document.querySelector("main");

main.addEventListener("mousemove",()=>{
  let div=document.createElement("div");
  
  let x=Math.floor(Math.random()*31);
  let a=Math.floor(Math.random()*95);
  let b=Math.floor(Math.random()*95);

  div.style.width=x+"px";
  div.style.height=x+"px";
  div.style.borderRadius="50%";
  div.style.top=a+"%";
  div.style.left=b+"%";
  div.style.backgroundColor="transparent";
  div.style.boxShadow="0 0 10px lightseagreen,0 0 20px lightseagreen, 0 0 30px lightseagreen, 0 0 40px lightseagreen, 0 0 50px lightseagreen";
  div.style.position="absolute";


  main.appendChild(div);
})