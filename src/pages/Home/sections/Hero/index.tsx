
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { StyledButton } from '../../../../components/Button';
import { Box, Container, Grid, styled, Typography } from '@mui/material';

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

  return (
    <>
      <StyledHero>
        <Container maxWidth='lg'>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid>
              <Typography color='primary.contrastText' variant='h1' textAlign='center'>Lucas Patrício</Typography>
              <Typography color='primary.contrastText' variant='h2' textAlign='center'>Front-end Developer</Typography>
              <Grid container display='flex' justifyContent='center' spacing={3} mt={1}>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
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
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
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