import React, { Fragment, LegacyRef, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'
import "./Rating.scss";
interface RatingInterface {
  rating: number;
  totalStars: number;
  className:string
}
const Rating: React.FC<RatingInterface> = ({ rating, totalStars ,className}) => {

  const [numberOfStars, setNumberOfStars] = useState<number[]>();
  const ratingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setNumberOfStars([...Array(totalStars).keys()].map((i) => i + 1));
    let percentage;
    if (totalStars <= 5) {
      percentage = (rating / 5) * 100;
    }else {
      percentage=(rating / 10) * 100;
    }
    const startPercentage =`${Math.floor(percentage)}%`;
    ratingRef.current && (ratingRef.current.style.width = startPercentage) ;
  }, [rating, totalStars]);
  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {numberOfStars &&
          numberOfStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}

        <div className={`front-stars ${className}`} ref={ratingRef }>
          {numberOfStars &&
            numberOfStars?.map((i) => (
              <Fragment key={i}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};
// Rating.propTypes ={
  
// }
export default Rating;
