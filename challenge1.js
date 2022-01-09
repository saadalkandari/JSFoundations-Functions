/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
 function printName() {
  console.log("Saad");
 }
 printName();
 


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(year){
    //year = 1994; 
 console.log(2022-year);
   
}
printAge(1994);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello( name, language){
if (language==="en"){
    console.log(`Hello ${name}`);
} else if (language==="es" ){
    console.log(`Hola ${name}'`);
} else if (language==="fr") {
    console.log(`Bonjour ${name}` );
}else if (language==="tr"){
    console.log(`Merhaba ${name}` );
}

}
printHello("saad","fr");
printHello("saad","en");
printHello("saad","tr");


/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(n1, n2){
    if(n1>n2){
        console.log(`I am bigger ${n1}`);
    }else if (n2>n1)
    console.log(`I am bigger(${n2})`);
}
printMax(1,5)