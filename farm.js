class Farm {
    constructor() {
        this.field = []; // or possibly 0
        // null ?  probably shouldn't use something we don't know
    }

    // make method
    addAnimal(animal) {
        if (animal.hungry === false) {
            return this.field.push(animal);
        }
    }
    // possibly have a field with arces
}

export default Farm;