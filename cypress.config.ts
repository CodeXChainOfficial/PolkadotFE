import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    pageLoadTimeout: 180000,
    testIsolation: true,
  },
})
