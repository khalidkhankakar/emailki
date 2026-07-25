# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 React project for building SaaS-style email templates with `@unlayer/react-elements`.

- `app/` contains App Router pages, layouts, and global styles. The dashboard route lives under `app/dashboard/`.
- `components/templates/` contains individual email template components such as `Welcome.tsx`, `Invoice.tsx`, and `PasswordReset.tsx`.
- `public/` stores static assets referenced by the app and templates, for example `/avatar.svg`.
- Root config files include `next.config.ts`, `tsconfig.json`, `biome.json`, `postcss.config.mjs`, and `pnpm-workspace.yaml`.

## Build, Test, and Development Commands

Use pnpm for dependency and script execution.

- `pnpm dev` starts the local Next.js development server.
- `pnpm build` creates a production build and runs Next.js checks.
- `pnpm start` serves the production build after `pnpm build`.
- `pnpm lint` runs `biome check` across the repository.
- `pnpm format` runs `biome format --write` to apply formatting.

## Coding Style & Naming Conventions

TypeScript and React are configured with strict type checking. Use `.tsx` for React components and `.ts` for non-JSX utilities. Name exported components in PascalCase, matching the filename where practical, for example `TrialEnding.tsx` exports `TrialEnding`.

Biome is the source of truth for formatting and linting: 2-space indentation, organized imports, and recommended React/Next rules. Prefer existing local patterns in template files: constants for design tokens, small helper functions for repeated email cells, and explicit Unlayer component props for email-safe layout.

## Testing Guidelines

No test runner or `pnpm test` script is currently configured. For now, validate changes with:

- `pnpm lint`
- `pnpm build`
- manual review in `pnpm dev`

When adding tests, place them close to the feature they cover using names like `ComponentName.test.tsx`, and add the corresponding `test` script to `package.json`.

## Commit & Pull Request Guidelines

This checkout does not include Git history, so follow a concise imperative commit style such as `Add invoice email template` or `Fix dashboard layout spacing`.

Pull requests should include a short description, screenshots for visible UI or email-template changes, any linked issue, and the commands run for validation. Note any new assets added to `public/` and call out changes that affect exported email HTML or responsive behavior.

## Security & Configuration Tips

Do not commit secrets or environment-specific credentials. Keep external image URLs, tracking links, and customer-facing copy reviewable in template components. Prefer static assets in `public/` when templates need stable local references.
