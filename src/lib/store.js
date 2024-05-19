class Store {
    constructor(data={}, callback = () => {}) {
        this.data = data;
        this.callback = callback;
        return new Proxy(data, this);
    }
    get(target, property, value) {
        if(
            [
                '[object Object]',
                '[object Array]',
            ].includes(toString.call(target[property]))
        ){
            return new Proxy(target[property],this)
        }
        return target[property]
    }
    set(target, property, value) {
        const oldValue = target[property];
        if (oldValue == value) {
            return true;
        }
        Reflect.set(target, property, value);
        this.callback(this.data)
        return true
    }
    deleteProperty(target, property, ) {
        const oldValue = target[property];
        if (oldValue == undefined) {
            return true;
        }
        Reflect.deleteProperty(target, property, );
        this.callback(this.data)
        return true
    }
}

// const store = new Store({},console.log)
// store.user='name'
// store.phones=[]
// store.phones.push('+6281935155404')
// store.phones.push('081935155404')
// store.phones.push('6281935155404')

module.exports = Store;
