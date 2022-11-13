import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import OutlineText from '../components/OutlineText'
import el from '@master/style-element.react'
import IntroStep from 'components/IntroStep'

const TrackLine = el.div`absolute left-0 right-0 h-[2px] bg-light`

const Introduction = () => {
    return (
        <div className="relative min-h-screen pt-[90px] px-[80px] bg-dark">
            <OutlineText
                strokeColor="hsl(var(--p))"
                className="mb-[100px] text-[122px] font-bold"
            >
                活動說明
            </OutlineText>
            <TrackLine className="top-[706px]" />
            <Swiper spaceBetween={0} slidesPerView={'auto'}>
                <SwiperSlide className="!w-[629px] !h-auto">
                    <IntroStep title="Sign up" className="h-full">
                        開放報名：10/13~10/30
                        <br />
                        截止前可修改報名組別
                    </IntroStep>
                </SwiperSlide>
                <SwiperSlide className="!w-[629px] !h-auto">
                    <IntroStep title="Start" className="h-full">
                        登錄作品：10/31~11/28
                        <br />
                        UI組、團體組開賽 10/31
                        <br />
                        前端組開賽 11/7
                    </IntroStep>
                </SwiperSlide>
                <SwiperSlide className="!w-[629px] !h-auto">
                    <IntroStep title="Bonus" className="h-full">
                        主題豐厚獎金等著你
                    </IntroStep>
                </SwiperSlide>
                <SwiperSlide className="!w-[629px] !h-auto">
                    <IntroStep title="Instruction" className="h-full">
                        活動採用 UI、前端接力合作形式，前端工程師可採用 UI
                        設計師的設計稿，一同產出完整作品。
                    </IntroStep>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Introduction
