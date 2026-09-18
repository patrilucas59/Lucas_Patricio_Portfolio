import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

import { StyledButton } from '../Button';

const EMAIL = 'patriciolucas059@gmail.com';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSendEmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Não foi possível copiar o e-mail:', error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ textAlign: 'center', pt: 4 }}>
        Entre em contato

        <IconButton
          aria-label="Fechar"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          sx={{ py: 2 }}
        >
          <Typography color="text.secondary">
            Interessado em conversar sobre uma oportunidade?
            Entre em contato comigo.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <StyledButton
              size="medium"
              variant="outlined"
              backgroundColor="#C9A227"
              textColor="hsl(240, 5%, 14%)"
              borderRadius="10px"
              onClick={handleSendEmail}
            >
              <MailOutlineIcon sx={{ mr: 1 }} />
              Enviar e-mail
            </StyledButton>

            <StyledButton
              size="medium"
              variant="outlined"
              backgroundColor="hsl(240, 5%, 14%)"
              textColor="#C9A227"
              borderRadius="10px"
              onClick={handleCopyEmail}
            >
              {emailCopied ? (
                <CheckIcon sx={{ mr: 1 }} />
              ) : (
                <ContentCopyIcon sx={{ mr: 1 }} />
              )}

              {emailCopied ? 'E-mail copiado!' : 'Copiar e-mail'}
            </StyledButton>
          </Stack>

        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;