import React from "react";
import ReactDOM from "react-dom";
import asd from "../Foto/asd.png"
import dsa from "../Foto/dsa.jpeg"
import as from "../Foto/as.jpeg"
import asdf from "../Foto/asdf.jpeg"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/OwlCarouselSass.scss"

function Gallery() {
  return (
    <OwlCarousel className="owl-theme" items number={4}  stagePadding={0} slideBy={1} loop={true} autoplay={true} autoplayTimeout={2000}
      autoplayHoverPause={true} nav={true} >
        <div class="item">
          <img src={asd} />
        </div>
        <div class="item">
          <img src={dsa} />
        </div>
        <div class="item">
          <img src={as} />
        </div>
        <div class="item">
          <img src={asdf} />
        </div>
      </OwlCarousel>
  )
}

export {Gallery}