import { Close } from "@mui/icons-material";
import { Button, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";

export const LessonSnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleClick = () => {
    setOpenSnackBar(true);
  };
  const handleClose = () => {
    setOpenSnackBar(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton onClick={handleClose}>
        <Close sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Button onClick={handleClick}>Snack Barı aç</Button>
      <Snackbar
        open={openSnackBar}
        message="Hata mesajıı"
        action={action}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </div>
  );
};
