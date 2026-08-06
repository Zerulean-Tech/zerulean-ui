# Component authoring skill

Use this guidance when creating or updating reusable UI components in this library.

## Checklist
1. Confirm the component fits the library's purpose and naming conventions.
2. Implement the component with TypeScript and accessible defaults.
3. Add styles in a matching SCSS file.
4. Create a Storybook story to document the component.
5. Update docs if the public API changes.
6. Verify with lint and build commands.

## Preferred structure
- src/components/<Component>/<Component>.tsx
- src/components/<Component>/<Component>.scss
- src/components/<Component>/<Component>.stories.tsx

## Principles
- Favor simple, composable APIs.
- Prefer MUI primitives and existing patterns.
- Keep styling consistent with the current library brand.
- Avoid introducing unnecessary abstractions.
