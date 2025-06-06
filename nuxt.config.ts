// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/eslint', 'vuetify-nuxt-module', '@nuxtjs/tailwindcss'],
  vuetify: {
    // Vuetify configuration
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
  },
  // Enable page routing
  pages: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      hmr: {
        clientPort: 3000,
        port: 24678,
        host: '0.0.0.0',
      },
      watch: {
        usePolling: true,
      },
    },
  },
});
