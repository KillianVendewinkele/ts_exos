interface Pet {
    name : string,
    age: number,
    speak(): string
}

class Dog implements Pet{
    constructor(public name: string, public age: number) {
        
    }

    speak(): string {
        return "Woof!";
    }
}

class Cat implements Pet{
    constructor(public name: string, public age: number) {
        
    }

    speak(): string {
        return "UwU!";
    }
}

class Parrot implements Pet{
    constructor(public name: string, public age: number, public words: string[]) {
    }

    speak(): string {
        let blabla: string = "";
        this.words.forEach(element => {
            blabla += element;
        });
        return blabla;
    }
}

let dog = new Dog("Bibou", 3);
let cat = new Cat("Gnocchi", 2);
let parrot = new Parrot("Ah", 1, ["Connard", "Ta gueule", "Mais ferme la putain", "***"]);

console.log(dog.speak());
console.log(cat.speak());
console.log(parrot.speak());



