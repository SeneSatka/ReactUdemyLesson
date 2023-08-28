import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const LessonCard = () => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        height="150px"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlığım
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          assumenda pariatur voluptate nesciunt impedit hic similique in modi at
          nam.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error">
          Temizle
        </Button>
        <Button variant="contained" color="success">
          Kaydet
        </Button>
      </CardActions>
    </Card>
  );
};
