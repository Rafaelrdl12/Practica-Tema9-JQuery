// Lista de imágenes disponibles
const imagenes = [
  'images/Freezer.png',
  'images/goku_normal.png',
  'images/picolo_normal.png',
  'images/vegeta_normal.png',
  'images/bulma.png'
];

function getImagenAleatoria() {
  const indice = Math.floor(Math.random() * imagenes.length);
  return imagenes[indice];
}

$(function () {
  const $elementos = $('#elementos');
  const $colorFondo = $('#colorFondo');

  // Guardamos el HTML inicial y el color inicial
  const estadoInicialHTML = $elementos.html();
  const colorInicial = $colorFondo.val();

  // Aplicar color inicial a las zonas de imagen
  $('.zona-imagen').css('background-color', colorInicial);

  // Cambiar color de fondo de las zonas de imagen
  $('#btnColor').on('click', function () {
    const color = $colorFondo.val();
    $('.zona-imagen').css('background-color', color);
  });

  // Añadir nueva tarjeta
  $('#btnAdd').on('click', function () {
    const color = $colorFondo.val();
    const nuevaImagen = getImagenAleatoria();

    const $tarjeta = $(`
      <div class="tarjeta">
        <div class="zona-imagen">
          <img src="${nuevaImagen}" alt="personaje" />
        </div>
        <div class="acciones">
          <button class="btnCambiar">Cambiar</button>
          <button class="btnBorrar">Borrar</button>
        </div>
      </div>
    `);

    $tarjeta.find('.zona-imagen').css('background-color', color);
    $elementos.append($tarjeta);
  });

  // Delegación de eventos para Cambiar y Borrar
  $elementos.on('click', '.btnCambiar', function () {
    const nuevaImagen = getImagenAleatoria();
    $(this).closest('.tarjeta').find('img').attr('src', nuevaImagen);
  });

  $elementos.on('click', '.btnBorrar', function () {
    $(this).closest('.tarjeta').remove();
  });

  // Reset al estado inicial
  $('#btnReset').on('click', function () {
    $elementos.html(estadoInicialHTML);
    $colorFondo.val(colorInicial);
    $('.zona-imagen').css('background-color', colorInicial);
  });
});
