var myArray = [100, "Adam", true];
for (var i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach(function (val, ind) { return console.log("Index " + ind + ": " + val); });
