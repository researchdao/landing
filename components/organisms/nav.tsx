import React from 'react'
import {
    Button,
    Box,
    Flex,
} from '@chakra-ui/react'
import NavBarButton from '../atoms/nav-bar-button'
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
                <NavBarButton href={DOCS_URL}>Docs</NavBarButton>
                <NavBarButton
                    href={DISCORD_INVITE_LINK}
                    target="_blank"
                >
                Discord
                </NavBarButton>
            </Flex>
        </Box>
    )
}

export default Nav
