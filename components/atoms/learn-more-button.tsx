import React from 'react'
import {Button} from '@chakra-ui/react'

const LearnMoreButton = () => {
    return (
        <Button
            textTransform="uppercase"
            borderRadius="xl"
            borderWidth="2px"
            p={6}
            variant="outline"
            as="a" 
            href="https://docs.researchdao.io"
        >
            Learn More
        </Button>
    )
}

export default LearnMoreButton
