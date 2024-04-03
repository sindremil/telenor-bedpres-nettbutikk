import type {StoreItem} from "@/types";

export const useFetchData = () => {
    const fetchData = async (): Promise<Array<StoreItem>> => {
        return await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
    }

    return {
        fetchData,
    }
}
