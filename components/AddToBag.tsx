'use client'


import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button";
import { urlFor } from "@/app/lib/sanity";

export interface ProductCart {
    name: string,
    description: string,
    price: number,
    currency: string,
    image: any,
    price_id: string,
}

export default function AddToBag({
    name,
    currency, 
    description,
    image, 
    price,
    price_id,
    }: ProductCart){

    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        currency: currency,
        description: description,
        price: price,
        image: urlFor(image).url(),
        price_id: price_id,
    };

    return(
        <Button 
            onClick={() => {
                addItem(product), handleCartClick();
            }}
        >
            Add to Cart
        </Button>
    )
}