"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
function show(v) {
    console.log(v.name + " costs " + v.price + "!");
}
var c = new product_1.Car;
c.name = 'Civic';
c.price = 89499.00;
show(c);
