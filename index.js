 const isNumberN = +prompt('Enter number');
      let flag = 1;
      const sq = Math.sqrt(isNumberN);
      for ( let i = 2; i <= sq; i +=1) {
        if (isNumberN % i === 0) {
       flag = 0;
          console.log ('Число составное!');
          break;i +=1;
        }
      }
      if (flag == 1)  
       console.log ('Простое число');
