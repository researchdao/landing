import React, {FC} from 'react'
import {createIcon, IconProps} from '@chakra-ui/icon'

export const LogoIcon: FC<IconProps> = createIcon({
    displayName: 'LogoIcon',
    viewBox: '0 0 360 360',
    path: (
        <g transform="translate(0, 360) scale(0.1, -0.1)" fill="currentColor" stroke="none">
	    <path d="M780 2444 c-51 -14 -106 -41 -98 -49 1 -2 28 1 58 6 100 16 241 -20 309 -78 80 -68 105 -207 52 -281 -15 -22 -18 -32 -9 -33 7 0 101 -2 208 -4 378 -7 682 -71 956 -200 l92 -43 -8 27 c-8 30 1 61 24 80 26 22 135 26 198 7 48 -14 66 -27 124 -89 127 -136 186 -253 186 -365 -1 -64 -29 -170 -41 -155 -4 4 -37 46 -73 93 -202 263 -484 438 -863 535 -174 45 -324 65 -534 72 l-174 6 22 -30 c15 -19 26 -55 32 -104 12 -86 43 -160 88 -211 l31 -36 -42 -7 c-49 -8 -108 -36 -128 -60 -12 -15 -11 -15 16 -8 48 13 358 7 524 -11 172 -19 381 -48 510 -72 233 -43 474 -155 566 -262 12 -13 26 -22 30 -19 5 3 27 39 48 81 34 65 40 88 44 156 3 48 0 99 -8 128 -64 237 -392 547 -735 694 -291 125 -580 184 -950 195 -165 4 -220 10 -255 23 -68 27 -137 31 -200 14z"/>
	    <path d="M901 2227 c-86 -50 -52 -177 47 -177 78 0 121 96 70 155 -28 31 -83 41 -117 22z"/>
        </g>
    )
})

export const GitHubIcon: FC<IconProps> = createIcon({
    displayName: 'GitHubIcon',
    path: (
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </g>
    ),
})

export const TwitterIcon: FC<IconProps> = createIcon({
    displayName: 'TwitterIcon',
    path: (
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </g>
    ),
})

export const EmailIcon: FC<IconProps> = createIcon({
    displayName: 'EmailIcon',
    path: (
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
            />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
        </g>
    ),
})
