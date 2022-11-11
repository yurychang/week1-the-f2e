import { useEffect, useRef } from 'react'
import { ReactComponent as CoolEmoji } from 'images/cool-emoji.svg'
import QuestionCard from 'components/QuestionCard'

const Screen2 = () => {
    const tl = useRef<gsap.core.Timeline | null>(null)
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const emoji1Ref = useRef(null)
    const emoji2Ref = useRef(null)
    const emoji3Ref = useRef(null)

    useEffect(() => {
        tl.current = gsap
            .timeline()
            .to(containerRef.current, {
                backgroundColor: '#FFF1AA',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=700',
                    scrub: true,
                },
            })
            .to(cardRef.current, {
                transform: 'matrix(1, 0, 0, 1, 0, 0)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=700',
                    scrub: true,
                },
            })
            .to(emoji1Ref.current, {
                translateY: -220,
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=700',
                    scrub: true,
                },
            })
            .to(emoji2Ref.current, {
                translateY: -600,
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=300 top',
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
                    start: 'top+=300 top',
                    end: '+=400',
                    scrub: true,
                },
            })
        return () => {
            tl.current?.progress(0).kill()
        }
    }, [])

    return (
        <div ref={containerRef} className="relative overflow-hidden bg-light">
            <CoolEmoji
                ref={emoji1Ref}
                width="220px"
                className="absolute-x-center top-full z-10 drop-shadow-xl opacity-0"
            />
            <CoolEmoji
                ref={emoji2Ref}
                width="200px"
                className="absolute-x-center !left-[calc(50%-505px)] top-full z-10 rotate-[-30deg] drop-shadow-xl opacity-0"
            />
            <CoolEmoji
                ref={emoji3Ref}
                width="200px"
                className="absolute-x-center !left-[calc(50%+605px)] top-full z-10 rotate-[20deg] drop-shadow-xl opacity-0"
            />
            <div
                ref={cardRef}
                className="mt-[880px]"
                style={{
                    transform: 'translate(200px) matrix(1, -0.2, 0, 1, 0, 0)',
                }}
            >
                <QuestionCard
                    question="羨慕別人的酷酷網頁動畫？"
                    bgText={<>Cool Cool Cool Cool Cool Cool</>}
                    className="mx-auto"
                />
            </div>
        </div>
    )
}

export default Screen2
