import React from 'react'
import { Alert, AlertProps } from '@chakra-ui/react'

const Banner = (props: AlertProps) => {
    return (
        <Alert
            flexDirection='column'
            justifyContent='center'
            textAlign='center'
            alignItems='center'
            {...props}
        />
    )
}

export default Banner
