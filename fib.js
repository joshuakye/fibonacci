//Implementing a fibonacci sequence utilizing recursion.

function fib(num) {
  
    if (num < 2) {
      
      return 1;
    }
    
    else {
      
      return fib(num - 2) + fib(num - 1);
    }
  }
  
  //console.log(fib(5));
  //console.log(fib(6));
  //console.log(fib(7));
  //console.log(fib(8));
  //console.log(fib(9));