## 🤖 Location Search

- A web application helps you to search for a location and shows that location on the map. So, you can search for any location and that will appear on the map with smooth moving on the map. The project is not responsive yet.

## 📦 Technologies and tools

#### Here are the technologies that I used:

- React
- TypeScript
- TailwindCSS
- Leaflet library for the map

## 👩‍🍳 The Process

- I started search for the idea, and the right API that I will use in this project.
  I didn't care a lot about the UI, I focused on the functionality and the process in this project.

## 📚 What I Learned

- During this project, I got more comfortable handling the result of the research and research process overall such as getting the results handle the search input and pass its value in the API to get the result that you expect on the map.

## 💻 Demo: https://location-search-reactts.vercel.app/

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
