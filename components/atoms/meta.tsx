import React from 'react'
import {SITE_TITLE} from '../../constants'

const Meta = () => (
    <>
        <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
        />
        <meta
            content="en"
            httpEquiv="Content-Language"
        />
        <meta
            content="Research DAO"
            name="author"
        />
        <meta
            content={SITE_TITLE}
            name="apple-mobile-web-app-title"
        />
        <meta
            content="#ffffff"
            name="msapplication-TileColor"
        />
        <meta
            content="#ffffff"
            name="theme-color"
        />
    </>
)

export default Meta
