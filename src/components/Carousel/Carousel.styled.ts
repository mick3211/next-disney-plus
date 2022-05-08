import { styled } from 'src/styles/stitches';

export const CarouselRoot = styled('div', {
    width: '100%',
    py: 50,
    overflowX: 'auto',
    overflowY: 'clip',
    userSelect: 'none',
    scrollSnapType: 'x mandatory',
    display: 'grid',
    gridAutoColumns: '85%',
    gridAutoFlow: 'column',
    gridColumnGap: '1.5rem',
    scrollbarWidth: 'none',
    position: 'relative',

    '&::after, &::before': {
        content: '',
    },

    '&::-webkit-scrollbar': {
        display: 'none',
    },
});

export const CarouselItem = styled('div', {
    width: '100%',
    scrollSnapAlign: 'center',
    overflow: 'hidden',
    borderRadius: 4,
    boxShadow:
        'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',

    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});

export const ControlWrapper = styled('button', {
    width: 60,
    px: 16,
    color: '$textPrimary',
    fontSize: '2rem',
    border: 'none',
    cursor: 'pointer',
    position: 'sticky',
    top: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    display: 'none',

    '@sm': {
        display: 'flex',
    },

    variants: {
        position: {
            left: {
                left: 0,
            },
            right: {
                left: '100%',
                transform: 'translateX(-100%)',
            },
        },
        hidden: {
            true: {
                display: 'none',
            },
        },
    },
});
