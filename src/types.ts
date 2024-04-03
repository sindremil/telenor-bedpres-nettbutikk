export interface StoreItem {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ShoppingCart {
  content: Array<StoreItem>;
}

export interface CartItem {
  item: StoreItem;
  quantity: number;
  totalPrice: number;
}
