import { useEffect, useRef } from 'react'
import { ReactComponent as WishEmoji } from 'images/wish-emoji.svg'
import QuestionCard from 'components/QuestionCard'

const Screen3 = () => {
    const tl = useRef<gsap.core.Timeline | null>(null)
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const emoji1Ref = useRef(null)
    const emoji2Ref = useRef(null)
    const emoji3Ref = useRef(null)

    useEffect(() => {
        tl.current = gsap
            .timeline()
            .to(cardRef.current, {
                transform: 'matrix(1, 0, 0, 1, 0, 0)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=200 bottom',
                    end: '+=700',
                    scrub: true,
                },
            })
            .to(emoji1Ref.current, {
                translateY: -300,
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
        return () => {
            tl.current?.progress(0).kill()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden bg-primary-light"
        >
            <WishEmoji
                ref={emoji1Ref}
                width="220px"
                className="absolute-x-center top-full z-10 drop-shadow-xl opacity-0"
            />
            <WishEmoji
                ref={emoji2Ref}
                width="200px"
                className="absolute-x-center !left-[calc(50%-505px)] top-full z-10 rotate-[-30deg] drop-shadow-xl opacity-0"
            />
            <WishEmoji
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
                    question="滿足不了同事的許願？"
                    bgText={<>Wish Wish Wish Wish Wish Wish</>}
                    className="mx-auto"
                />
            </div>
        </div>
    )
}

export default Screen3
