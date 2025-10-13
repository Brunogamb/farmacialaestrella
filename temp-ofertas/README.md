# 📦 Carpeta Temporal de Ofertas

## 📝 Instrucciones de Uso

### 1️⃣ Descargar Ofertas
Descarga las imágenes de ofertas desde:
- 🔗 [Material Promoción SiempreBien](https://sites.google.com/siemprebien.com.ar/material-promocion-siemprebien/box-mensual-siemprebien?authuser=0)
- 🔗 [Google Drive](https://drive.google.com/drive/folders/1vXWwIWxS0NfNGtRBkNP8T09oiK-lXHfU)

### 2️⃣ Colocar Imágenes Aquí
Coloca todas las imágenes descargadas en esta carpeta (`temp-ofertas/`)

Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3️⃣ Ejecutar Script de Optimización
```bash
pnpm run optimize-offers
```

### 4️⃣ ¡Listo!
El script automáticamente:
- ✅ Convierte a WebP (formato optimizado)
- ✅ Redimensiona a 500px de ancho
- ✅ Comprime al 80% de calidad
- ✅ Renombra a `oferta-1.webp`, `oferta-2.webp`, etc.
- ✅ Mueve a `src/assets/ofertas/`
- ✅ **Borra automáticamente** las imágenes originales de `temp-ofertas/`

---

## ⚙️ Configuración

Si necesitas cambiar los parámetros, edita `scripts/optimize-offers.js`:

```javascript
const TARGET_WIDTH = 500;      // Ancho en píxeles
const WEBP_QUALITY = 80;       // Calidad WebP (0-100)
```

---

## 💡 Ejemplo de Uso

```bash
# 1. Descargar ofertas del mes
# 2. Copiar a temp-ofertas/
# 3. Ejecutar:
pnpm run optimize-offers

# Salida esperada:
# ✅ oferta-1.webp (500x700, 45 KB)
# ✅ oferta-2.webp (500x700, 48 KB)
# ✅ oferta-3.webp (500x700, 42 KB)
# ...
```
