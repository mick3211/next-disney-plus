import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { styled, keyframes } from 'src/styles/stitches';

const fadeInDown = keyframes({
    from: {
        transform: 'translateY(-16px)',
        opacity: 0,
    },
    to: {
        transform: 'none',
        opacity: 1,
    },
});

export const StyledAvatar = styled(Avatar.Root, {
    width: 45,
    height: 45,
    borderRadius: '100%',
    backgroundColor: '$bgSecondary',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    userSelect: 'none',
});

export const StyledAvatarImage = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const StyledAvatarFallback = styled(Avatar.Fallback, {
    color: '$textPrimary',
});

// Dropdown

export const StyledTrigger = styled(DropdownMenu.Trigger, {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '$textPrimary',

    '& .username': {
        display: 'none',
    },

    '@sm': {
        '& .username': {
            display: 'block',
        },
    },
});

export const StyledContent = styled(DropdownMenu.Content, {
    backgroundColor: '$surface',
    py: 8,
    px: 16,
    border: '1px solid #222',
    fontSize: '$sm',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',

    '@media (prefers-reduced-motion: no-preference)': {
        '&[data-state="open"]': {
            animationName: fadeInDown,
        },
    },
});

export const StyledItem = styled(DropdownMenu.Item, {
    width: '100%',
    color: '$textSecondary',
    py: 8,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '&:hover': {
        color: '$textPrimary',
        outline: 'none',
    },
});

export const Separator = styled(DropdownMenu.Separator, {
    py: 4,
});
