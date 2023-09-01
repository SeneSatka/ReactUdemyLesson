import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { useState } from "react";

export const LessonLoadingButton = () => {
  const [value, setValue] = useState(false);
  return (
    <Stack direction="row">
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton loading variant="contained">
        Kaydet
      </LoadingButton>
      <LoadingButton loading={false} variant="outlined" color="success">
        Kaydet
      </LoadingButton>
      <LoadingButton
        loading={value}
        variant="outlined"
        color="info"
        onClick={() => setValue(true)}
      >
        Tıkla ve Yükleme başlasın
      </LoadingButton>
    </Stack>
  );
};
