// components/layout.js


import WithSubnavigation from "@/components/layouts/Navbar";
import {Footer} from "@/components/layouts/Footer";
import {ReactNode} from "react";

interface DefaultLayoutProps {
    children: ReactNode
    pageTitle?: string
}
const Layout = ({ children, pageTitle }: DefaultLayoutProps) => {
    return (
        <>
            <WithSubnavigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;