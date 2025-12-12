$(function() {
  let estado = 'inicial';
  let timeoutId = null;
  let tiempoInicio = 0;

  const $pantalla = $('#pantalla');
  const $mensaje = $('#mensaje');

  function ponerEstadoInicial() {
    estado = 'inicial';
    $pantalla
      .removeClass()
      .addClass('estado-inicial');
    $mensaje.text('Pulsa para empezar');
  }

  $pantalla.on('click', function() {
    if (estado === 'inicial') {
      estado = 'esperando';
      $pantalla
        .removeClass()
        .addClass('estado-esperando');
      $mensaje.text('Espera a que la pantalla se ponga roja...');

      const retraso = 1000 + Math.random() * 3000;
      timeoutId = setTimeout(function() {
        estado = 'listo';
        tiempoInicio = Date.now();
        $pantalla
          .removeClass()
          .addClass('estado-listo');
        $mensaje.text('¡Haz clic ahora!');
      }, retraso);

    } else if (estado === 'esperando') {
      clearTimeout(timeoutId);
      estado = 'resultado';
      $pantalla
        .removeClass()
        .addClass('estado-adelantado');
      $mensaje.text('Te has adelantado. Pulsa para volver a empezar.');

    } else if (estado === 'listo') {
      const tiempoFin = Date.now();
      const diferencia = tiempoFin - tiempoInicio;
      estado = 'resultado';
      $pantalla
        .removeClass()
        .addClass('estado-resultado');
      $mensaje.text('Has tardado ' + diferencia + ' ms. Pulsa para volver a intentarlo.');

    } else if (estado === 'resultado') {
      ponerEstadoInicial();
    }
  });
});
