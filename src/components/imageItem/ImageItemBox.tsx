import React from 'react'
import { GridItem, ResponsiveValue } from '@chakra-ui/react'
import {BoxWrapper, BoxWrapperProps} from "@/components/boxWrapper/BoxWrapper";


export interface ImageItemBoxProps extends BoxWrapperProps {
    colSpan?: ResponsiveValue<number | 'auto'>
    rowSpan?: number
    isPopup?: boolean
}

const ImageItemBox = (props: ImageItemBoxProps) => {
    const { children, colSpan = { md: 1 }, rowSpan = 1, isPopup, ...rest } = props

    return (
        <GridItem colSpan={colSpan} rowSpan={{ md: rowSpan }}>
            <BoxWrapper
                position="relative"
                fontSize={{ base: 'md', md: 'xs' }}
                mb={0}
                p={['22px 15px', null, null, '20px 16px']}
                borderRadius="8px"
                colorScheme={isPopup ? 'gray' : 'white'}
                bg="white"
                height={
                    isPopup
                        ? { base: 'auto', md: '225px' }
                        : { base: 'auto', md: 210 * rowSpan + 10 * (rowSpan - 1) + 'px' }
                }
                {...rest}>
                {children}
            </BoxWrapper>
        </GridItem>
    )
}

export default ImageItemBox
