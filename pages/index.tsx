import React from 'react'
import {Center, Heading, Link} from '@chakra-ui/react'
import Layout from '../components/templates/layout'
import LearnMoreButton from '../components/atoms/learn-more-button'
import {LogoIcon} from '../theme/icons'

const Index = () => (
    <Layout isLanding={true}>
        <Center
            flexDirection="column"
            mx="auto"
            h="100vh"
            w={{base: '85%', md: '90%'}}
        >
            <LogoIcon color="blue.400" w="150px" h="150px" />
            <Heading as="h1" m={0} p={0}>
                Research DAO
            </Heading>
            <Heading
                as="h2"
                fontSize="18px"
                fontStyle="italic"
                fontWeight={400}
                textAlign="center"
                lineHeight="1.5"
                margin={10}
            >
                We fund research related to Cryptography, Security, and Distributed Computing.
            </Heading>
            <LearnMoreButton />
        </Center>
    </Layout>
)

export default Index
