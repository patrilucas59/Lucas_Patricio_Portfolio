import { Box, Container, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation('home');

  return (
    <Box
      id='about'
      sx={{
        backgroundColor: 'f5f5f5',
        py: 8,
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant="h3" fontWeight={700} textAlign='center' mb={4}>
          {t('about.title')}
        </Typography>
        <Typography variant="h6">
          {t('about.description')}
        </Typography>
      </Container>
    </Box>
  )
}

export default About