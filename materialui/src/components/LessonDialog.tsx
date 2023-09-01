import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export const LessonDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const buy = () => {
    setIsOpen(false);
    setIsBought(true);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Satın al</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>Satın almayı onaylıyormusunuz?</DialogTitle>
        <DialogContent>
          <DialogActions>
            <Button color="success" onClick={buy}>
              Onayla
            </Button>
            <Button color="error" onClick={() => setIsOpen(false)}>
              İptal et
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog open={isBought} onClose={() => setIsBought(false)}>
        <DialogTitle>Satın alma başarılı</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ürün 24 saat içinde hesabınıza tanımlanacaktır.
          </DialogContentText>
          <DialogActions>
            <Button
              color="success"
              variant="contained"
              onClick={() => setIsBought(false)}
            >
              Kapat
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
