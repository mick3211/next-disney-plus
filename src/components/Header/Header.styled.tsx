import { styled } from 'src/styles/stitches';

export const Container = styled('div', {
    width: '100%',
    mx: 'auto',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
    gap: '3rem',
    justifyItems: 'center',

    '@sm': {
        maxWidth: 640,
        justifyItems: 'flex-start',
    },
    '@md': {
        maxWidth: 768,
    },
    '@lg': {
        maxWidth: 1024,
    },
    '@xl': {
        maxWidth: 1536,
    },
});

export const HeaderStyled = styled('header', {
    py: 12,
    px: 16,
    width: '100%',
    backgroundColor: 'transparent',
    transition: 'background-color .2s',

    position: 'sticky',
    top: 0,
    zIndex: 99,

    variants: {
        opaque: {
            true: {
                backgroundColor: '$bgSPrimary',
            },
        },
    },
});

export const NavListStyled = styled('ul', {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    color: '$textPrimary',
    listStyleType: 'none',
    fontSize: '$base',
    fontWeight: 'bold',

    '@sm': {
        '&': {
            fontSize: '$sm',
        },
    },
});

export const NavItemStyled = styled('li', {
    '& a': {
        color: '$textPrimary',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem',
    },

    '& a:hover': {
        textDecoration: 'underline',
        textDecorationColor: '$bgSecondary',
        textUnderlineOffset: 6,
    },

    '& a span': {
        display: 'none',
    },

    '@sm': {
        '& a span': {
            display: 'block',
        },
    },
});
