import { keyframes, styled } from '../stitches';

const FadeInUp = keyframes({
    from: {
        transform: 'translateY(20px)',
        opacity: 0,
    },
    to: {
        transform: 'translateY(0)',
        opacity: 1,
    },
});

export const Container = styled('div', {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '$bgSecondary',
});

export const LoginWrapper = styled('div', {
    width: '100%',
    px: 16,
    py: 42,
    maxWidth: 420,
    mx: 'auto',
    textAlign: 'center',
    color: '$textPrimary',

    '@media (prefers-reduced-motion: no-preference)': {
        animationName: FadeInUp,
        animationDuration: '.5s',
    },
});

export const Heading = styled('h4', {
    fontSize: '$md',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
});

export const FormContainer = styled('form', {
    textAlign: 'start',
    py: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
});

export const Span = styled('span', {
    fontSize: '$sm',
    color: '$textSecondary',
    display: 'block',
    textAlign: 'left',
});

export const SignUpLink = styled('a', {
    color: '$textPrimary',
    cursor: 'pointer',

    '&:hover': {
        textDecoration: 'underline',
        color: 'lightblue',
    },
});

export const ErrorMessage = styled('span', {
    fontSize: '$sm',
    color: 'red',
});
