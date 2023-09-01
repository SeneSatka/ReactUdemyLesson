import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const CardComponent = ({ image, title, description }) => {
  return (
    <Card>
      <CardMedia component="img" height="100px" src={image} />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
