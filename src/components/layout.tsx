// components/layout.js


import WithSubnavigation from "@/components/layouts/Navbar";
import {Footer} from "@/components/layouts/Footer";
import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

interface DefaultLayoutProps {
    children: ReactNode
    pageTitle?: string
}
const Layout = ({ children, pageTitle }: DefaultLayoutProps) => {
    return (
        <>
            <WithSubnavigation />
            <Box>
                <main>{children}</main>
            </Box>
            <Footer />
        </>
    )
}

export default Layout;