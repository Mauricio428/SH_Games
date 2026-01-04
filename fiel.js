const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id') || 1;

const juegos = {
  // 🧟‍♂️ SAGA RESIDENT EVIL
  1: {
    titulo: "Resident Evil Zero",
    descripcion: "Un equipo de fuerzas especiales investiga asesinatos en Raccoon City, encontrando un tren infestado por criaturas y el origen del virus.",
    imagen: "docs/portada REZero.jpg",
    descarga: "https://www.mediafire.com/file/jxb89zf0jhoqqmx/Resident+Evil+0+HD+Remaster-randrogames.com.rar/file"
  },
  2: {
    titulo: "Resident Evil 2",
    descripcion: "Leon y Claire llegan a Raccoon City solo para descubrir un brote zombi que deben sobrevivir mientras descubren la verdad detrás de Umbrella.",
    imagen: "docs/Portada RE2.jpg",
    descarga: "https://www.mediafire.com/file/me5kqmck03ovl8x/RE+2+1998www.randrogames.com.rar/file"
  },
  3: {
    titulo: "Resident Evil 3 Nemesis",
    descripcion: "Jill Valentine intenta escapar de Raccoon City mientras es perseguida por un arma biológica conocida como Nemesis.",
    imagen: "docs/Portada RE3.jpg",
    descarga: "https://www.mediafire.com/file/dh3gnckqmzup69j/RE3Nemerandrogames.com.rar/file"
  },
  4: {
    titulo: "Resident Evil 4",
    descripcion: `Han pasado seis años desde el desastre biológico en Raccoon City...`,
    imagen: "docs/RE4.png",
    descarga: "https://www.mediafire.com/file/4ywd9hypndanjiy/Resident_Evil_4.rar/file"
  },
  5: {
    titulo: "Resident Evil 5",
    descripcion: "Chris Redfield investiga un nuevo brote viral en África, donde descubre un complot bioterrorista global.",
    imagen: "docs/Portada RE5.jpg",
    descarga: "https://www.mediafire.com/file/jxgtsevf48h4e5y/Resident+Evil+5+Gold+Edition+1.1.0.rar/file"
  },
  6: {
    titulo: "Resident Evil 6",
    descripcion: "Tres historias se entrelazan mientras los protagonistas luchan contra un nuevo virus y una amenaza global de bioterrorismo.",
    imagen: "docs/Portada RE6.jpg",
    descarga: "https://www.mediafire.com/file/g5akg73bewqa4j9/Revil6randrogames.com.rar/file"
  },
  7: {
    titulo: "Resident Evil 7",
    descripcion: "Ethan Winters busca a su esposa desaparecida en una mansión de Luisiana habitada por una familia mutada y perturbadora.",
    imagen: "docs/Portada RE7.jpg",
    descargas: [
      { url: "https://www.mediafire.com/file/abqrdugbt6zxhmh/Re7ww.randrogames.com.part1.rar/file", nombre: "Parte 1" },
      { url: "https://www.mediafire.com/file/htzwdlr2tvgcjp6/Re7ww.randrogames.com.part2.rar/file", nombre: "Parte 2" },
      { url: "https://www.mediafire.com/file/wc3w6h27r4y42gh/Re7ww.randrogames.com.part3.rar/file", nombre: "Parte 3" }
    ]
  },
  8: {
    titulo: "Resident Evil 8",
    descripcion: "Ethan debe rescatar a su hija en un extraño pueblo europeo lleno de horrores sobrenaturales y secretos.",
    imagen: "docs/Portada RE8.jpg",
    descargas: [
      { url: "https://www.mediafire.com/file/dzaipk8i02uuv2n/RE8www.randrogames.com.part1.rar/file", nombre: "Parte 1" },
      { url: "https://www.mediafire.com/file/4rzgt60uxkfk9mw/RE8www.randrogames.com.part2.rar/file", nombre: "Parte 2" },
      { url: "https://www.mediafire.com/file/8rvjq2bj96yx322/RE8www.randrogames.com.part3.rar/file", nombre: "Parte 3" }
    ]
  },
  9: {
    titulo: "Resident Evil 4 Remake",
    descripcion: "Remake con historia similar al original, pero con más profundidad en los personajes y escenas renovadas.",
    imagen: "docs/Portada RE$R.jpg",
    descargas: [
      { url: "https://www.mediafire.com/file/s9cgqtwlnap4s7n/Re42023www.randrogames.com.part1.rar/file", nombre: "Parte 1" },
      { url: "https://www.mediafire.com/file/toy4chwbrdd0dx4/Re42023www.randrogames.com.part2.rar/file", nombre: "Parte 2" },
      { url: "https://www.mediafire.com/file/9ego8n8yi7fkqed/Re42023www.randrogames.com.part3.rar/file", nombre: "Parte 3" },
      { url: "https://www.mediafire.com/file/ibs04tdlu7a4f1q/Re42023www.randrogames.com.part4.rar/file", nombre: "Parte 4" },
      { url: "https://www.mediafire.com/file/jyhyewxchwg7n58/Re42023www.randrogames.com.part5.rar/file", nombre: "Parte 5" },
      { url: "https://www.mediafire.com/file/fjpc9273qy6mjm5/Re42023www.randrogames.com.part6.rar/file", nombre: "Parte 6" },
      { url: "https://www.mediafire.com/file/8xb7hercb1uibl0/CrackFixRE4.rar/file", nombre: "Parte 7" }
    ]
  },
  10: {
    titulo: "Resident Evil 2 Remake",
    descripcion: "Nueva versión con gráficos modernos del clásico RE2, manteniendo la historia de Leon y Claire en Raccoon City.",
    imagen: "docs/Portada RE2R.jpg",
    descargas: [
      {url: "https://www.mediafire.com/file/ugoupsii9a3st7a/RE22_19www.randrogames.com.part1.rar/file",nombre: "parte 1"},
      {url: "https://www.mediafire.com/file/qauw98g0isjtzc7/RE22_19www.randrogames.com.part2.rar/file",nombre: "parte 2"}
    ]
  },
  11: {
    titulo: "Resident Evil 3 Remake",
    descripcion: "Versión actualizada de la historia de Jill huyendo de Nemesis con nuevos detalles y escenarios.",
    imagen: "docs/Portada RE3R.jpg",
    descargas: [
      {url: "https://www.mediafire.com/file/9c9y28zv2qetaoc/re32020www.randrogames.com.part1.rar/file",nombre: "parte 1"},
      {url: "https://www.mediafire.com/file/ztnj6sncj2grkdm/re32020www.randrogames.com.part2.rar/file",nombre: "parte 2"}
    ]
  },

  // 🎮 OTROS JUEGOS
  13: {
    titulo: "Geometry Dash",
    descripcion: `Geometry Dash es un videojuego de plataformas rítmico...`,
    imagen: "docs/Geometry Dash Portada.jpg",
    descarga: "https://www.mediafire.com/file/boiyw3b89zo4o8d/Geometry+Dash.zip/file"
  },
  15: {
    titulo: "Left 4 Dead 2",
    descripcion: `Left 4 Dead 2 comienza en Dead Center...`,
    imagen: "docs/portada left4dead2.jpg",
    descargas: [
      { url: "https://www.mediafire.com/file/z6h5hg7jiwo75ij/Left+4+Dead+2.part1.rar/file", nombre: "Parte 1" },
      { url: "https://www.mediafire.com/file/6qjj171w9wsr2az/Left+4+Dead+2.part2.rar/file", nombre: "Parte 2" }
    ]
  },
  16: {
    titulo: "Hollow Knight",
    descripcion: `Hollow Knight es un videojuego metroidvania...`,
    imagen: "docs/portada Hk.jpg",
    descarga: "https://www.mediafire.com/file/vziz8uc9kprb8d9/HollNgtwww.randrogames.com.rar/file"
  },

  // ⚔️ Spartan Total Warrior
  17: {
    titulo: "Spartan Total Warrior",
    descripcion: `Spartan: Total Warrior es un juego de acción épica...`,
    imagen: "docs/portada STW.jpg",
    descarga: "https://www.mediafire.com/file/tok5d6tvkqnh3rt/SPARTAN_PTBR.rar/file",
    tutorial: "https://www.youtube.com/watch?v=mL3FXH8SCVs"
  },

  // 🚗 SAGA GTA
  19: {
    titulo: "GTA San Andreas",
    descripcion: `La historia gira en torno a Carl "CJ" Johnson...`,
    imagen: "docs/portada gtaSA.jpg",
    descarga: "https://www.mediafire.com/file/almwg0qp68322mk/Gta_San_Andreas_1.0.rar/file"
  },
  20: {
    titulo: "GTA Vice City",
    descripcion: `La historia de GTA: Vice City se centra en Tommy Vercetti...`,
    imagen: "docs/portada gtaVC.webp",
    descarga: "https://www.mediafire.com/file/2q021ts17gme02h/GTA_V1ce_C1ty_-_Ranloads.rar/file"
  },
  21: {
    titulo: "GTA III",
    descripcion: `GTA III sigue a Claude, un criminal traicionado...`,
    imagen: "docs/portada gtaIII.jpg",
    descarga: "https://www.mediafire.com/file/mjajcls4q3hj21i/Gta_3_%252B_Silent_Patch.rar/file"
  },
  22: {
    titulo: "GTA IV",
    descripcion: "Niko Bellic llega a América buscando un nuevo comienzo, pero termina involucrado en el crimen y las deudas de su primo.",
    imagen: "docs/Portada GTA4.jpg.jpg",
    descargas: [
      { url: "https://www.mediafire.com/file/dedpdmt18xdkvus/Grand+Thef+Auto+4.part1.rar/file", nombre: "Parte 1" },
      { url: "https://www.mediafire.com/file/eqvh9q6hj7ffau9/Grand+Thef+Auto+4.part2.rar/file", nombre: "Parte 2" }
    ]
  },
  23: {
    titulo: "GTA V",
    descripcion: "Tres criminales —Michael, Franklin y Trevor— unen fuerzas para realizar golpes mientras enfrentan sus pasados y enemigos en Los Santos.",
    imagen: "docs/Portada GTA5.jpg",
    descargas: [
      { url: "https://www.mediafire.com/file/ov2ocju3axl2zez/GTLIVEVwww.randrogames.com.part1.rar/file", nombre: "parte 1" },
      { url: "https://www.mediafire.com/file/y82pqk0b9vyh9mi/GTLIVEVwww.randrogames.com.part2.rar/file", nombre: "parte 2" },
      { url: "https://www.mediafire.com/file/jiw7qfj4rvxkmn2/GTLIVEVwww.randrogames.com.part3.rar/file", nombre: "parte 3" },
      { url: "https://www.mediafire.com/file/fmz72q7sdnptks0/GTLIVEVwww.randrogames.com.part4.rar/file", nombre: "parte 4" },
      { url: "https://www.mediafire.com/file/33qoedi5vwbohss/GTLIVEVwww.randrogames.com.part5.rar/file", nombre: "parte 5" }
    ]
  },

  // 🔪 SAGA MANHUNT
  24: {
    titulo: "Manhunt",
    descripcion: `La historia gira en torno a James Earl Cash...`,
    imagen: "docs/Manhunt Portada.jpg",
    descarga: "https://www.mediafire.com/file/wgd9y7igap2ku2g/Manhwww.randrogames.com.rar/file"
  },
  25: {
    titulo: "Manhunt 2",
    descripcion: `En Manhunt 2 controlas a Daniel Lamb...`,
    imagen: "docs/Manhunt 2 Portada.jpg",
    descarga: "https://www.mediafire.com/file/x6kvk4p2gpqd857/manh2www.randrogames.com.rar/file"
  }
};

const juego = juegos[gameId] || juegos[1];

// Mostrar datos generales
document.getElementById("gameTitle").textContent = juego.titulo;
document.getElementById("gameImage").src = juego.imagen;
document.getElementById("gameImage").alt = juego.titulo;
document.getElementById("gameDescription").textContent = juego.descripcion;
document.getElementById("backgroundOverlay").style.backgroundImage = `url('${juego.imagen}')`;

// Limpiar y agregar múltiples botones de descarga
const downloadLinksDiv = document.getElementById("downloadLinks");
downloadLinksDiv.innerHTML = "";

if (juego.descargas && Array.isArray(juego.descargas)) {
  juego.descargas.forEach(descarga => {
    const a = document.createElement("a");
    a.href = descarga.url;
    a.target = "_blank";
    a.className = "download-button";
    a.textContent = "Descargar " + descarga.nombre;
    downloadLinksDiv.appendChild(a);
  });
} else if (juego.descarga) {
  const a = document.createElement("a");
  a.href = juego.descarga;
  a.target = "_blank";
  a.className = "download-button";
  a.textContent = "Descargar Juego";
  downloadLinksDiv.appendChild(a);
}

// ✅ Agregar botón de tutorial si existe y es un enlace de YouTube
if (juego.tutorial && juego.tutorial.includes("youtube.com")) {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.marginTop = "20px";
  wrapper.style.width = "100%";

  const tutorialLabel = document.createElement("span");
  tutorialLabel.textContent = "Tutorial de instalación";
  tutorialLabel.style.fontWeight = "bold";
  tutorialLabel.style.marginBottom = "10px";

  const tutorialButton = document.createElement("a");
  tutorialButton.href = juego.tutorial;
  tutorialButton.target = "_blank";
  tutorialButton.className = "download-button";
  tutorialButton.textContent = "Ver tutorial";

  wrapper.appendChild(tutorialLabel);
  wrapper.appendChild(tutorialButton);
  downloadLinksDiv.appendChild(wrapper);
}

if (window.innerWidth < 768) {
  document.getElementById("gameImage").style.objectFit = "contain";
}

// =====================================================
// Sistema de likes INDEPENDIENTE POR JUEGO
// =====================================================
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
const heartIcon = document.getElementById('heartIcon');

// Usar claves únicas basadas en el ID del juego
const likesKey = `gameLikes_${gameId}`;
const hasLikedKey = `hasLiked_${gameId}`;

let likes = parseInt(localStorage.getItem(likesKey)) || 0;
let hasLiked = localStorage.getItem(hasLikedKey) === 'true';

likeCount.textContent = likes;

if (hasLiked) {
  likeBtn.classList.add('liked');
  heartIcon.textContent = '♥';
}

likeBtn.addEventListener('click', () => {
  if (!hasLiked) {
    likes++;
    hasLiked = true;
    likeBtn.classList.add('liked');
    heartIcon.textContent = '♥';
  } else {
    likes--;
    hasLiked = false;
    likeBtn.classList.remove('liked');
    heartIcon.textContent = '♡';
  }
  
  localStorage.setItem(likesKey, likes);
  localStorage.setItem(hasLikedKey, hasLiked);
  likeCount.textContent = likes;
});

// =====================================================
// Sistema de comentarios INDEPENDIENTE POR JUEGO
// =====================================================
const submitBtn = document.getElementById('submitComment');
const userNameInput = document.getElementById('userName');
const userCommentInput = document.getElementById('userComment');
const commentsList = document.getElementById('commentsList');
const commentCountSpan = document.getElementById('commentCount');

// Usar clave única basada en el ID del juego
const commentsKey = `gameComments_${gameId}`;
let comments = JSON.parse(localStorage.getItem(commentsKey)) || [];

function renderComments() {
  if (comments.length === 0) {
    commentsList.innerHTML = '<div class="no-comments">No hay comentarios aún. ¡Sé el primero en comentar!</div>';
    commentCountSpan.textContent = '0';
    return;
  }
  
  commentCountSpan.textContent = comments.length;
  commentsList.innerHTML = '';
  
  comments.forEach((comment, index) => {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">${comment.name}</span>
        <span class="comment-date">${comment.date}</span>
      </div>
      <div class="comment-text">${comment.text}</div>
    `;
    commentsList.appendChild(commentItem);
  });
}

function deleteComment(index) {
  if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
    comments.splice(index, 1);
    localStorage.setItem(commentsKey, JSON.stringify(comments));
    renderComments();
  }
}

submitBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim();
  const text = userCommentInput.value.trim();
  
  if (!name || !text) {
    alert('Por favor, completa todos los campos');
    return;
  }
  
  const newComment = {
    name: name,
    text: text,
    date: new Date().toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
  
  comments.unshift(newComment);
  localStorage.setItem(commentsKey, JSON.stringify(comments));
  
  userNameInput.value = '';
  userCommentInput.value = '';
  
  renderComments();
});

renderComments();;
