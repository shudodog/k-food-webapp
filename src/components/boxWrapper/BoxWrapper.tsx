import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

const backgroundColors = {
    white: 'white',
    gray: 'gray.50'
}

export interface BoxWrapperProps extends BoxProps {
    colorScheme?: 'white' | 'gray'
}

export const BoxWrapper = (props: BoxWrapperProps) => {
    const { colorScheme = 'white', ...rest } = props

    return (
        <Box
            mb={['10px', null, null, 5]}
            p={['20px 15px', null, null, 6]}
            {...(colorScheme === 'gray' && { border: '1px solid', borderColor: 'gray.300' })}
            borderRadius="2xl"
            bg={backgroundColors[colorScheme]}
            {...rest}
        />
    )
}