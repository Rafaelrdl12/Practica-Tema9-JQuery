const imagenesJS = [
  'images/Freezer.png',
  'images/goku_normal.png',
  'images/picolo_normal.png',
  'images/vegeta_normal.png',
  'images/bulma.png'
];

function getImagenAleatoriaJS() {
  const indice = Math.floor(Math.random() * imagenesJS.length);
  return imagenesJS[indice];
}

window.addEventListener('DOMContentLoaded', () => {
  const elementos = document.getElementById('elementos');
  const colorFondo = document.getElementById('colorFondo');
  const btnColor = document.getElementById('btnColor');
  const btnAdd = document.getElementById('btnAdd');
  const btnReset = document.getElementById('btnReset');

  const estadoInicialHTML = elementos.innerHTML;
  const colorInicial = colorFondo.value;

  // Color inicial
  document.querySelectorAll('.zona-imagen').forEach(zona => {
    zona.style.backgroundColor = colorInicial;
  });

  // Cambiar color de fondo de zonas de imagen
  btnColor.addEventListener('click', () => {
    const color = colorFondo.value;
    document.querySelectorAll('.zona-imagen').forEach(zona => {
      zona.style.backgroundColor = color;
    });
  });

  // Añadir tarjeta
  btnAdd.addEventListener('click', () => {
    const color = colorFondo.value;
    const nuevaImagen = getImagenAleatoriaJS();

    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    const zonaImagen = document.createElement('div');
    zonaImagen.className = 'zona-imagen';
    zonaImagen.style.backgroundColor = color;

    const img = document.createElement('img');
    img.src = nuevaImagen;
    img.alt = 'personaje';

    zonaImagen.appendChild(img);

    const acciones = document.createElement('div');
    acciones.className = 'acciones';

    const btnCambiar = document.createElement('button');
    btnCambiar.className = 'btnCambiar';
    btnCambiar.textContent = 'Cambiar';

    const btnBorrar = document.createElement('button');
    btnBorrar.className = 'btnBorrar';
    btnBorrar.textContent = 'Borrar';

    acciones.appendChild(btnCambiar);
    acciones.appendChild(btnBorrar);

    tarjeta.appendChild(zonaImagen);
    tarjeta.appendChild(acciones);

    elementos.appendChild(tarjeta);
  });

  // Delegación de eventos para Cambiar y Borrar
  elementos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnCambiar')) {
      const tarjeta = e.target.closest('.tarjeta');
      const img = tarjeta.querySelector('img');
      img.src = getImagenAleatoriaJS();
    }

    if (e.target.classList.contains('btnBorrar')) {
      const tarjeta = e.target.closest('.tarjeta');
      tarjeta.remove();
    }
  });

  // Reset
  btnReset.addEventListener('click', () => {
    elementos.innerHTML = estadoInicialHTML;
    colorFondo.value = colorInicial;

    document.querySelectorAll('.zona-imagen').forEach(zona => {
      zona.style.backgroundColor = colorInicial;
    });
  });
});
