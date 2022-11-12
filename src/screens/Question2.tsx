import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactComponent as WishEmoji } from 'assets/wish-emoji.svg'
import QuestionCard from 'components/QuestionCard'

const Question2 = () => {
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const emoji1Ref = useRef(null)
    const emoji2Ref = useRef(null)
    const emoji3Ref = useRef(null)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top+=200 bottom',
                end: 'bottom bottom',
                scrub: true,
            },
        })
            .to(cardRef.current, {
                transform: 'matrix(1, 0, 0, 1, 0, 0)',
            })
            .to(
                emoji1Ref.current,
                {
                    translateY: -300,
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
                className="absolute left-[calc(50%-605px)] top-full z-10 rotate-[-30deg] drop-shadow-xl opacity-0"
            />
            <WishEmoji
                ref={emoji3Ref}
                width="200px"
                className="absolute left-[calc(50%+505px)] top-full z-10 rotate-[20deg] drop-shadow-xl opacity-0"
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

export default Question2
