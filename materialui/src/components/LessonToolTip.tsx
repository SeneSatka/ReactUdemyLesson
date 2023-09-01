import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export const LessonToolTip = () => {
  return (
    <Tooltip title="Sill" placement="top-end">
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};
