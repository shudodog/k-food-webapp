import React, {useEffect, useState} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import {ICarouselTopResponseDto} from "@/business/entities/home/carouselTop";

import CarouselHomeTop, {ICarouselHomeTopList} from "@/components/carousel/carouselHomeTop";
import ImageItemWrapper from "@/components/imageItem/ImageItemWrapper";
import ImageItemBox from "@/components/imageItem/ImageItemBox";
import {Box, Icon, Image, Text} from "@chakra-ui/react";
import {GrLocation} from "react-icons/gr"
import Link from "next/link";
import CarouselRestTop from "@/components/carousel/carouselRestTop";

//Mock data
const list = [
    {
        imgId : "00",
        imgUrl : "http://gdimg.gmarket.co.kr/1453682296/still/600?ver=1530152938",
        menuName : "비빔밥",
        menuNameEn : "bibimbap",
        menuNameKo : "bibimbap",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    {
        imgId : "01",
        imgUrl : "https://doewxs707ovkc.cloudfront.net/v3/prod/image/item/mainpage/907/ad4474bef39c4167b84477eaa7a5052f20210708171733.",
        menuName : "떡볶이",
        menuNameEn : "tteokbokki",
        menuNameKo : "tteokbokki",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    {
        imgId : "02",
        imgUrl : "https://sitem.ssgcdn.com/37/29/15/item/1000021152937_i1_1100.jpg",
        menuName : "순대",
        menuNameKo : "sundae",
        menuNameEn : "sundae",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    {
        imgId : "03",
        imgUrl : "https://cafe24img.poxo.com/theoro/web/product/big/202101/c8e5e6cc7b895240529649fa336982b6.jpg",
        menuName : "숯불닭갈비",
        menuNameKo : "succbul-talkgalbi",
        menuNameEn : "Charcoal Fired Chicken Ribs",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    {
        imgId : "00",
        imgUrl : "http://gdimg.gmarket.co.kr/1453682296/still/600?ver=1530152938",
        menuName : "비빔밥",
        menuNameEn : "bibimbap",
        menuNameKo : "bibimbap",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    {
        imgId : "01",
        imgUrl : "https://doewxs707ovkc.cloudfront.net/v3/prod/image/item/mainpage/907/ad4474bef39c4167b84477eaa7a5052f20210708171733.",
        menuName : "떡볶이",
        menuNameEn : "tteokbokki",
        menuNameKo : "tteokbokki",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    {
        imgId : "02",
        imgUrl : "https://sitem.ssgcdn.com/37/29/15/item/1000021152937_i1_1100.jpg",
        menuName : "순대",
        menuNameKo : "sundae",
        menuNameEn : "sundae",
        restAddrSum : "",
        restUrl : "",
        restId : "",
        menuPrice : "13000",
        menuId : ""
    },
    // {
    //     imgId : "03",
    //     imgUrl : "https://cafe24img.poxo.com/theoro/web/product/big/202101/c8e5e6cc7b895240529649fa336982b6.jpg",
    //     menuName : "숯불닭갈비",
    //     menuNameKo : "succbul-talkgalbi",
    //     menuNameEn : "Charcoal Fired Chicken Ribs",
    //     restAddrSum : "",
    //     restUrl : "",
    //     restId : ""
    // },

]

const  Rest = () => {

    const [carouselItems, setCarouselItems] = useState<ICarouselHomeTopList []>(null)

    useEffect(()=>{
        /**
         * 화면 첫 진입시 restaurant id로 레스토랑 정보 가져오는 api 호출
         **/
        const temp = []
        list.map((value)=> {
            temp.push({
                imgId : value?.imgId,
                imgUrl : value?.imgUrl,
                mainTitle : value?.menuNameKo + " (" + value?.menuNameEn + ")",
                subTitle : "W " + value?.menuPrice,
                link : "/restaurant/menu-detail/" + value?.menuId,
            })
        })
        setCarouselItems(temp)
    },[])

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    }

    return (
        <>
            <Box p={"50px"} w="100%" marginTop={"-50px"}>
                <CarouselRestTop list={carouselItems} paddingLeft={20} responsive={responsive} imgBoxSize={"300px"}/>
            </Box>
            <Box p={"80px"} w="100%" marginTop={"-100px"}>
                <ImageItemWrapper column={4} >
                    <ImageItemBox colSpan={{ xl: 2 }} rowSpan={2} >
                        <Box
                            w="100%"
                            h="357px"
                            bg="rgba(254, 142, 203, 0.15)"
                            color="red"
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                            차트 영역
                        </Box>
                    </ImageItemBox>
                    <ImageItemBox colSpan={{ xl: 2 }} rowSpan={2}>
                        <Link
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                cursor: "pointer",
                                textTransform: "uppercase",
                                color: "white",
                            }}
                            href={"/restaurant/" + "11231" + "/main"}
                        >
                            <Image
                                src="https://sitem.ssgcdn.com/37/29/15/item/1000021152937_i1_1100.jpg"
                                w="100%"
                                h="357px"
                                bg="rgba(254, 142, 203, 0.15)"
                                color="red"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                cursor={"pointer"}

                            ></Image>
                            <Text>Restaurant Name : MubongLee SundaeGook</Text>
                            <Text>Menu : Sundae</Text>
                            <Text>Place : SeoulNowonGu
                                <Icon as={GrLocation}/>
                            </Text>
                        </Link>
                    </ImageItemBox>
                    <ImageItemBox colSpan={{ xl: 2 }} rowSpan={2}>
                        <Image
                            src="https://sitem.ssgcdn.com/37/29/15/item/1000021152937_i1_1100.jpg"
                            w="100%"
                            h="357px"
                            bg="rgba(254, 142, 203, 0.15)"
                            color="red"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        ></Image>
                        <Text>Restaurant Name : MubongLee SundaeGook</Text>
                        <Text>Menu : Sundae</Text>
                        <Text>Place : SeoulNowonGu
                            <Icon as={GrLocation}/>
                        </Text>
                    </ImageItemBox>
                    <ImageItemBox colSpan={{ xl: 2 }} rowSpan={2}>
                        <Image
                            src="https://sitem.ssgcdn.com/37/29/15/item/1000021152937_i1_1100.jpg"
                            w="100%"
                            h="357px"
                            bg="rgba(254, 142, 203, 0.15)"
                            color="red"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        ></Image>
                        <Text>Restaurant Name : MubongLee SundaeGook</Text>
                        <Text>Menu : Sundae</Text>
                        <Text>Place : SeoulNowonGu
                            <Icon as={GrLocation}/>
                        </Text>
                    </ImageItemBox>
                </ImageItemWrapper>
            </Box>
        </>
    )
}

export default Rest;