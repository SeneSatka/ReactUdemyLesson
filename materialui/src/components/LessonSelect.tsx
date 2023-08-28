import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export const LessonSelect = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Box width="250px">
      {/* <TextField
        fullWidth
        label="ülke seçiniz"
        value={value}
        select
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <MenuItem value="tr">Türkiye</MenuItem>
        <MenuItem value="usa">Abd</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </TextField> */}
      <TextField
        SelectProps={{
          multiple: true,
        }}
        fullWidth
        label="ülke seçiniz"
        value={value}
        select
        onChange={(e) => {
          setValue(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          );
        }}
      >
        <MenuItem value="tr">Türkiye</MenuItem>
        <MenuItem value="usa">Abd</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </TextField>
    </Box>
  );
};
