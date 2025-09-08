import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '../../../../assets/images/NoteMe-ToDo-List.jpg'

const projects = [
  {
    title: 'Note Me - To Do List',
    description: 'A simple and functional project of to-do list, build with React, JavaScript and styled with TailwindCSS. Ideal for practicing React hooks, local storage and URL manipulation with react-router-dom.',
    github: 'https://github.com/patrilucas59/gerenciador-de-tarefas',
    project: 'https://note-me-to-do-list-six-liard.vercel.app/',
  },
]

const Projects = () => {
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
          Projects
        </Typography>
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          {projects.map((project) => (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={project.title}>
              <Card sx={{ width: { sm: 400, md: 500 }, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component='img'
                  src={Avatar}
                  alt="Project Image"
                  sx={{
                    width: { xs: 300 },
                    height: { xs: 150, sm: 230, md: 300 },
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
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      View on GitHub
                      <GitHubIcon sx={{ ml: 1 }} />
                    </Button>
                  </Typography>
                  <Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.project}
                      target="_blank"
                      sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
                    >
                      Access Project
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