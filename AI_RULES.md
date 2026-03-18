# AI Development Rules & Tech Stack

## Tech Stack
- **Framework**: React with TypeScript for type-safe development.
- **Routing**: React Router for client-side navigation (routes defined in `src/App.tsx`).
- **Styling**: Tailwind CSS for utility-first, responsive styling.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible, pre-built components.
- **Icons**: Lucide React for a consistent and scalable icon set.
- **State Management**: React Hooks (useState, useReducer, useContext) for local and shared state.
- **Project Structure**: Standardized directory layout (`src/pages`, `src/components`, `src/hooks`).

## Development Rules

### 1. Component Architecture
- **File per Component**: Every new component or hook MUST have its own file. Never bundle multiple components in one file.
- **Size Limit**: Aim to keep components under 100 lines of code. Refactor into smaller sub-components if they grow too large.
- **Location**: 
    - Pages go in `src/pages/`.
    - Reusable UI elements go in `src/components/`.
    - Custom logic goes in `src/hooks/`.
- **Naming**: Use PascalCase for component files (e.g., `Button.tsx`) and camelCase for utility/hook files (e.g., `useAuth.ts`).

### 2. Styling & UI
- **Tailwind First**: Use Tailwind CSS classes for all styling. Avoid custom CSS files unless absolutely necessary.
- **shadcn/ui**: Always check if a component exists in the shadcn/ui library before building from scratch.
- **Responsive Design**: All layouts must be mobile-first and fully responsive using Tailwind's breakpoint prefixes (`sm:`, `md:`, `lg:`, etc.).
- **Icons**: Exclusively use `lucide-react` for iconography.

### 3. Coding Standards
- **No Overengineering**: Keep solutions simple and elegant. Don't implement complex error handling or fallbacks unless specifically requested.
- **TypeScript**: Use strict typing. Avoid `any` at all costs.
- **Toasts**: Use toast notifications to provide feedback for important user actions (success, error, loading).
- **Error Handling**: Let errors bubble up naturally unless a specific `try/catch` is required for a feature's logic.

### 4. Navigation
- **Main Entry**: The default landing page is always `src/pages/Index.tsx`.
- **App.tsx**: Keep all route definitions within `src/App.tsx` to maintain a central map of the application's structure.