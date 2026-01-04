# Markdown Previewer Application

This project is a real-time Markdown editor and previewer built with Vue.

## Features

* **Real-time Preview:** Instantly renders Markdown to HTML side-by-side (desktop) or stacked (mobile).
* **Local Persistence:** Automatically saves and loads content from **Local Storage** to prevent data loss.
* **File Operations:** Allows users to **Load** content from local `.md` files and **Download** the current content as a file.
* **Error Handling:** Includes a custom **Error Boundary** and a dedicated **Custom 404 Page**.

---

## Technology Stack

* **Framework:** Vue 3 (Composition API with <script setup>)

* **Language:** TypeScript (Strict Mode)

* **Styling:** Tailwind CSS v4 + Typography Plugin

* **Router:** Vue Router 4

* **Build Tool:** Vite

---

##  Installation and Setup

This project uses **npm** as the package manager and runtime.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ayomide876/altschool-assessment-2-Third-Semester
    cd markdown-preview
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run in development mode:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

    The application will be available at `https://alt-school-baraka-second-sem-exam.vercel.app/`.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts the development server. |
| `bun run build` | Builds the application for production deployment (output to `dist/`). |
| `bun run lint` | Runs ESLint for code quality checks. |

---

## Architecture

### Markdown Parsing

**`react-markdown`** over using `dangerouslySetInnerHTML`.
* **Benefit:** This approach is inherently safer, as `react-markdown` converts the input into valid React elements, avoiding common XSS risks.

* **Code Block Highlighting:** Syntax coloring is handled by react-syntax-highlighter. We rely on the chosen theme's (e.g., materialDark) method of inline style injection to color the tokens, effectively bypassing known issues with module bundlers (like Vite/Bun) failing to resolve deep package CSS paths.
### Persistence and State

A custom **`useLocalStorage`** hook manages the primary Markdown state.
* **Benefit:** This cleanly separates the persistence logic from the core component logic, ensuring the user's progress is automatically saved and loaded on every visit.

---







---

## Future Improvements

1.  **User Authentication:** Implement user authentication for personalized settings and cloud storage.
2.  **Advanced UI:** Refine styling using more components from a UI library like ShadCN/UI for a cleaner, polished look.
3.  **Performance:** Implement code splitting for the initial bundle via React's `lazy` and `Suspense` features.