import type { InjectionKey } from 'vue'
import { inject, provide, ref } from 'vue'
import type { CartItem, ShoppingCart, StoreItem } from '../types'
import { forEach, groupBy } from 'lodash'

export class ShoppingCartStore {
  private _LOCAL_STORAGE_KEY = 'shopping-cart'

  private cart = ref({} as ShoppingCart)

  private getStorage() {
    return localStorage.getItem(this._LOCAL_STORAGE_KEY)
  }

  private setCart(cart: ShoppingCart) {
    localStorage.setItem(this._LOCAL_STORAGE_KEY, JSON.stringify({ cart: cart, date: Date.now() }))
  }

  public newShoppingCart() {
    this.cart.value = { content: [] }
    const oldCart = this.getStorage()

    if (oldCart) {
      if (!(JSON.parse(oldCart).date < Date.now() - 1800000)) {
        this.cart.value = JSON.parse(oldCart).cart
      } else {
        this.setCart(this.cart.value)
      }
    } else {
      this.setCart(this.cart.value)
    }
  }

  public addToCart(item?: StoreItem) {
    if (item) {
      this.cart.value.content.push(item)
    } else {
      throw new Error('Undefined Shopping item')
    }

    this.setCart(this.cart.value)
  }

  public removeItemFromCart(item?: StoreItem) {
    if (item) {
      this.cart.value.content.splice(
        this.cart.value.content.findIndex((a: StoreItem) => a.id === item.id),
        1
      )
    } else {
      throw new Error('Undefined Shopping item')
    }

    this.setCart(this.cart.value)
  }

  public emptyCart() {
    this.cart.value = { content: [] }

    this.setCart(this.cart.value)
  }

  public getCart() {
    const groupedBy = groupBy(this.cart.value.content, 'id')
    const countedOccurrences: Array<CartItem> = []

    forEach(groupedBy, (value: Array<StoreItem>) => {
      countedOccurrences.push({
        quantity: value.length,
        totalPrice: Number(value[0].price) * value.length,
        item: value[0]
      })
    })

    return countedOccurrences
  }
}

const storeKey: InjectionKey<ShoppingCartStore> = Symbol('shopping-cart')

export function provideShoppingCartStore() {
  const store = new ShoppingCartStore()
  provide(storeKey, store)
  return store
}

export function injectShoppingCartStore() {
  return inject(storeKey)!
}
