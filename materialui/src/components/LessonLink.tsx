import { Box, Link } from "@mui/material";

export const LessonLink = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Link href="/projelerim">Projelerime git</Link>
      <Link href="/projelerim" color="error">
        Projelerime git
      </Link>
      <Link href="/projelerim" color="error" variant="body2">
        Projelerime git
      </Link>
      <Link href="/projelerim" underline="none">
        Projelerime git
      </Link>
      <Link href="/projelerim" underline="hover">
        Projelerime git
      </Link>
      <Link href="/projelerim" underline="always">
        Projelerime git
      </Link>
      <Link href="/projelerim" onClick={() => console.log("testt")}>
        Projelerime git
      </Link>
    </Box>
  );
};
