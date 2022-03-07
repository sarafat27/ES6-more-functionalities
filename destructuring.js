const fish = { name: "Hilsha", id: 58, price: 1200, phone: '01738273373', address: 'Chandpur', color: 'silver' };

// console.log(fish.address);

// const address = fish.address;
// const price = fish.price;
// const phone = fish.phone;
const { address, price, phone } = fish;
// console.log(address, price);

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
// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { third } = company.web.tech;
const { id } = company.ceo;
console.log(work, framework, id, third);