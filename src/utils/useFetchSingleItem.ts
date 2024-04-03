import type { StoreItem } from '../types'

export const useFetchSingleItem = () => {
  const fetchSingleItem = async (id: string): Promise<StoreItem> => {
    return { category: '', description: '', id: 0, image: '', price: '', title: '' }
  }

  return {
    fetchSingleItem
  }
}
