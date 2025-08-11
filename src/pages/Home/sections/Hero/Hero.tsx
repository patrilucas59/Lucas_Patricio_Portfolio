import { Container, Grid, styled } from '@mui/material'
import Avatar from '../../../../assets/images/Foto-de-Perfil.jpeg'
import React from 'react';


const Hero = () => {

  const StyledHero = styled('div')(() => ({
    backgroundColor: 'black'
  }))

  const StyledImg = styled('img')(() => ({
    width: '30%',
    borderRadius: '50%',
  }))

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid size={4}>
              size=8
            </Grid>
            <Grid size={8}>
              size=4
            </Grid>
          </Grid>
          <StyledImg src={Avatar} alt="Foto-de-Perfil" />
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero