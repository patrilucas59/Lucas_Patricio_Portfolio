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
    justifyContent: isMobile ? 'space-between' : 'space-around',
    alignItems: 'center',
  }));


  return (
    <AppBar position='fixed'>
      <StyledToolbar>
        {showBackButton && (
          <ArrowBackIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        )}
        {isMobile ? (
          <>
            <StyledButton
              size='small'
              variant='contained'
              backgroundColor='black'
              textColor='white'
              borderRadius={'20px'}
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
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate('/');
                }}
              >
                Home
              </MenuItem>
            ) : (
              <>
                <MenuItem onClick={() => { handleClose(); onNavigate('about'); }}>
                  {t('navBar.about')}
                </MenuItem>

                <MenuItem onClick={() => { handleClose(); onNavigate('skills'); }}>
                  {t('navBar.skills')}
                </MenuItem>

                <MenuItem onClick={() => { handleClose(); onNavigate('projects'); }}>
                  {t('navBar.projects')}
                </MenuItem>

                <Tooltip title="Em breve">
                  <span>
                    <MenuItem disabled>
                      {t('navBar.blog')}
                    </MenuItem>
                  </span>
                </Tooltip>
              </>
            )}
            </Menu>
          </>
        ) : (
        <>
          {isBlogPage ? (
            <MenuItem
              onClick={() => navigate('/')}
              sx={{
                transition: 'all 0.1s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'black',
                  color: '#fff',
                  borderRadius: '19px',
                }
              }}
            >
              Home
            </MenuItem>
          ) : (
            <>
              <MenuItem
                onClick={() => onNavigate('about')}
                sx={{
                  transition: 'all 0.1s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'black',
                    color: '#fff',
                    borderRadius: '19px',
                  }
                }}
              >
                {t('navBar.about')}
              </MenuItem>
              
            <MenuItem onClick={() => {
              handleClose();
              onNavigate('skills')
            }}
              sx={{
                transition: 'all 0.1s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'black',
                  color: '#fff',
                  borderRadius: '19px',
                }
              }}
            >
              {t('navBar.skills')}
            </MenuItem>

            <MenuItem onClick={() => {
              handleClose();
              onNavigate('projects')
            }}
              sx={{
                transition: 'all 0.1s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'black',
                  color: '#fff',
                  borderRadius: '19px',
                }
              }}
            >
              {t('navBar.projects')}
            </MenuItem>

            <Tooltip title="Em breve" placement="top">
                  <span>
                    <MenuItem
                      disabled
                      sx={{
                        cursor: 'not-allowed'
                      }}
                    >
                      {t('navBar.blog')}
                    </MenuItem>
                  </span>
                </Tooltip>
              </>
            )}
          </>
        )}
        <LanguageSwitcher />
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar;