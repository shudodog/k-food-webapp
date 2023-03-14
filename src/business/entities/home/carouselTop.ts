export interface ICarouselTopResponse {
    list : ICarouselTopResponseDto []
}

export interface ICarouselTopResponseDto {
    imgId : string
    imgUrl : string
    menuName : string
    menuNameKo : string
    menuNameEn : string
    restAddrSum ? : string
    restUrl ? : string
    restId : string
}