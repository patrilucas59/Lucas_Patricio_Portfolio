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
  };

  const BlogContainer = styled('main')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: theme.spacing(2),
    width: '100%',
    marginTop: theme.spacing(7),

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  }));

  const StyledTab = styled(Tab)(({ theme }) => ({
    padding: '6px 12px',
    margin: '0 4px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: 999,
    zIndex: 1,
    transition: 'all 0.25s ease',

    [theme.breakpoints.up('sm')]: {
      padding: '8px 16px',
    },

    '&:hover': {
      backgroundColor: theme.palette.common.black,
      transform: 'scale(1.05)',
    },

    '&.Mui-selected': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  }));

  return (
    <>
      <NavBar variant="blog" showBackButton />

      <BlogContainer>
        <Box
          sx={{
            minHeight: '40vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: 600,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            mt={2}
            color="primary.contrastText"
            sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }}
          >
            BLOG
          </Typography>

          <Typography variant="h5" fontWeight={500} mt={1} color="primary.contrastText" sx={{ fontSize: { xs: '1.1rem', sm: '1.4rem' }, px: 2,}}>
            Pensamentos, estudos e{" "}
            <Box component="span" color={theme.palette.info.light} fontWeight={700}>
              trajetória
            </Box>
          </Typography>

          <Typography color="primary.contrastText" sx={{ maxWidth: 600, mt: 2, px: 2, }}>
            Espaço onde compartilho artigos sobre o que aprendo no dia a dia como desenvolvedor front-end e os cursos que venho realizando.
          </Typography>

          <Tabs
            value={getTabValue()}
            onChange={(_, value) => {
              navigate(value === 0 ? 'artigos' : 'cursos');
            }}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mt: 4,
              maxWidth: '100%',
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <StyledTab label="Artigos" />
            <StyledTab label="Cursos" />
          </Tabs>
        </Box>

        <Box sx={{
            mt: { xs: 2, sm: 4 },
            width: '100%',
            px: { xs: 1, sm: 0 },
            maxWidth: 1200,
          }}
        >
          <Outlet />
        </Box>

      </BlogContainer>

      <Footer />
    </>
  );
};

export default BlogHome;