import React from 'react'
import {
    Link,
    Button,
    Box,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from '../atoms/logo'

const Nav = () => {
    const color = useColorModeValue('gray.700', 'gray.400')
    const hoverColor = useColorModeValue('gray.500', 'white')

    return (
        <Box
            as="nav"
            position="fixed"
            pt={8}
            top={0}
            w="full"
            zIndex={10}
        >
            <Flex
                align="center"
                h="full"
                justify="space-between"
                mx="auto"
                w={{base: '85%', md: '90%'}}
            >
                <Button
                    as="a"
                    href="https://docs.researchdao.io"
                    letterSpacing="1px"
                    textTransform="uppercase"
                    borderRadius={0}
                    p={6}
                >
                Docs
                </Button>
                <Button
                    as="a"
                    letterSpacing="1px"
                    textTransform="uppercase"
                    borderRadius={0}
                    p={6}
                    href="https://discord.com"
                    target="_blank"
                >
                Discord
                </Button>
            </Flex>
        </Box>
    )
}

export default Nav
