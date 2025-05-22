  // Función para validar si el juego existe o está disponible
    function validarId(id) {
      return id <= 100; // Por ahora solo hay 4 juegos válidos
    }

// Asignar evento a cada tarjeta disponible
document.querySelectorAll(".game-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    // Redirige directamente con el ID del juego
    window.location.href = `file.html?id=${id}`;
  });
});

