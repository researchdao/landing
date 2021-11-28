import React from 'react'
import {Stack, Heading, Text, Image} from '@chakra-ui/react'
import ExternalLink from '../atoms/external-link'
import {EMAIL} from '../../constants'

const FundingBox = () => {
    return (
        <Stack
            spacing={8}
            mx="auto"
            maxW={{base: '90%', md: '46rem'}}
            px={20}
            py={8}
            mb={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            lineHeight="1.5"
        >
            <Heading as="h2" fontSize="2xl">Funding partners</Heading>
            <Image src="https://miro.medium.com/max/1400/1*hazuDJPEx9w1g7olSrbt8g.png" alt="Harmony Logo" w="300px" />
            <Text fontStyle="italic">Interested in becoming a funding partner? <ExternalLink href={`mailto:${EMAIL}?subject=We're interested in becoming a funding partner`}>Let us know</ExternalLink>!</Text>
        </Stack>
    )
}

export default FundingBox
