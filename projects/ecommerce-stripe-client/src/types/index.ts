export type Product = {
  id: string
  title: string
  rating: number
  console: string
  cover: string
  cover_alt: string
  quantity: number
  quantity_sold: number
  price: number
  description: string
  received_by: string
  comments: string
}

export type ProductShort = {
  id: string
  title: string
  rating: number
  console: string
  cover: string
  cover_alt: string
  price: number
  description: string
  comments: string
}

export type User = {
  cart: ProductShort[]
  purchases: any
  userId: string
  joined: string
  email: string
  displayName: string
  firstName: string
  lastName: string
  photoURL: string
  phoneNumber: string
}
