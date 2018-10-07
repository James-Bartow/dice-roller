console.log("Hello James!")

// Comment are any line that starts with a slash

/*
or are surrounded like this
*/

let a_number = 5;
let a_string = "Some string";
let a_decimal_number = 3.14;
let an_array = [5, "String", a_number];
let an_object = {
    property: "value",
    other_property: 5,
    some_property_that_is_an_array: an_array
}

console.log("a_number: " + a_number);
console.log("a_string " + a_string);
console.log("an_array " + an_array);
console.log("an_object " + an_object);

console.log("A random number between 0 and 1 : " + Math.random())