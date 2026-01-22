let sound=[];
let count=0;
for(let i=28;i<=63;i++){
  sound[count]=`../audio/${i}.ogg`;
  count++;
}

let key=[
  "KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","KeyL","KeyK","KeyJ","KeyH","KeyG","KeyF","KeyD","KeyS","KeyA","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0"
]

let boxes=[];
for(let i=1;i<=36;i++){
  boxes.push(`box${i}`);
}

document.body.addEventListener("keydown",(val)=>{
  if(val.repeat) return;
  let index=key.indexOf(val.code);
  console.log(index);
  let audio=new Audio(sound[index]);
  audio.currentTime=0;
  audio.play();

    let element=document.getElementById(`box${index+1}`);
    element.style.top="7px";
    element.style.backgroundColor="rgba(128, 128, 128,0.4)";
})

document.body.addEventListener("keyup",(val)=>{
  let index=key.indexOf(val.code);
  let element=document.getElementById(`box${index+1}`);
    element.style.top="-2px";
    element.style.backgroundColor="";
})

const container=document.getElementsByClassName("container")[0];
container.addEventListener("click",(event)=>{
  let targetElement=event.target.id;
  let element=boxes.indexOf(targetElement);
  
  let audio=new Audio(sound[element]);
  audio.play();

  // console.log(event.target.id);
})