export default class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.id = ++Dog._count;
    }
}
Dog._count = 0;
