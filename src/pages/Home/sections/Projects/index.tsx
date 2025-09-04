import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"

const projects = [
  { title: 'Projeto 1', description: 'Os sonhos das pessoas não tem fim' },
  { title: 'Projeto 1', description: 'Os sonhos das pessoas não tem fim' },
  { title: 'Projeto 1', description: 'Os sonhos das pessoas não tem fim' },
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
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Card sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects;