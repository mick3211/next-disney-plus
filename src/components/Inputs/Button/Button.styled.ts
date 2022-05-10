import { styled } from 'src/styles/stitches';

export const Button = styled('button', {
    color: '$textPrimary',
    backgroundColor: '#0072d2',
    height: 48,
    px: 16,
    border: 'none',
    fontSize: '$base',
    fontWeight: 'bold',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color .2s',

    '&:hover': {
        backgroundColor: '#0083e3',
    },
});
