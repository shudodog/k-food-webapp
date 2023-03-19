import React, {useEffect, useRef, useState} from "react";
import AliceCarousel, {Responsive} from "react-alice-carousel";
import Link from "next/link";
import {Img} from "@chakra-ui/image";
import 'react-alice-carousel/lib/alice-carousel.css';
export interface ICarouselRestTopList {
    imgId : string
    imgUrl : string
    mainTitle : string
    subTitle : string
    link : string
}
export interface ICarouselRestTop {
    list : ICarouselRestTopList[]
    paddingRight? : number
    paddingLeft? : number
    responsive? : Responsive
    imgBoxSize? : string
}

const handleDragStart = (e) => e.preventDefault();
const CarouselRestTop = (props : ICarouselRestTop) => {

    const carousel = useRef<AliceCarousel>(null);

    const {list, paddingRight, paddingLeft, responsive, imgBoxSize, ...rest} = props

    const carouselItems = list?.map((value, index, array) => {
        return(
            <Link
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    color: "white",
                }}
                href={value?.link}
            >
                <Img src={value?.imgUrl}
                     onDragStart={handleDragStart}
                     role="presentation"
                     boxSize={imgBoxSize ? imgBoxSize : ""}
                     style={{
                         marginBottom : 5,
                     }}
                />
                <span
                    style={{
                        color:  'red',
                        fontWeight: 500,
                        marginBottom : 5,
                    }}
                >
                        {value?.mainTitle}
                    </span>
                <span
                    style={{
                        // marginBottom : "-20px",
                        color : "rgb(14, 203, 129)",
                        fontSize: 15,
                        fontWeight: 500 }}
                >
                            {value?.subTitle}
                    </span>
            </Link>
        )
    })

    return (
        <>
            <AliceCarousel mouseTracking
                // animationDuration={1000}
                           disableDotsControls
                           disableButtonsControls
                           responsive={responsive ? responsive : null}
                // autoPlay={true}
                           items={carouselItems}
                           infinite={true}
                           ref={carousel}
            />
            <nav key="nav" className="b-refs-navs">
                {carouselItems?.map((item, i) => {
                    return <span key={i} onClick={() => carousel?.current?.slideTo(i)} />;
                })}
            </nav>
            <button onClick={(e) => carousel?.current?.slidePrev(e)}>Prev</button>
            <button onClick={(e) => carousel?.current?.slideNext(e)}>Next</button>
        </>
    );
}

export default CarouselRestTop;