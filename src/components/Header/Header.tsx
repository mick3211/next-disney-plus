import {
    Container,
    HeaderStyled,
    NavItemStyled,
    NavListStyled,
} from './Header.styled';
import { AiFillHome, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { AvatarDropdown } from '@components/AvatarDropdown/AvatarDropdown';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';

const navItems = [
    {
        name: 'Início',
        icon: <AiFillHome />,
        href: '/',
    },
    {
        name: 'Pesquisa',
        icon: <AiOutlineSearch />,
        href: '/search',
    },
    {
        name: 'Minha lista',
        icon: <AiOutlinePlus />,
        href: '/mylist',
    },
];

export const Header: React.FC = () => {
    const user = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function toogleIsScrolled() {
            if (window.scrollY > 0) setIsScrolled(true);
            else setIsScrolled(false);
        }

        window.addEventListener('scroll', toogleIsScrolled);

        return () => window.removeEventListener('scroll', toogleIsScrolled);
    }, []);

    return (
        <HeaderStyled opaque={isScrolled}>
            <Container>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20220128173228%21Disney%2B_logo.svg"
                    alt="Disney+"
                    width={79}
                />
                <nav>
                    <NavListStyled>
                        {navItems.map(item => (
                            <NavItemStyled key={item.name}>
                                <Link href={item.href}>
                                    <a>
                                        {item.icon}
                                        <span>{item.name.toUpperCase()}</span>
                                    </a>
                                </Link>
                            </NavItemStyled>
                        ))}
                    </NavListStyled>
                </nav>
                <AvatarDropdown user={user} />
            </Container>
        </HeaderStyled>
    );
};
