import classNames from 'classnames'
import { HTMLAttributes, ElementType } from 'react'

const OutlineText = ({
    as: Comp = 'div',
    strokeWidth = 1,
    strokeColor = '#000',
    className,
    style,
    children,
    ...props
}: {
    as?: ElementType
    strokeWidth?: number
    strokeColor?: string
} & HTMLAttributes<any>) => {
    return (
        <Comp
            style={{
                WebkitTextStrokeWidth: strokeWidth,
                WebkitTextStrokeColor: strokeColor,
                ...style,
            }}
            className={classNames('text-transparent', className)}
            {...props}
        >
            {children}
        </Comp>
    )
}

export default OutlineText
