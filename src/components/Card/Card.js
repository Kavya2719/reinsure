import React from "react";
import "./Card.css";

const Card = ({
  width,
  image,
  imageWidth,
  imageHeight,
  padding,
  title,
  description,
  gapBetweenTitleAndDescription,
  gapBetweenImageAndCard,
  flexDirection,
  textAlign,
  color,
  margin
}) => {
  return (
    <div
      className="card-container"
      style={{
        width,
        gap: gapBetweenImageAndCard,
        padding,
        flexDirection,
        textAlign,
      }}
    >
      <img
        src={image}
        width={imageWidth}
        height={imageHeight}
        style={{ margin: "0px auto" }}
        alt="img"
      />

      <div className="card" style={{ gap: gapBetweenTitleAndDescription, margin }}>
        <div className="card-title" style={{ color }} >{title}</div>
        <div className="card-description" style={{ color }}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
