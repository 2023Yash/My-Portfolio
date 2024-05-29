console.log("hello world");

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.speed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.speed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.speed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit("", 3 , 20);
const fish = new Fish("", 2 , 25);
const hawk = new Hawk("", 5 , 35);

rabbit.alive = false;

console.log(rabbit.alive);
fish.eat();
hawk.sleep();
rabbit.run();

class newPerson {
    static personMade = 0;

    constructor(firstname, lastname, age, isEmployed, email, displayTo) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = Math.floor(new Date().getFullYear() - age);
        this.isEmployed = isEmployed == true ? "employed." : "not employed.";
        this.email = this.isEmail(email);
        this.displayTo = displayTo;
        newPerson.personMade++;
    }

    isEmail(email) {
        if (email.includes("@") && email.includes(".")) {
            return `Extention of email is ${email.slice(email.indexOf("@") + 1)} and email is ${email}`;
        } else {
            return "Invalid email";
        }
    }

    display() {
        document.getElementById(this.displayTo).innerHTML = `<b>About Me -</b><br>
                                                             I am ${this.firstname} ${this.lastname}.<br>
                                                             I am ${this.age} year old.<br>
                                                             I am ${this.isEmployed}.<br>
                                                             ${this.email}`;
    }
}

const aboutMe = new newPerson("Yash", "Naudiyal", 2012.8783, false, "yashnaudiyal268@gmail.com", "about-me-display");
aboutMe.display();

const aboutMom = new newPerson("Pratibha", "", 1987, true, "mamgainpratibha23@gmail.com", "about-mom-display");
aboutMom.display();