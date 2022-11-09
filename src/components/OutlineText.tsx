import { HTMLAttributes, ElementType } from 'react'

const OutlineText = ({
    as: Comp = 'div',
    strokeWidth = 1,
    strokeColor = '#000',
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
            {...props}
        >
            {children}
        </Comp>
    )
}

export default OutlineText
