import {$Fetch} from "nitropack";

export default class UserService {
    private readonly fetch: $Fetch

    constructor(fetch: $Fetch) {
        this.fetch = fetch
    }

    async login(user: any) {
        return await this.fetch('/api/login', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(user)
        })
    }

    async getUser (){
        return await this.fetch('/api/user', {
            credentials: 'include',
            method: 'GET'
        });
    }

    async register (user: any){
        return await this.fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(user)
        });
    }


}