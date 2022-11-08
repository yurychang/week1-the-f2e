import { ReactNode } from 'react'

const variants = {
    primary: 'btn-primary',
}

const Button = ({
    size = 'md',
    variant = 'primary',
    children,
    ...props
}: {
    size?: 'md'
    variant?: keyof typeof variants
    children: ReactNode
}) => {
    return (
        <button
            className={`btn ${variants[variant]} min-h-0 h-auto leading-5 px-2 py-1 rounded`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
