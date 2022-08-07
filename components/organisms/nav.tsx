import React from 'react'
import {
    Button,
    Box,
    Flex,
} from '@chakra-ui/react'
import NavBarButton from '../atoms/nav-bar-button'
import Banner from '../atoms/banner'
import {DOCS_URL, DISCORD_INVITE_LINK} from '../../constants'

const Nav = () => {
    return (
        <Box
            as="nav"
            position="fixed"
            top={0}
            w="full"
            zIndex={10}
        >
            <Banner
                bg='rgb(153, 0, 57)'
                fontWeight={500}
                status='warning'
            >
                We are suspending our travel grants program
                until further notice while we seek out new
                funding for the Research DAO.
            </Banner>
            <Flex
                align="center"
                pt={8}
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
