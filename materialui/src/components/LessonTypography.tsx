import { Typography } from "@mui/material";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
        voluptatibus!
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
        voluptatibus!
      </Typography>
      <Typography variant="h1">H1 Görünüm</Typography>
      <Typography variant="h2">H2 Görünüm</Typography>
      <Typography variant="h3">H3 Görünüm</Typography>
      <Typography variant="h4">H4 Görünüm</Typography>
      <Typography variant="h5">H5 Görünüm</Typography>
      <Typography variant="h6">H6 Görünüm</Typography>
      <Typography variant="h6">H6 Görünüm</Typography>
      <Typography variant="h1" component="h4">
        H1 Görünüm
      </Typography>
      <Typography variant="h1" component="h4" align="right">
        H1 Görünüm
      </Typography>
      <Typography variant="h1" component="h4" align="left">
        H1 Görünüm
      </Typography>

      <Typography variant="subtitle1">Altbaşlık 1</Typography>
      <Typography variant="subtitle2">Altbaşlık 2</Typography>
    </div>
  );
};
