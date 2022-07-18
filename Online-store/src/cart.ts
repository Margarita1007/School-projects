import { Data } from './types/types';

class Cart {
    private items: Array<Data> = [];

    constructor() {
        return this;
    }
    add(item: Data) {
        this.items.push(item);
        localStorage.setItem('cart', JSON.stringify(this.items));
        const cart_count = document.querySelector('.cart-counter') as HTMLInputElement;
        if (cart_count != null && cart_count.dataset.counter != undefined) {
            const new_value: number = Number(cart_count.value) + 1;
            cart_count.value = new_value.toString();
            localStorage.setItem('cart_value', cart_count.value);
        }
    }

    clear() {
        this.items = [];
        localStorage.removeItem('cart');
        localStorage.removeItem('cart_value');
    }
}

export default Cart;
