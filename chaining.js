const myObject = { a: 43, b: 99, x: 34, y: 78, z: 89 };
const { x, z } = myObject;
// console.log(x, z);

//destructuring from array
const [m, n] = ['js', 34];
// console.log(m, n);

//chaining
const company = {
    Name: 'gp',
    ceo: {
        name: 'Tanvir',
        id: 34,
        phone: '01644833098'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'HTML',
            second: 'CSS',
            third: 'JS'
        }
    }
};
console.log(company?.web?.tech?.third);
console.log(company.frontend?.tech.third);