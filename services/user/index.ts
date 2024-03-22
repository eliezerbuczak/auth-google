import {$Fetch} from "nitropack";

export default class UserService {
    private readonly fetch: $Fetch

    constructor(fetch: $Fetch) {
        this.fetch = fetch
    }

    async login(email: string, password: string) {
        const result = await this.fetch('/login', {
            method: 'POST',
            body: JSON.stringify({email, password})
        })
    }

    async getUsers (){
        return await this.fetch('/api/usuarios', {
            method: 'GET'
        });
    }


}