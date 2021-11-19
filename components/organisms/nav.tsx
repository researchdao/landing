import React from 'react'
import {
    Button,
    Box,
    Flex,
} from '@chakra-ui/react'
import {DOCS_URL, DISCORD_INVITE_LINK} from '../../constants'

const Nav = () => {
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
                    href={DOCS_URL}
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
                    href={DISCORD_INVITE_LINK}
                    target="_blank"
                >
                Discord
                </Button>
            </Flex>
        </Box>
    )
}

export default Nav
