import { Button, Container, Grid, styled, Typography, useTheme } from '@mui/material'
import Avatar from '../../../../assets/images/Foto-de-Perfil.jpeg';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { StyledButton } from '../../../../components/Button';


const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/currículo.pdf';
    link.download = 'Lucas-Patrício_Currículo.pdf';
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
  }

  const handleContactMe = () => {
    window.location.href = 'mailto:patriciolucas059@gmail.com';
  }

  const StyledHero = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }))

  const StyledImg = styled('img')(({ theme }) => ({
    width: '100%',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))


  return (
    <>
      <StyledHero>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} display='flex' justifyContent='center'>
              <StyledImg src={Avatar} alt="Foto-de-Perfil" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color='primary.contrastText' variant='h1' textAlign='center'>Lucas Patrício da Silva</Typography>
              <Typography color='primary.contrastText' variant='h2' textAlign='center'>Web Development</Typography>
              <Grid container display='flex' justifyContent='center' spacing={3}>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <StyledButton
                    size='medium'
                    variant='contained'
                    color='primary'
                    onClick={handleDownloadCV}
                  >
                    <DownloadIcon style={{ marginRight: '8px' }} />
                    Download CV
                  </StyledButton>
                </Grid>
                <Grid item xs={6} md={6} display='flex' justifyContent='center'>
                  <StyledButton
                    size="medium"
                    variant="outlined"
                    onClick={handleContactMe}
                    color='secondary'
                  >
                    <MailOutlineIcon style={{ marginRight: '8px' }} />
                    Contact Me
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero >
    </>
  )
}

export default Hero