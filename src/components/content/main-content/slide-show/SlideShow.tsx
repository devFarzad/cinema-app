import React, { SetStateAction, useEffect, useState } from "react";
import "./SlideShow.scss";
import propTypes from "prop-types";
interface PropsIndicators {
  props: number[];
}
interface imagesType {
  url: string;
}
interface propsIndicators  {
  currentSlide: Number;
}
interface propsSliderShow {
  images: imagesType[];
  auto: boolean;
}
const SlideShow: React.FC<propsSliderShow> = ({ images, auto }) => {
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0,
  });
  const { slideShow, slideIndex } = state;
  const [currentIndex, setCurrentIndex] = useState(0);
  // const currentIndex=0;
  const [sliderInterval, setSliderInterval] = useState(0);
  let currentSlideIndex = 0;
  useEffect(() => {
    if (auto) {
      const timeInterval = window.setInterval(() => {
        autoMoveSlide();
      }, 5000);
    
      setSliderInterval(timeInterval);
      return () => {
        clearInterval(timeInterval);
        clearInterval(sliderInterval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const autoMoveSlide = () => {
    let lastIndex = 0;
    lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setState((prev) => ({
      ...prev,
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex,
    }));
  };
  const moveSlideWithArrows = (type: string) => {
    let index = currentIndex;
    if (type === "prev") {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
      setCurrentIndex(index);
      setState((prev) => ({
        ...prev,
        slideShow: images[index],
        slideIndex: index,
      }));
    } else if (type === "next") {
      if (currentIndex == images.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
    }
    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideShow: images[index],
      slideIndex: index,
    }));
  };
  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => moveSlideWithArrows("prev")}
        />
        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => moveSlideWithArrows("next")}
        />
      </div>
    );
  };
  const Indicators = (props: propsIndicators ) => {
    const { currentSlide } = props;
    const listIndicators = images.map((slide, index) => {
      const btnClasses =
        index === currentSlide
          ? "slider-navButton slider-navButton--active"
          : "slider-navButton";
      return (
        <button
          key={index}
          className={btnClasses}
          onClick={() => {
            setCurrentIndex(index);
            setState((prev) => ({
              ...prev,
              slideShow: images[index],
              slideIndex: index,
            }));
          }}
        />
      );
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length && slideShow && (
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${slideShow.url})`,
              }}
            ></div>
          )}
        </div>
        <Indicators currentSlide={slideIndex} />
        {!auto ? <RenderArrows /> : null}
      </div>
    </>
  );
};
SlideShow.propTypes = {
  images: propTypes.array.isRequired,
  auto: propTypes.bool.isRequired,
};
export default SlideShow;
