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
        clientId: '91251673500-d6172fldmbtvgv8h23mvg3kelebc11l8.apps.googleusercontent.com',
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
