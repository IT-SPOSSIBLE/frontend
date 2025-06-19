export interface Product {
    id: number;
    title: string;
    price: number;
    status: "available" | "sold";
    created_at: string;
    posted_by: number;
    category: {
        id: number;
        name: string;
    };
    motocycleImage: {
        id: number;
        image: string;
        is_primary: boolean;
    };
}
