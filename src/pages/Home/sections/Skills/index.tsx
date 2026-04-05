import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Figma',
  'Git',
  'Azure DevOps',
  'React.js',
  'Angular',
  'Material UI',
  'Tailwind CSS',
  'Styled-components',
  'SEO',
  'Zod',
]

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: '64px',
}))

const Skills = () => {
  const { t } = useTranslation('home')


  return (
    <StyledBox id='skills'>
      <Container maxWidth='lg'>
        <Typography variant="h3" fontWeight={600} textAlign="center" mb={6} color="#fff">
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
                  fontWeight: 400,
                  color: '#fff',
                  backgroundColor: '#232323',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#474d46',
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
    </StyledBox>
  )
}

export default Skills;