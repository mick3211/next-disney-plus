import { ControlWrapper } from '@components/Carousel/Carousel.styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Movie } from 'src/@types/movie';
import { config } from 'src/services/apiService';
import { RowItem, RowRoot, RowTitle } from './Row.styled';

interface Props {
    contentList: Movie[];
    title?: string;
}

export const Row: React.FC<Props> = ({ contentList, title }) => {
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    function stepToRight() {
        const carrouselElement = rowRef.current;
        if (carrouselElement) {
            carrouselElement.scrollTo({
                left:
                    carrouselElement.scrollLeft + carrouselElement.clientWidth,
                behavior: 'smooth',
            });
            setIsScrolled(true);
        }
    }

    function stepToLeft() {
        const carrouselElement = rowRef.current;
        if (carrouselElement) {
            carrouselElement.scrollTo({
                left:
                    carrouselElement.scrollLeft - carrouselElement.clientWidth,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div>
            <RowTitle>{title}</RowTitle>
            <RowRoot ref={rowRef}>
                <ControlWrapper
                    position={'left'}
                    onClick={stepToLeft}
                    hidden={!isScrolled}
                >
                    <BsChevronLeft />
                </ControlWrapper>
                <ControlWrapper position={'right'} onClick={stepToRight}>
                    <BsChevronRight />
                </ControlWrapper>

                {contentList.map(movie => (
                    <RowItem key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <a>
                                <Image
                                    src={
                                        config.base_url +
                                            config.backdrop_sizes[780] +
                                            movie.backdrop_path ||
                                        movie.poster_path
                                    }
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </a>
                        </Link>
                    </RowItem>
                ))}
            </RowRoot>
        </div>
    );
};
