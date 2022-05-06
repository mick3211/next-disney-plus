import { HeaderStyled, NavItemStyled, NavListStyled } from './Header.styled';
import { AiFillHome, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
                                    {item.name.toUpperCase()}
                                </a>
                            </Link>
                        </NavItemStyled>
                    ))}
                </NavListStyled>
            </nav>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger>Abrir drodpw</DropdownMenu.Trigger>

                <DropdownMenu.Content>
                    <DropdownMenu.Item>asdsad</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </HeaderStyled>
    );
};
