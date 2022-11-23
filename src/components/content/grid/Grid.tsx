import React from "react";
import Rating from "../rating/Rating";
import "./Grid.scss";
interface GridInterface {
  images: {
    url: string;
    rating: number;
  }[];
}

const Grid: React.FC<GridInterface> = (props) => {
  const { images } = props;
  return (
    <>
      <div className="grid">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className="grid-cell"
              style={{ backgroundImage: `url(${img.url})` }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title"> Mission Impossible</span>
                <div className="grid-detail-rating">
                  <Rating rating={img.rating} totalStars={10} />
                  &nbsp;&nbsp;
      <div className="grid-vote-average">{img.rating}</div>
                </div>
              </div>
              <div></div>
            </div>
          );
        })}
        <div></div>
      </div>
    </>
  );
};

export default Grid;
