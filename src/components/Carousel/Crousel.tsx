import { useEffect, useRef } from 'react';
import {
    CarouselItem,
    CarouselItemTitle,
    CarouselRoot,
    ControlWrapper,
} from './Carousel.styled';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Movie } from 'src/@types/movie';
import { config } from 'src/services/apiService';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    contentList: Movie[];
}

export const Carousel: React.FC<Props> = ({ contentList }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const timerRef = useRef<NodeJS.Timer | null>(null);

    function stepToRight() {
        const carrouselElement = carouselRef.current;
        if (carrouselElement) {
            carrouselElement.scrollTo({
                left:
                    carrouselElement.scrollLeft + carrouselElement.clientWidth,
                behavior: 'smooth',
            });
        }
    }

    function stepToLeft() {
        const carrouselElement = carouselRef.current;
        if (carrouselElement) {
            carrouselElement.scrollTo({
                left:
                    carrouselElement.scrollLeft - carrouselElement.clientWidth,
                behavior: 'smooth',
            });
        }
    }

    function createInterval() {
        timerRef.current = setInterval(stepToRight, 5000);
    }

    function removeInterval() {
        if (timerRef.current) clearInterval(timerRef.current);
    }

    useEffect(() => {
        createInterval();

        return removeInterval;
    }, []);

    return (
        <CarouselRoot
            ref={carouselRef}
            onMouseEnter={removeInterval}
            onMouseLeave={createInterval}
            onTouchStart={removeInterval}
            onTouchEnd={createInterval}
        >
            <ControlWrapper position={'left'} onClick={stepToLeft}>
                <BsChevronLeft />
            </ControlWrapper>
            <ControlWrapper position={'right'} onClick={stepToRight}>
                <BsChevronRight />
            </ControlWrapper>

            {contentList.map(movie => (
                <CarouselItem key={movie.id}>
                    <CarouselItemTitle>{movie.title}</CarouselItemTitle>
                    <Link href={`/movie/${movie.id}`}>
                        <a>
                            <Image
                                src={
                                    config.base_url +
                                    config.backdrop_sizes.original +
                                    movie.backdrop_path
                                }
                                objectFit="cover"
                                layout="fill"
                                alt={movie.title}
                            />
                        </a>
                    </Link>
                </CarouselItem>
            ))}
        </CarouselRoot>
    );
};
