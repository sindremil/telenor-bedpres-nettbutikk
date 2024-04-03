import getLocaleIndexOf from 'locale-index-of'
import type { StoreItem } from '@/types'

export const searchAndFilter = () => {
  const performSearch = (items: Array<StoreItem>, search?: string) => {
    if (!search) return items

    const collator = new Intl.Collator('nb-no', {
      usage: 'search',
      sensitivity: 'base'
    })
    const localeIndexOf = getLocaleIndexOf(Intl)
    return items.filter(
      (it) =>
        localeIndexOf(it.title, search, collator) !== -1 ||
        localeIndexOf(it.description, search, collator) !== -1
    )
  }

  const preformFilter = (items: Array<StoreItem>, category: string) => {
    return items.filter(item => item.category === category);
  }

  return {
    performSearch,
    preformFilter
  }
}
