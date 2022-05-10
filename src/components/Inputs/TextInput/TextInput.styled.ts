import { styled } from 'src/styles/stitches';

export const TextInput = styled('input', {
    width: '100%',
    px: 16,
    py: 20,
    outline: 'none',
    backgroundColor: '$input',
    border: 'none',
    borderRadius: 4,
    color: '$textPrimary',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0)',
    transition: 'border-color .2s',

    '&::placeholder': {
        color: '$textSecondary',
    },

    '&:focus': {
        borderColor: 'rgba(255, 255, 255, .50)',
    },

    '&:invalid': {
        borderColor: 'red',
    },
});
