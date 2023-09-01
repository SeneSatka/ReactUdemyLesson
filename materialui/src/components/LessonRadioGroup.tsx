import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const LessonRadioGroup = () => {
  const [value, setValue] = useState("");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };
  return (
    <FormControl>
      <FormLabel>Maaş beklentisi</FormLabel>
      <RadioGroup
        row
        name="extected-salary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel label="2000$" value="2000" control={<Radio />} />
        <FormControlLabel label="3000$" value="3000" control={<Radio />} />
        <FormControlLabel label="4000$" value="4000" control={<Radio />} />
      </RadioGroup>
      <FormHelperText>Yanlış seçim</FormHelperText>
    </FormControl>
  );
};
