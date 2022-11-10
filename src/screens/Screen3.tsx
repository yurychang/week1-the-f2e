import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import el from '@master/style-element.react'
import OutlineText from 'components/OutlineText'
import { ReactComponent as WishEmoji } from 'images/wish-emoji.svg'

const Card = el.div`w-[1010px] h-[737px] shadow-xl bg-white p-6 overflow-hidden`

const Section2 = () => {
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
                translateX: -300,
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
            className="relative h-screen overflow-hidden bg-primary-light"
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
                className="absolute-x-center !left-[calc(50%+705px)] top-full z-10 rotate-[20deg] drop-shadow-xl opacity-0"
            />
            <div className="absolute-x-center bottom-0">
                <Card
                    ref={cardRef}
                    style={{
                        transform:
                            'translate(200px, 0) matrix(1, -0.2, 0, 1, 0, 0)',
                    }}
                >
                    <h2 className="absolute-center whitespace-nowrap text-[54px]">
                        滿足不了同事的許願？
                    </h2>
                    {Array(3)
                        .fill(null)
                        .map((_, i) => (
                            <OutlineText
                                key={i}
                                strokeColor="black"
                                className="text-[220px] leading-[1.1] opacity-30"
                            >
                                Wish Wish
                            </OutlineText>
                        ))}
                </Card>
            </div>
        </div>
    )
}

export default Section2
