# Cómo publicar la Guía de San Vicente de Chucurí desde el celular (gratis)

Todo se hace desde el navegador del celular (Chrome en Android o Safari en iPhone). Toma unos 40 minutos, una sola vez.

> Consejo: si una página de Google o GitHub se ve rara o le faltan menús, abre el menú del navegador (⋮ o "Aa") y activa **"Versión para computador"**.

## 1. Descomprime el archivo
- **Android:** abre la app **Archivos** → Descargas → toca `guia-sanvicente.zip` → **Extraer**.
- **iPhone:** abre la app **Archivos** → Descargas → toca `guia-sanvicente.zip` y se crea la carpeta.

Quedan estos archivos: `index.html`, `config.js`, `icon.svg`, `firestore.rules` y esta guía.

## 2. Sube la guía a internet (GitHub Pages)
1. Entra a **github.com** y crea una cuenta gratis (anota tu nombre de usuario).
2. Toca **＋ → New repository**. Nombre: `guia-sanvicente`. Déjalo en **Public** y toca **Create repository**.
3. Toca **uploading an existing file** (o **Add file → Upload files**), toca **choose your files** y selecciona **todos** los archivos de la carpeta. Abajo toca **Commit changes**.
4. Ve a **Settings → Pages**. En **Branch** elige `main` y `/ (root)` y toca **Save**.
5. Espera 1 o 2 minutos. Tu link queda así: `https://TU-USUARIO.github.io/guia-sanvicente/`

Ábrelo: ya funciona en **modo de prueba**. Ahora conecta la base de datos para que las inscripciones lleguen a ti.

## 3. Crea la base de datos (Firebase)
1. Entra a **console.firebase.google.com** con tu cuenta de Google → **Crear proyecto** (ej: `guia-sanvicente`). Puedes desactivar Google Analytics.
2. Menú ☰ → **Compilación → Firestore Database → Crear base de datos** → modo **producción** → **Habilitar**.
3. En Firestore, pestaña **Reglas**: borra todo y pega el contenido de `firestore.rules`. Para copiarlo, ábrelo en tu repositorio de GitHub, toca el ícono de copiar y pégalo. Cambia `TU_CORREO@gmail.com` por tu correo de Google y toca **Publicar**.
4. Menú ☰ → **Compilación → Authentication → Comenzar → Google → Habilitar** → Guardar.
5. En Authentication → **Configuración → Dominios autorizados → Agregar dominio** → escribe `TU-USUARIO.github.io`.
6. ⚙️ **Configuración del proyecto → Tus apps → `</>` (Web)** → ponle un nombre → **Registrar app**. Te muestra `apiKey`, `authDomain`, `projectId`, etc. Déjala abierta.

## 4. Conecta la guía con la base de datos
1. En GitHub, en tu repositorio, toca `config.js` → ícono de lápiz ✏️ (Edit).
2. Copia cada valor de Firebase entre las comillas: `apiKey: "AIza..."`, `authDomain: "..."` y así con todos.
3. Cambia `TU_CORREO@gmail.com` por tu correo (el mismo de las reglas).
4. Toca **Commit changes**. En 1 o 2 minutos la guía queda conectada y desaparece el aviso de "modo de prueba".

> Los datos de Firebase no son secretos: la seguridad la dan las reglas del paso 3.

## 5. Arranca
1. Abre `https://TU-USUARIO.github.io/guia-sanvicente/#admin` y toca **Entrar con Google**.
2. Toca **Importar lugares base**: carga policía, hospital, alcaldía, comisaría y sitios turísticos.
3. En **Publicados**, toca **Editar** en cada uno. Confirma el teléfono y la dirección, y toca el mapa donde queda (o, si estás ahí, "Estoy en el lugar"). Los que dicen "(confirmar)" tienen datos que debes verificar.
4. Guarda en favoritos el link del panel (el que termina en `#admin`) para entrar rápido.
5. Comparte el link por WhatsApp y en los grupos del pueblo, y pon un código QR en los negocios.

## Uso diario
- Cuando alguien inscribe un lugar, aparece en **#admin → Por aprobar**. Toca **Llamar para verificar** y, si es real, **Aprobar**.
- Para cambiar el nombre del pueblo, el centro del mapa o el correo de administrador, edita `config.js` en GitHub.

## Perfiles de los negocios
- Cualquier persona entra en **🏪 Mi negocio** con su cuenta de Google y crea el perfil de su lugar: portada, logo, descripción, horario, teléfono, WhatsApp, redes sociales (Instagram, Facebook, TikTok, web), menú con precios, fotos de la carta, galería de hasta 12 fotos y el punto en el mapa.
- El perfil queda **en revisión** hasta que lo apruebas en `#admin`. Después, el dueño puede seguir editándolo cuando quiera desde **Mi negocio**, pero no puede aprobarse a sí mismo ni cambiar sus estrellas.
- Las fotos se reducen automáticamente en el celular para que pesen poco y se guardan en la base de datos gratis.

## Reseñas y calificaciones
- Cada lugar (menos emergencias) tiene **Calificar**. En restaurantes se califica de 1 a 5 estrellas lo rico, la atención, la rapidez, el precio, la decoración y la ubicación. Los hoteles y los demás lugares tienen sus propios aspectos.
- Para evitar reseñas falsas, quien califica entra con su cuenta de Google y deja **una sola reseña por lugar**, que puede editar después. El dueño no puede calificar su propio negocio.
- El promedio se ve en la lista, en el mapa y en el perfil. La lista se puede ordenar por **⭐ Mejor calificados**.
- Los negocios no pueden borrar las reseñas malas. Solo tú, como administrador, puedes borrar una reseña ofensiva o falsa: entra primero al panel con tu cuenta y luego abre el lugar.

## Costos
Todo es gratis con el uso normal de un pueblo: Firebase (plan Spark) permite 50.000 lecturas al día y 1 GB de datos (alcanza para miles de fotos reducidas), y GitHub Pages es gratis para sitios públicos.
