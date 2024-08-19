//This is JS practise code from absolute beginning.


 /*
 Javascript is a scripting language which is commonly used to write scripts that are embedded within a webpage and can be executed by web browsers.

 Scripts are typically used to add interactivity, dynamic content and functionality to website.

 Scripting language is often used to describe programming language that are used to write scripts which are small programs that automate tasks or add functionality to larger programs or systems.
 */

//Variables --> Containers used for storing data 
/*
There are three types of variables in JS
1.let --> block and functional scope, once assigned can be changed further
2.var --> functional scope, once assigned can be changed further
3.const --> block and functional scope, once assigned cannot be changed throughout.
*/

let variable_1 = "Value of variable_1";  //Declaring a variable and Assigning value to it
console.log(variable_1); // In JS console.log("") is used to get output on console.
variable_1 = "Updated value of variable_2";  //Updating the value of value of variable_1
console.log(variable_1); //Value of variable_1 is updated

var variable_2 = "Value of variable_2";
console.log(variable_2);
variable_2 = "Updated value of variable_2";
console.log(variable_2); //Value of variable_2 is updated

/*
const variable_3 = "Value of variable_3";
console.log(variable_3);
variable_3 = "Updated value of variable_3";
console.log(variable_3); //Value is not updated thrown error.
*/

let harsh;
console.log(harsh); //Here the harsh is assigned but not given any value hence it is undefined

let harshal = null;
console.log(harshal); //Here the output will be null

harshal_1 = "default_keyword will be var"
console.log(harshal_1); //Here the default keyword will be var if any keyword is not mentioned before variable declaration


//Functions are the reusable block of code which can be called on whenever required

function Hero()  // ---> Function Declaration
{    
    console.log("Function Definition");   // ---> Function Definition
}
Hero()   // ---> Function Calling


const Hiroshi = () => {
    console.log("ES6 Function Definition")
}
Hiroshi(); //ES6 way of function declaration, definition and calling


/*
Scope determines where the variables are defined and where they can be accessed.
There are three types of scopes
1. Global --> Variable is assigned in beginning outside of any curly braces or functions and is accessible throughout the code file. 
2. Functional --> Variable is assigned and accessible inside the function only.
3. Block --> Variable is assigned and accessible inside the curly braces only.
*/

//Global scope
let A = "Global_variable";
function a(){ 
    A = "Variable accessed and updated inside function";
    console.log(A);
}
a(); //Here the variable declared outside the function is accessible inside the function.
A = "Variable accessed and updated outside function";
console.log(A);

//Functional scope
function b(){
    let B = "Value inside function"; //Declared inside function b()
    console.log(B)
    function c(){
        B = "Value accessed and updated inside function's function" //Value can be accessed and updated inside functional scope
        console.log(B);
    };
    c(); // Here variable B is accessible as it inside main function ie function b().
}
b();
// console.log(B); Here variable B is not accessible outside function ie outside curly braces of function.

//Block scope
function d(){
   console.log(C);
   function e(){
    const C = "Hello" //Declared inside function e()
    console.log(C);
   };
   e();
}
// d(); Here variable C is accessible only inside curly braces.
//console.log(C); Here variable C is not accessible outside function ie outside curly braces of function.