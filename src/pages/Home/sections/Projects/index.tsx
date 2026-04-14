import { Box, Button, Card, CardContent, CardMedia, Container, Grid, styled, Typography, } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import HomeIcon from '@mui/icons-material/Home'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PortfolioImg from '../../../../assets/images/Meu Portfólio.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { useRef } from 'react'

import NoteMeImg from '../../../../assets/images/NoteMe-ToDo-List.jpg'
import FocoPlusImg from '../../../../assets/images/Foco Plus +.png'

import { useTranslation } from 'react-i18next'
import { StyledButton } from '../../../../components/Button';

const Projects = () => {
  const { t } = useTranslation('home')
  const swiperRef = useRef<any>(null)

  const projects = t('projects.projectsList', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    github: string;
    project: string;
  }>

  const projectsImages: Record<string, string> = {
    'Note Me - To Do List': NoteMeImg,
    'Foco +': FocoPlusImg,
    'Professional Portfolio': PortfolioImg,
    'Portfólio Profissional': PortfolioImg,
  }

  const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    paddingTop: '64px',
    paddingBottom: '96px',
  }));

  return (
    <StyledBox id='projects'>
      <Container maxWidth='lg'>
        <Typography variant="h2" color="#fff" fontWeight={600} textAlign="center" mb={4} sx={{ fontSize: { xs: '28px', md: '36px' } }}>
          {t('projects.title')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            pb: 4,
            position: 'relative',
            '.swiper-pagination': {
              position: 'relative',
              mt: 3,
            },
          }}
        >
         <Swiper modules={[Pagination]} pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                0: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
              }}
            >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <Grid container justifyContent="center">
                  <Card
                    sx={{
                      width: { xs: '100%', sm: 400, md: 500 },
                      maxWidth: 500,
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={projectsImages[project.title]}
                      alt={project.title}
                      sx={{ height: 200, objectFit: 'cover' }}
                    />

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#1f1f1f',
                      }}
                    >
                      <Typography variant="h3" color="#fff" fontWeight={500} mb={1}
                        sx={{
                          fontSize: { xs: '20px', md: '24px' },
                          textAlign: { xs: 'center', sm: 'left' },
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography variant="body1" color="#fff" fontWeight={300} mb={2}
                        sx={{
                          fontSize: { xs: '14px', md: '16px' },
                          lineHeight: { xs: 1.5, md: 1.75 },
                          textAlign: { xs: 'center', sm: 'left' },
                          minHeight: '120px',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box mt="auto" display="flex" flexDirection="column" gap={2}>
                        <StyledButton
                          size="medium"
                          variant="contained"
                          backgroundColor="#232323"
                          textColor="#fff"
                          borderRadius="10px"
                          startIcon={<GitHubIcon />}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          {t('projects.viewGithub')}
                        </StyledButton>

                        <StyledButton
                          size="medium"
                          variant="contained"
                          backgroundColor="#232323"
                          textColor="#fff"
                          borderRadius="10px"
                          startIcon={<HomeIcon />}
                          onClick={() => window.open(project.project, '_blank')}
                        >
                          {t('projects.accessProject')}
                        </StyledButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '-30px',
              right: '-30px',
              transform: 'translateY(-50%)',
              display: { xs: 'none', lg: 'flex' },
              justifyContent: 'space-between',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <Button
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                minWidth: '48px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                pointerEvents: 'auto',
              }}
            >
              <ArrowBackIosNewIcon />
            </Button>

            <Button
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                minWidth: '48px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                pointerEvents: 'auto',
              }}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Box>
          </Box>
      </Container>
    </StyledBox>
  )
}

export default Projects;