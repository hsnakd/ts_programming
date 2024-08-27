export class Item{

    private itemName!: string; // definite assertion operator
    private itemPrice!: number; 

    /*
    (!) means that we are telling typescript that those properties will be 
    initialized eventually, because typescript has strick property 
    initialization check
    */

    constructor(itemName: string, itemPrice: number){
        this.setItemName(itemName);
        this.setItemPrice(itemPrice);
    }

    getItemName(): string{
        if(this.itemName == null){
            throw new Error("Item name is not set");
        }
        return this.itemName;
    }

    getItemPrice(): number{
        return this.itemPrice;
    }

    setItemName(name: string){
        if(name === ""){
            throw new Error("Item name cannot be empty");
        }
        this.itemName = name;
    }

    setItemPrice(price: number){
        if(price <= 0){
            throw new Error("Item price must be greater than zero");
        }
        this.itemPrice = price;
    }

}