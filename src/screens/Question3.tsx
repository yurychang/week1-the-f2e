import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import QuestionCard from 'components/QuestionCard'
import { ReactComponent as DizzyEmoji } from 'assets/dizzy-emoji.svg'
import { ReactComponent as Star } from 'assets/star.svg'
import useStore from 'store'
import Challenge from './Challenge'

const Question3 = () => {
    const containerRef = useRef(null)

    const setBgColor = useStore((s) => s.setBgColor)

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (containerRef.current) {
                // in
                gsap.timeline({
                    scrollTrigger: {
                        trigger: '[data-anim="question-content"]',
                        start: 'top+=300 bottom',
                        end: 'bottom bottom',
                        scrub: true,
                    },
                })
                    .to('[data-anim="card"]', {
                        transform: '',
                    })
                    .to(
                        '[data-anim="emoji1"]',
                        {
                            translateY: -240,
                            opacity: 1,
                        },
                        '<'
                    )
                    .to(
                        '[data-anim="emoji2"]',
                        {
                            translateY: -600,
                            opacity: 1,
                        },
                        '<'
                    )
                    .to(
                        '[data-anim="emoji3"]',
                        {
                            translateY: -700,
                            translateX: '-=100',
                            opacity: 1,
                        },
                        '<'
                    )
                // out
                gsap.timeline({
                    scrollTrigger: {
                        trigger: '[data-anim="pin-container"]',
                        toggleActions: 'play none reverse none',
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        onEnter: () => setBgColor('dark'),
                        onLeaveBack: () => setBgColor('light'),
                        // end: 'bottom bottom',
                        // snap: {
                        //     snapTo: 'labels',
                        //     duration: 0.4,
                        //     delay: 0.2,
                        //     ease: 'power1.inOut',
                        // },
                    },
                })
                    .to('[data-anim="card"]', {
                        translateY: '-100vh',
                        opacity: 0,
                    })
                    .fromTo(
                        '[data-anim="emoji1"]',
                        { opacity: 1 },
                        {
                            translateY: '-100vh',
                            opacity: 0,
                        },
                        '<'
                    )
                    .fromTo(
                        '[data-anim="emoji2"]',
                        { opacity: 1 },
                        {
                            translateX: '-=600',
                            opacity: 0,
                        },
                        '<'
                    )
                    .fromTo(
                        '[data-anim="emoji3"]',
                        { opacity: 1 },
                        {
                            translateX: '+=600',
                            opacity: 0,
                        },
                        '<'
                    )
                    .to(
                        '[data-anim="question3-bg"]',
                        { backgroundColor: 'transparent' },
                        '<'
                    )
                    .to('[data-anim="ui-designer"]', {
                        translateX: 0,
                        opacity: 1,
                    })
                    .to(
                        '[data-anim="f2e"]',
                        {
                            translateX: 0,
                            opacity: 1,
                        },
                        '<'
                    )
                    .to(
                        '[data-anim="hooray"]',
                        {
                            translateY: 0,
                            opacity: 1,
                        },
                        '<'
                    )
                    .to('[data-anim="challenge-bg"]', {
                        opacity: 1,
                    })
                    .to(
                        '[data-anim="challenge-content"]',
                        {
                            translateY: '-100%',
                            opacity: 1,
                        },
                        '<'
                    )
            }
        }, containerRef.current as any)

        return () => ctx.revert()
    }, [setBgColor])

    return (
        <div ref={containerRef} className="relative">
            <div
                data-anim="question3-bg"
                className="absolute inset-0 z-10 bg-secondary"
            ></div>
            <section
                data-anim="question-content"
                className="relative z-20 min-h-screen pt-[300px] pb-[100px] overflow-hidden"
            >
                <DizzyEmoji
                    data-anim="emoji1"
                    width="220px"
                    className="absolute-x-center top-[1050px] z-10 drop-shadow-xl opacity-0"
                />
                <Star
                    data-anim="emoji2"
                    width="240px"
                    className="absolute left-[calc(50%-625px)] top-[1050px] z-10 drop-shadow-xl opacity-0"
                />
                <DizzyEmoji
                    data-anim="emoji3"
                    width="200px"
                    className="absolute left-[calc(50%+505px)] top-[1050px] z-10 rotate-[20deg] drop-shadow-xl opacity-0"
                />
                <div
                    data-anim="card"
                    style={{
                        transform:
                            'translate(200px, 0) matrix(1, -0.2, 0, 1, 0, 0)',
                    }}
                >
                    <QuestionCard
                        question="動畫技能樹太雜無從下手？"
                        bgText={<>怎麼開始暈暈暈暈暈暈暈暈</>}
                        className="mx-auto"
                    />
                </div>
            </section>
            <div className="-mt-[100vh]">
                <Challenge></Challenge>
                <div className="h-screen"></div>
            </div>
        </div>
    )
}

export default Question3
