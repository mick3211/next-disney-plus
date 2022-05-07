import {
    StyledAvatar,
    StyledAvatarFallback,
    StyledAvatarImage,
    StyledContent,
    StyledItem,
    StyledTrigger,
} from './AvatarDropdown.styled';
import { Root as DropdownRoot } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

const menuLinks = [
    {
        name: 'Editar perfis',
        href: '',
    },
    {
        name: 'Configurações do aplicativo',
        href: '',
    },
    {
        name: 'Conta',
        href: '',
    },
    {
        name: 'Ajuda',
        href: '',
    },
    {
        name: 'Sair',
        href: '',
    },
];

export const AvatarDropdown: React.FC = () => {
    return (
        <DropdownRoot modal={false}>
            <StyledTrigger>
                <span className="username">Agente P</span>
                <StyledAvatar>
                    <StyledAvatarImage src="https://i.pinimg.com/550x/cf/1c/73/cf1c73e42a48cc8b9ad7c606745ff265.jpg" />
                    <StyledAvatarFallback>MF</StyledAvatarFallback>
                </StyledAvatar>
            </StyledTrigger>

            <StyledContent sideOffset={16} align="end">
                {menuLinks.map(item => (
                    <StyledItem key={item.name}>{item.name}</StyledItem>
                ))}
            </StyledContent>
        </DropdownRoot>
    );
};
