export default defineNuxtRouteMiddleware((to) => {
    const auth = useProfileStore()

    const authenticatedRoute = !to.path.startsWith('/auth/')

    if (auth.token === null && authenticatedRoute) {
        return navigateTo('/auth/login')
    }

    if (auth.token !== null && !authenticatedRoute) {
        return navigateTo('/')
    }

})