import { Button, Container, Grid, styled, Typography } from '@mui/material'
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

  const StyledHero = styled('div')(() => ({
    backgroundColor: 'grey',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }))

  const StyledImg = styled('img')(() => ({
    width: '100%',
    maxWidth: '350px',
    borderRadius: '50%',
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
              <Typography color='primary' variant='h1' textAlign='center'>Lucas Patrício da Silva</Typography>
              <Typography color='primary' variant='h2' textAlign='center'>Web Development</Typography>
              <Grid container display='flex' justifyContent='center' spacing={3}>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <StyledButton
                    size='medium'
                    variant='contained'
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
                  >
                    <MailOutlineIcon style={{ marginRight: '8px' }} />
                    Contact Me
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero