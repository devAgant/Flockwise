import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
  },
});
