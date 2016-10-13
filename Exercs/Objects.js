
let phonebook = {};

phonebook['John Smith'] = '+359-886-888-444';
phonebook['Slade Wilson'] = '+1-666-555-444';
phonebook['Will Smith'] = '+44-552-133-4464';

console.log(Object.keys(phonebook).length);

for (let key in phonebook) {
    console.log(`${key} -> ${phonebook[key]}`);
}
