import { styled } from 'src/styles/stitches';

export const Container = styled('footer', {
    backgroundColor: '$bgSPrimary',
    color: '$textPrimary',
    marginTop: 'auto',
    py: '5rem',
    px: 16,
    textAlign: 'center',
});

export const FooterImage = styled('img', {
    width: '90%',
    maxWidth: 240,
    marginTop: 24,
});
