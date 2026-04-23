import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { StyledButton } from '../Button';
import { AppBar, MenuItem, styled, Toolbar, Tooltip, useMediaQuery, useTheme, Drawer, Box, Typography } from '@mui/material';
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface NavBarProps {
  onNavigate?: (section: string) => void
  variant?: 'home' | 'blog'
  showBackButton?: boolean
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate = () => {}, variant = 'home' }) => {
  const { t } = useTranslation('home')
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const isBlogPage = variant === 'blog';
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(true);
  }

  const handleCloseMenu = () => {
    setOpen(false);
  }

  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }));

  const NavContainer = styled('div')<{ isBlogPage: boolean }>(({ isBlogPage }) => ({
    width: '100%',
    maxWidth: isBlogPage ? '900px' : '1120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isBlogPage ? 'center' : 'space-between',
    padding: '0 24px',
    position: 'relative',
  }));

  const NavLinks = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  }));

  const FontLink = styled(MenuItem)(() => ({
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '1.2',
    transition: 'all 0.15s ease',
    borderRadius: '10px',

    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#333',
      color: '#fff',
    }
}));

  const SwitcherContainer = styled('div')(() => ({
    position: 'absolute',
    right: 24,
  }));

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          <NavContainer isBlogPage={isBlogPage}>

            {isBlogPage && (
              <div style={{ position: 'absolute', left: 16 }}>
                <FontLink
                  onClick={() => navigate('/')}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    textDecoration: 'none',

                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    }
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 18 }} />
                  Home
                </FontLink>
              </div>
            )}

            {!isMobile && !isBlogPage && (
              <NavLinks>
                <FontLink onClick={() => onNavigate('about')}>
                  {t('navBar.about')}
                </FontLink>

                <FontLink onClick={() => onNavigate('skills')}>
                  {t('navBar.skills')}
                </FontLink>

                <FontLink onClick={() => onNavigate('projects')}>
                  {t('navBar.projects')}
                </FontLink>

                <Tooltip title="Em breve" placement="top">
                  <span>
                    <FontLink onClick={() => navigate('/blog')} disabled>
                      {t('navBar.blog')}
                    </FontLink>
                  </span>
                </Tooltip>
              </NavLinks>
            )}

            {isMobile && !isBlogPage && (
              <StyledButton
                size="small"
                variant="contained"
                backgroundColor="transparent"
                textColor="white"
                borderRadius="20px"
                onClick={handleOpenMenu}
              >
                <MenuIcon />
              </StyledButton>
            )}

            <SwitcherContainer>
              <LanguageSwitcher />
            </SwitcherContainer>

          </NavContainer>
        </StyledToolbar>
      </AppBar>

      <Drawer 
        anchor="left" 
        open={open} 
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            width: 260,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
          }
        }}
      >
        <Box sx={{ width: 200, padding: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
              Menu
          </Typography>

          <FontLink onClick={() => { onNavigate('about'); handleCloseMenu(); }}>
            {t('navBar.about')}
          </FontLink>

          <FontLink onClick={() => { onNavigate('skills'); handleCloseMenu(); }}>
            {t('navBar.skills')}
          </FontLink>

          <FontLink onClick={() => { onNavigate('projects'); handleCloseMenu(); }}>
            {t('navBar.projects')}
          </FontLink>

          <Tooltip title="Em breve" placement="top">
            <span>
              <FontLink onClick={() => navigate('/blog')} disabled>
                {t('navBar.blog')}
              </FontLink>
            </span>
          </Tooltip>
        </Box>
      </Drawer>
    </>  
  )
}

export default NavBar;