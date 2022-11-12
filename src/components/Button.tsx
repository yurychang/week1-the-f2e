import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import el from '@master/style-element.react'
import classNames from 'classnames'

const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
}

const BaseBtn = el.button`btn min-h-0 h-auto leading-5 px-2 py-1 rounded`

const Button = ({
    size = 'md',
    variant = 'primary',
    block,
    children,
    className,
    ...props
}: {
    size?: 'md' | 'lg'
    variant?: keyof typeof variants
    block?: boolean
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <BaseBtn
            className={classNames(
                variants[variant],
                block && 'btn-block',
                className
            )}
            {...props}
        >
            {children}
        </BaseBtn>
    )
}

export default Button
