import React from 'react'
import {Link, Box, Center, Heading, Text} from '@chakra-ui/react'
import {NextPage, NextPageContext} from 'next'
import NextLink from 'next/link'
import Layout from '../components/templates/layout'

type ErrorProps = {
    status: number;
}

const Error: NextPage<ErrorProps> = ({status}: ErrorProps) => (
    <Layout
        description={status === 404 ? 'This page got lost in the void.' : 'Not a good place to be in.'}
        title={String(status)}
        isLanding={false}
    >
        <Center
            flexDirection="column"
            h="100vh"
            mx="auto"
        >
            <Heading
                as="h1"
                fontSize={{base: '6xl', md: '7xl', xl: '6vw'}}
                fontStyle="mono"
                fontWeight={600}
            >
                {status || '1337'}
            </Heading>
            {status !== 404 && (
                <Box fontFamily="mono">
                    <Text fontSize="md">
                        An unexpected error has occured.
                    </Text>
                </Box>
            )}
            <NextLink href="/" passHref>
                <Link>&#8592; Back</Link>
            </NextLink>
        </Center>
    </Layout>
)

Error.getInitialProps = ({res, err}: NextPageContext) => {
    const status = res ? res.statusCode : (err ? err.statusCode : 404)
    return {status}
}

export default Error
