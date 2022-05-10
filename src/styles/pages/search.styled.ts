import { styled } from 'src/styles/stitches';
import { RiCloseFill } from 'react-icons/ri';

export const SearchInput = styled('input', {
    width: '100%',
    py: 16,
    paddingLeft: 32,
    paddingRight: 64,
    fontSize: '2.5rem',
    color: '$textPrimary',
    backgroundColor: '$input',
    border: 'none',
    outline: 'none',
    opacity: 0.6,
    transition: 'opacity .3s',

    '&:focus': {
        opacity: 1,
    },

    '&::placeholder': {
        fontWeight: 'bold',
    },
});

export const SearchInputWrapper = styled('div', {
    position: 'relative',
    color: '$textPrimary',
});

export const ClearTextButton = styled(RiCloseFill, {
    position: 'absolute',
    top: '50%',
    fontSize: '2rem',
    transform: 'translateY(-50%)',
    right: 32,
    cursor: 'pointer',
});

export const MovieGrid = styled('div', {
    display: 'grid',
    px: 32,
    py: 64,
    gridTemplateColumns: 'repeat(auto-fill, 320px)',
    gridTemplateRows: 180,
    gap: 16,
    justifyContent: 'center',
});
