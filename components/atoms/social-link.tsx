import React from 'react'
import {
    Link,
    Center,
    LinkProps,
    useColorModeValue,
} from '@chakra-ui/react'

type SocialLinkProps = {
    name: string;
} & LinkProps

const SocialLink = ({name, children, ...props}: SocialLinkProps) => {
    return (
        <Link
            isExternal
            _focus={{
                outline: 'none',
                color: 'white',
            }}
            _hover={{color: 'white'}}
            aria-label={name}
            flex="1"
            py={{base: 8, md: 4}}
            transition="all 0.2s ease-in"
            {...props}
        >
            <Center>
                {children}
            </Center>
        </Link>
    )
}

export default SocialLink
