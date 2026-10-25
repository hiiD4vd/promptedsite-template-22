# PrompTedSite – Architectural Design at the Speed of Thought

PrompTedSite is an AI-native design engine built for architects and designers. Mark up your intent, and PrompTedSite's agents execute the layout edits with high-fidelity WebGL 3D models and real-time visualization.

## 🚀 Features

- **100% Zero External Dependency**: All fonts, 3D models, textures, animations, and video assets are hosted locally.
- **WebGL & Three.js 3D Pipeline**: Embedded interactive 3D architectural scenes (`letter_scene.glb`, `building.glb`, `scene.glb`, `footer.glb`).
- **Theatre.js Timelines**: Smooth motion choreography and kinetic typography.
- **Full Brand Identity**: Completely rebranded as **PrompTedSite** with custom vector logomark, typography, and favicon.
- **Optimized Local Server**: Built-in Python server with complete MIME type mapping (GLB, WOFF2, MP4, WebP) and SPA routing.

## 📦 Getting Started

### Prerequisites

- Python 3.8+ (no external pip dependencies required)

### Running Locally

```bash
python3 server.py
```

Then open your browser and navigate to:
```
http://localhost:8080/
```

## 🛠️ Tech Stack

- **Frontend**: Nuxt 3 / Vue 3 Static Architecture
- **Rendering**: Three.js, WebGL shaders, Canvas 2D frame sequences
- **Animation**: Theatre.js, Lenis Smooth Scroll
- **Typography**: Space Grotesk, Graphik, Geist Mono, ArchitectPro
- **Styling**: Tailwind CSS Modern Utility Engine

---

© 2026 PrompTedSite. All rights reserved.
