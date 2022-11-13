import IntroCard from 'components/IntroCard'

import { ReactComponent as ArrowDown } from 'assets/week1-arrow-down.svg'
import { ReactComponent as ArrowUp } from 'assets/week1-arrow-up.svg'
import { ReactComponent as Week1Left } from 'assets/week1-left.svg'
import { ReactComponent as Week1Right } from 'assets/week1-right.svg'

import { ReactComponent as TheF2e } from 'assets/the-f2e.svg'
import { ReactComponent as WellDone } from 'assets/well-done.svg'
import { ReactComponent as Week2Pen } from 'assets/week2-pen.svg'
import { ReactComponent as Week2Card } from 'assets/week2-card.svg'
import { ReactComponent as Week2CardCenter } from 'assets/week2-card-center.svg'
import { ReactComponent as Week3Cycle } from 'assets/week3-cycle.svg'
import { ReactComponent as Week3Left } from 'assets/week3-left.svg'
import { ReactComponent as Week3Right } from 'assets/week3-right.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Weeks = () => {
    return (
        <div className="relative z-10 h-screen pt-[90px] px-12 bg-dark">
            <Swiper spaceBetween={24} slidesPerView={'auto'}>
                <SwiperSlide className="!w-[560px]">
                    <IntroCard
                        title="Week 1"
                        desc="The F2E 活動網站設計"
                        labels={['視差滾動', '版塊設計']}
                        image={
                            <div className="relative w-[420px] h-[181px]">
                                <Week1Right className="absolute right-0 top-0" />
                                <Week1Left className="absolute left-0 bottom-0" />
                                <ArrowDown className="absolute left-[40px] bottom-[25px]" />
                                <ArrowUp className="absolute right-[40px] top-[25px]" />
                            </div>
                        }
                    ></IntroCard>
                </SwiperSlide>
                <SwiperSlide className="!w-[560px]">
                    <IntroCard
                        title="Week 2"
                        desc="今晚，我想來點點簽"
                        labels={['Canvas', '凱鈿行動科技']}
                        image={
                            <div className="relative w-[420px] h-[181px]">
                                <Week2Card className="absolute right-[40px] top-[25px]" />
                                <Week2CardCenter className="absolute right-[75px] top-[45px]" />
                                <TheF2e className="absolute left-[100px] top-[45px]" />
                                <WellDone className="absolute left-[200px] top-[115px]" />
                                <Week2Pen className="absolute left-[260px] top-[-15px]" />
                            </div>
                        }
                    ></IntroCard>
                </SwiperSlide>
                <SwiperSlide className="!w-[560px]">
                    <IntroCard
                        title="Week 3"
                        desc="Scrum 新手村"
                        labels={['JS draggable', '鈦坦科技']}
                        image={
                            <div className="relative w-[420px] h-[181px]">
                                <Week3Cycle className="absolute bottom-0 left-[150px]" />
                                <Week3Left className="absolute bottom-0 left-[60px]" />
                                <Week3Right className="absolute bottom-[-20px] lef-[305px]" />
                            </div>
                        }
                    ></IntroCard>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Weeks
