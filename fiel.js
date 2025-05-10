    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id') || 1;

    const juegos = {
      1: {
        titulo: "Resident Evil 4",
       descripcion: `Han pasado seis años desde el desastre biológico en Raccoon City.

Leon S. Kennedy, uno de los sobrevivientes del incidente, ha sido reclutado como agente que responde directamente al presidente de los Estados Unidos.

Con la experiencia de múltiples misiones a sus espaldas, Leon es enviado a rescatar a la hija secuestrada del presidente.

Sus investigaciones lo llevan a una apartada aldea europea, donde algo muy extraño sucede con los aldeanos.

Así comienza esta historia de un rescate desesperado y un horror implacable.`,
         imagen: "docs/RE4.png",
        descarga: "https://www.mediafire.com/file/4ywd9hypndanjiy/Resident_Evil_4.rar/file"
      },
      2: {
        titulo: "Geometry Dash",
        descripcion: `Geometry Dash (anteriormente llamado "Geometry Jump") es un videojuego de plataformas y videojuego rítmico creado en 2013 por el desarrollador sueco Robert Topala (más conocido como RobTop), y posteriormente desarrollado por su empresa independiente RobTop Games.`,
        imagen: "docs/Geometry Dash Portada.jpg",
        descarga: "https://www.mediafire.com/file/boiyw3b89zo4o8d/Geometry+Dash.zip/file"
      },
    3: {
  titulo: "Left 4 Dead 2",
  descripcion: `Left 4 Dead 2 comienza en Dead Center (ambientado en Savannah, Georgia ), donde los cuatro supervivientes son abandonados en el tejado de un hotel por helicópteros de rescate. Deciden dirigirse al centro comercial local, donde se encuentra un segundo punto de evacuación de la CEDA.`,
  imagen: "docs/portada left4dead2.jpg",
  descargas: [
    { url: "https://www.mediafire.com/file/z6h5hg7jiwo75ij/Left+4+Dead+2.part1.rar/file", nombre: "Parte 1" },
    { url: "https://www.mediafire.com/file/6qjj171w9wsr2az/Left+4+Dead+2.part2.rar/file", nombre: "Parte 2" }
  ]
},
      4: {
        titulo :"Hollow Knight",
        descripcion : `Hollow Knight es un videojuego metroidvania de 2017 desarrollado y publicado por la desarrolladora independiente australiana Team Cherry. El jugador controla al Caballero, un guerrero insectoide que explora Hallownest, un reino caído asolado por una enfermedad sobrenatural.`,
        imagen : "docs/portada Hk.jpg",
        descarga :"https://www.mediafire.com/file/vziz8uc9kprb8d9/HollNgtwww.randrogames.com.rar/file"
      },
      5: {
        titulo: "Spartan Total Warrior",
        descripcion: `Spartan: Total Warrior es un juego de acción en tercera persona que se centra en batallas masivas y se remonta a los años 300 a.C. El personaje principal es un espartano, ayudado por los dioses, y a lo largo del juego mejora su equipamiento y habilidades como en un videojuego de rol. El juego contiene toques épicos y utiliza la magia`,
        imagen: "docs/portada STW.jpg",
        descarga: "https://www.mediafire.com/file/tok5d6tvkqnh3rt/SPARTAN_PTBR.rar/file",
        tutorial: "https://www.youtube.com/watch?v=mL3FXH8SCVs"

      },
      6: {
        titulo: "GTA San Andreas",
        descripcion: `En Grand Theft Auto: San Andreas, la historia gira en torno a Carl "CJ" Johnson, quien regresa a Los Santos tras el asesinato de su madre y se ve involucrado en una serie de eventos que lo obligan a luchar por su familia y su barrio. La trama se desarrolla en el estado ficticio de San Andreas, inspirado en el sur de California, y abarca tres ciudades principales: Los Santos, San Fierro y Las Venturas. `,
        imagen: "docs/Portada gtaSA.jpg",
        descarga: "https://www.mediafire.com/file/almwg0qp68322mk/Gta_San_Andreas_1.0.rar/file"
      },
           7: {
        titulo: "GTA Vice City",
        descripcion: `La historia de Grand Theft Auto: Vice City se centra en Tommy Vercetti, un ex convicto que, tras cumplir una condena de 15 años, se ve envuelto en un negocio de drogas en la ciudad ficticia de Vice City, una parodia de Miami, en la década de 1980. Tommy, en un principio, trabaja para Sonny Forelli, su antiguo jefe, pero luego se independiza y busca construir su propio imperio criminal, enfrentándose a bandas rivales y otros enemigos. `,
        imagen: "docs/Portada gtaVC.webp",
        descarga: "https://www.mediafire.com/file/2q021ts17gme02h/GTA_V1ce_C1ty_-_Ranloads.rar/file"
      },
            8: {
        titulo: "GTA III",
        descripcion: `En GTA III, la historia sigue a Claude, un criminal silencioso que es traicionado por su novia, Catalina, durante un atraco a un banco en Liberty City. Claude se ve obligado a buscar su venganza mientras se adentra en el mundo del crimen, las drogas y la corrupción de la ciudad. `,
        imagen: "docs/Portada gtaIII.jpg",
        descarga: "https://www.mediafire.com/file/mjajcls4q3hj21i/Gta_3_%252B_Silent_Patch.rar/file"
      },
           9: {
        titulo: "Manhunt",
        descripcion: `La historia de Manhunt gira en torno a un asesino serial, James Earl Cash, quien es liberado de una prisión por un director de películas snuff para participar en un juego mortífero. James debe escapar y matar a aquellos que lo persiguen, mientras intenta descubrir la verdad detrás de su situación. `,
        imagen: "docs/Manhunt Portada.jpg",
        descarga: "https://www.mediafire.com/file/wgd9y7igap2ku2g/Manhwww.randrogames.com.rar/file"
      },
    
              10: {
        titulo: "Manhunt 2",
        descripcion: `En Manhunt 2, el jugador controla a Daniel Lamb, un paciente de un centro psiquiátrico que se escapa buscando recuperar su memoria y descubrir quién es en realidad. La historia se desarrolla en Carcer City, una ciudad ficticia con una atmósfera de terror psicológico y violencia. Daniel se ve involucrado en un experimento llamado "Puente Pickman" que le hace olvidar su pasado y adoptar la personalidad de un asesino llamado Leo Kasper. `,
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
tutorialButton.className = "download-button"; // 👈 Usa la clase correcta
tutorialButton.textContent = "Ver tutorial";


  wrapper.appendChild(tutorialLabel);
  wrapper.appendChild(tutorialButton);
  downloadLinksDiv.appendChild(wrapper);
}

if (window.innerWidth < 768) {
  // móvil
  document.getElementById("gameImage").style.objectFit = "contain";
}



