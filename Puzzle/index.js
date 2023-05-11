
var imgesCollection =document.getElementsByClassName('img');
var idCounter=0;
for(var i =0 ; i<imgesCollection.length;i++){
   idCounter++;
   imgesCollection[i].setAttribute('id',idCounter);
   imgesCollection[i].setAttribute('draggable',true)
   imgesCollection[i].addEventListener('dragstart',function(ev){
     ev.dataTransfer.setData('text',this.id);
   })
}
var containers = document.getElementsByClassName('container');
var Counter=0;
for(var con=0;con<containers.length;con++){
    Counter++;

    containers[con].setAttribute('id',Counter);
    containers[con].addEventListener('drop',dropFunction);
    containers[con].addEventListener('dragover',dragOverFunction)
}

function dragOverFunction(ev){
    console.log("dragged");
    console.log(this);
ev.preventDefault();
}

function dropFunction(ev){
    ev.preventDefault();
    console.log("dropped");
    var selected=ev.dataTransfer.getData('text');
    var currentSelected =document.getElementById(selected)
    currentSelected.style.width='245px'
    currentSelected.style.height='161px'

    

    ev.target.appendChild(currentSelected);
   if(currentSelected.id===ev.target.id){
      currentSelected.setAttribute('draggable',false)
     ev.target.style.border='1px solid green'
    var rightSound= new Audio('./assete/assets/right.mp3');
    rightSound.play();
   }
   else{
    ev.target.style.border='1px solid red'
    var wrongSound= new Audio('./assete/assets/wrong.mp3');
    wrongSound.play();
   }
   
}

