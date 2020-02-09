import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from '../sources/images/4weekbanner.png'
export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={banner}/>
                </div>
                {/* <div>
                    <img src="../img-02.jpg" />
                </div>
                <div>
                    <img src="../img-03.jpg" />
                </div> */}
            </Carousel>
        </div>
    );
}
