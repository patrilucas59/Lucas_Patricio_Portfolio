import { Button, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/images/Foto-de-Perfil.jpeg'
import React from 'react';


const Hero = () => {

  const StyledHero = styled('div')(() => ({
    backgroundColor: 'black',
    height: '100vh',
  }))

  const StyledImg = styled('img')(() => ({
    width: '100%',
    borderRadius: '50%',
  }))

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid size={4}>
              <StyledImg src={Avatar} alt="Foto-de-Perfil" />
            </Grid>
            <Grid size={8}>
              <Typography color='primary' variant='h1'>Lucas Patrício da Silva</Typography>
              <Typography color='primary' variant='h2'>Web Development</Typography>
              <Button>CV</Button>
              <Button>Contact Me</Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero