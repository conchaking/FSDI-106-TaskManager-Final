
function sayHello(name){
    console.log("Hello " + name );
}

function sum(num1, num2){
    let total = num1 + num2;
    return total;
}

function printNumbers(){
    /* 
        from 1 to 20
        except 7
    */
    for(let i=1; i < 21; i++) {
        if(i != 7 && i !=13) {
        console.log(i);
        }
    }

    let color = "red";
    let age = 0;

    //if(color == false) {
    if(!color) { //if color is equal to empty string
        alert("Error: a color is needed:");
    }

    if(!age){
        alert("Error: age is required");
    }
}

function init(){
    //all HTML element are rendered
    console.log("Task manager");
    sayHello("John");
    sayHello("Jane");

    let name = "Sergio";
    sayHello(name);
    sayHello("name");

    let last = "Rogers";
    sayHello(last);

    // sum
    let total = sum(21, 21);
    console.log(total);

    printNumbers();
}






window.onload = init; 