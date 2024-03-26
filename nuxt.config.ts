// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'storeToRefs'],
            },
        ],
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-vue3-google-signin'
    ],
    googleSignIn: {
        clientId: process.env.SERVER_BACK_END,
    },
    imports: {
        dirs: ['~/stores/']
    },
    runtimeConfig: {
        public : {
            SERVER_BACK_END: process.env.SERVER_BACK_END
        }
    }
})
