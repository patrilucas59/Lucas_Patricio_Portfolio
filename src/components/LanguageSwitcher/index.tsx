import { Avatar, Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import PublicIcon from '@mui/icons-material/Public';
import BrazilFlag from '../../assets/images/brazil-.png';
import UsaFlag from '../../assets/images/united-states-of-america.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const open = Boolean(anchorEl)

  const handleClink = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    handleClose()
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleClink}
      >
        <PublicIcon />
      </Button>

      <Menu
        onClick={handleClose}
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => changeLanguage("en")}>
          <Avatar
            alt="USA"
            src={UsaFlag}
            sx={{ width: 28, height: 28, mr: 1 }} 
          />
          EN
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("pt-br")}>
          <Avatar
            alt="Brazil"
            src={BrazilFlag} 
            sx={{ width: 28, height: 28, mr: 1 }}
          />
          PT-BR
        </MenuItem>
      </Menu>
    </>
  )
}

export default LanguageSwitcher;