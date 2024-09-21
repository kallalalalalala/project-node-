const generator = require('generate-password');


// generate password and print it 

    const password = generator.generate({
        length: 20,
        numbers: true,
        lowercase: true,
        uppercase: true,
        symbols: true
    });
    console.log(password);
// generate a random password

const randomPassword = generator.generate({
    length: 10,
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: true
});

console.log(randomPassword);