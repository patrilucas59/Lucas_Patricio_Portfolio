import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#232323',
        color: '#fff',
        py: 3,
        mt: 5,
      }}
    >
      <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          @ {new Date().getFullYear()} All Rights Reserved | Lucas Patrício | Front-end Developer
        </Typography>

        <Box>
          <IconButton
            aria-label='GitHub'
            color='inherit'
            href="https://github.com/patrilucas59"
            target="_blank"
            sx={{
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: 'inherit',
              }
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label='GitHub'
            color='inherit'
            href="https://www.linkedin.com/in/lucas-patricio/"
            target="_blank"
            sx={{
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: 'inherit',
              }
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label='GitHub'
            color='inherit'
            href="https://api.whatsapp.com/send?phone=5511943444990"
            target="_blank"
            sx={{
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: 'inherit',
              }
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;
