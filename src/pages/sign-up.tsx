import { Button } from '@components/Inputs/Button/Button.styled';
import { TextInput } from '@components/Inputs/TextInput/TextInput.styled';
import { Spinner } from '@components/Spinner/Spinner.styled';
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
} from 'firebase/auth';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
    Container,
    ErrorMessage,
    FormContainer,
    Heading,
    LoginWrapper,
    SignUpLink,
    Span,
} from 'src/styles/pages/login.styled';

interface Inputs {
    email: string;
    password: string;
    passwordConfirmation: string;
    name: string;
}

const SignUpPage: NextPage = () => {
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const createUser: SubmitHandler<Inputs> = data => {
        setIsCreatingUser(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() =>
                updateProfile(auth.currentUser!, { displayName: data.name })
            )
            .then(() => router.push('/'))
            .catch(e => console.log(e))
            .finally(() => setIsCreatingUser(false));
    };

    return (
        <>
            <Head>
                <title>Nova conta | Disney+</title>
            </Head>

            <Container>
                <LoginWrapper>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20220128173228%21Disney%2B_logo.svg"
                        alt="Disney+"
                        width={160}
                    />
                    <FormContainer onSubmit={handleSubmit(createUser)}>
                        <Heading>Primeiro, informe seu e-mail</Heading>
                        <TextInput
                            type="email"
                            placeholder="E-mail"
                            autoCorrect="false"
                            autoFocus
                            {...register('email', {
                                required: true,
                                pattern: /(w+@w+)/,
                            })}
                        />
                        {errors.email && (
                            <ErrorMessage>Insira um e-mail</ErrorMessage>
                        )}
                        {errors.email && (
                            <ErrorMessage>E-mail inválido</ErrorMessage>
                        )}

                        <Heading>Crie uma senha</Heading>
                        <TextInput
                            type="password"
                            placeholder="Senha"
                            autoCorrect="false"
                            autoComplete="false"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                validate: password =>
                                    password === watch('passwordConfirmation'),
                            })}
                        />
                        {errors.password?.type === 'required' && (
                            <ErrorMessage>Insira uma senha</ErrorMessage>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <ErrorMessage>
                                A senha deve ter pelo menos 6 caracteres
                            </ErrorMessage>
                        )}
                        {errors.password?.type === 'validate' && (
                            <ErrorMessage>
                                As senhas devem ser iguais
                            </ErrorMessage>
                        )}

                        <TextInput
                            type="password"
                            placeholder="Confirmar senha"
                            autoCorrect="false"
                            autoComplete="false"
                            defaultValue={watch('passwordConfirmation')}
                            {...register('passwordConfirmation', {
                                required: true,
                            })}
                        />
                        <Heading>Qual o seu nome?</Heading>
                        <TextInput
                            type="text"
                            placeholder="Nome"
                            autoCorrect="false"
                            defaultValue={watch('name')}
                            {...register('name', {
                                required: true,
                            })}
                        />
                        {errors.name?.type === 'required' && (
                            <ErrorMessage>Insira o seu nome</ErrorMessage>
                        )}

                        <Button type="submit" disabled={isCreatingUser}>
                            {isCreatingUser ? (
                                <Spinner size="sm" />
                            ) : (
                                'CRIAR CONTA'
                            )}
                        </Button>
                    </FormContainer>

                    <Span>
                        Já possui Disney+?{' '}
                        <Link href="/login">
                            <SignUpLink>Entre com sua conta</SignUpLink>
                        </Link>
                    </Span>
                </LoginWrapper>
            </Container>
        </>
    );
};

export default SignUpPage;
