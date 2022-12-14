import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactComponent as CoolEmoji } from 'assets/cool-emoji.svg'
import QuestionCard from 'components/QuestionCard'

const Question1 = () => {
    const tl = useRef<gsap.core.Timeline | null>(null)
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const emoji1Ref = useRef(null)
    const emoji2Ref = useRef(null)
    const emoji3Ref = useRef(null)

    useEffect(() => {
        tl.current = gsap
            .timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
            })
            .to(containerRef.current, {
                backgroundColor: '#FFF1AA',
            })
            .to(
                cardRef.current,
                {
                    transform: 'matrix(1, 0, 0, 1, 0, 0)',
                },
                '<'
            )
            .to(
                emoji1Ref.current,
                {
                    translateY: -220,
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
        return () => {
            tl.current?.progress(0).kill()
        }
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-light"
        >
            <CoolEmoji
                ref={emoji1Ref}
                width="220px"
                className="absolute-x-center top-full z-10 drop-shadow-xl opacity-0"
            />
            <CoolEmoji
                ref={emoji2Ref}
                width="200px"
                className="absolute left-[calc(50%-605px)] top-full z-10 rotate-[-30deg] drop-shadow-xl opacity-0"
            />
            <CoolEmoji
                ref={emoji3Ref}
                width="200px"
                className="absolute left-[calc(50%+505px)] top-full z-10 rotate-[20deg] drop-shadow-xl opacity-0"
            />
            <div
                ref={cardRef}
                className="mt-[880px]"
                style={{
                    transform: 'translate(200px) matrix(1, -0.2, 0, 1, 0, 0)',
                }}
            >
                <QuestionCard
                    question="????????????????????????????????????"
                    bgText={<>Cool Cool Cool Cool Cool Cool</>}
                    className="mx-auto"
                />
            </div>
        </section>
    )
}

export default Question1
