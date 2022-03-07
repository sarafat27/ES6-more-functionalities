const name = 'sunny';
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

const templateString = `My name is ${name} and i works in ${company.Name}.I have learnt ${company.web.tech.third} recently`;
console.log(templateString);