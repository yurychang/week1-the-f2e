import { useEffect, useState } from 'react'
import StackContent from './StackContent'
import StrokeText from './StrokeText'
import el from './styleEl'

const Container = el.div`relative h-screen w-screen overflow-hidden select-none`

const MainTitle = () => {
    const [mode, setMode] = useState<any>('h')
    const [done, setDone] = useState(false)
    const bg = !mode ? 'light' : 'dark'

    useEffect(() => {
        const id = setTimeout(() => {
            setMode('v')
        }, 1000)

        const id2 = setTimeout(() => {
            setMode('')
        }, 2500)

        return () => {
            clearTimeout(id)
            clearTimeout(id2)
        }
    }, [])

    const handleTransitionEnd = () => {
        if (!mode) {
            setDone(true)
        }
    }

    return (
        <Container
            className={`${!mode ? 'bg-light' : 'bg-dark'}`}
            style={{
                transition: 'background .6s cubic-bezier(0, 0, .6, 1)',
            }}
        >
            <StackContent
                direction={mode}
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
                        done ? '#F1CB04' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={done ? 'text-primary' : 'text-transparent'}
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
                        done ? 'black' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={done ? 'text-black' : 'text-transparent'}
                    style={{
                        transition:
                            'color .6s cubic-bezier(0, 0, .6, 1), -webkit-text-stroke-color .6s cubic-bezier(0, 0, .6, 1)',
                    }}
                >
                    4th
                </StrokeText>
            </StackContent>
            <StackContent
                direction={mode}
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
                        done ? '#F1CB04' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={done ? 'text-primary' : 'text-transparent'}
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
                        done ? 'black' : bg === 'dark' ? 'white' : 'black'
                    }
                    className={done ? 'text-black' : 'text-transparent'}
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

export default MainTitle
