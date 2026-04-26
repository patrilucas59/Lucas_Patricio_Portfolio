import { BlogItem } from "./blog-item"

export type BlogDetailProps = {
  item: BlogItem | null
  onClose: () => void
}