function stringToNumber(){
    let num = "4";
    num = parseInt(num);
    console.log(typeof(num));
}
//stringToNumber();
function numberToString(){
    let num = 15;
    num = num.toString();
    console.log(typeof(num));
}
//numberToString();
function uppercase(){
    let text = "Hello World";
    text = text.toUpperCase();
    console.log(text);
}
//uppercase();
function firstCharUppercase(){
    let text = "hello world";
    text = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(text);
}
//firstCharUppercase();
function secondChar(){
    let text = "hello";
    let char = text[1];
    console.log(char);
}
//secondChar();
function stringConcat(){
    let firstName = "Hello";
    let lastName = "World";
    let fullName = firstName.concat(" ",lastName);
    console.log(fullName);
}
//stringConcat();
function numberSquare(){
    let variable = 16 ;
    let squaredNumber2 = Math.pow(variable,2);
    console.log("16*16 = ",squaredNumber2);
}
//numberSquare();
function numberSquareRoot(){
    let variable = 25;
    variable = Math.sqrt(variable);
    console.log(variable);
}
numberSquareRoot();

