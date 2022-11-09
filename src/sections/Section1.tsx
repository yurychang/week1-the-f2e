import { useEffect, useState, ComponentProps, forwardRef } from 'react'
import el from '@master/style-element.react'
import useStore from 'store'
import StackContent from 'components/StackContent'
import StrokeText from 'components/StrokeText'

const Container = el.div`relative h-screen w-screen overflow-hidden select-none transition-colors duration-500`

const GridLine = el.div`absolute top-[3%] bottom-[3%] left-0 w-[1px] bg-white opacity-30 transition-transform duration-500`

const animState: {
    [key: string]: {
        bg: string
        stackDirection: ComponentProps<typeof StackContent>['direction']
        bgLineOffset: number
        primaryStroke: string
        normalStroke: string
        primaryText: string
        normalText: string
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
    },
    1: {
        bg: 'bg-dark',
        stackDirection: 'v',
        bgLineOffset: 100,
        primaryStroke: 'white',
        normalStroke: 'white',
        primaryText: 'text-transparent',
        normalText: 'text-transparent',
    },
    2: {
        bg: 'bg-light',
        stackDirection: '',
        bgLineOffset: 100,
        primaryStroke: 'black',
        normalStroke: 'black',
        primaryText: 'text-transparent',
        normalText: 'text-transparent',
    },
    3: {
        bg: 'bg-light',
        stackDirection: '',
        bgLineOffset: 100,
        primaryStroke: 'hsl(var(--p))',
        normalStroke: 'black',
        primaryText: 'text-primary',
        normalText: 'text-black',
    },
}

const Section1 = forwardRef<HTMLDivElement>((p, ref) => {
    const setBgColor = useStore((state) => state.setBgColor)

    const [step, setStep] = useState<number>(0)

    const anim = animState[step as keyof typeof animState]

    useEffect(() => {
        let id: ReturnType<typeof setTimeout>

        setTimeout(() => {
            setStep(1)
        }, 0)

        id = setTimeout(() => {
            setStep(2)
            setBgColor('light')
        }, 1000)

        return () => {
            id && clearTimeout(id)
        }
    }, [setBgColor])

    const handleTransitionEnd = () => {
        if (step === 2) {
            setStep(3)
        }
    }

    const bgLines = Array(5)
        .fill(undefined)
        .map((_, i) => (
            <GridLine
                key={i}
                style={{
                    transform: `translateX(${
                        (i + 1) * 17 + anim.bgLineOffset
                    }vw)`,
                }}
            />
        ))

    return (
        <Container ref={ref as any} className={`${anim.bg}`}>
            {bgLines}
            <StackContent
                direction={anim.stackDirection}
                repeat={6}
                offset={[35, 18]}
                onTransitionEnd={handleTransitionEnd}
                className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[270px]"
            >
                <StrokeText
                    as="span"
                    strokeColor={anim.primaryStroke}
                    className={`transition-colors duration-500 ${anim.primaryText}`}
                >
                    The F2E
                </StrokeText>{' '}
                <StrokeText
                    as="span"
                    strokeColor={anim.normalStroke}
                    className={`transition-colors duration-500 ${anim.normalText}`}
                >
                    4th
                </StrokeText>
            </StackContent>
            <StackContent
                direction={anim.stackDirection}
                repeat={6}
                offset={[35, 18]}
                onTransitionEnd={handleTransitionEnd}
                className="!absolute top-1/2 left-1/2 font-bold text-[122px]"
                style={{
                    transform: 'translate(-50%, -50%) translate(200px, 180px)',
                }}
            >
                <StrokeText
                    as="span"
                    strokeColor={anim.primaryStroke}
                    className={`transition-colors duration-500 ${anim.primaryText}`}
                >
                    互動式
                </StrokeText>{' '}
                <StrokeText
                    as="span"
                    strokeColor={anim.normalStroke}
                    className={`transition-colors duration-500 ${anim.normalText}`}
                >
                    網頁設計
                </StrokeText>
            </StackContent>
        </Container>
    )
})

export default Section1
