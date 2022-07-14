import { Data, Options } from "./types/types";

class Cart {
    private items: Array<Options> = [];

    constructor() {
        return this;
    }
    
    add(item: Options) {
        this.items.push(item);
    }

    clear() {
        this.items = [];
    }
}

export default Cart;
