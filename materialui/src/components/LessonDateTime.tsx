import { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Stack } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export const LessonDateTime = () => {
  const [value, setValue] = useState<null | Dayjs>(null);
  console.log(value);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          label="Tarih"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        /> */}
        <TimePicker
          label="Zaman"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Stack>
  );
};
