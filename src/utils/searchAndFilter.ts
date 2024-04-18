import type { StoreItem } from '../types'

export const searchAndFilter = () => {
  const performSearch = (items: Array<StoreItem>, search?: string) => {
    if (!search) {
      return items
    }
    const searchLower = search.toLowerCase()
    const filteredItems = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      )
    })
    return filteredItems
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
