import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import OutlineText from 'components/OutlineText'
import { ReactComponent as Horray } from 'assets/horray.svg'
import useStore from 'store'

const Challenge = () => {
    const setBgColor = useStore((s) => s.setBgColor)

    const containerRef = useRef(null)
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const horrayRef = useRef(null)
    const page2Ref = useRef(null)
    const overlayRef = useRef(null)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                pinSpacing: false,
                scrub: true,
                onEnter: () => setBgColor('dark'),
                onLeaveBack: () => setBgColor('light'),
            },
        })
            .to(text1Ref.current, {}, 2)
            .addLabel('start')
            .to(
                text1Ref.current,
                {
                    translateX: 0,
                    opacity: 1,
                },
                2
            )
            .to(
                text2Ref.current,
                {
                    translateX: 0,
                    opacity: 1,
                },
                '<'
            )
            .to(
                horrayRef.current,
                {
                    translateY: 0,
                    opacity: 1,
                },
                '<'
            )
            .addLabel('mid')
            .to(overlayRef.current, {
                opacity: 1,
            })
            .to(
                page2Ref.current,
                {
                    translateY: '-100%',
                    opacity: 1,
                },
                '<'
            )
            .addLabel('end')
    }, [setBgColor])

    return (
        <>
            <div
                ref={containerRef}
                className="relative h-screen w-screen flex flex-col justify-center bg-dark"
            >
                <OutlineText
                    strokeColor="hsl(var(--p))"
                    className="text-center text-[270px] font-bold"
                >
                    網頁設計
                </OutlineText>
                <div className="-mt-[200px] text-center font-bold text-[122px] text-primary">
                    互動式
                </div>
                <div className="mt-8 text-center text-[54px] text-light">
                    兩個角色進行攜手合作
                </div>
                <div className="relative mt-[70px] flex justify-center items-center">
                    <div
                        ref={text1Ref}
                        className="w-[610px] text-right text-[122px] font-bold -translate-x-full opacity-0"
                    >
                        <span className=" mr-5 text-primary">UI</span>
                        <OutlineText as="span" strokeColor="hsl(var(--p))">
                            設計師
                        </OutlineText>
                    </div>
                    <Horray
                        ref={horrayRef}
                        className="mx-4 translate-y-full opacity-0"
                    />
                    <div
                        ref={text2Ref}
                        className="text-[122px] font-bold translate-x-full opacity-0"
                    >
                        <span className=" text-primary">前端</span>
                        <OutlineText as="span" strokeColor="hsl(var(--p))">
                            工程師
                        </OutlineText>
                    </div>
                </div>
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-dark opacity-0"
                ></div>
                <div
                    ref={page2Ref}
                    className="absolute h-screen w-screen top-full z-20 flex flex-col justify-center opacity-0"
                >
                    <OutlineText
                        strokeColor="hsl(var(--p))"
                        className="text-center text-[122px] font-bold leading-snug"
                    >
                        年度最強合作
                        <br />
                        🤘<span className="text-primary">三大主題</span>
                        來襲🤘
                    </OutlineText>
                    <div className="mt-[70px] text-center text-[54px] text-light opacity-70">
                        各路廠商強強聯手，
                        <br />
                        共同設計出接地氣的網頁互動挑戰關卡
                    </div>
                </div>
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </>
    )
}

export default Challenge
