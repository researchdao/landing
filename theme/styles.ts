import type {Styles} from '@chakra-ui/theme-tools'

const styles: Styles = {
    global: ({colorMode}) => ({
        html: {
            lineHeight: 1.5,
            scrollBehavior: 'smooth',
            fontSmooth: 'auto',
        },
        'html, body': {
            bg: colorMode === 'light' ? 'white' : 'black',
            color: colorMode === 'light' ? 'gray.800' : 'gray.300',
        },
        '*': {
            borderColor: colorMode === 'light' ? 'gray.300' : 'gray.800',
        },
        '::placeholder': {
            color: colorMode === 'light' ? 'gray.500' : 'gray.500',
        },
        mark: {
            background: 'none',
            color: 'inherit',
        },
        del: {
            textDecoration: 'none',
        },
        '::selection': {
            bg: colorMode === 'dark' ? 'gray.500' : 'gray.200',
        },
        '#nprogress .bar': {
            bg: colorMode === 'light' ? 'gray.800' : 'gray.300',
        },
    }),
}

export default styles
