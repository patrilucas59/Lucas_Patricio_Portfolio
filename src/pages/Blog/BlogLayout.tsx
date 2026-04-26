import { Box, styled, Tab, Tabs, Typography, useTheme } from "@mui/material";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const BlogLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabValue = () => {
  if (location.pathname.includes('artigos')) return 0;
  if (location.pathname.includes('cursos')) return 1;
  return false;
}

  const BlogContainer = styled('main')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: 4,
  }))

  const StyledTab = styled(Tab)(({ theme }) => ({
    padding: '8px 16px',
    margin: '0 4px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: 999,
    zIndex: 1,
    transition: 'all 0.25s ease',

  '&:hover': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.action.hover,
  },

  '&.Mui-selected': {
    color: theme.palette.primary.contrastText,
  },
  }));

  return (
    <>
      <NavBar variant="blog" showBackButton />

      <BlogContainer>
        <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" fontWeight={600} mt={2}>
            BLOG
          </Typography>
       
        </Box>

        <Tabs 
          value={getTabValue()} 
          onChange={(_, value) =>{
            navigate(value === 0 ? 'artigos' : 'cursos')
          }}
          centered
          sx={{ mt: 4 }}
        >
          <StyledTab label="Artigos" />
          <StyledTab label="Cursos" />
        </Tabs>

        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>

      </BlogContainer>

      <Footer />
    </>
  )
}

export default BlogLayout;