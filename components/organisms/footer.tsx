import React from 'react'
import {
    Box,
    Flex,
    Text,
    Center,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
    LogoIcon,
    GitHubIcon,
    TwitterIcon,
    EmailIcon,
} from '../../theme/icons'
import Logo from '../atoms/logo'
import SocialLink from '../atoms/social-link'
import {
    GITHUB_URL,
    TWITTER_URL,
    EMAIL,
} from '../../constants'

const Footer = () => {
    return (
        <Box
            as="footer"
            color="gray.400"
            bg="rgb(23, 25, 35, 0.6)"
        >
            <Flex direction="column">
                <Flex
                    align="center"
                    direction={{base: 'column', md: 'row'}}
                    h={{base: 'auto', md: 20}}
                    justify="space-between"
                    overflow="hidden"
                    py={{base: 5, md: 0}}
                >
                    <Center
                        h={{base: '60px', md: 'full'}}
                        order={{base: 2, md: 0}}
                        w={{base: 'full', md: '25%'}}
                        px={2}
                    >
                        <Text
                            fontFamily="mono"
                            fontSize="lg"
                        >
                            &copy; {new Date().getFullYear()} Research DAO
                        </Text>
                    </Center>
                    <Center
                        fontSize={{base: '2xl', md: 'xl'}}
                        h={{base: '60px', md: 'full'}}
                        my={{base: 6, md: 0}}
                        px={{base: 16, md: 0}}
                        w={{base: 'full', md: '25%'}}
                    >
                        <SocialLink
                            href={GITHUB_URL}
                            ml={{md: 4}}
                            name="GitHub"
                        >
                            <GitHubIcon/>
                        </SocialLink>
                        <SocialLink
                            href={TWITTER_URL}
                            name="Twitter"
                        >
                            <TwitterIcon/>
                        </SocialLink>
                        <SocialLink
                            href={`mailto:${EMAIL}`}
                            mr={{md: 4}}
                            name="Email"
                        >
                            <EmailIcon/>
                        </SocialLink>
                    </Center>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer
