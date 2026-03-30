# 🌌 Retrowave Portfolio

<img width="1650" height="865" alt="{5C8C66F2-6CBD-45D8-BAA5-D64B14DA3D2B}" src="https://github.com/user-attachments/assets/3196b592-09f0-4369-8890-aae3fe3540d0" />
<img width="1706" height="900" alt="{ACC720EE-066D-4001-A84F-8E42E4488C07}" src="https://github.com/user-attachments/assets/d961a4bf-2cf6-4551-85bb-0e03fd58866c" />

Portal centralizado de proyectos personales con estética **retrowave/synthwave**. Construido con React, TypeScript y Tailwind CSS, incluye animaciones suaves, diseño responsivo y paleta de colores neón sobre fondo oscuro.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

## ✨ Características

- 🎨 Diseño retrowave con acentos neón (cyan, magenta, púrpura)
- 📱 Totalmente responsivo (móvil, tablet, escritorio)
- ⚡ Animaciones sutiles y transiciones suaves
- ♿ Accesibilidad WCAG 2.1 (contraste, navegación por teclado, ARIA)
- 🔍 SEO optimizado (meta tags, Open Graph, Twitter Cards)
- 🏷️ Tarjetas de proyecto con etiquetas de tecnologías y enlaces a GitHub/Demo

## 🚀 Instalación

### Prerrequisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) o [bun](https://bun.sh/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/tu-portfolio.git
cd tu-portfolio

# 2. Instalar dependencias
npm install
# o con bun
bun install

# 3. Iniciar el servidor de desarrollo
npm run dev
# o con bun
bun dev
```

La aplicación estará disponible en `http://localhost:8080`.

### Build de producción

```bash
npm run build
npm run preview
```

Los archivos compilados se generan en la carpeta `dist/`.

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|---|---|
| **React 18** | UI con componentes funcionales |
| **TypeScript** | Tipado estático |
| **Vite** | Bundler y dev server |
| **Tailwind CSS** | Utilidades de estilo |
| **shadcn/ui** | Componentes base |
| **Lucide React** | Iconos |

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── HeroSection.tsx      # Encabezado con nombre y lema
│   ├── IntroSection.tsx      # Sección introductoria
│   ├── ProjectGrid.tsx       # Cuadrícula de proyectos
│   ├── Footer.tsx            # Pie de página con redes sociales
│   └── ui/                   # Componentes reutilizables (shadcn)
├── pages/
│   └── Index.tsx             # Página principal
├── index.css                 # Variables CSS y estilos globales
└── main.tsx                  # Punto de entrada
```

## ✏️ Personalización

Edita el array `projects` en `src/components/ProjectGrid.tsx` para añadir tus propios proyectos:

```typescript
{
  title: "Mi Proyecto",
  description: "Descripción corta del proyecto.",
  tags: ["React", "Node.js"],
  github: "https://github.com/tu-usuario/mi-proyecto",
  demo: "https://mi-proyecto.vercel.app"
}
```

## 📄 Licencia

MIT © Made with ❤️ by @aisurf3r
