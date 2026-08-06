# Zerulean UI Library

A React + TypeScript UI component library based on Material-UI (MUI), set up with Vite, ESLint, Prettier, Husky, lint-staged, Storybook, and AI-ready development guidance.

## Features
- **React + TypeScript**: Modern, type-safe component development
- **Material-UI (MUI)**: Build on top of MUI for consistent, accessible design
- **Vite**: Fast build tool and dev server
- **ESLint & Prettier**: Code linting and formatting
- **Husky & lint-staged**: Pre-commit hooks for code quality
- **Storybook**: Isolated component development and documentation
- **AI-ready workflow**: Copilot instructions, agent guidance, prompts, and contributor docs included

## Getting Started

### Install dependencies
```sh
npm install
```

### Start the development server
```sh
npm run dev
```

### Run Storybook
```sh
npm run storybook
```

### Lint and build
```sh
npm run lint
npm run build
```

### Test pre-commit hooks
Try committing code to see Husky and lint-staged in action.

## AI-assisted development
This repository includes:
- [.github/copilot-instructions.md](.github/copilot-instructions.md): workspace-specific guidance for Copilot
- [AGENTS.md](AGENTS.md): repository conventions for AI agents
- [.github/prompts](.github/prompts): reusable prompts for common tasks
- [docs/ai-development-guide.md](docs/ai-development-guide.md): contributor and AI workflow guidance
- [.github/skills/component-authoring/README.md](.github/skills/component-authoring/README.md): component authoring guidance

## Component conventions
When adding a new component:
1. Create a component folder under src/components/<Component>/.
2. Add the implementation, SCSS styles, and Storybook story together.
3. Keep the API consistent and accessible.
4. Document usage when behavior or props change.

Current components include a reusable Button and a new Card component for content blocks, feature panels, and rich summaries.

---

For more details, see the configuration files in the project root.
