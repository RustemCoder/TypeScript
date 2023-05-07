var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Product;
}());
var hat = new Product("Hat", 100);
var boots = new Product("Boots", 100, "Snow Gear");
function printDetails(product) {
    if (product.category != undefined) {
        console.log("Name: ".concat(product.name, ", Price: ").concat(product.price, ", Category: ").concat(product.category));
    }
    else {
        console.log("Name: ".concat(product.name, ", Price: ").concat(product.price));
    }
}
printDetails(hat);
printDetails(boots);
///// concise way
var NewProduct = /** @class */ (function () {
    function NewProduct(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    NewProduct.prototype.printDetails = function () {
        if (this.category != undefined) {
            console.log("Name: ".concat(this.name, ", Price: ").concat(this.price, ", Category: ").concat(this.category));
        }
        else {
            console.log("Name: ".concat(this.name, ", Price: ").concat(this.price));
        }
    };
    return NewProduct;
}());
var DiscountProduct = /** @class */ (function (_super) {
    __extends(DiscountProduct, _super);
    function DiscountProduct(name, price, discount) {
        var _this = _super.call(this, name, price - discount) || this;
        _this.discount = discount;
        return _this;
    }
    return DiscountProduct;
}(NewProduct));
var discountBoots = new DiscountProduct("Hat", 100, 10);
discountBoots.printDetails();
//instanceof//
console.log("Hat is a Product? ".concat(hat instanceof Product));
