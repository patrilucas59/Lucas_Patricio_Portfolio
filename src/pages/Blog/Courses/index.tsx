import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { BlogItem } from "pages/Blog/types/blog-item";
import BlogCard from "../components/BlogCard";

  const mock: BlogItem[] = [
    {
      id: '1',
      type: 'course',
      title: 'React Avançado',
      description: 'Hooks, performance, e boa práticas',
    },
    {
      id: '2',
      type: 'course',
      title: 'TypeScript Avançado para React',
      description: 'Como usar TypeScript em projetos React',
    }
  ]

  const BlogCourses = () => {
    const [selected, setSelected] = useState<BlogItem | null>(null);
    const theme = useTheme();

    const courses = mock.filter(item => item.type === 'course');
    
    return (
      <>
        <Box sx={{ display: 'flex', gap: 2, backgroundColor: theme.palette.primary.main, padding: 2, borderRadius: 2 }}>
          {courses.map(item => (
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

export default BlogCourses;