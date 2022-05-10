import {
    Separator,
    StyledAvatar,
    StyledAvatarFallback,
    StyledAvatarImage,
    StyledContent,
    StyledItem,
    StyledTrigger,
} from './AvatarDropdown.styled';
import { Root as DropdownRoot } from '@radix-ui/react-dropdown-menu';
import { AiOutlinePlus } from 'react-icons/ai';
import { User } from 'firebase/auth';
import Link from 'next/link';

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
        href: '/signOut',
    },
];

interface Props {
    user: User | null;
}

export const AvatarDropdown: React.FC<Props> = ({ user }) => {
    return (
        <DropdownRoot modal={false}>
            <StyledTrigger>
                <span className="username">
                    {user?.displayName || user?.email}
                </span>
                <StyledAvatar>
                    <StyledAvatarImage src="https://i.pinimg.com/550x/cf/1c/73/cf1c73e42a48cc8b9ad7c606745ff265.jpg" />
                    <StyledAvatarFallback>MF</StyledAvatarFallback>
                </StyledAvatar>
            </StyledTrigger>

            <StyledContent sideOffset={16} align="end">
                <StyledItem>
                    <AiOutlinePlus size={'1.5rem'} />
                    Adicionar perfil
                </StyledItem>

                <Separator />

                {menuLinks.map(item => (
                    <StyledItem key={item.name}>
                        <Link href={item.href}>
                            <a>{item.name}</a>
                        </Link>
                    </StyledItem>
                ))}
            </StyledContent>
        </DropdownRoot>
    );
};
