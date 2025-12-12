window.addEventListener('DOMContentLoaded', () => {
  let estado = 'inicial';
  let timeoutId = null;
  let tiempoInicio = 0;

  const pantalla = document.getElementById('pantalla');
  const mensaje = document.getElementById('mensaje');

  function ponerEstadoInicial() {
    estado = 'inicial';
    pantalla.className = 'estado-inicial';
    mensaje.textContent = 'Pulsa para empezar';
  }

  pantalla.addEventListener('click', () => {
    if (estado === 'inicial') {
      estado = 'esperando';
      pantalla.className = 'estado-esperando';
      mensaje.textContent = 'Espera a que la pantalla se ponga roja...';

      const retraso = 1000 + Math.random() * 3000;
      timeoutId = setTimeout(() => {
        estado = 'listo';
        tiempoInicio = Date.now();
        pantalla.className = 'estado-listo';
        mensaje.textContent = '¡Haz clic ahora!';
      }, retraso);

    } else if (estado === 'esperando') {
      clearTimeout(timeoutId);
      estado = 'resultado';
      pantalla.className = 'estado-adelantado';
      mensaje.textContent = 'Te has adelantado. Pulsa para volver a empezar.';

    } else if (estado === 'listo') {
      const tiempoFin = Date.now();
      const diferencia = tiempoFin - tiempoInicio;
      estado = 'resultado';
      pantalla.className = 'estado-resultado';
      mensaje.textContent = 'Has tardado ' + diferencia + ' ms. Pulsa para volver a intentarlo.';

    } else if (estado === 'resultado') {
      ponerEstadoInicial();
    }
  });
});
