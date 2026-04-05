import { Box, Button, Card, CardContent, CardMedia, Container, Grid, styled, Typography, } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import HomeIcon from '@mui/icons-material/Home'
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { useRef } from 'react'

import NoteMeImg from '../../../../assets/images/NoteMe-ToDo-List.jpg'
import FocoPlusImg from '../../../../assets/images/Foco Plus +.png'

import { useTranslation } from 'react-i18next'

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
  }

  const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    paddingTop: '64px',
    paddingBottom: '64px',
  }))

  return (
    <StyledBox id='projects'>
      <Container maxWidth='lg'>
        <Typography variant="h3" color='#fff' fontWeight={600} textAlign='center' mb={6}>
          {t('projects.title')}
        </Typography>
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', pb: 4, '.swiper-pagination': { position: 'relative', mt: 3 }, }}>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                0: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.title}>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={project.title}>
                    <Card
                      sx={{
                        width: { sm: 400, md: 500 },
                        maxWidth: 500,
                        height: 500,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '12px',
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={projectsImages[project.title]}
                        alt={project.title}
                        sx={{
                          height: 200,
                          objectFit: 'cover',
                          borderRadius: '12px 12px 0 0',
                        }}
                      />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#1f1f1f' }}>
                      <Typography variant="h6" color='#fff' fontWeight={400} mb={1} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                          {project.title}
                        </Typography>
                      <Typography variant="body2" color='#fff' fontWeight={200} mb={2} sx={{ textAlign: { xs: 'left' } }}>
                          {project.description}
                        </Typography>
                        <Box mt="auto">
                          <Button
                            fullWidth
                            variant="contained"
                            href={project.github}
                            target="_blank"
                            startIcon={<GitHubIcon />}
                          >
                            {t('projects.viewGithub')}
                          </Button>

                          <Button
                            fullWidth
                            variant="contained"
                            href={project.project}
                            target="_blank"
                            sx={{ mt: 2 }}
                            startIcon={<HomeIcon />}
                          >
                            {t('projects.accessProject')}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <Box
              display={{ xs: 'none', md: 'flex' }}
              justifyContent="center"
              gap={2}
              mt={3}
            >
              <Button
                variant="outlined"
                onClick={() => swiperRef.current?.slidePrev()}
                startIcon={<ArrowBackIosNewIcon />}
              >
                Anterior
              </Button>

              <Button
                variant="outlined"
                onClick={() => swiperRef.current?.slideNext()}
                endIcon={<ArrowForwardIosIcon />}
              >
                Próximo
              </Button>
            </Box> */}
          </Box>
        </Grid>
      </Container>
    </StyledBox>
  )
}

export default Projects;