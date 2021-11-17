import type {Styles} from '@chakra-ui/theme-tools'

const styles: Styles = {
    global: ({colorMode}) => ({
        html: {
            lineHeight: 1.5,
            scrollBehavior: 'smooth',
            fontSmooth: 'auto',
        },
        'html, body': {
            bg: 'black',
            color: 'gray.300',
        },
        '*': {
            borderColor: 'gray.800',
        },
        '::placeholder': {
            color: 'gray.500',
        },
        mark: {
            background: 'none',
            color: 'inherit',
        },
        del: {
            textDecoration: 'none',
        },
        '::selection': {
            bg: 'gray.500',
        },
        '#nprogress .bar': {
            bg: 'gray.300',
        },
    }),
}

export default styles
