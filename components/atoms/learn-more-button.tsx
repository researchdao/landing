import React from 'react'
import {Button} from '@chakra-ui/react'
import {DOCS_URL} from '../../constants'

const LearnMoreButton = () => {
    return (
        <Button
            textTransform="uppercase"
            borderRadius="xl"
            borderWidth="2px"
            p={6}
            variant="outline"
            as="a" 
            href={DOCS_URL}
        >
            Learn More
        </Button>
    )
}

export default LearnMoreButton
