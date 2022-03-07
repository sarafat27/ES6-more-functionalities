function addThreeNumbers(x, y, z = 7) {
    const sum = x + y + z;
    return sum;
}
// console.log(addThreeNumbers(4,6));
const sum = (x, y, z = 7) => x + y + z;
// console.log(sum(4, 6));

const siExam = {
    centre: {
        physical: 'halishahar',
        written: 'khulshi',
        viva: 'dhaka'
    },
    marks: [50, 45, 37, 89, 37]
}
console.log(siExam.place?.viva);