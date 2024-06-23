
export class storage {

    static set(key, cartItems) {
        if (!playinserver())
            localStorage.setItem(key, JSON.stringify(cartItems))
    }

    static get(key) {
        if (!playinserver())
            return JSON.parse(localStorage.getItem(key))
    }
    static gettypeid() {
        if (!playinserver()) {
            var currentgender = storage.get('type')
            var genderValue = [].find(gender => gender.title === currentgender)?.id;
            return genderValue
        }
    }

}
export class StaticDb {
    static brand (id) {
        const brandObject = [].find(brand => brand.id === id);

        return brandObject ? brandObject.title : '';
    }
}

function playinserver() {
    return typeof window === 'undefined';
}

