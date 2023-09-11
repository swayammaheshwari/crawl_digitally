import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min';

import './SliderComponent.css';

const SliderComponent: React.FC = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 4,
            centeredSlides: true,
            autoplay: {
                enabled: true,
                delay: 5000,
            },
        });

        const mouseCursor = document.querySelector('.cursor-img') as HTMLBodyElement;


        const cursor = (e: MouseEvent) => {

            mouseCursor!.style.top = e.pageY + 'px';
            mouseCursor!.style.left = e.pageX + 'px';

        };



        window.addEventListener('mousemove', cursor);


        return () => {
            swiper.destroy(); // Clean up when the component unmounts
            window.removeEventListener('mousemove', cursor);

        };
    }, []);

    return (
        <div className="myswiper zindex">
            <div className="swiper">
                <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="card">
                                <div className="card__image">
                                    <img
                                        src={`https://picsum.photos/800/600?random=${index}`}
                                        alt=""
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cursor">
                <img className="cursor-img" src="icon.png" alt="" />
            </div>
        </div>
    );
};

export default SliderComponent;
