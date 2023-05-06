function myFunct(param: number){
        let result = param + 100;
        console.log("My result" + result);
}
myFunct(1);

function union(param:number | string){
    if(typeof(param)=="number" || typeof(param) == "string"){
        let result = (param as any) + 100;
        console.log("My result: " + result);
    }
    else{
        throw ("Expected a number or a string")
    }

}
union("London");

/// Accessing type Features

function myUnion(param:number | string){
    if(typeof(param)== "number"){
        let numberResult = param.toFixed(2);
        console.log("My result: " + numberResult);
    }
    else{
        let stringResult =  param + 100;
        console.log("My result: " +stringResult);
    }
}
myUnion(1)
myUnion("London");