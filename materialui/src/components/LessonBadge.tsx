import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={10} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={10} color="primary" max={9}>
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={10}
        color="primary"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={10}
        color="primary"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={10}
        color="primary"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};
