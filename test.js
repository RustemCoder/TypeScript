function myFunct(param) {
    var result = param + 100;
    console.log("My result" + result);
}
myFunct(1);
function union(param) {
    if (typeof (param) == "number" || typeof (param) == "string") {
        var result = param + 100;
        console.log("My result: " + result);
    }
    else {
        throw ("Expected a number or a string");
    }
}
union("London");
/// Accessing type Features
function myUnion(param) {
    if (typeof (param) == "number") {
        var numberResult = param.toFixed(2);
        console.log("My result: " + numberResult);
    }
    else {
        var stringResult = param + 100;
        console.log("My result: " + stringResult);
    }
}
myUnion(1);
myUnion("London");
