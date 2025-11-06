import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { StyledButton } from '../../../../components/Button';
import { Container, Grid, styled, Typography, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProfilePic from '../../../../assets/images/Foto-de-Perfil.jpeg';

interface HeroProps {
  title?: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  const { t } = useTranslation('home');

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Desenvolvedor Front End - Lucas Patrício da Silva.pdf';
    link.download = 'Lucas-Patrício_Currículo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    window.location.href = 'mailto:patriciolucas059@gmail.com';
  };

  const StyledHero = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }));

  return (
    <StyledHero>
      <Container maxWidth='lg'>
        <Grid container spacing={2} display='flex' justifyContent="center" alignItems="center">
          <Grid>
            <Avatar
              alt="Lucas Patrício"
              src={ProfilePic}
              sx={{
                mt: 9,
                width: 240,
                height: 240,
                border: '3px solid white',
              }}
            />
          </Grid>
          <Grid>
            <Typography color="primary.contrastText" variant="h1" textAlign="center">
              {title || t('hero.title')}
            </Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">
              {t('hero.subtitle')}
            </Typography>
          </Grid>

          <Grid container display='flex' justifyContent='center'>
            <Grid>
              <StyledButton
                size="medium"
                variant="outlined"
                color="info"
                onClick={handleDownloadCV}
              >
                <DownloadIcon style={{ marginRight: '8px' }} />
                {t('hero.downloadCV')}
              </StyledButton>
            </Grid>
            <Grid>
              <StyledButton
                size="medium"
                variant="outlined"
                color='secondary'
                onClick={handleContactMe}
              >
                <MailOutlineIcon style={{ marginRight: '8px' }} />
                {t('hero.contactMe')}
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
