import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
    },

    body: {
        fontFamily: 'Poppins, sans-serif',
        userSelect: 'none',
        background:
            'radial-gradient(ellipse, rgb(43,48,65) 2%, rgb(4,6,12) 100%)',
        backgroundAttachment: 'fixed',
    },
});
