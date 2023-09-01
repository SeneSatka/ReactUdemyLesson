import ImageItem from "./imageItem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, i) => {
        return <ImageItem key={i} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
