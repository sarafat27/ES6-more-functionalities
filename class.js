class Support {
    name;
    address = 'BD';
    designation = 'support web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const arafat = new Support('arafat hossain', 'ctg');
const sabbir = new Support('sabbir rahaman', 'dhaka');
const rakib = new Support('rakib rahaman', 'dubai');
const asif = new Support('asif chy', 'dhaka');
arafat.startSession();
sabbir.startSession();
// console.log(arafat, sabbir);