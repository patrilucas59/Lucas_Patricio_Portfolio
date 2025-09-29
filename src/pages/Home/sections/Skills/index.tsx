import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Git',
  'React.js',
  'Material UI',
  'Tailwind CSS',
  'Styled-components',
  'SEO',
  'Zod',
]


const Skills = () => {
  const { t } = useTranslation('home')
  return (
    <Box
      id='skills'
      sx={{
        background: 'grey',
        py: 8,
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant="h3" fontWeight={700} textAlign="center" mb={4}>
          {t('skills.title')}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill) => (
            <Grid key={skill}>
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
                    backgroundColor: '#474d46',
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