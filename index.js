const isNumberN = +prompt('Enter number');
let i = 2;
let flag = 1;
const sq = Math.sqrt(isNumberN);
while (i <= sq) {
  if (isNumberN % i === 0) {
 flag = 0;
    console.log ('Число составное!');
    break;
  }
 i +=1;
}
if (flag == 1)  
 console.log ('Простое число');