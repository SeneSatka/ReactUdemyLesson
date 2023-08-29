import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
export const LessonDrawer = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsLeftOpen(true)}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" onClick={() => setIsRightOpen(true)}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" onClick={() => setIsTopOpen(true)}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" onClick={() => setIsBottomOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isLeftOpen}
        anchor="left"
        onClose={() => setIsLeftOpen(false)}
      >
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Soldaki panel
          </Typography>
        </Box>
      </Drawer>
      <Drawer
        open={isRightOpen}
        anchor="right"
        onClose={() => setIsRightOpen(false)}
      >
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Sağdaki panel
          </Typography>
        </Box>
      </Drawer>
      <Drawer open={isTopOpen} anchor="top" onClose={() => setIsTopOpen(false)}>
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Üstteki panel
          </Typography>
        </Box>
      </Drawer>
      <Drawer
        open={isBottomOpen}
        anchor="bottom"
        onClose={() => setIsBottomOpen(false)}
      >
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Alttaki panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
