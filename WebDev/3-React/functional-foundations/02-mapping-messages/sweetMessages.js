const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

//const sweetMessages = `${messages[0]}, sweetie?`;
//console.log(sweetMessages);

//Imperative way of doing the functionality

/* const sweetMessages = []; 

for(i=0; i < messages.length; i++){

    const newMessage = `${messages[i]}, sweetie?`;
    sweetMessages.push(newMessage);
}

console.log(sweetMessages);  */

//Declarative way of doing the functionality

const SweetMessageNew = messages.map((message) => `${message}, sweetie?`); 

console.log(SweetMessageNew); 