const mensaje = "Hola pa, hace mucho no te hago una carta, y estos dias aprendiendo cosas nuevas, que mas especial que brindarte un homenaje a ti, que eres el mejor padre del mundo, solo quiero darte gracias, por lo buen padre que eres, sigues siendo ese héroe que es distinto, que es diferente a cualquiera y que como sea hace que tengamos una sonrisa en nuestro rostro cada que puede, se que te estas esforzando por darnos lo mejor, sigue asi, mamá y yo siempre hemos estado apoyandote y seguimmos orgullosos de ti, gracias papá por ayudarme a ser la persona que soy hoy, por ser uno de los pocos hombres que hoy quedan en el mundo, por ayudarme a forjar disciplina y seguir ayudandome a enfrentar la vida cruel que esta afuera, gracias por aconsejarme en el amor y por ayudarme a entender que no tengo que competir sino contra mi mismo, te seguire prometiendo que las carreras que voy a terminar no solo son mias sino tambien son tuyas, porque sin ti ese amor por la ingeniería no existiría, recuerda que el mal genio no nos puede ganar y te pido perdon porque muchas veces digo las cosas como no debo.  Te amo  papá, feliz dia del padre, espero que disfrutes leyendo esta carta, tanto como para mi fue escribirla, recuerda que aunque sea tu hijo tambien puedo escucharte, tal vez no soy el mejor hijo, pero siempre estare para ti.             Att: tu hijo Oscar Poveda";
const mensajeElemento = document.getElementById("mensaje");
const boton = document.getElementById("abrirBtn");
const musica = document.getElementById("musica"); 

let index = 0;
let escribiendo = false;

function escribirMensaje() {
  if (index < mensaje.length) {
    mensajeElemento.textContent += mensaje.charAt(index);
    index++;
    setTimeout(escribirMensaje, 50);
  } else {
    escribiendo = false;
  }
}

boton.addEventListener("click", () => {
  if (!escribiendo && index === 0) {
    escribiendo = true;
    escribirMensaje();
    musica.play();
  }
});

// Modal para ver imagen completa
const galeriaImgs = document.querySelectorAll('.galeria img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

galeriaImgs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});
