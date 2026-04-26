import { Card, CardContent, Typography, useTheme } from "@mui/material"
import { BlogCardProps } from "types/blog-card"


const BlogCard = ({ item, onClick }: BlogCardProps) => {
  const theme = useTheme();

  return (
    <Card onClick={onClick} sx={{ minWidth: 250, cursor: 'pointer', backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default BlogCard