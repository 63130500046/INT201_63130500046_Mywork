//  concat()
//  array.concat(value0, value1, ... , valueN)





const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1.concat(array2);

console.log(array3)
//จะได้ output คือ [1,2,3,4,5,6]

let a = ['a', 'A']
let b = ['b', 'B']
let c = ['c', 'C']
let abc = a.concat(b, c)

console.log(abc);
//จะได้ output คือ [ 'a', 'A', 'b', 'B', 'c', 'C' ]

let fruit = [['mango','durian']]
let animal = [['dog','cat'],['dove'],'frog']
let fruitAndAnimal = fruit.concat(animal)
console.log(fruitAndAnimal)
//จะได้ output คือ [ [ 'mango', 'durian' ], [ 'dog', 'cat' ], [ 'dove' ], 'frog' ]



let g = 'a';
let t = 'b';

let z = g.concat(t);
console.log(z);

let x = array1.concat(g);
console.log(x);



let country = findIndex(['Thailand' , 'Vietnam', 'USA' , 'England' , 'Sweden' , 'Russia' , 'Singapore' , 'Indonesia','Japan' , 'Philippines'])




