import {Link, LinkProps} from '@chakra-ui/react'

const ExternalLink = (props: LinkProps) => {
    return (
        <Link
            textDecoration="underline"
            _hover={{color: 'blue.400'}}
            isExternal
            {...props}
        />
    )
}

export default ExternalLink
