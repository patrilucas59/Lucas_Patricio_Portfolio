import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import PublicIcon from '@mui/icons-material/Public';

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
        <MenuItem onClick={() => changeLanguage("en")}>🇺🇸 EN</MenuItem>
        <MenuItem onClick={() => changeLanguage("pt-br")}>🇧🇷 PT-BR</MenuItem>
      </Menu>
    </>
  )
}

export default LanguageSwitcher;