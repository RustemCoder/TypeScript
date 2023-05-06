function myFunc(param) {
    if (typeof (param) == "number") {
        var result = param + 100;
        console.log("My result" + result);
    }
    else {
        throw ("Expected a number: " + param);
    }
}
myFunc(1);
