import { BlogItem } from "./blog-item"

export type BlogCardProps = {
  item: BlogItem
  isSelected: boolean;
  onClick: () => void
}