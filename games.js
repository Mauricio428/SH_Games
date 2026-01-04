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

// ========== FUNCIONALIDAD DE BÚSQUEDA ==========

const searchInput = document.getElementById('searchInput');
const gameCards = document.querySelectorAll('.game-card');
const sagaTitles = document.querySelectorAll('.saga-title');
const gameContainers = document.querySelectorAll('.game-container');
const noResults = document.getElementById('noResults');

// Función principal de búsqueda
function searchGames() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let hasResults = false;

  // Si no hay término de búsqueda, mostrar todo
  if (searchTerm === '') {
    gameCards.forEach(card => {
      card.style.display = '';
    });
    sagaTitles.forEach(title => {
      title.style.display = '';
    });
    gameContainers.forEach(container => {
      container.style.display = '';
    });
    noResults.style.display = 'none';
    return;
  }

  // Ocultar todos los títulos de saga y contenedores inicialmente
  sagaTitles.forEach(title => {
    title.style.display = 'none';
  });
  gameContainers.forEach(container => {
    container.style.display = 'none';
  });

  // Filtrar juegos
  gameCards.forEach(card => {
    const gameTitle = card.dataset.title;
    
    if (gameTitle.includes(searchTerm)) {
      card.style.display = '';
      hasResults = true;
      
      // Mostrar el contenedor y título de saga correspondiente
      const container = card.closest('.game-container');
      const sagaName = container.dataset.saga;
      const sagaTitle = document.querySelector(`.saga-title[data-saga="${sagaName}"]`);
      
      if (container) {
        container.style.display = 'grid';
      }
      if (sagaTitle) {
        sagaTitle.style.display = 'block';
      }
    } else {
      card.style.display = 'none';
    }
  });

  // Ocultar contenedores vacíos y sus títulos
  gameContainers.forEach(container => {
    const visibleCards = container.querySelectorAll('.game-card[style*="display: none"]');
    const totalCards = container.querySelectorAll('.game-card').length;
    
    if (visibleCards.length === totalCards) {
      container.style.display = 'none';
      const sagaName = container.dataset.saga;
      const sagaTitle = document.querySelector(`.saga-title[data-saga="${sagaName}"]`);
      if (sagaTitle) {
        sagaTitle.style.display = 'none';
      }
    }
  });

  // Mostrar mensaje de "no hay resultados" si no se encontró nada
  noResults.style.display = hasResults ? 'none' : 'block';
}

// Event listener para la búsqueda en tiempo real
searchInput.addEventListener('input', searchGames);

// Limpiar búsqueda al presionar Escape
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchGames();
    searchInput.blur();
  }
});

// Focus en la búsqueda con Ctrl+K o Cmd+K
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
}); 