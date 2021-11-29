import {SITE_TITLE, SITE_DESCRIPTION, SITE_DOMAIN} from './constants'

const title = SITE_TITLE
const description = SITE_DESCRIPTION
const imageURL = `https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fp%3D2gGYPD4KICA8RmxleAogICAgc3g9e3sKICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLAogICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywKICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsCiAgICAgIGJnOiAnYmxhY2snLAogICAgfX0KICA-CiAgICA8Qm94CiAgICAgIHN4PXt7CiAgICAgICAgY29sb3I6ICcjRjVGN0ZBJywKICAgICAgfX0KICAgID4KICAgICAgPEhlYWRpbmcKICAgICAgICBzeD17ewogICAgICAgICAgZm9udFNpemU6ICc1MHB4JywKICAgICAgICAgIGZvbnRGYW1pbHk6ICdJbnRlcicsCiAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnCiAgICAgICAgfX0KICAgICAgPgogICAgICAgIHtxdWVyeS5zaXRlTmFtZX0KICAgICAgPC9IZWFkaW5nPgogICAgPC9Cb3g-CiAgPC9GbGV4Pgo8Lz4K%26siteName%3D${SITE_TITLE}`
const siteURL = `https://${SITE_DOMAIN}`

const NextSEOConfig = {
    title,
    description,
    canonical: siteURL,
    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'en_US',
        url: siteURL,
        images: [{
            url: imageURL,
            alt: title,
            width: 1686,
            height: 948,
        }],
    },
    twitter: {
        handle: '@researchdao_io',
        site: '@researchdao_io',
        cardType: 'summary_large_image',
    },
}

export default NextSEOConfig
