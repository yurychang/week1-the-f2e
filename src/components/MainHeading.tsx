import { useEffect, useState, ComponentProps } from 'react'
import StackContent from './StackContent'
import StrokeText from './StrokeText'
import el from './styleEl'

const Container = el.div`relative h-screen w-screen overflow-hidden select-none`

const animState: {
    [key: string]: {
        bg: string
        stackDirection: ComponentProps<typeof StackContent>['direction']
    }
} = {
    0: {
        bg: 'dark',
        stackDirection: 'h',
    },
    1: {
        bg: 'dark',
        stackDirection: 'v',
    },
    2: {
        bg: 'light',
        stackDirection: '',
    },
}

const MainHeading = ({ start }: { start?: Boolean }) => {
    const [step, setStep] = useState<number>(0)
    const [isDone, setIsDone] = useState(false)

    const anim = animState[step as keyof typeof animState]

    useEffect(() => {
        let id: ReturnType<typeof setTimeout>

        if (start) {
            setTimeout(() => {
                setStep(1)
            }, 0)

            id = setTimeout(() => {
                setStep(2)
            }, 1500)
        }

        return () => {
            id && clearTimeout(id)
        }
    }, [start])

    const handleTransitionEnd = () => {
        if (step === 2) {
            setIsDone(true)
        }
    }

    return (
        <Container
            className={`${anim.bg === 'light' ? 'bg-light' : 'bg-dark'}`}
            style={{
                transition: 'background .6s cubic-bezier(0, 0, .6, 1)',
            }}
        >
            <StackContent
                direction={anim.stackDirection}
                repeat={6}
                offset={[35, 18]}
                onTransitionEnd={handleTransitionEnd}
                className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[270px]"
            >
                <StrokeText
                    as="span"
                    strokeColor={
                        isDone
                            ? '#F1CB04'
                            : anim.bg === 'dark'
                            ? 'white'
                            : 'black'
                    }
                    className={`transition-colors duration-500 ${
                        isDone ? 'text-primary' : 'text-transparent'
                    }`}
                >
                    The F2E
                </StrokeText>{' '}
                <StrokeText
                    as="span"
                    strokeColor={
                        isDone
                            ? 'black'
                            : anim.bg === 'dark'
                            ? 'white'
                            : 'black'
                    }
                    className={`transition-colors duration-500 ${
                        isDone ? 'text-black' : 'text-transparent'
                    }`}
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
                    strokeColor={
                        isDone
                            ? '#F1CB04'
                            : anim.bg === 'dark'
                            ? 'white'
                            : 'black'
                    }
                    className={`transition-colors duration-500 ${
                        isDone ? 'text-primary' : 'text-transparent'
                    }`}
                >
                    互動式
                </StrokeText>{' '}
                <StrokeText
                    as="span"
                    strokeColor={
                        isDone
                            ? 'black'
                            : anim.bg === 'dark'
                            ? 'white'
                            : 'black'
                    }
                    className={`transition-colors duration-500 ${
                        isDone ? 'text-black' : 'text-transparent'
                    }`}
                >
                    網頁設計
                </StrokeText>
            </StackContent>
        </Container>
    )
}

export default MainHeading
