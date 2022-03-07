class TeamMember {
    name;
    address = 'bd';
    constructor(intro, place) {
        this.name = intro;
        this.address = place;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(intro, place, time) {
        super(intro, place)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'student care web dev';
    buildARoutine(studentName) {
        console.log(this.name, 'build a routine for', studentName);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'neptune app web dev';
    constructor(intro, place, app) {
        super(intro, place)
        this.codeEditor = app;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const arafat = new Support('arafat hossain', 'ctg', 12);
const sabbir = new NeptuneDev('sabbir rahaman', 'dhaka', 'illustrator');
// const rakib = new Support('rakib rahaman', 'dubai');
// const asif = new Support('asif chy', 'dhaka');

const babul = new StudentCare('babul', 'cox bazar');
console.log(sabbir);
sabbir.releaseApp('13.16.1');