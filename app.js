const GENRES = [
  { id: "all", label: "Todos los géneros" },
  { id: "ambient", label: "Ambient" },
  { id: "bass", label: "Bass" },
  { id: "bass-house", label: "Bass House" },
  { id: "bounce", label: "Bounce" },
  { id: "breakcore", label: "Breakcore" },
  { id: "bubbling", label: "Bubbling" },
  { id: "cumbia", label: "Cumbia" },
  { id: "drum-and-bass", label: "Drum & Bass" },
  { id: "dubstep", label: "Dubstep" },
  { id: "footwork", label: "Footwork" },
  { id: "funk", label: "Funk" },
  { id: "ghettotech", label: "Ghettotech" },
  { id: "guaracha", label: "Guaracha" },
  { id: "hard-techno", label: "Hard Techno" },
  { id: "hardgroove", label: "Hard Groove" },
  { id: "hi-tech", label: "Hi Tech" },
  { id: "hip-hop", label: "Hip-Hop" },
  { id: "house", label: "House" },
  { id: "house-tech", label: "House Tech" },
  { id: "hybrid-trap", label: "Hybrid Trap" },
  { id: "hyperpop", label: "Hyperpop" },
  { id: "idm", label: "IDM" },
  { id: "jersey-club", label: "Jersey Club" },
  { id: "jungle", label: "Jungle" },
  { id: "latin-bass", label: "Latin Bass" },
  { id: "latin-core", label: "Latin Core" },
  { id: "latineo-experimental", label: "Latineo Experimental" },
  { id: "latino", label: "Latino" },
  { id: "pop-en-espanol", label: "Pop en español" },
  { id: "progressive-house", label: "Progressive House" },
  { id: "progressive-trance", label: "Progressive Trance" },
  { id: "psytech", label: "Psytech" },
  { id: "psytrance", label: "Psytrance" },
  { id: "r-and-b", label: "R&B" },
  { id: "reggaeton", label: "Reggaeton" },
  { id: "riddim", label: "Riddim" },
  { id: "speed-garage", label: "Speed Garage" },
  { id: "techno", label: "Techno" },
  { id: "trance", label: "Trance" },
  { id: "tribal", label: "Tribal" },
  { id: "uk-garage", label: "UK Garage" }
];

const ARTISTS = [
  {
    id: "andresestr3s",
    name: "Andresestr3s",
    genres: ["dubstep", "riddim", "hard-techno", "speed-garage", "drum-and-bass"],
    bio: "Cuando toco, me vuelvo aquel morro de 12 años que les enseñaba a sus amigos los tracks que encontraba en YouTube, convencido de que les causarían el mismo impacto que a él. Durante el set canalizo la energía de la gente para que se sientan como los villanos protagónicos: los que siempre tienen más estilo que el héroe. En el dancefloor busco transmitir la armonía dentro del caos. Dejo que la estructura y la armonía de la música guíen la mezcla hasta ese cambio de track que protagoniza el momento.",
    image: "assets/andresestr3s.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/andresestr3s?stkn=MTJwODdrZDFyYXVhYw%3D%3D&utm_source=qr", icon: "instagram" },
      { label: "YouTube", url: "https://youtube.com/@unhombreptm?si=KNCJy1V7xK_jjB9t", icon: "play" },
      { label: "SoundCloud", url: "https://on.soundcloud.com/ZvsQzC9NccYvFvQBwR", icon: "sound" }
    ]
  },
  {
    id: "binkan",
    name: "Binkan",
    genres: ["hip-hop", "idm", "r-and-b", "pop-en-espanol"],
    bio: "Binkan —antes Rayo Adentro— es productor, compositor y artista multidisciplinario de la Ciudad de México, con más de diez años de experiencia en producción musical y ocho de trayectoria en vivo. Su proyecto parte del diseño sonoro, combinando texturas orgánicas y digitales con una lírica influenciada por la literatura hispánica, la metáfora y el realismo mágico. Entre hip-hop, IDM, R&B y pop en español construye un universo híbrido donde la experimentación convive con una fuerte sensibilidad narrativa y emocional. Su propuesta abarca live set y DJ set, con presentaciones en México y Estados Unidos, incluyendo The Lot Radio y FOOD en Nueva York. En 2026 publicó REFLEX.IO y prepara INFLEX.IO; también forma parte de Nuevos Eyes! y del colectivo audiovisual opsion.b.",
    image: "assets/binkan.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/binkanbinkanbinkan/", icon: "instagram" },
      { label: "Contacto", url: "mailto:rayoadentro@gmail.com", icon: "mail" }
    ]
  },
  {
    id: "caparroso",
    name: "Caparroso",
    genres: ["ambient", "drum-and-bass", "uk-garage", "progressive-house", "hardgroove", "trance", "bass"],
    bio: "HI.!!",
    image: "assets/caparroso.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/caparrosoo/", icon: "instagram" },
      { label: "SoundCloud", url: "https://soundcloud.com/caparroso", icon: "sound" },
      { label: "Bandcamp", url: "https://caparroso.bandcamp.com/", icon: "bandcamp" },
      { label: "Sitio web", url: "https://caparroso.github.io/Web/", icon: "web" }
    ]
  },
  {
    id: "cat-arsis",
    name: "Cat:arsis",
    genres: ["psytrance", "progressive-trance", "hi-tech", "techno", "latin-core", "bounce", "hard-techno", "hardgroove", "bass"],
    bio: "Cat:arsis es el alias sonoro de Regina Puerto, un proyecto en constante evolución y transmutación. Su sonido explora ritmos rápidos, intensos, energéticos, oscuros y envolventes. En cada mezcla abre espacio a la experimentación para construir una atmósfera propia.",
    image: "assets/cat-arsis.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/cat.arsisdj/", icon: "instagram" },
      { label: "YouTube", url: "https://www.youtube.com/@catarsisdj6", icon: "play" }
    ]
  },
  {
    id: "firefly-light",
    name: "Firefly Light",
    genres: ["hyperpop", "bass", "jersey-club", "breakcore"],
    bio: "Firefly Light es productor, compositor, DJ y cantautor. Su propuesta crea ambientes bailables y gritos melódicos, fusionando sonidos del alt-pop y la electrónica con el emo, la naturaleza y los espacios que lo rodean.",
    image: "assets/firefly-light.jpg",
    socials: [
      { label: "YouTube", url: "https://www.youtube.com/@fireflylightflac", icon: "play" },
      { label: "Instagram", url: "https://www.instagram.com/firefly_lightt/", icon: "instagram" },
      { label: "SoundCloud", url: "https://on.soundcloud.com/GkOkkwuEiZtuL7WEQt", icon: "sound" }
    ]
  },
  {
    id: "kinychbeat",
    name: "Kinychbeat",
    genres: ["techno", "house", "hybrid-trap", "bass", "bass-house", "hyperpop", "uk-garage", "latino"],
    bio: "Kinychbeat es artista, músico, DJ y productor mexicano. Su propuesta electrónica nace de la producción y la experimentación, conectando distintos ritmos, texturas y estructuras. Combina energía y profundidad con elementos melódicos y emocionales, tanto para la pista de baile como para una escucha más personal.",
    image: "assets/kinychbeat.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/kinychbeat/", icon: "instagram" },
      { label: "TikTok", url: "https://www.tiktok.com/@kinychbeat", icon: "music" },
      { label: "YouTube", url: "https://www.youtube.com/@kinychbeat", icon: "play" },
      { label: "SoundCloud", url: "https://soundcloud.com/kinychbeat", icon: "sound" }
    ]
  },
  {
    id: "n4tura",
    name: "n4tura",
    genres: ["latin-bass", "footwork", "tribal", "jungle", "ghettotech", "jersey-club", "drum-and-bass", "latineo-experimental", "bubbling", "ambient", "funk", "cumbia", "reggaeton", "guaracha"],
    bio: "n4tura es unx DJ y artista multidisciplinaria nacida y residente en Querétaro, México. Su práctica explora las posibilidades del sonido a través del juego, la intuición, el contraste y la experimentación, conectando sonidos contemporáneos con memorias y resonancias ancestrales. Su investigación atraviesa percusiones hipnóticas, bajos latinos, bubbling, breaks y paisajes ambient, con una energía juguetona, profunda y sensual. Comenzó a mezclar en Milán, Italia, mientras estudiaba Artes Audiovisuales, tocando en contextos migrantes y fiestas clandestinas; actualmente desarrolla su práctica dentro de la escena underground mexicana.",
    image: "assets/n4tura.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/n4turaaaa/", icon: "instagram" },
      { label: "SoundCloud", url: "https://soundcloud.com/n4turaaaa", icon: "sound" },
      { label: "Beacons", url: "https://beacons.ai/n4tura", icon: "web" }
    ]
  },
  {
    id: "prax",
    name: "PRAX",
    genres: ["hard-techno", "psytech", "house-tech", "dubstep", "bass"],
    bio: "PRAX es una DJ mexicana originaria de Querétaro que trabaja con sonidos potentes, envolventes y emocionantes. Es productora de eventos en Messier 82 e integrante del colectivo BEATS; desde ambos proyectos ha contribuido a crear encuentros pensados para romper el dancefloor. Ha abierto pista para Magnolia Coronado y Ann García. En sus sets hard busca llevar al público al clímax sonoro, combinando hard techno, uptempo y dubstep para construir una experiencia dinámica y emocionante.",
    image: "assets/prax.jpg",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/prax_ofi/", icon: "instagram" },
      { label: "SoundCloud", url: "https://on.soundcloud.com/auPB3wRiAQmRjPPN40", icon: "sound" }
    ]
  }
];

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"></circle></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="m10 9 5 3-5 3Z"></path></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18V5l10-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="16" cy="16" r="3"></circle></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 14v-4m4 7V7m4 12V5m4 12V7m4 7v-4"></path></svg>',
  bandcamp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7.5 7h13l-4 10h-13Z"></path></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"></path></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>'
};

const state = { genre: "all", genreQuery: "" };
const artistGrid = document.getElementById("artistGrid");
const genreList = document.getElementById("genreList");
const genreSearch = document.getElementById("genreSearch");
const filterToggle = document.getElementById("filterToggle");
const filterPopover = document.getElementById("filterPopover");
const profileLayer = document.getElementById("profileLayer");
let lastFocusedElement = null;

const genreName = id => GENRES.find(genre => genre.id === id)?.label || id;
const sortedArtists = () => ARTISTS
  .filter(artist => state.genre === "all" || artist.genres.includes(state.genre))
  .sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }));

function normalizeText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

function compactGenres(artist) {
  const names = artist.genres.map(genreName);
  const visible = names.slice(0, 3);
  return `${visible.join(" · ")}${names.length > 3 ? ` · +${names.length - 3}` : ""}`;
}

function renderArtists() {
  const artists = sortedArtists();
  artistGrid.innerHTML = artists.map((artist, index) => `
    <button class="artist-tile" type="button" data-artist="${artist.id}" aria-label="Ver perfil de ${artist.name}">
      <img src="${artist.image}" alt="Fotografía de ${artist.name}">
      <span class="tile-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="tile-copy">
        <span class="artist-name">${artist.name}</span>
        <span class="artist-genres">${compactGenres(artist)}</span>
      </span>
    </button>
  `).join("");
  document.getElementById("emptyState").hidden = artists.length !== 0;
  document.getElementById("activeFilter").textContent = genreName(state.genre);
}

function renderGenreMenu() {
  const query = normalizeText(state.genreQuery.trim());
  const visibleGenres = GENRES.filter(genre => normalizeText(genre.label).includes(query));
  genreList.innerHTML = visibleGenres.length
    ? visibleGenres.map(genre => {
      const total = genre.id === "all" ? ARTISTS.length : ARTISTS.filter(artist => artist.genres.includes(genre.id)).length;
      return `<li><button type="button" data-genre="${genre.id}" aria-current="${genre.id === state.genre}"><span>${genre.label}</span><span class="genre-total">${String(total).padStart(2, "0")}</span></button></li>`;
    }).join("")
    : '<li class="genre-no-results">No encontramos ese género.</li>';
}

function setFilterOpen(isOpen) {
  filterPopover.hidden = !isOpen;
  filterToggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) requestAnimationFrame(() => genreSearch.focus());
}

function openProfile(artistId) {
  const artist = ARTISTS.find(item => item.id === artistId);
  if (!artist) return;
  lastFocusedElement = document.activeElement;
  const photo = document.getElementById("profilePhoto");
  const socials = document.getElementById("profileSocials");
  const socialsLabel = document.getElementById("profileSocialsLabel");
  const hasSocials = artist.socials.length > 0;

  photo.dataset.artist = artist.id;
  photo.innerHTML = `<img src="${artist.image}" alt="Fotografía de ${artist.name}">`;
  document.getElementById("profileName").textContent = artist.name;
  document.getElementById("profileBio").textContent = artist.bio;
  document.getElementById("profileGenres").innerHTML = artist.genres.map(id => `<li>${genreName(id)}</li>`).join("");
  socials.innerHTML = artist.socials.map(link => `<li><a href="${link.url}" target="_blank" rel="noreferrer">${ICONS[link.icon]}${link.label}</a></li>`).join("");
  socials.hidden = !hasSocials;
  socialsLabel.hidden = !hasSocials;
  profileLayer.classList.add("is-open");
  profileLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("profile-open");
  document.getElementById("closeProfile").focus();
}

function closeProfile() {
  profileLayer.classList.remove("is-open");
  profileLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("profile-open");
  lastFocusedElement?.focus();
}

filterToggle.addEventListener("click", () => setFilterOpen(filterPopover.hidden));
genreSearch.addEventListener("input", event => {
  state.genreQuery = event.target.value;
  renderGenreMenu();
});

genreList.addEventListener("click", event => {
  const button = event.target.closest("button[data-genre]");
  if (!button) return;
  state.genre = button.dataset.genre;
  state.genreQuery = "";
  genreSearch.value = "";
  renderGenreMenu();
  renderArtists();
  setFilterOpen(false);
});

artistGrid.addEventListener("click", event => {
  const tile = event.target.closest(".artist-tile");
  if (tile) openProfile(tile.dataset.artist);
});

document.getElementById("closeProfile").addEventListener("click", closeProfile);
profileLayer.addEventListener("click", event => { if (event.target === profileLayer) closeProfile(); });
document.addEventListener("click", event => {
  if (!filterPopover.hidden && !event.target.closest(".filter-control")) setFilterOpen(false);
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (profileLayer.classList.contains("is-open")) closeProfile();
  else if (!filterPopover.hidden) setFilterOpen(false);
});

renderGenreMenu();
renderArtists();
