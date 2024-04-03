import type { StoreItem } from '../types'

export const searchAndFilter = () => {
  const performSearch = (items: Array<StoreItem>, search?: string) => {
    return []
  }

  const preformFilter = (items: Array<StoreItem>, category: string) => {
    return []
  }

  return {
    performSearch,
    preformFilter
  }
}
