import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '../../../../assets/images/NoteMe-ToDo-List.jpg'
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation('home')

  const projects = t('projects.projectsList', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    github: string;
    project: string;
  }>

  return (
    <Box
      id='projects'
      sx={{
        backgroundColor: '#5f5f5',
        py: 8,
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant="h3" fontWeight={700} textAlign='center' mb={4}>
          {t('projects.title')}
        </Typography>
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          {projects.map((project: any) => (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={project.title}>
              <Card sx={{ width: { sm: 400, md: 500 }, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component='img'
                  src={Avatar}
                  alt="Project Image"
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0'
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={700} mb={1} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" mb={2} sx={{ textAlign: { xs: 'left' } }}>
                    {project.description}
                  </Typography>
                  <Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.github}
                      target="_blank"
                      sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                      {t('projects.viewGithub')}
                      <GitHubIcon sx={{ ml: 1 }} />
                    </Button>
                  </Typography>
                  <Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.project}
                      target="_blank"
                      sx={{ display: 'flex', alignItems: 'center', mt: 2, width: '100%' }}
                    >
                      {t('projects.accessProject')}
                      <HomeIcon sx={{ ml: 1 }} />
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box >
  )
}

export default Projects;