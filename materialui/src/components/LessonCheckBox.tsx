import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

export const LessonCheckBox = () => {
  const [isAccpet, setIsAccpet] = useState(false);
  const [knowLegde, setKnowLegde] = useState<string[]>([]);
  const handleKnowlegdeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowLegde.indexOf(e.target.value);
    if (index === -1) setKnowLegde([...knowLegde, e.target.value]);
    else setKnowLegde(knowLegde.filter((k) => k !== e.target.value));
  };
  console.log(knowLegde);
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="Üniversite" />
            <FormControlLabel control={<Checkbox />} label="Lise" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Ortaokul"
            />
            <FormControlLabel disabled control={<Checkbox />} label="İlkokul" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccpet}
                  onChange={(e) => setIsAccpet(e.target.checked)}
                />
              }
              label="Kullanım koşullarını kabul ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Hangi yazılım dillerini biliyorsun</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={knowLegde.includes("javascript")}
                  onChange={handleKnowlegdeChange}
                />
              }
              value="javascript"
              label="JavaScript"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={knowLegde.includes("cpp")}
                  onChange={handleKnowlegdeChange}
                />
              }
              value="cpp"
              label="C++"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={knowLegde.includes("java")}
                  onChange={handleKnowlegdeChange}
                />
              }
              value="java"
              label="Java"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
