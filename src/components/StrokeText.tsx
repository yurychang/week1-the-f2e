import { HTMLAttributes, ComponentType } from 'react'

const StrokeText = ({
    as: Comp = 'div',
    strokeWidth = 1,
    strokeColor = '#000',
    style,
    children,
    ...props
}: {
    as?: keyof JSX.IntrinsicElements | ComponentType
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

export default StrokeText
