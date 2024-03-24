export const useProfileStore = defineStore('profile', () => {
    const isLoading = ref<boolean>(false)
    const token = ref<string | null>(null)
    const user = ref<Object | null>(null)
    return {isLoading, token, user}
}, {
    persist: true,
})