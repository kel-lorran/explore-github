class GithubUser{
    constructor( ){
        this._name = 'unnamed :(';
        this.login = '';
        this.avatarUrl = '';
        this._company = 'company_undefined :(';
        this._location = 'location_undefined :(';
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
    get name(){
        return this._name;
    }
    set name( newVal){
        if( newVal)
        this._name = newVal;
    }
    get company(){
        return this._company;
    }
    set company( newVal){
        if( newVal)
        this._company = newVal;
    }
    get location(){
        return this._location;
    }
    set location( newVal){
        if( newVal)
        this._location = newVal;
    }
}


export default GithubUser;