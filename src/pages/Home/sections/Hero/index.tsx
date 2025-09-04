import { Box, Button, Container, Grid, styled, Typography, useTheme } from '@mui/material'
import React from 'react';
import Avatar from '../../../../assets/images/Foto-de-Perfil.jpeg';
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
              <Box position='relative' textAlign='center'>
                <StyledImg src={Avatar} alt="Foto-de-Perfil" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color='primary.contrastText' variant='h1' textAlign='center'>Lucas Patrício da Silva</Typography>
              <Typography color='primary.contrastText' variant='h2' textAlign='center'>Front-end Developer</Typography>
              <Grid container display='flex' justifyContent='center' spacing={3}>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <StyledButton
                    size='medium'
                    variant='outlined'
                    color='info'
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
                    color='info'
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
      </StyledHero >
    </>
  )
}

export default Hero