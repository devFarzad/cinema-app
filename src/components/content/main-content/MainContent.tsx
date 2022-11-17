
import React from "react";
import './MainContent.scss';
import SlideShow from "./slide-show/SlideShow";
const MainContent : React.FC = ()=>{
    const images = [
        {
          url: "https://c.pxhere.com/photos/6a/ae/movie_reel_projector_film_cinema_entertainment_retro_vintage-1067196.jpg!d",
        },
        {
          url: "https://c.pxhere.com/photos/07/0e/old_tv_records_vhs_tapes_retro_tv_vintage_videotape_vhs-826983.jpg!d",
        },
        {
          url: "https://c.pxhere.com/photos/b8/58/smartphone_movie_taking_pictures_audience_photography_filming_camera_fans-948921.jpg!d",
        },
      ];
return (
    <div className="main-content">
        
       <SlideShow images={images} auto={true}/>
        <div className="grid-movie-title">
            <div className="movieType">Now Playing</div>
            <div className="paginate">Paginate</div>
        </div>
        {/* Display Grid Component */}


    </div>
);
}
export default MainContent;
