var mostrar = document.getElementById('mostrar');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var diez = document.getElementById('diez');
var once = document.getElementById('once');
var doce = document.getElementById('doce');
var trece = document.getElementById('trece');
var eliminar = document.getElementById('eliminar');

uno.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "A";
}

dos.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "E";
}

tres.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "A";
}

cuatro.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "C";
}

cinco.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "A";
}

seis.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "O";
}

siete.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "B";
}

ocho.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "A";
}

nueve.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "N";
}

diez.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "I";
}

once.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "I";
}

doce.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "M";
}

trece.onclick=function(e){
	mostrar.textContent = mostrar.textContent + "Z";
}

eliminar.onclick=function(e){
	mostrar.textContent = mostrar.textContent.slice(0, -1);
}


function responder(){
if (mostrar.innerText == 'ABANICO'){
   Swal.fire({
  position: 'center',
  icon: 'success',
  title: '¡Bien Hecho! has respondido de manera correcta',
  confirmButtonText: 'Aceptar',
  confirmButtonColor: '#F3C622'

}).then((result) => {
   if (result.value) {
     window.location.href = `index.html`
   }
 }); 
}

else if (mostrar.innerText != 'ABANICO'){
   Swal.fire({
  position: 'center',
  icon: 'error',
  title: '¡Lo siento, has fallado!',
  confirmButtonText: 'Volver a intentar',
  confirmButtonColor: '#F3C622'

}).then((result) => {
   if (result.value) {
     window.location.href = `index.html`
   }
 });
}
}
