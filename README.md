# Diama. DJ Selections

Biblioteca estática de artistas para Diama, presentada como una cuadrícula editorial de retratos. Está preparada para GitHub Pages y no necesita instalar nada.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `diama-selections`.
2. Sube todo el contenido de esta carpeta (`index.html`, `styles.css`, `app.js`, `.nojekyll` y `assets`) a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main`, la carpeta `/ (root)` y guarda.

GitHub mostrará la dirección pública cuando termine de publicar.

## La biblioteca

Los artistas aparecen en orden alfabético dentro de una cuadrícula visual. El selector superior permite recorrer o buscar géneros y mantiene visible el fondo de Diama. Al abrir un retrato se muestra la introducción del artista, sus géneros y enlaces oficiales.

## Agregar artistas

Los datos están en `app.js`, dentro de la lista `ARTISTS`. Cada artista puede tener varios géneros:

```js
{
  id: "caparroso",
  name: "Caparroso",
  genres: ["ambient", "drum-and-bass", "uk-garage", "progressive-house", "hardgroove", "trance", "bass"],
  bio: "Descripción breve del artista.",
  image: "assets/caparroso.jpg",
  socials: [
    { label: "Instagram", url: "https://instagram.com/usuario", icon: "instagram" }
  ]
}
```

Para cada foto, agrega el archivo dentro de `assets` y escribe su ruta en `image`. Las imágenes deben ser fotografías del artista, sin reutilizar el diseño de sus press kits.

La biblioteca incluye actualmente a Andresestr3s, Caparroso, Cat:arsis, Firefly Light y Kinychbeat.
