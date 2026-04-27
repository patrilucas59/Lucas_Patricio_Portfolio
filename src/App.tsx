import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import BlogArticles from "./pages/Blog/Articles";
import BlogCourses from "./pages/Blog/Courses";
import BlogLayout from "./pages/Blog/BlogLayout";
import Blog from './pages/Blog/BlogHome';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/blog' element={<BlogLayout />}>

        <Route index element={<Blog />} />

        <Route path='artigos' element={<BlogArticles />} />
        <Route path='cursos' element={<BlogCourses />} />

      </Route>

    </Routes>
  )
}

export default App;