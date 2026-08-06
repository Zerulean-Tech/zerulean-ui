# AI-assisted development guide

This guide helps contributors and AI coding tools work effectively in this repository.

## Repository context
- This project is a React + TypeScript UI component library.
- Build tooling includes Vite, Storybook, ESLint, Prettier, Husky, and Vitest.
- Components should be reusable, accessible, and consistent with MUI patterns.

## Recommended workflow for AI tools
1. Start by inspecting the relevant component folder and existing stories.
2. Preserve the current component structure and naming conventions.
3. Make small, focused edits.
4. Update Storybook stories and docs when public behavior changes.
5. Validate with lint and build before finishing.

## Key files
- [README.md](../README.md)
- [AGENTS.md](../AGENTS.md)
- [.github/copilot-instructions.md](../.github/copilot-instructions.md)
- [src/components](../src/components)

## Common expectations
- Components should be typed and accessible.
- Prefer composition and MUI-based primitives.
- Keep styling modular via SCSS.
- Do not add unnecessary dependencies.
