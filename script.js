// let studenti = [
//     ['Francesco', 'Mansi'],
//     ['Rossi', 'Alberto'],
//     [11, 'Gigi', 'Alberto'],
// ];

let studente1 = {
    firstname: 'Francesco',
    lastname: 'Mansi',
    age: null,

    stampaEta: function () {//getter
        if (this.age) {
            console.log('La tua età è: ' + this.age);
        } else {
            console.log('Ignota');
        }
    }
};
let studente2 = {
    firstname: 'Alberto',
    lastname: 'Rossi',

    stampaEta: function () {//getter
        if (this.age) {
            console.log('La tua età è: ' + this.age);
        } else {
            console.log('Ignota');
        }
    }
};

let studente3 = {
    firstname: 'Gigi',
    lastname: 'Alberto',
    aeg: 11,

    stampaEta: function () {//getter
        if (this.age) {
            console.log('La tua età è: ' + this.age);
        } else {
            console.log('Ignota');
        }
    }
};

let students = [studente1, studente2, studente3];

students.forEach(function (singolo) {
    //console.log(singolo.firstname);
    singolo.stampaEta();
});

