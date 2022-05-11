import { Button } from '@components/Inputs/Button/Button.styled';
import { TextInput } from '@components/Inputs/TextInput/TextInput.styled';
import { Spinner } from '@components/Spinner/Spinner.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
    Container,
    FormContainer,
    Heading,
    LoginWrapper,
    Span,
    SignUpLink,
    ErrorMessage,
} from 'src/styles/pages/login.styled';

interface Inputs {
    email: string;
    password: string;
}

const LoginPage: NextPage = () => {
    const router = useRouter();
    const [loginError, setLoginError] = useState<any>(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        setIsAuthenticating(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                setLoginError(null);
                router.push('/');
            })
            .catch(error => setLoginError(error.message))
            .finally(() => setIsAuthenticating(false));
    };

    return (
        <>
            <Head>
                <title>Login | Disney+</title>
            </Head>
            <Container>
                <LoginWrapper>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20220128173228%21Disney%2B_logo.svg"
                        alt="Disney+"
                        width={160}
                    />
                    <FormContainer onSubmit={handleSubmit(onSubmit)}>
                        <Heading>Use o seu e-mail para entrar</Heading>
                        <TextInput
                            type="email"
                            placeholder="E-mail"
                            {...register('email', { required: true })}
                            autoFocus
                        />
                        <TextInput
                            type="password"
                            placeholder="Senha"
                            {...register('password', { required: true })}
                        />
                        {loginError && (
                            <ErrorMessage>{loginError}</ErrorMessage>
                        )}
                        <Button type="submit" disabled={isAuthenticating}>
                            {isAuthenticating ? (
                                <Spinner size="sm" />
                            ) : (
                                'ENTRAR'
                            )}
                        </Button>
                    </FormContainer>
                    <Span>
                        Não tem Disney+?{' '}
                        <Link href="/sign-up">
                            <SignUpLink>Cadastre-se</SignUpLink>
                        </Link>
                    </Span>
                </LoginWrapper>
            </Container>
        </>
    );
};

export default LoginPage;
