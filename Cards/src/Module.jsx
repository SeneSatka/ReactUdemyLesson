import React from "react";

function Course({ image, title, description }) {
  console.log({ title, description });
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image ">
            <img
              style={{ objectFit: "cover", width: "300px", height: "130px" }}
              src={image}
              alt={title + " image"}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}-</p>
            </div>
          </div>

          <div className="content">{description}</div>
        </div>
      </div>
    </>
  );
}

export default Course;
