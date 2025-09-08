import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from 'react-i18next';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  };

  return (
    <ButtonGroup variant="outlined" size="small">
      <Button onClick={() => changeLanguage('en')} sx={{ fontSize: 14 }}>🇺🇸 EN</Button>
      <Button onClick={() => changeLanguage('pt-br')} sx={{ fontSize: 14 }}>🇧🇷 PT-BR</Button>
    </ButtonGroup>
  )
}

export default LanguageSwitcher;