document.addEventListener('DOMContentLoaded', function() {
    // Ocultar todas las secciones excepto inicio
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        if (seccion.id !== 'inicio') {
            seccion.style.display = 'none';
        }
    });

    // Configurar menú móvil - VERSIÓN CORREGIDA
    const botonMenu = document.querySelector('.boton-menu-movil');
    const menuEnlaces = document.querySelector('.lista-enlaces');
    
    botonMenu.addEventListener('click', function() {
        // Alternar clases activas
        this.classList.toggle('activo');
        menuEnlaces.classList.toggle('activo');
        
        // Controlar el scroll del body
        if (menuEnlaces.classList.contains('activo')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar menú al hacer clic en cualquier enlace (PARA MÓVIL)
    document.querySelectorAll('.lista-enlaces a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            // Solo para móviles (ancho <= 992px)
            if (window.innerWidth <= 992) {
                botonMenu.classList.remove('activo');
                menuEnlaces.classList.remove('activo');
                document.body.style.overflow = 'auto';
            }
            
            // Prevenir comportamiento por defecto del anchor
            e.preventDefault();
            
            // Obtener el ID de la sección a mostrar
            const seccionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showContent(seccionId);
        });
    });
});

// Función para mostrar contenido (igual que antes)
function showContent(seccionId) {
    // oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.style.display = 'none';
    });

    // muestra la seccion seleccionada
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.style.display = 'block';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const preguntas = document.querySelectorAll('.faq-question');
  
    preguntas.forEach(pregunta => {
      pregunta.addEventListener('click', () => {
        const respuesta = pregunta.nextElementSibling;
  
        // Oculta otras respuestas abiertas
        document.querySelectorAll('.faq-answer').forEach(otra => {
          if (otra !== respuesta) {
            otra.style.display = 'none';
          }
        });
  
        // Alternar visibilidad
        respuesta.style.display = respuesta.style.display === 'block' ? 'none' : 'block';
      });
    });
  });