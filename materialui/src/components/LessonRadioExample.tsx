import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const LessonRadioExample = () => {
  const [value, setValue] = useState("");

  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "4") {
      setHelperText("Doğruuu");
      setError(false);
    } else if (value === "5") {
      setHelperText("Cevap > 4 <");
      setError(true);
    } else {
      setError(true);
      setHelperText("Lütfen seçim yapınız");
    }
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHelperText("");
    setError(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>2+2 kaç eder</FormLabel>
        <RadioGroup onChange={handleRadioChange} value={value}>
          <FormControlLabel value="4" label="Dört" control={<Radio />} />
          <FormControlLabel value="5" label="Beş" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};
