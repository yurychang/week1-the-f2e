import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import QuestionCard from 'components/QuestionCard'
import { ReactComponent as DizzyEmoji } from 'assets/dizzy-emoji.svg'
import { ReactComponent as Star } from 'assets/star.svg'
import Challenge from './Challenge'

const Question3 = () => {
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const emoji1Ref = useRef(null)
    const emoji2Ref = useRef(null)
    const emoji3Ref = useRef(null)

    const [tl, setTl] = useState<gsap.core.Timeline>()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=300 bottom',
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
                // in
                .to(cardRef.current, {
                    transform: '',
                })
                .to(
                    emoji1Ref.current,
                    {
                        translateY: -240,
                        opacity: 1,
                    },
                    '<'
                )
                .to(
                    emoji2Ref.current,
                    {
                        translateY: -600,
                        opacity: 1,
                    },
                    '<'
                )
                .to(
                    emoji3Ref.current,
                    {
                        translateY: -700,
                        translateX: '-=100',
                        opacity: 1,
                    },
                    '<'
                )

            // out
            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top+=1137 bottom',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                        scrub: true,
                        pin: true,
                        // pinSpacing: false,
                        snap: {
                            snapTo: 'labels',
                            duration: 0.4,
                            delay: 0.2,
                            ease: 'power1.inOut',
                        },
                    },
                })
                .addLabel('start')
                .to(cardRef.current, {
                    translateY: '-100vh',
                    opacity: 0,
                })
                .fromTo(
                    emoji1Ref.current,
                    { opacity: 1 },
                    {
                        translateY: '-100vh',
                        opacity: 0,
                    },
                    '<'
                )
                .fromTo(
                    emoji2Ref.current,
                    { opacity: 1 },
                    {
                        translateX: '-=600',
                        opacity: 0,
                    },
                    '<'
                )
                .fromTo(
                    emoji3Ref.current,
                    { opacity: 1 },
                    {
                        translateX: '+=600',
                        opacity: 0,
                    },
                    '<'
                )
                .to(
                    containerRef.current,
                    { backgroundColor: 'transparent' },
                    '<'
                )
                .addLabel('end')
            setTl(tl)
        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            <section
                ref={containerRef}
                className="relative z-10 min-h-screen pt-[300px] pb-[100px] overflow-hidden bg-secondary"
            >
                <DizzyEmoji
                    ref={emoji1Ref}
                    width="220px"
                    className="absolute-x-center top-[1050px] z-10 drop-shadow-xl opacity-0"
                />
                <Star
                    ref={emoji2Ref}
                    width="240px"
                    className="absolute left-[calc(50%-625px)] top-[1050px] z-10 drop-shadow-xl opacity-0"
                />
                <DizzyEmoji
                    ref={emoji3Ref}
                    width="200px"
                    className="absolute left-[calc(50%+505px)] top-[1050px] z-10 rotate-[20deg] drop-shadow-xl opacity-0"
                />
                <div
                    ref={cardRef}
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
            <Challenge tl={tl}></Challenge>
        </>
    )
}

export default Question3
