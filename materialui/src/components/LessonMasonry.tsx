import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
export const LessonMasonry = () => {
  return (
    <Masonry columns={3}>
      {heights.map((height, i) => (
        <Paper key={i}>
          <Accordion sx={{ minHeight: height }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Accordion {i + 1}
            </AccordionSummary>
            <AccordionDetails>Contents</AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};
