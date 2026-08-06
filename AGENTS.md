# AGENTS.md

This repository is a React + TypeScript UI component library built with MUI, Vite, Storybook, ESLint, Prettier, and Husky.

## Project goals
- Keep components reusable, accessible, and easy to compose.
- Prefer small, focused changes over broad rewrites.
- Preserve a consistent API and styling approach across the library.

## Working conventions
- Follow the existing component structure under src/components/<Component>/.
- Keep component logic simple and typed.
- Use SCSS files for component styling instead of inline styles when possible.
- Add or update Storybook stories whenever a component changes.
- Keep documentation current when adding features or API changes.

## Preferred implementation patterns
- Favor composition over custom logic where possible.
- Reuse MUI primitives and props rather than inventing new patterns.
- Keep props descriptive and API naming consistent with MUI conventions.
- Avoid adding heavy dependencies unless they are clearly justified.

## Validation checklist
Before finishing a change, verify:
- npm run lint
- npm run build

## Notes for AI-assisted edits
- Prefer minimal diffs and preserve existing structure.
- Do not introduce breaking API changes without updating docs and stories.
- If a component is new, create the component folder, story, and supporting styles together.
