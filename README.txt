# DESENFOCADO — sitio web

## Paleta visual
La web usa negro como base en todas las secciones, con acentos rosa eléctrico, turquesa, violeta, naranja y lima. Las tarjetas de bebidas tienen acentos de color distintos.

## Archivos
- `index.html`: contenido, secciones, nombres y descripciones.
- `styles.css`: colores, tipografía y diseño adaptable a móvil.
- `script.js`: enlaces a WhatsApp, menú móvil y año del pie de página.
- `images/`: coloca aquí tus fotos.

## Cómo añadir las fotos
Sube las imágenes a la carpeta `images` usando estos nombres:
- `bebida-principal.jpg` — imagen grande junto al nombre de Desenfocado.
- `bebida-01.jpg` — primera tarjeta.
- `bebida-02.jpg` — segunda tarjeta.
- `bebida-03.jpg` — tercera tarjeta.
- `bebida-04.jpg` — opción sin alcohol.

Puedes usar `.png` o `.webp`, pero si cambias la extensión debes cambiar también el nombre en `index.html`.
Si todavía no tienes fotos, la web muestra un diseño provisional oscuro en esos espacios. No tienes que borrar ese diseño a mano.

## Cómo cambiar nombres y descripciones
Abre `index.html` y busca el título dentro de cada tarjeta, por ejemplo:
`<h3>Primera vibra</h3>`
Cambia ese texto por el nombre que elijas. Edita el párrafo `<p>...</p>` que está justo debajo para cambiar la descripción. Guarda y publica los cambios.

## WhatsApp
El número está configurado en `script.js` como `WHATSAPP_NUMBER = "593992741931"`.
Antes de publicar, comprueba que ese número sea correcto y que tenga una cuenta de WhatsApp. Los botones de consultas generales y eventos abren mensajes preescritos.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en tu cuenta de GitHub.
2. Sube `index.html`, `styles.css`, `script.js` y la carpeta `images` (no subas solamente el ZIP).
3. En el repositorio, entra en **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
6. Espera a que GitHub Pages genere el enlace.

Nota: este sitio es una plantilla de pre-lanzamiento. Antes de anunciar o vender productos, confirma que la actividad y cualquier producto regulado cumplen la legislación local, los permisos y los requisitos de edad aplicables.
