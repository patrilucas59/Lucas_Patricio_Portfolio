import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { StyledButton } from '../../../../components/Button';
import { Container, Grid, styled, Typography, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProfilePic from '../../../../assets/images/Foto de Perfil.jpg';

interface HeroProps {
  title?: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  const { t, i18n } = useTranslation('home');

  const handleDownloadCV = () => {
    const currentLanguage = i18n.language;

    const cvFile = currentLanguage === 'en' 
      ? 'Lucas Patrício Resume.pdf'
      : 'Lucas Patrício Currículo.pdf';

    const downloadName = currentLanguage === 'en'
      ? 'Lucas-Patrício_Resume.pdf'
      : 'Lucas-Patrício_Currículo.pdf';

    const link = document.createElement('a');
    link.href = cvFile;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    window.location.href = 'mailto:patriciolucas059@gmail.com';
  };

  const StyledHero = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(4, 2),
  }));

  return (
    <StyledHero>
      <Container maxWidth='lg'>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid>
            <Avatar
              alt="Lucas Patrício"
              src={ProfilePic}
              sx={{
                mt: { xs: 4, md: 9 },
                width: { xs: 160, md: 240 },
                height: { xs: 160, md: 250 },
                border: '3px solid white',
                marginX: 'auto',
              }}
            />
          </Grid>
          <Grid>
            <Typography color="primary.contrastText" variant="h1" sx={{ fontSize: { xs: '32px', md: '48px' }, mb: 2, lineHeight: 1.2 }}>
              {title || t('hero.title')}
            </Typography>
            <Typography color="primary.contrastText" variant="h2" sx={{ fontSize: { xs: '20px', md: '28px' }, mb: 4, lineHeight: 1.4 }}>
              {t('hero.subtitle')}
            </Typography>


            <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Grid>
                <StyledButton
                  size="medium"
                  variant="outlined"
                  backgroundColor="hsl(240, 5%, 14%)"
                  textColor="#C9A227"
                  borderRadius="10px"
                  onClick={handleDownloadCV}
                >
                  <DownloadIcon style={{ marginRight: 8 }} />
                  {t('hero.downloadCV')}
                </StyledButton>
              </Grid>

              <Grid>
                <StyledButton
                  size="medium"
                  variant="outlined"
                  backgroundColor="#C9A227"
                  textColor="hsl(240, 5%, 14%)"
                  borderRadius="10px"
                  onClick={handleContactMe}
                >
                  <MailOutlineIcon style={{ marginRight: 8 }} />
                  {t('hero.contactMe')}
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;