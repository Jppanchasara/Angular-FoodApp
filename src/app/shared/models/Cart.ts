import { CartItem } from "./Cartitem";

export class Cart{
    items:CartItem[] = [];
    get totalPrice():Number{
        let totalprice = 0;
        this.items.forEach(item => {
            totalprice += item.price;
            
        });
        return totalprice;
    }
}