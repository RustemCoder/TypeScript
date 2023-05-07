class Product{
    constructor(name:string, price:number,category?:string){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    name: string;
    price: number;
    category?: string;

}

let hat = new Product("Hat",100)
let boots = new Product("Boots",100, "Snow Gear")

function printDetails(product:{name:string, price: number, category?: string}){
    if(product.category!=undefined){
        console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`)
    }else{
        console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
}
printDetails(hat);
printDetails(boots);

///// concise way

class NewProduct{
    constructor(public name:string, public price:number,public category?:string){
    
    }

    printDetails(){
        if(this.category!=undefined){
            console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`)
        }else{
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}

class DiscountProduct extends NewProduct{
    constructor(name:string, price:number,private discount: number){
        super(name, price-discount);
    }
}

let discountBoots = new DiscountProduct("Hat", 100, 10);
discountBoots.printDetails();

//instanceof//

console.log(`Hat is a Product? ${hat instanceof Product}`);