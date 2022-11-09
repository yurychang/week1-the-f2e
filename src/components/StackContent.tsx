import classNames from 'classnames'
import { ReactNode, HTMLAttributes } from 'react'

const StackContent = ({
    children,
    direction,
    offset = [0, 0],
    repeat = 1,
    duration = '.75s',
    className,
    ...props
}: {
    direction?: 'v' | 'h' | ''
    offset?: [number, number]
    repeat?: number
    duration?: string
    children: ReactNode
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
                        className="whitespace-nowrap text-transparent opacity-70 transition-transform"
                        style={{
                            position: !!i ? 'absolute' : 'relative',
                            top: 0,
                            left: 0,
                            transform:
                                direction === 'v'
                                    ? `translate(30px, -60px) matrix(1, -0.22, 0, 0.98, 0, 0) translateY(calc(${
                                          i * offset[1]
                                      }px))`
                                    : direction === 'h'
                                    ? `matrix(1, -0.22, 0, 0.98, 0, 0) translateX(calc(${
                                          i * offset[0]
                                      }px))`
                                    : `translate(30px, -60px) matrix(1, -0.22, 0, 0.98, 0, 0)`,
                            transitionDuration: duration,
                        }}
                    >
                        {children}
                    </div>
                ))}
        </div>
    )
}

export default StackContent
