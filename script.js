document.getElementById('miBtnCambio').addEventListener('click', function() {
  const parrafo = document.querySelector('#parrafoTarget');
  
  // Cambiar el texto del párrafo utilizando textContent
  parrafo.textContent = "¡El texto ha sido modificado!";
  
  // Añadir la clase 'resaltado' al párrafo
  parrafo.classList.add('resaltado');
});