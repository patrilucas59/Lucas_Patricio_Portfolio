import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import NoteMeImg from '../../../../assets/images/NoteMe-ToDo-List.jpg';
import FocoPlusImg from '../../../../assets/images/Foco Plus +.png';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation('home')

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
              <Card sx={{ width: { sm: 400, md: 500 }, height: 500, display: 'flex', flexDirection: 'column', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component='img'
                  src={projectsImages[project.title]}
                  alt={project.title}
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" fontWeight={700} mb={1} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" mb={2} sx={{ textAlign: { xs: 'left' } }}>
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
          ))}
        </Grid>
      </Container>
    </Box >
  )
}

export default Projects;