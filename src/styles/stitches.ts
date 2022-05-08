import { createStitches } from '@stitches/react';

const { styled, keyframes, getCssText } = createStitches({
    theme: {
        colors: {
            textPrimary: '#F9F9F2',
            textSecondary: '#cacaca',
            surface: '#131313',
            bgSPrimary: 'rgb(4,6,12)',
            bgSecondary: 'rgb(43,48,65)',
        },
        fontSizes: {
            sm: '0.8rem',
            base: '1rem',
            md: '1.25rem',
        },
    },
    utils: {
        mx: (value: number | string) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: number | string) => ({
            marginTop: value,
            marginBottom: value,
        }),
        px: (value: number | string) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: number | string) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1536px)',
    },
});

export { styled, keyframes, getCssText };
