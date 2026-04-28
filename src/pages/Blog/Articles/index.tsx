import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { BlogItem } from "pages/Blog/types/blog-item";
import BlogCard from "../components/BlogCard";

  const mock: BlogItem[] = [
    {
      id: '1',
      type: 'article',
      title: 'React Avançado e boas prática de arquitetura',
      description: 'Hooks, performance, e boa práticas',
    },
    {
      id: '2',
      type: 'article',
      title: 'Arquitetura Feature-Based',
      description: 'Como usar TypeScript em projetos React',
    }
  ]

  const BlogArticles = () => {
    const [selected, setSelected] = useState<BlogItem | null>(null);
    const theme = useTheme();

    const articles = mock.filter(item => item.type === 'article');

    return (
      <>
        <Box sx={{ 
          display: 'grid', 
          gap: 2, 
          backgroundColor: theme.palette.primary.main, 
          padding: 2,  
          borderRadius: 2,
          
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          }
          }}
        >
          {articles.map(item => (
          <BlogCard 
            key={item.id} 
            item={item} 
            isSelected={selected?.id === item.id}
            onClick={() => setSelected(selected?.id === item.id ? null : item)}
          />
        ))}
        </Box>
      </>
    )
  }

export default BlogArticles;