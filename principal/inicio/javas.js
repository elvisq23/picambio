document.getElementById('cambiar-direccion').addEventListener('click', function() {
    const monedaOrigen = document.getElementById('moneda-origen');
    const monedaDestino = document.getElementById('moneda-destino');
    const labelOrigen = document.getElementById('label-origen');
    const labelDestino = document.getElementById('label-destino');
    
    // intercambio
    const temp = monedaOrigen.textContent;
    monedaOrigen.textContent = monedaDestino.textContent;
    monedaDestino.textContent = temp;
    
    // actualiza
    labelOrigen.textContent = monedaOrigen.textContent;
    labelDestino.textContent = monedaDestino.textContent;
    
    // limpiar
    document.getElementById('monto-origen').value = '';
    document.getElementById('monto-destino').value = '';
  });