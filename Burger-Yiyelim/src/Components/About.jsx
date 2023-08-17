import React from "react";
import banner from "../assets/banneryeni.jpg";
import "../styles/About.css";
export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis
          libero alias, consequatur corrupti animi eos exercitationem dolores.
          Molestiae numquam, error odit autem consequatur nulla? Iste quisquam
          adipisci odio cupiditate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque impedit aliquam consectetur pariatur ipsum
          deserunt, repudiandae explicabo, vel placeat nemo labore eius officia
          beatae voluptate alias debitis nesciunt. Doloribus, corrupti? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Dolorem laboriosam
          ad error enim. Rerum esse similique voluptate dolore sequi, hic nulla
          debitis consequuntur numquam, mollitia dolores libero veritatis
          eligendi itaque!
        </p>
      </div>
    </div>
  );
};
