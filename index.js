                                        // Static data type //
  class First {
    static staticMethod() {
        return "This is my first time trying static method.";
    }
  }

  alert(First.staticMethod());


  class Second {
    constructor() {
        alert(Second.display());
        // alert(this.constructor.display());
    }
    static display() {
        return "This is my second time of trying static method.";
    }
  }
  var s=new Second();

//   class Test {
//     constructor() {
//     document.writeln(Test.display()+"<br>"); 
//     document.writeln(this.constructor.display()); 
//     }
  
//     static display() {
//         return "static method is invoked"
//     }
//   }
//   var t=new Test();

                                        // Dynamic data type //


//   let check = 16;			// t is a number
// // let check = "Teresa";	// t is a string
// // let check = true;		// t is a Boolean
// // let check;				// t is undefined



                            // function that add two Numbers // 

    let x = 5;
    let y = 4;

    let sum = x + y;
console.log(sum);

// Adding any two numbers of your choice //

const numbers1 = parseInt(prompt('Enter the first number'));
const numbers2 = parseInt(prompt('Enter the second number'));
const add = numbers1 + numbers2;

console.log(prompt(`The sum of ${numbers1} and ${numbers2} is ${add}`));


                                //Declaration of an Array
 const provisions = ["milk", "cereal", "biscuit" ]
 provisions[3] = "chocolate";
 console.log(alert(provisions));


                                // Array Concatenation
const array1 = ["milk", "cereal", "biscuit"];
const array2 = ["rice", "groudnutOil", "vegetables"];
const array3 = array1.concat(array2);

console.log(alert(array3));
