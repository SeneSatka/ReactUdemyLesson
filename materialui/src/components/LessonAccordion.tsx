import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handlechange =
    (panel: string) => (_event: React.SyntheticEvent, isExpended: boolean) => {
      setExpanded(isExpended ? panel : false);
    };

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ilk bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
          aliquam vel corporis aut ex non voluptatum itaque nam est.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ikinci bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
          aliquam vel corporis aut ex non voluptatum itaque nam est.
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>üçüncü bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
          aliquam vel corporis aut ex non voluptatum itaque nam est.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={handlechange("panel1")}
        expanded={expanded === "panel1"}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ilk bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
          aliquam vel corporis aut ex non voluptatum itaque nam est.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={handlechange("panel2")}
        expanded={expanded === "panel2"}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>ikinci bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
          aliquam vel corporis aut ex non voluptatum itaque nam est.
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={handlechange("panel3")}
        expanded={expanded === "panel3"}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>üçüncü bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
          aliquam vel corporis aut ex non voluptatum itaque nam est.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
