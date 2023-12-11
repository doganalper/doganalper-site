export interface Media {
  type: string
  link: string
}

export interface Collection {
  $ref: string
  $id: string
  $db: string
}

export interface User {
  $ref: string
  $id: number
  $db: string
}

export interface Creator {
  avatar: string
  _id: number
  name: string
  email: string
}

export interface Bookmark {
  excerpt: string
  note: string
  type: string
  cover: string
  tags: string[]
  removed: boolean
  _id: number
  collection: Collection
  link: string
  title: string
  media: Media[]
  user: User
  created: string
  lastUpdate: string
  domain: string
  creatorRef: Creator
  sort: number
  highlights: []
  collectionId: number
}

export interface RaindropsResponse {
  result: boolean
  count: number
  items: Bookmark[]
}

export interface RaindropsRequestOpts {
  page?: number
  perPage?: number
}
