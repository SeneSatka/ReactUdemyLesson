import { Autocomplete, TextField } from "@mui/material";

const bots: Array<{ label: string; price: number }> = [
  { label: "Music Bot", price: 0 },
  { label: "Game Bot", price: 0 },
  { label: "YouTube Bot", price: 0 },
  { label: "Moderation Bot", price: 0 },
  { label: "Register Bot", price: 0 },
];
export const LessonAutoComplete = () => {
  return (
    <Autocomplete
      options={bots}
      sx={{ width: "300px" }}
      renderInput={(param) => <TextField {...param} label="Botlar" />}
    />
  );
};
