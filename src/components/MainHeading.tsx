import { useEffect, useState, ComponentProps } from 'react'
import StackContent from './StackContent'
import StrokeText from './StrokeText'
import el from './styleEl'

const Container = el.div`relative h-screen w-screen overflow-hidden select-none`

const MainHeading = ({ start }: { start?: Boolean }) => {
    const [step, setStep] = useState<number>(0)
    const [isDone, setIsDone] = useState(false)

    let bg: string,
        stackDirection: ComponentProps<typeof StackContent>['direction']
    switch (step) {
        case 0:
            bg = 'dark'
            stackDirection = 'h'
            break
        case 1:
            bg = 'dark'
            stackDirection = 'v'
            break
        case 2:
            bg = 'light'
            break

        default:
            bg = 'dark'
            stackDirection = ''
            break
    }

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
            className={`${bg === 'light' ? 'bg-light' : 'bg-dark'}`}
            style={{
                transition: 'background .6s cubic-bezier(0, 0, .6, 1)',
            }}
        >
            <StackContent
                direction={stackDirection}
                repeat={6}
                offset={[35, 18]}
                onTransitionEnd={handleTransitionEnd}
                className="!absolute top-1/2 left-1/2 text-[270px]"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <StrokeText
                    as="span"
                    strokeColor={
                        isDone ? '#F1CB04' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={isDone ? 'text-primary' : 'text-transparent'}
                    style={{
                        transition:
                            'color .6s cubic-bezier(0, 0, .6, 1), -webkit-text-stroke-color .6s cubic-bezier(0, 0, .6, 1)',
                    }}
                >
                    The F2E
                </StrokeText>{' '}
                <StrokeText
                    as="span"
                    strokeColor={
                        isDone ? 'black' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={isDone ? 'text-black' : 'text-transparent'}
                    style={{
                        transition:
                            'color .6s cubic-bezier(0, 0, .6, 1), -webkit-text-stroke-color .6s cubic-bezier(0, 0, .6, 1)',
                    }}
                >
                    4th
                </StrokeText>
            </StackContent>
            <StackContent
                direction={stackDirection}
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
                        isDone ? '#F1CB04' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={isDone ? 'text-primary' : 'text-transparent'}
                    style={{
                        transition:
                            'color .6s cubic-bezier(0, 0, .6, 1), -webkit-text-stroke-color .6s cubic-bezier(0, 0, .6, 1)',
                    }}
                >
                    互動式
                </StrokeText>{' '}
                <StrokeText
                    as="span"
                    strokeColor={
                        isDone ? 'black' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={isDone ? 'text-black' : 'text-transparent'}
                    style={{
                        transition:
                            'color .6s cubic-bezier(0, 0, .6, 1), -webkit-text-stroke-color .6s cubic-bezier(0, 0, .6, 1)',
                    }}
                >
                    網頁設計
                </StrokeText>
            </StackContent>
        </Container>
    )
}

export default MainHeading
