import { Box, Container, Typography, styled } from "@mui/material"
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation('home');

  const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    py: 8,
  }))

  return (
    <StyledBox id='about'>
      <Container maxWidth='lg'>
        <Typography variant="h3" fontWeight={600} textAlign='center' mb={6} color="#fff">
          {t('about.title')}
        </Typography>
        <Typography variant="h6" color="#fff" fontWeight={400} textAlign='center'>
          {t('about.description')}
        </Typography>
      </Container>
    </StyledBox>
  )
}

export default About