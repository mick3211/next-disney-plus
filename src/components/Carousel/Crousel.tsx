import { useEffect, useRef, useState } from 'react';
import { CarouselItem, CarouselRoot, ControlWrapper } from './Carousel.styled';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const Carousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [step, setStep] = useState(1);
    let interval: NodeJS.Timer;

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
        interval = setInterval(stepToRight, 5000);
    }

    function removeInterval() {
        clearInterval(interval);
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
        >
            <ControlWrapper position={'left'} onClick={stepToLeft}>
                <BsChevronLeft />
            </ControlWrapper>
            <ControlWrapper position={'right'} onClick={stepToRight}>
                <BsChevronRight />
            </ControlWrapper>
            <CarouselItem>
                <img
                    src="https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-453%20Doctor%20Strange%20_large_all.jpg?itok=4C_7h-VG"
                    alt=""
                    style={{ width: '100%' }}
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    src="https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-453%20Doctor%20Strange%20_large_all.jpg?itok=4C_7h-VG"
                    alt=""
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    src="https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-453%20Doctor%20Strange%20_large_all.jpg?itok=4C_7h-VG"
                    alt=""
                    style={{ width: '100%' }}
                />
            </CarouselItem>
        </CarouselRoot>
    );
};
