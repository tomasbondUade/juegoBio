var letras = new Array();

letras[0] = "assets/letraA.jpg";
letras[1] = "assets/letraC.jpg";
letras[2] = "assets/letraG.jpg";
letras[3] = "assets/letraT.jpg";
letras[4] = "assets/boxVacia.png";



function cargarImagenAleateoria() {
    var azar0 = Math.floor(Math.random() * letras.length);
    var azar1 = Math.floor(Math.random() * letras.length);
    var azar2 = Math.floor(Math.random() * letras.length);
    var azar3 = Math.floor(Math.random() * letras.length);
    var azar4 = Math.floor(Math.random() * letras.length);
    var azar5 = Math.floor(Math.random() * letras.length);
    var azar6 = Math.floor(Math.random() * letras.length);
    var azar7 = Math.floor(Math.random() * letras.length);
    var azar8 = Math.floor(Math.random() * letras.length);
    var azar9 = Math.floor(Math.random() * letras.length);
    var azar10 = Math.floor(Math.random() * letras.length);
    var azar11 = Math.floor(Math.random() * letras.length);

    document.images["imagen"].src = letras[azar0]
    document.images["imagen1"].src = letras[azar1]
    document.images["imagen2"].src = letras[azar2]
    document.images["imagen3"].src = letras[azar3]
    document.images["imagen4"].src = letras[azar4]
    document.images["imagen5"].src = letras[azar5]
    document.images["imagen6"].src = letras[azar6]
    document.images["imagen7"].src = letras[azar7]
    document.images["imagen8"].src = letras[azar8]
    document.images["imagen9"].src = letras[azar9]
    document.images["imagen10"].src = letras[azar10]
    document.images["imagen11"].src = letras[azar11]
}


document.addEventListener('DOMContentLoaded', (event) => {

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
            console.log()
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
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });
  });


