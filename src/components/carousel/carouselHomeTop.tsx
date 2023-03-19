import React, {useEffect, useState} from "react";
import AliceCarousel, {Responsive} from "react-alice-carousel";
import Link from "next/link";
import {Img} from "@chakra-ui/image";

export interface ICarouselHomeTopList {
    imgId : string
    imgUrl : string
    mainTitle : string
    subTitle : string
    link : string
}
export interface ICarouselHomeTop {
    list : ICarouselHomeTopList[]
    paddingRight? : number
    paddingLeft? : number
    responsive? : Responsive
    imgBoxSize? : string
}

const handleDragStart = (e) => e.preventDefault();
const CarouselHomeTop = (props : ICarouselHomeTop) => {

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
            />
        </>
    );
}

export default CarouselHomeTop;