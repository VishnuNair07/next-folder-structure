
# Team File Naming Standards

## General Rules

  Item               Convention                        Example
  ------------------ --------------------------------- ---------------------------------------
  Folders            `kebab-case`                      `candidate-details`
  React Components   `PascalCase`                      `UserCard.tsx`
  Hooks              `camelCase` prefixed with `use`   `useUsers.ts`
  Services           `kebab-case`                      `user.service.ts`
  Redux Slice        `kebab-case`                      `user.slice.ts`
  Redux Thunks       `kebab-case`                      `user.thunks.ts`
  Redux Selectors    `kebab-case`                      `user.selector.ts`
  Redux State        `kebab-case`                      `user.state.ts`
  API Endpoints      `kebab-case`                      `endpoints.ts`
  Types              `kebab-case`                      `user-request.ts`, `user-response.ts`
  Utilities          `kebab-case`                      `date.util.ts`
  Constants          `kebab-case`                      `app.constants.ts`
  Validators         `kebab-case`                      `user.validator.ts`
  Guards             `kebab-case`                      `auth.guard.ts`
  Middleware         `kebab-case`                      `auth.middleware.ts`
  Providers          `kebab-case`                      `redux.provider.tsx`

## Components

-   Use **PascalCase**
-   Examples:
    -   `UserCard.tsx`
    -   `UserForm.tsx`
    -   `DeleteUserDialog.tsx`

Do not use: - `userCard.tsx` - `user-card.tsx`

## Next.js App Router

    app/
    ├── users/
    │   ├── page.tsx
    │   ├── loading.tsx
    │   ├── error.tsx
    │   ├── not-found.tsx
    │   └── [id]/
    │       └── page.tsx
    ├── layout.tsx
    └── globals.css

> Never rename Next.js reserved files (`page.tsx`, `layout.tsx`, etc.).

## Redux

    redux/
    ├── user.slice.ts
    ├── user.thunks.ts
    ├── user.selector.ts
    ├── user.state.ts
    └── index.ts

## API

    api/
    ├── endpoints.ts
    ├── user.service.ts
    └── index.ts

## Types

    types/
    ├── user.ts
    ├── user-request.ts
    ├── user-response.ts
    └── index.ts

Avoid generic names such as `request.ts` or `response.ts`.

## Hooks

    hooks/
    ├── useUsers.ts
    ├── usePagination.ts
    └── index.ts

## Context

    context/
    ├── AuthContext.tsx
    ├── ThemeContext.tsx
    └── DashboardContext.tsx

## Providers

    providers/
    ├── redux.provider.tsx
    ├── theme.provider.tsx
    └── query.provider.tsx

## Utilities

    utils/
    ├── date.util.ts
    ├── string.util.ts
    ├── storage.util.ts
    └── encryption.util.ts

## Validators

    validators/
    ├── login.validator.ts
    ├── user.validator.ts
    └── candidate.validator.ts

## Constants

    constants/
    ├── app.constants.ts
    ├── api.constants.ts
    ├── role.constants.ts
    └── theme.constants.ts

Use `UPPER_SNAKE_CASE` for exported constants.

Example:

``` ts
export const API_TIMEOUT = 30000;
export const DEFAULT_PAGE_SIZE = 20;
```

## Configuration

    config/
    ├── env.ts
    ├── app.config.ts
    └── axios.config.ts

## Barrel Files

Every public folder should contain an `index.ts`.

Example:

``` ts
export * from "./user.service";
export * from "./endpoints";
```

## Import Order

1.  External libraries
2.  Core/shared modules
3.  Feature modules
4.  Relative imports
5.  Styles

Example:

``` ts
import { createSlice } from "@reduxjs/toolkit";

import { ApiClient } from "@/core/api-client";

import { User } from "../types";
import { initialUserState } from "./user.state";

import "./styles.css";
```

## Module Structure

    modules/
    └── users/
        ├── api/
        │   ├── endpoints.ts
        │   ├── user.service.ts
        │   └── index.ts
        ├── components/
        │   ├── UserCard.tsx
        │   ├── UserForm.tsx
        │   └── index.ts
        ├── hooks/
        │   ├── useUsers.ts
        │   └── index.ts
        ├── redux/
        │   ├── user.slice.ts
        │   ├── user.state.ts
        │   ├── user.thunks.ts
        │   ├── user.selector.ts
        │   └── index.ts
        ├── types/
        │   ├── user.ts
        │   ├── user-request.ts
        │   ├── user-response.ts
        │   └── index.ts
        └── index.ts

## Team Standards

-   Use PascalCase for React components.
-   Use kebab-case for all non-component files.
-   Name files based on their responsibility.
-   Keep one primary responsibility per file.
-   Add `index.ts` barrel files where appropriate.
-   Avoid ambiguous abbreviations.
-   Follow the same folder structure across all feature modules.
