# FlexiCred

Registro personal de préstamos con interés — capital e interés separados, cortes
bisemanales o quincenales configurables, período de gracia, carteras, informes
mensuales descargables (CSV/PDF) e histórico de clientes eliminados.

Toda la información se guarda **solo en el navegador de quien la usa** (no hay
servidor ni base de datos: `localStorage`). Cada persona que la instale tiene su
propio registro, separado del de los demás.

## Cómo publicarla (una sola vez)

1. Sube estos archivos a un repositorio de GitHub (arrástralos en
   **Add file → Upload files**): `index.html`, `manifest.json`, `sw.js`,
   `icon-192.png`, `icon-512.png`.
2. Ve a **Settings → Pages**.
3. En **Source**, elige la rama `main` y la carpeta `/ (root)` → **Save**.
4. GitHub te da una URL como `https://tu-usuario.github.io/flexicred/`. Puede
   tardar 1-2 minutos en activarse.

## Cómo instalarla en el teléfono

Abre esa URL desde el navegador del teléfono (Chrome en Android, Safari en
iPhone) y usa la opción **"Instalar app"** o **"Añadir a pantalla de inicio"**.
Queda con el ícono de FlexiCred y abre a pantalla completa, sin la barra del
navegador.
