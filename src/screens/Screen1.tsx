import {
    useState,
    ComponentProps,
    ReactNode,
    useRef,
    useLayoutEffect,
} from 'react'
import { MdOutlineArrowDownward } from 'react-icons/md'
import { BsPlay } from 'react-icons/bs'
import gsap from 'gsap'
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent'
import el from '@master/style-element.react'
import useStore from 'store'
import StackContent from 'components/StackContent'
import OutlineText from 'components/OutlineText'

const Container = el.div`relative h-screen w-full overflow-hidden select-none transition-colors duration-[.75s]`

const GridLine = el.div`absolute top-[3%] bottom-[3%] left-0 w-[1px] bg-white opacity-30 transition-transform duration-500`

const Tip = el.div`fixed right-[32px] bottom-[32px] z-50 flex items-center transition-colors`

const animState: {
    [key: string]: {
        bg: string
        stackDirection: ComponentProps<typeof StackContent>['direction']
        bgLineOffset: number
        primaryStroke: string
        normalStroke: string
        primaryText: string
        normalText: string
        tipClass: string
        tip: ReactNode
    }
} = {
    0: {
        bg: 'bg-dark',
        stackDirection: 'h',
        bgLineOffset: 0,
        primaryStroke: 'white',
        normalStroke: 'white',
        primaryText: 'text-transparent',
        normalText: 'text-transparent',
        tipClass: 'text-light',
        tip: (
            <>
                Click to start
                <BsPlay className="ml-2" />
            </>
        ),
    },
    1: {
        bg: 'bg-dark',
        stackDirection: 'v',
        bgLineOffset: 100,
        primaryStroke: 'white',
        normalStroke: 'white',
        primaryText: 'text-transparent',
        normalText: 'text-transparent',
        tipClass: 'text-white opacity-30',
        tip: (
            <>
                Scroll down
                <MdOutlineArrowDownward className="ml-2" />
            </>
        ),
    },
    2: {
        bg: 'bg-light',
        stackDirection: '',
        bgLineOffset: 100,
        primaryStroke: 'black',
        normalStroke: 'black',
        primaryText: 'text-transparent',
        normalText: 'text-transparent',
        tipClass: 'text-black opacity-30',
        tip: (
            <>
                Scroll down
                <MdOutlineArrowDownward className="ml-2" />
            </>
        ),
    },
    3: {
        bg: 'bg-light',
        stackDirection: '',
        bgLineOffset: 100,
        primaryStroke: 'hsl(var(--p))',
        normalStroke: 'black',
        primaryText: 'text-primary',
        normalText: 'text-black',
        tipClass: 'text-black opacity-30',
        tip: (
            <>
                Scroll down
                <MdOutlineArrowDownward className="ml-2" />
            </>
        ),
    },
}

const Section1 = () => {
    const globalTl = useStore((state) => state.globalTl)
    const setBgColor = useStore((state) => state.setBgColor)

    const containerRef = useRef(null)
    const tipRef = useRef(null)

    const [step, setStep] = useState<number>(0)

    const state = animState[step as keyof typeof animState]

    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden'

        const tl = gsap
            .timeline()
            .call(() => setStep(1))
            .call(
                () => {
                    setStep(2)
                    setBgColor('light')
                },
                [],
                0.75
            )
            .call(() => setStep(3), [], 1.5)
            .call(
                () => {
                    document.body.style.overflow = 'auto'
                },
                [],
                2
            )
            .to(tipRef.current, {
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=500',
                    scrub: true,
                },
            })
            .to(containerRef.current, {
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=500',
                    scrub: true,
                },
            })

        globalTl.add(tl)

        return () => {
            tl.progress(0).kill()
        }
    }, [globalTl, setBgColor])

    const onGlobalWheel = useGlobalEvent('wheel', { passive: false })
    onGlobalWheel((e) => step !== 3 && e.preventDefault())

    const bgLines = Array(5)
        .fill(undefined)
        .map((_, i) => (
            <GridLine
                key={i}
                style={{
                    transform: `translateX(${
                        (i + 1) * 17 + state.bgLineOffset
                    }vw)`,
                }}
            />
        ))

    const handleClick = () => {
        globalTl.play()
    }

    return (
        <Container
            ref={containerRef}
            className={`${state.bg}`}
            onClick={handleClick}
        >
            <div ref={tipRef}>
                <Tip className={state.tipClass}>{state.tip}</Tip>
            </div>
            {bgLines}
            <StackContent
                direction={state.stackDirection}
                repeat={6}
                offset={[35, 18]}
                className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[270px]"
            >
                <OutlineText
                    as="span"
                    strokeColor={state.primaryStroke}
                    className={`transition-colors duration-500 ${state.primaryText}`}
                >
                    The F2E
                </OutlineText>{' '}
                <OutlineText
                    as="span"
                    strokeColor={state.normalStroke}
                    className={`transition-colors duration-500 ${state.normalText}`}
                >
                    4th
                </OutlineText>
            </StackContent>
            <StackContent
                direction={state.stackDirection}
                repeat={6}
                offset={[35, 18]}
                className="!absolute top-1/2 left-1/2 font-bold text-[122px]"
                style={{
                    transform: 'translate(-50%, -50%) translate(200px, 180px)',
                }}
            >
                <OutlineText
                    as="span"
                    strokeColor={state.primaryStroke}
                    className={`transition-colors duration-500 ${state.primaryText}`}
                >
                    互動式
                </OutlineText>{' '}
                <OutlineText
                    as="span"
                    strokeColor={state.normalStroke}
                    className={`transition-colors duration-500 ${state.normalText}`}
                >
                    網頁設計
                </OutlineText>
            </StackContent>
        </Container>
    )
}

export default Section1
