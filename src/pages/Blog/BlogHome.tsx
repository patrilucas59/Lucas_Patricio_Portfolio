import { Box, styled, Tab, Tabs, Typography, useTheme } from "@mui/material";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const BlogHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const getTabValue = () => {
  if (location.pathname.includes('artigos')) return 0;
  if (location.pathname.includes('cursos')) return 1;
  return false;
}

  const BlogContainer = styled('main')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: 4,
  }));

const StyledTab = styled(Tab)(({ theme }) => ({
  padding: '8px 16px',
  margin: '0 4px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: 999,
  zIndex: 1,
  transition: 'all 0.25s ease',

  '&:hover': {
    backgroundColor: theme.palette.common.white,
    transform: 'scale(1.05)',
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

  return (
    <>
      <NavBar variant="blog" showBackButton />

      <BlogContainer>
        <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" fontWeight={600} mt={2} color="primary.contrastText">
            BLOG
          </Typography>
       
        </Box>

        <Typography variant="h5" fontWeight={500} mt={1} color="primary.contrastText">
          Pensamentos, estudos e {" "}
          <Box component="span" color={theme.palette.info.light} fontWeight={700}>
            trajetória
          </Box>
        </Typography>

        <Typography color="primary.contrastText" style={{ textAlign: 'center', maxWidth: 600, margin: '16px auto' }}>
          Espaço onde compartilho artigos sobre o que aprendo no dia a dia como desenvolvedor front-end e os cursos que venho realizando.
        </Typography>

        <Tabs 
          value={getTabValue()} 
          onChange={(_, value) =>{
            navigate(value === 0 ? 'artigos' : 'cursos')
          }}
          sx={{ 
            mt: 4,
            '& .MuiTabs-indicator': {
              display: 'none',
            },
           }}
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

export default BlogHome;