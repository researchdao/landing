import {Button, ButtonProps} from '@chakra-ui/react'

const NavBarButton = (props) => {
    return (
        <Button
            as="a"
            letterSpacing="1px"
            textTransform="uppercase"
            borderRadius={0}
            p={6}
            {...props}
        />
    )
}

export default NavBarButton
