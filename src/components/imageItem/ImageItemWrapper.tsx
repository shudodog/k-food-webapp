import {forwardRef, ReactNode} from "react";
import {Grid} from "@chakra-ui/react";

export interface ImageItemWrapperProps {
    children : ReactNode
    column?: number
    isFirstColumn? : boolean
}

const ImageItemWrapper = forwardRef<HTMLDivElement, ImageItemWrapperProps>(
    ({children, column = 4, isFirstColumn = false, ...rest}, ref) => {
        return (
            <Grid
                ref={ref}
                mt={"10px"}
                templateColumns={{
                    base: 'repeat(1, minmax(0px, 1fr))',
                    xl: `repeat(${column}, minmax(0px, 1fr))`,
                    md: `repeat(${Math.max(column - 2, 1)}, minmax(0px, 1fr))`
                }}
                gap="10px"
                sx={
                    isFirstColumn && {
                        '> div:nth-child(-n+4) > div': {
                            border: '1px solid',
                            borderColor: 'primary'
                        }
                    }
                }
                {...rest}>
                {children}
            </Grid>
        )
    }
)

export default ImageItemWrapper