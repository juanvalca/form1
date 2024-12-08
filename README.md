# AI Profile Questionnaire

Una aplicación interactiva que ayuda a los usuarios a descubrir su perfil de uso de Inteligencia Artificial y obtener recomendaciones personalizadas para herramientas y proyectos.

## 🎯 Objetivo

Ayudar a los participantes a:
- Identificar qué herramientas de IA se adaptan mejor a su perfil
- Descubrir proyectos potenciales que pueden desarrollar
- Mejorar su capacidad para estructurar prompts efectivos
- Encontrar su camino en diferentes campos profesionales:
  - Artes visuales y diseño
  - Tecnología y ciencia
  - Negocios y gestión
  - Ciencias sociales
  - Contenido multimedia

## 🏗 Estructura del Proyecto

### Sistema de Análisis de Prompts
```
src/utils/prompts/
  ├── promptEvaluation.ts   # Evaluación principal de prompts
  ├── types.ts              # Definiciones de tipos
  └── __tests__/           # Pruebas unitarias
```

### Componentes Modulares
```
src/components/
  ├── forms/
  │   ├── basic/           # Formularios básicos
  │   │   ├── BasicProfileForm.tsx
  │   │   ├── EducationSelector.tsx
  │   │   └── InterestAreaSelector.tsx
  │   └── prompts/         # Sistema de prompts
  │       ├── areas/       # Prompts específicos por área
  │       └── common/      # Componentes comunes de prompts
  ├── sections/            # Secciones principales
  └── layout/              # Componentes de estructura
```

## 🧪 Sistema de Pruebas

El proyecto incluye un sistema completo de pruebas unitarias:

- **Cobertura de código** con `@vitest/coverage-v8`
- **Pruebas de componentes** usando `@testing-library/react`
- **Entorno DOM** simulado con `jsdom`

### Ejecutar pruebas
```bash
# Ejecutar pruebas
npm run test

# Ver cobertura de código
npm run coverage
```

## 💻 Tecnologías Utilizadas

- React + TypeScript
- Tailwind CSS para estilos
- Zustand para gestión de estado
- Sistema avanzado de análisis de prompts
- Vite como bundler
- Vitest para pruebas unitarias

## 🚀 Características

- Interfaz intuitiva y responsiva
- Sistema de análisis de prompts multicapa
- Evaluación especializada por área
- Recomendaciones contextualizadas
- Diseño moderno y accesible
- Formularios dinámicos especializados
- Sistema de tipos robusto
- Arquitectura modular y mantenible
- Cobertura de pruebas unitarias

## 🛠 Desarrollo Local

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```
4. Ejecutar pruebas:
```bash
npm run test
```

## 📚 Recursos Adicionales

El cuestionario incluye por área:
- Ejemplos prácticos especializados
- Ejercicios interactivos adaptados
- Guías de mejora específicas
- Recursos de aprendizaje personalizados
- Comunidad de práctica

## 🔧 Mejores Prácticas de Código

- **Modularización**
  - Componentes pequeños y enfocados
  - Separación clara de responsabilidades
  - Lógica reutilizable en utilidades

- **Organización de Archivos**
  - Estructura jerárquica clara
  - Agrupación por funcionalidad
  - Separación de lógica y presentación

- **Mantenibilidad**
  - Código documentado
  - Pruebas unitarias
  - Tipos TypeScript estrictos

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del repositorio
2. Crea una rama para tu feature
3. Asegúrate de incluir pruebas unitarias
4. Envía un pull request con tus cambios

## 📝 Licencia

MIT License - siéntete libre de usar y modificar este proyecto para tus necesidades.