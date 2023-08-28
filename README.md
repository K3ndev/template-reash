# React Template with Vite, Typescript, tailwind, and more

This template is designed to help you kickstart your React projects with the following libraries and tools: Vite with SWC, TypeScript, Tailwind CSS, Shacdn-ui components, Husky for Git hooks, AOS for animations, and ESLint for code linting.

### Folder Structure

```bash
/
|- modules/
   |- 404
   |- home 
      |- components/
      |- hooks/
      |- contant/
      |- helpers/
      |- indes.tsx
|- pages/
   |- home.tsx
   |- 404.tsx
|- shared/
   |- components/
   |- hooks/
   |- lib/
   |- styles/
|- App.tsx
|- main.tsx
```

#### modules/

- this directory contains separate modules or sections of your application. Each module typically has its own set of pages, components, hooks, and other related files. This structure promotes modularity and keeps your codebase organized.

#### pages/

- this directory holds the main pages of your application. React's `React.lazy` is used to dynamically load pages, improving the initial load time by splitting code into smaller chunks.

#### shared/

- this directory contains common functionality and resources that are used across different parts of your application.

### Getting Started

1. Click "Use this template" above
2. Then create a new repository.

Open [http://localhost:5173](http://localhost:5173/) with your browser to see the result. You can start editing the page by modifying `modules/home/index.tsx`. The page auto-updates as you edit the file.

### Addional Notes

* This template uses shacdn-ui, just add the component then youre good to go
* Use aos library to add elegant animations
* Husky is configured to run pre-commit hooks, ensuring code quality before each commit

#### Next Goal

* Create `login.tsx` for authentication readiness.
* Add Docker setup
* Transition to using Rome instead of ESLint.
