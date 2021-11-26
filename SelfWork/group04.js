// let fund = {
//     cash_500 : 0,
//     cash_100 : 0,
//     cash_50 : 0,
//     cash_20 : 0,
//     cash_10 : 0,
//     cash_5 : 0,
//     cash_2 : 0,
//     cash_1 : 0
// }
// let price;
// let payout;
// let diff;
// function customer(price , payout){
//     if(payout => price ){
//         if(payout == price){
//             return fund;
//         }else if(payout > price){
//             diff = payout - price;
//             while (diff !=0 ){
//                 if(diff => 500){
//                 fund.cash_500 ++;
//                 diff = diff-500;    
//                 return fund;                
//             } 
           
//         }
//     }else return console.log("Not enough");
// }

// console.log(customer(100 , 1500));
// console.log(diff);

// console.log(fund);

// fund.cash_500 ++;
// fund.cash_500 ++;

// console.log(fund);

function ChangeCalculation(price,money){
    let exchange = money - price
    let arr = {
        Bank_500 : 0,
        Bank_100 : 0,
        Bank_50 : 0,
        Bank_20 : 0,
        Bank_10 : 0,
        Bank_5 : 0,
        Bank_2 : 0,
        Bank_1 : 0
    }
    while(exchange > 0){
        if(exchange >= 500){
            exchange = exchange - 500
            arr.Bank_500++
        }else if(exchange >= 100){
            exchange = exchange - 100
            arr.Bank_100++
        }else if(exchange >= 50){
            exchange = exchange - 50
            arr.Bank_50++
        }else if(exchange >= 20){
            exchange = exchange - 20
            arr.Bank_20++
        }else if(exchange >= 10){
            exchange = exchange - 10
            arr.Bank_10++
        }else if(exchange >= 5){
            exchange = exchange - 5
            arr.Bank_5++
        }else if(exchange >= 2){
            exchange = exchange - 2
            arr.Bank_2++
        }else if(exchange >= 1){
            exchange = exchange - 1
            arr.Bank_1++
        }
    }return arr

}
console.log(ChangeCalculation(100,1121))