import { Box, Container, Grid, Typography } from "@mui/material"

const skills = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']

const Skills = () => {
  return (
    <Box
      id='skills'
      sx={{
        background: 'grey',
        py: 8,
      }}
    >
      <Container>
        <Typography>
          Skills
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Box
                sx={{
                  px: 3,
                  py: 1.5,
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontWeight: 600,
                  backgroundColor: '#f9f9f9',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#4f8e3e',
                    color: '#fff',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {skill}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Skills;