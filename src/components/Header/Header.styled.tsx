import { styled } from 'src/styles/stitches';

export const HeaderStyled = styled('header', {
    py: 12,
    px: 20,
    width: '100%',
    backgroundColor: 'transparent',
    transition: 'background-color .2s',
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    position: 'fixed',
    top: 0,

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
    fontSize: '$sm',
    fontWeight: 'bold',
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
});
