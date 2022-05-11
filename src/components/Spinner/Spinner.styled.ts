import { BiLoaderAlt } from 'react-icons/bi';
import { keyframes, styled } from 'src/styles/stitches';

const spinAnimation = keyframes({
    from: {
        transform: 'translate(-50%, -50%) rotate(0)',
    },
    to: {
        transform: 'translate(-50%, -50%) rotate(360deg)',
    },
});

export const Spinner = styled(BiLoaderAlt, {
    color: '$textPrimary',
    animationName: spinAnimation.name,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 50,

    variants: {
        size: {
            sm: {
                fontSize: 32,
            },
            xl: {
                fontSize: '500%',
            },
        },
    },
});
