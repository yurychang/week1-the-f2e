import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ReactComponent as DizzyEmoji } from 'images/dizzy-emoji.svg'
import { ReactComponent as Star } from 'images/star.svg'
import QuestionCard from 'components/QuestionCard'

const Screen4 = () => {
    const tl = useRef<gsap.core.Timeline | null>(null)
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const emoji1Ref = useRef(null)
    const emoji2Ref = useRef(null)
    const emoji3Ref = useRef(null)

    useEffect(() => {
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: '+=400',
            pin: true,
            pinSpacing: false,
        })

        tl.current = gsap
            .timeline()
            // in
            .to(cardRef.current, {
                transform: '',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=200 bottom',
                    end: '+=700',
                    scrub: true,
                },
            })
            .to(emoji1Ref.current, {
                translateY: -220,
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=500 bottom',
                    end: '+=400',
                    scrub: true,
                },
            })
            .to(emoji2Ref.current, {
                translateY: -600,
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=500 bottom',
                    end: '+=400',
                    scrub: true,
                },
            })
            .to(emoji3Ref.current, {
                translateY: -700,
                translateX: '-=100',
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=500 bottom',
                    end: '+=400',
                    scrub: true,
                },
            })
            // out
            .fromTo(
                emoji2Ref.current,
                { opacity: 1 },
                {
                    translateX: '-=600',
                    opacity: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=400',
                        scrub: true,
                    },
                }
            )
            .fromTo(
                emoji3Ref.current,
                { opacity: 1 },
                {
                    translateX: '+=600',
                    opacity: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=400',
                        scrub: true,
                    },
                }
            )
            .fromTo(
                emoji1Ref.current,
                { opacity: 1 },
                {
                    translateY: '-100vh',
                    opacity: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=400',
                        scrub: true,
                    },
                }
            )
            .to(cardRef.current, {
                translateY: '-100vh',
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=400',
                    scrub: true,
                },
            })
            .to(containerRef.current, {
                backgroundColor: 'transparent',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=400',
                    scrub: true,
                },
            })
        return () => {
            tl.current?.progress(0).kill()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden bg-primary-light"
        >
            <DizzyEmoji
                ref={emoji1Ref}
                width="220px"
                className="absolute-x-center top-full z-10 drop-shadow-xl opacity-0"
            />
            <Star
                ref={emoji2Ref}
                width="240px"
                className="absolute-x-center !left-[calc(50%-505px)] top-full z-10 drop-shadow-xl opacity-0"
            />
            <DizzyEmoji
                ref={emoji3Ref}
                width="200px"
                className="absolute-x-center !left-[calc(50%+605px)] top-full z-10 rotate-[20deg] drop-shadow-xl opacity-0"
            />
            <div
                ref={cardRef}
                className="mt-[300px]"
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
        </div>
    )
}

export default Screen4
