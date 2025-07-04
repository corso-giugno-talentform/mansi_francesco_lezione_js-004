class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    stampaEta() {//getter
        if (this.age) {
            console.log('La tua età è: ' + this.age);
        } else {
            console.log('Ignota');
        }
    }
}


