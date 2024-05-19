class CookieStore {
    constructor(init={}){
        if(typeof init=='object'&&Object.keys(init).length){
            for(const name in init){
                const value=init[name]
                this[name]=value
            }
        }
    }
    get cookie() {
        const cookies=[]
        for(const name of Object.getOwnPropertyNames(this)){
            const value=this?.[name]?.value
            if(value){
                cookies.push([name,value].join('='))
            }
        }
        return cookies.join('; ')
    }
    set cookie(value) {
        value = [].concat(value);

        const regexp = /(Domain|Expires|HttpOnly|Max-Age|Partitioned|Path|Secure|SameSite)/i;

        for (const string of value) {
            for (const [, name, value] of string.matchAll(/([^=; ]+)=([^;]+)/g)) {
                if (regexp.test(name)) {
                    continue;
                }
                if (value) {
                    this[name] = { name, value };
                } else {
                    this[name] = undefined;
                }
            }
        }
    }
}

// const cookieStore=new CookieStore({
//     user:{name:'user',value:'name'}
// })

// var cookie = ["1P_JAR=2024-05-18-11; expires=Mon, 17-Jun-2024 11:02:04 GMT; path=/; domain=.google.com; Secure", "AEC=AQTF6HzNZvJ9JovRyxEZicd-Z8mRTJz7Fnlir1BlpyiOiaou4GA1QuV5zn0; expires=Thu, 14-Nov-2024 11:02:04 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax", "NID=514=Y55MJ0MzvOwss82PvQhGm6op6w4iYsy3m6AjN_T-i7CTTb0bZ-F-k03ekNl6vFB2jwy-KD27UKD1_k8C0HPOGCAYseOz9gS_3QmgrufZ8alyJTQbwb2IErk8rw-Eq08BJhJ246ON9eK7qwlnsaoc0tV8vds0bzKZQqw9pBgjL1I; expires=Sun, 17-Nov-2024 11:02:04 GMT; path=/; domain=.google.com; HttpOnly"];

// cookieStore.cookie=cookie

// console.log(cookieStore.cookie)

module.exports = CookieStore;
