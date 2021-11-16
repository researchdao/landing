import React, {ReactNode} from 'react'
import {NextSeo as NextSEO} from 'next-seo'
import {Box} from '@chakra-ui/react'
import type {OpenGraph} from 'next-seo/lib/types'
import {useRouter} from 'next/router'
import {SITE_TITLE, SITE_DOMAIN} from '../../constants'
import Footer from '../organisms/footer'
import Nav from '../organisms/nav'
import FundingBox from '../organisms/funding-box'
import ProposalBox from '../organisms/proposal-box'

type LayoutProps = {
    children: ReactNode;
    title?: string;
    description?: string;
    isLanding: boolean;
}

const Layout = ({children, title, description, isLanding}: LayoutProps) => {
    const router = useRouter()
    const url = `https://${SITE_DOMAIN}${router.pathname}`
    const fullTitle = title && `${title} – ${SITE_TITLE}`
    const openGraph: OpenGraph = {
        title: fullTitle,
        description,
        url,
    }

    if (title) {
        const cardURL = `https://cards.microlink.io/?p=2gLiPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PU1laWUrU2NyaXB0JmRpc3BsYXk9c3dhcCcKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgogIDxGbGV4CiAgICBzeD17ewogICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsCiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLAogICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywKICAgICAgYmc6ICdibGFjaycsCiAgICB9fQogID4KICAgIDxCb3gKICAgICAgc3g9e3sKICAgICAgICBjb2xvcjogJyNGNUY3RkEnLAogICAgICB9fQogICAgPgogICAgICA8SGVhZGluZwogICAgICAgIHN4PXt7CiAgICAgICAgICBmb250U2l6ZTogJzUwcHgnLAogICAgICAgICAgZm9udEZhbWlseTogJ0ludGVyJywKICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycKICAgICAgICB9fQogICAgICA-CiAgICAgICAge3F1ZXJ5LnNpdGVOYW1lfQogICAgICA8L0hlYWRpbmc-CiAgICA8L0JveD4KICAgIDxUZXh0CiAgICAgIGFzPSJzcGFuIgogICAgICBzeD17ewogICAgICAgIGNvbG9yOiAnIzcxODA5NicsCiAgICAgICAgZm9udFdlaWdodDogNTAwLAogICAgICAgIGZvbnRTaXplOiAyMCwKICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJywKICAgICAgICBsZXR0ZXJTcGFjaW5nOiAzLAogICAgICB9fQogICAgPgogICAgICB7cXVlcnkudGl0bGV9CiAgICA8L1RleHQ-CiAgPC9GbGV4Pgo8Lz4K&title=${title}&siteName=${SITE_TITLE}`
        openGraph.images = [{
            url: `https://i.microlink.io/${encodeURIComponent(cardURL)}`,
            alt: title,
            width: 1686,
            height: 948,
        }]
    }

    return (
        <>
            <NextSEO
                canonical={url}
                description={description}
                openGraph={openGraph}
                title={fullTitle}
            />
            <Nav/>
            <main>{children}</main>
            <Box>
                {/* TODO: these boxes should live in pages/index.tsx */}
                {isLanding ? (
                    <>
                        <FundingBox/>
                        <ProposalBox />
                    </>
                ) : null}
                <Footer/>
            </Box>
        </>
    )
}

export default Layout
