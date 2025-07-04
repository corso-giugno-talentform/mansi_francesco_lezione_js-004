//ES5

// let studente1 = {
//     firstname: 'Francesco',
//     lastname: 'Mansi',
//     aeg: null,

//     stampaEta: function () {//getter
//         if (this.age) {
//             console.log('La tua età è: ' + this.age);
//         } else {
//             console.log('Ignota');
//         }
//     }
// };

// function Animal(name, paw, habitat) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
// }

//Prima lettera maisucola
//singolare
//Inglese



function Person(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;

    this.stampaEta = function () {//getter
        if (this.age) {
            console.log('La tua età è: ' + this.age);
        } else {
            console.log('Ignota');
        }
    };
    this.pippoPluto = function (indice) {//setter
        console.log('SOno a posizione: ' + indice);
    };

    this.saluta = function () {//getter
        if (this.gender == 'm') {
            console.log('Buongiorno Signor ' + this.firstname);
        }
        if (this.gender == 'f') {
            console.log('Buongiorno Signora ' + this.firstname);
        }
        if (this.gender == '') {
            console.log('Buongiorno ' + this.firstname);
        }
    };
}

let gruppo = [
    new Person('Francesco', 'mansi', 12, 'm'),
    new Person('Luigi', 'mansi', 0, 'f'),
    new Person('Antonio', 'mansi', null, 'm')
];

gruppo.forEach(function (persona, posizione) {//solo array, il ciclo parte con elementi countable
    persona.pippoPluto(posizione);
    persona.saluta();
    persona.stampaEta();
});








