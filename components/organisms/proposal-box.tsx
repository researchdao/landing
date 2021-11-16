import React from 'react'
import {Stack, Button, Heading, Text} from '@chakra-ui/react'

const ProposalBox = () => {
    return (
        <Stack
            spacing={8}
            mx="auto"
            maxW={{base: '90%', md: '46rem'}}
            borderColor="rgb(23, 25, 35, 0.6)"
            borderWidth="2px"
            px={20}
            py={8}
            mb={20}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            lineHeight="1.5"
        >
            <Heading as="h2" fontSize="2xl">Looking for funding?</Heading>
            <Text fontSize="lg">We are currently offering travel funding for undergraduate, graduate, and PhD students to participate and present their papers in conferences.</Text>
            <Button
                color="blue.400"
                textTransform="uppercase"
                borderRadius="xl"
                p={6}
                bg="rgb(23, 25, 35, 0.8)"
                w="fit-content"
                as="a"
                href="https://docs.researchdao.io/eligibility"
            >
            Submit a proposal
            </Button>
        </Stack>
    )
}

export default ProposalBox
