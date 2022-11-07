import classNames from 'classnames'
import { ReactNode, HTMLAttributes } from 'react'

const StackContent = ({
    children,
    direction,
    offset,
    repeat = 1,
    className,
    ...props
}: {
    children: ReactNode
    direction?: 'v' | 'h' | ''
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
                        className="whitespace-nowrap text-transparent opacity-70"
                        style={{
                            position: !!i ? 'absolute' : 'relative',
                            top: 0,
                            left: 0,
                            transform:
                                direction === 'v'
                                    ? `translateY(-80px) matrix(1, -0.22, 0, 0.98, 0, 0) translateY(calc(${
                                          i * offset[1]
                                      }px))`
                                    : direction === 'h'
                                    ? `matrix(1, -0.22, 0, 0.98, 0, 0) translateX(calc(${
                                          i * offset[0]
                                      }px))`
                                    : `translateY(-80px) matrix(1, -0.22, 0, 0.98, 0, 0)`,
                            transition:
                                'transform 0.6s cubic-bezier(0, 0, 0.6, 1)',
                        }}
                    >
                        {children}
                    </div>
                ))}
        </div>
    )
}

export default StackContent
