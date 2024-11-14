"use strict";
// • Book
// • id: string
// • name: string
// • author: string
// • pages: number
class Inventory {
    constructor() {
        this.itemList = [];
    }
    addItem(item) {
        this.itemList.push(item);
    }
    removeItem(id) {
        let item = this.findItem(id);
        if (item) {
            let ind = this.itemList.indexOf(item);
            this.itemList.splice(ind, 1);
        }
        return item;
    }
    findItem(id) {
        return this.itemList.find((item) => item.id == id);
    }
    getItems() {
        return this.itemList;
    }
}
// Define sample data types based on interfaces
const bookInventory = new Inventory();
const electronicsInventory = new Inventory();
const clothingInventory = new Inventory();
// Adding sample Books
bookInventory.addItem({
    id: "b1",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
});
bookInventory.addItem({
    id: "b2",
    name: "1984",
    author: "George Orwell",
    pages: 328,
});
bookInventory.addItem({
    id: "b3",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
});
// Adding sample Electronics
electronicsInventory.addItem({
    id: "e1",
    name: "Smartphone",
    brand: "Apple",
    warrenty: true,
});
electronicsInventory.addItem({
    id: "e2",
    name: "Laptop",
    brand: "Dell",
    warrenty: true,
});
electronicsInventory.addItem({
    id: "e3",
    name: "Headphones",
    brand: "Sony",
    warrenty: false,
});
// Adding sample Clothing
clothingInventory.addItem({
    id: "c1",
    name: "T-Shirt",
    size: "M",
    material: "Cotton",
});
clothingInventory.addItem({
    id: "c2",
    name: "Jeans",
    size: "L",
    material: "Denim",
});
clothingInventory.addItem({
    id: "c3",
    name: "Jacket",
    size: "S",
    material: "Leather",
});
// Using the Inventory class functions
// 1. Get all items in each inventory
console.log("Books:", bookInventory.getItems());
console.log("Electronics:", electronicsInventory.getItems());
console.log("Clothing:", clothingInventory.getItems());
// 2. Find an item by ID
const foundBook = bookInventory.findItem("b2");
console.log("Found Book:", foundBook);
const foundElectronics = electronicsInventory.findItem("e1");
console.log("Found Electronics:", foundElectronics);
const foundClothing = clothingInventory.findItem("c3");
console.log("Found Clothing:", foundClothing);
// 3. Remove an item by ID
const removedBook = bookInventory.removeItem("b1");
console.log("Removed Book:", removedBook);
const removedElectronics = electronicsInventory.removeItem("e2");
console.log("Removed Electronics:", removedElectronics);
const removedClothing = clothingInventory.removeItem("c1");
console.log("Removed Clothing:", removedClothing);
// 4. Get the updated list of items after removal
console.log("Updated Books:", bookInventory.getItems());
console.log("Updated Electronics:", electronicsInventory.getItems());
console.log("Updated Clothing:", clothingInventory.getItems());
