const rect = require("./rectangle");

// Test case 2: Synchronous
// function SolveRectangle(l, w){
//     if(l <= 0 || w <= 0){
//         console.log("Length or Width greater than zero");
//     }else{
//         console.log(`Area = ${rect.area(l,w)}`);
//         console.log(`Perimeter = ${rect.perimeter(l,w)}`);
//     }
// }

// Test: Asynchronous - Callback
// function SolveRectangle(l, w){
//     rect(l, w, (err, result)=>{
//         if(err)
//             console.log(err.message);
//         else{
//             console.log(`Diện tích = ${result.area}`);
//             console.log(`Chu vi = ${result.perimeter}`);
//         }
//     });
// }

// Execution
// SolveRectangle(200, 50);
// SolveRectangle(0, 50);
// SolveRectangle(200, -50);
// SolveRectangle(200, 100);

// Test: Asynchronous - Using Promise
// rect(-20, 10)
//     .then(({area, perimeter}) => {
//         console.log(`Diện tích HCN = ${area}`);
//         console.log(`Chu vi HCN = ${perimeter}`);
//     })
//     .catch(err => console.log(err));

// Test: Asynchronous - Async / Await

async function SolveRectangle(l, w){
    try {
        const {area, perimeter} = await rect(l, w);
        console.log(`Chu vi = ${perimeter}`);
        console.log(`Diện tích = ${area}`);
    } catch (error) {
        console.log(`Lỗi: ${error.message}`);
    }
}

// Execution
SolveRectangle(200, 50);
SolveRectangle(0, 50);
SolveRectangle(200, -50);
SolveRectangle(200, 100);