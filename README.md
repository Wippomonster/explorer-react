# Explorer App con React

Aplicación adaptable para explorar países, hecha con React y TypeScript siguiendo Atomic Design. Proyecto de la materia Diseño Web Adaptable (UNIVO). Usa datos de demostración (no se conecta a ninguna API).

## Funcionalidades

- Tarjetas de países con bandera, nombre, población, región y capital.
- Cuatro tarjetas por fila en pantallas amplias; dos en tabletas y una en móviles.
- Búsqueda por nombre que se actualiza al escribir.
- Filtro por región combinado con la búsqueda.
- Mensaje cuando ningún país coincide.
- Menú de navegación en escritorio y menú desplegable en móvil.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- pnpm

## Requisitos

- Node.js 20 o superior
- pnpm

## Cómo ejecutarlo

```bash
git clone https://github.com/Wippomonster/explorer-react.git
cd explorer-react
pnpm install
pnpm dev
```

Abre la dirección que muestra la terminal (normalmente `http://localhost:5173`).

Para construir la versión de producción:

```bash
pnpm build
```

## Organización de carpetas (Atomic Design)

| Ruta | Contenido |
|---|---|
| `src/components/atoms/` | Piezas básicas: `Button`, `Input`, `Select`, `Flag`, `InfoLine` |
| `src/components/molecules/` | Combinaciones: `CountryCard`, `SearchField`, `RegionFilter`, `NavLinks`, `EmptyMessage` |
| `src/components/organisms/` | Secciones: `Header`, `FiltersBar`, `CountryGrid`, `Footer` |
| `src/App.tsx` | Componente padre que guarda el estado compartido |
| `src/types/` | Interfaces y tipos de TypeScript |
| `src/data/` | Datos de demostración |
| `src/utils/` | Funciones auxiliares (`filterCountries`, `formatPopulation`) |

## Estado y comunicación entre componentes

El estado (`search`, `region` e `isMenuOpen`) vive en `App.tsx` con `useState`. Los componentes hijos lo reciben por props y piden cambiarlo llamando a funciones callback (`onSearchChange`, `onRegionChange`, `onToggleMenu`). Con ese estado, `App` calcula la lista de países visibles con `filterCountries`.