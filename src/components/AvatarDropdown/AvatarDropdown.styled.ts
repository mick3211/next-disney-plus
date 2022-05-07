import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { styled } from 'src/styles/stitches';

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
    padding: 8,
    border: '1px solid #222',
    fontSize: '$sm',
});

export const StyledItem = styled(DropdownMenu.Item, {
    width: '100%',
    color: '$textSecondary',
    py: 8,
    cursor: 'pointer',

    '&:hover': {
        color: '$textPrimary',
        outline: 'none',
    },
});
