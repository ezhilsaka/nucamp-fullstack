//const rect = require('./rectangle_copy'); 

import rect from "./rectangle_copy";

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {

        if (err) {
            console.log('Error:', err.message);
        } else {
            console.log(`Area of the rectangle with dimensions ${l}, ${w} is : ${rectangle.area()}`);
            console.log(`Perimeter of rectange with dimensions ${l}, ${w} is : ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to react()'); 
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);