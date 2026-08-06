<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This repository is a React + TypeScript UI component library built with MUI, Vite, Storybook, ESLint, Prettier, Husky, and Vitest.

When helping with this project, follow these rules:
- Prefer reusable, composable, accessible component design.
- Keep APIs consistent with MUI conventions where possible.
- Use TypeScript strictly and preserve strong typing.
- Put component styles in matching SCSS files under the component folder.
- Add or update Storybook stories whenever a component changes.
- Keep docs and examples current when public behavior changes.
- Prefer minimal diffs and avoid unnecessary dependencies.
- Verify changes with npm run lint and npm run build before finishing.

Project structure guidance:
- Components live in src/components/<Component>/.
- Each component should usually include: <Component>.tsx, <Component>.scss, and <Component>.stories.tsx.
- Shared documentation lives in README.md, AGENTS.md, docs/, and .github/.
- Follow the existing component style and naming patterns already used in the Button component.

When generating code for this library:
- Favor MUI primitives over custom implementations.
- Keep styling predictable and theme-friendly.
- Avoid adding visual or API surprises without updating stories/docs.
- If creating a new component, scaffold the implementation, styles, and story together.
