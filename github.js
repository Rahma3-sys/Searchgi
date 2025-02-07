class Github {
    constructor() {
        this.client_id = "Ov23lizqXWF0e4WO3XWK" ;
        this.client_secret = "78be59000bc73c239edbc743171c7dc9817a203a" ;
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile  = await profileResponse.json();
        return{
            profile
        }
    }
}