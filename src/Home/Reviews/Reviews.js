import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { BiCommentDetail } from 'react-icons/bi';
import './Reviews.css'

const Reviews = () => {
    const reviews = [
        {
            reviewer: 'Jason R',
            details: "I come to TechSync+ for the curation and class quality. That's really worth the cost of membership to me."
        },
        {
            reviewer: 'DeVeor R',
            details: "I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on TechSync+ is to develop a skill. I feel that it's a safe space."
        },
        {
            reviewer: 'Phillip W',
            details: "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager."
        },
        {
            reviewer: 'Phillip W',
            details: "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager."
        },
        {
            reviewer: 'Phillip W',
            details: "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager."
        },

    ]
    return (
        <div data-aos="zoom-in" className='mt-10 lg:mt-20 mb-10'>
            <div className='lg:flex items-center gap-5  bg-secondary-reverse px-10 py-10 lg:py-20 rounded-lg'>
                <div data-aos="fade-right" className='lg:w-2/5 rounded-lg mb-5 lg:mb-0'>
                    <h3 className='text-2xl text-white text-center tracking-wide leading-relaxed'>Over <span className='font-semibold'>25 million learners</span> have used TechSync+ to empower themselves through education</h3>
                </div>
                <div data-aos="fade-left" className='lg:w-3/5'>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        speed={800}
                        effect='cards'
                        loop
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                              width: 640,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            },
                          }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {
                            reviews.map((review, i) =>
                                <SwiperSlide>
                                    <div key={i} className="flex flex-col justify-between p-5 rounded shadow-lg h-56 bg-card">
                                        <div className='text-white'>
                                            <div className='flex justify-between mb-2 items-center'>
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50">
                                                    <BiCommentDetail className='w-6 h-6 text-gray-900' />
                                                </div>
                                                <h6 className="font-semibold">{review.reviewer}</h6>
                                            </div>
                                            <p className="mb-3 text-sm">
                                                {review.details}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    </div>
                    
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;