import {Box, ChakraProvider, Flex, flexbox} from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import Layout from "@/components/layout";
import React, {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ChakraProvider theme={theme}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}


export default MyApp
