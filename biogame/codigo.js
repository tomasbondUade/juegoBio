var letras = new Array();

letras[0] = "A.jpg";
letras[1] = "C.jpg";
letras[2] = "G.jpg";
letras[3] = "T.jpg";

function renderizarImagenes(){
  var imagenes1 = document.getElementById("imagenes1")
  var imagenes2 = document.getElementById("imagenes2")
  var imagenes3 = document.getElementById("imagenes3")
  var imagenes4 = document.getElementById("imagenes4")

  for(var i = 0; i < 6; i ++){
    imagenes1.innerHTML = imagenes1.innerHTML + `<img draggable="true" src="" name="imagen${i}" class="ima" alt=""></img>`
  }

  for(var i = 0; i < 6; i ++){
    imagenes2.innerHTML = imagenes2.innerHTML + `<img draggable="true" src="" name="imagen${6 + i}" class="ima" alt=""></img>`
  }

  for(var i = 0; i < 6; i ++){
    imagenes3.innerHTML = imagenes3.innerHTML + `<img draggable="true" src="" name="imagen${12+i}" class="ima" alt=""></img>`
  }

  for(var i = 0; i < 6; i ++){
    imagenes4.innerHTML = imagenes4.innerHTML + `<img draggable="true" src="" name="imagen${18 + i}" class="ima" alt=""></img>`
  }
  
  cargarImagenAleateoria();
  makeDragable();
}

function cargarImagenAleateoria() {
    var imagenAleatoria = []
    for(var i = 0; i < 24; i ++){
      imagenAleatoria.push(Math.floor(Math.random() * letras.length))
    }

    imagenAleatoria.forEach((imagen, index)=>{
      document.images[`imagen${index}`].src  = "assets/"+letras[imagen]
    })
}

function makeDragable(){
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDrop(e){

      e.stopPropagation();
  
      if (dragSrcEl !== this){
          var thisName = this.src
          this.src = dragSrcEl.src
          dragSrcEl.src = thisName
      }
      return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  let items = document.querySelectorAll('.imagenes .ima');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
  });

  items.forEach(function(item){
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
};

function revisar(){
  
  var letras = Array.from(document.images).map(image=>{
    var leter = image.currentSrc.split("/").slice(-1)[0].split(".")[0]
    return leter
  });
  var n = 0
  for(i = 0; i < 12; i= i+2){
    if(letras[i] == "C"){
      var x = i + 1
      if(letras[x]== "G"){
        console.log("ok")
      }
      else{
        n = 1
      }
    }
    
    if(letras[i] == "G"){
      var x = i + 1
      if(letras[x]== "C"){
        console.log("ok")
      }
      else{
        n = 1
      }
    }

    if(letras[i] == "A"){
      var x = i + 1
      if(letras[x]== "T"){
        console.log("ok")
      }
      else{
        n = 1
      }
    }

    if(letras[i] == "T"){
      var x = i + 1
      if(letras[x]== "A"){
        console.log("ok")
      }
      else{
        n = 1
      }
    }
  }
  
  if(n === 1){
    alert("INCORRECTO :-(")
    const element = document.getElementById('loserGif');
    const background = document.getElementById('fondo')
    background.style.display = 'none'; // Para ocultar el elemento
    element.style.display = 'block'; // Para mostrar el elemento
    setTimeout(()=>{
      location.reload();
    },2000)

  }
  else{
    alert("FELICIDADES")
    const element = document.getElementById('winGif');
    const background = document.getElementById('fondo')
    background.style.display = 'none'; // Para ocultar el elemento
    element.style.display = 'block'; // Para mostrar el elemento
    setTimeout(()=>{
      location.reload();
    },2000)
  }
};