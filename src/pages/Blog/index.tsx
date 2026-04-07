import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

const Blog = () => {
  return (
    <>
      <NavBar variant="blog" showBackButton />
      <main>
        <h1>Blog</h1>
        <p style={{ textAlign: 'center' }}>Não tem nada aqui, seu curioso.</p>
      </main>
      <Footer />
    </>
  )
}

export default Blog;