import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { StyledButton } from '../Button';
import { AppBar, Menu, MenuItem, styled, Toolbar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface NavBarProps {
  onNavigate?: (section: string) => void
  variant?: 'home' | 'blog'
  showBackButton?: boolean
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate = () => {}, variant = 'home', showBackButton = false }) => {
  const { t } = useTranslation('home')
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const isBlogPage = variant === 'blog';

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => setAnchorEl(null);

  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }));

  const NavContainer = styled('div')(() => ({
    width: '100%',
    maxWidth: '1120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
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
      backgroundColor: 'black',
      color: '#fff',
    }
}));

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <NavContainer>

        {showBackButton && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowBackIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </div>
        )}

          {!isMobile && (
            <NavLinks>
              {isBlogPage ? (
                <FontLink onClick={() => navigate('/')}>
                  Home
                </FontLink>
              ) : (
                <>
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
                      <FontLink disabled>
                        {t('navBar.blog')}
                      </FontLink>
                    </span>
                  </Tooltip>
                </>
              )}
            </NavLinks>
          )}

            {isMobile && (
              <>
                <StyledButton
                  size="small"
                  variant="contained"
                  backgroundColor="black"
                  textColor="white"
                  borderRadius="20px"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </StyledButton>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  keepMounted
                  slotProps={{
                    paper: { sx: { mt: 1, minWidth: 180 } },
                  }}
                >
                  {isBlogPage ? (
                    <FontLink
                      onClick={() => {
                        handleClose();
                        navigate('/');
                      }}
                    >
                      Home
                    </FontLink>
                  ) : (
                    [
                      <FontLink
                        key="about"
                        onClick={() => {
                          handleClose();
                          onNavigate('about');
                        }}
                      >
                        {t('navBar.about')}
                      </FontLink>,

                      <FontLink
                        key="skills"
                        onClick={() => {
                          handleClose();
                          onNavigate('skills');
                        }}
                      >
                        {t('navBar.skills')}
                      </FontLink>,

                      <FontLink
                        key="projects"
                        onClick={() => {
                          handleClose();
                          onNavigate('projects');
                        }}
                      >
                        {t('navBar.projects')}
                      </FontLink>
                    ]
                  )}
                </Menu>
              </>
            )}

            <LanguageSwitcher />

        </NavContainer>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar;