import IntroCard from 'components/IntroCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Weeks = () => {
    return (
        <div className="relative z-10 h-screen pt-[90px] px-12 bg-dark">
            <Swiper
                spaceBetween={24}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="!w-[560px]">
                    <IntroCard
                        title="Week 1"
                        desc="The F2E 活動網站設計"
                        labels={['視差滾動', '版塊設計']}
                        image={<></>}
                    ></IntroCard>
                </SwiperSlide>
                <SwiperSlide className="!w-[560px]">
                    <IntroCard
                        title="Week 2"
                        desc="今晚，我想來點點簽"
                        labels={['Canvas', '凱鈿行動科技']}
                        image={<></>}
                    ></IntroCard>
                </SwiperSlide>
                <SwiperSlide className="!w-[560px]">
                    <IntroCard
                        title="Week 3"
                        desc="Scrum 新手村"
                        labels={['JS draggable', '鈦坦科技']}
                        image={<></>}
                    ></IntroCard>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Weeks
