import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const LessonTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Ad" />
        <TextField label="Ad" variant="outlined" />
        <TextField label="Ad" variant="filled" />
        <TextField label="Ad" variant="standard" />{" "}
        <TextField label="Ad" variant="outlined" size="small" color="error" />
        <TextField
          label="Ad"
          variant="outlined"
          helperText="Lütfen ismini girin"
        />
        <TextField
          label="Şifre"
          variant="outlined"
          helperText="Lütfen şifrenizi girin"
          type="password"
        />
        <TextField
          disabled
          label="Ad"
          variant="outlined"
          helperText="Lütfen ismini girin"
        />
        <TextField
          InputProps={{ readOnly: true }}
          label="Ad"
          variant="outlined"
          helperText="Lütfen ismini girin"
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          label="Toplam"
          variant="outlined"
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }}
          label="Toplam"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row">
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          label="Şifre"
          variant="outlined"
          helperText={
            !value
              ? "Lütfen şifrenizi giriniz"
              : "Şifrenizi kimseyle paylaşmayınız"
          }
          type="password"
        />
      </Stack>
    </Stack>
  );
};
