import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const skills = [
  // Linguagens
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  // Frameworks
  'React.js', 'Angular',
  // Estilização
  'Tailwind CSS', 'Styled-components', 'Material UI',
  // Estado / Validação
  'Redux', 'Zod',
  // Back-end
  'PHP', 'Node.js', 'SQL',
  // Ferramentas
  'Git', 'Azure DevOps', 'Figma',
  // Outros
  'SEO',
];



const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: '64px',
  paddingBottom: '96px',
}))

const Skills = () => {
  const { t } = useTranslation('home')


  return (
    <StyledBox id='skills'>
      <Container maxWidth='lg'>
        <Typography variant="h2" fontWeight={600} textAlign="center" mb={4} sx={{ fontSize: { xs: '28px', md: '36px' } }} color="#fff">
          {t('skills.title')}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill) => (
            <Grid key={skill}>
              <Box
                sx={{
                  px: 3,
                  py: 1.5,
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontWeight: 400,
                  fontSize: { xs: '14px', md: '16px' },
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