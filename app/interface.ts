export interface products{
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    imageUrl: string;
}

export interface fullProducts{
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    images: any;
    description: string;
    price_id: string;
}