import { Box, Card, CardContent, Collapse, Typography, useTheme } from "@mui/material"
import { BlogCardProps } from "pages/Blog/types/blog-card"


const BlogCard = ({ item, onClick, isSelected }: BlogCardProps) => {
  const theme = useTheme();

  return (
    <Card onClick={onClick} sx={{ width: '100%', cursor: 'pointer', backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2">{item.description}</Typography>

        <Collapse in={isSelected}>
          <Box mt={2}>
            <Typography variant="body1">
              Aqui você pode colocar o conteúdo completo do artigo ou curso.
              Pode vir de API depois.
            </Typography>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  )
}

export default BlogCard