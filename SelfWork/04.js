let z = ['monkey' , 'rooster' , 'dog' , 'pig' , 'rat' , 'ox' , 'tiger' , 'rabbit' , 'dragon' , 'snake' , 'shorse' , 'sheep'];
let a;
function cal(year){
    a = year%12;
    
    return z[a];
}
// let y = cal;
// console.log(y(1900))
console.log(cal(1900))
console.log(cal(2001))




//weight pound
//height inch
const kilo = 0.453592;
const meter = 0.0254;
function BMI(w,h){
    let bmi;
    h = h* meter;
    w = w*kilo;
    bmi = w / (h*h) ;

    return bmi;
}
console.log(BMI(36.5,39));
console.log(BMI(92.6,67.7));



