var fName;
var sName = "khan ";
fName = "saimon";
console.log(fName);
// right
var age = 10;
var addFunction = function (name, age) {
    return "fhkjdsf";
};
addFunction("hfjsAbdf", 12);
var data = "<h1> this is saimon , </h1>\n\n <p>".concat(sName, " this is title and last name  </p> \n");
console.log("".concat(fName, " after ").concat(data));
function printPlayerName() {
    console.log("sakib");
}
printPlayerName();
// assign dubble type
var fNumber = 10;
var fruits;
fruits = ["Kiwi", "Plums", "Peaches", "Apples", "Lime", "Cherries", 12];
var Digits;
Digits = [23, 34, 100, 124];
/* First method of usual array with
square brackets and second method of
generic arrays for examples fruits
and Digits */
var fruitsN = ["Kiwi", "Plums", "Peaches", "Apples", "Lime", "Cherries"];
var Digits = [23, 34, 100, 124];
var user = {
    name: "saimon",
    id: 23
};
var phone = {
    name: "apple phoen ",
    ID: 132142344,
    price: 1334.7778,
    model: "1213ADFF",
    discount: ""
};
var userType;
(function (userType) {
    userType[userType["id"] = 1] = "id";
    userType[userType["serial"] = 2] = "serial";
})(userType || (userType = {}));
console.log(userType.id);
console.log(userType["serial"]);
var makeConste;
(function (makeConste) {
    makeConste["LOGIN_USER"] = "LOGIN_USER";
    makeConste["LOADING"] = "LOADING";
    makeConste["ERROR"] = "ERROR";
})(makeConste || (makeConste = {}));
console.log(makeConste.ERROR);
var product3 = {
    id: "",
    pdName: "",
    price: 0,
    discount: 0,
    review: ""
};
var product4 = {
    id: "",
    pdName: "",
    price: 0,
    discount: 0,
    review: ""
};
var products = [product3, product3];
var productsNew = [];
var value = false;
// function and type
// normal function
function sumOfTwoNumbers(a, b) {
    // we cant not  return from this functuion
}
// arrow function
var sumOfThreeNumber = function (number1, number2) {
    return number1 + number2;
};
var objectCheck = { id: 12, name: "test", type: "ADD" };
var objectCheck2 = { type: "DELETE" };
