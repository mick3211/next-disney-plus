import { styled } from 'src/styles/stitches';

export const RowRoot = styled('div', {
    width: '100%',
    py: 24,
    overflowX: 'auto',
    overflowY: 'clip',
    scrollSnapType: 'x mandatory',
    display: 'grid',
    gridAutoColumns: 160,
    gridAutoFlow: 'column',
    gridColumnGap: '1.5rem',
    scrollbarWidth: 'none',
    position: 'relative',

    '&:after': {
        content: '',
    },

    '&::-webkit-scrollbar': {
        display: 'none',
    },

    '@sm': {
        gridAutoColumns: 320,
    },
});

export const RowItem = styled('div', {
    width: '100%',
    height: 90,
    scrollSnapAlign: 'start',
    scrollMarginLeft: 16,
    scrollMarginRight: 16,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    boxShadow:
        'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    transition: 'border,transform .5s',

    '&:hover': {
        transform: 'scale(1.1)',
        border: '2px solid $textPrimary',
    },

    '@sm': {
        height: 180,
        scrollMarginLeft: '10vw',
    },
});

export const RowTitle = styled('h4', {
    fontSize: '1.5rem',
    px: 16,
    color: '$textPrimary',
    mx: 'auto',
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

export const RowWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
});
