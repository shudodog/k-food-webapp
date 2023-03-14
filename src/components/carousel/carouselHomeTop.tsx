import React, {useEffect, useState} from "react";
import AliceCarousel, {Responsive} from "react-alice-carousel";
import Link from "next/link";
import {Img} from "@chakra-ui/image";

export interface ICarouselHomeTopList {
    imgId : string
    imgUrl : string
    menuName : string
    menuNameKo : string
    menuNameEn : string
    restAddrSum ? : string
    restUrl ? : string
    restId : string
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
            <Link href={value?.link}>
                <Img src={value?.imgUrl} onDragStart={handleDragStart} role="presentation" boxSize={imgBoxSize ? imgBoxSize : "250px"}/>
                <span color={"red"}>
                        {value?.menuNameKo}
                    <span>
                            {value?.menuNameEn}
                        </span>
                    </span>
            </Link>
        )
    })

    return (
        <>
            <AliceCarousel mouseTracking
                           animationDuration={1000}
                           disableDotsControls
                           disableButtonsControls
                           responsive={responsive ? responsive : null}
                           autoPlay
                           items={carouselItems}
                           paddingRight={paddingRight ? paddingRight : 0}
                           paddingLeft={paddingLeft ? paddingLeft : 0}
                           infinite={true}
            />
        </>
    );
}

export default CarouselHomeTop;