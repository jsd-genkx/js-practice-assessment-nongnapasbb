

// How cat will be look like
class Cat {

    name = "";

    constructor(name){
        this.name = name;
        console.log("I was born!, meow! ");
    }
    meow(){
        console.log("Meow meow!");
    }

    whoAmI(){
        console.log(`I'm ${this.name}`);
    }
}

// When cat born
const judyCat = new Cat("Judy");

judyCat.meow();
judyCat.whoAmI();

const tabbyCat = new Cat("Tabby");

tabbyCat.meow();
tabbyCat.whoAmI();


