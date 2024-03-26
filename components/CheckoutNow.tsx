'use client'


import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToBag";


export default function CheckoutNow({
    name,
    currency, 
    description,
    image, 
    price,
    price_id,
    }: ProductCart){

    const { checkoutSingleItem } = useShoppingCart();

    const product = {
        name: name,
        currency: currency,
        description: description,
        price: price,
        image: urlFor(image).url(),
        price_id: price_id,
    };

    return(
        <Button variant={"secondary"}
            onClick={() => {
                checkoutSingleItem(product.price_id);
            }}
        >
            Checkout Now
        </Button>
    )
}