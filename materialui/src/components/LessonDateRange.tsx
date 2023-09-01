import { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Stack } from "@mui/material";

import { useState } from "react";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";

export const LessonDateRange = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          localeText={{ start: "Başlangıç", end: "Bitiş" }}
        />
      </LocalizationProvider>
    </Stack>
  );
};
