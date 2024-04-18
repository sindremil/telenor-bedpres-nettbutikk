import type { StoreItem } from '../types'

export const searchAndFilter = () => {
  const performSearch = (items: Array<StoreItem>, search?: string) => {
    return []
  }

  const preformFilter = (items: Array<StoreItem>, category: string) => {
    const filteredItems = items.filter((item) => {
      return item.category === category
    })
    return filteredItems
  }

  return {
    performSearch,
    preformFilter
  }
}
