import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
export const LessonAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div" marginRight="auto">
          Navbar Örneği
        </Typography>
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Ana Sayfa</Button>
          <Button sx={{ color: "white" }}>Hakkımızda</Button>
          <Button sx={{ color: "white" }}>Ürünlerimiz</Button>
          <Button sx={{ color: "white" }}>Ekibimiz</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            Ücretsiz
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Uptime Botu</MenuItem>
          <MenuItem onClick={handleClose}>Müzik Botu</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
