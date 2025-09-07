// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: 'myapp.test',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@qirolab/nuxt-sanctum-authentication',
  ],
  laravelSanctum: {
    apiUrl: 'http://api.myapp.test',
    authMode: "token",
    redirect: {
      enableIntendedRedirect: false,
      loginPath: "/auth/login",
      guestOnlyRedirect: "/dashboard",
      redirectToAfterLogin: "/",
      redirectToAfterLogout: "/",
    },
    sanctumEndpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/api/tokens/create',
      logout: '/api/tokens/delete',
      user: '/api/user',
    },
    token: {
      storageKey: 'AUTH_TOKEN',
      provider: 'cookie',
      responseKey: 'token',
    },
  }
})
