import { useEffect, useRef } from 'react'
import el from '@master/style-element.react'
import OutlineText from 'components/OutlineText'
import { ReactComponent as CoolEmoji } from 'images/cool-emoji.svg'

const Card = el.div`w-[1010px] h-[737px] shadow-xl bg-white p-6 overflow-hidden`

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
            <Card
                ref={cardRef}
                className="mt-[880px] mx-auto"
                style={{
                    transform: 'translate(200px) matrix(1, -0.2, 0, 1, 0, 0)',
                }}
            >
                <h2 className="absolute-center whitespace-nowrap text-[54px]">
                    羨慕別人的酷酷網頁動畫？
                </h2>
                {Array(3)
                    .fill(null)
                    .map((_, i) => (
                        <OutlineText
                            key={i}
                            strokeColor="black"
                            className="text-[260px] leading-[0.9] opacity-30"
                        >
                            Cool Cool
                        </OutlineText>
                    ))}
            </Card>
        </div>
    )
}

export default Screen2
