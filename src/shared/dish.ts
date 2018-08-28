import { Comment } from './comments'

export interface Dish {
  id: number,
  name: string,
  image: string,
  category: string,
  label: string,
  picture: string,
  feature: string,
  description: string,
  comments: Comment[]
}
