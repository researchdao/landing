import {extendTheme} from '@chakra-ui/react'
import styles from './styles'

const overrides = ({
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    sizes: {
        full: '100%',
        '3xs': '14rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
    },
    styles,
    textStyles: {
        h1: {
            fontSize: {base: '3xl', lg: '4xl'},
            fontWeight: 'bold',
            lineHeight: 'taller',
            color: 'white',
        },
        h2: {
            fontSize: {base: '2xl', lg: '3xl'},
            fontWeight: 'semibold',
            lineHeight: 'tall',
            color: 'white',
        },
        h3: {
            fontSize: {base: 'xl', lg: '2xl'},
            fontWeight: 'medium',
            lineHeight: 'base',
            color: 'white',
        },
        h4: {
            fontSize: {base: 'lg', lg: 'xl'},
            fontWeight: 'medium',
            lineHeight: 'base',
            color: 'white',
        },
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
})

const theme = extendTheme(overrides)

export default theme
