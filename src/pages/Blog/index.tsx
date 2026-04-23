import { styled } from '@mui/material'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

const Blog = () => {

  const BlogContainer = styled('main')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: 4,
  }))

  return (
    <>
      <NavBar variant="blog" showBackButton />
      <BlogContainer>
        <h1>Blog</h1>
        <p style={{ textAlign: 'center' }}>Não tem nada aqui, seu curioso.</p>
      </BlogContainer>
      <Footer />
    </>
  )
}

export default Blog;