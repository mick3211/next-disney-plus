import { getAuth, signOut } from 'firebase/auth';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { styled } from 'src/styles/stitches';

const SignOutPage: NextPage = () => {
    const router = useRouter();

    const auth = getAuth();
    signOut(auth)
        .then(() => {
            router.push('/login');
        })
        .catch(error => {
            // An error happened.
        });

    return (
        <Container>
            <h2>Saindo...</h2>
        </Container>
    );
};

export default SignOutPage;

const Container = styled('div', {
    display: 'grid',
    placeItems: 'center',
    fontSize: '$md',
    color: '$textPrimary',
});
