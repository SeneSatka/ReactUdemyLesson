import { Alert, AlertTitle, Stack } from "@mui/material";

export const LessonAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert>
        <AlertTitle>SUCCESS</AlertTitle>
        success
      </Alert>
      <Alert severity="error">
        <AlertTitle>ERROR</AlertTitle>
        error
      </Alert>
      <Alert severity="warning">
        <AlertTitle>WARNING</AlertTitle>
        warning
      </Alert>
      <Alert severity="info">
        <AlertTitle>INFO</AlertTitle>
        info
      </Alert>
    </Stack>
  );
};
