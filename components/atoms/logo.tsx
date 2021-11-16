import React from 'react'
import {Heading} from '@chakra-ui/react'
import {SITE_TITLE} from '../../constants'

const Logo = () => (
    <Heading
        fontSize="25px"
        fontStyle="italic"
    >
        {SITE_TITLE}
    </Heading>
)

export default Logo
