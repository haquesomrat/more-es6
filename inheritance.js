
//common class(class bar bar repeatation hoile common class use kora lage)
class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    designation = 'Support Team Member ';
    groupSupportTime;
    constructor(name, address, time) {
        super(name.address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Student Care Dev';
    buildARoutine(student) {
        console.log(this.name, 'build a routine', student);
    }
}
class NeptuneDev extends TeamMember {
    designation = 'neptune web dev';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'realease app version', version);
    }
}
const aamir = new Support('Aamir khan', 'BD', 11);
const salman = new Support('Salman khan', 'Saudi Arabia', 4);
const alia = new StudentCare('Alia Bhatt', 'Mumbai', 69);
const anika = new NeptuneDev('Anika Akter Asha', 'Kapasia', 'Love');
anika.releaseApp('16.16.2019');

// aamir.startSession 
// console.log(aamir);
// console.log(salman);
// console.log(alia);
// console.log(anika);
