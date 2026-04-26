import { Box } from "@mui/material";
import { useState } from "react";
import { BlogItem } from "types/blog-item";
import BlogCard from "../sections/BlogCard";
import BlogDetail from "../sections/BlogDetail";

  const mock: BlogItem[] = [
    {
      id: '1',
      type: 'course',
      title: 'React Avançado',
      description: 'Hooks, performance, e boa práticas',
    },
    {
      id: '2',
      type: 'article',
      title: 'TypeScript para React',
      description: 'Como usar TypeScript em projetos React',
    }
  ]

  const BlogCourses = () => {
    const [selected, setSelected] = useState<BlogItem | null>(null);

    const courses = mock.filter(item => item.type === 'course');
    
    return (
      <>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {courses.map(item => (
          <BlogCard 
            key={item.id} 
            item={item} 
            onClick={() => setSelected(item)} 
          />
        ))}
        </Box>

        <BlogDetail item={selected} onClose={() => setSelected(null)}/>
      </>
    )
  }

export default BlogCourses;