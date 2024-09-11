// Case 1: Module export
// exports.area = (l, w) => l * w
// exports.perimeter = (l, w) => 2*(l+w)

// Case 2: Module export
// function area(l, w){
//     return l * w;
// }

// function perimeter(l, w){
//     return (l+w)*2;
// }

// module.exports = {area, perimeter}

// -------- ASYNCHRONOUS methods --------
// Method 1: Callback function
// function CalcRectangle(x, y, callback){
//     if(x <= 0 || y <= 0){
//         setTimeout(()=>callback(new Error("Hai cạnh HCN phải > 0"), null), 2000);
//     }else{
//         setTimeout(()=>callback(null, {area:x*y, perimeter:2*(x+y)}), 2000);
//     }
// }
// module.exports = CalcRectangle; // Default module

// Method 2: Promise object
// function CalcRectanglePromise(x, y){
//     return new Promise((resolve, reject) => {
//         if(x <=0 || y <=0)
//             reject("Hai cạnh HCN phải > 0");
//         else
//             resolve({area:x*y, perimeter: 2*(x+y)});
//     });
// }

// module.exports = CalcRectanglePromise; // Default module

// Method 3: using async/ await
async function CalcRectangleAsync(x, y){
    if(x <=0 || y <=0)
        throw new Error("Hai cạnh HCN phải > 0");
    else
        return {area:x*y, perimeter: 2*(x+y)};
}

module.exports = CalcRectangleAsync; // Default module