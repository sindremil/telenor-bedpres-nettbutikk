import type { StoreItem } from '@/types';

export const useFetchSingleItem = () => {
  const fetchSingleItem = async (id: string): Promise<StoreItem> => {
    return await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  };

  return {
    fetchSingleItem
  };
};
