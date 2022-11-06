import classNames from 'classnames'
import { ReactNode, useEffect, useState, HTMLAttributes } from 'react'
import el from '../styledEl'

import css from './MainTitle.module.css'

const Container = el.div`relative h-screen w-screen overflow-hidden select-none`

const Text = ({
    children,
    endColor,
    bg,
    done,
    ...props
}: {
    children: ReactNode
    endColor: string
    bg: 'dark' | 'light'
    done: boolean
} & HTMLAttributes<HTMLSpanElement>) => (
    <span
        style={{
            color: done ? endColor : 'transparent',
            WebkitTextStrokeColor: done
                ? endColor
                : bg === 'dark'
                ? 'white'
                : 'black',
            transition:
                'color .6s cubic-bezier(0, 0, .6, 1), -webkit-text-stroke-color .6s cubic-bezier(0, 0, .6, 1)',
        }}
        {...props}
    >
        {children}
    </span>
)

const Title = ({
    children,
    mode,
    offset,
    repeat = 1,
    className,
    ...props
}: {
    children: ReactNode
    mode: string
    repeat?: number
    offset: [number, number]
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={classNames('relative inline-block', className)}
            {...props}
        >
            {Array(repeat)
                .fill(undefined)
                .map((_, i) => (
                    <div
                        key={i}
                        className={css.title}
                        style={{
                            position: !!i ? 'absolute' : 'relative',
                            top: 0,
                            left: 0,
                            transform:
                                mode === 'v'
                                    ? `translateY(-80px) matrix(1, -0.22, 0, 0.98, 0, 0) translateY(calc(${
                                          i * offset[1]
                                      }px))`
                                    : mode === 'h'
                                    ? `matrix(1, -0.22, 0, 0.98, 0, 0) translateX(calc(${
                                          i * offset[0]
                                      }px))`
                                    : `translateY(-80px) matrix(1, -0.22, 0, 0.98, 0, 0)`,
                        }}
                    >
                        {children}
                    </div>
                ))}
        </div>
    )
}

const MainTitle = () => {
    const [mode, setMode] = useState('h')
    const [done, setDone] = useState(false)

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
            style={{
                background: !mode ? 'white' : '#333',
                transition: 'background .6s cubic-bezier(0, 0, .6, 1)',
            }}
        >
            <Title
                mode={mode}
                repeat={6}
                offset={[35, 18]}
                onTransitionEnd={handleTransitionEnd}
                className="!absolute top-1/2 left-1/2"
                style={{
                    fontSize: '270px',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Text
                    bg={!mode ? 'light' : 'dark'}
                    done={done}
                    endColor="#F1CB04"
                >
                    The F2E
                </Text>{' '}
                <Text
                    bg={!mode ? 'light' : 'dark'}
                    done={done}
                    endColor="black"
                >
                    4th
                </Text>
            </Title>
            <Title
                mode={mode}
                repeat={6}
                offset={[35, 18]}
                onTransitionEnd={handleTransitionEnd}
                className="!absolute top-1/2 left-1/2"
                style={{
                    fontSize: '122px',
                    transform: 'translate(-50%, -50%) translate(200px, 180px)',
                }}
            >
                <Text
                    bg={!mode ? 'light' : 'dark'}
                    done={done}
                    endColor="#F1CB04"
                >
                    互動式
                </Text>{' '}
                <Text
                    bg={!mode ? 'light' : 'dark'}
                    done={done}
                    endColor="black"
                >
                    網頁設計
                </Text>
            </Title>
        </Container>
    )
}

export default MainTitle
