import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { StyledButton } from '../Button';
import { AppBar, Menu, MenuItem, styled, Toolbar, useMediaQuery, useTheme } from '@mui/material';

interface NavBarProps {
  onNavigate: (section: string) => void
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => setAnchorEl(null);

  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: isMobile ? 'left' : 'space-evenly',
    alignItems: 'center',
  }));


  return (
    <AppBar position='fixed'>
      <StyledToolbar>
        {isMobile ? (
          <>
            <StyledButton
              size='small'
              variant='contained'
              color='primary'
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
              <MenuItem onClick={() => { handleClose(); onNavigate('about'); }}>About</MenuItem>
              <MenuItem onClick={() => { handleClose(); onNavigate('skills'); }}>Skills</MenuItem>
              <MenuItem onClick={() => { handleClose(); onNavigate('projects'); }}>Projects</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <MenuItem onClick={() => {
              handleClose();
              onNavigate('about');
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
              About
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
              Skills
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
              Projects
            </MenuItem>
          </>
        )}
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar;