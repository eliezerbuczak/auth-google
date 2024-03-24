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
        ]
    ],
    imports: {
        dirs: ['~/stores/']
    },
    runtimeConfig: {
        public : {
            SERVER_BACK_END: process.env.SERVER_BACK_END
        }
    }
})
