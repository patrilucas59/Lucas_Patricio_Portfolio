import { Container, Typography, styled } from "@mui/material"
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation('home');

  const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    paddingTop: '64px',
    paddingBottom: '96px',
  }))

  return (
    <StyledBox id='about'>
      <Container maxWidth='lg'>
        <Typography variant="h2" fontWeight={600} textAlign='center' mb={4} sx={{ fontSize: { xs: '28px', md: '36px' } }} color="#fff">
          {t('about.title')}
        </Typography>
        <Typography variant="body1" color="#fff" fontWeight={400} textAlign='center' sx={{ fontSize: { xs: '16px', md: '18px' }, lineHeight: { xs: 1.5, md: 1.75 } }}>
          {t('about.description')}
        </Typography>
      </Container>
    </StyledBox>
  )
}

export default About;