const Card = ({
  width,
  height,
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
  margin,
  imageMargin,
  titleStyle,
  descriptionStyle
}) => {
  titleStyle={
    ...titleStyle,
    color
  }
  descriptionStyle={
    ...descriptionStyle,
    color
  }

  return (
    <div
      className="flex flex-col"
      style={{
        width,
        height,
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
        className="mx-auto"
        style={{ margin: imageMargin }}
        alt="img"
      />

      <div className="flex flex-col gap-[6.25px]" style={{ gap: gapBetweenTitleAndDescription, margin }}>
        <div className="text-gray text-2xl font-semibold leading-5 tracking-[0.2px] lg:text-xl" style={ titleStyle } >{title}</div>
        <div className="text-light-gray text-sm font-normal leading-[13px] tracking-[0.2px]" style={ descriptionStyle }>{description}</div>
      </div>
    </div>
  );
};

export default Card;
