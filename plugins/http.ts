import {FetchContext} from "ofetch";
import UserService from "~/services/user";


interface IHttp {
    user: UserService
}
export default defineNuxtPlugin(() => {
    const env = useRuntimeConfig().public

    const fetcher = $fetch.create({
        baseURL: env.SERVER_BACK_END,
        onRequest({request, options}: FetchContext) {
            const authHeader = {Authorization: `Bearer ${useProfileStore().token}`}
            options.headers = Object.assign(authHeader, options.headers)
        }
    })

    const httpService: IHttp = {
        user: new UserService(fetcher)
    }

    return {
        provide: {
            http: httpService
        }
    }
})