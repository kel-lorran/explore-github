class GithubUser{
    constructor( login){
        this.name = '';
        this.login = login;
        this.avatarUrl = '';
        this.company = '';
        this.location = '';
        this.stars = 0;
        this.publicRepos = 0;
        this.followers = 0;
        this._repositories = []
    }
    get repositories(){
        return this._repositories
    }
    set repositories( val){
        this._repositories = val
        this.publicRepos = val.length
        this.stars = val.reduce(( a, e) => a = a + e.star,0)
    }
}


export default GithubUser;