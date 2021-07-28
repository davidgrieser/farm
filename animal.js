class Animal {
    constructor(name) {
        this.name = name;
        this.hungry = true;
    }

    feed() {
        this.hungry = false;
    }
}
export default Animal;