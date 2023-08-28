import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";

export const LessonImageList = () => {
  return (
    <Stack>
      <ImageList
        /*  sx={{ width: 500, height: 450 }}  rowHeight={164} */ cols={5}
      >
        {itemData.map((img, key) => (
          <ImageListItem key={key}>
            <img src={img.img} alt="" loading="lazy" />
            <ImageListItemBar title={img.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        /*  sx={{ width: 500, height: 450 }}  rowHeight={164} */ variant="woven"
        cols={5}
      >
        {itemData.map((img, key) => (
          <ImageListItem key={key}>
            <img src={img.img} alt="" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        /*  sx={{ width: 500, height: 450 }}  rowHeight={164} */ variant="masonry"
        cols={5}
      >
        {itemData.map((img, key) => (
          <ImageListItem key={key}>
            <img src={img.img} alt="" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};
const itemData: Array<{ img: string; title: string }> = [
  {
    img: "https://images.unsplash.com/photo-1691308475439-8523d6a0dc15",
    title: "1Image",
  },
  {
    img: "https://images.unsplash.com/photo-1691405203088-92e9fcb91cd4",
    title: "2Image",
  },
  {
    img: "https://images.unsplash.com/photo-1690122171625-4a292e13ea7d",
    title: "3Image",
  },
  {
    img: "https://images.unsplash.com/photo-1691894875807-802d4d30d0fa",
    title: "4Image",
  },
  {
    img: "https://images.unsplash.com/photo-1693041186977-dc5820aa95ba",
    title: "5Image",
  },
  {
    img: "https://images.unsplash.com/photo-1690983178068-eb0ac76ef0b1",
    title: "6Image",
  },
  {
    img: "https://images.unsplash.com/photo-1689871431055-76c786978b5f",
    title: "7Image",
  },
  {
    img: "https://images.unsplash.com/photo-1690906379371-9513895a2615",
    title: "8Image",
  },
  {
    img: "https://images.unsplash.com/photo-1692881552712-16930d442f1a",
    title: "9Image",
  },
  {
    img: "https://images.unsplash.com/photo-1690666094915-6a104f803693",
    title: "10Image",
  },
];
